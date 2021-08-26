---
title: "NIPoPoW Applications: Light Clients and Side Chains"
date: 2021-08-26T17:57:33.134Z
author: root7Z
authorPhoto: /img/uploads/rootz-the-storyteller-4root7z.png
blogPhoto: /img/uploads/nipopows.jpg
tags:
  - Building Ergo
---
<!--StartFragment-->

**Non-Interactive Proofs of Proof of Work** ([NIPoPoWs](https://nipopows.com/)) are important for two essential reasons: Light Clients and Side Chains. These two components are essential for clients and nodes in order to facilitate easier onboarding to the blockchain. A decentralized network is inherently inefficient because of the randomness mechanism in a synchronous network, that is to say every time a transaction (TX) occurs on the network, a couple of random nodes must process the TX to prove and secure its reliability. When put into perspective, that is an enormous task on a global scale. There can be billions of transactions and it is plausible that many of those are from contributors operating with low bandwidth.



# Light Clients



**Light Clients** (aka [SPV](https://ergoplatform.org/en/blog/2020_05_1_spv_security/)) are important when considering the hurdles cryptocurrency faces with mass adoption. Most crypto users do not have the necessary tools to run a full node. Running a full node means having a strong processor with high electricity wattage and more than a hundred gigabytes of memory to store the entire blockchain. Light clients are useful because they enable verification with a limited supply of data providers (nodes) and therefore significantly reduce the amount of data storage and bandwidth needed for everyday users.



The use of light clients with the implementation of NIPoPoWs makes it possible to interact with the blockchain through block headers by using only a couple of kilobytes. Verifying whether a transaction happened on the blockchain becomes simplified. NIPoPoWs can help people to interact with the blockchain through the use of more efficient and convenient mobile wallets.



# Side Chains



**Side chains** on the other hand are a completely different component of blockchain. They are incredibly useful for various elements such as private chains, scalability improvement and cross-chain interoperability. [Kushti mentioned](https://youtu.be/QCMpVRVrHqI) that he will release a side-chain “cookbook,” entitled Ergo-Meta, in the next months. 



One application of NIPoPoWs that we have described in a previous article deals with [logarithmic space mining](https://www.youtube.com/watch?v=s05ypkSC7gk). Logarithmic space mining allows for “light miners.” Similar to light clients, light miners can bootstrap with block headers without downloading the whole blockchain. In a blockchain, it is also possible to store just a few necessary blocks to verify the whole blockchain. This essentially eradicates the need for miners to store all of the blockchain. The integration of logarithmic space mining in Ergo is possible via velvet (soft) forks, therefore preventing the need for painful hard forks.



Another application of NIPoPoWs was proposed in the first [ErgoHack](https://curiaregiscrypto.medium.com/ergohack-results-f7d72711a9db) by a team called SmartPools. SmartPools’ proposal aims to increase the **Nakamoto Coefficient**, a metric for calculating the decentralization of the given network. In our case, the proposal aims to increase the decentralization of the Ergo Platform by bootstrapping mining entities with collateralized smart contracts. The purpose here is to provide returns for non-miner investors and prevent big GPU farms from taking control of the system.



The most well-known example of NIPoPoWs is the implementation of second layer blockchain. Second layers are useful for interacting with different blockchains by increasing scalability and creating private side-chains for enterprise-grade applications. Second layers create blockchains on top of the main blockchain for different use cases. Because transactions can happen on these second layers without constant synchronous updates, the network load can be lowered substantially by keeping everything on the main chain all the time.

**\
The Ergo blockchain has supported NIPoPoWs since its genesis, yet their use cases are still in its infancy. We continue to develop this field of research with our partners at [IOHK](https://iohk.io/) and [EMURGO](https://emurgo.io/) and we expect their application to increase with continued contributions from the community developers.**

<!--EndFragment-->