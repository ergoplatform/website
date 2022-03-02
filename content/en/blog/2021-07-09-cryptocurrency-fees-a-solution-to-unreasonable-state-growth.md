---
title: "Cryptocurrency Fees: A Solution to Unreasonable State Growth"
date: 2021-07-09T15:28:18.620Z
author: root7Z
authorPhoto: /img/uploads/rootz-the-storyteller-4root7z.png
blogPhoto: /img/uploads/cryptofees.jpg
tags:
  - Building Ergo
---
<!--StartFragment-->

This article is a continuation and summarization of “[A Systematic Approach To Cryptocurrency Fees](https://fc18.ifca.ai/bitcoin/papers/bitcoin18-final18.pdf)” (hereinafter referred to as the paper) by Alex (Kushti) Chepurnoy, Vasily Kharin and Dmitry Meshkov. In the paper, the authors address the problem of storage resources utilization. There is a concern that once an element of the state is created, it exists forever and inevitably balloons node disk space. This will lead to unreasonable state growth of the blockchain.

While cryptocurrencies address transaction fees as an atomic concept, the paper suggests that it is reasonable to take this into account on a 3-dimensional scale.

![Figure A.](/img/uploads/3d.png)

## Blockchain Costs

Proof of Work blockchain technology relies on miners to guard the integrity of the blockchain. Miner resources, such as memory and electricity, are costly and therefore a revenue scheme is needed to incentivize miners. Miner incentives are currently comprised of the block rewards and transaction fees. Transactions fees are an important component in preventing spam attacks that exhaust miner resources.

Besides network utilization, transaction processing requires a miner to spend resources to maintain all the original blockchain data. In the case of Bitcoin, this might be less of a problem because it has yet to implement smart contract functionality. Cryptocurrencies that support smart contract languages such as Solidity (Ethereum) however, may require a lot of computations and corresponding costs will be included in the transaction fee.

The 3-dimensional scale shown above is based on storage-oriented load, computational load and network load.

* Storage-oriented load refers to the additional cost of storing old data in the blockchain. 
* Computational load is created by the execution of smart contracts. 
* Network load is all the transactions that do not  exist in the current block but will be added to the next block.

In Ergo, the total size of the state is the sum of the sizes of all UTXOs. That is to say that this data contains the execution of smart contracts, all the transactions and nodal information. Because the memory resources provided by miners are limited, a state deterioration fee should be added to miners' revenue streams in order to encourage decreasing the system load while securing future miners’ contribution.

## Storage Rent

Unreasonable state growth is an economic problem and it can lead to spam attacks and network congestion. Another problem could be the deflation of a cryptocurrency if coins are lost and/or forgotten. So instead of being used as the base for smart contracts, the currency becomes unreasonably scarce, making the system heavy and limiting coin flow.

This leads to a perpetually increasing state (e.g. the Bitcoin’s total UTXO size) and the state may grow faster during spam attacks. For example, 15 million outputs were created during spam attacks against Bitcoin in July 2015. An attack on Ethereum created 18 million new accounts added to the state - which previously held only 1 million - and performed successful “denial of service” attacks against the nodes.

To tackle the problem of unreasonable state growth, a "storage rent" fee is proposed by the paper. Storage rent is a scheduled fee that is based on the continuation of each UTXO created in the blockchain. This is achieved by the use of scheduled payments, which will eradicate the unused bytes after a certain time.

Additionally, the use of blockchains as cloud storage is gaining attraction, so permanently storing objects in the state without some form of recirculation procedure of the old data is not a plausible option.

For the purposes of research and this article, it is worth noting that the concept of storage rent was also proposed in 2014 by [Freicoin](http://freico.in):

“Demurrage forces freicoins to circulate at deliberately high rates. Separation of money's roles as store-of-value and medium-of-exchange allows money to flow when it is needed, in good times and bad. “

## Conclusions

An important consequence of storage fees is that they provide additional rewards (besides block and transaction rewards) for miners.

Storage fees decrease the storage load and eliminate extra costs that could be added during unreasonable state growth.

Storage fees encourage coin flow and prevent deflation, which can cause illiquidity and the congestion of a currency system.

<!--EndFragment-->