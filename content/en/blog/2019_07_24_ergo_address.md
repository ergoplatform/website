---
title: "Ergo Addresses"
date: 2019-07-24
draft: false
author: "Alex Chepurnoy"
authorPhoto: "/img/authors/alex_chepurnoy.svg"
blogPhoto: "/img/blog/address.jpg"
---

In today's article, we will have a closer look into the Ergo address formatting. In addition to that we are going to explain how they work specifically as well as what makes them preferable to other types of blockchain addresses.

Let's start at the very beginning.

The moment you install any cryptocurrency wallet you automatically create an address with it. Very loosely speaking you can compare a wallet to a traditional bank account and an address to the matching account number.
It is precisely one of these alphanumeric addresses that's needed to either send money from person A to person B, receive money or [withdraw your mining rewards](https://ergoplatform.org/en/blog/2019_07_03_mining_withdrawal/).
If you want to get started using the Ergo wallet and dive deeper into its functions go check out the [following link](https://ergoplatform.org/en/blog/2019_06_04_wallet-documentation/).

Now, what exactly are addresses?

Addresses are short strings that correspond to certain scripts and are used to protect a box ([this](https://www.ergoforum.org/t/ergo-terminology-a-box-and-a-register/32) post that core developer *kushti* published on our forum explains very well what a "box" is).
Unlike a (hex-encoded) binary representation of a script, an Ergo address is using a Base58-encoding and therefore has some very useful characteristics to it which the binary representation do not offer:

* The integrity of an address can easily be checked via an integrated checksum (which is a "small-sized datum derived from a block of digital data for the purpose of detecting errors that may have been introduced during its transmission or storage", according to Wikipedia).
* A prefix of the address is showing you the network and address type. In particular, the network prefix prevents you from mistakenly sending mainnet tokens to the testnet address.
* The address is using an encoding (namely, Base58 as mentioned) which is avoiding similarly looking characters and is friendly to double-clicking and also line-breaking in emails.
* An address is encoding network type, address type, checksum, and enough information to correspond with particular scripts.

Let's look at the prefix byte which contains information about the network and address types:

Possible network types are:

* Mainnet - 0x00
* Testnet - 0x10

Address types are (semantics described below):

* 0x01 - Pay-to-PublicKey(P2PK) address
* 0x02 - Pay-to-Script-Hash(P2SH)
* 0x03 - Pay-to-Script(P2S)


For an address type, we form content bytes as follows:

* P2PK - serialized (compressed) public key
* P2SH - first 192 bits of the Blake2b256 hash of serialized script bytes
* P2S  - serialized script (this is where mining rewards go!)

For example, sending 10 Ergs to a P2PK address usually means that a corresponding transaction 
will contain a box in which 10 Ergs are locked by a public key encoded in the P2PK address. Similarly,
in case of a P2S address the box will be locked by a script encoded in the address. In the most complicated case of a 
P2SH script, the box will be protected by a special predefined script which is taking first 192 bits of Blake2b256 hash 
value for a script which should be shown by an input spending the box. 


Here is an example of how particular addresses are going to look on the testnet: 

* 3 - P2PK (3WvsT2Gm4EpsM9Pg18PdY6XyhNNMqXDsvJTbbf6ihLvAmSb7u5RN)
* 8 - P2SH (8UmyuJuQ3FS9ts7j72fn3fKChXSGzbL9WC, 8LnSX95GAWdbDZWJZQ73Uth4uE8HqN3emJ)
* ? - P2S (imdaM2NzX, z4hAmfvfSnQJPChMWzfBzJjpB8ei2HoLCZ2RHTaNArMNHFirdJTc7E)

And here is how they are looking on our mainnet:

* 9 - P2PK (9fRAWhdxEsTcdb8PhGNrZfwqa65zfkuYHAMmkQLcic1gdLSV5vA)
* 2 - P2SH (25qGdVWg2yyYho8uC1pLtc7KxFn4nEEAwD, 23NL9a8ngN28ovtLiKLgHexcdTKBbUMLhH)
* ? - P2S (7bwdkU5V8, BxKBaHkvrTvLZrDcZjcsxsF7aSsrN73ijeFZXtbj4CXZHHcvBtqSxQ)

In short summary:

* Prefix byte = network type + address type (for example, P2S script on the testnet starts with 0x13 before Base58)
* checksum = blake2b256 (prefix byte || content bytes)
* address = prefix byte || content bytes || checksum

If any of this sparked your interest, you are very welcome to join our community and ask further questions on our [telegram channel](https://t.me/ergoplatform) and/or [forum](https://www.ergoforum.org/). 
See you there!
