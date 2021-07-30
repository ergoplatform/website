---
title: "Ergo’s AgeUSD Protocol:  SigRSV and SigUSD"
date: 2021-07-30T11:57:19.153Z
author: root7Z
authorPhoto: /img/uploads/rootz-the-storyteller-4root7z.png
blogPhoto: /img/uploads/1762.png
tags:
  - Building Ergo
---
<!--StartFragment-->

AgeUSD is a decentralized stable coin issuance protocol. That means everyone can mint [SigUSD](https://sigmausd.io/#/) (that is pegged to the US dollar) or mint SigRSV, providing the reserve for the platform. Via smart contracts, people can hold USD that is backed by ERG and earn commission fees by locking their ERG as reserve capital. This model can also be known as the [future-growth-backed](https://medium.com/reserve-currency/why-another-stablecoin-866f774afede) stablecoin model.



SigUSD is backed by reserves and not by collateral debt positions. A reserve-backed model is a superior option in preventing cascading liquidations during extreme volatility. This is achieved by locking the reserve tokens to protect the pegged value. In a collateralized-debt model, such as MakerDAO, sudden spikes in prices can create deep liquidation shocks if users of the protocol do not hold enough collateral to deal with the volatility. This has been seen in the [12 March Collapse of MakerDAO](https://blog.makerdao.com/the-market-collapse-of-march-12-2020-how-it-impacted-makerdao/) where ETH went on sale for as low as 0 dollars.



AgeUSD has also endured an attack during the initial launch of SigUSD. A whale ([bearwhale saga](https://ergoplatform.org/en/blog/2021-05-13-bearwhale-saga/)) did not use the SigUSD interface but instead interacted directly with the contract. Most of the community was led to believe that the ERG price went up so they correspondingly minted large amounts of SigRSV. The reserve ratio then went over 2300% when the ERG price was facing volatility. By directly using contracts with script, BearWhale profited from sudden price changes at the expense of the initial SigRSV holders. This was because when users jumped in at the initial launch, the reserve ratio skyrocketed and created exit liquidity for the bearwhale. Since this attack, the contract has been redefined to work on a 400-800% reserve ratio.



## Tokenomics

The protocol holds the reserves between 400% and 800% to create healthy liquidity for both buyers, sellers and holders. 



The contract stops users from redeeming SigRSV if the reserve ratio goes below 400%, to maintain USD and SigUSD parity. If the reserve ratio goes above 800%, it stops SigRSV minting to prevent congestion for SigRSV holders and to incentivize a healthy SigUSD issuance.

If the contract does not hit a 400% reserve ratio, a user can not mint SigUSD by locking their ERGs. Above a 400% reserve ratio, users can purchase SigUSD. So when the price of ERG grows, more SigUSD can be issued according to the total market cap of Ergo.SigUSD will always be $1 and it will be backed by four times more SigRSV to prevent the reserve ratio from going below 100%. This makes it equal to a 75% collateralized debt position. If someone mints 100$ worth of SigUSD, there will be 400$ worth of SigRSV to back the corresponding SigUSD. This way SigUSD’s peg to the USD will be protected while also preventing flash crashes if the reserve ratio falls below 400% in AgeUSD protocol.Please see the InfoGraphic below:

![](/img/uploads/sigremeed-purchase.jpg)

SigRSV holders benefit from the transactions on the protocol. When one mints SigUSD or redeems SigUSD, they pay a 2.25% fee to the protocol which goes to the reserve holders. If one is a speculator, they can also bet on the ERG price going up or down to profit from reserve ratio volatility by minting or redeeming SigRSVs. However, AgeUSD is still very new so speculative bets on its protocol metrics may not be suitable for the average user.



<!--StartFragment-->

## Algorithmic Stable Coin



A smart-contract-based stable coin issuance protocol is important for providing liquidity to decentralized finance platforms. Cash, or asset backed stable coin protocols, are prone to legal issues and are controlled by central entities. That makes them unreliable for truly decentralized and immutable DeFi platforms. Users should have a chance to hold their own choice of digital fiat.

\
Fiat pegged tokens are a vital part of the cryptocurrency ecosystem for integrating traditional finance into a new one. National currencies are inevitable at this stage because we pay for goods and services with the fiat of our respective countries. Therefore, we will continue to valuate cryptocurrencies on their denominated values to place them within our current economies. 

**\
The AgeUSD protocol will give a boost to the upcoming [ErgoDEX](https://ergodex.io/) release by providing USD liquidity. With the introduction of SigRSV-SigUSD pairs, liquidity on theDEX will balance itself with the AgeUSD protocol. As usage increases, this will affect both ErgoDEX and the AgeUSD protocol in a mutually beneficial way, creating a sustainably flourishing environment for new projects.**

<!--EndFragment-->

<!--EndFragment-->