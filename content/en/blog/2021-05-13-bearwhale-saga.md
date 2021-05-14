---
title: Bearwhale Saga
date: 2021-05-13T12:01:05.336Z
author: Curia Regis Crypto
authorPhoto: /img/uploads/1_70ukrjwixwgrxoxbgdl3fq.jpeg
blogPhoto: /img/uploads/bearwhale.jpg
tags:
  - Building Ergo
---
<!--StartFragment-->

## Intro

SigmaUSD.io is the worlds first UTxO-based stable coin. The foundation on which a new era of digital finance will be built. A 100% cryptocurrency pegged decentralised stable coin that has no forced liquidation. (but is not without risk - as we’re about to find out).

It is an instantiation of the [AgeUSD protocol](https://github.com/Emurgo/age-usd) designed in partnership by IOHK, Ergo, and Emurgo.

It maintains the conservative settings for collateral reserves, avoiding the need for liquidations. Along with that, it supports a fully decentralised stablecoin emission setup. 

Thus, SigmaUSD offers the world a stable, simple, and decentralised stablecoin.

* [SigmaUSD vs the competition.](https://curiaregiscrypto.medium.com/sigmausd-vs-the-competition-e70b23fe37a3)
* [SigmaUSD on Ergo - Privacy, Stability and Governance](https://curiaregiscrypto.medium.com/sigmausd-on-ergo-a36e0cdff743)

SigmaUSD is a complex beast, but you need to know for this article the following. 

**SigmaUSD**

* Stable to $1
* If you buy SigmaUSD, and the price of Erg dips - you can claim more Erg for the same dollar value.

**SigmaRSV**

* SigmaRSV is similar to book value per share. Its value depends on both the size of the reserve and how it is utilised.
* When the price dips, SigUSD holders who exit at a lower point than they entered must be rewarded extra Erg to make their SigUSD up to $1
* SigRSV profits depend on these accumulated transaction fees minus any losses SigUSD holders experienced when exiting.

The 2% fee taken during minting goes back into the reserve. This fee accumulates in the reserve, appreciating the value of SigRSV and helping to prevent speculative orders.

Additionally, the contract locks at certain ratios, this is to ensure both that there is always enough reserve to meet the needs of the stablecoin under market conditions, and that the SigRSV position doesn’t suffer from significant dilution. 

![](https://lh4.googleusercontent.com/dWnD0jxGxK5yYGzYo10zHnX742yKp5w6gRQToMYte8DyEbK6qv0u7WZ0Tqf3qbaY_qk2ZRsB59OvMle34SW9K7keAABoCkMdOk_8iaej9FcJ-7BIVwBvpT6BVWOnlwFW3LiTg61A)

## SigmaUSD V1

Shortly after the contract was live, we noticed a large player was jumping in and out of SigUSD at a semi-regular schedule. After some research, we identified that the Bearwhale was frontrunning the oracle price in an attempt to profit at the expense of reserve holders (SigRSV).

This type of oracle frontrunning is not uncommon and has happened before in the Ethereum DeFi ecosystem. It is a factor at play because oracle there must always be some amount of delay before a data point is accepted into a block, which opens up the ability for frontrunning to exist.

In our scenario, the Bearwhale was taking advantage of this by minting SigUSD early during the "Live Epoch" period of the oracle pool, once it was reasonably clear what the upcoming new Erg/USD datapoint would be—profiting on the price difference once the oracle pool finalised the datapoint. You can take a look at the whale's address [here](<https://explorer.ergoplatform.com/en/addresses/9hyDXH72HoNTiG2pvxFQwxAhWBU8CrbvwtJDtnYoa4jfpaSk1d3)>) (who appears to be an early miner in the Ergo ecosystem.

We decided at this stage to freeze the oracle price to allow people to redeem. The contract would then be relaunched with a higher fee, and governance tokens enabled.

Read the full blog post regarding this on the blog: [Finding The Right Balance](https://ergoplatform.org/en/blog/2021_03_04-finding-right-balance/).

## SigmaUSD V2

As soon as we launched V2, the Bearwhale was back with several attacks on different fronts. Thankfully, this led to some minor issues with the protocol coming to light and quickly being patched - improving the resiliency going forward. Don't you love free stress tests?

They initially purchased a significant stake in SigRSV - which most took as a sign of hope and that the Bearwhale was instead backing the protocol going forward. Unfortunately, ultimately, they discovered a loophole that allowed a mimicking of the SigmaUSD treasury, interjecting when someone was making a transaction, selling SigRSV to users while pocketing the fee.

When this was blocked, next was spamming the proxy addresses that ERG move through while being swapped for Sigma. This prevented the redemption of SigmaRSV and allowed the cycle into a short position, and keep the reserve ratio locked at 400%. Scripts from community members to counter his attempts, and subsequently, we rolled out a patch to prevent the attack.

Indeed, there were likely many other efforts to misuse and manipulate the oracle pools and the protocol itself, which were unsuccessful and we are not aware of.

While we cannot say for sure that the dumping on the open market was connected, 150,000 ERG sell-walls appearing shortly after the short positioned was entered was telling.

During the BTC-flash crash, the price of Erg fluctuated sharply to under $2; however, the robustness and smoothness of Oracle Pools came into play. 

They are limited to an update of 0.5% every 30minutes - up or down. The markets slowly recovered throughout the day, and the power of the Oracle Pools power was demonstrated. The Bearwhale had the chance to exit at a minimal loss during this period, but they did not. Maybe they were looking for lower prices of Erg.

Unfortunately, for his sake, the marketing machine is well-greased and roaring, and when we finally broke through $4, the whale exited his position with a loss of around 170,000 ERG, compared to his starting position at the beginning of V2. The exact amount made during V1 is hard to quantity, as the first transactions we see are withdrawals from the SigmaUSD bank (presumably, deposits made with another wallet). The Bearwhale's main address can be found [here](https://explorer.ergoplatform.com/en/addresses/9hyDXH72HoNTiG2pvxFQwxAhWBU8CrbvwtJDtnYoa4jfpaSk1d3), and [this second one](https://explorer.ergoplatform.com/en/addresses/9eyXNatnA6YM4tS1TjadEA6TFrd9bdufbFuykV89iX9vE9RBZZe) appeared later on. He likely has many others or friends helping him. 

Those who minted SigRSV at the start of the contract and cashed out here made a healthy profit.

At the moment, SigRSV holders might want to consider an exit. The size of the reserve compared to SigUSD utilisation is unbalanced and is high-risk for reserve holders. The Bearwhale is continuously rotating back into a short at a higher price point and try to redeem some of those ERGs. This is a risky gamble for him, and while he's a proficient hacker. He appears to be terrible at trading.

Is the game finished? No, we do not think so. But, from now on, the game is changed, and it is a fair game. Now, anyone can Mint/Redeem whatever they wish; the RR and SigRSV price are moving up and down as usual. No individual is preventing you from minting/redeeming USD/RSV, and it is ultimately you that decides on your position.

We must keep in mind that this protocol is not to benefit only the RSV holders; The war declared on the Bearwhale was because they were not playing fair. 

From now, lots of individuals and whales may enter into both positions and take profits or losses; that's fair. So, let us leave the bearwhale story behind and use the protocol wisely. I think all of us learned a lot from the battle and got more familiar with the risks/rewards of the protocol and the chaotic nature and wars waged behind the scenes in decentralised finance.

## The Future

The success of the SigmaUSD stablecoin depends not only on the price of Erg but also on the utilisation of SigUSD itself. 

anon_2020a has already integrated the mixing of SigmaUSD/RSV into the ErgoMixer. The first working non-custodial, programmable, non-interactive mixer in the cryptocurrency space. 

Both ERG and SigUSD are now accepted on [Cryptocurrency Checkout.](https://cryptocurrencycheckout.com/coin/sigmausd) This is a Non-Custodial Payment Gateway that provides plugins that make accepting multiple cryptocurrencies for your products and services as easy as entering your wallet addresses and copying some code into your website or application. 

The team is also working on SigUSD/USDx stablecoin pairs which would enable robust off-ramps; we have support upcoming for Auction House, the tip bot for Telegram, and, more significantly - ErgoDex on the horizon, which will likely be another serious test for autonomous contracts and the DeFi space as a whole. 

[Discussions are already budding on the forums](https://www.ergoforum.org/t/sigmausd-dao-bank-is-a-complex-beast/767/14) of how we can improve these contracts so that we can ensure the robustness and resilience of the protocol going forward. 

If you've made it this far, check out [The Ergo Manifesto](https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/) to see what Ergo is really about. Head over to [ergonaut.space/en/SigmaUSD](https://ergonaut.space/en/SigmaUSD) for more information on the protocol, or [r/ergonauts/faq](https://www.reddit.com/r/ergonauts/search?q=bearwhale&restrict_sr=on&sort=relevance&t=all) for a comprehensive overview of all the components that make up Erg. 

We're not sure who minted the graphic above (a developer working on an NFT gallery stumbled on it). But it's [up for sale](https://ergoauctions.org/#/auction/specific/83643ed47afb08fab54a89b26f0077ddde3a02c01ee15aa52f5980231cf13e8e) on the auction house.

Finally, join the fight and help bring crypto back to its roots. There's a SigmaUSD group on [Telegram](https://t.me/SigmaUSD), a dedicated channel on [Discord](https://discord.gg/GkpppkfHAV), or head over to our rapidly growing community at [/r/ergonauts/](https://www.reddit.com/r/ergonauts/).

<!--EndFragment-->