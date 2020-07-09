---
title: "(Jean Philippe Aumasson 所进行的)安全审查"
date: 2020-01-12
draft: false
author: "尔格团队"
authorPhoto: "/img/logotype_black_circle.svg"
blogPhoto: "/img/blog/security.jpg"
---

我们想宣布尔格已经成功通过某些(最关键的)部分的安全审查。此次审查由 Jean- Philipee Aumasson 负责完成(也叫 veorq, [https://aumasson.jp/](https://aumasson.jp/) )。

具体报告如下。没有发现任何重大问题。对所发现问题的评论如下:

1. 关于钱包密码，我们将在下一版协议节点中提供建议。不确定密码法的执法力度会 到何种程度，但我们会对此做更多的咨询。

2. 只有在启动新网络时修改”n”和”k”参数才有意义。修改挖掘节点中的这些参数将使 所生成的区块对其他节点来说无效。修改协议节点的该项参数意味着出现另一个分 叉(来自诚实协议参与者的区块将被拒绝)。所以可能不需要进行额外核验，因为 那些启动新网络的人会正确设置”n”和”k”的参数。

3. 目前尔格节点(以及我们所知道的其他区块链协议节点和钱包，以及我们正在使用 的加密库)无法提供防止本地运行的侧通道攻击的保护(如恶意软件或病毒所发起 的时序攻击或内存检查)。所以，请保护好运行你钱包的设备!

============================================================================== =============================

% 尔格安全性评估% Jean-Philippe Aumasson % 2019 年 12 月日

## 摘要

尔格团队邀请我们对其尔格平台的几个组件进行安全性评估

* 创建与验证西格玛协议证明
* 钱包对秘密的安全存储
* 工作量证明验证

这份简报介绍了我们的评估，并说明了我们所发现的问题以及应对措施建议。

## 西格玛协议证明

尔格协议依赖于尔格脚本，其是一种支持西格玛语句的脚本语言，可以通过非交互式的 知识证明来进行证明以及验证。

这些证明是一个类似于树的语句和/或阈值条件，其树叶是离散对数问题的知识证明。

西格玛语句证明是非交互式的，这应归功于 Fiat-Shamir 的转换

该逻辑在[尔格脚本报告](https://ergoplatform.org/docs/ErgoScript.pdf)中有详细说明，并且详细的证明与验证流程在其附录 A 中有介 绍。

实施过程中的挑战包括:

* 定义安全高效证明的编码，并且实现总是成功处理有效输入的序列化，以及总是无法处 理无效输入的反序列化。

* 根据规范正确地实现证明与验证功能，最重要的是确保没有无效语句能够成功通过验 证。

我们对这两个方面进行了回顾，根据存储库 [sigmastate-interpreter](https://github.com/ScorexFoundation/sigmastate-interpreter)中的代码和[尔格脚本报 告](https://ergoplatform.org/docs/ErgoScript.pdf)，对(附录 A 中的)预期行为与实际所采取的行为进行仔细比较。

我们会重点审议来自 [SigSerializer](https://github.com/ScorexFoundation/sigmastate-interpreter/blob/master/sigmastate/src/main/scala/sigmastate/SigSerializer.scala)、[Interpreter](https://github.com/ScorexFoundation/sigmastate-interpreter/blob/master/sigmastate/src/main/scala/sigmastate/interpreter/Interpreter.scala) 的代码以及 [ProverInterpreter](https://github.com/ScorexFoundation/sigmastate-interpreter/blob/master/sigmastate/src/main/scala/sigmastate/interpreter/ProverInterpreter.scala) 特征和目标。

我们主要寻找来自以下类别中的故障:

* 缺陷输入的不安全处理
* 不安全处理超长或超短的输入
* 大树深度或递归级时的行为
* 不安全使用 Scala 类型和结构
* 不合适的变量类型
* 整数溢出
* 竞态条件
* 逻辑缺陷

尽管进行了详尽审查，但是我们没未发现任何安全问题。

协议的逻辑和内部机制是比较复杂的，我们认为最大的风险在于对证明进行分析与验 证。然而，为了利用这些漏洞，攻击者必须创建一个在某种程度上会令自己受益的语义 正确脚本，并且在不应通过验证的时候通过了验证。

在软件安全方面，Scala 消除某些类别的缺陷，但是由于 Scala 的特定行为或未处理的错 误，Scala 代码可能依然会受到缺陷的困扰。

## 钱包

因此，尔格钱包功使其用户能够用磁盘存储与恢复秘密，并且在初次使用的时候，可以 用一个新的种子对钱包进行初始化操作。

该逻辑主要在 [ErgoWalletActor](https://github.com/ergoplatform/ergo/blob/master/src/main/scala/org/ergoplatform/nodeView/wallet/ErgoWalletActor.scala) 中进行定义，有关秘密存储的一个主要构件是 [JsonSecretStorage](https://github.com/ergoplatform/ergo/blob/master/ergo-wallet/src/main/scala/org/ergoplatform/wallet/secrets/JsonSecretStorage.scala)。

首次创建钱包时，`InitWallet` 命令执行以下操作

* 生成作为初始熵的 `settings.walletSettings.seedStrengthBits` 随机位。[在默认情况下](https://github.com/ergoplatform/ergo/blob/master/src/main/resources/reference.conf) ，生成 160 位。
* 从生成的随机位中生成一个 BIP39，其可以被视作一个熵位的编码。采用密码可选的标准 BIP39 逻辑。
* 使用 BIP39 基于 PBKDF2 的推导逻辑，从助记符中推导出种子。
* 采用一个随机数，通过 AES-GCM 将该种子加密到磁盘，使用拥有 [128000](https://github.com/ergoplatform/ergo/blob/master/src/test/resources/application.conf#L107) 次迭代的
PBKDF2-HMAC-SHA256，并利用一个随机盐从密码中产生出一个密钥。

要像解锁一个已经创建的钱包，用户提供密码，钱包将尝试解密所存储的数据。

为了从 BIP39 口令恢复现有帐户，需要执行一个类似于初始化的流程，只不过钱包将从 助记符中，而非从随机助记符中获得种子。

我们在此确定的两种风险包括:

* 缺少对密码长度的检查:由于钱包实在磁盘上存储秘密，既然密码足以访问种子，从理 论来讲，密码的熵至少应当与助记符相同，而在实际上应该很难破解。因此，我们建议 采用最小的密码长度，如 16 个字符。

* 在钱包软件执行后，秘密值(密码、种子和派生私钥)的副本可能会留在内存中，其是 诸如 Scala 等垃圾收集语言的内在局限性。

共享相同内存地址空间的另一进程或用户可能会恢复这些秘密，并且他们也可能出现在 崩溃转储中。据我们所知，在纯 Scala 中没有有效的缓解。
​
# 工作量证明的验证

在先前检查奥托吕克斯共识协议工作量证明安全性之后，我们进行了另一轮检查，重点 关注其最新的验证逻辑，特别是在承诺 [eb0f85a](https://github.com/ergoplatform/ergo/commit/eb0f85ac48b0ee8194c12369faf4cc5f16954af9) 中所做的更改。

主要的相关文件是 [AutolykosPowScheme](https://github.com/ergoplatform/ergo/blob/master/src/main/scala/org/ergoplatform/mining/AutolykosPowScheme.scala)，其他重要操作在诸如 [HeadersProcessor](https://github.com/ergoplatform/ergo/blob/master/src/main/scala/org/ergoplatform/nodeView/history/storage/modifierprocessors/HeadersProcessor.scala) 和 [ModifierValidator](https://github.com/ScorexFoundation/Scorex/blob/master/src/main/scala/scorex/core/validation/ModifierValidator.scala) 中实施。

我们检查所实施的验证逻辑与奥托吕克斯共识协议规范中所规定的验证逻辑是否一致， 并且其已被妥善整合进区块头的验证逻辑。

我们认为应解决以下问题:

* 对`k` 和 `n` 进行更严格的验证:虽然类强制执行 `k<=32` (解决方案中的元素数量)和 `n<31` (元素总数的 log2 值)，但依然可以从授权的参数中创建弱区块。因此，`validate()`函数可 能需要进行额外的验证，确认 `n` 和 `k` 是否等于预期的值。

* 断言 `k` 和 `n` 为正值，因为当前的负值(称作 `Int`s)将传递 `assert` 语句。
