---
title: NFTs em Ergo
date: 2020-09-25T05:58:46.784Z
author: Guy Brandon
authorPhoto: /img/uploads/guy_brandon.jpg
blogPhoto: /img/uploads/nick-karvounis-fmd8tikf8bo-unsplash.jpg
tags:
  - Construindo Ergo
---
<!--StartFragment-->

*Assim como em quase todas as áreas de DeFi, a Plataforma Ergo aborda NFTs de uma maneira diferente que oferece alguns benefícios e casos de uso interessantes e únicos.*

NFTs parecem prontos para se tornar a próxima grande fronteira para blockchain. Durante este ano, cripto se tornou uma forma aceitável e [praticamente convencional (link em inglês)](https://ir.microstrategy.com/news-releases/news-release-details/microstrategy-adopts-bitcoin-primary-treasury-reserve-asset) (mesmo que ainda nova) de reserva de valor e proteção contra inflação. O [surgimento de DeFi](https://ergoplatform.org/pt/blog/2020-09-03-some-thoughts-about-defi-yield-farming-and-how-open-systems-should-be-used/) como um caso de uso para blockchain nos últimos meses tem sido similarmente impressionante, independentemente dos [problemas que ainda precisam ser resolvidos](https://ergoplatform.org/pt/blog/2020-09-17-defi-finance-but-not-always-decentralised/).

NFTs são uma intrigante classe de ativos que oferece uma funcionalidade que é ao mesmo tempo familiar aos usuários do mundo real e vai muito além de qualquer coisa que tenha sido possível anteriormente.

NFTs (sigla em inglês para Tokens Não-Fungíveis) são tokens únicos e indivisíveis em uma blockchain. Eles podem ser usados para representar e prover posse de produtos digitais, tais como peças de arte, itens ou personagens em jogos, cartas colecionáveis virtuais  e muito, muito mais. Porque um NFT pode ser usado para representar propriedade em última instância, eles permitem que usuários possam negociar itens digitais e criptograficamente garantir procedência.

NFTs estão se tornando um grande negócio. É um sub-setor emergente para blockchain, mas um setor que é previsto que cresça rapidamente. A quantidade de itens tokenizáveis levou um analista a sugerir que esse caso de uso de mais de U$100 milhões um dia [se torne um mercado de mais de um trilhão de dólares](https://news.bitcoin.com/the-tokenized-metaverse-non-fungible-token-sales-to-surpass-100-million/) (link em inglês).

**NFTs UTXO**

A maioria dos NFTs são atualmente hospedados em Ethereum, enquanto grandes mercados como [Rarible](https://rarible.com/) permitem que criadores possam vender seus trabalhos e que outros usuários possam comprar e negociar esses trabalhos no mercado secundário. Com altas taxas de transação, os custos associados com cunhagem e negociação de NFTs podem ser proibitivamente altos. Independentemente de outros prós e contras, há benefícios em se usar uma plataforma que possui tanto baixas taxas de transação quando um plano de longo prazo para escalabilidade.

Porém, assim como o modelo de UTXO estendido de Ergo possibilita uma [abordagem diferente para Oráculos](https://ergoplatform.org/pt/blog/2020-08-31-ergos-oracle-pools-and-what-they-mean-for-the-ecosystem/) e outras partes críticas de infraestrutura de blockchain como contratos inteligentes, ele também permite inovação em NFTs.

Uma funcionalidade interessante é o fato de que Ergo pode ser usada para criar NFTs que sejam apoiados por Prova-de-Trabalho. Para a maioria dos NFTs, um usuário simplesmente gera um UTXO com o contrato do token anexado. Mas, também é possível que mineradores criem NFTs especiais, onde o id de um token recém-cunhado é o id de uma transação de moeda. Isso tem [todo tipo de potenciais casos de uso](https://www.ergoforum.org/t/proof-of-work-backed-tokens/224/2), mas a ideia principal é que um minerador tem a oportunidade de criar um NFT especial quando minerar um bloco. Enquanto qualquer quantidade de NFTs pode ser criada via um contrato inteligente normal, apenas um número finito desses NFTs apoiados por Prova-de-Trabalho pode existir.

Uma aplicação trivial disso é a criação de coleções: imagine, por exemplo, um NFT que comemora o milionésimo bloco da blockchain. As recompensas do bloco são fungíveis e podem ser gastas assim como qualquer outra moeda, mas aquele NFT é único. Ele pode ser apenas gerado uma vez, no momento em que o bloco é cunhado, e apenas o minerador que adicionou aquele bloco à blockchain pode fazê-lo.

**Identidade Inesquecível**

Existem outras aplicações de NFTs que usam o modelo UTXO estendido, incluindo a facilitação de uma nova geração de dApps complexos. Por exemplo, um criador de um dApp pode gerar um NFT associado com um endereço e contrato inteligente. Enquanto qualquer um pode usar aquele contrato, e até mesmo criar uma transação usando a chave privada daquele endereço, o dono do NFT pode ainda assim manter direitos administrativos ou outros privilégios.

Digamos que você crie um bem-sucedido dApp de corretora, que paga uma pequena taxa percentual de negociação para o dono – designado pela posse daquele NFT. Aquele token, e faturamentos futuros, agora podem ser transferidos e vendidos. O token também pode ser administrado por um contrato inteligente secundário, que pode dividir receitas entre 100 tokens representando acionistas. O NFT poderia ser usado para atualizar o dApp, ou desligá-lo, se necessário – quaisquer condições que fossem programadas nele. O ponto é que o NFT fornece prova de identidade garantida e inesquecível.

Esses casos de uso apenas tocam a superfície do que é possível com NFTs em Ergo. Esperamos ver como o ecossistema se desenvolve, tanto na Plataforma Ergo quanto no espaço NFT como um todo.

<!--EndFragment-->