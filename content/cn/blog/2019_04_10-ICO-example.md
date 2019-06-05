---
title: "一个尔格顶层的首次币发行案例"
date: 2019-04-10
draft: false
author: "Alex Chepurnoy"
authorPhoto: "/img/authors/alex_chepurnoy.svg"
blogPhoto: "/img/blog/ico-example_opt.jpg"
---
本文介绍了在尔格脚本中执行的功能齐全的ICO（首次币发行）。该案例涵盖了尔格平台的几个重要和新颖的特征，并展示了如何使用少量代码来支持复杂的合约。

## 第1部分。初步行动

加密货币协议中的一个重要设计决策是指定支出交易实际花费的内容。这里有两种可能性。第一个基于UTXO(未花费的交易输出）的模型，如在比特币中，交易花费一次性资产容器（在比特币中称为'硬币'或UTXO）并创建新的。另一种是基于账户的模型，如在Nxt，以太坊或Waves中，交易将一定数量的资产从现有长存的账户转移到另一个，可能是新的长存的账户，这后续可能产生副作用，例如Waves或以太坊中的合同执行。在这方面，尔格类似于比特币，因为它使用基于UTXO的方法，其中一次性容器被称为币箱。有趣的是，尔格交易还可以有未被花费的数据输入，而是用于从当前未使用的币箱来提供一些信息。

在基于UTXO的模型之上创建首次币发行并非易事，因为与基于帐户的模型相比，此处没有明确的持久存储。但是，尔格将支出交易带入脚本的执行上下文中。通过这种小的改变，可以表达交易输出和输入之间的依赖关系。反过来，通过设置依赖关系，我们甚至可以在区块链上执行任意复杂的图灵完备程序（参见["自我复制硬币作为通用图灵机"](https://link.springer.com/chapter/10.1007/978-3-030-00305-0_4)论文）。在本文中，我们将使用ICO定义多阶段合同的具体方案，其中我们有三个阶段（融资，代币发行，退出）。

现在想象一下成千上万参与者的ICO。与以太坊不同，尔格不提供存储大量数据的可能性，并且在整个合同执行过程中都可以存储它们。相反，它允许仅存储数据结构的大约40字节的头，表示为键 - >值字典，与默克尔树类似地进行验证。要访问字典中的某些元素或对其进行修改，触发保护脚本执行的支出交易应提供查找或修改证明。这为合同提供了对潜在巨大数据集进行验证的可能性，而无需太多内存来存储合约状态。但是，在（活动合约）状态下存储空间意味着更大的交易，但从可扩展性的角度来看，这个问题更容易，并且可扩展性是尔格的首要任务。


## 第2部分.首次币发行（ICO）合同

可能存在许多与首次币发行（ICO）相关的可能情景。在本文中，我们考虑一个首次币发行想要收集至少一定数量的资金（尔格币）来启动项目。一旦超过资金门槛并且资金期结束，该项目就会启动，并且项目将根据所收集的资金总额发放首次币发行的代币。在永久延续的退出阶段，投资者根据他们在融资期间投入的金额撤回首次币发行的代币。下面简要介绍合约步骤，并进一步提供详细信息：

* 首先，融资期开始。它从一个项目币箱开始，对一个空字典进行验证。该词典用于持有（投资者，平衡）对，其中投资者是保护包含退出代币的币箱的脚本。为了平衡，我们假设在ICO期间1个代币等于1个尔格。在融资期，只有将尔格币放入项目的框中才有可能。资金交易花费在项目的框中，并创建一个包含更新信息的新项目框。为此，项目币箱的支出交易还有使投资者撤回脚本的其他输入。应将投资者脚本和输入值添加到新币箱的树中。这将会有许多链式资金交易。
* 其次，融资期结束，之后持有投资者数据的树变为只读。经过验证的树可以单独允许不同的修改操作：可以禁止插入，删除，更新或所有操作（因此树可以处于只读模式）。此外，此交易还会创建首次币发行项目的代币，该项目将在下一阶段退出。该项目可以在此阶段撤回尔格币。  
* 第三，投资者撤回他们的首次发行币代币。为此，支出交易创建具有保护条件的输出和从树中获取的标记值。撤回的对也从树中清除。可能会有许多链式支出交易。

这三个阶段应按逻辑顺序链接在一起。使用一系列币箱来实现这些目标。

## 第3部分.首次币发行合约细节

下面提供ICO合约阶段的细节和尔格脚本代码。

### 融资阶段

在先期的融资阶段，我们假设最初项目创建了一个提交到空字典（存储在寄存器R5中）的币箱，其中包含下面描述的一些保护脚本。这个阶段至少持续到2,000高度。更具体地说，高度为2,000或更高的第一个交易应该更改输出币箱的脚本，如下一节所述（较低高度的交易必须输出具有相同脚本的币箱）。

项目币箱检查它是否始终是交易的第一个输入和输出。 其他输入被视为投资者的输入。 投资者的输入包含寄存器R4中的脚本的哈希。 此哈希表示将在稍后的退出阶段使用的退出脚本。 应将所有投资输入的哈希值和货币值添加到字典中。 支出交易提供了证明投资者数据确实被添加到字典中的证据，并且在合同中检查证明。 

在资助分包合约中没有检查字典是否只允许插入，而不是更新现有值或删除（尽管添加显式检查并不困难）。

支出交易应该支付费用，否则，它不太可能包含在一个区块中。因此，资助合同检查支出交易有两个输出（一个用于自身，另一个用于支付费用），费用不超过一定限度（在我们的例子中只有一个纳米），并且保护命题应该是这样只有矿工可以花费输出（在我们的例子中，我们只使用来自编译环境的变量“feeProp”而不提供任何细节）。这个“feeProp”对应于一个标准，虽然不是协议所要求的。

下面的代码强制执行上述条件。请注意，“nextStageScriptHash”（下一步脚本哈希）环境变量包含颁发阶段序列化脚本的哈希值。

```scala
    val selfIndexIsZero = INPUTS(0).id == SELF.id

    val proof = getVar[Coll[Byte]](1).get

    val inputsCount = INPUTS.size

    val toAdd: Coll[(Coll[Byte], Coll[Byte])] = INPUTS.slice(1, inputsCount).map({ (b: Box) =>
        val pk = b.R4[Coll[Byte]].get
        val value = longToByteArray(b.value)
        (pk, value)
    })

    val modifiedTree = SELF.R5[AvlTree].get.insert(toAdd, proof).get

    val expectedTree = OUTPUTS(0).R5[AvlTree].get

    val properTreeModification = modifiedTree == expectedTree

    val outputsCount = OUTPUTS.size == 2

    val selfOutputCorrect = if(HEIGHT < 2000) {
        OUTPUTS(0).propositionBytes == SELF.propositionBytes
    } else {
        blake2b256(OUTPUTS(0).propositionBytes) == nextStageScriptHash
    }

    val feeOutputCorrect = (OUTPUTS(1).value <= 1) && (OUTPUTS(1).propositionBytes == feeBytes)

    val outputsCorrect = outputsCount && feeOutputCorrect && selfOutputCorrect

    selfIndexIsZero && outputsCorrect && properTreeModification
```

### 发行阶段

这个阶段只有一个支出交易进入下一阶段（退出阶段）。支出交易进行以下修改。首先，它将字典上允许的操作列表从“仅插入”改为“仅删除”，因为下一阶段（退出）仅处理从字典中删除条目。

其次，合同检查是否发行了适当数量的首次币发行的代币。在尔格中，允许每个交易发出一种新的代币，代币的标识符应该等于第一个输入币箱的（唯一）标识符。发行分包合同检查已发出新代币，其金额等于首次币发行迄今为止收集的纳米级数量。

第三，合约检查支出交易确实正在重新创建具有对应于下一阶段（退出阶段）的保护脚本的币箱。

最后，项目应该撤回收集的尔格币，当然，每次支出交易都应该支付费用。因此，分包合约检查支出交易确实有3个输出（项目代币币箱，尔格币撤回币箱和费用币箱各一个），并且第一个输出和输出带有发行的代币。由于我们没有指定项目资金撤回细节，我们需要在支出交易上签署项目签名。

```scala
    val openTree = SELF.R5[AvlTree].get
    
    val closedTree = OUTPUTS(0).R5[AvlTree].get
    
    val digestPreserved = openTree.digest == closedTree.digest
    val keyLengthPreserved = openTree.keyLength == closedTree.keyLength
    val valueLengthPreserved = openTree.valueLengthOpt == closedTree.valueLengthOpt
    val treeIsClosed = closedTree.enabledOperations == 4
    
    val tokenId: Coll[Byte] = INPUTS(0).id
    
    val tokensIssued = OUTPUTS(0).tokens(0)._2
    
    val outputsCountCorrect = OUTPUTS.size == 3
    val secondOutputNoTokens = OUTPUTS(0).tokens.size == 1 && OUTPUTS(1).tokens.size == 0 && OUTPUTS(2).tokens.size == 0
    
    val correctTokensIssued = SELF.value == tokensIssued
    
    val correctTokenId = OUTPUTS(0).R4[Coll[Byte]].get == tokenId && OUTPUTS(0).tokens(0)._1 == tokenId
    
    val valuePreserved = outputsCountCorrect && secondOutputNoTokens && correctTokensIssued && correctTokenId
    val stateChanged = blake2b256(OUTPUTS(0).propositionBytes) == nextStageScriptHash
    
    val treeIsCorrect = digestPreserved && valueLengthPreserved && keyLengthPreserved && treeIsClosed
    
    projectPubKey && treeIsCorrect && valuePreserved && stateChanged
```

### 退出阶段

在此阶段，允许投资者撤回受预定义保护脚本（其哈希存储在字典中）保护的项目令牌代币。 退出是按N个数量的批次进行的。因此，撤回交易有N + 2个输出，其中第一个输出优先于提取分包合同和余额标记，最后一个输出支付费用，其余N个输出有根据字典保护脚本和标记值。 合同需要两个字典元素的证明：一个证明要撤回的值确实在字典中，第二个证明得到的字典没有撤销的值。 分包合约如下。

```scala
    val removeProof = getVar[Coll[Byte]](2).get
    val lookupProof = getVar[Coll[Byte]](3).get
    val withdrawIndexes = getVar[Coll[Int]](4).get

    val out0 = OUTPUTS(0)

    val tokenId: Coll[Byte] = SELF.R4[Coll[Byte]].get

    val withdrawals = withdrawIndexes.map({(idx: Int) =>
        val b = OUTPUTS(idx)
        if(b.tokens(0)._1 == tokenId) {
            (blake2b256(b.propositionBytes), b.tokens(0)._2)
        } else {
            (blake2b256(b.propositionBytes), 0L)
        }
    })

    val withdrawValues = withdrawals.map({(t: (Coll[Byte], Long)) => t._2})

    val withdrawTotal = withdrawValues.fold(0L, { (l1: Long, l2: Long) => l1 + l2 })

    val toRemove = withdrawals.map({(t: (Coll[Byte], Long)) => t._1})

    val initialTree = SELF.R5[AvlTree].get

    val removedValues = initialTree.getMany(toRemove, lookupProof).map({(o: Option[Coll[Byte]]) => byteArrayToLong(o.get)})
    val valuesCorrect = removedValues == withdrawValues

    val modifiedTree = initialTree.remove(toRemove, removeProof).get

    val expectedTree = out0.R5[AvlTree].get

    val selfTokensCorrect = SELF.tokens(0)._1 == tokenId
    val selfOutTokensAmount = SELF.tokens(0)._2
    val soutTokensCorrect = out0.tokens(0)._1 == tokenId
    val soutTokensAmount = out0.tokens(0)._2

    val tokensPreserved = selfTokensCorrect && soutTokensCorrect && (soutTokensAmount + withdrawTotal == selfOutTokensAmount)

    val properTreeModification = modifiedTree == expectedTree

    val selfOutputCorrect = out0.propositionBytes == SELF.propositionBytes

    properTreeModification && valuesCorrect && selfOutputCorrect && tokensPreserved
```

## 可能的增强

请注意，我们的示例合约忽略了许多细微差别。 例如，任何听从区块链的人都可以在融资和退出阶段执行合约并构建适当的支出交易。 在现实世界中，可能需要使用来自项目或可信决定者的附加签名。

此外，在退出合同中没有考虑自毁案件，因此它将一直存在，直到被矿工通过存储租用机制销毁，可能持续数十年甚至数百年。对于融资阶段，从项目中获得额外的输入是合理的，其值等于费用输出的值。 等等。
