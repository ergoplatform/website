---
title: "Building Ergo: Sigma protocols"
date: 2020-03-16
author: "Ergo team"
authorPhoto: "/img/logotype_black_circle.svg"
blogPhoto: "/img/blog/ergo_sigma.jpg"
---

_Ergo’s smart contracts and DeFi functionality are built on Sigma protocols – a powerful, flexible class of zero-knowledge proofs. Find out more about why they’re so important, and how they put Ergo head and shoulders above the competition._

Cryptography is a fascinating area, and one of the most exciting and intriguing concepts it offers are zero-knowledge proofs. In simple terms, a zero-knowledge proof allows someone to prove they know the solution to a problem without actually revealing the solution itself.

Let’s say someone picks up a phone in a bar. You can prove it’s yours by hiding the screen, entering the unlock code and showing the unlocked screen to the person who found it. This is a simple example of a zero-knowledge proof: you have proven you own the phone without giving away any sensitive information.

In cryptography, most practical problems are associated with secrets. The most popular application lies in digital signatures, used by millions of people around the world every day. Essentially, these involve saying: ‘This message proves I know the private key associated with this public key – but I’m not revealing the private key itself’. (Not every digital

signature scheme uses zero-knowledge proofs, but the most popular do.)

## Sigma protocols

Among the hundreds or even thousands of zero-knowledge protocols, there is a sub-class of efficient and composable proof-of-knowledge protocols called Sigma Protocols. These are also known as Generalized Schnorr Proofs. Sigma protocols can be represented as digital signatures in a straightforward way, so we can effectively think of them as signatures in the context of blockchain.

A Schnorr signature is a simple Sigma protocol signature, then. Schnorr signatures have been [proposed as an alternative to Bitcoin’s current signatures](https://en.bitcoin.it/wiki/Schnorr). (It is one of the most efficient signature schemes, which is why it would be beneficial for Bitcoin.)

However, there are dozens of other Sigma protocols. One of the great things about them is that they are composable, using simple AND and OR logic. So you can ask for a signature with the following statement: ‘Prove to me knowledge of either this secret OR that secret’ (this is a one-of-two ring signature). Or you can ask, ‘Prove to me knowledge of any two of these three secrets’ (a two-of-three ring signature). Those are just two simple examples; there are many more, and they can be far more complex and sophisticated.

## Ergo: Sigma + blockchain

When combined with a blockchain, these composable proofs enable some very powerful use cases. The logic for proofs can include conditions based on blockchain state. For example, ‘If the deadline block height has been reached, Alice can provide knowledge of a secret key for a refund. OR a ring signature from Alice and Bob is required to spend coins.’ Or ‘If this account holds a minimum of 100 ERG, Alice OR Bob can remove funds above that amount.’

Thus some very interesting and flexible DeFi applications can be built on Ergo, using secure, straightforward and efficient Sigma protocols.
