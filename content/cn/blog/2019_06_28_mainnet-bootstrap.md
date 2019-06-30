---
title: "自启动伊始加入尔格主网"
date: 2019-06-28
draft: false
author: "Ilya Oskin"
authorPhoto: "/img/authors/ilya_oskin.jpg"
blogPhoto: "/img/blog/start.jpg"
---

## 自启动伊始加入尔格主网

为了在启动伊始加入尔格主网并且竞相开采创世区块，你需要按照以下步骤进行操作。如果你不打算参与尔格挖矿，而只是想建一个全节点，那么你只需进行步骤3和步骤5的操作。

## 准备工作

### 1. 安装采矿软件

请先查阅[https://github.com/ergoplatform/ergo/wiki/Mining](https://github.com/ergoplatform/ergo/wiki/Mining)的说明.
根据其（有关Ubuntu的）阅读说明或使用Windows手册[https://ergoplatform.org/en/blog/2019_05_07_mining](https://ergoplatform.org/en/blog/2019_05_07_mining)，搭建一个[https://github.com/ergoplatform/Autolykos-GPU-miner](https://github.com/ergoplatform/Autolykos-GPU-miner)矿机。
尝试运行诸如含有测试格式化的`./auto.out config.json`:

```scala
{
  "mnemonic": "noise peasant subway frozen illegal pretty oak agent train valid wash title burst column yard decide move coin gas asset pretty hire happy fuel",
  "node": "http://159.203.36.162:9052",
  "keepPrehash": true
}
```

并且查看诸如以下内容：

```scala
2019-06-27 14:44:58,626 INFO [main thread] Using 1 GPU devices
2019-06-27 14:44:58,626 INFO [main thread] Using configuration file mine162.json
2019-06-27 14:44:58,628 INFO [main thread] Block getting URL:
   http://159.203.36.162:9052/mining/candidate
2019-06-27 14:44:58,628 INFO [main thread] Solution posting URL:
   http://159.203.36.162:9052/mining/solution
2019-06-27 14:44:58,629 INFO [main thread] Generated public key:
      pk = 0x03 F5214F2F6D87C714 4A2E12F8D4C4E110 1C59FF7D9AEABC11 77C4CB50FA8497E7
2019-06-27 14:44:58,714 INFO [main thread] Got new block in main thread, block data: {
  "MSG" : "3637B40440681781F92EDC92B33E623330F05705446168952CBD3720BA922442",
  "B" : 3462030106355215694294694818737961234095984491840283822105474632310,
  "PK" : "03F5214F2F6D87C7144A2E12F8D4C4E1101C59FF7D9AEABC1177C4CB50FA8497E7"
}
2019-06-27 14:44:58,956 INFO [GPU 0 miner] GPU 0 allocating memory
2019-06-27 14:44:58,964 INFO [GPU 0 miner] Preparing unfinalized hashes on GPU 0
2019-06-27 14:45:13,443 INFO [GPU 0 miner] GPU 0 read new block data
2019-06-27 14:48:02,298 INFO [main thread] Average hashrates: GPU0 24.8537 MH/s Total 24.8537 MH/s 
```

上述通知表明你的矿机已经正确安装。

### 2. 产生用于挖矿的助记符短语

如果你没有，请运行`./auto.out –G`以产生一个新的助记符短语。

```scala
$ ./auto.out -G
2019-06-28 12:08:32,915 INFO [main thread] !!!Generated new mnemonic, put it in your config.json file!!!
job great stage urge elite purity surprise any cram matrix typical table panel honey curious enlist fault matrix
!!!Generated new mnemonic, put it in your config.json file!!!
2019-06-28 12:08:32,918 INFO [main thread] Generated public key:
      pk = 0x03 61F8098779E5EC8C 2A851E3EF57C471E 9A6803F60666E93E EB0BDD67411439D0
```

在上面的例子中，当你的公钥是`0361F8098779E5EC8C2A851E3EF57C471E9A6803F60666E93EEB0BDD67411439D0`，你所产生的助记符短语是`job great stage urge elite purity surprise any cram matrix typical table panel honey curious enlist fault matrix`。保存你的助记符短语（如：记在一张纸上）并且永远保存个私密的地方，任何能拿到这一信息的人都可能偷走你的钱。写下你的公钥，在接下来步骤里你需要它

### 3. 格式化与开启矿机

创建一个含有以下内容的`settings.json` 格式化文件（别忘了替换`<>`括号中的内容):

```scala
{
  "mnemonic": "<mnemonic generated at step 2>",
  "node": "http://<ip address of your node>:9053",
  "keepPrehash": true
}
```

并且运行诸如`./auto.out settings.json`的矿机。其应进行初始化，并且开始为候选区块索取节点。

```scala
2019-06-27 15:14:02,267 INFO [main thread] Using 1 GPU devices
2019-06-27 15:14:02,267 INFO [main thread] Using configuration file mainnet-conf.json
2019-06-27 15:14:02,269 INFO [main thread] Block getting URL:
   http://<ip address of your node>:9053/mining/candidate
2019-06-27 15:14:02,269 INFO [main thread] Solution posting URL:
   http://<ip address of your node>:9053/mining/solution
2019-06-27 15:14:02,269 INFO [main thread] Generated public key:
      pk = 0x02 F611D5F6AAB70C05 4A530C6420395B3C 4521642DC7125A93 49AAA2D9BB89D7AF
2019-06-28 12:21:36,035 ERROR [main thread] CURL: Couldn't connect to server
2019-06-28 12:21:36,835 INFO [main thread] Waiting for block data to be published by node...
2019-06-28 12:21:36,876 ERROR [main thread] CURL: Couldn't connect to server
2019-06-28 12:21:37,676 INFO [main thread] Waiting for block data to be published by node...
2019-06-28 12:21:37,718 ERROR [main thread] CURL: Couldn't connect to server
```

不需要对矿机进行其它操作。

### 4. 格式化与运行你的全节点

请先查阅[https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node](https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node)的说明。

创建含有以下内容的一个`settings.conf` 格式化文件(别忘了替换`<>`括号中的内容):

```scala
ergo {
  node {
    mining = true
    miningPubKeyHex = "<your public key from step 2>"
  }
}

scorex {
  network {
    nodeName = "<some name to identify your node>"
  }
  restApi {
    # you may wish to configure an apiKeyHash to use your wallet. Check https://ergoplatform.org/en/blog/2019_06_04_wallet-documentation/ for wallet documentation.
    apiKeyHash = "1111"
  }
}
```

从[https://github.com/ergoplatform/ergo/releases/tag/v3.0.0](https://github.com/ergoplatform/ergo/releases/tag/v3.0.0)下载最新的主网发布，并且像`nohup java -jar -Xmx3G -Dlogback.stdout.level=DEBUG ergo-3.0.0.jar --mainnet -c settings.conf`那样运行，并且如果你看到类似以下内容：

```scala
17:02:11.449 INFO  [main] o.e.settings.ErgoSettings$ - Running in mainnet network mode
17:02:12.262 INFO  [main] org.ergoplatform.ErgoApp - Entering coordinated network bootstrap procedure ..
17:02:12.933 INFO  [main] o.e.BootstrapController - Wrong response format, retrying in 10s
17:02:22.933 INFO  [main] o.e.BootstrapController - Wrong response format, retrying in 10s
```

你的节点已经完成正确格式化，不需要再进行任何其它操作。

### 5. 等待主网启动

这几步完成后，你就完成了参与尔格挖矿的准备工作，你只需等待。你的矿机等待来自你节点的候选区块（block candidate），同时你的节点正在等待无预挖证明（proof-of-no-premine），该证明将由尔格开发团队根据主网启动时间表进行发布。无预挖证明将包含来自媒体（卫报、Vedomosti、新华社）的头条报道以及来自比特币和以太坊的最新区块鉴定人。在主网启动时，我们将分发无预挖证明，并且开挖启动。

为了确保你的节点正在挖矿，你可能需要检查你的节点日志。应当停止从`BootstrapController`写日志，并且写`Boot settings received. Starting the node`, 这样日志文件将类似于以下文件：

```scala
17:21:39.417 INFO  [main] o.e.BootstrapController - Wrong response format, retrying in 10s
17:21:49.437 INFO  [main] o.e.BootstrapController - Wrong response format, retrying in 10s
17:21:59.500 INFO  [main] org.ergoplatform.ErgoApp - Boot settings received. Starting the node ..
17:21:59.554 INFO  [ctor.default-dispatcher-3] s.c.n.NetworkController - Declared address: None
17:21:59.558 INFO  [ctor.default-dispatcher-3] s.c.n.NetworkController - Registering handlers for List((1,GetPeers message), (2,Peers message))
17:21:59.559 INFO  [ctor.default-dispatcher-3] s.c.n.NetworkController - Successfully bound to the port 9030
17:21:59.565 INFO  [ctor.default-dispatcher-4] o.e.n.state.ErgoState$ - Generating genesis UTXO state
17:21:59.568 INFO  [ctor.default-dispatcher-2] o.e.local.ErgoMiner - Trying to use key from wallet for mining
17:21:59.583 INFO  [ctor.default-dispatcher-3] s.c.u.NetworkTimeProvider - New offset adjusted: 2
17:21:59.585 WARN  [ctor.default-dispatcher-3] o.e.n.ErgoReadersHolder - Got GetReaders request in state (None,None,None,None)
17:21:59.598 INFO  [ctor.default-dispatcher-2] s.c.n.NetworkController - Registering handlers for List((55,Inv), (22,RequestModifier), (33,Modifier), (65,Sync))
17:21:59.729 INFO  [ctor.default-dispatcher-4] s.c.a.a.b.VersionedIODBAVLStorage - Update storage to version ByteArrayWrapper[6813BCA7232C6E156FB6229ECF165D157640A8576A5B320506E4C1B66011253402]: 14 elements to insert, 1 elements to remove
17:21:59.846 INFO  [ctor.default-dispatcher-4] o.e.n.state.ErgoState$ - Genesis UTXO state generated with hex digest 6813bca7232c6e156fb6229ecf165d157640a8576a5b320506e4c1b66011253402
```

与此同时，你的矿工应当给你写下类似以下内容：

```scala
2019-06-28 12:21:36,035 ERROR [main thread] CURL: Couldn't connect to server
2019-06-28 12:21:36,835 INFO [main thread] Waiting for block data to be published by node...
2019-06-28 12:21:36,876 ERROR [main thread] CURL: Couldn't connect to server
2019-06-28 12:21:37,676 INFO [main thread] Waiting for block data to be published by node...
2019-06-27 15:26:20,328 INFO [main thread] Got new block in main thread, block data: {
  "MSG" : "0777078E22BB64C771DE8A8D3B1E454847A91024D98AB86949091C8019FA7453",
  "B" : 964934076977634961863091541739065898773646368992290869855043026179318012,
  "PK" : "02F611D5F6AAB70C054A530C6420395B3C4521642DC7125A9349AAA2D9BB89D7AF"
}
2019-06-27 14:44:58,956 INFO [GPU 0 miner] GPU 0 allocating memory
2019-06-27 14:44:58,964 INFO [GPU 0 miner] Preparing unfinalized hashes on GPU 0
2019-06-27 14:45:13,443 INFO [GPU 0 miner] GPU 0 read new block data
2019-06-27 14:48:02,298 INFO [main thread] Average hashrates: GPU0 24.8537 MH/s Total 24.8537 MH/s 
2019-06-27 15:27:11,033 INFO [GPU 0 miner] GPU 0 found and trying to POST a solution:
```
