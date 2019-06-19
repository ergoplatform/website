---
title: "钱包文件汇编"
date: 2019-06-04
draft: false
author: "Ilya Oskin"
authorPhoto: "/img/authors/ilya_oskin.jpg"
blogPhoto: "/img/blog/wallet-documentation.jpg"
---

尔格节点提供内置钱包以便存放私钥及签署交易。以下内容将说明如何建立与保护阁下的尔格钱包。

该钱包将采用[BIP39 标准](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki)从助记符句子中生出一颗种子，其将根据[BIP32 标准](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)用以创造一把私钥 （分层确定性钱包）。如果你愿意的话，你可以使用你自己的由那些词汇偏执狂常用词汇所构成的助记符[句子](https://github.com/ergoplatform/ergo-wallet/tree/master/src/main/resources/wordlist)。所允许的句子长度分别为12、15、18、21、24，分别代表128位、160位、192位、224位、256位安全。为了对这个有助记符的钱包进行初始化，你应当使用这个`wallet/restore`API评估指标。然而，使用钱包所产生的助记符要安全得多。
在此阶段，与钱包的所有互动只能通过节点REST API完成。请确保你在进行下一步之前在你的节点上[设置一把API密钥](https://github.com/ergoplatform/ergo/wiki/Ergo-REST-API#setting-an-api-key)。

## 钱包格式化

通过节点格式化文件对钱包进行格式化。以下是在首次钱包格式化时需要注意的格式化参数：

* `ergo.wallet.seedStrengthBits` - 如果其由节点产生，那么需要注意种子位的长度。注意：种子越强大，那么助记符句子的长度就会越长。选择： `128, 160, 192, 224, 256`
* `ergo.wallet.secretStorage.secretDir` - 请注意将机密以加密形式存储的目录
* `ergo.wallet.mnemonicPhraseLanguage` - ergo.wallet.mnemonicPhraseLanguage – 请注意在助记符句子中将使用的语言。选择：`"chinese_simplified", "chinese_traditional", "english", "french", "italian", "japanese", "korean", "spanish"（ "简体中文"、"繁体中文"、"英文"、"法文"、"意大利文"、"日文"、"韩文"、"西班牙文"）`

## 首次使用钱包

在首次运转节点的时候，需要通过REST API对钱包进行初始化。可以有两种选择：

1. 通过向含有数据`body: {"pass": "123", "mnemonicPass": "abc"}`的`/wallet/init` 提出POST请求，从头开始进行初始化（种子将通过节点产生）。不要忘记存储节点对应的助记符短语。（备注：请求主题中的参数 `mnemonicPass` 是可选项，并且可以用来保护助记符短语）。

2. 从现有的种子中恢复钱包。你需要提供你的助记符短语：什么时候使用这一选项。这可以通过向含有数据`body: {"pass": "123", "mnemonic": "abandon abandon ...", "mnemonicPass": "abc"}`提出 POST请求得以完成。（注意：只有当你的助记符短语在创建时被其他密码保护起来，才会需要`mnemonicPass` 字段）。

## 钱包开锁

<<<<<<< HEAD
在初始化后以及每次使用钱包前需要向含有数据`body: {"pass": "123"}`的`/wallet/unlock` 提出 `POST`请求来进行解锁。（备注：在初始化阶段使用你已经选定的密码） 
=======
在初始化后以及每次使用钱包前需要向含有数据`body: {"pass": "123"}`的`/wallet/unlock` 提出 POST请求来进行解锁。（备注：在初始化阶段使用你已经选定的密码） 
>>>>>>> e233ef8e9dc5d1a781db276765f7e2c6dad98f0f
在每次节点重启或者钱包上锁的情况下，你必须走这一步。尤其是为了进行下列操作，钱包必须先解锁：

* 采用内部矿工
* 签署交易
* 跟踪框

## 钱包上锁

<<<<<<< HEAD
一段时间后钱包会自动上锁，这意味着所有当前加载的机密都将从内存中消失。你还可以通过向含有数据的`/wallet/lock`提出`GET` 请求，使用REST API 对钱包上锁。建议你在不用的时候对钱包上锁。上锁后，你需要对钱包进行重新解锁方能再次使用。
=======
一段时间后钱包会自动上锁，这意味着所有当前加载的机密都将从内存中消失。你还可以通过向含有数据的`/wallet/lock`提出GET 请求，使用REST API 对钱包上锁。建议你在不用的时候对钱包上锁。上锁后，你需要对钱包进行重新解锁方能再次使用。
>>>>>>> e233ef8e9dc5d1a781db276765f7e2c6dad98f0f

## 管理密钥

钱包采用BIP32 （"分层确定性钱包"）。在钱包进行初始化的时候，只会创建根密钥。为了产生与特定衍生路径相对应的其他密钥对（方法：POST, 请求主体： `{"derivationPath": "m/1/2"}`） `/wallet/deriveKey`  API 路径可以使用。为了简化创建其他密钥对，可以使用a `/wallet/deriveNextKey`  API 路径 （方法：GET）。
