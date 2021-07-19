---
title: Finding The Right Balance
date: 2021-03-04
author: "Ergo Foundation"
authorPhoto: "/img/logotype_black_circle.svg"
blogPhoto: "/img/uploads/finding-the-right-balance2.png"
---

With the recent launch of the bootstrap period of the SigUSD stablecoin, the Ergo community participation rates have exceeded our expectation. This can be clearly seen by the total value locked (TVL) of over 6 million dollars worth of Ergs within the dApp as of writing. We at the Ergo Foundation have been closely monitoring how the community is using the SigUSD dApp, understanding the mechanics, and all of the different factors at play.

## Front-running Identified

Shortly after the dApp went live, we noticed a large whale was going in and out of SigUSD at a semi-regular schedule. After doing some research into the patterns this whale was using, it was identified that he was front-running the oracle price in an attempt to profit.

This type of oracle front-running has happened before in the Ethereum DeFi ecosystem, and is a factor at play because oracle datapoint updates can never be 100% immediate. There must always be some amount of delay before a datapoint is accepted into a block, which opens up the ability for frontrunning to exist.

In our scenario, the whale was taking advantage of this by minting SigUSD early during the “Live Epoch” period of the oracle pool (once it was reasonably clear what the upcoming new Erg/USD datapoint would be) and would profit on the price difference once the oracle pool finalized the datapoint. You can take a look at the whale’s address here (who appears to be an early miner in the Ergo ecosystem: https://explorer.ergoplatform.com/en/addresses/9hyDXH72HoNTiG2pvxFQwxAhWBU8CrbvwtJDtnYoa4jfpaSk1d3) 

## Pre-Launch Front-Running Mitigation Strategy

When designing the protocol underneath SigUSD (named the AgeUSD protocol), it was understood that frontrunning could be an issue. As such, a mechanism was put in place in the protocol to combat this; that being fees for minting and redeeming. In short, the fees for minting/redeeming SigUSD act as a barrier which prevents front-running from being profitable. This front-running barrier can be calculated by simply adding the fee for minting SigUSD plus the fee for redeeming SigUSD.

For the deployed SigUSD dApp the fees were set to be a low 1% per mint/redeem by the deployer (DarkSideBrrrrr) to provide the community a seamless experience for acquiring SigUSD/SigRSV without having to pay a lot extra. This decision for low fees however also made it more attractive for a greedy whale to abuse and attempt to front-run the dApp for profit. With only 1% fee on each action, this means that the front-running barrier ends up being 1% + 1%.

With an up-and-coming Blockchain like Ergo with a decent amount of price volatility, these 1% fees have been shown to be insufficient by the whale. Thus it was agreed upon that this front-running issue needed to be addressed immediately.


## Post-Launch Front-Running Mitigation Strategy

In order to protect Erg holders from being gamed by the front-running the whale was performing, the oracle pool was stopped in order to have the most fair way possible to upgrade the protocol. This means that the oracle rate for Erg/USD has been frozen at $3.16143 as can be seen in the [SigmaUSD web dApp](https://sigmausd.io/#/stablecoin).

This allows all SigmaUSD and SigmaRSV holders to redeem their tokens for Ergs safely. If the rate was not frozen, then the users who read this post first would be able to exit cleanly at the cost of other users who would continue to be negatively affected. As such, all SigmaUSD holders can redeem their tokens immediately, which will also allow all SigmaRSV holders to redeem their tokens as well.

Moving forward, this provides us with an opportunity to strike a new balance for SigmaUSD and address these issues with a multi-pronged approach.

The Ergo Foundation is recommending that community member DarksideBrrrr issues a new deployment of SigmaUSD with a 2% fee. This will double the barrier for all types of frontrunning any whale may wish to try to take advantage of.

Furthermore, the goal is to prevent the currently used risk-free front-running in its entirety. As such new oracle pools will be deployed with a “hardening upgrade”.

The first part of this upgrade involves setting a cap for price variations between datapoint updates. In other words, because front-running will be prevented by 2% fees (a 4% front-running barrier), datapoint updates can now be smoothed-out to only move up/down in 4% increments. (With very sharp movements allowed as to not prevent real major market movements from taking place). This change prevents the front-running technique that the whale was using.

Furthermore we also want to do even better and improve the experience for all oracle-based dApps while we’re making such large changes. As such we will be doubling the speed of the oracle pool datapoint posting. Originally being 60 minutes, the posting schedule is being sped up to 30 minutes.

This naturally works in tandem with the smoothed-out price updates thereby providing higher quality, fresher, and more useful on-chain data points.


## Going Forward
 
With novel updates to both oracle pools and the SigmaUSD dApp, the ecosystem and all Ergonauts are able to feel assured that the ecosystem is moving forward in the right direction.

The current plan is to launch the new oracle pool update within the next week, and we expect DarkSideBrrrr to be able to deploy a new instance of SigmaUSD shortly after that.

The Ergo community is one of the most valuable assets that we have, and we intend this transition to go as smoothly as possible so that everyone can get back to enjoying using SigmaUSD and SigmaRSV. We will keep you up to date as things progress in the coming week.

