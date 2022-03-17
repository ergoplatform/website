---
title: Mining Ergo on Windows
date: 2022-03-17T16:42:03.324Z
author: Ergo Platform
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/news-blog-47.png
tags:
  - Building Ergo
---
Mining Ergo as part of a mining pool is easy, particularly on Windows. It is possible to start mining Ergo on a computer with a GPU video card in less than 5 minutes.

# What Does Mining a Cryptocurrency Mean?

Mining is the engine that drives the Ergo blockchain. Ergo uses the [Autolykos](https://ergoplatform.org/docs/ErgoPow.pdf) v.2 algorithm to create a puzzle lottery, and computers with GPU cards are used to solve the puzzle. On average, a miner or mining pool wins the puzzle lottery every two minutes. The winning miners then put together a block of transactions to submit to the blockchain in return for a reward.

## Equipment

You will need the following to mine Ergo:

* a GPU video card with a minimum of 4GB of RAM (ideally more if within your budget)
* [mining software](https://ergoplatform.org/en/mining/) compatible with your card, such as [T-Rex](https://trex-miner.com/) (Nvidia) or [RedTeamMiner](https://www.teamredminer.com/) (AMD)
* [an Ergo wallet](https://ergoplatform.org/en/wallets/) (such as [Nautilus](https://ergoplatform.org/en/blog/2022-03-10-storing-crypto-on-ergo-nautilus-wallet/))

## Costs of Mining

Initially, there are the costs of buying a computer with a graphics card or mining rig. If you would like to research and compare various GPU’s, there are sites that can tell you which video cards are [best for mining Ergo.](https://woolypooly.com/en/coin/erg) You can also determine how long it will take you to get a return on your investment by accessing [profit calculators](https://www.whattomine.com/coins/340-erg-autolykos) that factor in the cost of electricity for your area.

Both mining software and mining pools charge a fee for using mining software (typically 1-2% of your hashrate) and for joining a pool (1%). When choosing a pool, it is better for the security of the Ergo blockchain if you mine in a smaller pool with less hashrate than the largest pool. For example, there is a known vulnerability where if one mining pool gets 51% (or more) of the network’s hashrate, it could compromise the security of the blockchain. Spreading the hashrate to smaller pools reduces that scenario.

## Setting-up

Suppose you want to mine on a computer with a GPU card appropriate for Ergo, running Microsoft Windows and wish to join the [GetBlok.io](https://ergo.getblok.io/) mining pool.  

Download [mining software](https://ergoplatform.org/en/mining/) compatible with your card, such as [T-Rex](https://trex-miner.com/) (Nvidia) or [RedTeamMiner](https://www.teamredminer.com/) (AMD). Extract the mining software file in your Download directory. Open a text editor, and type in (or copy & paste) the following:

`setx GPU_FORCE_64BIT_PTR 0`

`setx GPU_MAX_HEAP_SIZE 100`

`setx GPU_USE_SYNC_OBJECTS 1`

`setx GPU_MAX_ALLOC_PERCENT 100`

`setx GPU_SINGLE_ALLOC_PERCENT 100`

`C:\Users\your_username\path\to\mining\file\t-rex.exe -a autolykos2 -o stratum+ssl://ergo.getblok.io:4056 -u <YourErgoAddress>.<AnyNameYouWantToIdentifyTheComputer>`

For clarity, the last part should look the following if you are user nobody on Windows, your Ergo address is *9g1p6UU8XoAeU4yGPLpbTHYiG8aBHwfCFzQqJZrfzuLnmF3zb7P* and your machine name is *bubba*:

`C:\Users\nobody\Downloads\t-rex-0.25.8-win\t-rex.exe -a autolykos2 -o stratum+ssl://ergo.getblok.io:4056 -u 9g1p6UU8XoAeU4yGPLpbTHYiG8aBHwfCFzQqJZrfzuLnmF3zb7P.bubba`

You can find your Ergo address by going to the Receive tab in your Ergo wallet. You can then go to the [how to connect](https://www.getblok.io/how-to-connect/) page on the [GetBlok.io](https://www.getblok.io/) website, put in the relevant information this page asks for and it will provide the above information for you. Other mining pools will have a similar format, just this section changes to the relevant protocol, pool and port:

`stratum+ssl://ergo.getblok.io:4056`

When finished, save the file as ERGO_mining.bat. To start mining, simply click on the file.

**Note:** If you have a virus protection program like McAfee, you will need to restore the t-rex.exe file after extraction and exclude it from Real-Time Scanning in order to run it. 

If you want the mining software to start when you reboot your computer, then, save **ERGO_mining.bat** in `C:\Users\Username\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup`. If you have trouble finding the Startup folder, you can always save ERGO_mining.bat somewhere, type the Windows **key + R** to get the shell prompt, then type:

`shell:startup `

This will bring up the Startup folder, and you can drag and drop the Ergo_mining.bat file into it.

That’s it! You are now ready to mine Ergo on your computer. Whether you have a mining rig with multiple GPU’s or a single GPU computer, you can easily access the Ergo mining protocol and enjoy passive income from mining rewards while helping to secure the network. If you have equipment specific questions or want to access some of the mining community resources, please visit the [Ergo Mining Telegram](https://t.me/ergo_mining) channel.