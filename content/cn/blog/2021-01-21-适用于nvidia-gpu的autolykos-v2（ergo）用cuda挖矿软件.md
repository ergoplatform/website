---
title: 适用于Nvidia GPU的Autolykos v2（Ergo）用Cuda挖矿软件
date: 2021-01-19T17:54:19.631Z
author: Eva Qing
authorPhoto: /img/uploads/ergonaut11.jpg
blogPhoto: /img/uploads/christian-wiediger-terypw4o1km-unsplash.jpg
tags:
  - Building Ergo
---
用于[ergoplatform.com](https://github.com/ergoplatform)的Cuda挖矿软件

您可以在以下位置找到OpenCL挖矿软件：[OpenCL挖矿软件](https://github.com/mhssamadani/Autolykos2_AMD_Miner)

**[层代理](https://zh.braiins.com/stratum-v2)（Stratum Proxy）**

如要将此挖矿软件跟层矿池（Stratum Pool）一同使用，需要层代理。

* 安装[Ergo层代理（Ergo Stratum Proxy）](https://github.com/mhssamadani/ErgoStratumProxy)
* 更新代理的*[client.js](https://github.com/mhssamadani/ErgoStratumProxy/blob/main/client.js)*文件：
* [端口运行端口](https://github.com/mhssamadani/ErgoStratumProxy/blob/94b4561fbb857b3dbd227535bca75db311de8d66/client.js#L139)（可选。默认为3000）
* [矿池地址和端口](https://github.com/mhssamadani/ErgoStratumProxy/blob/94b4561fbb857b3dbd227535bca75db311de8d66/client.js#L7)
* 启动代理
* 在挖矿软件的配置文件中，将节点地址设置为代理的地址（默认情况下，此地址为：`{ "node" : "https://127.0.0.1:3000" }`）

**前提条件（Linux）**

（对于Ubuntu 16.04或18.04）

如要编译，您需要具备以下条件：

1.     CUDA工具包：请参阅[安装指南](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html)

2.      与已安装的工具包兼容的CUDA驱动程序：请参阅[兼容性列表](https://docs.nvidia.com/deploy/cuda-compatibility/index.html#binary-compatibility__table-toolkit-driver)

3.      libcurl库：安装运行

`$ apt install libcurl4-openssl-dev`

4.     OpenSSL 1.0.2库：安装运行

`$ apt install libssl-dev`

**安装（Linux）**

1.      将目录更改为`Autolykos2_NV_Miner/secp256k1`

2.      运行`make`

如果`make`成功完成，将出现可执行文件`Autolykos2_NV_Miner/secp256k1/auto.out`和（如果尚无）包含存根内容的配置文件`Autolykos2_NV_Miner/secp256k1/config.json`。

**安装（Windows 64位）**

<!--\\\\\\\[if !supportLists]-->1.         <!--\\\\\\\[endif]-->安装一对兼容的MS Visual Studio C ++工具链和CUDA工具包 \\\\\\[最新CUDA工具包兼容性列表](https://docs.nvidia.com/cuda/cuda-installation-guide-microsoft-windows/)

2.      使用Visual Studio工具链[说明](https://medium.com/@chuy.max/compile-libcurl-on-windows-with-visual-studio-2017-x64-and-ssl-winssl-cff41ac7971d)从源代码构建libcurl

3.      从[slproweb.com](https://medium.com/@chuy.max/compile-libcurl-on-windows-with-visual-studio-2017-x64-and-ssl-winssl-cff41ac7971d)下载OpenSSL 1.0.2[安装程序](https://medium.com/@chuy.max/compile-libcurl-on-windows-with-visual-studio-2017-x64-and-ssl-winssl-cff41ac7971d)

4.      编辑`secp256k1/buildwin.cmd`文件，将`OPENSSL_DIR`、`LIBCURL_DIR`更改为您的libcurl和OpenSSL目录，将`CUDA_COMPUTE_ARCH`更改为所需的GPU代码架构

5.      找到`vcvars64.bat`脚本，它应该在`VISUAL_STUDIO_INSTALL_DIRECTORY\VC\Auxiliary\Build`中

6.      运行cmd.exe，运行`vcvars64.bat`脚本，然后将目录更改为secp256k1，然后运行`buildwin.cmd`

7.      如果一切顺利，`miner.exe`应该出现在`secp256k1`目录中

8.      如果`miner.exe`找不到`nvml.dll`，请在运行之前将`C:\Program Files\NVIDIA Corporation\NVSMI`添加到PATH环境变量中。

**运行（Linux）**

* 如要运行此挖矿软件，您应该传递作为可选参数的配置文件名称\\\`[YOUR_CONFIG]`
* 如果未指定文件名，则此挖矿软件将尝试使用`Autolykos2_NV_Miner/secp256k1/config.json`作为配置
* 配置文件须包含以下结构的json字符串：

`{ "node" : "https://127.0.0.1:9052" }`

如要在所有可用的CUDA设备上运行此挖矿软件，请输入：

`$ <YOUR_PATH>/Autolykos2_NV_Miner/secp256k1/auto.out [YOUR_CONFIG]`

如要选择CUDA设备，请更改并使用`runner.sh`或直接修改环境变量`CUDA_VISIBLE_DEVICES`

**运行（Windows 64位）**

* 在挖矿软件目录中创建具有以下结构的config.json文件：`{ "node" : "https://127.0.0.1:9052" }`

如要调整可用于挖矿软件的CUDA设备，请修改环境变量`CUDA_VISIBLE_DEVICES`，例如，`set CUDA_VISIBLE_DEVICES="0,1"`

**HTTP信息**

此挖矿软件的HTTP信息页面位于`http://miningnode:36207`（将-`DHTTPAPI_PORT XXXX`添加到Makefile中，即可修改默认端口）。

它以JSON格式输出总算力、每个GPU的算力、功耗和温度（取决于NVML，如果NVML失败，则它也会失效——如果失效，JSON包含错误字段）。

英文原版（可能会有更新）：<https://github.com/mhssamadani/Autolykos2_NV_Miner>

<!--EndFragment-->