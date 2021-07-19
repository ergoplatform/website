---
title: How Ergo Makes the Most of Blockchain
date: 2021-01-20T14:16:15.832Z
author: Guy Brandon
authorPhoto: /img/uploads/guy_brandon.jpg
blogPhoto: /img/uploads/nasa-q1p7bh3shj8-unsplash.jpg
tags:
  - Building Ergo
---
<!--StartFragment-->

*The concept of ‘marginal gains’ enables Ergo to push the capacity of first-generation blockchain technology further than other platforms.*

With the explosion of interest in DeFi, perhaps the most compelling use case for smart contract blockchain platforms, one thing has become abundantly clear: blockchain is not ready for DeFi.

DeFi dApps have overloaded the Ethereum blockchain, causing long delays and soaring fees for transactions. Ethereum and many other platforms besides have researched and implemented fixes to address the lack of capacity. However, all of the solutions are imperfect in one way or another. Larger blocks are the obvious but clumsy fix, resulting in centralisation as fewer miners can afford the bandwidth, storage and CPU cycles to participate. Reducing the number of block validators – another approach taken to increase throughput – also necessarily centralises the blockchain. Sharding, while potentially very promising, has yet to be implemented successfully, and in some proposed implementations, breaks atomic composability because shards cannot communicate seamlessly.

Thus many of the ways projects seek to ensure their blockchains are fit for purpose result in greater centralisation or loss of critical functionality. 

**Marginal gains**

Ergo’s developers are watching developments in the DeFi space closely, especially some of the proposals that aim to scale blockchains while maintaining security, decentralisation and atomic composability. In the meantime, there is much that can be done to improve blockchain capacity. The concept of ‘marginal gains’, often applied in sports, is useful: a number of small, incremental gains in different areas all add up to a substantial compound effect.

For Ergo, there are several design principles and choices that have been taken to realise efficiencies in different areas.

* [Storage rent](https://ergoplatform.org/en/blog/2020_04_21_ergo_positioning/) is akin to ‘on-chain garbage collection’, reducing blockchain bloat and lowering the long-term costs of mining, improving economic sustainability.
* NiPoPoWs (non-interactive proof-of-proof-of-works) enable [mobile SPV clients](https://ergoplatform.org/en/blog/2020_05_1_spv_security/) and [even lite full nodes](https://ergoplatform.org/en/blog/2020_05_08_lite_full_nodes/), again reducing the barriers to maintaining the network and improving decentralisation.
* A [smart contract language](https://ergoplatform.org/docs/ErgoScript.pdf) that is finite and clear, without the messiness and possible chain bloat of Turing-complete languages and their unintended consequences.
* [Sigma Protocols](https://ergoplatform.org/en/blog/2020_03_16_ergo_sigma/), which allow for powerful cryptographic use cases, implemented elegantly and efficiently.

As DeFi emerges as a major use case for blockchain, the stakes could not be higher. Blockchains that are fit for purpose will thrive; those that do not allow the functionality to sustain the required transaction load simply cannot establish a foothold. At the same time moving too fast and implementing untested technology is equally dangerous. 

There are efficiencies to be gained in first-generation blockchains. Ergo continues to prioritise this approach while researching future upgrades.

<!--EndFragment-->