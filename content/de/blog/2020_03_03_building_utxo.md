---
title: "Building Ergo: UTXO vs Account"
date: 2020-03-03
author: "Ergo Team"
authorPhoto: "/img/logotype_black_circle.svg"
blogPhoto: "/img/blog/building_ergo.jpg"
tags: ['Building Ergo', 'Ergo Team']
---

Ergo takes the most secure and best-established features of Bitcoin and implements advanced new cryptographic features on its rock-solid foundations. This series explores the choices we have made in creating Ergo, with the first article unpacking the advantages of the UTXO model.

When you’re dealing with financial value, you cannot afford to take chances. Every architecture decision in a cryptocurrency platform has implications. While there are different ways to solve the same problem, some solutions are better tested and more reliable than others.

Like Bitcoin, Ergo uses the ‘UTXO’ (unspent transaction outputs) model, rather than the Account model used by platforms like Ethereum. There are a number of reasons why we have made this choice, but first it’s worth explaining a little about how the UTXO or ‘Box’ model works.

Most people think that the balance of an account is a simple number that is updated when you send or receive funds. This is the obvious way to approach the problem; after all, it is effectively how money works in the real world. Your bank account has a balance that is increased or decreased when different transfers are made in and out. This is how the ‘Account’ model operates: your balance on the blockchain is altered by transactions to and from the account.

## How much dough?

The UTXO model, pioneered by Bitcoin, is quite different. You can think of this a bit like a person holding a series of lumps of bread dough. Their balance is the sum of these lumps, or UTXOs. Lumps can be divided or combined, before they are sent to a new address, but you always know where they came from. For example:

Alice has 100g of bread dough (100 ERG). She breaks off a lump of 75g and gives it to Bob, keeping 25g of ‘change’ for herself.
Charlie has 250g of dough. He breaks off 150g and gives it to Bob, keeping 100g of change for himself.
Bob breaks 20g of dough off the 150g lump he received from Charlie, and combines the resulting 130g with the 75g he received from Alice. He gives the total of 205g to Dave, keeping the 20g change for himself.
Dave now has 205g of bread dough, which used to belong to Charlie. Before Charlie owned it, 75g used to belong to Alice, while 130g used to belong to Bob.

In the UTXO model, ‘lumps’ of coins can be combined and divided, but unlike bread dough, they aren’t mixed together. You can follow the history of funds right back to the coinbase transaction in which those coins were first mined. That’s very different to the Account model, where the balance of each account is simply changed. (You can, of course, check the blockchain to make sure the Account says what it should, but that’s not intrinsically necessary like it is with the UTXO approach.)

## Why UTXO?

The UXTO model has several implications. For a start, each object is immutable – lumps of coins cannot be ‘edited’ like an Account balance is edited when a transaction is made. The balance is calculated from the transaction history, right back to the point those coins first came into existence. 

That makes security much simpler, because either a UTXO exists in the form you are expecting, or it does not exist at all. With the account model, you need to carefully check that the account you’re dealing with is in the state it should be (and developers typically don’t do that properly). This also makes UTXOs more friendly for offchain protocols, like sidechains and the Lightning Network.

Accounts make it easier to store the ‘state’, but easy doesn’t always mean better. With Ergo’s extended UTXO model, state transitions are more explicit and so they are cleaner – there are no unwanted surprises. It might be a little bit more burdensome to deal with, but it’s a lot better and more straightforward in terms of security.
