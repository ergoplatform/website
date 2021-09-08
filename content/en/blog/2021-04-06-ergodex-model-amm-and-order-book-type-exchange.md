---
title: ErgoDEX Model - AMM and Order Book Type Exchange
date: 2021-04-06T09:05:41.476Z
author: root7Z
authorPhoto: /img/uploads/rootz-the-storyteller-4root7z.png
blogPhoto: /img/uploads/ergodex.png
tags:
  - Building Ergo
---
*Trustless Exchange models vary in their use cases e.g AMMs for low liquidity pairs and Order Books for high liquidity pairs. But you don’t have to choose anymore because ErgoDEX can bring both - and with partial filling support!*

## Decentralized Exchanges

AMMs(Automated Market Maker) is a type of market making algorithm, used in Decentralized Exchanges (DEXs) which allows participants to add liquidity in pairs and earn yields from transactions. AMM type DEXs have seen tremendous growth in recent months. Allowing anyone to set up a liquidity pool and make their own initial DEX offerings (IDOs) - with everyone eligible to participate.

However, numerous scams occurred as gas prices soared and retail investors were both unprotected and sidelined. Order Book based exchanges are seen as a more affordable choice due to their low fees. However, they are uninteresting for low liquidity markets because in Order Book type, market makers have a lot of power, therefore, are more prone to manipulation for the short term. 

The ErgoDEX model can provide a more sophisticated decentralized model, with complex features such as partial filling support and buyback support during or after an ICO, adding an extra layer of security and protecting the buyer from exit scams and rug pulls. 

Thanks to its eUTxO based model, ErgoDEX can be designed both as AMM and as Order Book type, utilizing the same underlying liquidity pool, This comes in contrast to the Account-Based model of Ethereum or the rough UTxO model used by Bitcoin. In this sense, Ergo aims to combine the best of both worlds.

## Safe ICO Garden

During an ICO, the buyer first attempts to send his funds to the seller/ICO contract. However as we've seen frequently, pool admins can drain the funds and the project could disappear into thin air at any moment. This is a huge issue in regards to buyers’ trust and security.

Ergo aims to solve this by encoding buyback orders so that funds are released within a predefined timeframe and the buyer has an ample opportunity to get out with a minimal loss. 

With the features provided by ErgoDEX buyers have more control, the system will root out malicious actors and attract real developers and project creators. ErgoDEX can sustain a healthy environment both for IDOs and investors.

## Liquidity Pool

Everyone can set up a liquidity pool in Ergo's UTxO model and it will work similarly to Ethereum’s current implementation. Liquidity pools will be represented with a UTxO identified by a unique NFT contained within. A pool bootstrapping contract will ensure the NFT is created. The most basic primitive of decentral finance is being able to execute exchange orders without the need of middlemen. ErgoSwap allows participants to interact directly with smart contracts and have full control of their funds. 

Ergo's atomic swap implementation can make cross-chain swaps with coins like Bitcoin and Cardano flawlessly and without the need for gateways, token wrapping, and likewise solutions. Fully non-custodial inter-chain swaps and liquidity pools are completely possible and scalability wouldn’t be an issue with parachain/sidechain like solutions.

We have already launched SigUSD, Ergo Platform's algorithmic stable coin, we’ve begun setting up oracles pools with ERG and ADA so we are building the foundational blocks of a decentral blockchain ecosystem. Since our beginning, it was our aim to be decentralized, scalable, and secure. 

Now, after years of building, we are reaching maturity.  With the core design coming to an end, now a variety of use cases can be implemented on Ergo. This year will be very demanding for us as there is a lot to achieve, but we are working tirelessly to ensure we can do so without delays or issues.

*More developments are coming soon, so stay tuned for more updates*

*Sources:*\
\
<https://github.com/ergoplatform/eips/blob/eip14/eip-0014.md>

<https://ergoplatform.org/en/blog/2020-12-02-new-ergo-smart-dex-orders-with-buyback-guarantees/>

<https://github.com/ergoplatform/ergo/wiki/An-ICO-Example-On-Top-Of-Ergo>