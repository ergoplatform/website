---
title: "Building Ergo: Oracles"
date: 2020-04-23
author: "Guy Brandon"
authorPhoto: "/img/authors/guy_brandon.jpg"
blogPhoto: "/img/blog/network.jpg"
tags: ['Building Ergo']
---

__Blockchains are siloed systems that can only reference their own data, established by consensus. Oracles are the solution to the problem of working with external information, which is vital for many everyday use cases.__

Blockchains are intentionally self-contained. They reference information only recorded within their immediate ecosystem, that has been agreed upon by a majority of miners. Since the whole point of a blockchain, based on consensus, is that there are no sources of centralisation or single points of failure, that poses a problem.

What happens when you want to engage with external information? Many blockchain-based applications need to process data from the real world. That might be financial information, such as market data and prices from exchanges, for DeFi applications; it could be sporting results, for eSports predictions markets; it could even be [atmospheric noise information, for random number generators](https://www.random.org/).

## Introducing Oracles

Oracles are the software that serves as a link between these real-world sources of data and the siloed world of the blockchain. They are simple in principle, since they only need to create a series of transactions with the necessary data (ideally formatted in an easily-accessible way) at regular intervals. 

However, while anyone can record information to an open blockchain, that is a source of centralisation. So how do you trust an oracle?

The answer is: you don’t. Just like the blockchain’s consensus method itself, you need multiple oracles pulling data from multiple sources, then coming to agreement about the value to record to the blockchain. So you don’t need to trust an individual miner, and you don’t need to trust an individual oracle.

## Example: bitcoin price data

As an example, let’s say we want to record bitcoin’s closing price every day to the Ergo blockchain, to give us a long-term and reliable source of price data.

We could take a dozen – or even a hundred – different data feeds, each pulling data from a major exchange. Coinbase, Bitstamp, Kraken, and so on. We make sure that many exchanges are represented, and while it’s good to have several examples of data from the same exchange, we don’t want any exchange over-represented.

Then the parties need to reach consensus about the price. Let’s say there are 100 parties and prices involved. There are different ways they could do that:

* Take the mean of all the prices they provide
* Discard the highest and lowest 20 prices, and take the mean of the remaining 60 prices
* Select the median price
* Weight the prices, with the central cluster of prices having greater weight, and take the mean

The aim is to discard or downweight any outliers, which could be due to extreme price fluctuations on a single exchange, API outages, or dishonest oracle data providers, while retaining many good data points to ensure a single reliable record of price.

Oracles are a hugely important part of the blockchain ecosystem. Once you have robust oracles in place, you can create all kinds of DeFi applications – including stablecoins, which are a vital part of the blockchain economy, and one we’ll be exploring on Ergo in the coming months.
