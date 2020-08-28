---
title: Transcript of first Q&A session with Robert Kornacki about Oracle Pools
date: 2020-08-28T18:59:34.462Z
author: mx
authorPhoto: /img/uploads/mx.png
blogPhoto: /img/uploads/emily-morter-8xaa0f9yqne-unsplash.jpg
tags:
  - Ergo Team
---
**Robert Kornacki**

I'd like to officially announce that Oracle Pools are live, running on mainnet, with all the code + detailed instructions available for you to start/run your own, and we have a beautiful frontend created by DeadIT now implemented in the explorer https://explorer.ergoplatform.com/en/oracle-pools-list

**Can Ergo Oracle Pools be used on Eth projects?**

A similar system could be developed & deployed on Eth, but all the data is posted on the Ergo blockchain so available to all Ergo users.

**So the data can’t be pulled from the Ergo blockchain to the Eth blockchain?**

Eventually if Eth implements NiPoPoW, but it wouldn't make any sense financially.

**What about Cardano?**

It would make more sense to post unique data from the Ergo blockchain to Eth or Cardano, rather than oracle data. We're researching cross-chain compatibility with Cardano in the background right now. 

And these oracle pools are now fully usable on-chain for any dApp anyone wishes to create. Simply use the oracle pool NFT id as a reference to find the latest oracle pool UTXO, and you can have oracle data immediately available for your dApps.

**So the incentives for the oracle pools will Need to constantly be filled, this means users pay as they go or do they just send a large payment and it slowly depletes as it is used?**

Good question. The idea is that with the UTXO-model, large dApps can enforce that users pay out a single output a very small % of a fee that goes to the Oracle Pools automatically.

As such, well used/popular dApps fund key oracle pools via usage, and almost no one has to end up feeling the cost.

For more specialized data, it may be that the pools will have to be more directly funded, but for key datapoints like Erg/USD, that will likely be the equivalent of core infrastructure available for everyone

**Sort of how Uniswap takes fees to pay LP?**

Indeed, but it can be a lot more generic, cheaper, and easy to implement in the UTXO model.

**Robert.. how is any of this good for Cardano??**

Great question. Here's a response I just wrote that touches on this from Reddit:

Sure, I'll help clarify. Essentially when external oracle data is posted on-chain, it needs to be encoded in a very precise way within a transaction. Furthermore, oracle pools have a bunch of different moving parts which require transactions to be issued to move between the different stages of the pool protocol.

As such, the oracle core is the piece of software which creates all of the complex transactions which post the data on-chain & runs the oracle pool protocol on-chain (such as averaging datapoints).

The current oracle core is designed for the UTXO-based system in Ergo, which is quite similar in many ways to the UTXO-based system in Cardano.

We at Emurgo are supporting both Cardano ADA, and upcoming Ergo ERG in Yoroi, with a focus on moving forward into smart contract & DeFi support, especially with Gougen on the horizon. As such we are now investing a lot of resources in developing key UTXO-based smart contract infrastructure that's required for the ecosystem as a whole, first on Ergo which is already launched and running, and soon on Gougen as well.

**What does oracle pool payout mean? you get paid for funding oracle pools?**


Each oracle who submits a datapoint gets paid for doing their job. The oracle pool payout is the amount of nanoErgs (the smallest measurement of Ergs) that an oracle gets paid per oracle pool datapoint finalizing/posting.
So if you take a look at the frontend page https://explorer.ergoplatform.com/en/oracle-pool-state/adausd You can see the oracle payout price is 2500000 and the posting schedule is 60 minutes (30 blocks). So oracles make 2500000 every 30 blocks in this pool.

**Could Daedalus use the ADA oracle to add the current value at the time staking rewards are paid? would be useful for tax purpose?**


Yes/no. The current oracle posts data to the Ergo blockchain, and so it'd require Daedalus to also support Ergo to have a setup like that.

It would typically just be easier for Daedalus to also source the pricing data itself via http requests, but it's technically feasible. Once we have Cardano oracles that should be doable (and since Daedalus is a full node it will scan all txs/blocks so the data will be available for use, so it can definitely be done)

**Sounds very doable with Yoroi pretty soon though right?**

Haha, again yes/no. To source data in UTXO systems you need to scan the UTXO set, so you need your own node. Light wallets like Yoroi don't have this, because it will cost theoretically an infinite amount of money if everyone just spams Emurgo's full nodes and forces us to pay for everyone's UTXO-set scans.

**Do you imagine IOG or Emurgo will make use of the Ergo blockchain for services/products like a stable coin or decentralized exchange?**


We (Emurgo) are currently working with the Ergo Foundation to create a stablecoin on Ergo.
We are also looking into direct interoperability, and how practical it is to deploy dApps we develop on Ergo also on Cardano.

Since Ergo has superb privacy features thanks to Sigma protocols, there is a great chance that we can have interesting interoperability usecases in the future, where you may hold wrapped Ada and use that wAda is privacy-preserving smart contracts.

I believe the same stable coin which will come on the ergo blockchain will come to the Cardano blockchain. In the future, we might see ergo and Cardano talking to each other?
We are putting in a lot of effort, and beginning to speak with IOG more about making this a reality (in terms of blockchains talking with each other).

So in this case the only limitation would be the variety of datasources for the request to make this useful?
With simple hierarchies of oracle pools, that indeed would be the case. We are also looking into mixing signed data together with unsigned data.

So you have pools sourcing signed data from CoinBase for example, and then others from other unsigned sources, thereby decreasing the chance of corrupting any one source.
Besides just simple hierarchies as I initially stipulated in the writeup, I've spent more time thinking about even more complex schemes which can be built on top of oracle pools that use a lot more game theory in different ways, and maybe we'll release something about that by EOY.

**Where does Emurgo get its funds to develop these things?**

Emurgo is one of the founding companies which built Cardano + is now partners with the Ergo Foundation which allows us to develop in this ecosystem as well.

Will we see additional exchange listings for Ergo in the near future?  Visibility and liquidity are a pain point currently.

We (the EF) are constantly talking with exchanges.

I love this offchain to onchain tunneling stuff.
This is completely off topic, but one of my side interests that is super untapped and I think will be a major breakthrough is when interoperability between off-chain distributed messaging networks integrate together with blockchains.

Also, my assumption is that the Ergo token will be supported in the Yoroi wallet eventually, yes?
Yes, Erg support will be added in Yoroi in the coming future. No dates for you yet unfortunately, but stay tuned!

Robert in a sentence or two, what is the primary driver of value appreciation in the Ergo ecosystem, besides speculation? This is the number one question my friends ask.

In my opinion a clear vision of the future: permisionless DeFi with in-built privacy capabilities on top of a new model (UTXO) that offers capabilities to streamline and improve the whole experience of both crypto and DeFi for the average user.

We're not there yet for having a streamlined and easy experience for the average user, that's quite obvious, but there's certain things that aren't possible (or aren't easy/aren't economical) that you can do on UTXO, like allowing anyone else to spend a UTXO you "own".

You have said that oracle pools are cheaper and eliminate the middleman, but the rumor mill is saying that threshold sigs are coming to LINK and will reduce tx fees by 99%
Any validity to this?

We already have threshold signatures in Ergo, so we could likely do the same thing if that approach is that much better.
That said, on-chain provides a lot of benefits with implementing incentives/disincentives like stake slashing, which aren't possible off-chain with threshold-sigs.
We don't have such tx congestion on Ergo, and future plans for sidechains research for scaling, so we get a lot more game theoretic benefits for doing it on-chain, and it's all cheap at the moment.