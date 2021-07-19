---
title: "Here’s how Ergo seeks to boost interoperability for Cardano’s eUTxO model "
date: 2021-04-08T06:42:02.715Z
author: Shiraz Jagati
authorPhoto: /img/uploads/shiraz_jagati.jpeg
blogPhoto: /img/uploads/frame-2.png
tags:
  - Building Ergo
---
Blockchain interoperability refers to the ability of different blockchain protocols to become compatible with one another. Achieving true blockchain interoperability among heterogeneous protocols is a prerequisite step for mainstream adoption of blockchain technology. This is true because many businesses are reluctant to build within a locked platform environment.

In this article, we are going to look at how Ergo platform will help in the interoperability of Cardano.

## Bitcoin’s flawed UTXO Model

The UTXO model has been in cryptocurrency since the conception of Bitcoin. The term UTXO relates to the amount of digital currency someone has left after executing a cryptocurrency transaction. The letters stand for unspent transaction output. In an affirmed transaction in a proven blockchain payment system, only unspent outputs can be used as inputs to a transaction. When a transaction occurs, inputs are deleted, and outputs are created as new UTXOs that may then be consumed in future transactions.

In the Bitcoin network, a UTXO is an amount that is conveyed to a Bitcoin address during a transaction. Consumed amounts are used independently through a transaction, and new outputs are created – one for the receiver and, if appropriate, one for the part that is left over. The value sent to the receiver becomes a new UTXO in the recipient’s address, while the change output becomes a new UTXO in the sender’s address that can be utilised in a future transaction.

Despite some tangible benefits of the UTXO model in its employment into a framework like Bitcoin’s, there are still some fundamental limitations, notably when the model is applied to a more complex, Turing complete platform such as Ethereum. For instance, building applications on the UTXO design forces developers to limit the amount of state changed by each output. Similarly, the UTXO transaction design intrinsically is not congenial with developing smart contracts since the concept is only fitting for use in applications where each output is only owned by one person and can break down if the output can be consumed by two or more people simultaneously.

Bitcoin uses “Bitcoin script” which while being not completely useless, missed a lot of features. This is why Vitalik Buterin decided that rather than making the Bitcoin script better (which is not that simple) and develop a better UTXO model, he had to throw the inefficient system away and go with the Accounts based model. Accounts-based models are better understood in the realm of the prevailing programming ecosystems. 

However, discarding the UTXO model also resulted in discarding its advantages: 

1. The Calculation is off-chain, and transactions are both results and proofs.
2. Transaction inputs always link to existing UTXOs. It is also easy to verify if a UTXO has been spent.
3. In the UTXO model, transactions are easily processed in parallel.
4. In the UTXO model’s stateless environment, users are encouraged to use new addresses for every transaction, enhancing privacy to some degree.

## Need for a better UTXO model - Cardano’s Extended eUTxO model

There was an explicit need for a better UTXO script from a restricted UTXO model and empowering it with the brand new UTXO model itself. Additionally, there was a need for the addition of new languages that help you to build Dapps. This is what the extent of the UTXO model is for both Cardano and Ergo. It is a crucial step forward from the initial design that Satoshi Nakamoto released. 

Cardano endeavored to consolidate Bitcoin’s UTXO model with Ethereum’s ability to handle smart contracts into an Extended UTXO (eUTxO) accounting model. The adoption of eUTxO facilitates the implementation of smart contracts into the Cardano chain.

An Extended UTxO model will exist on the Settlement Layer, and the Accounting Based model will exist on the Computation Layer. An extended UTXO solution would require two pieces of additional functionality that the existing UTXO model could not provide:

1. To be able to maintain the contract state.
2. To be able to enforce that the same contract code is used along the entire sequence of transactions.

A dominant feature of the eUTxO model is that the fees needed for a valid transaction can be prophesied accurately before posting it. A unique feature not found in account-based models.

Alternately of just having public keys (hashes) for locks and resembling signatures serving as keys, eUTxO enables arbitrary logic in the form of scripts. This arbitrary logic inspects Cardano's ledger model extends the UTXO model to support multi-assets and smart contracts without compromising the core advantages of a UTXO model. 

## Ergo is the first to adopt a smart contract language in the same eUTxO model as Cardano

Although PoS is a very secure protocol, some smart contracts may require the consensus-theoretic security features of PoW for some part of their execution. The fully Cardano-compatible PoW can make significant contributions to all developers in the Cardano ecosystem; Ergo facilitates this PoW compatibility. 

The larger a dApp is if it is doing collateralized DeFi, the larger the stake it has at its disposition, and since this is not yet fully resolved in the Proof of Stake consensus, it is a weak point. Ergo brings the proven confidence of PoW, with enough security for all more complex DApps implementations on top of the standard UTxO model rather than translating very natural cryptographic concepts integrated with PoW to PoS, where the game theory implications of the protocol are entirely different.

Ergo is working on an interoperability protocol that is not proof-based, which is not easy to blend with multiple blockchains but has a federated approach using reputation at stake. Opening up the entire Cardano ecosystem to interoperability with the Solana blockchain, chosen by large exchanges such as OKEX or Binance.

While all other blockchains will not copy all these advantages of the eUTxO model, thanks to interoperability, other projects or DApps will be able to borrow these unique advantages by bringing their tokens to Ergo. The cryptography exercised by the Ergo protocol is more advanced, running on sigma protocols where cryptographic signatures are highly flexible and composable.