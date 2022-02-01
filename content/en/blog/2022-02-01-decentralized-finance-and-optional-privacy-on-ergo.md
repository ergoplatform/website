---
title: Decentralized Finance and Optional Privacy on Ergo
date: 2022-02-01T16:43:44.215Z
author: Ergo Platform
authorPhoto: /img/uploads/symbol_bold__1080px__black.png
blogPhoto: /img/uploads/01_ergoblog_cover_02012022-1-.png
tags:
  - Building Ergo
---
<!--StartFragment-->

## Financial Privacy and Public Blockchains

Bitcoin is a public distributed ledger network that is accessible for everyone who wants to verify the state of the blockchain. There are tools such as [Bitcoin explorer](https://bitcoinexplorer.org/) that are interfaces for checking on-chain data and transactions. The transparency of a cryptocurrency is of the utmost importance because Bitcoin is invented to prevent any third-party manipulation. It is also important for people to protect their financial privacy on digital platforms. For this reason, Ergo developed Sigma Protocols: cryptographic proofs that support [optional privacy features](https://eprint.iacr.org/2020/560.pdf) without compromising security. 



Satoshi Nakamoto showed us a genius approach to blockchain technologies by introducing proof-of-work consensus to solve Byzantine General's problem. Bitcoin design eliminates fraud by allowing everyone to validate the network. Cryptographic technology has continued to develop since the Bitcoin genesis block with the recent [Bitcoin Taproot Update](https://ergoplatform.org/en/blog/2021-11-17-bitcoin-taproot-upgrade-and-ergos-sigma-protocols/). This update integrated Schnorr Proofs to create privacy properties for multi-sig wallets, allowing multiple people to sign a transaction without revealing all the information in the contract.



In addition to Sigma Protocols, Ergo furthers Bitcoin's UTXO design with the implementation of Multi-Stage contracts. Bitcoin's model differs from Ethereum's long-living Accounts model because an address balance is the sum of multiple one-time-living UTXO boxes. [Ergo's extended UTXO](https://dav009.medium.com/learning-ergo-101-blockchain-paradigm-eutxo-c90b0274cf5ehttps://docs.ergoplatform.com/dev/protocol/eutxo/) model enables the creation of unlimited new receiving addresses from the same seed key. Users can easily create optional privacy features from every Ergo wallet, whether it be mobile, browser extension or full node. Ergo is not strictly a privacy blockchain however, because you are also in control of sharing read-only information with a public key. The anatomy of the eUTXO model is beyond the scope of this article but for now we will focus on optional privacy features enabled by Sigma Protocols.



## Sigma Protocols: Ergo's Approach to Zero-Knowledge Proofs



[Sigma Protocols](https://docs.ergoplatform.com/dev/scs/sigma/) are a subset of Generalized Schnorr Proofs, the mathematical proofs that help to verify the necessary information to execute a transaction. Cryptographic technology makes servers validate transactions without accessing all the users' data. The founders included Sigma Protocols in the genesis block with the idea that Ergo will be the contractual platform of the future. Blockchains have the potential to become a mass surveillance tool by advertising companies and malicious actors but with the implementation of zero-knowledge proofs optional privacy features are possible.



For example, Central Bank Digital Currencies (CBDCs) are private versions of distributed ledgers. On these networks, users can verify and hide transactions to a certain degree. However, governments and/or other trusted institutions on the network will be able to use mass surveillance tools, censor our transactions, or potentially use our deposited funds in ways we can not control. In Bitcoin, identity is not directly linked to an address and therefore some degree of on-chain privacy exists. CBDCs on the other hand, are open to potential exploitation because every action is processed on centralized servers owned by governments or banks. 



Let’s discuss the concerns about money laundering and black market trades in cryptocurrency. Although only about [1% of Bitcoin TX are labelled as illicit](https://cryptoforinnovation.org/resources/Analysis_of_Bitcoin_in_Illicit_Finance.pdf), cryptocurrencies are often criticized as a platform for money laundering. The [money laundering](https://corporatefinanceinstitute.com/resources/knowledge/finance/money-laundering/) process involves three phases: placement, layering and integration. Cryptocurrencies facilitate the layering phase by opening up cross-border transactions for all, but the black money has to enter and exit through unidentifiable channels. Verifying the sources of income and the production facilities are points where governments can easily intercept this illegal activity since the black market still operates with fiat currencies. 



Zero-knowledge systems are not tools for money laundering - they are tools for building verifiable systems. Currently, any economy with multiple parties involved needs to rely on central data sources for the security of their funds. We can not know how many transactions are happening or how many funds are transferred if we are not the governors. Here, Sigma Protocols can be useful for creating such economies, establishing minimum trust with the power of smart contracts.



## Optional Privacy Example: Trustless LETS 



LETS is an acronym for [Local Exchange Trading System](https://ergoplatform.org/en/blog/2021-07-01-lets-start-the-discussion/) - a type of mutual credit economy. When considering small economies, LETS can be especially useful during times of crisis. This system can also be seen as a coupon-based system that people will be able to use within their particular trade community in exchange for services and goods. Traditionally, coupon logs are held by a committee database, therefore they are vulnerable to human error.



Ergo’s blockchain provides an infrastructure to build a trustless LETS using Sigma Protocols. In a non-privacy blockchain everything will be transparent but an enterprise could be harmed if their data was exposed to the public. In a privacy-based blockchain, we can not verify how entities (government, charity, banks, etc) are using money. Ergo’s Sigma protocols allow privacy models to be tailored for any economic means by securing the funds on the blockchain’s database. 



If Sigma Protocols gives us power over which information we want to reveal, how can we use it? Let's look at the needs of a few actors in a simple economic community:



**Municipalities:** Needs a high level of transparency with regards to how taxes are allocated

**Charities**: Needs a high level of transparency to properly display spending while maintaining the option to obfuscate donors

**Enterprises:** Needs transparency for tax control but high privacy for sensitive data

**Individuals:** Needs transparency for tax control but high privacy for sensitive data



What is sensitive data? It can be anything from when, where and/or how you completed a transaction. Over time, the accumulation of this data forms a profile that can be exploited by centralized entities. For example: 



* the time you buy your chocolate. 
* the time you made your asset purchase.
* your location and financial habits. 



This information is stored with your bank/credit card provider’s servers under a legal privacy agreement. In a public blockchain, proofs are stored in the nodes with cryptography so we have the option to create zero-knowledge transactions. In our day-to-day lives, individuals are currently prevented from controlling privacy options. With Ergo, every entity’s privacy needs can be respected and maintained through a robust and functional decentralized finance network.



<!--EndFragment-->