---
title: "The opportunities of the Ergo/Emurgo partnership"
date: 2020-06-11
author: "Guy Brandon"
authorPhoto: "/img/authors/guy_brandon.jpg"
blogPhoto: "/img/blog/ergo_emurgo_opportunity.png"
tags: ['Ergo Team']
---

_Cardano and Ergo take quite different approaches to DeFi and blockchain development, but there are specific areas in which they significantly overlap. This allows the possibility of fruitful collaboration, with benefits to two distinct ecosystems – and the blockchain space as a whole._

The recent [partnership announced between Emurgo and Ergo](https://ergoplatform.org/en/blog/2020_06_09_press_release/) has been positively received by both communities. For good reason: this is an exceptional opportunity to pool resources into an important and emerging area of research, while allowing both projects to use the insights gained in their own ways and for their own roadmaps. 

In some ways, Cardano and Ergo are quite different. Cardano, for example, is a proof-of-stake platform, developed in Haskell and with smart contracts written in the custom Haskell-based Plutus language.

Ergo, meanwhile, is a proof-of-work platform based on the Scorex framework, which was also created by Ergo’s lead developer Alexander Chepurnoy (@kushti). Its smart contracts are written in ErgoScript, which draws features from Scala.

## UTXO smart contracts

Where they overlap, and the most promising area for collaboration, is in their use of the extended UTXO model. (You can read [more about Ergo’s use of UTXOs here](https://ergoplatform.org/en/blog/2020_03_03_building_utxo/).)

Basing smart contracts on an extended UTXO model is a relatively new idea. Platforms like Ethereum use an Account model, which has very different implications. [Recent research](https://github.com/Emurgo/Emurgo-Research/blob/master/smart-contracts/High%20Level%20Design%20Patterns%20In%20Extended%20UTXO%20Systems.md) by Robert Kornacki (Cardano fellow at Emurgo) explains this in more detail:

  Extended UTXO systems enable full fledged [turing complete](https://arxiv.org/abs/1806.10116) (across transactions) smart contracts. This is a novel innovation that allows the latest generation of blockchains to reclaim the original model that Bitcoin used, but now with a lot more power. 
  Given that smart contract powered UTXO systems are nascent, there is a distinct lack of known design patterns which developers can rely on when building dApps. Looking at account-based models like Ethereum, encoding protocols in the UTXO model is as comparably different as writing imperative code is to functional.
  The UTXO approach has the ability to revolutionise smart contracts, and the findings of the collaboration will doubtless prove valuable to both Cardano and Ergo as they implement their different roadmaps and technologies. 

## DeFi collaboration

This is a great example of how DeFi thrives on collaboration, rather than competition. Open source systems benefit each other, making each other stronger and tapping into each others’ networks rather than taking away from them. 

A great example of this is the Yoroi wallet, which will become a kind of MetaMask for engaging with Ergo-based dApps as well as the Cardano ecosystem. Meanwhile, features that Ergo has already implemented ([such as NiPoPoW](https://ergoplatform.org/en/blog/2020_05_1_spv_security/)) and will implement in the future offer a precedent for Cardano and other blockchains, even if those features cannot directly be imported.
