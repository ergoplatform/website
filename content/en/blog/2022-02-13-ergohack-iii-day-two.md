---
title: "ErgoHack III: Day Two"
date: 2022-02-13T18:48:32.211Z
author: Ergo Foundation
authorPhoto: /img/uploads/logo.png
blogPhoto: /img/uploads/news-blog-35-1-.png
tags:
  - Building Ergo
  - Ergo Team
---
<!--StartFragment-->

Looking at the second day of updates for ErgoHack III, it is becoming clear that it will be very hard to choose a winner! Check out the latest work from the teams.





## Community-Ledger Integration (Nautilus - Satergo - SAFEW)

### Nautilus

Working on UI improvements for ledger connection and signing flow

Helping other teams with Nautilus integration

### Satergo

I implemented the protocol except for some parts that are unclear. Next up is creating the user interfaces and implementing hardware wallet support into both the wallet format and the transaction methods.

### SAFEW - Simple and Fast Ergo Wallet:

Currently working on the ledger integration. As of now, I'm able to connect and discover the addresses to build the wallet. Still working on UI/feature adjustment around the wallet management before starting the transaction signing

### NightOwl Casino:

Prepared the slides giving an overview of the customizable game engine of our Casino with a simple roulette game implementation.



Wrote some documentation for core contracts:

<https://github.com/nightowlcasino/ERGOHACK-III->

<https://dev.nightowlcasino.io/#> 

### AnetaBTC:

We were able to integrate Yoroi and Nautilus into anetaBTC and TosiDrop. We also finished our docs and new landing page. Lastly we are preparing Aneta Wallet demo video



### GuapSwap:

Done: -Create constants: ErgoDex PoolIDs, TokenIDs, etc. 

Currently: -Create math helper functions for ergodex parameter calculations 

Will do: -Continue implementation of functionality for the different commands: guapswap$ generate guapswap$ swap <proxy_address> 



### Delphi - Oracle Pools Interface:

Have made decent progress through our task checklist with a stretch goal of getting through each one by end of EH3 



\-API service providing for list of known oracle pools

Pool Specific Data

\-timeseries of datapoints

\-number of datapoints posted to date

\-timeseries of active oracle (oracles submitting a datapoint)



Oracle Specific Data:

\-First posting date

\-Last posting date

\-number of datapoints submitted to date

\-timeseries of datapoints



\- Balb: I’ve been splitting time. I first had to modify the connector first so that the correct data is parsed based off the url. Got all that working correctly now. Still need to create a way for downloading binaries.

### Hype10Use: 

Today was mainly about updating the UI and contract mechanics, contract compilation in the backend and transaction composition and signing in the frontend. We planned to have an end-to-end running example by today but we are struggling still with some technicalities between front and backend

### Ergo-DNS: 

Working on creating APIs between frontend and backend module

Planning our standard for domain token name

Started smart contract design and integration with minting process



### SkyHarbor NFT Marketplace:

Buying, selling, and cancelling sales on the blockchain are now done. More error testing and then we move on speeding up the website



### Stealth-Addresses:

Team 1:

We embed our project into the mixer. Now we are testing the mixer and also working on the UI. Tomorrow I try to push the main project and our version of the mixer on GitHub and share the link



Team 2:

I've added a PR for the necessary DHTuple access on the wallet - <https://github.com/ergoplatform/ergo-playgrounds/pull/24> Once that one lands, I could do a PR for adding it to ergo by example.



### Petri-Nets:

I have cancelled the pull request on Sigmaverse as this project is a development framework and not an ErgoPlatform use case. Hope to make more progress today, a lot of foundational understanding is required to fill in the blanks. I did more reading than actual coding, but I still believe it will be a good fit. It is also clear to me that the scope is bigger than what a Hackathon intends, but it got me started and I now have momentum. I hope to at least prove the viability of the project with ErgoHack III.



I have been studying the Categorical aspects of Petri Nets for some time now and did a Scala 3 implementation in a project I open sourced: <https://github.com/iandebeer/castanet>. The original intent was to compose applications from Knative Services under Kubernetes, but it requires a lot of Macro programming to work with GRPC interfaces.

### SuSy:

<!--EndFragment-->