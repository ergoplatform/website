---
title: "NIPoPoWs on Ergo: Innovations in Blockchain"
date: 2022-04-01T15:42:00.322Z
author: Ergo Platform
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/news-blog-52-1-.png
tags:
  - Building Ergo
---
The Ergo blockchain is quickly becoming known within the crypto space as a leader in blockchain development and innovation. While this reputation is well deserved and something the development team is proud of, the reasons for this praise are often lost on the average crypto enthusiast. Why would Charles Hoskinson call Ergo a “technical marvel”? The truth is that there are many reasons to praise Ergo; the blockchain was built from scratch. It improves on many aspects of crypto’s most successful innovations and implements several novel cryptographic tools that have not been seen before in the space. 

To truly appreciate what makes Ergo marvelous, it requires a deep understanding of blockchain technology and the patience to walk through Ergo’s complex, yet elegant, protocol design one piece at a time. Sigma Protocols, ErgoScript, Autolykos, eUTxO, and The Manifesto itself each deserve the attention of developers, investors, and users alike. This article is intended to describe and simplify one particular innovation on the Ergo blockchain: NIPoPoWs. 

## What are NIPoPoWs? 

NiPoPoW stands for Non-Interactive Proof of Proof of Work. Let’s break this down one piece at a time. The PoW sitting at the end of NIPoPoW signifies that this concept is grounded in a proof of work consensus mechanism. Like all other PoW chains, Ergo relies on miners to solve cryptographic puzzles that give them the right to verify transactions and add blocks to the blockchain. The sum of these blocks archive the entire history of transactions completed on Ergo. Next, the Po in the center of NIPoPoW stands for Proof of. Having proof of proof of work means using cryptography to abstract away from the blockchain in a mathematically verifiable way. In other words, PoPoW is a light weight, yet provably accurate, representation of the blockchain. Finally, NI stands for non-interactive. Non-interactive means that applications operate on the back end of a program without the participation or permission of another user. This type of system is self contained, consistent, and complete. Non-interactive applications are like automated vending machines, ready to be used by anyone. 

## Why do we need NIPoPoWs?

Now that you know what they are, you might ask, why do we need NIPoPoW’s? NIPoPoWs solve several problems, providing opportunities to increase the adoption and accessibility of blockchain technology. The most obvious application for NIPoPoWs is to reduce the size of a blockchain. Bitcoin’s blockchain is over 300GB. Due to its smart contracts, Ethereum’s blockchain is almost a terabyte! Anyone wanting to run a node will have to own a sizable hard drive and wait between 1 and 5 days for the node to sync. NIPoPoWs will allow super light clients to sync to the blockchain with less than 1MB of data. This dramatic reduction of data also implies a reduced technological requirement. NIPoPoWs will enable limited technology, such as flip phones, to operate with limited data service, and achieve the same security level as running a full node. This has the potential to completely revolutionize the industry.

This lightweight approach has other benefits as well. The first is known as log space mining, which means that each block being added to the blockchain only logarithmically increases the size of the blockchain. Remember, logarithms are the inverse of exponents; each block only takes up a tiny, tiny amount of data. This is critical for increasing the number of miners participating to secure the network. Second, NIPoPoWs will enable super efficient operation of side chains. These will allow new protocols to be built on top of the Ergo blockchain, which can be verified by miners without causing congestion. This technology will be the foundation of Ergo’s Layer Two scaling approach. Third, and perhaps most technologically spectacular, are velvet forks. This development enables the blockchain to be upgraded without the consequences of traditional hard or soft forks; velvet forks allow upgrades to be backwards compatible. Even if only a portion of miners implement the latest upgrade, NIPoPoW’s abstraction away from the blockchain allows them to supersede older instances of the protocol without completely removing the unupgraded miners’ ability to secure the network. Velvet forks are difficult to understand, but hopefully this simplification will suffice for most readers. 

## How do NIPoPoWs work? 

A NIPoPoW is essentially a data compression technique, and it’s all about super blocks. Usually, Proof of Work blockchains reach consensus by allowing miners to compete for the right to mint new blocks of data onto the blockchain. The race is to solve a cryptographic puzzle; miners use graphics cards to produce random solutions and check them against the puzzle to see if they are correct. The beauty of cryptography is that crypto puzzles are hard to solve, but easy to verify. This means that if the random numbers a miner generates happen to solve the puzzle, they can verify their solution and claim the block reward. 

In a rare and random occurrence, some blocks are much more difficult to solve than others. These blocks, known as super blocks, have more zeros in their solution than average blocks. This makes them easily identifiable and available for other uses. In a NIPoPoW, super blocks are used to host bits of data from every block between it and the last super block. This data is stored in the block header and then used as a key that can access and confirm any information held by any of the blocks that contributed data to the super block. Each time a super block is minted, the data from regular blocks becomes unnecessary. The superblocks then exist as a lightweight chain of their own. Wallets, dApps, and users can rely solely on super blocks to securely and reliably interact with the blockchain. Since they only have to sync with the super blocks, they can avoid downloading the entire blockchain and improve efficiency by 80%. 

To help readers understand, see the graphic below! 

![](/img/uploads/nipopows-on-ergo.png)

## Care to dig deeper? 

If you are interested in learning more about NiPoPoW technology or how it is being integrated into the Ergo blockchain, explore the links below: 

* <https://docs.ergoplatform.com/dev/protocol/nipopow/> 
* <https://ergoplatform.org/en/blog/2021-08-26-nipopow-applications-light-clients-and-side-chains/> 
* <https://veriumfellow.medium.com/what-will-ergo-bring-to-cardano-2f7ae911a9bd> 

If you prefer reading academic papers on this topic, find them below:

* <https://eprint.iacr.org/2017/963.pdf> 
* <https://eprint.iacr.org/2019/1444.pdf>
* <https://eprint.iacr.org/2021/623.pdf>