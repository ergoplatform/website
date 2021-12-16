---
title: "Towards Ergo v5.0: JIT costing"
date: 2021-12-15T16:02:39.774Z
author: Ergo Foundation
authorPhoto: /img/uploads/1762.png
blogPhoto: 
tags:
---
<!--StartFragment-->

## Introduction

In Ergo blockchain all crypto assets are stored in boxes protected by guarding conditions
(aka contracts). Every unspent box is protected by a script, which is stored in
the box itself as serialized [ErgoTree](https://ergoplatform.org/docs/ErgoTree.pdf). The
script should be evaluated as part of transaction validation to verify box's spending
conditions.

Script verification takes some time and system resources on every network node and thus
both the execution time and the resources need to be put under control. This is known as
cost estimation (or "costing").

Costing is necessary to prevent long delays in verification of new blocks by network
nodes. Both over-sized and over-expensive scripts may be exploited to attack the network
by exhausting resources of verifiers and slowing down network transaction throughput.

There are two general approaches to do cost control:
1) Ahead-Of-Time Costing (AOTC) - estimation of costs _before_ script execution, so that
over-expensive script is not executed at all.
2) Just-In-Time Costing (JITC) - accumulation of costs _during_ (i.e. in the process of)
   the actual execution of a script.

Ergo v5.0 will take advantage of both approaches so that verification of Ergo contracts is
done with a hybrid JIT+AOT cost control.

## AOT Costing

Current implementation of block validation in Ergo v4.x releases implements the first
approach (i.e. AOT costing) shown in the following figure.
![AOT](/img/blog/AOT-costing.png)

For each block, Ahead-of-Time cost estimation is done for every
[ErgoTree contract](https://ergoplatform.org/docs/ErgoTree.pdf) of every input box of every
transaction in the block. The total accumulated cost of all the input scripts in the
block is limited by the `MaxBlockCost` parameter which can be adjusted by miners via
voting. (_In fact, this parameter has steadily been increased by miners from initial 1
million up to the current 7+ millions_.)

A pool transaction is added to the block as long as it doesn't make the block's cost
greater than the `MaxBlockCost` limit. When the cost is within the limit the transaction
can be added to the block candidate after it passes validation and all input ErgoTrees are
evaluated to `true`.

AOT cost estimation predicts the cost of script execution ahead of time in a given
context. This approach is often used in blockchains with UTXO transaction model and a
simple [non-turing-complete](https://en.wikipedia.org/wiki/Turing_completeness) language
of smart contracts (i.e. a language of _limited expressiveness_).

The AOT method works under assumption that cost estimation of a script can be done
_much faster_ than the actual execution of the script. This is true for simple
non-turing-complete languages without looping operations (like [Bitcoin
script](https://en.bitcoin.it/wiki/Script)). Programs in such languages typically have
access to very simple transaction context and simple data types, hence the capabilities
are also very limited.

This approach has a number of advantages:
1) No need to decide on the appropriate value for `gasLimit` before sending a transaction,
because there is no such limit for each individual transaction.
2) The transaction sender doesn't lose money when the transaction is rejected (for example
when its cost has exceeded the cost limit).
3) Simple user-centric economy is possible, where user only need to pay the fixed
transaction fee, defined dynamically by the current network usage (supply/demand ratio).

However, [Extended
UTXO](https://github.com/Emurgo/Emurgo-Research/blob/master/smart-contracts/Unlocking%20The%20Potential%20Of%20The%20UTXO%20Model.md)
blockchains such as [Ergo](https://ergoplatform.org/en/) require more complex languages (such as
[ErgoTree](https://ergoplatform.org/docs/ErgoTree.pdf)) to reap the
[benefits](https://github.com/Emurgo/Emurgo-Research/blob/master/smart-contracts/High%20Level%20Design%20Patterns%20In%20Extended%20UTXO%20Systems.md)
of its much richer programming model.

As the result, ErgoTree, while remaining non-turing-complete, requires accessing a more
complex transaction data context (comparing to Bitcoin and classical UTXO blockchain)
which includes:
 a) a collections of input and output boxes and their registers;
 b) recent blockchain headers;
 c) context variables etc.

Adding _collections_ to the language (and hence, some looping operations) makes
AOT costing algorithm much more complex to implement and maintain. This results in
the limitations and drawbacks of using the AOT costing method.

## Drawbacks of AOT costing

Not let's discuss the reasons why AOT costing is not suitable for scripts executed in the
complex transaction context required by Extended UTXO blockchain.

1) **_AOT costing becomes complex and limits the language_**. 

   Simple implementation is only possible for a simple language ( with primitive types, no
   collections and simple transaction context). Element-wise collection operations (such as
   `map`, `filter`, `exists`, `forall` etc.) make implementation of AOT costing much more
   complex. Other operations, such as accessing collections elements by index (i.e.
   `OUTPUTS(1)`) have to be limited and allow only constant indexes (just for the sake of AOT
   costing).


