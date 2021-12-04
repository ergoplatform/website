---
title: Raffle User Interface v2
date: 2021-12-04T15:40:29.132Z
author: Ergo Foundation
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/raffle-cover.png
tags:
  - Building Ergo
  - Roadmap
---
<!--StartFragment-->

[Ergo Raffle](https://bit.ly/3Ispsc2) platform is an on-chain crowdfunding platform where people can join raffles or initiate one. The platform was launched two months ago and has hosted many raffles. For a better user experience, the new interface is ready to use.

A raffle is a crowdfunding service that aims to enable anyone to raise enough money needed for a project. The project can be a direct donation to a charity, an academic or business plan, or anything else the creator can convince people to part with their hard-earned ERG for. As a bonus, after finishing the raffle, a lottery takes place, and a lucky participant wins the raffle reward.

Users can interact with the platform using a non-custodial wallet, like Yoroi or Anroid wallet. Smart contracts govern the platform, so there is not a middle party between the funders and beneficiaries. All the funds are stored in smart contracts and transactions are verifiable on-chain.

The main feature of our dApp is that the whole process is done using the contracts, and no external power can alter the raffle life cycle, even the ErgoRaffle system itself.

After collecting the funds, a Raffle takes place and pick a random winner by using block numbers. By computing random block numbers with the number of tickets and using the remainder value as input, the application selects the winner according to the ticket number.

Funds will be shared proportionally between charity and raffle, as declared in the funding campaign. If the target value is not reached, the raffle gets cancelled and users get their refund.

If you wish to check the contracts for yourself, check Raffle on [GitHub](https://github.com/ErgoRaffle/raffle-documentation)

**\
To learn about Ergo Raffle and how to use it, see the previous [blog post](https://ergoplatform.org/en/blog/2021-09-02-ergo-raffle/).**

**To learn what has been achieved with raffle, see [ErgoHack Wonders](https://ergoplatform.org/en/blog/2021-11-30-ergohack-wonders-i-the-ergo-raffle/)**

<!--EndFragment-->