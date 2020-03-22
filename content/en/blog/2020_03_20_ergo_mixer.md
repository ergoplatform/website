---
title: "Introducing Σ3 – ErgoMixer"
date: 2020-03-16
author: "Ergo team"
authorPhoto: "/img/logotype_black_circle.svg"
blogPhoto: "/img/blog/ergo_mixer.jpg"
---

_The project uses Ergo’s Sigma protocols to enable efficient, trustless mixing of funds, enabling a high degree of privacy while ensuring security is not compromised._

_ErgoMixer command-line demo tool along with detailed technical description can be found at https://github.com/anon92048/ergo-mixer-demo ._

Ergo’s Sigma protocols can be used to create many interesting and exciting DeFi use cases, with greater simplicity, efficiency and security than other smart contract platforms offer. Created by one of Ergo’s community members @anon92408, Σ3 (‘Sigma Three’) is a powerful mixer that works by pooling funds and enabling participants to spend them without anyone knowing who made the transactions.

## How does it work?

While understanding the full operation of the mixer will require some in-depth knowledge of cryptography, the root concept is fairly simple. (For those who want to learn the details, you can find out more in the white paper.)

Participants send coins to a pool, and these can be spent by different members. However, the use of Sigma protocols – specifically ring signatures – means that it’s impossible to know which member spent them.

Take the simplest case of a pool in which a ‘box’ of coins can be spent by either Alice or Bob. Either Alice or Bob can sign a transaction and move the coins, but no external observer will be able to tell which of the two signed it. This is different to multi-signature transactions, in which (say) 2 of 3 participants have to sign a tx; with multi-sig, it is known which two do the signing.

Thus anyone observing from the outside would have a 50:50 chance of guessing whether Alice or Bob moved those coins. But that process is iterated, over and over again, with different users. After many rounds, with many users, it’s effectively impossible to know who owns the coins. Still, the coins never leave the control of their original owner – there is no risk of lost funds.

## ErgoScript

This process can be implemented natively on the blockchain, as is the case with ZCash. This has a similar process hardwired into the blockchain – which works, but imposes limits on the blockchain.

It would be possible to implement something similar with Ethereum, since Ethereum has Turing-complete smart contracts and any computational task can be executed. But it would be clunky and inefficient, and the result would be expensive and possibly risky.

Ergo allows this kind of use case to be implemented easily, using Sigma protocols. ErgoScript includes native support for all the cryptographic and blockchain functionality required to create Σ3 on the Ergo chain, securely and efficiently.
