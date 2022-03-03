---
title: Blockchain and the Case for Ergo
date: 2022-03-03T15:58:30.807Z
author: "Ergo Platform "
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/news-blog-41.png
tags:
  - Building Ergo
---
From the inception of Bitcoin, blockchain technology has undergone enormous advancements over the twenty-first century. Enhancements to security, access and various protocols have allowed blockchains to evolve to compete with their ever-growing demand. Popular cryptocurrencies that have been developed on blockchain technologies include: Bitcoin (BTC), Ethereum (ETH), Cardano (ADA), Polkadot (DOT) and Ripple (XRP), to name a few. The purpose of this article is to help shed some light on how ERG (Ergo) is a viable competitor to current popular blockchains and future ones. 

`Blockchain Generations`

* `1st Gen - DOGE, BTC, XRP.`
* `2nd Gen - BNB, NEO, ETH`
* `3rd Gen - ADA, DOT, ERG`

Currently, there are three generations of blockchain, each capable of more complex behaviors than the last. First generation refers to the original use BTC was intended for, that is to provide a reliable and accurate method of maintaining a public transaction ledger. Second generation blockchains were created with implementation of smart contracts as priority, with the most popular one being ETH (Ethereum). One of the big differences in ETH is the language used to code smart-contracts. ETH utilizes a [turing complete](https://www.cs.odu.edu/~zeil/cs390/latest/Public/turing-complete/index.html) language (known as Solidity), meaning it is computationally universal. 

The third generation of blockchain technology now focuses on solving issues with congestion and scalability. As this technology becomes more decentralized, there will inevitably be an exponential increase in the number of users interacting with the blockchain. DOT, ADA and ERG are third generation blockchains, meaning they have smart-contract capabilities while proposing solutions to scalability for a global audience. Third generation blockchains generally have the ability to process off-chain transactions, helping speed up transactions significantly. Ergo also has various innovations to address scalability. NIPoPows on Ergo allow for connection to side chains and light chains, opening up a whole world of possibilities. Readers can learn more about NIPoPoWs here: [NIPoPoW Applications: Light Clients and Side Chains | Ergo (ergoplatform.org](https://ergoplatform.org/en/blog/2021-08-26-nipopow-applications-light-clients-and-side-chains/)). 

Smart contracts on ERG are programmed using ErgoScript, a turing-complete programming language. ErgoScript is specifically designed to be friendly to cryptographic protocols and applications, which allows for the development of all kinds of dApps for countless use cases. Learn more about ErgoScript here: [ErgoScript.pdf](https://ergoplatform.org/docs/ErgoScript.pdf).

#### Transaction Speed

Transaction speed is generally measured in Transactions per Block/Second (TPS). Below are approximated TPS values for other blockchains:

* `BTC - ~7 TPS (Gobbel, 2017)`
* `ETH - ~15 TPS (Clincy et al (table1), 2019)`
* `XRP - ~ 1500 TPS (Clincy et al (table1), 2019)`
* `ADA - ~ ~7 TPS (~250 in controlled tests) (Stamoulis, 2021)`
* `DOT - ~1500 TPS (Hiemstra et al., 2021)`

Transaction speed, more specifically TPS measures the transactions per block/second a blockchain can perform, essentially quantifying how fast a blockchain can perform transactions. You may have noticed ERG is not listed as having a concrete quantifiable TPS. The eUTXO model Ergo utilizes renders TPS values obsolete because multiple transactions can be chained together into a single transaction. Below you will find a developer harnessing the power of eUTXO to send 10000 transactions at once:[(https://explorer.ergoplatform.com/en/transactions/e2c4954665ccf87791f42983ae4f7031205c2e719709907cbf2ff09e5489d4b8)](<https://explorer.ergoplatform.com/en/transactions/c4e5276182543b17eae4e767d60965feceaf1fd1ba1f5bde76aae751b33a6bb8)>). 

As of present, solutions for scaling via a second layer are being implemented on the Ergo blockchain, however processing and storage of transactions are not the main idea behind Ergo. A quote from a developer sums it up quite nicely:

*“However, simple payment transactions are not what Ergo is all about. The main power of Ergo is that it enables many unique dApps (ones already implemented, ones already discovered and many more not yet discovered). In addition, Ergo enables many layer 2 solutions (like sidechains, which kushti already mentioned as a work in progress). Those layer 2 solutions/protocols will be the main source of actual scalability. The general idea, roughly, is that large chunks of transactions can happen in layer 2 and the whole chunks will be settled in Ergo blockchain using a single transaction. Thanks to the high flexibility of ErgoScript programming model (what we call eUTXO), many different protocols will be possible on layer2, each one solving scalability problem in a specific domain (like simple payment transactions). Thus, Ergo blockchain can be thought as common settlement layer for many level2 protocols and applications. And for settlement transactions, even 50 tx/second is good enough.” - [ERGO transaction speed : ergonauts (reddit.com)](https://www.reddit.com/r/ergonauts/comments/pcff16/ergo_transaction_speed/?utm_source=share&utm_medium=ios_app&utm_name=iossmf)*

In conclusion, Ergo is a powerful blockchain capable of dethroning current and future competitors. Ergo offers unique solutions to scaling problems via utilization of NIPoPows, harnessing eUTXO and a second layer to process transactions, all while offering the ability to create dApps and smart contracts using ErgoScript.

For those who are interested in additional reading, please see the following articles:

*[Building Ergo: UTXO vs Account | Ergo (ergoplatform.org)](https://ergoplatform.org/en/blog/2020_03_03_building_utxo/)*

*[UTXO Model Transaction | Ergo (ergoplatform.org)](https://ergoplatform.org/en/blog/2021-10-07-utxo-model-transaction/)*

*[Off-chain Logic and eUTXO | Ergo (ergoplatform.org)](https://ergoplatform.org/en/blog/2021-10-04-off-chain-logic-and-eutxo/)*