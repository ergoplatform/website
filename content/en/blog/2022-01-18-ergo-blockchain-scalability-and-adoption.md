---
title: "Ergo & Blockchain: Scalability and Adoption"
date: 2022-01-18T17:48:31.980Z
author: Ergo Platform
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/06_ergoblog_cover_01182022-1-.png
tags:
  - Building Ergo
---
<!--StartFragment-->

In this episode of the Ergo & Blockchain series, we will look at various aspects of [scalability](https://www.investopedia.com/terms/s/scalability.asp) and why they are crucial for cryptocurrency adoption. Since the introduction of smart contracts to blockchains, the industry has witnessed issues relating to exponential growth for storage, node requirements and increased gas fees. These issues have created barriers of entry for new people, often due to high transaction fees. There are few options to reduce the congestion and increase throughput, either through upgrading hardware and using more energy or by making the underlying infrastructure more efficient.



## Vertical Scaling



Vertical scaling is the easiest way to increase a network’s scalability. In this model, scalability is increased by upgrading the computational hardware and using more energy. There is no software development because bandwidth increase relies on brute power. That is why there is a limit to this type of development - expenses increase as the network grows. 



When looking at blockchains, vertical scaling means that the validator nodes have high hardware requirements. Inevitably, this causes decentralization only when big actors with powerful servers participate in network consensus. In this case, a blockchain can easily achieve thousands of transaction-per-second (TPS) values. This type of blockchain would represent a network with only a couple of nodes representing the whole consensus.



Suppose only a handful of validators are guarding the network. In this case, the network can be called blockchain as a service (BaaS), which means that a third-party provides a cloud service to deploy decentralized applications. The problem with this model is that the network contains centralized points of failure. Hence, only the service providers can maintain the consensus mechanism and it can be difficult for new participants to join the consensus.



## Horizontal Scaling



Horizontal scaling indicates that the existing resources (ex. hardware and energy) are not altered but the network’s capability to use the resources is scaled up. There are higher costs (at least in the short term) to this development, as it needs more human resources, more research and more time without the promise of instant returns. Yet, technological advancements can be a collaborative development and a power that fuels more research. Following that path, the returns can increase exponentially over time.



Apart from reducing the computational costs in the long term, another benefit of this type of scaling is the ability to decrease centralized points of failure. As the network relies less on supercomputers, more actors can own the network and the blockchain can become more decentralized. That being said, it is always up to individuals whether they want to use existing solutions or support new advances.



## Cryptocurrency Adoption



It is a certainty that blockchains need to scale to accommodate mass adoption. As mentioned above, this can be achieved by either using more powerful servers or utilizing smaller units more effectively. For the mass adoption of cryptocurrencies, blockchains must handle a vast number of transactions, including micropayments and simple signing contracts.



Layer 2 scaling solutions are smart contracts that facilitate blockchain transfers by reducing costs and processing time. Layer 2 solutions are also called off-chain solutions because the transfers and interactions do not happen on the main blockchain. Instead, users interact with a separate layer connected to the main blockchain. To use Layer 2 scalability, one must first bridge the assets from the main chain to the off-chain protocol.



## Layer 2 Solutions



**Lightning Network:** Layer 2 solutions also have validator nodes, so their security is not always tied solely to the main chain. For example, [Lightning Network](http://lightning.network/how-it-works/) is a Bitcoin scaling solution and it also has its own nodes that validate transactions. There are no mining rewards for hosting a Lightning Network node so the node operator income relies solely on transaction fees.



**Plasma Chains:** This is a hybrid approach (which is applied by Polygon) that uses a proof-of-stake (PoS) consensus layer on top of Ethereum. This parallel side-chain, which is based on the [plasma chains](https://ethereum.org/en/developers/docs/scaling/plasma/) design, is a lower-cost chain that relies on stakeholders to secure the network. As the staking tokens interact with the main chain, the model uses some part of Ethereum’s security and some part of its own inside PoS consensus. When users stake their tokens, they delegate the consensus to a validating operator, known as trusted and secure server providers.



**ZK-Rollups:** Also called [zkSNARK](https://blog.ethereum.org/2016/12/05/zksnarks-in-a-nutshell/)s (zero-knowledge succinct non-interactive arguments of knowledges), they can decrease network load by enabling transactions to be processed in big batches. The security of the transactions relies directly on the main-chain secured by adding mathematical proofs to validate transactions. However, it is relatively harder than hybrid approaches to implement all the functionalities of the mainnet with full security. Various projects are developing their own approach for implementing zkSNARKs.



**Optimistic Rollups:** [Optimistic Rollups](https://docs.ethhub.io/ethereum-roadmap/layer-2-scaling/optimistic_rollups/) work a little bit differently than plasma and zkSNARK in terms of securing the layer. Optimistic rollups compute the transactions on a parallel EVM compatible chain called Optimistic Virtual Machine (OVM) and communicate with the main chain. The model is called optimistic because it relies on the Fraud-Proof principle, where the aggregators are not actively verifying layer 2 but they interfere in the event of a fraud dispute. 



**State Channels:** Lastly, a model called state channels is a type of peer-to-peer signing model and the design can also be used as payment channels for simple purposes. The problem, however, is the state channels are pre-set contracts for which the participants are defined at the launch. Each time a new participant wants to use the channel, a new contract creation is needed. In return, there is higher privacy and security but little to no flexibility for an open system. IOHK research members published a new model called [Hydra: Isomorphic State Channels](https://iohk.io/en/research/library/papers/hydrafast-isomorphic-state-channels/) that introduces multi-party state channels by utilizing both on-chain and off-chain computations powered by the eUTXO design.



**NIPoPoWs:** [Non-interactive proofs of proof of work](http://docs.ergoplatform.org/dev/protocol/nipopow/) is a generalized term that refers to light clients and side-chains. Light clients, which consist of light nodes and light wallets, are efficient clients that do not need to hold the whole blockchain to verify transactions and enable efficient mobile wallets and faster miner bootstrapping. Clients can interact with each other using only the block headers, thus reducing computational resources. Ergo has enabled NIPoPoW support since the genesis block and they can be applied to Ergo’s blockchain with an easy to implement [velvet fork](https://www.coindesk.com/markets/2018/03/15/velvet-forks-crypto-updates-without-the-controversy/). NIPoPoWs can also be deployed to support PoW and PoS cross-chain communication.



*In the next article, we will analyze the topic of Sustainability & Growth of blockchains. By doing that, we will take a look at the history and the current ecosystem; how the legal landscape is evolving, which kind of actors are participating and what kind of problems we may expect to encounter.*



 **Previous Articles:**

[Ergo & Blockchain: Cryptocurrency Sphere](https://ergoplatform.org/en/blog/2021-10-26-ergo-blockchain-cryptocurrency-sphere/)

[Ergo & Blockchain: Tokenomics and Finance](https://ergoplatform.org/en/blog/2021-11-05-ergo-blockchain-tokenomics-and-finance/)

[Ergo & Blockchain: Privacy and Security](https://ergoplatform.org/en/blog/2021-12-02-ergo-blockchain-privacy-and-security/)

[Ergo & Blockchain: Technology and Innovation](https://ergoplatform.org/en/blog/2021-10-26-ergo-blockchain-cryptocurrency-sphere/)



<!--EndFragment-->