---
title: "Building Ergo: ErgoScript"
date: 2021-06-09T15:23:35.828Z
author: root7Z
authorPhoto: /img/uploads/root7z.jpeg
blogPhoto: /img/uploads/ergcode.png
tags:
  - Building Ergo
---
<!--StartFragment-->

We are looking for new developers on our team to explore ErgoScript with us. ErgoScript is a novel language to create smart contracts on top of Ergo. Its design is based on Scala, which is short for Scalable Language, a strong general purpose programming language. The Ergo [Whitepaper](https://ergoplatform.org/docs/ErgoScript.pdf) notes:

“ErgoScript is a powerful and protocol-friendly scripting language for cryptocurrencies. Programs in ErgoScript are used to specify the conditions under which currency can be spent. The language supports a type of non-interactive zero-knowledge proofs called Σ(Sigma)-protocols and is flexible enough to allow for ring-signatures, multi signatures, multiple currencies, atomic swaps, self-replicating scripts, and long-term computation.”

## The Extended UTXO

ErgoScript is built considering Bitcoin’s security and privacy and the purpose of making all kinds of complex financial contracts accessible to everyone. However Bitcoin’s design doesn’t allow loops, and building complex smart contracts on top of it isn’t possible. ErgoScript allows for self-replication, therefore it can be used to create Turing-Complete processes in a blockchain.

Another approach to creating smart contracts in blockchain is the Account-Based model, like on Ethereum. Ethereum’s design facilitates smart contract opeld coins, so the unspent transaction output (UTXO) show us which private key holds which coiration by processing smart contracts as accounts. In Bitcoin, there aren't accounts that hons. Coins are in a set of addresses represented with a single UTXO. It’s also easier to include privacy schemes in this model than the Account Based model.

Therefore, Ergo developed Bitcoin’s UTXO model to the extended UTXO model by introducing readable UTXO design. This enables smart contracts to use UTXOs as data inputs without changing them. Therefore nodes are checking transactions, rather than balances. In comparison, in Ethereum’s Account model, nodes do this by checking all accounts to validate the system.

Side by side, the UTXO model is more scalable but it’s also more complicated to build User Interface tools. The account model provides easier access to developers but codes are heavier on the blockchain which can lead to network congestion. 

Furthermore, UTXO allows for parallel computation and it’s easier to compute atomic swaps in a non-custodial manner. 

## NIPoPows

An important capability of Ergo is that it’s ready to use NIPoPoWs (Non-Interactive Proofs of Proof of Work) which enable light clients to interact with the blockchain without needing to download the whole blockchain. This is beneficial for creating efficient lightweight clients, such as mobile wallets. 

Another implementation is cross chain communication with Proof of Stake networks. PoS networks such as Cardano can interact with Ergo through NIPoPoW integration. Such verification schemes can erase the need for centralized DAO structures and create new non-interactive cross chain operations. 

To put it simply, NiPoPoWs act as sidechains. Two or more separate chains can integrate through NiPoPoWs without the need for change in other chains. Such integration would erase the need for, for example “Wrapped Tokens,” tokens that rely on DAO governance. 

NIPoPoW is a strong tool in creating blockchain networks and provides easier access to clients. They’re also useful for enhancing scalability by creating Layer 2 organizations. 

We are getting close to ErgoHack and there is still so much to explore about use cases in ErgoScript. So if you’re looking for ways to contribute to the Ergo Ecosystem, [check here](https://ergoplatform.org/en/blog/2021-06-04-ergo-community-launches-its-first-hackathon-ergohack/) and get in touch on Telegram or Discord!

**Sources:**

\
\
[Unlocking The Potential Of The UTXO Model](https://github.com/Emurgo/Emurgo-Research/blob/master/smart-contracts/Unlocking%20The%20Potential%20Of%20The%20UTXO%20Model.md)

[Another coin bites the dust: An analysis of dust in UTXO based cryptocurrencies](https://eprint.iacr.org/2018/513.pdf)

<https://nipopows.com/> 

[NiPoPoWs & Log-Space Mining - Ergo Cast Episode #5](https://www.youtube.com/watch?v=OUjxar1WCmo)



<!--EndFragment-->