3) **_AOT costing accuracy can be terrible_**. 

   We don't know the exact execution trace of the script ahead of time, in particular we
   cannot decide which branch of `if (condition) {...} else {...}` statement will be executed
   (since we cannot know ahead of time the result of the `condition` expression).
   As the result, AOT costing have to be pessimistic, estimate both branches and take the
   maximum as an approximation. This inherent approximation error is multiplied when the `if`
   statement is used inside collection operation (such as `map`). Thus, we may have an order
   of magnitude _over-costing_ of the actual execution cost, which leads to the next issue.


3) **_Limited scalability due to over-costing_**. 

   Inaccurate cost estimation together with pessimistic assumptions lead to limited number of
   transaction in a block. The total cost of all transactions in a block must not exceed
   `MaxBlockCost`. Thus, on average, we can put fewer transactions in the block than we could
   by using more accurate costing. The network throughput is thus limited by pessimistic
   assumptions of AOT costing.


5) **_Waste of node resources due to additional overhead_**. 

   To prevent _rare_ spam attacks all miners have to do extra computations for _every
   benign_ script. Unfortunately, complex implementation of AOT costing (for expressive
   ErgoTree language and rich transaction context) makes this overhead comparable to or even
   exceeding the execution of the scripts themselves (for all benign scripts). Yes, we can quickly reject
   high-cost SPAM scripts, but have to pay the double price every day.

There are other technical difficulties, drawbacks and contra arguments for using AOT
costing of contracts written in expressive language such as ErgoTree. However, 
the list above should already be enough to motivate development of a better alternative.

## JIT Costing

The new upcoming release v5.0 of Ergo node will use _hybrid_ costing
algorithm to protect the network from over-expensive transactions (aka SPAM transaction).

This hybridization naturally reflects the design on Ergo contracts, which are based on
Extened UTXO blockchain architecture and employ [Sigma state authenticated
language](https://github.com/ScorexFoundation/sigmastate-interpreter) as foundation of
ErgoScript.



An example of the JIT cost control (also called _dynamic_ cost control) is the Ethereum's
`gasLimit` checks performed during a transaction execution.

### New Costing of ErgoTree

Ethereum's contracts are compiled into bytecode instructions which are then executed by
Ethereum VM as part of transaction execution. Each instruction has the associated cost
(aka _gas_) and the cost of the whole executed transaction is accrued as instructions are executed
one by one until either transaction complete or `gasLimit` is reached. In the later case
the transaction is aborted and the `gasLimit * gasPrice` number of Wei is transferred to
the miner.

In contrast, Ergo's approach is more light-weight and does not require using a _stateful_ VM
to execute contracts. Instead, the contracts are evaluated using _stateless_ interpreter and
thus many contracts can be evaluated in parallel.

For each input box of the transaction being validated:
1) The contract (stored in a box) is deserialized into ErgoTree data structure ready
   for direct and efficient execution by the interpreter.
2) A special Context data structure is created and passed to the interpreter
3) Interpreter evaluates the given contract in the given context.

The operations above can be done in parallel for all inputs, this is because interpreter
never mutates (or changes) the blockchain state.
In addition, the interpreter doesn't have direct access to the blockchain, and rely
solely on the Context to evaluate contracts.

The interpreter of the ErgoTree `t` is extended to accumulate the execution cost
`t.accCost` during evaluation all the tree nodes, and it checks that `t.accCost <=
costLimit` at any time.
Thus, upon completion of ErgoTree reduction, the result is a pair `(R, C1)`,
where `R` is a _Sigma Protocol Proposition Tree_ and `C1 = t.accCost` is the cost
accumulated during script reduction.
The resulting Sigma Protocol Proposition `R` must be further verified against proofs of
knowledge provided during transaction signing. The cost `C2` of `R` verification is
approximated by an Ahead Of Time costing without performing time-consuming crypto
operations. The resulting value `C1 + C2` is checked against `costLimit`.

If at any time the accumulated cost exceeds `costLimit`, then an exception is thrown,
which is interpreted as an _over-limit script_ as the transaction is rejected.
