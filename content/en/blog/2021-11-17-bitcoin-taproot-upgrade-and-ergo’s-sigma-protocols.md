---
title: Bitcoin Taproot Upgrade and Ergo’s Sigma Protocols
date: 2021-11-17T16:29:53.359Z
author: Ergo Foundation
authorPhoto: /img/uploads/logo.png
blogPhoto: /img/uploads/taproot.png
tags:
  - Building Ergo
---
<!--StartFragment-->

The recent Bitcoin [Taproot Upgrade](https://www.research.arcane.no/blog/what-is-taproot-the-next-bitcoin-upgrade), includes numerous changes that are encouraging many debates. The Taproot Upgrade consists of three Bitcoin Improvement Proposals (BIP): Schnorr Signatures (BIP340), Merkelized Abstract Syntax Tree (MAST-BIP341) and Tapscript (BIP342). With this upgrade, Bitcoin will allow higher scalability, privacy and a flexible smart contract design. 



Ergo has also based its design on [Sigma Protocols](https://ergoplatform.org/en/blog/2020_03_16_ergo_sigma/), otherwise known as Generalized Schnorr Proofs. Ergo launched with scalability and privacy designs like NIPoPoWs that were similarly envisioned for Bitcoin. Additionally, Ergo leverages the power of the extended UTXO model and the longstanding security of Proof of Work.



BIP340 brings the Schnorr Signature scheme, which has been debated among Bitcoin developers since 2018. Schnorr Signatures are considered to have a high level of security while maintaining a fast verification process. Schnorr Signatures make complex transactions look like regular transactions, thereby making various transactions hard to distinguish.



BIP341 implements a Merklelized Abstract Syntax Tree ([MAST](https://bitcoinops.org/en/topics/mast/)) which allows one to compile a bunch of hashes under a single hash. This structure allows the spender to choose some conditions to fulfil and the other conditions will not be revealed. MAST allows the verification process to happen more simply, increasing expressiveness and privacy without weakening security.



Bitcoin’s previous pay to script hash (P2SH) design was limited in smart contract privacy. When using a multi-sig contract, the contract script was revealed after a transaction. This would reveal information about the users while simultaneously adding bloat to the blockchain. The newly implemented MAST design allows hiding this extra information embedded in the contract. With Schnorr proofs, Taproot can even hide evidence that the MAST structure existed at all.



BIP 342 [Tapscript](https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki#cite_note-9) updates the Bitcoin Script, implementing the Schnorr and MAST upgrades mentioned previously. Tapscript also removes the 10,000 bytes script size and the number of opcode limits, thereby improves signature hashing and enables more expressive scripts. 



The addition of BIP340 and zero-knowledge proofs for Bitcoin enables interoperability between Ergo and Bitcoin, allowing for private cross-chain atomic swaps and potentially sidechaining in the future. 

While Ergo is not exclusively a privacy blockchain, it’s Sigma Protocols allow zero-knowledge privacy applications which use Schnorr Signatures to provide verification. This allows Layer 2 applications such as Non-Interactive Proofs of Proof of Work ([NIPoPoWs](https://nipopows.com/)) and side-chains to operate anonymously on Ergo. 



Ergo’s language, ErgoScript, already includes what is envisioned for Bitcoin - it employs a similar structure but with different techniques by implementing a more expressive smart contract language with UTXO and PoW elements, Ergo aims to be the platform for secure, complex, scalable and private decentralized finance applications. Bitcoin can leverage Ergo’s safety with its interoperable DeFi capabilities



<!--EndFragment-->