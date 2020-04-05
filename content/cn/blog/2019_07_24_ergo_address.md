---
title: "尔格地址"
date: 2019-07-24
draft: false
author: "Robert Wolf"
authorPhoto: "/img/authors/robert_wolf.jpg"
blogPhoto: "/img/blog/address.jpg"
---

在今天的文章中，我们的将对尔格地址的格式化一窥究竟。除此之外，我们将说明他们具体的具体工作原理，以及什么使其优于其他类型的区块链地址。

让我们从头说起。

在你安装任何数字货币钱包的时候，你会自动创建一个地址。简单来说，这个钱包就好比一个传统银行账户，而地址就如同与之相匹配的账号。如果你需要把钱由甲打给乙、收款或者提走你的挖矿奖励，那么你就需要一个字母数字地址[提取你的挖矿奖励](https://ergoplatform.org/cn/blog/2019_07_03_mining_withdrawal/)。 

如果你希望利用尔格钱包启动，并且想深入了解其功能，请双击[以下链接](https://ergoplatform.org/cn/blog/2019_06_04_wallet-documentation/).

那么，到底什么是地址呢？

地址是与某些脚本相对应的短字符串，并且用于保护一个币箱 （在[此](https://www.ergoforum.org/t/ergo-terminology-a-box-and-a-register/32)贴中，核心开发者*kushti* 在我们的论坛中发表文章详细解释了什么是币箱(“box”)。

与（十六进制编码）二进制脚本描述有所不同，尔格地址采用Base58编码，因此拥有一些二进制描述无法提供的非常有用的特性：

* 地址的完整性可以轻易通过一体化校验和进行检查（根据维基百科的解释，其是“出于探测那些在传输与存储期间可能导入错误之目的，从一堆数字资料中得出的小型数据”）。
* 地址的前缀告诉你网络和地址的类型。尤其是网络前缀可以防止你误将主网代币发到测试网的地址。
* 地址使用一个编码（即：上面提到的 Base58），其可以避免长得很像的字符 ，并且方便双击以及在电子邮件中进行换行。
* 地址是编码网络类型、地址类型、校验和以及足以与特定脚本相对应的信息。

让我们看一下含有有关网络和地址类型信息的前缀字节：

可能的网络类型包括：

* 主网 - 0x00
* 测试网 - 0x10

地址类型包括（下述语义学）：

* 0x01 - Pay-to-PublicKey(P2PK) address
* 0x02 - Pay-to-Script-Hash(P2SH)
* 0x03 - Pay-to-Script(P2S)

对于地址类型，我们建立的内容字节如下：

* P2PK – 序列化（压缩）公钥
* P2SH - 序列化脚本字节Blake2b256 哈希的前192个比特 
* P2S – 序列化脚本（这就是挖矿奖励的去处!）

举例来说，将10个尔格币发到P2PK 地址通常意味着对应的交易将包含一个币箱，在这个币箱中用P2PK地址中编码的公钥锁住10个尔格币。与此相类似， 如果是P2S地址，币箱将被地址中编码脚本锁住。如果是最复杂的P2SH脚本，币箱将获得特别预先确定脚本的保护，其将对脚本采用Blake2b256 哈希值前192个比特，在币箱支出时，应当会通过输入值显示。 

以下是特定地址将如何看待测试网的例子：

* 3 - P2PK (3WvsT2Gm4EpsM9Pg18PdY6XyhNNMqXDsvJTbbf6ihLvAmSb7u5RN)
* ? - P2SH (rbcrmKEYduUvADj9Ts3dSVSG27h54pgrq5fPuwB)
* ? - P2S (Ms7smJwLGbUAjuWQ)

以下是他们对我们主网的看法：

* 9 - P2PK (9fRAWhdxEsTcdb8PhGNrZfwqa65zfkuYHAMmkQLcic1gdLSV5vA)
* ? - P2SH (8UApt8czfFVuTgQmMwtsRBZ4nfWquNiSwCWUjMg)
* ? - P2S (4MQyML64GnzMxZgm, BxKBaHkvrTvLZrDcZjcsxsF7aSsrN73ijeFZXtbj4CXZHHcvBtqSxQ)

归纳如下：

* 前缀字节 = 网络类型 + 地址类型 (举例来说，测试网的P2S脚本由Base58之前的0x13开始)
* 校验和 = leftmost_4_bytes (blake2b256 (前缀字节 || 内容字节))
* 地址 = 前缀字节 || 内容字节 || 校验和

如果阁下对其中任何内容感兴趣，非常欢迎阁下加入我们的社区，并且在我们的[电报群](https://t.me/ergoplatform)和/或[论坛](https://t.me/ergoplatform_CH)中咨询更多问题。期待你的加入！
