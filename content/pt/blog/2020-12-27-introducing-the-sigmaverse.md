---
title: Introdução ao Sigmaverso
date: 2020-12-27T20:20:01.390Z
author: Equipe Ergo
authorPhoto: /img/uploads/logotype_black_circle.svg
blogPhoto: /img/uploads/frame-1.png
tags:
  - Construindo Ergo
  - Equipe Ergo
---
*Seu portal para o universo de dApps em Ergo está se abrindo.*

Ergo possui uma tecnologia maravilhosa e desenvolvedores muito talentosos. Porém, como uma plataforma descentralizada e empoderada pela comunidade, não é sempre fácil de saber o que está acontecendo o tempo inteiro. Diferentes pessoas estão desenvolvendo diferentes dApps e casos de uso, formal ou informalmente. Não é sempre fácil conectar esses projetos à mesma base de usuários para criação de um efeito de rede, tão importante em DeFi.

O [Sigmaverso](https://sigmaverse.io) é sobre isso. Sigmaverso é um portal que reúne todo o ecossistema dApp de Ergo: um lugar onde usuários podem encontrar todas as funcionalidades legais que desenvolvedores da comunidade estão construindo em Ergo. Tudo em um lugar só.

A ideia é que desenvolvedores possam criar seus apps e então listá-los no Sigmaverso usando GitHub.

Conforme se torne o website padrão para acesso a dApps, mais e mais desenvolvedores adicionarão os seus, tornando mais fácil o aprendizado sobre novas inclusões no ecossistema. Uma barra de buscas permite que usuários possam procurar por um tipo específico de dApp.

Até agora, cinco dApps estão listados no Sigmaverso:

* [Ergo Auction House](https://ergoauctions.org/): mercado de NFTs ([leia mais](https://ergoplatform.org/pt/blog/2020-10-16-announcing-the-auction-house-nft-marketplace-on-ergo/))
* [ErgoMixer](https://github.com/ergoMixer/ergoMixBack): misturador de confiança-zero, auto-governado, para ERG tokens em Ergo ([leia mais](https://ergoplatform.org/pt/blog/2020_03_20_ergo_mixer/))
* [ErgoUtils](https://ergoutils.org/): Emita tokens e NFTs 
* [Pools Oráculo](https://explorer.ergoplatform.com/en/oracle-pools-list): oráculos através de uma abordagem descentralizada usando UTXO estendidos ([leia mais](https://ergoplatform.org/pt/blog/2020-08-31-ergos-oracle-pools-and-what-they-mean-for-the-ecosystem/))
* [Tesouro de Conhecimento-Zero](https://github.com/anon-real/DistributedSigsServer): crie assinaturas digitais conjuntas com condições sobre medida ([leia mais](https://ergoplatform.org/pt/blog/2020-09-04-announcing-the-zk-treasury-on-ergo/))

Para incluir seu dApp no Sigmaverso, crie uma nova pasta em https://github.com/ergoplatform/sigmaverse/applications com o nome do seu dApp. Dentro desta pasta, crie um novo arquivo chamado *overview.md*, com a seguinte estrutura:

```markdown
------
name: "nome do dApp"
description: "descrição do dApp"
website: "website do dApp"
logo_image: “{NomeDoLogotipo}” – se quiser incluir logotipo, salve a imagem em applications/{NomeDodApp}/{NomeDoLogotipo}
preview_image: “{NomeDaPreVisualizacao}” – se quiser incluir pré-visualização, salve a imagem em applications/{NomeDodApp}/{NomeDaPreVisualizacao}
appCategory: [“web” e/ou “cli” e/ou “desktop”] – escolher uma ou mais categorias
------
```

É isso! O processo é rápido e direto. Para ver dApps já disponíveis no Sigmaverso, visite [](http://sigmaverse.io/)[Sigmaverse.io](https://sigmaverse.io).