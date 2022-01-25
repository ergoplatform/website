---
title: Ergo AMA Wrap-Up January 21, 2022
date: 2022-01-25T08:02:25.802Z
author: Ergo Platform
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/03b1_ergoblog_cover_01112021.png
tags:
  - Ergo Team
  - Building Ergo
---
<!--StartFragment-->

During last week’s AMA, Dan provided the community with updates on several initiatives. He informed everyone that he has been working on issues related to wallets and wallet user experience. As a natural extension of this work, Dan said he has reached out to the entities behind several prominent wallets in the industry and has initiated discussions with them about integrating Ergo. Dan discussed how going forward it is incredibly important to have a smooth user experience with Ergo wallets and that he was particularly happy to hear about the success of the Ergo Android/iOS wallet.



Dan revealed to the audience that he has been speaking to a major incubator and accelerator with a strong track record in working with other ecosystems. He is keenly aware to be careful about who is brought into the ecosystem and this particular entity is a very ecosystem-friendly incubator. Once details are finalized, the community will be informed but this company offers incubation and accelerators, as well as various mining yield farming services. 



Updates on the education initiatives indicate that there have been several productive meetings in the last week and Dan has been in steady contact with the university he has mentioned in previous AMA’s. It is expected that the curriculum will have a variety of different courses focusing on Ergo - everything from in-depth technical material to introductory courses.



Dan concluded his opening remarks with a call requesting topics for future Ergo Pulse episodes. He asked the community to keep their eyes out for this request on Ergo’s social media channels.



In Alex’s opening comments, he talked about ErgoLearn and the successful fundraiser they held on Ergo Raffle. ErgoLearn (soon to be rebranded as DeCo) offers courses on ErgoScript and blockchain and is currently in the middle of delivering their inaugural curriculum. 



Alex discussed AnetaBTC’s 5000 output transaction last week and how it caused some issues on the P2P layer. The issue was due to a divergence between light full nodes and full nodes holding the UXTO set. He elaborated that the issue has since been resolved with a new release and that this information provided a lot of things to consider with regards to securing the protocols. The new node release also provides improved stability for transaction propagation and block assembly and there are significant improvements coming with regards to bootstrapping the node.



While discussing recent issues about Yoroi, Alex said it is critical to concentrate on the stability of the infrastructure - this includes the reference clients and explorer (which he noted is quite stable). He noted that there are a lot of things to work on to make the system better, including the assembler service to apps and wallets. 



Alex continued with a discussion about new wallets that are in the pipeline as well as the construction of ErgoPay - a dApp connector being developed by MrStahlfelge. Alex also mentioned that he is in touch with developers, including Anon_real of the Auction House, to make sure that large transactions do not cause problems for the transaction assembler. This research will help set the system up for success in the future as they get ahead of possible issues with large transactions. 



Alex ended his introductory comments with a discussion on Web 3.0, saying he believes Web 3.0 has the potential to be much better on Ergo than Ethereum, Binance Smart Chain, Solana, and other projects. 



For his closing remarks, Alex hinted that there will be a surprise announcement for the community very soon and to keep an eye out for details after the completion of ErgoHack III.

## AMA Questions and Summary



The following is a summary of questions posed by the audience during this AMA. Last week Dan and Alex answered questions on mass adoption, the marketing roadmap, ErgoScript, oracles, EIP-0027, and much more. We also learn that Dan is NOT a coffee maximalist. He believes in cross-coffee interoperability. To view the full AMA, please head over to Ergo’s Youtube channel: <https://www.youtube.com/watch?v=wy0L67HvtYw&t=434s> 



**What do you think are the key pieces that Ergo is missing to achieve mass adoption?**



*Answered by Dan Friedman*



* Thinks the two main keys are volume and liquidity
* Lack of big commercial adoption
* This is something he is focusing on this year
* If we get more wide spread commercial adoption of Ergo tech, that will help
* More government adoption
* Primary focus point for him and the Ergo Foundation will be making this happen
* By end of this year, will be achieving more robust adoption of Ergo tech
* The more applications, the more adoption



*Answered by Alex Chepurnoy*



* Thinks we need more time to grow the ecosystem
* Need critical mass of applications and users
* This is coming - good progress in this



**Do you have a marketing roadmap with concrete actions for 2022?**



*Answered by Dan Friedman*



* This is something that is actually in the works
* Major milestones are PR for Ergo
* We’ve hired a firm for that and are finishing the negotiations
* Big marketing push will be education, ErgoHack
* Focus on rebranding
* New website
* Reorganize materials
* Make things more streamlined
* As we progress, we will make the roadmap available for the community



**Russia is going to ban crypto (again). Are the Russian developers safe?**



*Answered by Alex Chepurnoy*



* He thinks so
* Not really following the news
* Since 2014, this is a recurring discussion



**Quick summation of why ErgoScript is superior to competitors?**



*Answered by Alex Chepurnoy*



* Simpler 
* Less chance to have logical errors
* Our programming is pretty specific
* Once you understand eUTXO and ErgoScript, it is pretty straight forward
* You can do a lot in a really simple way
* Contracts are composable
* Talked about ErgoPad contracts 
* One of them was mostly taken from Anon_real’s proxy contract
* Pretty secure to do that



**When do you think we’ll start to see side chain implementation?**



*Answered by Alex Chepurnoy*



* With regards to off chain and side chain, there will be a tutorial with a simple off chain application
* With side chains, we are talking with partners to do those things together
* Still in research and development phase
* Can say something more concrete around February



**When Ergo $100?**



*Answered by Dan Friedman*



