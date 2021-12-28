---
title: "Ergo & Blockchain: Technology and Innovation"
date: 2021-12-28T20:47:56.308Z
author: Ergo Platform
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/tech-1-2-1-1-.png
tags:
  - Building Ergo
---
<!--StartFragment-->

In this fourth article of the [Ergo & Blockchain series](https://ergoplatform.org/en/blog/2021-10-26-ergo-blockchain-cryptocurrency-sphere/), we will describe blockchain technology on different infrastructure layers. Currently, there are over ten thousand cryptocurrencies listed on CoinGecko, yet there are only a few building innovative decentralized financial platforms. 

The initial idea behind Bitcoin relied on the promise of commerce protected from centralized points of failure. 

In this article, we will explain technology and innovation on the three layers of blockchain: layer 0, layer 1 and layer 2.

Layer 0 refers to the network/reference layer of the blockchain - also called the off-chain layer. 

Layer 1 is the smart contract layer as well as the on-chain transaction layer. 

Layer 2 can refer to off-chain, on-chain or a combination of both. 



# Network Layer



## PoW and PoS models

Bitcoin revealed a solution to [Byzantine General's problem](https://decrypt.co/resources/byzantine-fault-tolerance-what-is-it-explained) by introducing the proof-of-work mechanism. In this model, mining nodes can validate new transactions by achieving the consensus. The PoW model enables a fault-tolerant decentralized network and creates a new digital money form, known as cryptocurrency. 

*PoW examples: Bitcoin, Ergo, Ethereum, Monero, Litecoin, Ravencoin, Digibyte, ZCash*

Another solution to Byzantine General's problem was through the use of proof-of-stake. In this model, staking pools provide the consensus for applying transactions. There are also different requirements to operate a stake pool such as holding a minimum amount of tokens and requiring specific computers. 

*PoS examples: Cardano, Algorand, Cosmos, Polkadot, Solana, Avalanche, Tezos, Waves*

PoW and PoS are two known solutions for achieving consensus in a public blockchain. However, these two solutions are not without inherent flaws: PoW needs to avoid miner pool centralization and PoS needs to avoid holder (those with staked tokens) centralization. When evaluating their energy efficiency, the PoS protocol design is often considered a greener alternative, whereas PoW relies on larger amounts of electricity to keep the network safe and operational.

**Ergo chose the PoW model for two reasons:**

* Firstly, it guaranteed the execution of a fair launch (equitable access to all coins through mining). 
* Secondly, since the beginning of Bitcoin, PoW has been proven to be a time-tested and secure blockchain model (see: [Lindy Effect](https://en.wikipedia.org/wiki/Lindy_effect)). Ergo's consensus algorithm Autolykos v2 is a GPU-mineable model and it is less demanding on mining gear with lower temperatures. 

## UTXO and Accounts Models

Apart from these two consensus models, there are also two different data-availability models known as the UTXO and Accounts models. In Bitcoin’s whitepaper, UTXO is not mentioned. Instead, researchers later called this the UTXO model because the sum of all one-time Unspent Transaction Outputs represents the whole blockchain. The Accounts model (as described in Ethereum’s whitepaper) represents long-living accounts that are ever-growing on the blockchain. 

Each of those models applies a unique and different logic. Ethereum's model relies heavily on on-chain computations, resulting in network congestion. Bitcoin also has similar problems with network congestion and both of the models apply different solutions to tackle these scalability problems. A direct (and unwanted) solution to the scalability problem is to limit the number of nodes by making high-end hardware necessary to run a node, but consequently this can lead to building a centralized blockchain.

Following Bitcoin, the accounts model of Ethereum has introduced a more flexible blockchain design with smart contract capabilities. Ethereum’s platform offered the ability to produce other tokens on top of it and that is why we witnessed the ICO boom several years ago. Novel ideas such as NFTs, DAOs and DeFi apps were born from Ethereum communities. Most other chains have applied Ethereum’s design with minor tweaks and that's why we see a lot of "new" chains launching with Ethereum Virtual Machine compatibility.

*Accounts model examples: Ethereum, Tron, Solana, Avalanche (C Chain), Binance Smart Chain, EOS*

The UTXO model has more flexibility in its off-chain design by combining both on-chain and off-chain computations to boost blockchain scalability. Similarly, the extended UTXO (employed by Ergo and Cardano) has higher data [composability](https://en.wikipedia.org/wiki/Composability) than the accounts model, making dApps easier to efficiently scale and deploy to other chains. The UTXO model has certain advantages when it comes to scalability and privacy by leveraging off-chain computations and one-time use UTXO addresses.

*UTXO model examples: Cardano, Ergo, Digibyte, Ravencoin, Bitcoin, Komodo, Avalanche (X Chain), Monero, ZCash*

Both Accounts and UTXO models can implement different solutions to data-availability efficiency (known as Layer 2 solutions), such as payment channels, side-chains, state-channels, sharding and/or zk-rollups.

# Application Layer

## Distributed Applications

Bitcoin lacks a Turing complete language and does not employ complex smart contracts. In Ethereum, smart contracts exist mostly on-chain and they are executed on the Ethereum Virtual Machine. In Ergo, some parts of dApps are off-chain, and some happen on-chain. Therefore, Ergo's eUTXO off-chain logic allows for the running of dApp nodes locally on a user's computer and introduces new designs for distributed applications.

Today, an Ethereum developer needs to own a full node that contains all of the network’s data. [Ethereum’s current state](https://etherscan.io/chartsync/chaindefault) is over 340 GB and increases at a massive rate. The developers find solutions by renting virtual computers from firms like AWS or Google Cloud. In return, we see that only a few nodes host all of the so-called decentralized apps. Ethereum's accounts logic is more limited in distributing back-end storage because all the nodes need to be aware of all the blockchain. Therefore, the storage problem continually leads to a more expensive blockchain for individuals.

On Ergo, the eUTXO design introduces a unique way to overcome security and scalability problems on the application layer. Users of applications will be able to own light nodes to directly participate in the governance of an application. By introducing light nodes and light clients and creating truly stateless clients, developers, miners and users can distribute the network with [light-bootstrapping](https://ergoplatform.org/en/blog/2021-07-19-mining-in-logarithmic-space-nipopow-power-and-ergo/) and increase collaboration on the platform. For more information about off-chain logic and the eUTXO design, please see this [article](https://ergoplatform.org/en/blog/2021-10-04-off-chain-logic-and-eutxo/). 

## Optional Privacy 

Another topic of cryptocurrency debate is financial anonymity and privacy. Bitcoin addresses are not directly linked to personal identities, therefore the network provides users with a level of pseudo-anonymity. However, users need to rely on centralized coin-mixer services to hide their transactions and maintain privacy. 

Monero, one of the most popular examples of privacy oriented cryptocurrencies, provides a fully private cryptocurrency. Both addresses and transactions are private and no one can extract details of activity on the blockchain. It is a highly privatized cryptocurrency but because it is completely anonymous, it lacks the flexibility to gain mass adoption.

Optional privacy offers flexibility between two extremes. People and organizations need privacy and transparency to various degrees. Ergo, ZCash and Dash are some of the projects with optional privacy features. Optional privacy makes it more possible to implement different structures for non-profit and for-profit organizations. 

Optional privacy enables one to create layers of transparency with cryptographic and decentralized security. This option makes it possible to build a public blockchain with commercial use cases - users and organizations should be able to choose the level of privacy that suits their needs. For example, by using locally hosted ErgoMixers, users have privacy options on top of other Ergo dApps such as ErgoDEX. 

With optional privacy, the degree of privacy on the blockchain can be set and also composed with other applications. The flexibility and composability of blockchain is an incredibly important aspect for gaining mass adoption.

Apart from network and application layers, there is also Layer 2, which includes both off-chain and on-chain components such as side-chains, state-channels, payment channels or private channels, sharding etc. The next article Ergo & Blockchain: Scalability & Adoption, will take a deeper look into Layer 2 networks.

**Previous Articles:**

[Ergo & Blockchain: Cryptocurrency Sphere](https://ergoplatform.org/en/blog/2021-10-26-ergo-blockchain-cryptocurrency-sphere/)

[Ergo & Blockchain: Tokenomics and Finance](https://ergoplatform.org/en/blog/2021-11-05-ergo-blockchain-tokenomics-and-finance/)

[Ergo & Blockchain: Privacy and Security](https://ergoplatform.org/en/blog/2021-12-02-ergo-blockchain-privacy-and-security/)

<!--EndFragment-->