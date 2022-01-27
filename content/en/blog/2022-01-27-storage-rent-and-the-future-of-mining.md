---
title: Storage Rent and the Future of Mining
date: 2022-01-27T17:23:36.033Z
author: Ergo Platform
authorPhoto: /img/uploads/symbol_bold__1080px__black.png
blogPhoto: /img/uploads/09_ergoblog_cover_01262022-1-.png
tags:
  - Building Ergo
---
<!--StartFragment-->



Miners are the consensus layer of proof-of-work blockchain and the security of all smart contracts relies on them establishing consensus to maintain the network. In return for this service, they receive mining rewards: the total sum of base block rewards and transaction fees. In the case of Ergo, these rewards are paid in ERG - the currency for the network. As the network is used by more and more people, it can be expected that there will be a certain number of coins lost to old and/or inactive addresses. What happens to these lost coins? Can they somehow be recovered and recirculated in the future? Ergo's Storage Rent implementation addresses this concern and is designed to revitalize stagnancy in the coin supply, creating additional sustainability for future mining rewards.



Research shows that [nearly 20% of Bitcoin's](https://www.cryptimi.com/news/new-research-shows-21-of-bitcoin-unmoved-for-5-years) supply has not moved in 5 years. Whether these coins are used or not at a later date, miners need to hold their data without receiving any compensation for that service. Miners are compensated with block rewards and any other transaction fees happening on blockchain. Once Bitcoin’s emission schedule is complete however, the base block rewards will end and mining returns will rely solely on transaction fees. If for any reason transaction frequency suddenly drops on the network, miner fees will be deeply affected and this can cause imbalances in the network's hash power. 



## Enter Ergo's Storage Rent Component



Ergo’s Storage Rent feature aims to tackle two problems:



1. Lost coins and increasing dust
2. Changes to the amount of mining rewards (see daily ETH block rewards)

![](https://lh6.googleusercontent.com/x7uiN72e95m0WTo-6Fz1Tfitae26BsIsjhFt2PUUWnpclTJFsVo-_tU9N3jUVSGZe3COP-G29rf-p7gMsFcWIkisCCiFwxR3iiOEbIh12ZBNTb6OAhpLgk2ShqHANTPCXQVjLT4r)

[Y Charts](https://ycharts.com/indicators/ethereum_block_rewards_per_day)



Miners are the security layer for the proof-of-work blockchain and it is of the utmost importance to provide economic incentives for miners to maintain and sustain the network. Storage Fees are designed to add a layer of predictability for future block rewards. Here is how it works:



There is a fee of approximately 0.14 ERG charged for every UTXO box that is NOT spent within a four year period. The Ergo network is still young, having launched only two and a half years ago. As a result, the Storage Rent protocol has not yet been initiated. The Storage Rent solution was developed from research carried out by the Ergo Platform in 2019: [A Systematic Approach To Cryptocurrency Fees](https://fc18.ifca.ai/bitcoin/papers/bitcoin18-final18.pdf). 

## Dormant Addresses and Digital Scarcity



As the blockchain gets older, potentially lost coins could create a deflationary trend for the remaining circulating supply. This issue is of great concern to the long term sustainability and viability of the blockchain. Deflationary assets disincentivize spending habits because coins become increasingly scarce. One could argue that this could be profitable due to the "scarcity increases value" equation, yet in the future, block rewards have the potential to be more unpredictable when relying solely on transaction fees.



Ergo is a proof-of-work smart contract platform and all interactions require ERG to execute. Miners are the security layer of the blockchain, therefore a liquidity incentive will secure their active participation. Inactive participants will also need to pay fees for storing their coins. All  of the blockchain’s infrastructure relies on miners to secure data. As blockchains grow, there will be more dormant wallet addresses (as history has shown with Bitcoin). Storage Rent aims to provide more sustainable incentives for the miners by adding these coins back into circulation. 



Additionally, if an address with different assets does not have enough ERG coins to pay the Storage rent (an address with other native assets and/or NFT’s), these assets can be mined back into circulation. That means, NFTs and other tokens on Ergo can be seized by miners as a block reward. There is the potential for a sort of [storage wars](https://curiaregiscrypto.medium.com/the-value-of-storage-rent-mining-on-ergo-b9e22d788d2) among mining pools to get control of these assets down the road but users will be protected with UTXO consolidation features that will be added to wallets required to pay storage rent.



Ergo has a hard-capped supply of 97 million coins. This limited supply already creates scarcity for ERG coins. If a portion of the supply happens to be lost or permanently stored in unused addresses, the network Storage Rent protocol will slowly reclaim these coins - at regular intervals if these assets continue to be unused over a significant period of time. Storage rent is an innovative and novel solution that aims to increase holder interaction while striking a balance between digital scarcity and long-term incentives. 

 

If you would like to further explore Ergo’s Storage Rent protocol after this introduction, we recommend the following article: [The Value of Storage Rent: Mining on Ergo](https://curiaregiscrypto.medium.com/the-value-of-storage-rent-mining-on-ergo-b9e22d788d2). 



<!--EndFragment-->