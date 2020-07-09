---
title: "尔格和众筹"
date: 2019-09-06
draft: false
author: "Robert Wolf"
authorPhoto: "/img/authors/robert_wolf.jpg"
blogPhoto: "/img/blog/crowdfund.jpg"
---

## 什么是众筹？

众筹是一种通过许多人的努力实现一种融资方式。众筹多通过全球网站启动，使项目和企业可以通过众多个人的小额出资来完成融资。通过众筹方式成功创业的最经典案例之一就是虚拟现实耳麦 - Oculus Rift。Oculus VR公司在2012年发起众筹，仅在两年后就被脸书以20亿美元的价格所收购。除了常规创业企业以外，还有许多区块链项目也选择采取众筹模式，例如：乙太坊、Tron和EOS。目前市场上有无数众筹平台。部分较大的众筹平台包括Indiegogo、Kickstarter和Gofundme，不一而足。众筹方式有很多好处：覆盖面广、高效以及最具说服力的营销… 但是现在，让我们看一下其最核心的一点！

## 为尔格引入众筹模式

就在几天前的8月28日，核心开发者 [Kushti](https://www.ergoforum.org/u/kushti) 在（尔格论坛上）[www.ergoforum.org]表示他成功写出并且实施可以让用户在尔格区块链开展众筹活动的代码（如[白皮书第6页](https://ergoplatform.org/docs/ErgoScript.pdf). 所述。该代码甚至与当前的钱包API相结合。[这里](https://ergoplatform.org/en/blog/2019_06_04_wallet-documentation/)是如何建立钱包的快速指南。在这篇文章中，你将学习如何具体开展尔格众筹工作！还将带你看一下有史以来首次众筹建议书，其将为[EIP1后](https://github.com/ergoplatform/eips/blob/master/eip-0001.md)众筹文本撰写工作提供资金支持。如果你想了解更多细节，请阅读以下“脚本”章节。此外，你也可以跳过这一章，直接阅读后面“如何捐款”、“如何收集捐款”以及“众筹项目建议书”等章节。

## 脚本

根据[尔格脚本白皮书（第6页）](https://ergoplatform.org/docs/ErgoScript.pdf), 最简单的众筹脚本是“有关下列众筹情况的脚本：（持有主要出资人公钥的）项目出资人希望为（拥有要出资人公钥的）项目捐款，但前提是该项目在最后期限前从其他渠道筹集到足够的资金（至少达到融资下限）（以高度表示）。为了给项目捐款，出资人将创建一个受以下脚本保护的输出框。该脚本有两个条件：一种情况是最后期限已过，融资失败（出资人可以将钱要回来），另一种情况是成功实现融资（如果融资金额在最后期限前达到了所规定的最低融资门槛，那么项目就可以用这些钱）。

为了确保融到足够多的资金，脚本将在全部输出结果中搜索一个框，并且向项目公钥分配足够多的值。为了检查输出框值的去向，脚本将读取保护输出框的脚本，并且将其与proveDlog对应的脚本进行比较（项目公钥）；该脚本可以通过projectPubKey.propBytes获得。

由于目前API不支持嵌入自定义环境变量（只有诸如高度等预定义变量），因此编译脚本的唯一方法是用具体值替换白皮书中的这些变量。例如，想想看，如果一个众筹活动在第5万个区块前筹到500个尔格币，那么这次众筹就是成功的。
对于出资人公钥（backerPubKey）和项目公钥而言，我们可以采用目前只接受P2PK序列化钥匙的PK()函数。
如此，白皮书修订后的脚本如下：

```scala
{
   val backerPubKey = PK("9h7DHKSDgE4uvP8313GVGdsEg3AvdAWSSTG7XZsLwBfeth4aePG")
   val projectPubKey = PK("9gBSqNT9LH9WjvWbyqEvFirMbYp4nfGHnoWdceKGu45AKiya3Fq") 
    
   val deadline = 50000
   val minToRaise = 500L * 1000000000 
   
   val fundraisingFailure = HEIGHT >= deadline && backerPubKey
   val enoughRaised = {(outBox: Box) =>outBox.value >= minToRaise 
                              && outBox.propositionBytes == projectPubKey.propBytes
                      }
        
   val fundraisingSuccess = HEIGHT < deadline && projectPubKey && OUTPUTS.exists(enoughRaised)
   fundraisingFailure || fundraisingSuccess                     
 }                              
```

## 如何捐款

首先，JSON不支持多行字符串，因此需要用`\n`替换换行符。此外，引号将被转意，因此使用“而非”。生成的JSON将被发送到`/script/p2sAddress`。为了给项目捐款，首先要从/钱包/众多地址中获得你的地址，比如说，提取它们中的第一个。把地址输入出资人公钥，这样在这一步之后对/脚本/p2sAddress的请求看起来以下情况：

```scala
{
  "source": "{ 
    val backerPubKey = PK(\"9...\")
    val projectPubKey = PK(\"9gBSqNT9LH9WjvWbyqEvFirMbYp4nfGHnoWdceKGu45AKiya3Fq\")
    val deadline = 50000
    val minToRaise = 500L * 1000000000
    val fundraisingFailure = HEIGHT >= deadline && backerPubKey
    val enoughRaised = {
      (outBox: Box) => 
        outBox.value >= minToRaise && outBox.propositionBytes == projectPubKey.propBytes
    } 
    val fundraisingSuccess = HEIGHT < deadline && projectPubKey && OUTPUTS.exists(enoughRaised) 
    fundraisingFailure || fundraisingSuccess 
  }"
}    
```

以及你的地址，而非“9…”.

将字符串发送至 `/script/p2sAddress`以获得诸如以下反馈：

```scala
{
  "address": "GB3kh2izpWKvyZfMboQwsEscjPaZcz9WrzGqZB4ZrkzRreiFMV6HZYWXGMK3rqCjDCoPgWGNzfnYSUhivW4a1VRYPE7uZXwKnBcqWcRkiuTx6QW55EcPcWeELUsumwdtKoFtWY583nWnKZff"
}     
```

复制地址字符串（GB3… 在我们的例子中），并且将钱通过`/wallet/payment/send` 汇入该地址。提出采用API方法发送10个尔格币（100亿个毫微尔格(nanoErgs)）的请求如下所示：

```scala
[
 {
   "address": "GB3kh2izpWKvyZfMboQwsEscjPaZcz9WrzGqZB4ZrkzRreiFMV6HZYWXGMK3rqCjDCoPgWGNzfnYSUhivW4a1VRYPE7uZXwKnBcqWcRkiuTx6QW55EcPcWeELUsumwdtKoFtWY583nWnKZff",
   "value": 10000000000
 }
]
```

大功告成！

现在钱包将可以自动找到区块链的币箱，因为其在退款条件下含有属于钱包的公钥。由于（对相同地址）一个输入值只产生一个输出值，因此钱包会定期通过与币箱进行最简单的交易以检查币箱是否有钱。 在退款高度（我们的例子中是50,000），钱包将花币箱里的钱，因此币箱价值将在加入/钱包/余额。请注意在采用EIP-1 3后，情况会有所不同，因为到那时候钱包将采用窄识别模式。

## 如何收集捐款

与项目公钥挂钩的钱包将发现区块链上新到的币箱。然而，其将无法确保币箱是有钱的，因为钱包目前采用的是最简单的交易，对于此类支出交易，脚本是无法做到的。在 `/wallet/boxes/uncertain` 方法采用之前，这是项目发现新到币箱的唯一方法。那时候 `/wallet/transaction/send` 和手工提供的（在“inputsRaw”）序列化币箱（采用` /utxo/byIdBinary` 通过标识符获得序列化币箱）。

那时候Kushti自己完成，并且获得以下 [交易](https://explorer.ergoplatform.com/en/transactions/3d5a1102296b6159754097f33e780cae2692d9a2ec2b6daf26219651bcc2ae48).

请注意[EIP-1](https://github.com/ergoplatform/eips/blob/master/eip-0001.md) 也将打破这一工作流程。

Kushti 提议在区块50,000之前筹集500个尔格币，以（用Python语言）撰写命令行脚本，为EIP-1实施后组织与参与众筹活动作准备。命令行脚本比手工处理请求更为适合，亦可用来在其上面构建图形界面。

司库的确提供[一半的资金](https://explorer.ergoplatform.com/en/transactions/2fc882792b94f8210e4378f2f5bab90896523e212d927ed16600170d76f46ac9)，因此其他人需要一起贡献另外250个尔格币。如果众筹活动失败，资金将被自动退回。由于目前筹款并非易事，Kushti将牵头这一工作，因此请使用以下由他所控制的密钥：

`9gBSqNT9LH9WjvWbyqEvFirMbYp4nfGHnoWdceKGu45AKiya3Fq`

为了捐赠任何数额的款项，请阅读上面`“如何捐款”` 章节，用你的公钥取代出资人公钥，并且赋予金额适当的价值（请注意其以毫微尔格计值，`1尔格= 1.000.000.000 毫微尔格`）。
如果阁下有任何问题、建议或者希望参与我们的活动，欢迎随时加入我们的社交媒体群或论坛。

如果阁下有任何问题、建议或者希望参与我们的活动，欢迎随时加入我们的社交媒体群或论坛。

[t.me/ergoplatform](https://t.me/ergoplatform) | [t.me/ergo_mining](https://t.me/ergo_mining) | [www.ergoforum.org](www.ergoforum.org)
