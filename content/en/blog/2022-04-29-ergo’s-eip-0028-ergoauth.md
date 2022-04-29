---
title: "Ergo’s EIP-0028: ErgoAuth"
date: 2022-04-29T06:16:44.861Z
author: Ergo Platform
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/news-blog-31.png
tags:
  - Building Ergo
---
When discussing blockchain, it is important to remember that wallets are completely anonymous. On Ergo, you do not know who owns a particular wallet. Due to all transactions being public, this is an important aspect of blockchain wallets - if you know who owns a wallet, you can see all of their assets, transactions and any other wallets that they interact with.

That being said, there are situations when it might be handy, or even necessary, to prove who has access to a certain wallet. One possible scenario is when interacting with games on the blockchain. A common situation can arise when tokens are used as game elements, and only players owning certain tokens can participate in specific actions. How can it be known if a player actually has access to a wallet that they pretend to have?

In this situation, games can only rely on asking the player to make a transaction from the wallet owning the token in question. This approach has some obvious drawbacks: the player has to make a transaction and pay transaction fees, and the transaction may take several minutes to mine.

To help with this issue, Ergo core developers proposed ***EIP-0028 ErgoAuth***. It is already implemented in Appkit, Ergo’s SDK, and will be integrated in the upcoming release 1.9 of the Ergo Wallet App.

ErgoAuth bypasses the need to make a transaction on the blockchain by defining a similar protocol directly between a wallet application and a server run by the party in need to authenticate a user. It works as follows:

* The game (or dApp, website, etc.), wanting to check if a user has access to a certain wallet, shows a QR code to scan with a wallet app - or presents a button to open a wallet application.
* This will make the wallet application contact the game’s server and request specific information. The wallet needs to know what address the user should authenticate, as there can be multiple addresses.
* The wallet application will present the user a screen and ask if they want to prove access. When the user confirms, the wallet application will sign the message sent by the game server with the private keys and send the signed message back.
* The game server can now check (by using Appkit or its own implementation) if the proof sent by the user is valid and that the user has access to the wallet.

Developers can start integrating ErgoAuth into their applications right now. For more detailed information, please refer to [EIP-0028](https://github.com/ergoplatform/eips/blob/ccfe51957f75e24f0750b2813d694bd938851f7e/eip-0028.md) and the corresponding code example links.