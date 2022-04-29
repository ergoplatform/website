---
title: "EIP-0028: ErgoAuth"
date: 2022-04-29T06:16:44.861Z
author: Plataforma Ergo
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/news-blog-31.png
tags:
  - Construindo Ergo
---
Ao debater sobre blockchain, é importante lembrar que carteiras são completamente anônimas. Em Ergo, você não sabe quem é dono de uma carteira específica. Devido à todas as transações serem públicas, este é um importante aspecto das carteiras em blockchain - se você sabe quem é o dono de uma carteira, você pode ver todos os bens dessas pessoas, suas transações e quaisquer outras carteiras que interajam com essa.

Dito isto, existem situações em que pode ser útil, ou até mesmo necessário, provar quem tem acesso a uma certa carteira. Um possível cenário é interação entre jogos em uma blockchain. Uma situação comum pode surgir quando tokens são usados como elementos em jogos e somente jogadores que sejam donos de certos tokens podem participar em ações específicas. Como pode-se saber se um jogador realmente tem acesso a uma carteira que eles pretendem ter?

Nessa situação, jogos podem depender somente de pedir que um jogador faça uma transação usando a carteira que contenha o token em questão. Essa abordagem possui pontos negativos óbvios: o jogador tem que fazer uma transação e pagar taxas de transação, além de a transação poder levar vários minutos para ser confirmada.

Para resolver esta questão, desenvolvedores de Ergo propuseram o ***EIP-0028 ErgoAuth***. A proposta já está implementada no Appkit, o SDK de Ergo, e irá integrar a próxima versão 1.9 do app Ergo Wallet.

O ErgoAuth evita a necessidade de fazer uma transação na blockchain ao definir um protocolo similar diretamente entre uma aplicação de carteira e um servidor executado pela parte em questão que queira autenticar um usuário. Funciona da seguinte forma:

* O jogo (ou dApp, website, etc.), que quer verificar se um usuário tem acesso a uma certa carteira, mostra um código QR para ser escaneado com um app de carteira - ou apresenta um botão para abrir o aplicativo da carteira.
* Isto fará com que o aplicativo de carteira contacte o servidor do jogo e requeira informações específicas. A carteira precisa saber qual endereço o usuário deve autenticar, já que podem haver múltiplos endereços.
* O aplicativo da carteira mostrará ao usuário uma tela e pergunta se ele quer fornecer acesso. Quando o usuário confirma, o aplicativo da carteira assinará a mensagem enviada pelo servidor do jogo com as chaves privadas e envia de volta a mensagem assinada.
* O servidor do jogo agora pode verificar (ao usar o Appkit ou uma implementação própria) se a prova enviada pelo usuário é válida e que o usuário possui acesso a carteira.

Desenvolvedores podem começar integrando o ErgoAuth em suas aplicações agora mesmo. Para mais informações detalhadas, por favor veja [EIP-0028](https://github.com/ergoplatform/eips/blob/ccfe51957f75e24f0750b2813d694bd938851f7e/eip-0028.md) e os links correspondentes para exemplos de código.