---
title: Introducing the Sigmaverse
date: 2020-12-27T20:20:01.390Z
author: Ergo Team
authorPhoto: /img/uploads/logotype_black_circle.svg
blogPhoto: /img/uploads/frame-1.png
tags:
  - Building Ergo
  - Ergo Team
---
*Your portal to Ergo’s dApp universe is opening.*

Ergo has some amazing tech and some talented developers. However, as a decentralised and community-powered platform, it’s not always easy to know what’s going on all the time. Different people are developing different dApps and use cases, formally and informally. Connecting them to the same users and building that all-important DeFi network effect isn’t always easy.

That’s what the [Sigmaverse](https://sigmaverse.io) is about. Sigmaverse is a one-stop portal to the Ergo dApp ecosystem: a place where users can find all the cool functionality that community developers are building on Ergo, all in one place.

The idea is that developers can create their apps, and then list them on Sigmaverse using GitHub.

As it becomes the default site for accessing dApps, more and more devs will add their own, making it easy to learn about new additions to the Ergo ecosystem. A search bar allows users to check for a specific type of dApp.

So far, five dApps are listed on Sigmaverse:

* [Ergo Auction House](https://ergoauctions.org/): Ergo’s NFT market ([read more](https://ergoplatform.org/en/blog/2020-10-16-announcing-the-auction-house-nft-marketplace-on-ergo/))
* [ErgoMixer](https://github.com/ergoMixer/ergoMixBack): trustless, self-sovereign mixing for ERG and Ergo tokens ([read more](https://ergoplatform.org/en/blog/2020_03_20_ergo_mixer/))
* [ErgoUtils](https://ergoutils.org/): Issue tokens and NFTs on Ergo 
* [Oracle Pools](https://explorer.ergoplatform.com/en/oracle-pools-list): Ergo’s decentralised, extended UTXO approach to oracles ([read more](https://ergoplatform.org/en/blog/2020-08-31-ergos-oracle-pools-and-what-they-mean-for-the-ecosystem/))
* [Zero-Knowledge Treasury](https://github.com/anon-real/DistributedSigsServer): create joint digital signatures with bespoke conditions ([read more](https://ergoplatform.org/en/blog/2020-09-04-announcing-the-zk-treasury-on-ergo/))

To include your dApp in Sigmaverse, create a new folder at https://github.com/ergoplatform/sigmaverse folder applications/{dAppName}, and in this folder create a new file, overview.md, with the following contents and structure:

```markdown
------
name: name of dApp
description: description of dApp
website: dApp website
logo_image: “{logotypeName}” – if you want to include this, save the image at applications/{dAppName}/{logotypeName}
preview_image: “{previewName}” – if you want to include this, save the image at applications/{dAppName}/{previewName}
appCategory: [“web” or/and “cli” or/and “desktop”]
------
```

That’s all! The process is fast and straightforward. To check out the dApps already available in the Sigmaverse, visit [](http://sigmaverse.io/)[Sigmaverse.io](https://sigmaverse.io).