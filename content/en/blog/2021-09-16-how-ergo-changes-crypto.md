---
title: How Ergo Changes Crypto
date: 2021-09-16T16:07:59.668Z
author: Ergo Foundation
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/how-ergo-changes-crypto.jpg
tags:
  - Building Ergo
  - Roadmap
---
<!--StartFragment-->

## Tokenomics:



Decentralization was one of the most important priorities for Ergo’s launch. There was no pre-mine and there was no pre-allocation to an ICO or Venture Capital investments. Additionally, only 4.37% of the total ERG supply is gradually delegated from the block rewards to the Ergo Treasury.\
\
Ergo mining will end in 6 years and from that point onwards, miner rewards will be supplied by transaction fees and storage rent from unused old data bytes in the blockchain.

## Mining:

Autolykos has several differences from Bitcoin's PoW. It does not allow ASIC miners, and is mined with 4-8 GB GPUs, therefore it is easier for the community to acquire the mining equipment.



NIPoPoWs can be used to increase decentralization with non-interactive mining pools. They also allow light miners through the implementation of logarithmic space mining. By mining in logarithmic space, miners will not need to store the whole blockchain data and they can bootstrap using just block headers.



## dApps

Ergo is built for secure and functional decentralized finance for everyone. Decentralized applications on Ergo are governed with smart contracts and they are immutable and trustless. ErgoDEX, Oracle Pools, SigUSD, ErgoMixer are the flagship prototypes of UTXO based decentralized finance. Users can explore all of Ergo’s dApps at [sigmaverse.io](http://sigmaverse.io), the dApp hub of the Ergo ecosystem.



Users can interact with the dApps with non-custodial wallets like Yoroi or mobile wallet. 



## Non-Interactive Proofs of Proof of Work:

Non-Interactive Proofs of Proof of Work ([NIPoPoWs](https://nipopows.com/)) have been implemented on Ergo since the genesis block. NIPoPoWs are short stand-alone strings that indicate a selected pool of blocks to verify if an event happened on a proof-of-work blockchain. They interact by using only block headers, without needing to download the whole blocks.

NIPoPoWs also allow for a flexible off-chain computations layer, also known as a side-chain. Sidechain applications can provide second layer scalability solutions, light clients and light nodes. They can also be implemented for cross-chain interoperability. 





## Stable Coins

Unlike the protocols using the collateral-debt positions (CDP) model, such as DAI, Ergo has created the [Sigma USD](https://sigmausd.io/#/) stablecoin protocol based on the reserve-backed model. The CDP model can cause cascading liquidations during extreme volatility, whereas the reserve-backed model will not face this issue when keeping the coin pegged to one dollar.



SigUSD is backed by SigRSV reserve tokens with a predefined locking mechanism. The protocol will not allow for further SigUSD minting if SigRSV tokens can not hold the 400% reserve ratio. Likewise, SigRSV minting is not possible if the reserve ratio goes beyond 800% This is to protect reserve holders from malicious actors during ERG price volatility.



## Extended UTXO Model

Ergo employs many of the tested and established features of Bitcoin while also implementing advanced new cryptographic features based on peer-reviewed academic research.



Ergo is developed on Bitcoin’s UTXO model with the implementation of Multi-Stage Contracts. Ergo’s extended UTXO (eUTXO) model can provide parallel computations, stateful contracts and enhanced cryptographic features as well as a whole host of other applications. 



<!--EndFragment-->