---
title: "Ergo Ecosystem: Scaling Solutions"
date: 2021-10-29T13:47:53.833Z
author: Ergo Foundation
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/ergoscale.jpg
tags:
  - Building Ergo
  - Roadmap
---
<!--StartFragment-->

The scaling aspect in Ergo Platform's design has been a high priority since the mainnet launch. In order to gain mass adoption, a blockchain should be able to scale. Scalability refers to the efficient use of computational resources and high throughput. Ergo incorporates various elements to achieve near-infinite scalability. The design is built on the extended UTXO model with its novel language, ErgoScript, relying on peer-reviewed academic research. With years of research, Ergo developed various features such as stateless clients, NIPoPoWs and UTXO based smart contracts.



Initially, Layer 0 is the reference layer where nodes are connected. This is the peer-to-peer infrastructure layer. The Ergo Node Client has improved a lot since v4.0.8 and still has 20 times more room to develop. [Light bootstrapping](https://ergoplatform.org/en/blog/2021-07-19-mining-in-logarithmic-space-nipopow-power-and-ergo/) using NIPoPoWs are also planned to be integrated via a Velvet soft fork.



On Layer 1, the application layer, Ergo supports on-chain scalability solutions such as Sharding. Aside from Sharding, the extended UTXO model allows most of the transactions to be executed off-chain and reduces on-chain network load.



In the end, there are Layer 2 scaling solutions that refer to off-chain layer scaling solutions. There are multiple off-chain solutions such as [Hydra](https://iohk.io/en/research/library/papers/hydrafast-isomorphic-state-channels/) and sidechains to compress blockchain bloat and provide similar benefits like zk-rollups. Ergo can also be compatible with other UTXO Layer 2 solutions such as Bitcoin’s Lightning Network.



Stateless clients allow for both light wallets and light miners to run with full node security. NIPoPoW implementation via Velvet soft forks will enable infinite sidechains on top of Ergo. 



Ergo utilizes "[Storage Rent Fee](https://ergoplatform.org/en/blog/2021-07-09-cryptocurrency-fees-a-solution-to-unreasonable-state-growth/)" to prevent spam and recirculate unused data bytes, known as dust. Storage Rent Fee helps to clean the network pollution and encourages users to be more active.



Ergo Platform has a research-based approach for long-term success and it has a lot in the toolbox to tackle the scaling problems that will come in the future. 



<!--EndFragment-->