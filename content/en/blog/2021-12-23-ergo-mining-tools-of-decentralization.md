---
title: "Ergo Mining: Tools Of Decentralization"
date: 2021-12-23T17:20:48.055Z
author: Ergo Platform
authorPhoto: /img/uploads/symbol_bold__1080px__black.png
blogPhoto: /img/uploads/news-blog-8.png
tags:
  - Building Ergo
---
<!--StartFragment-->

Ergo is a PoW (Proof-of-Work) blockchain on the consensus model called Autolykos. The PoW model was chosen because it offers the benefits of a fair launch. A fair launch means that the Ergo Platform did not pre-mine an allocation for the team or venture capitalists. The supply of ERG is only released via the mining protocol with the ecosystem development treasury receiving 10% of the mining rewards during the first two years after mainnet launch. After 2.5 years from launch, the ecosystem development treasury allocation drops to 0%. From this point on, the treasury will not receive any more funds from the block rewards.



#### It is important to note that the treasury allocation represents only 4.43% of the total ERG supply. This means over 95% of ERG is allocated to public circulation.



Ergo has many different tools to support privacy and the decentralization of the network: ErgoMixer, On-Chain mining, AMM off-chain bots, and other planned implementations (such as light-mining with NIPoPoWs). In the extended UTXO (eUTXO) model, both the on-chain and off-chain parts can be used in combination, which boosts both the user and miner experience with a more secure and scalable network.



Security is always of the utmost importance and Ergo’s novel features are designed to allow  miners to help support the network while maintaining the highest security standards. The following represents an overview of some of the features that ensure the decentralization and sustainability of the network:



1. **Autolykos:** 

It is a GPU mineable, ASIC resistant consensus algorithm. Ergo is mineable with 4GB graphic cards, therefore it is more accessible to the public. As more miners get on board and increase the hashrate, solo mining becomes increasingly difficult. It is always a priority to diversify the number of mining pools to increase decentralization - this is something the Ergo Platform actively promotes. At present, there are over 15 pools that support Ergo mining.



2. **NIPoPoW Mining:** 

Since diversifying and increasing mining pools is an important aspect of decentralization, creating blockchain tools to support the decentralization is equally important. Ergo offers Non-Interactive Proofs of Proof of Work (NIPoPoWs) that can be set up as new and novel tools for decentralized mining.   



One of the implementations of NIPoPoWs is Logarithmic Space Mining (explained in detail in this [article](https://ergoplatform.org/en/blog/2021-07-19-mining-in-logarithmic-space-nipopow-power-and-ergo/)) and its ability to set up miners with light-bootstrapping. This means that miners do not need to download the whole blockchain when light-mining, allowing miners to greatly reduce the mining costs of an ever-growing blockchain in the future.



3. **On-Chain Mining:**

This was an idea from ErgoHack I that turned into a project during ErgoHack II. On-chain mining offers interaction with a smart contract, thereby allowing for a more transparent and verifiable process when mining on a pool. In regular mining pools, solo miners connect to centralized servers and mine as a pool. Within this structure, it is impossible to verify whether miners are getting their rightful shares. With on-chain mining, miners can verify that what they are getting is what they’ve been promised - it aims to remove the barriers between individual miners and the mining pools.



4. **AMM Bots**

ErgoDEX’s off-chain model led to some debates over the decentralization of the application. As Armeanio [explained here](https://ergoplatform.org/en/blog/2021-10-04-off-chain-logic-and-eutxo/), distributed off-chain bots will solve the problem of centralized nodes for the ErgoDEX. When people have incentives (such as DEX execution fees) to run the AMM bots, an increased number of users running the back-end of ErgoDEX is expected. A similar design can be applied to other DeFi applications on Ergo. 



5. **ErgoMixer:**

ErgoMixer is the first non-interactive, non-custodial mixer on the blockchain. It is a useful component for those who want to keep their transactions private. Ergo’s native Sigma Protocols also provide a variety of other privacy schemes. For example, when stealth addresses are implemented within smart contracts, privacy can be a choice when interacting with the blockchain. 



6. **Storage Rent:**

This component is explained in [Cryptocurrency Fees: A Solution to Unreasonable State Growth](https://ergoplatform.org/en/blog/2021-07-09-cryptocurrency-fees-a-solution-to-unreasonable-state-growth/). In short, it is useful to eliminate the issue of lost coins and unused smart contracts that consume space on the blockchain. The storage rent component is included in the genesis block to sustain the mining protocol in the future when block rewards start decreasing. Employing this component, unused addresses will pay a storage fee of around 0.13 ERG per UTXO box every four years. This feature allows for the reintegration of ERG into circulation while decreasing network bloat from unused data bytes. Through this process, miners will be able to mine both transaction fees and storage fees when block rewards from the emission drop to zero.



<!--EndFragment-->