---
title: "Mining Ergo for Fun and Profit"
date: 2019-12-28
draft: false
author: "Amitabh Saxena"
authorPhoto: "/img/authors/amitabh_saxena.png"
blogPhoto: "/img/blog/mining_for_fun.jpg"
---

# Ergo GPU Mining

This article will help you start mining Ergo using a GPU. 

Ergo mining is based on [Autolykos](https://docs.ergoplatform.com/ErgoPow.pdf), a Proof-of-Work algorithm designed to be ASIC and pool resistant. Miners have to perform memory-hard computations~(at least 4 GB memory is needed, but the current most efficient implementation utilizes between 8 GB of vRAM) that makes Ergo friendly for GPU mining. In addition, Autolykos requires access to **private** keys, thereby preventing mining pool formation. As soon as a correct solution is found, the miner broadcasts the block along with the solution and is able to collect the block reward after a delay of 720 blocks using the secret he used during mining. The rest of the network verifies the solution using the miner's **public** key and this verification can be done very efficiently, requiring less than a kilobyte of memory.

## Prerequisites

In order to mine, you need the following setup:

1. A full node with wallet initialized and fully synced.
2. A computer with a GPU that is recognized by your OS.
3. Ergo mining software for your operating system. Ergo supports both AMD and NVidia GPUs. 

Ergo mining requires a configured and synchronized Ergo node and at least one GPU for mining. You may use multiple GPUs if you wish (to multiply your hashing power) but you only need one Ergo node. 

**Note that Ergo no longer works in Java 8 due to its lack of [strong cryptography](http://mail.openjdk.java.net/pipermail/security-dev/2016-October/014942.html). You must use Java >= 9** 

The links for setting up the mining software are:

* [Nvidia Miner](https://github.com/ergoplatform/cuda-miner)
* [AMD Miner](https://ergoplatform.org/en/blog/2019_08_07_amd/)

**!!!WARNING!!! Since Autolykos utilizes private keys, you should never use untrusted mining software. Check that the software is open-source and validated by the community**

## Sync node and Initialize Wallet

Follow the steps of setting up a node as described in [the tutorial](https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node).

Edit the config file of the node and add the following line.

``ergo.node.mining = true``

Ensure that the wallet is initialized and you are in possession of the correct mnemonic sentence.

Finally, ensure that the node is synced as described [here](https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node#check-if-the-node-is-synced).

## Configure and run the miner

On the computer where the miner will be running, create a file called `config.json` with the following content

```json
{
    "seed": "Attention!!! Replace this with your mnemonic sentence and keep it secret or you will get robbed", 
    "node": "http://192.168.1.100:9053",
    "keepPrehash": false
}
```

where:

- **seed** is the mnemonic sentence from your node's wallet obtained in the previous step.
- **node** is the URL of your node.
- **keepPrehash** is an optimization parameter. If set to `true`, the miner will consume at most 8GB of memory. If set to `false` the miner will consume at most 4GB of memory, but its performance will be for about 25% lower.

Run your miner using the command `./auto.out config.json` (for Linux) or `miner.exe config.json` (for Windows) and enjoy receiving block rewards!

Once you have received any mining rewards, you can view the balance as described [here](https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node#check-wallet-balance) and then withdraw the funds as described [here](https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node#sending-funds).
