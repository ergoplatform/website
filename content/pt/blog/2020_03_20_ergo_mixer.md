---
title: "Introduzindo Σ3 – ErgoMixer"
date: 2020-03-16
author: Equipe Ergo
authorPhoto: "/img/logotype_black_circle.svg"
blogPhoto: "/img/blog/ergo_mixer.jpg"
tags: [Equipe Ergo]
---

_O projeto usa os Protocolos Sigma de Ergo para permitir uma eficiente e descrente mistura de fundos, habilitando um alto grau de privacidade e sem comprometer segurança._

_Ferramenta de demonstração do ErgoMixer via linha de comando com descrição dos detalhes técnicos pode ser encontrada em https://github.com/anon92048/ergo-mixer-demo ._

Os Protocolos Sigma de Ergo podem ser usados para criar muitos casos de uso interessantes em DeFi, com maior simplicidade, eficiência e segurança do que outras plataformas de contratos inteligentes podem oferecer. Criado por um dos membros da comunidade Ergo, @anon92408, Σ3 ("Sigma Três") é um misturador poderoso que funciona agrupando fundos e permitindo que participantes gastem esses fundos sem que qualquer pessoa conheça quem realizou as transações.

## Como funciona?

O conceito-base do misturador é relativamente simples, mesmo que entender a sua operação completa requeira algum conhecimento detalhado de criptografia. (Para aqueles que queiram aprender os detalhes, há mais detalhes, em inglês, no [artigo de lançamento](https://ergoplatform.org/docs/whitepaper.pdf).)

Participantes enviam suas moedas para uma, e essas moedas podem ser gastas por vários membros diferentes da *pool*. Porém, com o uso dos Protocolos Sigma – especificamente assinaturas em anel – fica impossível de saber qual membro gastou essas moedas.

O exemplo mais simples é o caso de uma *pool* em que uma "caixa" de moedas pode ser gasta tanto por Alice quanto por Bob. Tanto Alice quanto Bob podem assinar uma transação e mover as moedas, mas nenhum observador externo será capaz de diferenciar qual dos dois assinou a transação. Isso não é a mesma coisa que transações de múltiplas assinaturas, em que, digamos 2 ou 3 participantes tenham que assinar uma transação; com multi-assinatura, é sabido quem são as duas pessoas que assinaram a transação.

Portanto, qualquer um observando de fora teria uma chance de 50% de adivinhar quem entre Alice e Bob moveu essas moedas. Porém, no ErgoMixer, esse processo é iterado muitas e muitas vezes, com diferentes usuários. Após muitas rodadas, com muitos usuários, é efetivamente impossível de saber quem é o dono das moedas. Ainda, as moedas nunca deixam de estar sob controle do seu dono original – não há risco de perder os fundos.

## ErgoScript

Esse processo pode ser implementado nativamente na blockchain, assim como é o caso com ZCash. Essa rede tem um processo similar ao ErgoMixer programado diretamente na blockchain – que funciona, mas impõe limites na blockchain.

Seria possível implementar algo similar com Ethereum, já que Ethereum tem contratos inteligentes que são Turing-completos e, portanto, pode executar qualquer tarefa computacional. Porém, isso seria pesado, ineficiente e os resultados seriam caros e, possivelmente, arriscados.

Ergo permite que esse tipo de caso de uso seja implementado facilmente usando Protocolos Sigma. ErgoScript inclui suporte nativo para todos as funcionalidades criptográficas e de blockchain necessárias para criar Σ3 na rede Ergo, de forma segura e eficiente.
