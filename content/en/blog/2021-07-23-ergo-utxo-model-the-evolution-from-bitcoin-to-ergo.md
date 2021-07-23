---
title: "Ergo UTXO Model: The Evolution From Bitcoin To Ergo"
date: 2021-07-23T18:02:37.817Z
author: root7Z
authorPhoto: /img/uploads/rootz-the-storyteller-4root7z.png
blogPhoto: /img/uploads/ergoutxo.png
tags:
  - Building Ergo
---
Ergo is built on the UTXO model, a model that Bitcoin first introduced. This is a model where a total of the Unspent Transaction Outputs (immutable and short-lived data bits) are created after each transaction. It is a completely different approach than Ethereum’s long-living mutable Accounts. Ethereum’s Accounts operate on a shared context where every Account needs to be checked - this necessity can cause drawbacks on storage utilization. 



UTXO is used by miners (they are the blockchain validators, or consensus providers) to check if a unique private key has access to certain coins. The privacy and scalability of the UTXO model is attractive, however the genesis design of Bitcoin makes it more difficult to implement smart contracts. The UTXO model has many advantages, yet it is a surprisingly underdeveloped area compared to the smart contract applications on Ethereum’s Accounts model. Ergo’s UTXO model on the other hand, allows [Multi Stage Contracts](https://link.springer.com/chapter/10.1007/978-3-030-31500-9_16) to provide zero knowledge cross-chain operations through the implementation of [NIPoPoWs](https://nipopows.com/). Core developer Alex Chepurnoy has extensive experience with UTXO’s features and PoW security benefits so he focused his research in this area.



The term UTXO indicates the amount of cryptocurrency left unspent after spending some amount of it. In a UTXO based blockchain network, an unspent transaction output is the input for the next spending activity. Therefore after every spending activity, a new UTXO is created which will later be used as input again in new spending activity. So UTXO is used as input and new UTXO is created as output. This is the notion of spendable UTXOs that Bitcoin is based on. However, Ergo’s contribution to UTXO based systems introduces read only UTXOs which enable the formation of UTXO transaction chains.



Robert Kornacki (from [EMURGO research](https://github.com/Emurgo/Emurgo-Research/blob/master/smart-contracts/High%20Level%20Design%20Patterns%20In%20Extended%20UTXO%20Systems.md)):



> “Smart contract enabled UTXO systems have a lot of potential for revolutionizing smart contracts as a whole. …… UTXO-based smart contract protocols utilize spending path oriented design patterns such as linear, branched, recursive, outsourced and parallelized. These set the stage for dApp developer to create reliable and performant smart contracts, with even more high level design patterns yet to be uncovered in the coming future.”



## Bitcoin’s UTXO Model



Even though Bitcoin is the pioneer of decentralized currency, it has some [flaws](https://www.the-blockchain.com/docs/Ethereum_white_paper-a_next_generation_smart_contract_and_decentralized_application_platform-vitalik-buterin.pdf). 



Issues include:

\
Lack of Turing-completeness: Turing-completeness refers to loops in a system through the introduction of “if” statements. It is not difficult to introduce loops, however loops can cause storage inefficiency due to infinite repetition of the underlying code. Bitcoin is made with a simple and secure design. It is constructed to serve as a money transfer system so a non-turing complete system was chosen to avoid infinite loops during transaction verifications.



Value-blindness: One Bitcoin is one Bitcoin, that is to say, there is no way that the Bitcoin network can understand the underlying value of Bitcoin in other denominations. This is an obstacle when trying to bridge traditional and decentralized financial systems in a trustless way, where oracle smart contracts are needed to provide decentralized data feeds. Borrowing, lending and automated market making algorithms all rely on trustable data to function. Even though Bitcoin is the pioneer of cryptocurrencies, it lacks the ability to connect these traditional and decentralized financial systems. 



Lack of state: In Bitcoin, UTXO can either be spent or unspent and it does not support stateful contracts; so creating any other state beyond that, such as withdrawal limits or buy-back orders, is not possible. This means that UTXO can only be used to build simple and one-way contracts. More complex “stateful” contracts such as decentralized organizations, meta-protocols or withdrawal limits can not be implemented. Bitcoin’s binary state and value-blind form would therefore lack the ability to power the future of finance.



Blockchain-blindness: Bitcoin’s UTXO is blind to blockchain data such as the nonce (number only used once, or 2FA codes) and previous [hash](https://www.investopedia.com/terms/h/hash.asp) (a specific value of any transaction in blockchain, which is the value that miners are trying to define). This severely limits applications for gambling, lottery and similar categories where randomness inside of a blockchain is needed.



## Multi-Stage UTXO Model



[Extended UTXO](https://iohk.io/en/research/library/papers/the-extended-utxo-model/) systems enable [Turing complete](https://arxiv.org/abs/1806.10116) smart contracts. This is a novel innovation that allows the latest generation of blockchains to reclaim the original model that Bitcoin used, but with a lot more power.



The Extended UTxO Model (eUTXO) preserves Bitcoin’s structure while adding support for more expressive smart contracts. Ergo has a similar approach to Cardano’s eUTXO with its own Multi-Stage UTXO model that introduces UTXO chains. 



Multi-Stage Contracts provide an extension to Bitcoin’s UTXO model with on-chain computations. Ergo has implemented read-only inputs that allow interaction through only block headers. This improves Ergo's ability to operate on [Level 3](https://www.youtube.com/watch?v=g3FlM_WOwBU&t=2s), enabling non-interactive parallel computations with the use of NIPoPoWs in the UTXO model. 



Ergo’s extended approach to the UTXO ledger model, where read-only inputs and a Turing complete enriched context is implemented, can provide near-infinite scalability with strong privacy and security features. Zero-knowledge applications such as collective spending vaults on Ergo’s UTXO are more efficient than on a shared mutable state like Ethereum’s.