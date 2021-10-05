---
title: Ergo-Emurgo partnership yields new model for oracles
date: 2020-06-30
author: Guy Brandon
authorPhoto: /img/authors/guy_brandon.jpg
blogPhoto: /img/blog/ergo_emurgo_oracles.png
tags:
  - Ergo Team
  - Partnerships
---

*The joint research on oracle pools will be implemented in the Ergo stablecoin project.*

[Oracles](https://ergoplatform.org/en/blog/2020_04_04_building_ergo_oracles/) are one of the critical elements of DeFi, providing a link between the siloed and self-contained world of the blockchain, and real-world data. It is imperative that dApps have access to reliable price data, among other information, in order to execute effectively and securely.

New research from the [Ergo-Emurgo partnership](https://ergoplatform.org/en/blog/2020_06_09_press_release/) offers a new way to approach the problem of achieving consensus and posting data to the blockchain: [Oracle Pools](https://github.com/Emurgo/Emurgo-Research/blob/master/oracles/Oracle-Pools.md).

Despite the importance of oracles in providing data feeds to dApps, the research notes that ‘oracles schemes today lack transparency, accountability, and operational robustness’. This makes them a potential single point of failure, threatening the security of any software that relies on them. In the case of a [stablecoin](https://ergoplatform.org/en/blog/2020_05_05_stablecoins/), it can mean the risk of losing its peg, and opening it to attack and exploits.

## Oracle pools

The concept of oracles pools was designed for Ergo’s extended UTXO smart contract model, though the high-level overview can be adapted for use in Account-based systems (like Ethereum).

> Oracle pools are a new model which attempt to address said issues, while also providing further new capabilities. From guaranteeing the data posting schedule, incorporating game theoretic incentives + disincentives, built-in governance, potential dynamic entry, and building oracle datapoint hierarchies of confidence, there are many possibilities unlocked with this model.

Oracle pools involve several oracles operating together, with different shares in the pool, and receiving payouts based on the reliability of the data they provide. (To determine the ‘true’ value of the data, outliers are removed and the data points averaged.) To participate, an oracle needs to post collateral, and can be ‘fined’ for failure to provide high-quality data on time. 

Thus – as in the PoW consensus approach itself – honest oracles are rewarded, while fraudulent or unreliable ones waste their resources.

## Stablecoin

When the new model is implemented, it will become a key part of the technology that will underpin the Ergo stablecoin. (This will take an algorithmic or collateralised approach, rather than being a fiat-backed coin like USDT or USDC.)

Further details about the new stablecoin will be published in due course, with the new project expected to launch later in 2020.

To find out more about Oracle pools, [read the new research](https://github.com/Emurgo/Emurgo-Research/blob/master/oracles/Oracle-Pools.md).
