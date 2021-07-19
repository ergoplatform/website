---
title: Decentralized Exchange Contracts on Ergo
date: 2020-07-31T09:46:29.191Z
author: Denys Zadorozhnyi
authorPhoto: /img/uploads/square-small.jpeg
blogPhoto: /img/uploads/pexels-pixabay-210607-1-.jpg
tags:
  - Building Ergo
---
Ergo has expressive smart contracts and transactional model which allows for an implementation of trustless DEX protocol, in which signed buy and sell orders can be put into the blockchain independently by buyers and sellers. An off-chain matching service can observe the Ergo blockchain, find matching orders, and submit the swap transaction without knowing any secrets. The matching can be incentivized by DEX reward paid as part of a swap transaction. Anyone who first discover the match of the two orders can create the swap transaction and get a reward in ERGs. Partial matching is supported, meaning that target (buy/sell) order can be executed partially, in which case a new "residual" order(box) has to be created in the same swap transaction. Any order can be canceled anytime by the "owner".

Sell order contract [source](https://github.com/ergoplatform/ergo-contracts/blob/864bf9ac04916ce9092aa644fe66bcb86d5f4dd0/contracts/src/main/scala/org/ergoplatform/contracts/DexLimitOrder.scala#L193-L310).

Buy order contract [source](https://github.com/ergoplatform/ergo-contracts/blob/864bf9ac04916ce9092aa644fe66bcb86d5f4dd0/contracts/src/main/scala/org/ergoplatform/contracts/DexLimitOrder.scala#L58-L175).

## Partial matching
Both contracts have token price and DEX fee parameters encoded on a compilation. This allows us to check the "residual" order assets, ERGs for a buy order, and tokens for a sell order.


In the buy order contract, we search for a residual box, checking that it has correct parameters and assets.
```java
// in case of partial matching new buy order box should be created with funds that are not matched in this tx
val foundResidualOrderBoxes = OUTPUTS.filter { (b: Box) => 
  val tokenIdParamIsCorrect = b.R4[Coll[Byte]].isDefined && b.R4[Coll[Byte]].get == tokenId 
  val tokenPriceParamIsCorrect = b.R5[Long].isDefined && b.R5[Long].get == tokenPrice
  val dexFeePerTokenParamIsCorrect = b.R6[Long].isDefined && b.R6[Long].get == dexFeePerToken
  val contractParamsAreCorrect = tokenIdParamIsCorrect && 
    tokenPriceParamIsCorrect && dexFeePerTokenParamIsCorrect
  val referenceMe = b.R7[Coll[Byte]].isDefined && b.R7[Coll[Byte]].get == SELF.id 
  val guardedByTheSameContract = b.propositionBytes == SELF.propositionBytes
  contractParamsAreCorrect && referenceMe && guardedByTheSameContract
}
```

[source](https://github.com/ergoplatform/ergo-contracts/blob/e5942fd1971558faa8f9045f3552e9b01fe535e2/contracts/src/main/scala/org/ergoplatform/contracts/DexLimitOrder.scala#L116-L127)

Then, we check that the following properties hold:
- Value (ERGs) of the "residual" order box is the value of the current box(order) minus ERGs value of the tokens we're receiving in this swap transaction and minus the DEX fee for this swap transaction.
- Only one "residual" order box is created in this swap transaction.

```java
// ERGs paid for the bought tokens
val returnTokenValue = returnTokenAmount * tokenPrice
// branch for total matching (all ERGs are spent and correct amount of tokens is bought)
val totalMatching = (SELF.value - expectedDexFee) == returnTokenValue && 
  returnBox.value >= fullSpread
// branch for partial matching, e.g. besides bought tokens we demand a new buy order with ERGs for 
// non-matched part of this order
val partialMatching = {
  val correctResidualOrderBoxValue = (SELF.value - returnTokenValue - expectedDexFee)
  foundResidualOrderBoxes.size == 1 && 
    foundResidualOrderBoxes(0).value == correctResidualOrderBoxValue && 
    returnBox.value >= fullSpread
}
```

[source](https://github.com/ergoplatform/ergo-contracts/blob/e5942fd1971558faa8f9045f3552e9b01fe535e2/contracts/src/main/scala/org/ergoplatform/contracts/DexLimitOrder.scala#L150-L162)

In the sell order contract, we search for a residual box, checking that it has correct parameters and assets.

```java
// in case of partial matching new sell order box should be created with tokens that are not matched in this tx
// check that there is only one such box is made later in the code
val foundResidualOrderBoxes = OUTPUTS.filter { (b: Box) => 
  val tokenIdParamIsCorrect = b.R4[Coll[Byte]].isDefined && b.R4[Coll[Byte]].get == tokenId 
  val tokenPriceParamIsCorrect = b.R5[Long].isDefined && b.R5[Long].get == tokenPrice
  val dexFeePerTokenParamIsCorrect = b.R6[Long].isDefined && b.R6[Long].get == dexFeePerToken
  val contractParamsAreCorrect = tokenIdParamIsCorrect && 
    tokenPriceParamIsCorrect && 
    dexFeePerTokenParamIsCorrect
  val referenceMe = b.R7[Coll[Byte]].isDefined && b.R7[Coll[Byte]].get == SELF.id 
  val guardedByTheSameContract = b.propositionBytes == SELF.propositionBytes
  contractParamsAreCorrect && referenceMe && guardedByTheSameContract
}
```

[source](https://github.com/ergoplatform/ergo-contracts/blob/a2536b613459398836fee6f87baf19edad7b7d3e/contracts/src/main/scala/org/ergoplatform/contracts/DexLimitOrder.scala#L245-L257)

Then, we check that the following properties hold:
- The difference between the token amount in the current box(order) and the "residual" order box determines the amount of ERGs seller receives for the tokens "sold" in this swap transaction (`soldTokenAmount * tokenPrice`).
- Value (ERGs) of the "residual" order box is the value of the current box(order) minus the DEX fee for this swap transaction.
- Only one "residual" order box is created in this swap transaction.

```java
// branch for partial matching, e.g. besides received ERGs we demand a new sell order with tokens for 
// non-matched part of this order
val partialMatching = {
  foundResidualOrderBoxes.size == 1 && {
    val residualOrderBox = foundResidualOrderBoxes(0)
    val residualOrderTokenData = residualOrderBox.tokens(0)
    val residualOrderTokenAmount = residualOrderTokenData._2
    val soldTokenAmount = selfTokenAmount - residualOrderTokenAmount
    val soldTokenErgValue = soldTokenAmount * tokenPrice
    val expectedDexFee = dexFeePerToken * soldTokenAmount

    val residualOrderTokenId = residualOrderTokenData._1
    val tokenIdIsCorrect = residualOrderTokenId == tokenId

    val residualOrderValueIsCorrect = residualOrderBox.value == (SELF.value - expectedDexFee)
    val returnBoxValueIsCorrect = returnBox.value == soldTokenErgValue + fullSpread(soldTokenAmount)
    tokenIdIsCorrect && 
      soldTokenAmount >= 1 && 
      residualOrderValueIsCorrect && 
      returnBoxValueIsCorrect
  }
}
```

[source](https://github.com/ergoplatform/ergo-contracts/blob/a2536b613459398836fee6f87baf19edad7b7d3e/contracts/src/main/scala/org/ergoplatform/contracts/DexLimitOrder.scala#L284-L305)

## Total matching
Both sell and buy orders can be executed in the swap transaction entirely. In this case, there is no requirement for the "residual" order box. 
For this path, we check that the following properties hold.
For sell order:
- ERGs amount seller receives in this swap transaction have to be equal to amount of tokens in the current order times token price.
`val totalMatching = (returnBox.value == selfTokenAmount * tokenPrice + fullSpread(selfTokenAmount))`
[source](https://github.com/ergoplatform/ergo-contracts/blob/a2536b613459398836fee6f87baf19edad7b7d3e/contracts/src/main/scala/org/ergoplatform/contracts/DexLimitOrder.scala#L281-L282)

For buy order:
- Token value (token amount * token price, in ERGs) buyer receives in this swap transaction have to be equal to the value of the current box(order) minus DEX fee.
`val totalMatching = (SELF.value - expectedDexFee) == (returnTokenAmount * tokenPrice) && returnBox.value >= fullSpread`
[source](https://github.com/ergoplatform/ergo-contracts/blob/a2536b613459398836fee6f87baf19edad7b7d3e/contracts/src/main/scala/org/ergoplatform/contracts/DexLimitOrder.scala#L152-L153)

## Bid-Ask spread 
### Counter orders sorting check
The spread is the difference between the buy(bid) order price and sell(ask) order price. We want to make sure that if there is a spread, the "older" order gets it.
For this contract requires the counter orders (spending orders) have to be ordered by spread amount. So that ones with a bigger spread will be "consumed" first.
In buy order contract:
```java
// check if this order should get the spread for a given counter order(height)
val spreadIsMine = { (counterOrderBoxHeight: Int) => 
// greater or equal since only a strict greater gives win in sell order contract
// Denys: we have to decide who gets the spread if height is equal, without any reason I chose buy order
counterOrderBoxHeight >= SELF.creationInfo._1 
}

// check that counter(sell) orders are sorted by spread in INPUTS
// so that the bigger(top) spread will be "consumed" first
val sellOrderBoxesAreSortedBySpread = { (boxes: Coll[Box]) => 
boxes.size > 0 && {
  val alledgedlyTopSpread = if (spreadIsMine(boxes(0).creationInfo._1)) { 
    tokenPrice - boxes(0).R5[Long].getOrElse(0L)
  } else { 0L }
  boxes.fold((alledgedlyTopSpread, true), { (t: (Long, Boolean), box: Box) => 
    val prevSpread = t._1
    val isSorted = t._2
    val boxTokenPrice = box.R5[Long].getOrElse(0L)
    val boxTokenPriceIsCorrect = boxTokenPrice > 0 && boxTokenPrice <= tokenPrice
    val spread = if (spreadIsMine(box.creationInfo._1)) { 
      tokenPrice - boxTokenPrice 
    } else { 0L }
    (spread, isSorted && boxTokenPriceIsCorrect && spread <= prevSpread)
  })._2 
}
}
```

[source](https://github.com/ergoplatform/ergo-contracts/blob/a2536b613459398836fee6f87baf19edad7b7d3e/contracts/src/main/scala/org/ergoplatform/contracts/DexLimitOrder.scala#L78-L103)

We also check the declared token price in the `R5` register of the counter sell orders is in the correct range to prevent exploiting arithmetic overflow and other similar attacks.

In sell order contract:

```java
// check if this order should get the spread for a given counter order(height)
val spreadIsMine = { (counterOrderBoxHeight: Int) => 
// strictly greater since equality gives win in buy order contract
// Denys: we have to decide who gets the spread if height is equal, without any reason I chose buy order
counterOrderBoxHeight > SELF.creationInfo._1 
}

// check that counter(buy) orders are sorted by spread in INPUTS
// so that the bigger(top) spread will be "consumed" first
val buyOrderBoxesAreSortedBySpread = { (boxes: Coll[Box]) => 
boxes.size > 0 && {
  val alledgedlyTopSpread = if (spreadIsMine(boxes(0).creationInfo._1)) { 
    boxes(0).R5[Long].getOrElse(0L) - tokenPrice 
  } else { 0L }
  boxes.fold((alledgedlyTopSpread, true), { (t: (Long, Boolean), box: Box) => 
    val prevSpread = t._1
    val isSorted = t._2
    val boxTokenPrice = box.R5[Long].getOrElse(0L)
    // although buy order's DEX fee is not used here, we check if its positive as a part of sanity check
    val boxDexFeePerToken = box.R6[Long].getOrElse(0L)
    val spread = if (spreadIsMine(box.creationInfo._1)) { boxTokenPrice - tokenPrice } else { 0L }
    (spread, isSorted && boxTokenPrice >= tokenPrice && boxDexFeePerToken > 0L && spread <= prevSpread)
  })._2 
}
}
```

[source](https://github.com/ergoplatform/ergo-contracts/blob/a2536b613459398836fee6f87baf19edad7b7d3e/contracts/src/main/scala/org/ergoplatform/contracts/DexLimitOrder.scala#L205-L229)

We also check the declared token price in the `R5` register, and DEX fee per token in `R6` of the counter buy orders is in the correct range.

### Spread calculation
To check that the current order gets its spread, we need to calculate it first. With counter orders sorted by the spread amount, we start to "consume" them in that order, decreasing the number of tokens left in this match. 
In buy order contract:
```java
// aggregated spread we get from all counter(sell) orders
val fullSpread = {
  spendingSellOrders.fold((returnTokenAmount, 0L), { (t: (Long, Long), sellOrder: Box) => 
    val returnTokensLeft = t._1
    val accumulatedFullSpread = t._2
    val sellOrderTokenPrice = sellOrder.R5[Long].get
    val sellOrderTokenAmount = sellOrder.tokens(0)._2
    val tokenAmountFromThisOrder = min(returnTokensLeft, sellOrderTokenAmount)
    if (spreadIsMine(sellOrder.creationInfo._1)) {
      // spread is ours
      val spreadPerToken = tokenPrice - sellOrderTokenPrice
      val sellOrderSpread = spreadPerToken * tokenAmountFromThisOrder
      (returnTokensLeft - tokenAmountFromThisOrder, accumulatedFullSpread + sellOrderSpread)
    }
    else {
      // spread is not ours
      (returnTokensLeft - tokenAmountFromThisOrder, accumulatedFullSpread)
    }
  })._2
}
```

[source](https://github.com/ergoplatform/ergo-contracts/blob/a2536b613459398836fee6f87baf19edad7b7d3e/contracts/src/main/scala/org/ergoplatform/contracts/DexLimitOrder.scala#L129-L148)

In sell order contract we need to relay on both token price and DEX fee amount to calculate how many tokens are in that buy order. Besides that, since we cannot deduce token amount "sold" in this swap transaction from the return box value we make spread calculation parametrized with concrete token amount that we will know later in the code:

```java
// aggregated spread we get from all counter(buy) orders
val fullSpread = { (tokenAmount: Long) =>
  spendingBuyOrders.fold((tokenAmount, 0L), { (t: (Long, Long), buyOrder: Box) => 
    val returnTokensLeft = t._1
    val accumulatedFullSpread = t._2
    val buyOrderTokenPrice = buyOrder.R5[Long].get
    val buyOrderDexFeePerToken = buyOrder.R6[Long].get
    val buyOrderTokenAmountCapacity = buyOrder.value / (buyOrderTokenPrice + buyOrderDexFeePerToken)
    val tokenAmountInThisOrder = min(returnTokensLeft, buyOrderTokenAmountCapacity)
    if (spreadIsMine(buyOrder.creationInfo._1)) {
      // spread is ours
      val spreadPerToken = buyOrderTokenPrice - tokenPrice
      val buyOrderSpread = spreadPerToken * tokenAmountInThisOrder
      (returnTokensLeft - tokenAmountInThisOrder, accumulatedFullSpread + buyOrderSpread)
    }
    else {
      // spread is not ours
      (returnTokensLeft - tokenAmountInThisOrder, accumulatedFullSpread)
    }
  })._2
}
```

[source](https://github.com/ergoplatform/ergo-contracts/blob/a2536b613459398836fee6f87baf19edad7b7d3e/contracts/src/main/scala/org/ergoplatform/contracts/DexLimitOrder.scala#L259-L279)

### Check received spread
With the spread amount determined, we need to check if the current order is indeed received the spread.
In buy order contract we check that it's included in return box value:
```java
// branch for total matching (all ERGs are spent and correct amount of tokens is bought)
val totalMatching = (SELF.value - expectedDexFee) == returnTokenValue && 
  returnBox.value >= fullSpread
// branch for partial matching, e.g. besides bought tokens we demand a new buy order with ERGs for 
// non-matched part of this order
val partialMatching = {
  val correctResidualOrderBoxValue = (SELF.value - returnTokenValue - expectedDexFee)
  foundResidualOrderBoxes.size == 1 && 
    foundResidualOrderBoxes(0).value == correctResidualOrderBoxValue && 
    returnBox.value >= fullSpread
}
```

[source](https://github.com/ergoplatform/ergo-contracts/blob/a2536b613459398836fee6f87baf19edad7b7d3e/contracts/src/main/scala/org/ergoplatform/contracts/DexLimitOrder.scala#L152-L162)

In the sell order contract, as soon as we know the token amount "sold" in this swap transaction, we check that return box value has the spread included. 
In total matching case we use total token amount in the current order:
```java
// branch for total matching (all tokens are sold and full amount ERGs received)
val totalMatching = (returnBox.value == selfTokenAmount * tokenPrice + fullSpread(selfTokenAmount))
```

[source](https://github.com/ergoplatform/ergo-contracts/blob/a2536b613459398836fee6f87baf19edad7b7d3e/contracts/src/main/scala/org/ergoplatform/contracts/DexLimitOrder.scala#L281-L282)

In partial matching case we know the amount of token "sold" from the residual order( `val soldTokenAmount = selfTokenAmount - residualOrderTokenAmount`) and check that the spread is included in the return box value:
```java
val returnBoxValueIsCorrect = returnBox.value == soldTokenErgValue + fullSpread(soldTokenAmount)
```        

[source](https://github.com/ergoplatform/ergo-contracts/blob/a2536b613459398836fee6f87baf19edad7b7d3e/contracts/src/main/scala/org/ergoplatform/contracts/DexLimitOrder.scala#L299)
