---
title: Learn ErgoScript by Example
date: 2020-10-12T08:14:04.647Z
author: Guy Brandon
authorPhoto: /img/uploads/guy_brandon.jpg
blogPhoto: /img/uploads/robert1.jpg
tags:
  - Building Ergo
---
<!--StartFragment-->

*The new resources provide a powerful but simple way to learn UTXO-based smart contracts.*

Since its mainnet launch in July 2019, Ergo has steadily been building out both its core tech and its dapps ecosystem, with several unique developments in both. Ergo’s [Sigma Protocols](https://ergoplatform.org/en/blog/2020_03_16_ergo_sigma/) enable safe, customisable zero-knowledge proofs, which underpin such applications as [ErgoMixer](https://ergoplatform.org/en/blog/2020_03_20_ergo_mixer/) and the [ZKTreasury](https://ergoplatform.org/en/blog/2020-09-04-announcing-the-zk-treasury-on-ergo/). And there’s lots more to come!

To date, though, Ergo hasn’t been the most user-friendly ecosystem. It’s been far better suited to developers and the tech-savvy. With key functionality now complete, that’s starting to change as the priority shifts towards bringing in users and developers. The [integration of Ergo in Yoroi](https://twitter.com/YoroiWallet/status/1314244618435739648?s=09), a major lite wallet for Cardano developed by Emurgo, is a critical step for users; Yoroi will ultimately serve as a portal for Ergo dApps, acting a lot like MetaMask.

**Ergo by Example and Ergo Playground**

Ergo’s broad functionality yet safe and simple approach to smart contracts makes it a great tool for developers. To make it more accessible to the dev community, we’re launching ErgoScript by Example: a set of resources that enables users to jump in and start writing smart contracts on the platform. We believe there’s nothing like it anywhere else on the web. This is the go-to site for learning about smart contracts based on the extended UTXO model.

[Ergo by Example](https://github.com/ergoplatform/ergoscript-by-example) is a repo on GitHub. It’s similar in format to other examples you may have seen for various programming languages. As the name implies, it’s designed to teach by example, taking smart contract use cases and unpacking how they work so anyone can write their own. It’s suitable for almost any level of expertise.

We’re also announcing **Ergo Playground**, which is linked from the examples you’ll find on GitHub. This is a powerful yet easy-to-use developer-focused environment with a text-based approach. It provides a full Ergo development environment based on Scastie, which is Scala-based, like ErgoScript. You can write code, share it as a URL at any moment, ask for feedback, and collaborate with others while writing your smart contracts seamlessly.

**Example #1: Pin Lock Contract**

We’ve uploaded the first example to GitHub: a Pin Lock smart contract. This application enables a user to lock ERG in a contract using a pin number. The way it works is pretty simple: the pin is hashed and stored on-chain, and the hash can then be used to prove a pin entered at a later date is valid, upon which the ERG can be moved.

This smart contract is not secure, for several reasons, so it’s not suitable for use in a real application. But it’s a good introductory example of the kind of things that are possible. ErgoScript is relatively simple to use, but very powerful. That’s well illustrated here: the code for the Pin Lock smart contract is just one line!

This [video by Robert Kornacki](https://www.youtube.com/watch?v=8l2v1asHgyA) offers a walkthrough of how Ergo’s smart contracts work, and how this particular contract works. One of the great things about the Ergo Playground is that it has no GUI, but does provide the ability to test complex scenarios easily. The remainder of the code in this example simulates the Ergo blockchain to test the contract without actually needing to engage with the network – making it faster, safer and more convenient.

We’ll continue uploading more going forward and the community is welcome to contribute to ErgoScript by Example with their own examples as well. Check it out, and get to know the #1 way to write extended-UTXO smart contracts and move them on-chain!

<!--EndFragment-->