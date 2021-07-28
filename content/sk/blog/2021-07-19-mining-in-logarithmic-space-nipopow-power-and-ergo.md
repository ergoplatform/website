---
title: "Mining in Logarithmic Space: NIPoPoW Power and Ergo"
date: 2021-07-19T16:10:57.037Z
author: Ergo Foundation
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/img_20210719_190901_375.jpg
tags:
  - Building Ergo
---
<!--StartFragment-->



This article is based on a [recently published](https://eprint.iacr.org/2021/623.pdf) article by IOHK. For an additional resource, please see the following [video.](https://www.youtube.com/watch?v=s05ypkSC7gk)



## Introduction



Whether it is Ergo, Bitcoin, or another PoW consensus model, miners are needed to constantly maintain the blockchain. In addition to using computational resources, miners also use storage resources that maintain all blockchain data from the genesis block.



## Problem



A new miner's problem: Is downloading all the data from the genesis block strictly necessary? Why is it not possible to download only the most relevant blocks to maintain the network?



## Solution



The block headers of the blockchain should be enough to access the necessary data. [NIPoPoWs](https://nipopows.com/) (Non-Interactive Proofs of Proof of Work) can be integrated to form interlinked block header sets that will reduce historical data storage.



When needing to access key blocks in the blockchain, miners should be able to efficiently do this from the headers of the old blocks. That is because each new block must indicate all of the current network. As new blocks are created, a set of new block headers can be enough to check for the current UTXO set. Since the new blocks contain the data of old stringed block header sets, it enables light mining by eliminating the need to download all the blockchain data.



What are we trying to optimize by stringing old PoW history and compiling it into a snapshot?



If we say C=old blocks and K=new blocks, then included blocks in the snapshot can be growing when K=new blocks are constant and C=old blocks are linear. But it can also be shrinking depending on the smart contract applications. The problem of maintaining heavy loads of data by the miners can be solved by bootstrapping through NIPoPoWs. 



## NIPoPoW Implementation



Instead of accessing all of the blocks, super blocks (or light-clients) are enough to verify all of the blocks. This is accomplished by maintaining the historical data of the blockchain through smart contracts. The introduction of these superblock clients on NIPoPoWs can be done by velvet soft forks, and thereafter “light” miners can bootstrap through “online” mining.



NIPoPoWs enable smart contracts to maintain historical data so that new “light” miners will be able to work in a so called “online” fashion. This is the main idea of Logarithmic Space Mining, where instead of saving all the blockchain data locally on nodes, the unnecessary part of it can be compiled into the blockchain itself. New miners do not need to carry the historical data and as they continue to mine, new "light" miners will help other "light" miners to bootstrap. There will be no need to carry old historical data and old miners can abandon historical data for lighter mining. This is how the whole miner population can abandon old blocks and make the system much more efficient.



<!--EndFragment-->