---
title: "Storing Ergo: SAFEW"
date: 2022-03-25T11:24:11.911Z
author: Ergo Platform
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/news-blog-41-1-.png
tags:
  - Building Ergo
---
In this article, we continue our series of guides for setting up and using one of the many new Ergo wallets. For this demonstration, we explore SAFEW (Simple and Fast Ergo Wallet), the 2nd Place winner of ErgoHack III. This web extension wallet offers several features, including ErgoPay, seamless interaction with ErgoDEX, ErgoMixer integration, Ledger hardware wallet integration (awaiting approval from Ledger developers), token minting, and the ability to send multi-asset transactions. When using the ErgoPay feature, the mnemonic seed phrase is stored on another device and transactions are signed in Ergo Wallet (iOS/Android) via QR code.

## Installing SAFEW

In order to install this wallet, you need to download the latest version from GitHub: [GitHub - ThierryM1212/SAFEW: Simple And Fast Ergo Wallet](https://github.com/ThierryM1212/SAFEW). Please note, Firefox users can access the download here: <https://addons.mozilla.org/fr/firefox/addon/safew/>.

From the Github website, click on the latest release.



![](https://lh5.googleusercontent.com/YN2Webshgn-5QiEXFE7XnrLIM2KcqCA6WdXo_zR_k3StuEB3dpvAnNBoovVFctBSc7miLO6rQ8JRYcNCrX0CQc6Xegj4Ujhi_dy4giBVOLhs0vIx6du3sQkOotQKCxrJc-735qXK)



Download the zip file.



![](https://lh5.googleusercontent.com/nxnU8tI0XzoD2zL8cu5x_KIff-yq97gB0m3YMMchZd9JLDofeVnv_DFow5EO-yeuaQLsLpCR6xgmYpO3KDpoXtePQeRFWwnV83y_5JLtJBUaJho_uwldn9wC2ZDS7b_oQ_WawVFH)



Once you have the download, unzip the file and go to “Manage Extensions” in your web browser (we are using Google Chrome for this demonstration).



![](https://lh5.googleusercontent.com/eDiqZpexbBCe4wRMRGaXkgjC3RgRMMRvLHJOUaTyqS60lkmMWKFOeepaV1lgjoE9eqU-YfqzB-VNLj95glG5uN-AZwSGBmMM_IoQWQ-FzK_38BFfdsLKAaYvPtc1V7kwzsRskMRu)



In order to install this wallet, you will need to turn on “Developer mode” in the extensions.



![](https://lh5.googleusercontent.com/Bj2LCfIKxQR20kWkDF9R2wBR-DiVcuk4sNyY5FAtSIS2N5r21ItkMteKi1ifT2rRz9Wli9uiM0XtuuvCVP0Ax7xs4FlnFUr6BCd9skxmrQzez-tTxyUdogO74qAhPlRqKufeVYRI)



Once “Developer mode” is initiated, you will select “Load Unpacked” to install the necessary files.



![](https://lh6.googleusercontent.com/10CPGAHtCTYT4Ho4QRSl6LUK-0ZUGcIHMF3IykAuuJ-v7Bo8z_FWtfE6CDh5esLWXSVWfWMpEleG590QwmJBzRAxrfsZowiUccqPTcI4jQiCX795bVwN1mdkqSc7Nj_EONQOnPZD)



Click on the unzipped “SAFEW_0.4.6” folder and hit “Select.”

![](https://lh3.googleusercontent.com/qHWzxTdUymX0-neQz13ikorJzs70hCYuzp4vCC2nX6VHq65yNLvYi0FtIL7_nLUfF3De_T7Eykje_Qa2WyVlY5gdwVEMTX1g3OXPIEYBMKQ2gxmilYneKfrsv4FaWwI7Xw40iNmG)

You have now added the wallet to your extensions.



![](https://lh6.googleusercontent.com/tyF9dmTmU5fZwa4og8Iy5Z6hG8AOiXZc44L2Pvt2aC57ef4pUUrj87G5S5u0XI9tfr_pZV3dO51smBoWYF2fwbzRgThWuJoYcnf1woSbEm7Xd8BkVHPHLOQ0LVHm-vqMy3dtKO1R)



Now that we have loaded the wallet, let’s open it. Go to your extensions (the puzzle piece near the top right corner of your browser) and open the wallet (“Simple and Fast Ergo Wallet”). You will then be prompted to accept the disclaimer. After accepting the disclaimer, you will be brought to the following screen.

![](https://lh6.googleusercontent.com/xblGgibN1LT69JCZYl0V0UI0q-UIgzGL5FegyCM6LExutFRHdfL-wLo0zUTL66cpOEuuuola2NHRomHyGVi4zfmTwsjOdjKFWolzPaaH_i_QWJibP_Da6mI3Y-I9B71qmzti6T3s)



The two icons that are highlighted in the above image allow you to “Add New Wallet” or “Add a new ErgoPay wallet.” If you select “Add New Wallet,” you will be able to restore an existing wallet or create an entirely new one. With “Add a new ErgoPay Wallet,” a user is able to enable the signing of transactions, where they are signed using the iOS/Android [Ergo Wallet](https://ergoplatform.org/en/mobile_wallets/).

Hovering your cursor over the other icons will indicate their functions. They include:

* Wallet List
* Mint tokens
* [ErgoMixer](https://ergoplatform.org/en/blog/2021-05-12-ergomixer/)
* Disconnect Wallets
* Settings

## Creating/Restoring a Wallet

To create or restore a wallet, click on the “Add New Wallet” icon. You will see the following screen:

![](https://lh4.googleusercontent.com/9PGzOTN4CXRRpd6ze7wiroiGBr5id6gI2XDP2AlvJno5LDXZ9_lYCEYoUp1T4H9E4qFhjsmowMSsOR95ISknP21ugs3b3n2oB2sTjVHzQIkJjaX8eM4GtCjBjHUCPf1V7AqeDLzb)



If you have a preexisting Ergo wallet, you can simply restore it in SAFEW by inputting your mnemonic seed phrase. If you are creating a new Ergo wallet, you will need a new mnemonic seed phrase. In the above image, you will notice the following: “Get random mnemonic.” You have the option of selecting a 12, 15, 18, 21, or 24 word phrase. For the purposes of this demonstration we will select an 18 word mnemonic. Let’s go through the steps for creating a wallet.



![](https://lh3.googleusercontent.com/bjKU9XwXuWFxnJODD12O87DW7L0tXDsaHK7lK5YxChudSZx6KkxvKoJUtjUgMLWf66l1khJW-7DabbWVgAS6nbqtEfHiRyt0RvLV6O-2z54ZYvdeMCZEAB1RVFonv-p64sTRgtMs)

Give your wallet a name (we chose “Test Wallet”), write down your mnemonic seed phrase and create a spending password. With SAFEW, you can even choose different colors for your various Ergo wallets.

DISCLAIMER: Never store your password and mnemonic seed phrases digitally. It is best practice to write your mnemonic seed phrase down on paper and store it in a safe and secure place. If you lose access to your wallet, the mnemonic seed phrase is the ONLY way to recover your assets.

Once you have created your new wallet, you will see the following:



![](https://lh5.googleusercontent.com/_PAXrFEdbmGbbqqSny9iFIXPuGKj1cxublwI84PN2F5ABO0k7-Um43iWlzx3yuFHa57VgZgU4Ou-W8zUdHJI4TKB_CFEro9pFJDE7K2CR-lqVwZHpUjaWIXGZnGf7nCcrlrN295E)



Functions:

* Wallet details - selecting this icon will display your receiving address. This is the address you give out to receive Ergo assets.
* Send assets - this feature brings you to a screen (see below) where you can input a receiving address and select assets to send to another Ergo wallet or dApp. 
* Transactions list - will simply display all the transactions that have occurred with this wallet.
* Edit wallet - options to change your password, wallet name and receiving address. You can also convert the wallet to an ErgoPay wallet, backup the wallet, or delete the wallet.

![](https://lh3.googleusercontent.com/IQ_5iN7FUhW58WmUl4o1u7IuMjCbINwrl-cpyI6w2EC8Hb_EngKu4YbwGK-pnqPZsV6q1qkSiCZT_az7RAJIS1aBY-tkacT50dP3N5iu_soD50rJe190bSid4KnoUfIsesveT-Cj)



## Other SAFEW Features

As was mentioned earlier, users can expect Ledger integration as soon as work has been completed on the Ledger side. This wallet also allows for the use of ErgoMixer, however you must install ErgoMixer on your computer in order to access it with SAFEW. When you click on the ErgoMixer icon in SAFEW, it will prompt you with the necessary link for installation.

If you are interested in minting tokens (including NFTs) on Ergo, SAFEW offers a simple and easy-to-use interface. When you click on the “Mint token” icon, you will see the following:



![](https://lh3.googleusercontent.com/kh3Ld5djyYOt3L__UOLp7b6wjznAiACINmDslQjEt99bTxgg5wVDemBB2tUbr0Zkvr58YEzcuXqmJSafXtkT4sgGxr-j98bO1g2uh23s7FuwwF0CdWR16aSQqgAvaN9UH6_gJb4g)



You will give your token a name, description and select the amount to be minted. If you are minting a picture, audio, or video, you will need to indicate that from the “Token type” dropdown menu. From there, you will be prompted to provide the upload details for the respective artwork.

That’s it! You now have a basic overview of SAFEW. For additional information, you can access the developer’s [ErgoHack III Report](https://docs.ergoplatform.com/events/pdf/SAFEW_ergohack3_report.pdf), or view the video demonstration that is available on the [ErgoTutorials YouTube channel](https://www.youtube.com/watch?v=DFf-dDlCpzM).