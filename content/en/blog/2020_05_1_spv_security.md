---
title: "Building Ergo: SPV security"
date: 2020-05-1
author: "Guy Brandon"
authorPhoto: "/img/authors/guy_brandon.jpg"
blogPhoto: "/img/blog/spv_payment.jpg"
tags: ['Building Ergo']
---

_There’s often a tension in the crypto world between security and convenience. That trade-off is unacceptable if we want these technologies to be widely used. Here’s how Ergo addresses one common and very important issue._

We all know that the most secure way to use Bitcoin, or any crypto, is to download a copy of the blockchain and run a full node yourself. That way, every time you or anyone else makes a transaction, your client checks the blockchain to ensure it’s valid. You don’t have to trust anyone else.

A full Bitcoin node checks all the blocks in the blockchain (using headers) and makes sure there are no fraudulent transactions. It’s a very secure way of using crypto – but there’s a problem. It requires significant bandwidth, storage and processing power. That kind of commodity hardware is expensive, and using a full node to validate and make transactions is in any case unsuitable for mobile devices. This is particularly true for Bitcoin, where the blockchain is over [270 GB and counting](https://www.blockchain.com/charts/blocks-size).

## SPV

Simplified Payment Verification (SPV) is designed to address this problem, as described in the [Bitcoin white paper](https://bitcoin.org/bitcoin.pdf):

- _It is possible to verify payments without running a full network node. A user only needs to keep a copy of the block headers of the longest proof-of-work chain, which he can get by querying network nodes until he's convinced he has the longest chain, and obtain the Merkle branch linking the transaction to the block it's timestamped in. He can't check the transaction for himself, but by linking it to a place in the chain, he can see that a network node has accepted it, and blocks added after it further confirm the network has accepted it._
 
Satoshi notes that this is not a perfect solution, and is vulnerable to an attacker overpowering the network and fooling SPV users.

Moreover, while SPV mode is intended for resource-limited devices, even this ‘lite’ approach is not always feasible. Ethereum’s headers alone total around 5 GB to download. Thus Ethereum mobile clients do not validate chain validity and so blindly have to trust third parties.

There are proposals to reduce the requirements for SPV mode by checking just a few random headers, instead of all of them. But it’s hard to do that securely. 

## Efficient SPV

Several years have been spent researching and developing secure protocols that allow for efficient SPV clients. The two best-known and most reliable protocols are NiPoPoWs and FlyClient.

Ergo implements NiPoPoWs, or Non-interactive Proof-of-Proof-of-Work. This technology can be explored in full on this dedicated website: [https://nipopows.com](https://nipopows.com):

- _Non-Interactive Proofs of Proof-of-Work (NIPoPoWs) are short stand-alone strings that a computer program can inspect to verify that an event happened on a proof-of-work-based blockchain without connecting to the blockchain network and without downloading all block headers. For example, these proofs can illustrate that a cryptocurrency payment was made._

- _NIPoPoWs allow very efficient mobile wallets to be created. [SPV wallets](https://bitcoin.org/en/developer-guide#simplified-payment-verification-spv) are already very lightweight compared to full nodes because they only require the download of block headers, not the whole blockchain. NIPoPoW wallets need to download only a small ***sample*** of block headers, around 250, when SPV clients need to download half a million block headers. The sample needed changes but doesn't grow much in size as the blockchain grows larger by the years, even after decades of data has been accumulated._

This enables us to build a mobile SPV client that requires around __just 100KB__ of block headers to be downloaded.

A super-efficient Ergo wallet with SPV security is in development, so stay tuned for more updates!
