---
title: Chainlink Oracles vs. Ergo Oracle Pools
date: 2021-04-27T22:31:50.759Z
author: root7Z
authorPhoto: /img/uploads/rootz-the-storyteller-4root7z.png
blogPhoto: /img/uploads/pool.png
tags:
  - Building Ergo
---
<!--StartFragment-->

*The design of Ergo’s oracle pools are more efficient and programmable than using multiple single oracle data points such as in Chainlink’s oracle design. We build hierarchies of confidence using oracle pools and pools of oracle pools in Ergo. It's faster, cheaper, and more beneficial to the end user.*



## What are oracles?



Oracles in blockchain serve as messenger agents, connecting two distinct points of data sources while guarding the reliability of the information. This is indeed a valuable job as many people and decentralised apps rely on these datapoints to ensure continuous operation. Furthermore, because decentralized finance doesn't use middlemen, the *accuracy and speed* of oracles are even more vital to sustaining a functioning blockchain ecosystem. Oracles keep both internal and external communication of an application and ensure its consistent and robust operation.



A real-world example of this is the sigmausd.io stablecoin, which utilises an ERG/USD oracle pool and  refreshed every 12 minutes. When such large amounts of collateral are at stake, it is vital that these data points are accurate and reliable. 



In DeFi, 3rd parties can also benefit from oracles via incentives to keep the network safe. This makes personal investors valuable participants in the ecosystem. Not only the banks or big institutions - individuals can also participate and get rewards for contributing to the system. People can benefit from this immense transaction of data by acting as a data feed themselves.



## Hierarchy of Trust



Yet the internet deals with a great amount of data and it's not true that everything is right. That's why it's important to access real information. This can be done via assessing a *trust score* to data sources, regrouping them and putting them on a hierarchical trust level. That's how we can effectively use an immense amount of data easily and fast. Chainlink's design doesn't allow that because it has an individualist design, and it's hard enough encoding hierarchical trust scores to individual oracles, nevermind oracle pools.



Ergo Blockchain utilizes Multi-Stage Contracts with an extended version of the original UTXO model that Bitcoin is based on. This allows creation of hierarchical trust structures that the Account-Based model of Ethereum isn’t capable of. Later on, this facilitates rewarding oracle initiators in a *top to downward mechanism* based on a trust score. This implementation isn’t possible on an Account-Based model like Ethereum and can lead to errors and increased transaction costs. 

## Governance And Incentives



There shouldn't be more complex governance ideas we believe, anyone who has skin in oracle pools should have a vote. That's how participants can decide what's best and everyone will have a chance to directly participate in governance without any protocol tokens. Oracle pools are very flexible in design, and it can be designed as more than a passive reputation system and also enables DAO governance models.



Because it's in their best interest, individual oracles will choose to behave in order to earn money and vote on parameters. Oracle Pool design boosts this incentive and makes participants more prone to cooperation, securing reliable data sources for users and dApps. When users can access data directly from pools, there's no need for oracle users to *waste their tokens* as they do in the oracle design used by Chainlink. This would reduce the cost a lot by direct access to on-chain data. However, because oracle pools work faster and much more effectively, these small fees can take up to a lot of revenue.



*Alexander Chepurnoy(aka Kushti), in 2014, was working with Sergey Nazarov in smartcontract.com, the former Chainlink. Ergo Blockchain's Oracle Pools have greater longevity, effectiveness and accessibility than Chainlink's oracle design. Moreover, the UTXO design of Ergo brings cheaper and faster transfer with robust security. Oracles are the backbone of a functioning decentralized finance system. For a robust DeFi ecosystem, oracle solutions are of great significance and need to be dealt with care.*



##### Sources



<https://veriumfellow.medium.com/oracle-special-4e36cfa6a852>



<https://ergoplatform.org/en/blog/2020-11-09-first-steps-towards-interoperability-with-cardano-oracles/>



<https://github.com/Emurgo/Emurgo-Research/blob/master/oracles/Oracle-Pools.md>



<https://emurgo.io/blog/emurgo-releases-oracle-core-for-developers>



<!--EndFragment-->