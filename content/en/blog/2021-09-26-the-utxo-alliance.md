---
title: The UTXO Alliance
date: 2021-09-26T21:40:14.759Z
author: Glasgow
authorPhoto: /img/uploads/2021-07-01-09.18.09.jpg
blogPhoto: /img/uploads/title-1-.png
tags:
  - Building Ergo
---
# The UTXO Alliance

The [utxo-alliance.org](https://utxo-alliance.org/) is an initiative created to kickstart collaboration with individuals and organisations to make the UTXO model more scalable, secure, and interoperable.

Formed between Cardano, Input-Output Global, Ergo Platform, Nervos, and Topl, this alliance will define the future of scalability, programmability, and interoperability. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/PJfwhkPs2J4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

UTXO has many advantages over the account-based model used by Ethereum. It provides superior:

* Privacy, as UTXOs are one-time objects making it possible to formalise privacy leaks.
* Scalability, as parallel transaction processing is more straightforward. UTXOs are also more friendly to known stateless client solutions.
* Interoperability, as off-chain and sidechain protocols. One-time objects are simpler to work with from an off-chain point of view.
* Transaction Cost Predictability, where the only on-chain action is validating the smart contracts. As a result, the transaction cost is significantly lower and most importantly, the transaction cost is predictable, eliminating the need for ‘gas.’

At the heart of the UTXO Alliance lies the commitment to solve instrumental questions around how data is transferred between different blockchain environments - the amount of data used, the speed with which data is processed, transaction costs, and energy usage.

Solving these questions will ensure that anyone can safely share digital assets, such as coins, tokens, data, and smart contracts across different blockchains. To achieve this goal, alliance members have a commitment to promote participation, expand use cases, and both educate and inspire mainstream users.

Each of the Founding members has specific strengths and unique tooling that they bring to the UTXO Alliance.

Cardano: Ouroboros, for energy-efficient consensus and throughput

Ergo: Sigma Protocols and Multi-Stage Contracts, for privacy and security

NervOS: UTXO Cell Model, for optimized stage storage

Topl: Impact tracking, for commercial enterprise

# Ergo and eUTXO

[Extended UTXO](https://iohk.io/en/research/library/papers/the-extended-utxo-model/) systems enable [Turing complete](https://arxiv.org/abs/1806.10116) smart contracts. This novel innovation allows us to reclaim the original model that Bitcoin used but with a lot more power.

The Extended UTXO Model (eUTXO) preserves Bitcoin’s structure while adding support for more expressive smart contracts and native assets. Ergo has a similar approach to Cardano’s eUTXO with its own Multi-Stage UTXO model that introduces UTXO chains. 

Multi-Stage Contracts provide an extension to Bitcoin’s UTXO model to facilitate any complex smart contract. Ergo has implemented read-only inputs that allow any unspent output to be used as a read-only input in a transaction. Its Proof of Work consensus algorithm is compatible with the state-of-the-art NiPoPoWs, allowing trustless light mobile nodes, non-interactive parallel computations, and seamless cross-chain interoperability. Learn about data inputs and the genuinely novel innovations they bring to UTXO-based Blockchains by reading the latest [research by Emurgo](https://github.com/Emurgo/Emurgo-Research/blob/master/smart-contracts/Unlocking%20The%20Potential%20Of%20The%20UTXO%20Model.md).

In the coming months, Cardano plans to add data inputs with a hard fork, making the Oracle Pool design outlined below interoperable.

Ergo’s Sigma Protocols, combined with an extended approach to the UTXO ledger model, with read-only inputs and a Turing complete enriched context, can provide near-infinite scalability with robust privacy and security features. Zero-knowledge applications such as collective spending vaults on Ergo’s UTXO are more efficient than a shared mutable state like Ethereum’s.

Ergo is always willing to work with like-minded projects to advance technology for the benefit of ordinary people. We believe in partnership, rather than division, in the blockchain industry. Working together will only accelerate the development and use of the tools we are building.

Ergo and Cardano enjoy a rich history of collaboration. Some background information on this connection is given below, as well as the protocols that were designed and tested in cooperation with Emurgo and IOG.

# Oracles

![](https://lh5.googleusercontent.com/GavnzBX5QakWnKS2CIyP8iWJ2u66_hQL9uCQyDhMabT9LQW_gVqXOIEghgOOA6W5u3Nkm212FXjaBzzMp1p3AuMLbLI2eI7v5EjeuRU_H0TVZmUc5UgOKjLYWPJNNxhro47Ic_j2=s0)

Ergo has previously partnered with Emurgo (a founding partner of Cardano) in its efforts to explore and develop commercial opportunities. From this partnership, we saw integration into the Yoroi wallet and a new design for Oracles. 

The design of Ergo’s oracle pools is more efficient and programmable than using multiple single oracle data points, such as in Chainlink’s oracle design. We build hierarchies of confidence using oracle pools and pools of oracle pools in Ergo. It’s faster, cheaper, and more beneficial to the end-user.

* [Chainlink Oracles vs Ergo Oracle Pools](https://ergoplatform.org/en/blog/2021-04-27-chainlink-oracles-vs-ergo-oracle-pools/)
* [Emurgo Research: Oracle Pools](https://github.com/Emurgo/Emurgo-Research/blob/master/oracles/Oracle-Pools.md)
* See [this thread on r/cardano](https://www.reddit.com/r/cardano/comments/hgdy1d/emurgo_new_research_released_presenting_a_brand/) for a healthy discussion of the benefits it brings in the comments.

# SigmaUSD 

![](https://lh3.googleusercontent.com/2G2DaB_h6r3NM5Xl4ijvrd1Nwg92sOR4vfL16aQnAW94v9zxuV6cOOrIzucJi0Sl98jJqLFzIvDUOg165E8OCc48M6Yaarq01Cm_AVarnT5-0AgMhHBFGV4LjNfFhAtzw-xgAM48=s0)

Ergo has previously worked alongside Emurgo and IOHK when creating SigmaUSD. This research hoped to lay a foundation upon which a new era of digital finance could be built. 

SigmaUSD.io is the world's first UTXO-based stable coin - an instantiation of the AgeUSD protocol (now [Djed](https://iohk.io/en/blog/posts/2021/08/18/djed-implementing-algorithmic-stablecoins-for-proven-price-stability/)). Its economic model maintains the conservative settings for collateral reserves and avoids the need for liquidations. Along with that, it supports a fully decentralised stablecoin emission setup. Thus, SigmaUSD offers the world a stable, simple, and decentralised stablecoin. From the SigmaUSD launch on Ergo, Cardano was able to learn from the design in real-world scenarios. The resulting changes from SigmaUSD v2 are bundled into the Djed protocol that will be implemented on the Cardano blockchain.

# ErgoDEX

![](/img/uploads/tumblr_486f361b10c52d120dace53312245f71_4adb8900_2048.png)

ErgoDEX is a non-custodial, decentralised exchange that allows a quick, effortless and secure transfer of liquidity between the Ergo and Cardano networks. The eUTXO model gives the unique possibility to have shared liquidity between AMM and Order Book, performing both instant swaps and limit orders from the same liquidity pool. It even enables these features across other UTXO chains!

To make ErgoDEX a safe garden for Initial Coin Offerings (ICO), buy-back orders and partial-filling support will provide extra safety measures for investors. NIPoPoWs and/or ErgoMixer integration with ErgoDEX will help make it a cross-chain and privacy-enhanced decentralized exchange.

To see the current roadmap and check progress, please visit https://ergodex.io/

# Background

Alexander Chepurnoy (aka Kushti) is a core developer of Ergo Platform and he has been active in blockchain development and smart contracts since 2011. He was a core developer for NXT (first pure PoS), started smartcontract.com (now Chainlink) in 2014 with Sergey Nazarov, and is an IOHK researcher with over 20 academic papers to his name. When working on NXT, he started an ‘utterly simple blockchain framework,’ ScoreX. This project was used to build real-work blockchains like Waves and garnered the attention of Charles Hoskinson, Cardano and Ethereum co-founder.

Using the knowledge he amassed across these projects, Alex shifted his focus from IOHK and Cardano to designing a truly fair PoW that would be uniquely useful as contractual money. Read [The Ergo Manifesto](https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/) for more information.