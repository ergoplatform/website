---
title: Off-chain Logic and eUTXO
date: 2021-10-04T11:20:29.395Z
author: Curia Regis Crypto
authorPhoto: /img/uploads/1_70ukrjwixwgrxoxbgdl3fq.jpeg
blogPhoto: /img/uploads/photo_2021-10-04_19-02-03.jpg
tags:
  - Building Ergo
---
<!--StartFragment-->

## Advantages of eUTXO

\
There is a significant difference between the account and eUTXO models. In the account model, all the logic is on-chain but this has been found to cause scalability issues. In the eUTXO model, only the smart contract validation itself is performed on-chain while other parts of the smart contract are off-chain. 



In order to clarify this, consider the off-chain part as a black box which reads the blockchain status (UTXOs), runs all the computations, and finally generates one or more txs (transactions). These txs (results of the off-chain part) are then sent to the blockchain to be verified.



The blockchain verifies the txs and if the txs requirements are satisfied they will be mined, thereby changing the status of the blockchain (UTXO set). 



As a result, only smart contract validation is performed on-chain and all other logic is off-chain. This means tx validation can be incredibly efficient and scalable - a major advantage of the eUTXO model.



The issue of scalability is one of the main reasons Ethereum is attempting to push transactions to Layer 2/Sidechain scaling solutions that are governed by off-chain code. In essence, the solutions Ethereum is exploring in order to address its scalability concerns mimic the eUTXO model in practice.

 

For the most part, there is industry consensus that on-chain logic is decentralized by nature, and therefore superior. What about the off-chain logic? Can off-chain logic be distributed? 

 

In eUTxO, off-chain logic can be written within a range of completely centralized to completely decentralized. For example, in ErgoMixer the off-chain part is decentralized. You run it on your computer but users also have the ability to run their own off-chain logic. Off-Chain logic can be distributed or localized and run by each user, thus ranging from centralized to widely distributed. 



## ErgoDEX Distributed Bot Solution

ErgoDex has been testing, and will implement, a bot solution that allows the distribution of offchain logic to be run concurrently. While contrary to Ergomixer’s use of off-chain logic (where each user is running their own individual off-chain logic), the off-chain bots can be distributed and bot-runners can earn an execution fee. This execution fee is similar to a transaction fee and it will be preset before funds are sent.\
\
This incentivizes actors to run these distributed bots, as well as gives users clarity with regard to pricing. This way, every actor has an equal chance to gain a portion of the network with economical incentives. The off-chain code will become more and more decentralized as the usage of the platform increases.\
\
The additional revenue created by users running bots seems to integrate particularly well into smaller mining pools, as well as single pool operators in Cardano. It is our goal to work with these parties from the beginning to encourage decentralization.  



![](https://lh3.googleusercontent.com/kzEchHe0C8NMk5y-yNuouF1YbrtUi7onuve7NvzBVyWMOa6WTQ5s9Ft4T7bVJ3cbooIECSAeazqwIwmc-lO0ya6hjC5poyxwFLucTuznTX52_jwAwsbLaIfYTxDrKhLyqFTKG7bK=s0)



 



Decentralization is achieved depending on the number of actors that chose to run off-chain bots. There is also additional economic incentive for miners to participate in this solution while honoring the trust and transparency that proof of work provides. 



## eUTxO Assumptions

\
As eUTxO continues to roll out, we will witness some dApps where the off-chain logic is not necessarily decentralized. The question will be whether or not this is an issue? It will depend on the function of each unique dApp and if the users are aware of the assumptions they need to make. These dApps can also choose a model that decentralizes or distributes off-chain logic. But is this necessary? My guess is probably not, depending on the function of the dApp.



Transaction verification will still be on-chain, however the incentives may not be in place to encourage users to run this logic in a decentralized fashion. I do not see this being an issue when taking into consideration that some dApps may be for a special purpose or provide a very simple service.



However, the eUTxO model does create some additional assumptions that users need to be aware of and this is why Ergo is in the process of putting together the KYA (Know Your Assumptions) initiative.



The KYA would function similarly as a “Terms and Conditions Agreement” and is 

designed to inform users about trust and cryptographic assumptions of a blockchain, contract, update possibilities, level of control by protocol masters, etc.

 

The goal of a KYA would be to prevent rug pulls, scams and protect investors. 



With regard to off-chain logic, understanding KYA is very important. Currently, users trust security audits of blockchains/dApps, but an audit just certifies that logic is intended by the contract. An audit is not a proof of security in all aspects, just the proof of a contract's intention.



There needs to be KYA regarding the potential for updates of both on-chain and offchain logic because the distribution of off-chain logic indicates the level of trust each actor is placing on the dApp. Custodial power between parties may potentially be an important assumption to understand as well. 



The reality is all of these assumptions are important to on-chain logic. The only difference is off-chain logic does add an additional layer of complexity that will need to be addressed by both eUTXO and account model blockchains. Off-chain logic includes L1 (Layer 1) dApps, like ErgoDEX, as well as L2 (Layer 2) models like side-chains.



<!--EndFragment-->