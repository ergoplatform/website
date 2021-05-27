---
title: "Ergo: Secure and Green Blockchain"
date: 2021-05-27T12:30:26.829Z
author: root7Z
authorPhoto: /img/uploads/root7z.jpeg
blogPhoto: /img/uploads/greenblock.png
tags:
  - Building Ergo
  - Roadmap
---
<!--StartFragment-->





Some of you may have noticed that  Elon Musk announced Tesla will no longer accept Bitcoin payments due to excessive energy consumption and they will look into greener cryptos. This has again sparked the debate between Proof of Work (PoW) and Proof of Stake (PoS) consensus schemes. Granted, ERG did not seem to notice.

## Efficiency and Decentralization



Bitcoin pioneered Proof-of-Work relies on miners crunching numbers and consuming energy to keep the system alive. Currently, this now amounts to [0.55%](https://cbeci.org/cbeci/comparisons) of total global energy consumption, as much as small countries like Malaysia or Sweden. In these terms, Bitcoin sounds problematic: yet how much energy does the global monetary system use?



One important fact to remember is that [75% of Bitcoin’s electricity consumption comes from renewable source](https://www.ledger.com/energy-consumption-crypto-vs-fiat)s such as wind, solar, and hydropower. Cryptocurrencies, in theory, last forever, while paper monetary systems have a finite lifecycle. The constant use of cotton, ink, water, and metals are needed.\
\
The traditional banking system also has a constant requirement for middlemen during accreditation which can now be replaced with immutable smart contracts. [A report](https://docsend.com/view/adwmdeeyfvqwecj2) claims that traditional banking systems already use double the amount of Bitcoin’s energy consumption.



## Autolykos



Bitcoin is old, its design is primitive. We can do better. New hashing algorithms can utilize more efficient techniques to improve energy efficiency; and this is where Ergo’s unique consensus mechanism [Autolykos](https://ergoplatform.org/docs/teaser.pdf) shines.



As we moved up the ranks,  Autolykos began to shine and rose to its rightful #1 spot on [whattomine](https://whattomine.com/). In future, when big miners arrive there will be proper analysis made public because the analysis won't be possible until it's a blockchain with a large hashrate. With Autolykos, many miners would have noticed lower temperatures with greater hash rates than they’re used to. This comes down to Ergo’s research-based, methodological approach. The core is written in Scala, a functional programming language in the same realm as Cardano’s Haskell. To compare, regular GPUs with 4-8GB memory would yield double the amount of hash-rate than for Bitcoin or Ethereum. This is thanks to the memory hardening protocol of Autolykos. By hardening the hashing algorithm, Ergo is hardened against the ASIC mining rigs that plague most PoWs and is instead optimised for household miners. This would giving amateur miners an equal chance against farming companies and provide robust decentralization.



[Ergo also implements NIPoPoWs](https://nipopows.com/) to enhance its scalability and minimize energy consumption. Non-Interactive Proofs of Proof-of-Work (NIPoPoWs) remove the need to download all block headers to interact with the blockchain. 



Last but not least, Ergo has a “[storage rent”](https://ergoplatform.org/en/blog/2020_04_21_ergo_positioning/) component. Coins that remain unmoved for four years start decomposing very slowly to prevent system congestion. This allows miners to not target monetary inflation and transaction fees,but also lost and forgotten coins. In the end this ensures that a faster, scalable and effective monetary design can be established.



## PoW vs PoS - Which one?



Unfortunately, we can’t answer this question all at once. Each has an advantage over the other. To be less obtuse:



PoS blockchains must launch usually with an [initial coin offering](https://www.investopedia.com/terms/i/initial-coin-offering-ico.asp). That would mean that there is a certain amount of pre-mined tokens allocated to teams and private sales. This isn’t a healthy mode of decentralization as it gives founders and venture capitals a head start. 



PoW-based coins, on the other hand, can have a more fair launch. The foundation team can start in equal conditions with every other participant. In this system, only a small amount of mining rewards can go to the foundation treasury for ecosystem development. Ergo treasury rewards, for example, consist of only 4.37% of the total mined supply. This figure varies massively from project to project.



Security is a controversial topic when comparing PoW and PoS networks. PoW is susceptible to [51% attacks](https://www.investopedia.com/terms/1/51-attack.asp), where a malicious actor takes over 51% of the network’s hash-rate to harm the blockchain. Ergo’s memory hardening protocol is an important factor for guarding against these attacks because it would require a vast  amount of individual GPUs.\
\
PoS, on the other hand, relies on staked assets. In this model, a malicious actor must take possession of more than 51% of staked coins. However, while this may sound nearly impossible, one must consider the floating percent of staked coins at any given time. Staked amount on network may drop, when the yields from the DeFi platforms surpass the yields from staking, making the system vulnerable. In Cardano, they have worked staking into the DeFi contracts to allow dynamically staked ADA, and delegation to stake pools are relatively autonomous for this same reason. it prevents this unwind to a degree. The truth is that Goguen is not live. The security assumptions have yet to be tested in the real world. A part of the reason Input Output Global (IOG)  spent so much time in Shelley perfecting seamless staking was because they are aware and work to mitigate the issue. 



The PoS model is much more efficient in terms of energy consumption than PoW. However, efficiency might present  a security problem for any of the aforementioned reasons listed above. The implementation of [NIPoPoWs](https://nipopows.com/) would help PoW networks scale more efficiently. PoS systems have a headstart on scaling and energy consumption but the security trade-off it brings has not stood the test of time yet. Likewise, NIPoPoWs are still in their infancy and haven’t been realized to their full capacity.



It’s important to take note of "the Lindy Effect" which is linked to Bitcoin’s monetary evolution. It states that the life expectancy of technology is proportional to age. It will take time for Proof of Stake to be tested, realized and actualized — particularly in comparison to Proof of Work, which already has over a decade of battle-testing with no known immutability breaches or downtime. A rigorous academic approach is needed to build this foundation, with years of testing ahead to prove this resilience. 



To maintain stable growth it is important to recognize these caveats and pitfalls. It is, therefore, no coincidence that this is exactly what IOHK, Emurgo and the Cardano Foundation are focusing on.



*However, it must be considered that there isn’t one chain to rule them all. Both systems can be combined and work in synergy for a more effective use-case that complements each other.*



You may have noticed the [ErgoDex proposal on Catalyst](https://cardano.ideascale.com/a/dtd/ErgoDex-Plutus-Port/352410-48088), the slides providing a high-level overview are available [here](https://cardano.ideascale.com/a/idea/352410/38579/download). 



After the initial AMM+Order Book DEX is deployed on both Cardano and ERG (using each token natively while the user switches between them), the real power of the eUTxO model will start to emerge. Ergo will seek to provide trustless swaps, cross-chain gateways, and shared liquidity between the two chains. 



 

![](https://lh5.googleusercontent.com/KRHyU3LiETc9NYy506_YHFAoCueIFckMU9cwpLp5pyZrWAZ7sVQt07-elduUMAE7NF2H0sXHPrKQSQnMsHVIerN5fP9xxp_-ogoiLtRxY9Oc_-SNrC6v7ZokGYptG8SZETc2xWum)



In the end, we want our future to be more green and for this to happen humanity as a whole must move toward renewable energy sources. Blockchains are still in their infancy, so it’s important to understand that these same problems will not plague Ergo, and the energy demanded would be aligned with and provide vast utility to the people.



If you have not done so yet, we encourage you to have a look over [The Ergo Manifesto](https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/) to get a feel for the forces behind Ergo.



<!--EndFragment-->