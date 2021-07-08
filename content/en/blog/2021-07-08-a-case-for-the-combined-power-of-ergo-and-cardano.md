---
title: A Case for the Combined Power of Ergo and Cardano
date: 2021-07-08T11:45:12.011Z
author: Ergo Foundation
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/1_70ukrjwixwgrxoxbgdl3fq.jpeg
tags:
  - Building Ergo
  - Roadmap
  - Partnerships
---
<!--StartFragment-->



Elon Musk recently announced that Tesla will no longer accept Bitcoin payments due to its excessive energy consumption. Seeking an alternative option, Tesla will instead explore the "green" crypto market for a viable solution. This news has once again revived the debate between Proof of Work (PoW) and Proof of Stake (PoS) consensus schemes.

## Decentralized Finance vs. Traditional Finance



Bitcoin pioneered Proof-of-Work and relies on miners crunching numbers and consuming energy to keep the system alive. Currently, this now amounts to a massive [0.55%](https://cbeci.org/cbeci/comparisons) of total global energy consumption - as much as some small countries like Malaysia or Sweden. When considering this information Bitcoin appears problematic, yet what is the energy usage of the entire global monetary system?



One important fact to remember is that [75% of Bitcoin’s electricity consumption comes from renewable sources](https://www.ledger.com/energy-consumption-crypto-vs-fiat) such as wind, solar, and hydropower. In theory, cryptocurrencies can last forever while monetary paper systems have a finite life cycle. The use of cotton, ink, water and metals are needed to constantly maintain the supply of paper money. [One report](https://docsend.com/view/adwmdeeyfvqwecj2) claims that traditional banking systems already use double the amount of Bitcoin’s energy consumption. The traditional banking system also has a constant requirement for middlemen during accreditation, who can now be replaced with immutable smart contracts.



## Scalability



Ergo is one of the most sophisticated protocols in the crypto space with stateless clients, NiPoPoWS for light clients, and easy voting on mining parameter changes (e.g, block size).

Layer 0 - Ergo Core - A lot of efficiency improvements have been completed in the node with v4.0.8 (20-50x gains are still possible here). Quick bootstrapping using NiPoPoWs proofs and UTXO set snapshots are also planned.

Layer 1: Ergo has an extension section in its code that allows for the implementation of a wide variety of scaling solutions such as Sharding, Hydra ([IOHK's Hydra paper](https://iohk.io/en/research/library/papers/hydrafast-isomorphic-state-channels/) mentions Ergo), and BitcoinNG-style macroblocks. This also enables Ergo to do generic sidechains with velvet or soft forks.

Layer 2 (off-chain) - Ergo should be compatible with the Lightning Network, Rainbow Network, and many more. This implementation will be dependent on the needs of the applications being built on Ergo.



## PoW vs PoS - Which one?



Unfortunately, this is not an easy question to answer as each possesses different advantages. 



PoS blockchains must usually launch an [initial coin offering](https://www.investopedia.com/terms/i/initial-coin-offering-ico.asp), meaning there is a certain amount of pre-mined tokens allocated to development teams and private sales. There is often a debate as to whether this is a true form of decentralization since it allows founders and venture capitals to have a head start in the acquisition of tokens. 



On the other hand, PoW-based coins can have a more fair launch where the foundation team starts on equal footing with every other participant in the network. In this system, only a small amount of the mining rewards are delegated to the foundation treasury for the development of the ecosystem. Ergo’s treasury rewards, for example, consist of only 4.37% of the total mined supply. Depending on the crypto project, this figure can vary.



Security is often a controversial topic when comparing PoW and PoS networks. PoW can be susceptible to 51% attacks. This is where a malicious actor takes over 51% of the network’s hash rate to sabotage the blockchain. Ergo’s memory hardening protocol is an important and unique feature for guarding against these attacks. In order to overcome this protocol, a malicious actor would need a vast number of individual GPUs.\
\
PoS, on the other hand, relies on staked assets. In this model, a malicious actor must take possession of more than 51% of the staked coins. While this may sound nearly impossible, one must consider the floating percentage of staked coins at any given time. Staked amounts on the network may drop when the yields from DeFi platforms surpass the yields from staking, thereby making the system vulnerable. In Cardano, staking has been worked into the DeFi contracts to allow dynamically staked ADA, and delegation to stake pools is relatively autonomous for this same reason. However, the truth is that Goguen is not live and the security assumptions have yet to be tested in the real world. One reason Input Output Global (IOG) spent so much time in Shelley was to perfect seamless staking because they are aware of possible issues and are working to mitigate them. 



The PoS model is much more efficient in terms of energy consumption than PoW. However, efficiency might present a security problem for any of the aforementioned reasons listed. The implementation of [NIPoPoWs](https://nipopows.com/) would help PoW networks scale more efficiently. PoS systems have a headstart on scaling and energy efficiency but the possible security trade-off it brings has not yet stood the test of time. Likewise, NIPoPoWs are still in their infancy and have not been realized to their full capacity.



It is important to take note of the Lindy effect which is linked to Bitcoin’s monetary evolution. It states that the life expectancy of technology is proportional to age. It will take time for the Proof of Stake consensus to be tested, realized and actualized. This is particularly important when compared to the Proof of Work consensus, which has over a decade of battle-testing with no known immutability breaches or downtime. A rigorous academic approach is needed to build the foundation of Proof of Stake, with years of testing ahead to prove its resiliency. 



In order for Proof of Stake to maintain stable growth it is important to recognize the possible caveats and pitfalls. It is no coincidence that this is exactly what IOHK, Emurgo and the Cardano Foundation are focusing on.



However, one must consider that there is not one chain to rule them all. Both systems (PoS and PoW) can be combined to complement each other and work in synergy for a more effective use-case.



## The Combined Power of PoS and PoW



Readers may have noticed the [ErgoDex proposal on Catalyst](https://cardano.ideascale.com/a/dtd/ErgoDex-Plutus-Port/352410-48088) - a graphic of the roadmap is available below. After the initial application is deployed on both Cardano and Ergo (using each token natively as needed), the real power of the eUTxO model will start to emerge. Ergo will seek to provide trustless swaps, cross-chain gateways and shared liquidity between the two chains. 



A decentralized [stablecoin](https://sigmausd.io/#/) protocol, oracle pools, privacy futures and sidechain development will be the first building blocks of a robust decentralized economic model on Ergo.



 

![](https://lh5.googleusercontent.com/KRHyU3LiETc9NYy506_YHFAoCueIFckMU9cwpLp5pyZrWAZ7sVQt07-elduUMAE7NF2H0sXHPrKQSQnMsHVIerN5fP9xxp_-ogoiLtRxY9Oc_-SNrC6v7ZokGYptG8SZETc2xWum)



Ultimately, we want our future to be more green and for this to happen humanity as a whole must move toward renewable energy sources. Blockchains are still in their infancy, so it is important to understand that energy concerns were considered when the Ergo Platform was born. Ergo is built to tackle scalability and security problems with a novel UTXO design.



*For more information on the inspiration behind Ergo, please see [The Ergo Manifesto](https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/).*



<!--EndFragment-->