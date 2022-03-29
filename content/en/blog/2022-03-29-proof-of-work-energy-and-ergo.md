---
title: Proof of Work, Energy and Ergo
date: 2022-03-29T15:53:03.342Z
author: "Ergo Platform "
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/news-blog-50.png
tags:
  - Building Ergo
---
# Introduction

Proof of Work (PoW) was described in the original Bitcoin [white paper](https://bitcoin.org/bitcoin.pdf) as having two parts. The first part is digital signatures. The second part is a peer-to-peer network [hashing](https://en.wikipedia.org/wiki/Hash_function) transaction timestamps onto an immutable blockchain.

Security is a feature of computing power and chain length. The Bitcoin white paper describes it this way: “The longest chain not only serves as proof of the sequence of events witnessed, but proof that it came from the largest pool of CPU power.” The size of the mining pool and the work done secures the blockchain from double spending.

Bitcoin’s market capitalization passed $1 billion on March 27, 2013 and has since passed $1 trillion on February 19, 2021. With more value, security concerns increase. As a result, computing power and electricity usage increase to secure the blockchain. How much energy is that?

# Bitcoin’s Energy Consumption

The [Cambridge Bitcoin Electricity Consumption Index](https://ccaf.io/cbeci/index) tracks Bitcoin's electricity use. From launch to February 2022, Bitcoin used 320.34 terawatt hours (TWh) of electricity. When considering electricity prices for various [regions](https://www.statista.com/statistics/263492/electricity-prices-in-selected-countries/), mining operational costs can vary greatly. A kilowatt per hour (kWh) ranges from $0.03 in Qatar to $0.37 in Germany. 

Using the numbers above, Bitcoin's electricity expense is between $30 million to $370 million per TWh. Total electricity expense has been between $10.8 to $118.5 billion in electricity expense. Bitcoin miners tend to operate in places with less expensive electricity. For example, a remote location with plentiful hydroelectric power is a good location for Bitcoin mining. So, kWh electricity prices are likely closer to the lower end of the range.

In 2021, Bitcoin consumed 86.36 TWh of electricity. As a consequence, the cost to secure the Bitcoin blockchain for the year was between $2.6 billion and $136.9 billion. To understand the size of this amount of electricity, it helps to compare it to something similar.

The United States makes over [4,000 billion kilowatt hours (BkWh) of electricity](https://www.eia.gov/totalenergy/data/monthly/pdf/sec7.pdf) every year. A TWh is the same as BkWh, so consider [this fact](https://www.eia.gov/tools/faqs/faq.php?id=99&t=3) from the U.S. Energy Information Administration: 

> “The commercial sector, which includes commercial and institutional buildings, and public street and highway lighting, consumed about 152 billion kWh for lighting in 2021, equal to about 11% of total commercial sector electricity consumption and about 4% of total U.S. electricity consumption in 2021.”

Is the electricity used to light public streets and highways in the United States wasted? Street lights reduce the risk of traffic accidents and crime. But, urban residents are [more willing to pay](https://journals.sagepub.com/doi/10.1080/00420980500332106) for street lights than rural residents. 

The reason is clear. Places with lower population density have fewer traffic accidents and crime. There is much less need for street lights in rural areas.

There is a similar, but opposing, dynamic in play with cryptocurrencies. If a community already has street lights, any changes to these lights must be to something better.

# Advantages of Blockchains

Some even go as far to say that Bitcoin is worse. It has no value. Yet, Bitcoin has a trillion dollar market capitalization, and Bitcoin users pay transaction fees to use the blockchain. For Bitcoin's users, it has value.

On some metrics, Bitcoin is better than existing systems. Bitcoin transaction confirmations settle in twenty minutes. Automated Clearing House ([ACH](https://www.investopedia.com/ach-transfers-what-are-they-and-how-do-they-work-4590120)) transactions are electronic, bank-to-bank money transfers that take five days. What is the electricity cost of ACH transfers? If we account for the mainframes, ATMs, websites, etc., are banks more energy efficient? Could the argument be made that it is worth it to use more electricity for faster transaction times? It is difficult to make a direct comparison, but it is plausible to assert that Bitcoin is less expensive, as well as a better option.

Blockchains also bring new capabilities. With smart contracts, it is possible to automate parts of the world’s economy.  Are these innovations worth the electricity and other expenses of mining Bitcoin and other PoW blockchains?

# Energy Efficiency

An important discussion around proof of work blockchains deals with efficiency. Can the benefits of blockchain technology be leveraged without paying as high of an energy cost?

Bitcoin launched in 2009 as a proof of concept. Cryptocurrencies work, but we need to understand them better. Although research is ongoing and people have discovered new consensus mechanisms, algorithms and other blockchain designs, it is still an emerging industry. The best uses and limitations of these new capabilities are not yet fully realized.  

For example, Proof of Stake (PoS) is a consensus mechanism first implemented in 2012 in [Peercoin](https://en.wikipedia.org/wiki/Peercoin). PoS requires ownership of the blockchain’s currency to incentivize securing the blockchain. PoS has a much lower energy footprint than PoW but is it as secure as PoW? The answer is unknown and only time will tell. An argument can be made that PoW is more secure because the TWh’s of work that has been performed provides a security guarantee that PoS does not have.

Some people believe that PoS can replace PoW, but the reality is that different ways of doing things have different trade-offs. PoS and PoW are not the same and one is not a drop-in replacement for the other. 

There are smart contracts that might need PoW's features. For others, the speed of PoS might be a better fit. There is no one right way of doing things - different problems require different solutions.

# Ergo’s Capabilities

Every blockchain has unique characteristics that result from different design choices. On Ergo, significant design decisions include:

* [Sigma Protocols](https://docs.ergoplatform.com/dev/scs/#sigma-protocols): Efficient and composable proof-of-knowledge protocols that are necessary to create some kinds of dApps.
* [Autolykos](https://ergoplatform.org/docs/ErgoPow.pdf): PoW algorithm with efficient use of electricity. It is [ASIC resistant](https://safex.org/asic-resistant-cryptocurrencies-the-key-to-decentralization/), which improves mining decentralization.\[1]
* [eUTXO](https://docs.ergoplatform.com/dev/protocol/eutxo/): Extended unspent transaction output eliminates the need to maintain blockchain state. It also allows for transaction [cost predictability](https://ergoplatform.org/en/blog/2022-02-09-ergos-hybrid-method-for-counting-costs/).
* [Non-Interactive Proofs of Proof-of-Work (NIPoPoW)](https://nipopows.com/): An index to a PoW blockchain that can quickly verify individual transactions. It supports light clients and some sidechain implementations.
* [Storage Rent](https://ergoplatform.org/en/blog/2022-02-18-ergo-explainer-storage-rent/): Keeps coins in circulation, reduces the size of the chain and incentivizes miners by charging a small fee for storage every four years.

Ergo is a PoW blockchain designed to be more energy efficient than Bitcoin. But, how much efficiency is enough? Some features, like the eUTXO model, can work with a variety of consensus mechanisms, including PoW and PoS. 

Yet, other features are unique to PoW. To what degree should energy efficiency be a secondary consideration? Should features like NIPoPoWs, storage rent, etc., be dismissed because energy costs are the most important consideration? Every design decision has to consider the costs and benefits of implementation. One’s assessment will depend on what one values.

# Conclusion

Blockchain technologies are going to revolutionize supply chain management, identity verification, and many other areas of modern life. It is a new computing paradigm with an importance rivaling the rise of the global Internet. Like the Internet, it will evolve in ways we currently cannot imagine.

Bitcoin has a role to play in the cryptocurrency ecosystem in the coming decades. However, an even more energy efficient PoW blockchain, such as Ergo (that has many additional capabilities), may find the right balance of energy usage and functionality that can make PoW more efficient, provide additional features and get beyond some of the limitations of Bitcoin.

Every solution requires a careful consideration of its costs, benefits and risks. Blockchains are a big tent. There’s room for everyone. However, PoW NIPoPows and chain-specific features like Ergo’s storage rent offers unique functionality that is worth the extra energy expenditure for some blockchain uses.