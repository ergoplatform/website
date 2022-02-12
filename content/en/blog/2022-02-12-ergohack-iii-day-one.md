---
title: "ErgoHack III: Day One"
date: 2022-02-12T17:40:08.037Z
author: Ergo Foundation
authorPhoto: /img/uploads/logo.png
blogPhoto: /img/uploads/eh_d1-1-.png
tags:
  - Building Ergo
  - Ergo Team
---
<!--StartFragment-->

The first day of ErgoHack III is complete and here are the latest project development reports from the teams. ErgoHack continues until tomorrow night, so take a look at their ongoing development below:



## **Community-Ledger Integration (Nautilus - Satergo - SAFEW)**



### **Nautilus**



\- Initial connection and tx signing integration is done

\- The Ledger app has an issue with returned sign bytes (the Tesseract team is working on this at the moment)

\- Working on UI refinements

\- Feel free to ping me anytime if you need help on integrating Nautilus with your projects.



### **Satergo**



\- USB connection is finished

\- Started implementing the ergo ledger app protocol in Java



### **SAFEW - Simple and Fast Ergo Wallet:**

\- GitHub repository of the project is : <https://github.com/ThierryM1212/SAFEW>

\- The goal is to provide a simple and secure wallet built for Ergo. 

You can contribute if you like it by testing, reviewing, promoting, and making pull requests.

\- Preparing a new release, to add a few Ergopay wallet improvements and an interface for the ergomixer within the wallet (update of the dependencies). Will start to look at the ledger integration tomorrow when I'll get the ledger.





### **NightOwl Casino:**



\- Swap Contracts implementation is explained in slides

\- LP contracts implementation is explained in slides

\- Project (<https://github.com/nightowlcasino>) is public

\- For the frontend, the home page is 90% done. The site code is playing nice with responsiveness and menu breakpoint. Finishing up “connect wallet” button and some minor styling details. We will then proceed with the coin flip page and swap page (these should be quick). 

\- Mockup for swap will be finalized tonight. 

We continue working on Nautilus integration for backend and should be mostly done by tonight. The smart contract for swap and liquidity is complete. 

\- Roulette contract is under review (will provide completed contract tomorrow). Coinflip smart contract will be completed by tomorrow as well. Started work on designing ErgoMixer integration. We are on track to launch the first game by the end of hackathon for testing. In addition, we worked on updating white paper and put out a blog on Night Owl privacy and security.

\-Proposal published: <https://medium.com/@NightOwlCasino/night-owls-security-and-privacy-mission-ergohack-lll-5371922caaf9>





### **AnetaBTC:**

\- Putting final touches on demo video of AnetaBTC front end progress

\- TosiDrop front end will be completed by tonight, Hazey will then begin building backend API

\- Aneta Wallet is coming together nice, we are hoping to begin community testing by the end of this weekend

<https://github.com/anetabtc>



### **GuapSwap:**

Done:

\- Finished proxy contract

\- Determined commands to be used for the program

\- Finished format of guapswap_config.json and proxy_addresses.json

\- Working on config objects for storing user settings from json files

Will be done today:

\- Contract for service fee

\- Consolidating all the necessary pool and token constants

\- Implementing the generate command 



<https://github.com/GuapSwap>



### **Delphi - Oracle Pools Interface:**

\- Made good progress on the stats backend for v1 pools

\- Started working on the connector-builder

\- Putting together a first frontend skeleton, will share a URL once live.

We're all just getting into the groove I suppose



Github: <https://github.com/thedelphiproject/connector-builder>

Landing page: <https://delphiproject.org/>



### **Hype10Use:** 

\- We have now gathered all refactored code we have been doing since the last hackathon. Our goal is to get the dApp hosted tonight and work on it directly, so we have it easier to show the dApp at the end of the hackathon. Our team will start working fully from this morning as today was mainly about organizing ourselves, revisiting our problems and sorting out a plan for going forward.

\- We had a huge blocker with the wallet integration yesterday, but we did not go to bed until we fixed it :D. Now that has worked and our transaction get processed by the blockchain, today is about getting the contracts finalized and two frontend devs will work on making the frontend look sweet



### **Ergo-DNS:** 

Meeting Minutes

\- @6directions's demo - 

   EasyName -> Holding Address Resolver is working.

   EasyName NFT Counterfeit Checker is working.

   Assumption - All EasyNFT would be minted from the same address.

   Converting to JavaScript library is possible for fast-tracking Nautilus integration.

\- @Balb's demo -

   Frontend is somewhat done.

   Ergo Assembler based NFT minting flow. 

      Step 1 - Take User Inputs

      Step 2 - Generate Smart Contract Address and wait for Erg to be received

      Step 3 - Erg transaction can be done through DApp connector or from the wallet

      Step 4 - Smart Contract will either mint NFT or return the (funds - tx fee).

   Each NFT minting address would be different if Ergo Assembler is used.

   Appkit based solution can allow for same minting address for each NFT.

Created initial backend to mint domain NFTs

Created an API system to lookup address of each NFT owner

Planning out how to connect each system module to each other



### **SkyHarbor NFT Marketplace:**



\- We had a group call solidifying the best way to deal with blockchain data.

\- Finished the ERG sales contract and tested NFT buying and selling

\- Implemented the buying UI and built the selling tx on the frontend using Nautilus wallet. Putting an NFT for sale worked like a charm. 

\- Implemented displaying the for sale NFTs. 



Getting the buy functionality to work currently. Once that is done, it will be a fully functioning marketplace run by smart contracts. We want to make the site run at a tolerable pace, so we are waiting until we implement our DB to release. We will be working on that Saturday and Sunday with @HazeyOneKenobi 



### **Stealth-Addresses:**



**Team 1:**

\- Working on stealth address based off this forum conversation. <https://www.ergoforum.org/t/stealth-address-contract/255>

\- We developed a project to create a stealth address and scan the stealth boxes. Now we are working on embedding it into the mixer. If it works and passes all tests, in the next level mixer UI must be edited to have the stealth feature.



**Team 2:**

\-Developing a new approach for implementing stealth pools that will be usable with any wallet with the support of an adress convertor.

\-Proving the contracts first in scastie playground, then they will implement it to sigma-rust. First tests are started.



### Petri-nets:

\-I have created a pull request in sigmaverse for the project: <https://github.com/iandebeer/ergo-castanet>. I use the Petri Net builder from a GRPC service using the protobuf definitions in <https://github.com/ergoplatform/ergo-appkit/tree/develop/docs/design-contracts> 

\-With this in place I am now implementing the "Heads or Tails Game" as a Petri Net, with the idea that I can visualise the stages, validate the flow, and run an instance of the dApp the ErgoPlayground or Appkit.



### SuSy:

* No updates available





<!--EndFragment-->