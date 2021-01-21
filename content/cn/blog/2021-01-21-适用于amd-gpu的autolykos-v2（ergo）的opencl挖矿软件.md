---
title: 适用于AMD GPU的Autolykos v2（Ergo）的OpenCL挖矿软件
date: 2021-01-19T18:32:08.116Z
author: Eva Qing
authorPhoto: /img/uploads/ergonaut11.jpg
blogPhoto: /img/uploads/amd11.jpg
tags:
  - Building Ergo
---
适用于[ergoplatform.com](https://github.com/ergoplatform)的OpenCL挖矿软件

您可以在以下位置找到CUDA挖矿软件：[CUDA挖矿软件](https://github.com/mhssamadani/Autolykos2_NV_Miner)

**[层代理（Stratum Proxy）](https://github.com/mhssamadani/Autolykos2_AMD_Miner#stratum-proxy)**

如要将此挖矿软件跟Stratum Pool（层矿池）一同使用，需要层代理。

* 安装 [Ergo层代理（Ergo Stratum Proxy)](https://github.com/mhssamadani/ErgoStratumProxy)

*  更新代理的 [client.js](https://github.com/mhssamadani/ErgoStratumProxy/blob/main/client.js) 文件：

*  [代理运行端口](https://github.com/mhssamadani/ErgoStratumProxy/blob/94b4561fbb857b3dbd227535bca75db311de8d66/client.js#L139)（可选。默认为3000）

*  [矿池地址和端口](https://github.com/mhssamadani/ErgoStratumProxy/blob/94b4561fbb857b3dbd227535bca75db311de8d66/client.js#L7)

*  启动代理

*  在此挖矿软件的配置文件中，将节点地址设置为代理的地址（默认情况下，此地址为：`{ "node" : "https://127.0.0.1:3000" }`）

**[配置](https://github.com/mhssamadani/Autolykos2_AMD_Miner#configuration)**

下面这些文件须与可执行文件位于同一文件夹中：

* Miningkernel.cl
* Prehashkernel.cl
* Ocldecs.h
* Ocldefs.h
* Libcurl.dlll（在Windows中）::: win64文件夹中有一个libcurl.dll文件，可以使用它，或者最好用您自己的内置文件替换它
* Config.json

使用您节点的地址更改config.json文件。

**[需求（Linux）](https://github.com/mhssamadani/Autolykos2_AMD_Miner#requirements-linux)**

1 - 为Ubuntu安装AMDGPU PRO驱动程序。

从amd.com下载适用于Linux发行版的AMDGPU-PRO软件包，对下载的文件进行解压并运行：

`$ amdgpu-pro-install --opencl=legacy,pal --headless`

2 - Opencl标头

`$ sudo apt-get install opencl-headers`

3 - libcurl库：安装运行

`$ apt install libcurl4-openssl-dev`

4- OpenSSL 1.0.2库：安装运行

`$ apt install libssl-dev`

**[需求（Windows）](https://github.com/mhssamadani/Autolykos2_AMD_Miner#requirements-windows)**

1. AMD显卡，已安装驱动程序
2. 下载并安装\[AMD APK](https://github.com/mhssamadani/Autolykos2_AMD_Miner/blob/main/amd-dev.wpengine.netdna-cdn.com/app-sdk/installers/APPSDKInstaller/3.0.130.135-GA/full/AMD-APP-SDKInstaller-v3.0.130.135-GA-windows-F-x64.exe)
3. 使用Visual Studio\[工具链说明](https://medium.com/@chuy.max/compile-libcurl-on-windows-with-visual-studio-2017-x64-and-ssl-winssl-cff41ac7971d)从源代码构建libcurl
4. 从\[slproweb.com](https://slproweb.com/download/Win64OpenSSL-1_0_2t.exe)下载OpenSSL 1.0.2安装程序
5. 下载并安装\[Visual C ++可再发行组件](https://aka.ms/vs/16/release/vc_redist.x64.exe)

**[构建（Linux）](https://github.com/mhssamadani/Autolykos2_AMD_Miner#build-linux)**

* 将目录更改为Ubuntu
* 运行`make`
* 如果make成功完成，将出现可执行文件**Autolykos2_AMD_Miner/Ubuntu/ErgoOpenC**L，该可执行文件可以以**./ErgoOpenCL**开头

**[构建（Windows）](https://github.com/mhssamadani/Autolykos2_AMD_Miner#build-windows)**

使用Visual Studio

添加OpenCL、LibCurl、OpenSSl库

包括目录：

![](/img/uploads/ch1.png)

其他包括目录：

![](/img/uploads/ch2.png)

其他库目录：

![](/img/uploads/ch3.png)

其他依赖项：

![](/img/uploads/ch4.png)

**[Http信息](https://github.com/mhssamadani/Autolykos2_AMD_Miner#http-info)**

此挖矿软件的HTTP信息页面位于`http://miningnode:36207`，采用json格式，页面显示GPU的状态（算力、风扇速度、温度等）。

**[捐款与支持](https://github.com/mhssamadani/Autolykos2_AMD_Miner#donations-and-support)**

请注意，此挖矿软件是**免费使用**的，我们不会从您挖到的代币中收取任何费用。为了支持我们正在进行的所有工作，欢迎ERGO矿工向我们捐款！

比特币：3KkwygpCLs1oEi9aTozFxYunoASV6ZrykJ

比特币：bc1q7flay376e5mcp4ljjxpdp7r6p8yajcjm5mu6wd

ERGO：9fFUw6DqRuyFCv13nQyoDuDz4TiR4GvVvWRcSvqzs39eBVcb5S1

英文原版（可能会有更新）：

<https://github.com/mhssamadani/Autolykos2_AMD_Miner>

<!--EndFragment-->