---
title: New Ergo Smart DEX Orders with buyback guarantees
date: 2020-12-02T18:43:08.520Z
author: Guy Brandon
authorPhoto: /img/uploads/guy_brandon.jpg
blogPhoto: /img/uploads/nik-shuliahin-jozv_pakcmk-unsplash.jpg
tags:
  - Building Ergo
---
<!--StartFragment-->

*The novel smart contract will trustlessly enable users to participate in token sales without the downside risks of regular ICOs.*

2020 is shaping up to look at a lot like 2016 for crypto – suggesting that 2021 could be another 2017.

But while 2017’s epic crypto bull run was partially driven by the massive ICO hype, 2020’s has not been – and any continuing rally in 2021 will likewise not rely on these token sales.

Aside from the regulatory clamp downs, there’s another reason why ICOs fell from favour. Investors found that in many cases, their tokens failed to perform as they had hoped. Even discounting the ICOs that turned out to be outright scams, there were many where the price of the token fell dramatically – losing even more value than the wider market through 2018, where 90-95% drawdowns were common.

**Buyer protections**

Much of the reluctance of potential investors could be overcome with some simple protections. Here, we are not talking about regulatory protections, for all that they have become a part of the space. Investors are also looking for guaranteed financial protections. 

Ergo’s new [Smart DEX Orders](https://www.ergoforum.org/t/dex-orders-with-buyback-guarantee-smart-order-based-dexes/486) provide that, ensuring a floor beyond which token prices cannot fall. 

In a typical ICO, the token buyer provides funds to the seller, which can be used immediately. Ostensibly these give the seller the ability to develop the product or service, but in many cases the funds are wasted or mis-spent. By the time the investor realises the developer is not capable of delivering the promised outcome, it’s too late.

Ergo Platform offers an alternative. Buyback orders can be encoded in the token sale, meaning that:

1. Funds are released to the developer more slowly
2. Buyers are able to exit their investment at a limited loss if they are unhappy with its performance

**Example token sale**

Let’s say that Alice is looking to raise money for a new DeFi project. She places 1 million tokens for sale on ErgoDEX at 1 ERG each, and all of the tokens are sold. But unlike conventional ICOs, these are not simple, unconditional sales. 

Within each sell order is encoded the conditions for subsequent token buybacks:

* For the first 64,000 blocks (around 3 months), 80% of the initial token price will be locked on the DEX, enabling token holders to regain this value by selling their stake. Alice has access to the remaining 20%, or 200,000 ERG, to fund development. 
* After this time, up to another 200,000 ERG are released to Alice, depending on how many investors have sold their tokens into the bid wall. For the next 64,000 blocks, up to 600,000 ERG (60% or the original funds raised) are reserved for buybacks.
* Every 64,000 blocks, another tranche of ERG are released to Alice, with the remainder staying locked for buybacks.

It is possible to encode any conditions in the sales. This example offers a ‘bonding curve’ whereby investors are able to exit at any time, but the longer they wait, the less of the original stake they can recover. 

This is a variation on some projects’ promises to provide a buy wall for investors who get cold feet. The difference is that firstly, it is trustless, and secondly, far more sophisticated conditions can be written into the smart contract to offer an outcome that is both fair to investors and provides predictable ongoing funding for the DeFi project.

To find out more, [check out Ergo Forum](https://www.ergoforum.org/t/dex-orders-with-buyback-guarantee-smart-order-based-dexes/486).

<!--EndFragment-->