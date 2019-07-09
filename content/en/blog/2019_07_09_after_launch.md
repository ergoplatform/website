---
title: "After-Launch Thoughts and Ergo Roadmap"
date: 2019-07-09
draft: false
author: "Alex Chepurnoy"
authorPhoto: "/img/authors/alex_chepurnoy.svg"
blogPhoto: "/img/blog/thanks.jpg"
---

Firstly, we would like to thank many enthusiasts, developers, miners, other folks, and our families for measureless help with Ergo development and launching. The launch finishes a few years period of initial research and development by the Team, and also starts a new epoch, where the core technology is mostly set in stone and gradual improvements in protocol implementations and infrastructure projects become the main focus.
  
The current core Ergo Core Team remains fully committed to the project (at least, while the Foundation Treasury enables that). With that in mind, let me give the light on current status of the project and future plans.

## Current status

In the first place, let me remind some keypoints of Ergo:

1. It is still a conservative Proof-of-Work blockchain with a strictly limited coin supply, a Bitcoin-like transactional model, a cautiously chosen target delay between blocks, and so on. In that sense Ergo is similar to Bitcoin, and time has proven that this is the best choice for those who value decentralization and sound money.

2. Despite Bitcoin-like transactional model (with one-time unspent transaction outputs), Ergo supports enhanced contractual money possibilities without sacrificing security. We already have examples for crowdfunding, ICO, cold wallet contract, and so on. Also, Ergo provides best access to generic discrete log based zero-knowledge proofs, and thus it is better (in some cases, the only choice) for protocols to be built on top of it. For example, there is 2-out-of-3 multi-signature already done in the network, and this signature preserves zero-knowledge (so no third-party observer can ascertain which two parties actually signed the transaction input). In the same way, ring signatures (1-out-of-N signatures preserving zero-knowledge) are coming for free. Also please take a look at Ergomix, a [non-interactive mixing scheme](https://docs.ergoplatform.com/sigmastate_protocols.pdf), and maybe the first practical non-interactive mixing proposal.

3. Ergo has native support for custom tokens. Also it has support for authenticated data structures which can be trusted (modification of a dataset happening outside the blockchain by a trusted party) or trustless (modifications are happening on-chain as defined by a contract, but only very compact dataset digest is stored in UTXO set anyway).

4. It has pool-resistant and (somewhat) ASIC-resistant Autolykos Proof-of-Work scheme, which is targeting top-level GPUs, with best performance being on GPUs with 8gb+ RAM.  

5. For better decentralization in regards with possible full-nodes count decline with time, Ergo for first time supports stateless fully secure clients. Efficient SPV clients support is also done, but via [NIPoPoW technology](https://nipopows.com/), not the FlyClient used in Grin.

6. No need for hot debates on changing block size and many other parameters. Just using block size as an example, a miner can simply start voting at the beginning of an epoch (consisting of 1,024 blocks), and if 50+% of miners within the epoch support a change (1% block size increase or decrease in block size), it will happen. For many aspects of the protocol, soft-fork updates are possible, if 90+% of mining power votes are for a soft fork. Here Ergo is finishing what Bitcoin, with its soft-forkability, and Ethereum, with its dynamic gas limit per block readjustment, have started.

All of these features are probably not very visible now, just one week after launch, but they will define unique Ergo characteristics in the long-term. Please note, for success in the long-term, you need to go from first principles. 
Ergo is doing that, and not in the tech only: please note that Ergo has well-defined social contract described in Section 2 of the whitepaper. 

## Further Ergo Core Team Duties

While the reference node implementation is working more or less well, its interface could be confusing even for skilled users, and there is no infrastructure, such as wallets, frameworks to develop applications etc. Thus the core team will spend coming months on delivering needed frameworks and API improvements and supporting wallets and exchanges, some of which are already in-process. Also note that many components of the node are not efficient now, so performance of the node will be significantly increased in the observable future. At the same time, external teams continue to do security audits. The most critical parts of protocol design and reference implementation have already been audited, sometimes by more than one party.

## Hardforking policy

Ergo is trying to avoid hard-forks. Emission, proof-of-work, basics of transactional model and other core things should not be changed at all as any change about core parts of design means another chain. However, developers may propose hard-forks within first 12 months if (and only if):

* a hard-fork is about security fixes only. The only exception is about making cost of particular instructions adjustable
via miners voting, which was planned but not delivered in the current mainnet.
* a hard-fork is supported by 90+% of miners.
* a hard-fork is not breaking old contracts, freezing or moving any funds.

## Community Matters!

Development should become more transparent and open to external contributors, with gradual switching to EPIPs (EPIP stands for Ergo Platform Improvement Proposal), formal documents appearing and discussed before implementation like Bitcoin and Ethereum are already using BIPs and EIPs, respectively. 

Ergo is also in need of an ecosystem of frameworks and applications around it. A part of the treasury will be spent on grants for ecosystem developers. Details of the grant program will be announced later, however, you may contact the Ergo Core Team right now with any proposals. Also, the team would be happy to help with advice, needed API improvements, and so on. From an investor perspective, investing in projects on top of Ergo may be more valuable in comparison with other blockchains, considering the commitments to protocol stability made by the team.  

Also, please spread the word about Ergo! We are a nascent blockchain getting it's feet off the ground and are looking for contributors who are interested in writing documentation, articles, and other material.

## Ergo and Ergo Data

Initially, it was announced (couple of years ago) that two chains will be launched, Ergo and Ergo Data. Technology would be the same (or very similar), but parameters are different. The main idea behind Ergo Data is to serve needs of data-intensive applications, such as land registries, certificate directories etc. 

Currently, Ergo Data plans are unclear. The network will be launched only in case users will show demand for it. Also, 
Ergo Data would most likely be a sidechain of Ergo. Also, it will not be launched soon in any case, and only after Ergo  having established a solid infrastructure base. In case of Ergo Data chain being launched, EFYT holders at the moment of Ergo launch will get ErgoData tokens. A snapshot of EFYT holders at the moment of launch has already been done.
