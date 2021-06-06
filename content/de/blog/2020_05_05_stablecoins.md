---
title: "Introduction to stablecoins"
date: 2020-05-05
author: "Guy Brandon"
authorPhoto: "/img/authors/guy_brandon.jpg"
blogPhoto: "/img/blog/stablecoin.jpg"
---

*Stablecoins are a major use case for DeFi but come in various different forms. The stablecoin space is still relatively young and underserved – but that’s changing fast.*

Stablecoins are one of the most important and popular DeFi products, enabling users to hedge and store value on the blockchain, without having to use exchanges or other centralised providers.

As a smart contracts and DeFi platform, Ergo is well suited for building all kinds of dApps, including stablecoins. You’ll certainly be hearing more from us in the future about a stablecoin on the Ergo blockchain, but until then, we want to introduce and unpack the idea as context for what’s coming.

## Different stablecoin approaches

There are various ways to peg a crypto token to the dollar or another fiat currency. The easiest way is to hold dollars in a bank account, and issue one token for every dollar you have. This is exactly the approach that [Tether (USDT)](https://tether.to/) takes. This offers users the ability to store and transfer USD easily, without using an exchange. However, this approach is still highly centralised; you have to trust Tether that they have enough dollars in their bank account to cover the issued tokens. Tether is well known for being opaque and refusing proper audits. The token could also be shut down if a regulator managed to freeze their accounts. 

There are various backed stablecoins on the market, which take broadly the same approach. Tokens like [USDC](https://www.circle.com/en/usdc) and [Gemini dollars](https://gemini.com/dollar) are much the same, but they are far more transparent, and operate within a clear regulatory framework. Then there are projects like TrustToken, which underpins the [TrueUSD token (TUSD)](https://www.trusttoken.com/trueusd); this is much the same again, though takes a more distributed approach, with both a high degree of transparency and multiple banking partners.

All of these necessarily have a degree of centralisation and risk, because they rely on banking partners – and those accounts can potentially be frozen, shut down or even raided.

Other projects – notably the [Maker Protocol](https://makerdao.com/en/) – attempt to address this with a fully decentralised model. Maker’s Dai is an algorithmic stablecoin: a ‘synthetic’ dollar that is not backed by real dollars as USDT, USDC and other stablecoins are.

Dai are issued from ‘Vaults’ backed by crypto collateral (mostly ETH). A system of smart contracts and oracles (decentralised price feeds) ensures that every Dai issued is collateralised by at least $1.50; if the ratio falls too low, the Vault is closed and the Dai repurchased automatically. It’s a complex and impressive system, and the [largest project in the DeFi space](https://defipulse.com/).

## Some stablecoins are more stable than others

Stablecoins have been around since at least 2014, though the first attempts had limited success. The earliest algorithmic coins, like NuBits and BitUSD, did not have the benefit of smart contracts platforms (which were only available with the launch of Ethereum in 2015). They tended to be centralised or semi-centralised, and didn’t work well in practice. (NuBits, for example, lost its peg and [has completely collapsed](https://coinmarketcap.com/currencies/nubits/).)

Tether, which has been around since 2014, has grown into a multi-billion-dollar phenomenon, with [tens of billions of dollars of daily volumes](https://coinmarketcap.com/currencies/tether/markets/). However, while Tether generally keeps its peg pretty well, occasional quirks of the market and fears about the company’s reserves mean it has not always been worth $1 (once [dropping as low as $0.90](https://coinmarketcap.com/currencies/tether/)). USDC, which is more trustworthy and transparent, tends to have lower spreads and a more reliable peg.

Meanwhile Dai, as the foremost algorithmic stablecoin, has historically done well. It aims to maintain a ‘soft’ peg, with decentralised monetary policy nudging it back towards $1 if market conditions push it too far away from this. This has generally been successful; the only time prices have deviated significantly was on the enormous market volatility of ‘Black Thursday’ in March, which saw a massive sell-off of almost every fiat and crypto asset.

## Algo, collateralised, back or a combination?

And so the existing stablecoins take one or more of several approaches to keeping the token pegged to the dollar. The simplest, but also the most centralised, is to back the token with actual dollars. You can also back it with crypto, so long as you ensure there is enough collateral to cover the tokens issued in the event of market volatility. Algorithmic stablecoins use price feeds and decentralised monetary policy to make it more or less attractive to buy or sell the tokens, helping to ensure the price gravitates towards $1.

Every approach has its strengths and weaknesses. Ergo will be announcing details of its own implementations in the coming weeks, and explaining why its developers are taking the approach they are. 
