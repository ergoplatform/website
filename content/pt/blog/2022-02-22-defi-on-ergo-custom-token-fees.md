---
title: "DeFi em Ergo: Taxas usando Tokens Personalizados"
date: 2022-02-22T16:11:26.585Z
author: Plataforma Ergo
authorPhoto: /img/uploads/symbol_bold__1080px__black.png
blogPhoto: /img/uploads/08_ergoblog_cover_22022022b-1-1-.png
tags:
  - Construindo Ergo
  - Roadmap
---
<!--StartFragment-->

Moedas de infraestrutura são importantes pois precisamos delas para pagas taxas de transações quando usamos sistemas financeiros descentralizados (DeFi, sigla em inglês) e implementamos contratos. A infraestrutura de Finanças Descentralizadas cobre uma variedade de ferramentas, desde corretoras descentralizadas e contratos de seguros até jogos impulsionados por NFTs. Um problema que usuários encaram é a necessidade de carregar moedas adicionais para pagar taxas de transações e continuar usando essas plataformas. O modelo UTXO estendido torna possível o pagamento de taxas com tokens personalizados e não somente com a moeda nativa de infraestrutura. Neste artigo, discutiremos o conceito de [Taxas Babel](https://iohk.io/en/research/library/papers/babel-fees-via-limited-liabilities/)(link em inglês) e suas funcionalidades nas plataformas DeFi.



## Moedas de Infraestrutura



Quando nos referimos a moedas de infraestrutura, estamos falando sobre moedas nativas de Camada 1. Esses ativos são os elementos básicos de uma plataforma de contratos inteligentes que seja funcional. Mineradores precisam ser incentivados a garantir a segurança da plataforma e usuários precisam dessas moedas para aplicações distribuídas como, por exemplo, oráculos, corretoras, protocolos de empréstimos, NFTs, Metaverso e plataformas de mídias sociais. 



Em Web2, provedores de serviços cobram indiretamente os usuários através de compras dentro do aplicativo ou ao vender dados para terceiros. Em Web3, as cobranças são feitas diretamente no momento da assinatura de uma transação, da subida de um contrato para a rede ou da interação com uma aplicação. Os usuários se conectam à Web3 com uma carteira de blockchain não-custodial, assim prevenindo que aplicações Web3 acessem informações sobre a senha da pessoa. Porém, um jogador de videogames pode não querer usar uma aplicação DeFi, o que torna inconveniente para o jogador ter que possuir uma moeda que não seja a moeda do jogo desejado. O modelo UTXO estendido introduz as taxas Babel para pagar taxas de transações em tokens personalizados e resolver este problema.



## Taxas Babel



No ecossistema Ethereum, tokens são vistos como cidadãos secundários quando comparados a moedas de infraestrutura. Taxas de transações não podem ser pagas em tokens personalizados e um usuário comum é forçado a adquirir uma moeda que não é necessariamente útil. Essa situação causa demanda involuntária e pode ser problemática ao causar flutuações sintéticas de preço. O usuário poderia ser prejudicado pela posse involuntária de moedas no seu balanço. Taxas Babel tornam esse processo mais suave através de câmbios instantâneos. Poderia ser justo dizer que esse modelo opera com [trocas atômicas](https://www.moneytimes.com.br/trocas-atomicas-irao-aniquilar-as-corretoras/) construídas ao nível de protocolo.



Uma moeda de infraestrutura ainda será a moeda principal, mas o modelo UTXO estendido permite a implementação de conversão personalizável de taxas de forma não-interativa ao nível de protocolo. Portanto, qualquer usuário interagindo com a blockchain não precisa de qualquer quantidade de moedas indesejadas e pools de liquidez numa camada de governança darão conta das conversões. Em troca, o sistema atinge uma experiência de usuário com menos fricção em uma plataforma descentralizada.



## Taxas com tokens personalizados em Ergo



O conceito de pagamento de taxas usando tokens personalizados foi [introduzido na Ergo](https://www.ergoforum.org/t/ergomixer-zerojoin-mixer-for-erg-and-tokens/318/10?u=root7z)(link em inglês) antes da publicação da extensiva pesquisa sobre Taxas Babel. Para o design do ErgoMixer, uma função de contrato inteligente pode ser adicionada para definir caixas de taxas com IDs de tokens e decimais especificados. Porém, esperamos ver o design de Taxas Babel implementado em vários aspectos de finanças descentralizadas que estão descritos acima. É o fim da já conhecida especulação que usuários precisam possuir tokens nativos para usar a blockchain. O UTXO estendido é um design acessível que abre as portas para todos os tokens e aplicações sem forçá-los a comprar moedas nativas em momentos aleatórios.



Para simplificar o conceito de pagamento de taxas Babel usando tokens personalizados, pesquisadores definiram o processo através da criação de contas anônimas temporárias. Essas contas nunca são incluídas no registro ("ledger", também podendo ser traduzido como "livro-razão"), mas elas são definidas para demonstrar a responsabilidade das pessoas realizando a transação. A responsabilidade dos usuários é chamada de "responsabilidade limitada" - que define quem é deve quanto de qual token para quem no momento da transação. 



Essas contas temporárias simplificam o que está por trás do protocolo de câmbio e permite execuções em bloco de uma maneira não-interativa. Deve-se notar que para toda pessoa que está disposta a fazer uma transação com um token personalizado, deve haver pelo menos um facilitador disposto a aceitar a oferta na taxa de câmbio proposta.



### Conclusão



Resumindo, pagamentos de taxas usando tokens personalizados no modelo UTXO propõe uma experiência de finanças descentralizadas sem atrito e de forma agnóstica. O conceito de Taxas Babel é a reinterpretação do modelo de trocas atômicas que pode ser implementado tanto na blockchain quanto entre blockchains. Usuários e instituições serão capazes de interagir com a blockchain sem a necessidade de possuir quantidades arbitrárias de uma moeda nativa.



<!--EndFragment-->