---
title: "Armazenando Ergo: SAFEW"
date: 2022-03-25T11:24:11.911Z
author: Plataforma Ergo
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/news-blog-41-1-.png
tags:
  - Construindo Ergo
---
Neste artigo, continuamos nossa série de guias para configurar e usar uma das muitas novas carteiras Ergo. Para essa demonstração, nós exploramos a SAFEW (sigla em Inglês para "Carteira Ergo Simples e Rápida"), a 2º Colada do ErgoHack III. Essa carteira de extensão web oferece diversas funcionalidades, incluindo o ErgoPay, interação suave com a ErgoDEX, integração com ErgoMixer, integração com carteira de hardware Ledger (aguardando aprovação dos desenvolvedores da Ledger), cunhagem de token e a habilidade de enviar transações multi-ativos. Enquanto usando a função ErgoPay, a frase-semente mnemônica é armazenada em outro aparelho e as transações são assinadas na carteira Ergo (iOS/Android) via código QR.

## Instalando SAFEW

Para instalar essa carteira, você precisa baixar a última versão no GitHub: [GitHub - ThierryM1212/SAFEW: Simple And Fast Ergo Wallet](https://github.com/ThierryM1212/SAFEW). Por favor, note que usuários de Firefox podem acessar o download aqui: <https://addons.mozilla.org/fr/firefox/addon/safew/>.

A partir do website do Github, clique no último lançamento.



![](https://lh5.googleusercontent.com/YN2Webshgn-5QiEXFE7XnrLIM2KcqCA6WdXo_zR_k3StuEB3dpvAnNBoovVFctBSc7miLO6rQ8JRYcNCrX0CQc6Xegj4Ujhi_dy4giBVOLhs0vIx6du3sQkOotQKCxrJc-735qXK)



Baixe o arquivo compactado.



![](https://lh5.googleusercontent.com/nxnU8tI0XzoD2zL8cu5x_KIff-yq97gB0m3YMMchZd9JLDofeVnv_DFow5EO-yeuaQLsLpCR6xgmYpO3KDpoXtePQeRFWwnV83y_5JLtJBUaJho_uwldn9wC2ZDS7b_oQ_WawVFH)



Uma vez que tenha feito o download, descompresse o arquivo e vá ao menu "Extensões" no seu navegador web (estamos usando o Google Chrome para esta demonstração).



![](https://lh5.googleusercontent.com/eDiqZpexbBCe4wRMRGaXkgjC3RgRMMRvLHJOUaTyqS60lkmMWKFOeepaV1lgjoE9eqU-YfqzB-VNLj95glG5uN-AZwSGBmMM_IoQWQ-FzK_38BFfdsLKAaYvPtc1V7kwzsRskMRu)



Para instalar essa carteira, você precisará ligar o "Modo Desenvolvedor” nas extensões.



![](https://lh5.googleusercontent.com/Bj2LCfIKxQR20kWkDF9R2wBR-DiVcuk4sNyY5FAtSIS2N5r21ItkMteKi1ifT2rRz9Wli9uiM0XtuuvCVP0Ax7xs4FlnFUr6BCd9skxmrQzez-tTxyUdogO74qAhPlRqKufeVYRI)



Uma vez que o "Modo Desenvolvedor" foi iniciado, você selecionará “Carregar descompactado” para instalar os arquivos necessários.



![](https://lh6.googleusercontent.com/10CPGAHtCTYT4Ho4QRSl6LUK-0ZUGcIHMF3IykAuuJ-v7Bo8z_FWtfE6CDh5esLWXSVWfWMpEleG590QwmJBzRAxrfsZowiUccqPTcI4jQiCX795bVwN1mdkqSc7Nj_EONQOnPZD)



Clique na pasta descompactada “SAFEW_0.4.6” e selecione “Selecionar.”

![](https://lh3.googleusercontent.com/qHWzxTdUymX0-neQz13ikorJzs70hCYuzp4vCC2nX6VHq65yNLvYi0FtIL7_nLUfF3De_T7Eykje_Qa2WyVlY5gdwVEMTX1g3OXPIEYBMKQ2gxmilYneKfrsv4FaWwI7Xw40iNmG)

Agora, você adicionou a carteira às suas extensões.



![](https://lh6.googleusercontent.com/tyF9dmTmU5fZwa4og8Iy5Z6hG8AOiXZc44L2Pvt2aC57ef4pUUrj87G5S5u0XI9tfr_pZV3dO51smBoWYF2fwbzRgThWuJoYcnf1woSbEm7Xd8BkVHPHLOQ0LVHm-vqMy3dtKO1R)



Agora que carregamos a carteira, vamos abri-la. Vá a suas extensões (a peça de quebra-cabeças perto do canto superior direito do seu navegador) e abra a carteira (“Carteira Ergo Simples e Rápida”). Você, então, será pedido para aceitar o aviso legal. Após aceitar o aviso legal, você será levado a seguinte tela:

![](https://lh6.googleusercontent.com/xblGgibN1LT69JCZYl0V0UI0q-UIgzGL5FegyCM6LExutFRHdfL-wLo0zUTL66cpOEuuuola2NHRomHyGVi4zfmTwsjOdjKFWolzPaaH_i_QWJibP_Da6mI3Y-I9B71qmzti6T3s)



Os dois ícones que estão destacados na imagem acima lhe permitem “Adicionar Nova Carteira” ou “Adicionar uma nova Carteira ErgoPay”. Se você selecionar “Adicionar Nova Carteira”, você será capaz de restaurar uma carteira existente ou criar uma carteira inteiramente nova. Com “Adicionar uma Carteira ErgoPay”, um usuário é capaz de habilitar a assinatura de transações, onde elas são assinadas usando a [Carteira Ergo ](https://ergoplatform.org/pt/mobile_wallets/) para iOS e Android.

Passar o seu mouse sobre os outros ícones irá indicar suas funções. Elas incluem:

* Lista de Carteiras
* Cunhar tokens
* [ErgoMixer](https://ergoplatform.org/pt/blog/2021-05-12-ergomixer/)
* Desconectar Carteiras
* Configurações

## Criando/Restaurando uma Carteira

Para criar ou restaurar uma carteira, clique no ícone “Adicione Nova Carteira”. Você irá ver a seguinte tela:

![](https://lh4.googleusercontent.com/9PGzOTN4CXRRpd6ze7wiroiGBr5id6gI2XDP2AlvJno5LDXZ9_lYCEYoUp1T4H9E4qFhjsmowMSsOR95ISknP21ugs3b3n2oB2sTjVHzQIkJjaX8eM4GtCjBjHUCPf1V7AqeDLzb)



Se você já possuir uma carteira Ergo, você pode simplesmente restaurá-la na SAFEW ao inserir sua frase-semente mnemônica. Se você está criando uma nova carteira Ergo, você precisará de uma nova frase-semente mnemônica. Na imagem acima, você irá notar o seguinte: “Obter mnemônica aleatória”. Você tem a opção de selecionar uma frase com 12, 15, 18, 21, ou 24 palavras. Para os propósitos desta demonstração, selecionaremos uma mnemônica com 18 palavras. Vamos seguir os passos para criação de uma carteira.



![](https://lh3.googleusercontent.com/bjKU9XwXuWFxnJODD12O87DW7L0tXDsaHK7lK5YxChudSZx6KkxvKoJUtjUgMLWf66l1khJW-7DabbWVgAS6nbqtEfHiRyt0RvLV6O-2z54ZYvdeMCZEAB1RVFonv-p64sTRgtMs)

Dê um nome a sua carteira (escolhemos “Carteira Teste”), escreva sua frase-semente mnemônica e crie uma senha para gastos. Com a SAFEW, você pode até escolher diferentes cores para suas várias carteiras Ergo.

AVISO LEGAL: Nunca armazene sua senha e frase-semente mnemônica digitalmente. É uma prática recomendada escrever sua frase-semente mnemônica em um papel e armazená-lo em um lugar seguro. Se você perder acessar à sua carteira, a frase-semente mnemônica é a ÚNICA forma de recuperar seus bens.

Uma vez que você tenha criado uma nova carteira, você verá o seguinte:



![](https://lh5.googleusercontent.com/_PAXrFEdbmGbbqqSny9iFIXPuGKj1cxublwI84PN2F5ABO0k7-Um43iWlzx3yuFHa57VgZgU4Ou-W8zUdHJI4TKB_CFEro9pFJDE7K2CR-lqVwZHpUjaWIXGZnGf7nCcrlrN295E)



Funções:

* Detalhes da Carteira - selecionar esse ícone irá mostrar seu endereço de recebimento. Esse é o endereço que você fornece para receber ativos em Ergo.
* Enviar ativos - essa funcionalidade lhe mostra uma tela (ver abaixo) onde você pode inserir um endereço de recebimento e selecionar ativos para enviar para outra carteira Ergo ou dApp. 
* Lista de Transações - irá simplesmente mostrar todas as transações que tenham ocorrido com essa carteira.
* Editar Carteira - opções para mudar sua senha, nome da carteira e endereço de recebimento. Você pode também converter a carteira a uma carteira ErgoPay, fazer uma cópia de segurança da carteira ou apagar a carteira.

![](https://lh3.googleusercontent.com/IQ_5iN7FUhW58WmUl4o1u7IuMjCbINwrl-cpyI6w2EC8Hb_EngKu4YbwGK-pnqPZsV6q1qkSiCZT_az7RAJIS1aBY-tkacT50dP3N5iu_soD50rJe190bSid4KnoUfIsesveT-Cj)



## Outras funcionalidades da SAFEW

Como mencionamos anteriormente, os usuários podem esperar integração com a Ledger assim que o trabalho esteja pronto no lado da Ledger. Essa carteira também permite o uso do ErgoMixer, mas você deve instalar o ErgoMixer no seu computador para acessá-lo com a SAFEW. Quando você clicar no ícone do ErgoMixer na SAFEW, ele irá levá-lo ao link necessário para a instalação.

Se você estiver interessado em cunhar tokens (incluindo NFTs) na Ergo, a SAFEW oferece uma interface simples e fácil de ser usada. Quando você clica no ícone “Cunhar token”, você verá o seguinte:



![](https://lh3.googleusercontent.com/kh3Ld5djyYOt3L__UOLp7b6wjznAiACINmDslQjEt99bTxgg5wVDemBB2tUbr0Zkvr58YEzcuXqmJSafXtkT4sgGxr-j98bO1g2uh23s7FuwwF0CdWR16aSQqgAvaN9UH6_gJb4g)


Você dará a seu token um nome, uma descrição e selecionará a quantidade a ser cunhada. Se você está cunhando uma figura, áudio ou vídeo, você precisará indicar isso no menu “Tipo de Token”. A partir daí, você será requisitado a fornecer os detalhes de upload para o respectivo trabalho de arte.

E é isso! Você agora tem uma visão geral básica da SAFEW. Para informações adicionais, você pode acessar o [Relatório ErgoHack III](https://docs.ergoplatform.com/events/pdf/SAFEW_ergohack3_report.pdf) dos desenvolvedores ou ver o vídeo demonstrativo que está disponível no [canal do YouTube chamado ErgoTutorials](https://www.youtube.com/watch?v=DFf-dDlCpzM).