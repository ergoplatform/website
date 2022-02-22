---
title: "DeFi on Ergo: Custom Token Fees"
date: 2022-02-22T16:11:26.585Z
author: Ergo Platform
authorPhoto: /img/uploads/symbol_bold__1080px__black.png
blogPhoto: /img/uploads/08_ergoblog_cover_22022022b-1-1-.png
tags:
  - Building Ergo
  - Roadmap
---
<!--StartFragment-->

Infrastructure coins are important because we need them to pay gas fees for using decentralized finance and deploying contracts. Decentralized finance infrastructure covers a variety of tools from decentralized exchanges and financial tools like insurance contracts to NFT powered games. One problem users face is the need to carry additional coins to carry out the gas fees to continue using these platforms. The extended UTXO model makes it possible to pay fees with custom tokens and not only with the native infrastructure coin. In this article, we will discuss the [Babel Fees](https://iohk.io/en/research/library/papers/babel-fees-via-limited-liabilities/) concept and its functionalities on DeFi platforms.



## Infrastructure Coins



When referring to the infrastructure coins, we are talking about native Layer 1 coins. These assets are the nuts and bolts of a functioning smart contract platform. Miners need to be incentivized to secure the platform and users need these coins for distributed applications such as oracles, exchanges, lending protocols, NFTs, Metaverse and social media platforms. 



In Web2, service providers indirectly charge users through in-app purchases or by selling data to third parties. In Web3, the charges are directly taken when signing a transaction, uploading a contract or interacting with an application. Users connect to Web3 with a non-custodial blockchain wallet, thereby preventing Web3 applications from accessing information about a person’s password. However, a gamer may not want to use a DeFi application, therefore it is inconvenient for a gamer to hold a coin other than their desired game coin. The extended UTXO model introduces the Babel fees to pay gas fees in custom tokens for this problem.



## Babel Fees



In the Ethereum ecosystem, tokens are seen as secondary citizens when compared to infrastructure coins. Gas fees cannot be paid in custom tokens and a regular user will be forced to acquire a coin that is not necessarily useful. This situation will cause involuntary demand and may be problematic by causing synthetic price fluctuations. The user could be harmed because of the involuntary possession of coins on the balance sheet. Babel fees make this process smoother with instant exchanges. It could be fair to say that this model operates with [atomic swaps](https://www.investopedia.com/terms/a/atomic-swaps.asp) built into the protocol level.



An infrastructure coin will still be the main currency, however the extended UTXO model enables the implementation of non-interactive custom fee conversion on the protocol level. Therefore, any user interacting with the blockchain does not need any amount of unwanted coin and liquidity pools on the governance layer will take care of the currency conversion for them. In return, the system achieves a more frictionless user experience on a decentralized platform.



## Custom Token Fees in Ergo



The concept of paying fees in custom tokens was [introduced to Ergo](https://www.ergoforum.org/t/ergomixer-zerojoin-mixer-for-erg-and-tokens/318/10?u=root7z) before the publication of the comprehensive Babel Fees research. For the ErgoMixer design, a smart contract function can be added to define fee boxes with specified token IDs and decimals. However, we expect to see the Babel Fees design implemented on various aspects of decentralized finance that are described above. The well-known speculation that users need to hold native coins to use the blockchain is gone. The extended UTXO is an accessible design that opens its doors to all tokens and applications without forcing them to buy native coins at random times.



To simplify the custom token payment of the Babel fees concept, researchers defined the process by creating temporary anonymous accounts. These accounts are never included in the ledger but they are defined to point out the liability of the people making the transaction. The users liability is called limited liability -which defines who owes how much of which token to whom at the moment of the transaction. 



These temporary accounts simplify the underlying exchange protocol and enable batch executions in a non-interactive manner. It should be noted that for every person who is willing to make a transaction with a custom token, there should be at least one facilitator willing to accept the offer at the proposed exchange rate.



### Conclusion



To summarize, the custom token fee payments on the extended UTXO model proposes a frictionless decentralized finance experience in a trustless manner. The Babel Fees concept is the reinterpretation of the atomic swaps model that can be implemented both in the blockchain as well as cross-chain. Users and institutions will be able to interact with the blockchain without needing to hold arbitrary amounts of a native coin.



<!--EndFragment-->