---
title: "Ergo: Advancing on Bitcoin"
date: 2021-08-17T16:21:17.200Z
author: Ergo Foundation
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/photo_2021-08-17-17.33.30.jpeg
tags:
  - Building Ergo
---
*"Ergo is the spiritual successor to Bitcoin."* - Charles Hoskinson

Bitcoin and Ethereum are the most well known ledger models in blockchain and they are designed on the UTXO and Accounts models, respectively. Bitcoin is based on the Unspent Transaction Output model (UTXO), a model where the owner's coins are stored in a set of one-time UTXO outputs (boxes) that are consumed (or destroyed) when a transaction is made and some new UTXO outputs are created. On the other hand, Ethereum uses the Accounts Model where the owner’s coins are stored in long-living accounts. These Accounts never get deleted and the necessary storage increases over time.

Ergo is built on the eUTXO (extended unspent transaction output) model which is an extension of Bitcoin’s UTXO model, but with the implementation of [Multi-Stage Contracts](https://www.youtube.com/watch?v=g3FlM_WOwBU) and native token support. Before we dive into Ergo’s novelties, we should take a look at the differences between the UTXO and Accounts models. 

In Bitcoin, the set of all UTXO’s represents the state of the blockchain. In Ethereum, the sum of all Accounts also represents the whole blockchain but with a twist: these Accounts are to be used over and over again - essentially forever. This has the potential to lead to possible security issues since transactions are easy to track. However, Ethereum was not originally built with privacy at the forefront of development. The Ethereum whitepaper focuses on smart contracts - the contracts that encode a specific set of rules for automated on-chain applications.

Bitcoin functions mainly with a single application: as a decentralized monetary system. Bitcoin Script has been found to be not very suitable for building new ideas on top of it. It is built with a robust design but with non Turing-complete language in order to guarantee each transaction is verifiable with a predictable amount of computation.

Ethereum is not exactly Turing-complete either (take a look [here](https://media.consensys.net/ethereum-isnt-turing-complete-and-it-doesn-t-matter-anyway-625061294d3c)), yet it emulates Turing-completeness via the Ethereum Virtual Machine. Ethereum uses “Gas Limit per block” as a solution to prevent the halting problem of Turing-complete machines by predefining a work time for transactions. The account model was chosen specifically to provide more expressive smart contracts with an easy-to-implement front-end. In opposition to Ethereum, Bitcoin’s UTXO model is more beneficial for privacy and has a simpler semantic model for efficiency improvements. 

Ergo utilizes the UTXO model for enhanced privacy & scalability options while also employing expressive smart contracts for DeFi applications. In order to achieve this robust level of functionality, Ergo was built from scratch with its own native language, [ErgoScript](https://ergoplatform.org/en/blog/2021-06-09-building-ergo-ergoscript/). The UTXO model also allows for parallel transactions which we believe is an important feature for the DeFi platforms of the future. 

It is important to note that the ErgoScript language itself is not Turing-complete either. However, Ergo introduces read-only inputs (UTXOs that can be used without spending) and when this component is combined with block height, [self-replicated contracts](https://arxiv.org/pdf/1806.10116.pdf) can be built and Turing-complete systems on Ergo become possible.

Scalability is of the utmost priority for Ergo because in order to provide a powerful smart contract platform, the network needs to be able to handle a vast number of transactions.

Ethereum can not scale since Ethereum’s script language, Solidity, is influenced by JavaScript. JavaScript is an easy-to-use object programming language however its code is too heavy to handle mainstream adoption. ErgoScript’s language is influenced by Scala, which is short for Scalable Language.  Most of Java’s features can be executed with only a few codes in Scala. Scala is also perfect for immutable objects, therefore an immutable blockchain environment is easily sustained. 

Following the “better Bitcoin” ICO boom in the crypto industry, Ergo is building a blockchain that exploits the full potential of the UTXO model.  Most other UTXO based projects were perplexed about how to implement smart contract applications. 

Ergo took inspiration from Bitcoin’s decentralized emission style by not issuing an ICO and not allowing any pre-mining before launch. Years of research and development by the Ergo team have shown that smart contracts on the UTXO model with ErgoScript create a network that is easily scalable and functional for DeFi applications.

## We Are On The Hunt!

 

If you are a developer or know anyone who codes, we are currently looking for talented coders to join our team! Interested coders are also welcome to join our second ErgoHack! We are currently planning and organizing our second Hackathon for this September!

 

Check our [GitHub](https://github.com/ergoplatform/ergo) and [Whitepapers](https://ergoplatform.org/en/documents/) to get to know us and join our community on [Discord](https://discord.gg/kj7s7nb) and [Telegram](https://t.me/ergoplatform) to get in touch with the Core Team!