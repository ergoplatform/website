---
title: "Building Ergo: How the AgeUSD stablecoin works"
date: 2021-02-05T11:54:21.753Z
author: Guy Brandon
authorPhoto: /img/uploads/guy_brandon.jpg
blogPhoto: /img/uploads/stable.jpg
tags:
  - Building Ergo
---
<!--StartFragment-->

*The elegant design avoids some of the complexity and potential problems of other approaches to creating decentralised, collateralised stablecoins.*

As part of an ongoing joint initiative, Ergo and Cardano unveiled the design of a new stablecoin at the online [Ergo Summit](https://www.youtube.com/watch?v=zG-rxMCDIa0&ab_channel=ErgoPlatform) event, held on 23 January.

Named AgeUSD and inspired by StatiCoin, the stablecoin is the result of a collaboration between research and development teams across three organisations: [IOG (IOHK)](https://iohk.io/en/), the company leading Cardano core development; [Ergo Foundation](https://ergoplatform.org/en/foundation/); and blockchain technology company, [Emurgo](https://emurgo.io/), also one of the founding members of Cardano.

**How does it work?**

AgeUSD requires just two blockchain assets and two types of users:

* Reserve Providers, who submit ERG to the AgeUSD dApp’s reserve, thereby minting ReserveCoins
* AgeUSD Users, who submit ERG to the dApp and receive Stablecoins in return

AgeUSD are only minted for users if there are sufficient reserves in the dApp, deposited by Reserve Providers.

AgeUSD holders can redeem their coins for the equivalent value in ERG at any time. However, ReserveCoins represent a proportion of the reserves held in the dApp (rather than an absolute fiat-equivalent amount). Reserve Providers can only redeem their tokens if the reserves cover the value of all issued stablecoins (multiplied by the minimum reserve ratio).

Thus Reserve Providers take on the responsibility and risk of ensuring that all AgeUSD in circulation are always fully collateralised. In return they receive the potential gains that are secured if the value of the collateral they deposit (ERG) increases. In this respect, becoming a Reserve Provider is like taking a leveraged long position on ERG, and enables regular AgeUSD users to hold and use stablecoins without worrying about volatility. In the event of a market downturn, Reserve Providers do not undergo liquidation and can choose to hold out for better market conditions before redeeming their tokens.

Operation of the AgeUSD dApp is intentionally straightforward, with just four main actions in the allowed:

* Mint StableCoin
* Redeem StableCoin
* Mint ReserveCoin
* Redeem ReserveCoin

Each action incurs a small fee in ERG – provisionally set at 1% – which is added to the dApp reserve. A further 0.25% is optionally paid to the frontend implementor who creates the interface for minting and redeeming tokens.

‘It’s a simple, elegant design,’ comments Ergo’s founder and lead developer, Alexander Chepurnoy. ‘Its economic model maintains the conservative settings for collateral reserves and avoids the need for liquidations. Along with that, it supports a fully decentralised stablecoin emission setup. Thus, AgeUSD will offer the world a stable, simple, and decentralised stablecoin.'

After launch, scheduled for mid-February, AgeUSD will be available via the [Sigmaverse](http://sigmaverse.io/), [Ergo’s dApp portal](https://ergoplatform.org/en/blog/2020-12-27-introducing-the-sigmaverse/). To find out more, read the documentation at <https://github.com/Emurgo/age-usd>.

<!--EndFragment-->
