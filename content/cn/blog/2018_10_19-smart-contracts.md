---
title: "为客户提供智能合约"
date: 2018-10-19
draft: false
author: "Alex Chepurnoy"
authorPhoto: "/img/authors/alex_chepurnoy.svg"
blogPhoto: "/img/blog/getting_startet.svg"
---

如今，很多与区块链相关的新闻都在告诉我们，银行X或Y公司将使用“区块链”来“降低成本”。基本上，这意味着大银行家认为另一个流行术语只是另一种以更有效的方式从某处提取价值的工具，也可以通过裁员来节省成本。

虽然我不想对“Satoshi的愿景”说什么（他离开后只能去猜测），但我在网络论坛用户早期见证下的广泛观点是加密货币应该提供能使普通人变得富裕的工具，他们的小企业背后提供的不是生活收入，而不是非个人化的大金融资本。从最初广泛的社区愿景看来，加密货币的工具应该允许人们进行经济活动，而不依赖于业务规模，地理位置，大公司设定的利率等等。这些工具应该允许人们签订合同（没有纸质合约，而是数字化，自我执行和合理智能的合约），这取决于司法管辖区，传统，遵循商业惯例等方面的差异。

我希望尔格在这方面发挥作用。成千上万的小型合作社和个体企业家对全球健康和可持续的财富增长更为重要，而不是几家公司在离岸天堂中牟利。

例如，让我们考虑一个合作联盟（如[Radical Routes](http://www.radicalroutes.org.uk/)激进路线），愿意为数千公里以外的企业家提供经济援助（例如，在Rojava）。

我们现在需要假设一些细节。首先，假设网络中有四个合作社。他们在合约中共同锁定10,000 个尔格币（均分四等份，即每份2,500个尔格币），其中说明如下：

1. 合作社与公钥pubkeyA，pubkeyB，pubkeyC，pubkeyD相关联。企业家与公钥businessKey关联。
2. 合作社将资金锁定在受融资合约保护的硬币中，然后进行尽职调查，并就是否为企业家提供资金进行投票。所有合约基金（10,000个尔格币）都是给企业家的，如果4个中有3个投了票的话。从技术上讲，投票是通过3/4阈值签名完成的。如果在区块编号1,000之前投票不成功（没有达到3/4的签名），任何合作社（实际上，任何人）都可以提交撤销交易，这将向每个合作社返回2,500个尔格币（至少）。此外，融资合同也将被称为投票合同。
3. 投资可以花在三个目标上，并且有一些严格的限制。也就是说，企业家必须在设备上花费至少5,000个尔格币，在建造所需建筑时至少需要2,000个尔格币，企业家可能会随意花费其他资金。
4. 为了确保设备资金将用于设备，合作社联合会使用企业家领域中已知设备销售商的公钥。例如，考虑设备销售商在该区域中使用公钥pubkeyTool1，pubkeyTool2，pubkeyTool3，pubkeyTool4。从技术上讲，转移是作为一个设备销售商的集体签名组织的（因此来自设备销售商的环签名和企业家的签名）
5. 类似地，假设合作联盟中有3个创建者正在识别，与公钥pubkeyConstr1，pubkeyConstr2和pubkeyConstr3相关联。
6. 与投票合约类似，如果设备和建设合约在5000号区块之前没有共同签署，联合合作社可以撤回资金。

在尔格中定义合约的方法有很多种。 低级语言尔格树中的一个脚本描述了一个（单个）逻辑条件，关于是否可以根据它使用硬币，以及支出交易提供的支出证明。 在内部，条件表示为类型化语法树这一名称。 该结构允许我们进行提前成本分析等。名为尔格脚本的高级语言允许具有更传统和可读的描述，使用变量并将逻辑分解为子程序。

让我们从上面（1-3）中定义的主合约开始：

```scala
{
 val spendingSuccess = (pubkeyTool1 || pubkeyTool2 || pubkeyTool3 || pubkeyTool4) && businessKey

 val withdrawCondition = HEIGHT > 5000L &&
                         OUTPUTS(0).value >= 1250L && OUTPUTS(0).propositionBytes == pubkeyA.propBytes &&
                         OUTPUTS(1).value >= 1250L && OUTPUTS(1).propositionBytes == pubkeyB.propBytes &&
                         OUTPUTS(2).value >= 1250L && OUTPUTS(2).propositionBytes == pubkeyC.propBytes &&
                         OUTPUTS(3).value >= 1250L && OUTPUTS(3).propositionBytes == pubkeyD.propBytes 

 spendingSuccess || withdrawCondition
}
```

尔格脚本中的这个脚本将通过与变量的具体值（pubkeyA，pubkeyB，pubkeyC，pubkeyD，spendContract1Hash，spendContract2Hash）绑定，编译成语法树（以序列化形式写入区块链）。 spendContract1Hash是（序列化）设备支出脚本的哈希，将在下面提供具体脚本，spendContract2Hash是一个建造支出脚本的哈希。

设备支出脚本如下：	

```scala
{
 val spendingSuccess = (pubkeyConstr1 || pubkeyConstr2 || pubkeyConstr3) && businessKey

 val withdrawCondition = HEIGHT > 5000L &&
                         OUTPUTS(0).value >= 500L && OUTPUTS(0).propositionBytes == pubkeyA.propBytes &&
                         OUTPUTS(1).value >= 500L && OUTPUTS(1).propositionBytes == pubkeyB.propBytes &&
                         OUTPUTS(2).value >= 500L && OUTPUTS(2).propositionBytes == pubkeyC.propBytes &&
                         OUTPUTS(3).value >= 500L && OUTPUTS(3).propositionBytes == pubkeyD.propBytes 

 spendingSuccess || withdrawCondition
}
```

现在假设合作联盟创建了一个受投票合约保护的硬币。以下是企业家如何开展业务：

1. 创建一个消耗硬币并创建至少三个硬币的交易，一个与设备支出合同，另一个与建筑支出合同，第三个是创建由企业家的公钥保护的硬币。
2. 将交易发送给合作社，等待交易，并在区块链上发布阈值签名输入。
3. 考虑与设备销售商签订合同，共同签署支出交易。
4. 考虑与建筑商签订合同，共同签署支出交易。

企业家可以轻松逃离而不做任何业务，但不超过3,000尔格币。这可以是固定的，例如这笔钱只能在5000数量的区块之后才能消费，之前合作社可以提取这笔钱。对于设备和建筑支出，企业家正在与一些可能已经声誉良好的企业合作。这样投资者就能降低风险。

您可以[在线查找代码和示例交易](https://github.com/ScorexFoundation/sigmastate-interpreter/blob/master/src/test/scala/sigmastate/utxo/examples/CoopExampleSpecification.scala)。请注意，我们有更多复杂签名方案的例子，多步合约（具有在线执行路径显示，比如比特币中的MAST，但允许循环），oracles（数据库），众筹等等。请查看我们的[示例库](https://github.com/ScorexFoundation/sigmastate-interpreter/tree/master/src/test/scala/sigmastate/utxo/examples)。