* It will be when $100 = 1ERG



**How does the roadmap for Ergo Oracles look? What types of oracles would you love to see built on Ergo?**



*Answered by Alex Chepurnoy*



* There is oracle 2.0 proposal and contracts are done
* Need to check the backend component
* Oracle pools 2.0 better because they create less dust on the blockchain
* They are using a token for rewarding - convertible to ERG
* Details are published so people can check
* It will be deployed depending on use cases
* Currently, there is good progress towards finalizing DexyUSD design
* * Another stablecoin design and maybe it will use the new oracle pools



**Will Ergo partner with ETC or is that competition? I know IOHK was helping at some point.**



*Answered by Dan Friedman*



* Yes, IOHK was working with ETC
* Will talk to ETC labs
* Has some good contacts and good friends at ETC
* We’ll see



*Answered by Alex Chepurnoy*



* I guess we can
* If there is competition, that is only with regards to miners
* We are both operating in the GPU mining field
* Yeah, outside that, not really competition



**I heard Ergo achieved 5000 simultaneous transactions. Is it true?**



*Answered by Alex Chepurnoy*



* Actually, it was one transaction but with 5000 outputs
* It is kind of like 5000 transactions in Ethereum
* Yes, it happened
* When talking about TPS, always seems meaningless
* One transaction with 5000 outputs can replace 5000 transactions
* How can you compare transactions if they are achieved so differently?



**Can you explain/clarify the EIP everyone is talking about, miner rewards and putting some in a smart contract for later. I don’t see it as a bad thing. Can you help calm peoples nerves regarding this?**



*Answered by Alex Chepurnoy*



* Emission is done via smart contract already
* EIP27 is about miners enforcing miners to put some parts of rewards they get from the emission contract into another contract - which is similar to the emission contract but is simply paying a flat amount starting from a certain block
* The point is to have a long tail emission
* For approximately another 20 years
* Will help with long term network security 
* Can be done via soft fork
* The update is needed for mining nodes only
* It is a very soft way to update the protocol
* Ergo has emission done via smart contract, not as a magic rule in the code base of the client



**Are there contingencies, or a plan to put something into place, for continuing development of Ergo if the Ergo Foundation isn’t able to for whatever reason in the future?**



*Answered by Dan Friedman*



* Thinks the contingency plan is the community driven aspect of Ergo
* Even if Ergo Foundation is not there, there is still a developer community that is driving forward the development of Ergo
* It is the advantage of a fully decentralized system
* There is no one central point of failure



*Answered by Alex Chepurnoy*



* Agrees with Dan
* Goal of Ergo Foundation and treasury was to make ecosystem big enough to make it self-sustaining
* Decentralization and community driven approach - there shouldn’t be a single identity



**I am looking into the Ergo project and I would like to know what is the unique selling point and if it will resolve in the future some of the issues that other Layer 1 projects are facing?**



*Answered by Alex Chepurnoy*



* It’s about a combination of a few unique properties
* Scalability solutions - maybe will make a presentation on that
* Unique support for cryptographic protocols, such as:
* * Real threshold signatures
  * Complex signatures
  * ErgoMixer
  * Stealth pools on the application level
  * This is still a pretty new area of tech - some new things to still discover
* A lot of interesting ideas deal with governments in proof of work systems 
* We have block size limit increased since the mainnet launch
* TPS has increased
* Developers can propose to tweak some parameters to scale securely after
* Bypassing non-outsourceability
* A lot of talks about contracts for miners (GetBlok)
* * GetBlok is doing Proof of Voting protocols to allow miners to vote individually based on their hashrate
* never seen these kinds of tools in other proof of work cryptocurrencies
* It was considered that PoW was dumb with regards to governance
* * Seems like a lot of interesting are actually possible here
* UTXO is a more friendly cryptocurrency
* * More friendly to off chain and side chain proposals



*Answered by Dan Friedman*



* Similar sentiments
* Scalability
* Interoperability 
* Adoptability 
* These things are the success to any layer 1 blockchain 
* They are the tools that are needed to evolve
* Those are the 3 key points that are the major sell for Ergo
* It is so streamlined with those
* Concentrating on privacy
* Interoperability and bridges
* Scalability is a big reason why Ergo is it’s own unique organism - doesn’t have to compete with other blockchains



**Will Ergo NFT be on OpenSea?**



*Answered by Alex Chepurnoy*



* It’s possible but a bridge with Ethereum is needed
* Then need bridge standards
* Theoretically it’s possible 
* Firstly, it would be good to get a bridge to Ethereum and other DEXs



**Where is the DeFi space at in its evolution and how is Ergo best developed to capitalize?**



*Answered by Alex Chepurnoy*



* DeFi is not in a very good state
* There was a recent article that highlights how welfare distribution is pretty centralized
* Most of the projects are backed by the same funds
* * Funding competing protocols
  * Thus, centralized
* Bitcoin was initially a movement against the money printer
* Currently, DeFi has a lot of projects issuing new tokens to increase liquidity providers
* Liquidity providers are jumping from one protocol to another
* * Depending on how attractive concrete tokens are at the moment
* It’s problematic
* DeFi projects are trying to lock liquidity to make them resistant to failing in price quickly
* DeFi is not in such a good space right now
* Thinks DeFi should be about providing a valuable service, especially where they are not available
* * Example: lending services and the problem with high interest rates
  * Lending is not easily available to all
* Instead, we have some plans where people are promised something like 400% APY
* This is insane
* It’s sounds worse than ponzi schemes
* There is something conceptually wrong in current DeFi space - it’s not always providing value

<!--EndFragment-->