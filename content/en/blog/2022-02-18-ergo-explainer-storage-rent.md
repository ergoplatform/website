---
title: "Ergo Explainer: Storage Rent"
date: 2022-02-18T14:51:13.772Z
author: Ergo Platform
authorPhoto: /img/uploads/symbol_bold__1080px__black.png
blogPhoto: /img/uploads/ergoexplainerstoragerent-1-.png
tags:
  - Building Ergo
---
<!--StartFragment-->

**tl;dr: Storage rent is a fee for long term storage on the Ergo blockchain. Four years from your last transaction, you will be charged ~0.14 ERG and a transaction fee to pay for the costs of storing your digital information.**  

![](/img/uploads/group-1.png)

## Storage on the Ergo Blockchain

When you create a wallet, you are reserving space on the blockchain. In the beginning, there is nothing in it but to use this reserved space, you need to transfer ERG to the wallet address. 

This first transaction must have a small amount of ERG. The chain uses this fee to create a digital box where you can store ERG, native tokens (such as SigUSD), NFTs, etc. This is the first link in the chain of the “extended unspent transaction output” (eUTXO) model. In this model, the blockchain sends the unspent part of this transaction into your new box. 

For every transaction on the blockchain, boxes are inputs. A transaction changes those inputs and then the unspent output moves into new boxes.

For example, if you pay for an NFT in a transaction, the person selling the NFT will receive their payment in a new box. This new box will also have all the assets of their previous box.  In return, you receive the NFT, and the contents of your old box, minus the fee (see illustration above). 

The old boxes are now empty. After four years, storage rent removes them from the blockchain.

## What is Storage Rent?

Not all dormant boxes are empty. If a box does not have a transaction for four years and it still has something in it, it is subject to storage rent. Storage rent allows miners to spend a box (providing it is older than the storage rent period), enabling them to collect a fee for storing this box over four years. The fee depends on the size of the box in bytes. Most boxes are small and it costs them only ~0.14 ERG and a transaction fee. Paying storage rent allows boxes to remain on the blockchain for longer than four years and ensures the long-term circulation of ERG.

Let's put this in perspective. If you had 1 ERG in your box, it would take 32 years from your last transaction for a miner to claim the contents of your box. If a box is not used over that period of time, storage rent reclaims its value for the blockchain.

What happens when a box is not empty and it can not pay its storage rent fee?  The miner can claim everything in that box (including tokens and NFTs).

### Avoiding Storage Rent

Each address in a wallet that contains an asset is subject to storage rent. If you merge your assets into one address once every four years, this will reset your four year storage rent clock for that box. It will also reduce the number of boxes charged a storage rent fee.  

## Why Storage Rent?

Garbage collection is a computer programming term for freeing up unused space. Removing empty boxes is a garbage collection process on the Ergo blockchain and storage rent expands this garbage collection process to near empty boxes.

Why is this important? You may have heard of the term "dust."  Dust is small amounts of cryptocurrency left behind after a transaction. Although small amounts of dust have little value, it needs a lot of storage when it is in many boxes. It is therefore useful for a blockchain to have a process to clean this “dust” and make its storage more efficient. Storage rent is that process for the Ergo blockchain. 

Storage rent has additional benefits, as it adds an incentive for miners to secure the blockchain. It helps recover lost coins and tokens and put them back into circulation. Keeping coins in circulation cuts the deflationary effects of lost coins.

The negatives of storage rent are it is a cost to blockchain users, but the fees are minimal and can be avoided with typical use of the blockchain within a four year period. 

The storage rent is also a flexible parameter. It can be changed relatively easily to make it reasonable for everyone. If there are to be any changes to the Storage Rent protocol, such as the four year interval for the fee, a hard fork would be needed. A hard fork is a fundamental change to the Ergo blockchain itself and they are often avoided.

To summarize, storage rent helps keep the Ergo blockchain viable over the long term. It reduces blockchain storage requirements while also incentivizing miners to secure the blockchain. The cost is nominal and is only charged to inactive and/or lost accounts.

<!--EndFragment-->