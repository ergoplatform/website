---
title: "如何设置与配置全尔格节点"
date: 2019-12-02
draft: false
author: "Ergo team"
authorPhoto: "/img/logotype_black_circle.svg"
blogPhoto: "/img/blog/how_to_setup.jpg"
---

本教程将解释如何安装与运行全尔格节点。其不涉及采矿相关的内容。

## 节点安全

节点的使用涉及几个重要方面的内容，你的钱包和钱的安全性取决于以下方面:

* 尔格节点需要在配置文件中存储安全关键参数。你永远不应把这个文件公开。
* 尔格节点提供用于与内置钱包互动的REST API。敏感的API方法需要一个安全令牌，你永远不要通过不可靠的渠道发送该令牌。
* 访问尔格REST API必须限制在认识的主机上。尤其是绝不允许通过互联网访问API。

## 先决条件

为了运行尔格节点，你需要JRE版本>= 将要安装的8。其中一种安装方式是使用 [甲骨文安装Java](https://www.oracle.com/technetwork/java/javase/downloads/index.html).

接下来需要下载最新的尔格客[户端发行版](https://github.com/ergoplatform/ergo/releases/) jar文件，并且创建一个节点配置文件。

注意：你不用下载jar，你可以克隆资源库，然后通过发布`sbt assembly`指令，自己利用[SBT](https://www.scala-sbt.org/) 来创建jar。
 
**ergo_folder**是指存放jar的文件夹。 
 
## 首席运行节点

创建在**ergo_folder**中含有以下文本的配置文件`ergo.conf`。

```shell
ergo {
    directory = ${ergo.directory}"/.ergo"
    node {
        mining = false
    }
    wallet.secretStorage.secretDir = ${ergo.directory}"/wallet/keystore"
}
```

参数`${ergo.directory}`指向jar运行的目录。向**ergo_folder**开启命令提示符和`cd`。然后发出以下命令来首次运行节点：

```shell
  java -jar ergo-<release>.jar --mainnet -c ergo.conf
```
之后节点将立即开始同步。API启动与进入到下一步需要等几分钟。

**注意**：对于文件你可以使用任何名称，而非`ergo.conf`。全部配置参数将被传送给该文件，你只需要重写你想修改缺省值的参数。上述配置文件实际上有缺省值。

## 计算你秘密的哈希值

首先，选择一个秘密来保护你的API。然后前往 http://127.0.0.1:9053/swagger#/utils/hashBlake2b 然后调用API来计算你秘密的哈希值。参考下图。

![Compute Hash of secret](/img/blog/how_to_setup_1img.png)

复制含有哈希值的回复以便下一步使用（参见下图）。在我们的例子中，秘密是是 `hello` 谁的哈希值对应`324dcf027dd4a30a932c441f365a25e86b173defa4b8e58948253471b81b72cf`.

**重要提示**：你必须使用不同且比较复杂的秘密.

![response](/img/blog/how_to_setup_2img.png)

## 利用API关键哈希值来更新配置文件

编辑配置文件`ergo.conf`然后粘贴前步所复制的哈希值。文件内容应当看似如下：

```shell
ergo {
    directory = ${ergo.directory}"/.ergo"
    node {
        mining = false
    }
    wallet.secretStorage.secretDir = ${ergo.directory}"/wallet/keystore"
}

scorex {
    restApi {
        # Hex-encoded Blake2b256 hash of an API key. 
        # Should be 64-chars long Base16 string.
        # below is the hash of the string 'hello'
        # replace with your actual hash 
        apiKeyHash = "324dcf027dd4a30a932c441f365a25e86b173defa4b8e58948253471b81b72cf"
    }
}
```

## 初始化钱包

重启节点并且前往[http://127.0.0.1:9053/panel](http://127.0.0.1:9053/panel) 以访问面板。然后设置上一步的API主要秘密。注意你需要设置秘密，而非配置文件的哈希值。在我们的举例中，这是字符串``hello``.

![set API key](/img/blog/how_to_setup_3img.png)

最后，点击“初始化钱包”：

![click on initialize wallet](/img/blog/how_to_setup_4img.png)

在弹开窗口中，您必须输入钱包密码。助记符密码是或选项。点击发送后，钱包会返回一个助记句，如下图所示。

![mnemonic sentence](/img/blog/how_to_setup_5img.png)

你必须把这个句子抄下来，并把它保存在一个安全的地方。如果你要在其他计算机恢复你的钱包，就需要这个句子。

## 获得钱包的地址

这是一个可以确保你正确设置节点的测试。它将返回钱包中的当前地址。
在[http://127.0.0.1:9053/panel](http://127.0.0.1:9053/panel) 的面板上，点击左侧的`Wallet` 条，然后点击 `Get all wallet addresses` 以浏览钱包目前所保存的地址。如果节点设置正确，那么至少应该返回一个地址。

![Get addresses](/img/blog/how_to_setup_6img.png)

## 使用Swagger UI

你可以在[http://127.0.0.1:9053/swagger](http://127.0.0.1:9053/swagger)找到Swagger UI。你还可以使用该UI对面板上（尚不）能用的高级操作进行API调用。你之前已经用其来计算你秘密的哈希值。你还可以使用这个UI来为面板中（尚未）提供的高级操作进行API调用。部分举例如下：

1. 利用寄存器和上下文变量来创建非标准交易。
2. 创建发出令牌的交易。
3. 创建使用某些框作为输入值的交易。 

未来的文章将逐一详细介绍这些操作。

请注意API中的大部分方法都受到保护，你需要使用你（之前）的秘密来获得这些方法。接下来的图片将展示在Swagger UI中设置该秘密的流程。

在页面顶端，点击“授权”键。在弹出框中输入您的秘密，如下图所示。

![Enter API key](/img/blog/how_to_setup_7img.png)

输入密码后，点击“授权”，将跳出以下界面： 

![Logged in](/img/blog/how_to_setup_8img.png)

现在转到[http://127.0.0.1:9053/swagger#/wallet/walletAddresses](/img/blog/how_to_setup_9img.png) ，然后点击“试一试”。你会看到你之前从面板上看到过的相同的地址列表。

![Get addresses](/img/blog/how_to_setup_10img.png)
