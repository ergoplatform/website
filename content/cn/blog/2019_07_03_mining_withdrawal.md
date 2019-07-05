---
title: "尔格提取"
date: 2019-07-03
draft: false
author: "Alex Chepurnoy"
authorPhoto: "/img/authors/alex_chepurnoy.svg"
blogPhoto: "/img/blog/withdrawal.jpg"
---

## 花掉挖矿报酬

本文帮助矿工提取所挖到的资金。

许多人既发布节点，又担任拥有从内嵌于节点格式化矿机获得16进制公钥（`pubkeyHex`）的矿工。下面我来谈一谈如何认定所挖尔格币的数量以及如何将其提取到另一个地址。

## 关于密钥.

矿工可能遇到很多不同形式的密钥。

首先，挖矿软件以及节点中的采矿支持（即：格式化文件中的 `ergo.node.miningPubKeyHex` 设定） 正在采用16进制编码（`Base16-encoded`）“原”公钥，其仅为椭圆曲线中的一个编码序列点。该密钥对矿工来说已经足够用（其可能避免支持58进制的需要，地址构成的需要等）。

其次，节点钱包显示公钥付费（P2PK）地址，该地址以“9”开始。P2PK地址不仅包含椭圆曲线点，而且还包含网络前缀和校验和（`checksum`）， 类似于比特币的P2PK和P2PKH地址。

第三，还有`minig/rewardAddress` API方法，其主要是针对外部工具所产生的候选区块。此种API方法看起来有点像`88dhgzEuTXaSfKEbxfa6vghvEGdBH39sn9h7As2Y2Z6SGd8bKXCXmRLY5JtU4g4RYBP4WcZWb3JwjXDK`，其是以编码形式支付给矿工的特殊文字。

无论如何，如果你想把你矿机的16进制公钥（`pubkeyHex`）植入你的节点，完全没有问题，不用担心看到不同的密钥。

## 显示你的余额以及提款

如果你先挖出来尔格币然后才进行钱包初始化，因为你进行钱包初始化的区块高度比挖币的时候要高，那么或许你看不到你挖的尔格币。请注意：节点不会对区块进行反向扫描，在初始化后，其只扫描新的区块。因此，为了找到所开采的尔格币，目前需要对整个区块链进行重新扫描（或者，如果你开采，在另一台机器上发布另一个节点，或者在格式化文件中拥有不同端口设置的同一台机器上，即，给`scorex.restApi.bindAddress` 和`scorex.network.bindAddress`的域设定新的值； 另外请使用3.0.1版本，主要是因为其更便于格式化）。

## 为了把挖矿报酬花掉，你需要按照以下步骤进行操作：

### 1. 清除节点状态，如果你打算叫停工作节点。

为了清除你的节点的状态，你需要叫停节点，并且删除`.ergo` 目录下的全部内容（其可能藏在Mac和Linux你看不到的地方，尝试目录中的 `ls -a` 命令，你可以从此路径运行节点）。

### 2.从奥托吕克斯矿机使用的种子短语中恢复本地钱包

在你格式化你的奥托吕克斯矿机时，请记住你在`config.json` 设定的助记符句子 - 目前你需要从那儿恢复内置钱包。为了恢复你的钱包，再次启动节点，并且将POST请求发送给含有诸如

```scala
{
  "pass": "your_wallet_pass",
  "mnemonic": "mnemonic_sentense_from_your_miner",
  "mnemonicPass": "mnemonic_pass_if_set"
}
```

`application/json` 内容类型体的`http://[your_node_ip]:9053/wallet/restore`，

如果 `pass` 是一个将用于你本地盘加密钱包数据的一把新的特殊钥匙， 并且 `mnemonic` 是一个你可以从奥托吕克斯矿机格式化文件(config.json)复制的助记符短语。请特别注意 `mnemonicPass` 的域 – 这是你的助记符短语口令，其为可选项，并且你在创造你的助记符的时候可能已经对其进行格式化。只有当你的助记符真地需要钥匙，那么就在请求中增加此域，否则就删除此域。

不要忘记授权你的请求，设定对应 `apiKeyHash`正确的`api_key` HTTP 头字段， 在节点格式化文件中进行格式化。

注意：为了让钱包扫描来自创世的全部区块，你需要在你的节点已经开始下载全部区块前恢复钱包（请在`/info` API方法回应核对`fullHeight`  - 尽管其是 `null` 你的节点尚未开始下载全部区块）。

### 3. 查询你的余额

当你的节点与网络实现同步的时候，请核对 `/wallet/balances` API方法。反馈应当类似于：

```scala
{
  "height": 3560,
  "balance": 67500000000,
  "assets": {}
}
```
首先注意 `height` 域 – 其应等于通过 `/info` API路径的 `fullHeight` 显示值。`balance` 是你钱包所发现的一个确认余额。

### 4. 通过交易花掉你的报酬

为了从你的钱包中提走报酬，利用 `/wallet/payment/send` API路径创建一笔新的支付交易。为了进行这一操作，发送诸如

```scala
{
  "address": "your_address",
  "value": 10000000
}
```

含有 `application/json` 内容类型体的POST请求， 如果 `address` 是你希望把你资金移去的地址并且 `value` 是你希望移走多少十亿分之一ERGs。

在发送请求的时候，节点会回复交易ID作为回应。你可以利用 [explorer](https://explorer.ergoplatform.com) 查询你的交易何时到达区块。
