---
title: ErgoHack Day One
date: 2021-06-12T11:39:47.009Z
author: Curia Regis Crypto
authorPhoto: /img/uploads/1_70ukrjwixwgrxoxbgdl3fq.jpeg
blogPhoto: /img/uploads/2021-06-04-17.01.28.jpg
tags:
  - Building Ergo
---
<!--StartFragment-->

# Hacking the Ergosphere for Sigma & Alpha

ErgoHack, the Ergo Environment’s first ever hackathon has had its kickstart with day one drawing to a close. So far within the event, we have seen a multitude of teams become out of speculators – Team Shrimp, SmartPools, Raffle, Notarize, and Chanviz, being some of the visible competitors. Undoubtedly, I think it's fair to say that, based on the discussions on the Discord, we are in for a treat come this Sunday.

Commencing the development marathon, we had the [familiar face](https://www.youtube.com/watch?v=rHp94cmhEtE) of Kushti laying out the basics of [interacting](https://youtu.be/d6Mf-oxaLIc) with Ergo itself, with a demonstration of using Ergo & exercising other common practices integral to an Ergo craftsman’s tool belt: Kushti gave the pleasure of showing us the workings of swagger, the lingo of ErgoScript, and how to glue all of this together via testing in [ES playground](https://wallet.plutomonkey.com/p2s/?source=ewogIHZhbCBuZXdTZWxmID0gT1VUUFVUUygwKQogIHZhbCBib2JPdXQgPSBPVVRQVVRTKDEpCiAKICB2YWwgYm9iTmFub0VyZ3MgPSBib2JPdXQudmFsdWUKICB2YWwgdmFsaWRCb2JCb3ggPSBib2JPdXQucHJvcG9zaXRpb25CeXRlcyA9PSBQSygiOWlIV2NZWVNQa2dZYm5DNmFIZlpjTFpyS3Jya3BGek0yRVRVWjJpa0ZxRndWQUIyQ1U3IikucHJvcEJ5dGVzCiAKICB2YWwgc2VsZlRva2VuSUQgPSBTRUxGLnRva2VucygwKS5fMQogIHZhbCBzZWxmVG9rZW5BbXQgPSBTRUxGLnRva2VucygwKS5fMgogCiAgdmFsIG5ld1NlbGZUb2tlbklEID0gbmV3U2VsZi50b2tlbnMoMCkuXzEKICB2YWwgbmV3U2VsZlRva2VuQW10ID0gbmV3U2VsZi50b2tlbnMoMCkuXzIKICB2YWwgdmFsaWRUb2tlbklEID0gc2VsZlRva2VuSUQgPT0gbmV3U2VsZlRva2VuSUQKICB2YWwgdmFsaWRQcm9wID0gbmV3U2VsZi5wcm9wb3NpdGlvbkJ5dGVzID09IFNFTEYucHJvcG9zaXRpb25CeXRlcwogCiAgdmFsIHRva2VuRGlmZiA9IHNlbGZUb2tlbkFtdCAtIG5ld1NlbGZUb2tlbkFtdAogIHZhbCB2YWxpZE5ld1NlbGYgPSB2YWxpZFRva2VuSUQgJiYgdmFsaWRQcm9wCiAKCiAgdmFsIHJhdGVCb3ggPSBDT05URVhULmRhdGFJbnB1dHMoMCkKICB2YWwgcmF0ZSA9IHJhdGVCb3guUjRbTG9uZ10uZ2V0CiAgdmFsIHZhbGlkUmF0ZUJveCA9IHJhdGVCb3gudG9rZW5zKDApLl8xID09IGZyb21CYXNlNTgoIjc4TVQxTkdIZGlZeVE5WTJjdjM5QXJqeENIV3hDTkc3YkVnOWdrUEd0MXZwIikKIAogIC8vIHJhdGUgZ2l2ZXMgbmFub0VyZ3MgcGVyIFVTRENlbnQKICAvLyBUaHVzLCBib2JOYW5vRXJncyBOYW5vRXJncyB3aWxsIGNvc3QgYm9iTmFub0VyZ3MgLyByYXRlIHVzZCBjZW50cwogCiAgdmFsIHVzZENEaWZmID0gYm9iTmFub0VyZ3MgLyByYXRlCiAKICB0b2tlbkRpZmYgPD0gdXNkQ0RpZmYgJiYgdmFsaWRSYXRlQm94ICYmIHZhbGlkTmV3U2VsZiAmJiB2YWxpZEJvYkJveAogfQ==).

## Hitting The Nail on The Head

Even after a day, ErgoHack’s quintuplets had already learned to run & have a strong idea of what they’re aiming for.

Team SmartPools is diving into [Ergo’s Oracle solution](https://ergoplatform.org/en/blog/2020-08-31-ergos-oracle-pools-and-what-they-mean-for-the-ecosystem/) in a quest for building smart contracts that seek to gather collateral with current fundraising functionality, determining the hashing weight of the pools for each other and the network. This idea is lucrative in the redistributing of a defined excess in rewards for the fundraising contracts of similar pools.

Competitor Shrimp, also an already adept party evidenced from their [shrimp-pegged stablecoin](https://twitter.com/SHMPCoin) project, is taking a different route within this gauntlet with the vision of delivering an informational themed -pedagog- game which is making use of inspiration taken from the [Zachtronics](https://en.wikipedia.org/wiki/Zachtronics) game studio; Shrimp’s ideas are a first in the realms of [eUTxO architecture](https://iohk.io/en/research/library/papers/the-extended-utxo-model/).

Opponent Raffle is looking into developing an X/Y lottery, an application that taps into the same functionality as SmartPools regarding decentralized fundraising. Dissimilar to SmartPools, however, Raffle wishes for the gains from their solution to be split among both the winner of the lottery, as well as a selected charity.

Participant Notarize is notably pursuing an attempt to expand Ergo’s infrastructure with data [notarization](https://www.forbes.com/sites/forbestechcouncil/2019/11/12/a-blockchain-based-digital-notary-what-you-need-to-know/?sh=267377e94557) tooling. Completing this task will provide other decentralized systems the ability to garner security through Ergo’s robust environment, a gift for a small project seeking the talent in Proof-of-Work while skipping the initial obstacle of gaining stability.

Team Chanviz has ventured into the landscape of visualization by providing a web interface for charting. Proclaiming the need for their efforts, they seek to enable blockchain analysis on Ergo along with tools that assist in trading & finance - the birth of a perfect partner for [ErgoDex](https://ergodex.io/), maybe?

## Peeking Beneath The Surface

Reminiscing over these teams’ intentions builds suspense, and as expected curiosity is naturally drawn to our conscious. With day two underway, the clock is ticking and time is of the essence before the closing bell is rung.

Even with all of these uncertainties, there is one quality of the event that is drawing attention: heat for the $sigUSD prize pot is currently volcanic. Furthermore, with the secrecy that is entailing these Ergonauts’ endeavors, could one of the teams be El Salvador themselves?

I do not know about you, but I cannot wait to see what comes out of these magicians’ hats over the next three days.

**Stay well Ergonauts!**

<!--EndFragment-->