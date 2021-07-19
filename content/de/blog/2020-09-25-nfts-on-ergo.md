---
title: NFTs on Ergo
date: 2020-09-25T05:58:46.784Z
author: Guy Brandon
authorPhoto: /img/uploads/guy_brandon.jpg
blogPhoto: /img/uploads/nick-karvounis-fmd8tikf8bo-unsplash.jpg
tags:
  - Building Ergo
---
<!--StartFragment-->

*As with almost every other area of DeFi, Ergo Platform takes a different approach to NFTs that offers some interesting and unique use cases and benefits.*

NFTs look set to become the next major frontier for blockchain. Over the course of this year, crypto has become an accepted and [practically mainstream](https://ir.microstrategy.com/news-releases/news-release-details/microstrategy-adopts-bitcoin-primary-treasury-reserve-asset) (if still new) means of hedging against inflation and storing value. The [emergence of DeFi](https://ergoplatform.org/en/blog/2020-09-03-some-thoughts-about-defi-yield-farming-and-how-open-systems-should-be-used/) as a use case for blockchain has similarly been impressive over the past few months, regardless of the [issues that still need to be solved](https://ergoplatform.org/en/blog/2020-09-17-defi-finance-but-not-always-decentralised/).

Building on both of these, NFTs are an intriguing new asset class that offers functionality that is at once familiar to real-world users, but goes far beyond anything that has ever before been possible.

NFTs (Non-Fungible Tokens) are unique and indivisible blockchain tokens. They can be used to represent and prove ownership of digital products such as works of art, in-game items or characters, virtual trading cards and much, much more. Because an NFT can be used to represent ultimate ownership, they allow users to trade digital items and cryptographically guarantee provenance.

NFTs are becoming very big business. It’s an emerging sub-sector for blockchain, but one that is predicted to grow rapidly. The amount of tokenisable items has led one analyst to suggest this $100 million-plus use case for crypto will one day [become a trillion-dollar market](https://news.bitcoin.com/the-tokenized-metaverse-non-fungible-token-sales-to-surpass-100-million/).

**UTXO NFTs**

Most NFTs are currently hosted on Ethereum, while large marketplaces like [Rarible](https://rarible.com/) allow creators to sell their works and other users to buy and trade them on the secondary market. With soaring transaction fees, the costs associated with minting and trading NFTs can now be prohibitively high. Whatever the other pros and cons, there are benefits to using a platform that has both lower transaction fees and a long-term scaling plan.

However, just as Ergo’s extended UTXO model enables a [different approach to Oracles](https://ergoplatform.org/en/blog/2020-08-31-ergos-oracle-pools-and-what-they-mean-for-the-ecosystem/) and other core blockchain infrastructure like smart contracts, so it also enables innovation for NFTs.

One interesting feature is that Ergo can be used to create PoW-backed NFTs. For most NFTs, a user simply generates a UTXO with the token contract attached. But it’s also possible for miners to create special NFTs, where the id of the newly minted token is the id of a coinbase transaction. This has [all kinds of potential use cases](https://www.ergoforum.org/t/proof-of-work-backed-tokens/224/2), but the core idea is that a miner has the opportunity to create a special NFT when they mine a block. While any number of NFTs can be created via a regular smart contract, a finite number of these PoW-backed NFTs can exist.

A trivial application of this is creating memorabilia: imagine, for example, an NFT that commemorates the 1 millionth block of the blockchain. The block rewards are fungible and can be spent just like any other coins, but that NFT is unique. It can only ever be generated once, at the time the block is mined, and only the miner who added that block to the blockchain can do it.

**Unforgeable identity**

There are other applications of NFTs that use the extended UTXO model, including facilitating a new generation of complex dApps. For example, a dApp creator can generate an NFT associated with an address and smart contract. While anyone can use that contract, and even create a transaction using the private key of that address, the NFT owner can still maintain administrative rights or other privileges.

Let’s say you create a phenomenally successful exchange dApp, which pays a small percentage of trading fees to the owner – designated by ownership of that NFT. That token, and future revenues, can now be transferred and sold. The token can also be managed by a secondary smart contract, which could divide revenues among 100 tokens representing shareholders. The NFT could be used to update the dApp, or shut it down, if necessary – whatever conditions were coded into it. The point is that the NFT provides guaranteed, unforgeable proof of identity.

These use cases only scratch the surface of NFTs on Ergo. We look forward to seeing how the ecosystem develops, both on Ergo Platform and in the broader NFT space.

<!--EndFragment-->