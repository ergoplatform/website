---
title: Contratos Multi-Estágio
date: 2021-04-16T18:59:23.428Z
author: root7Z
authorPhoto: /img/uploads/rootz-the-storyteller-4root7z.png
blogPhoto: /img/uploads/mask-group.png
tags:
  - Construindo Ergo
---
<!--StartFragment-->

#### *Contratos Inteligentes* são a espinha dorsal das *finanças descentralizadas*. Através de contratos inteligentes, usuários podem interagir com *dApps* sem intermediários. Design de *blockchain* possui um impacto significante nas capacidades dos contratos inteligentes. O modelo UTXO da Blockchain Ergo permite que *contratos multi-estágio* operem em uma rede altamente escalável.

### **Finanças Descentralizadas**

O sistema bancário é construído unicamente na base da confiança. Porém, esse mecanismo de confiança é uma forma de obrigação em que os cidadãos não possuem voz. Bancos e instituições financeiras produzem e fornecem *produtos financeiros* como empréstimos ou [ETFs](https://www.infomoney.com.br/guias/etf-exchange-traded-fund/) para mercados financeiros. O valor desses produtos é definido pelo que eles se referem como um ativo de verdade, seja um objeto físico ou um contrato. A credibilidade do valor, porém, está protegida pela nossa confiança cega nessas instituições. Governos dão suporte a essas instituições financeiras para restaurar confiança, mas até que ponto elas são *confiáveis*?

O problema está em outro lugar. Não perguntamos se nossas ações são genuínas ou se são uma duplicação falsa. Tudo está funcionando em uma base de dados digital e podemos ver se é real. Podemos ver nosso dinheiro na nossa conta no banco, mas mesmo assim, não significa que é real. O sistema monetário moderno funciona como um *sistema bancário fracionário*, então sabemos que aproximadamente só 10% do dinheiro em circulação é dinheiro de verdade. Continuamos confiando nas instituições financeiras como se elas possuíssem alguma garantia para nosso dinheiro nos bancos. Porém, como podemos ver na História, durante “corridas aos bancos" ou “crises de dívida", não é fácil controlar um vasto sistema financeiro e prever esse tipo de evento inesperado. Então, o resultado disso geralmente afeta os *usuários individuais* ao invés de grandes instituições.

*Contratos inteligentes* são, portanto, construídos para isso, para que você saiba onde seu dinheiro está o tempo todo. Seja qual for a aplicação que você usar, se contratos inteligentes a governarem, então você sabe como seus fundos estão resguardados. Esta é a beleza de um sistema financeiro *sem custódia*; você não tem que entregar seus fundos para uma instituição financeira para usar os serviços dela. Você pode usar uma variedade de serviços financeiros sem abrir mão da custódia dos seus fundos. Você não tem que pagar taxas absurdas para seu banco resguardar seus fundos. Não só isso, mas você pode até mesmo ganhar dinheiro usando contratos inteligentes ao *tomar iniciativas* como emprestar seus fundos ou prover liquidez para mercados. Essas são algumas estratégias que blockchain vislumbra em um sistema financeiro descentralizado, voltado às pessoas, seguro e acessível.

### **Contratos Multi-Estágio em Ergo**

Você já ouviu falar de contratos inteligentes, mas o que são contratos multi-estágio? Contratos multi-estágio referem-se a contratos inteligentes que estão operando em um nível "*com estado*" (tradução livre de "*stateful*"). Por Ergo usar o *modelo UTXO* (primeiro visto em Bitcoin), é possível processar ações paralelizadas em cima de contratos inteligentes. O *modelo baseado em contas* de Ethereum, porém, não permite tais operações. O modelo baseado em contas é fácil de ser usado, mas também vem com uma alta carga de poder operacional. Os contratos multi-estágio de Ergo são desenvolvidos no modelo de UTXO estendido de Ergo. É um design complexo que almeja *escalabilidade infinita*; portanto, cria mais espaço para construção de soluções complexas.

Para que uma blockchain contenha contratos inteligentes, ela deve ter *loops*. Esses loops podem depois referir-se a si mesmos e verificar se uma operação está funcionando ou não. O design UTXO de Bitcoin é bem primitivo e não contém contratos inteligentes que sejam Turing-completos. Ethereum possui essa capacidade, mas é uma versão primitiva de uma linguagem Turing-completa. A blockchain Ergo fornece uma abordagem diferente a contratos multi-estágio, empoderada pelo modelo *UTXP estendido*, o que proporciona uma rede mais leve e casos de uso mais amplos.

### Casos de **Uso** **de Ergo**

    *Oráculos:* Oráculos são as mensagens que entram e saem de blockchains. Eles contém dados valiosos (e.g. sequência de preços) para que aplicações funcionem perfeitamente. O design da blockchain Ergo permite a existência de *Pools Oráculo*, e isso ajudaria a criação de hierarquia de dados. Um sistema de oráculos que pode ser pontuado no que diz respeito a seu nível de confiança é um fenômeno significativo. Oráculos na rede Chainlink não são capazes de formas pools porque são construídos na rede Ethereum. Ainda assim, Chainlink recentemente publicou um artigo sobre redes computacionais descentralizadas interagindo com blockchains, uma ideia que Ergo já está trabalhando usando pools oráculo.

    *NIPoPoWs*: Provas Não-Interativas de Provas-de-Trabalho podem ser usadas para construção de um ecossistema blockchain interoperacional. Com a implementação de NIPoPoWs, a blockchain Ergo pode interagir com os contratos inteligentes em redes com mecanismo de consenso em Prova-de-Participação. Isso abriria um caso de uso integrado entre diferentes dApps em diferentes blockchains. Cardano já está planejando implementar *sidechains* com NIPoPoWs em colaboração com a EMURGO. Limites ainda precisam ser descobertos. 

   *Multi-Assinatura:* Multi-Assinatura ou Multi-Provadores são úteis para a confiabilidade dos contratos inteligentes. Esse tipo de implementação é vital para segurança, já que contratos inteligentes não devem estar em controle de uma pessoa só, mas sim governados por múltiplas contas. Contratos multi-assinatura podem também ser projetados para punir atores maliciosos que tentem controlar contratos inteligentes.

   *Época Temporal:* A blockchain Ergo pode ser projetada para ter operações dependentes do tempo. Por exemplo, durante um *ICO* (ou *IDO*), um código em um contrato inteligente pode fornecer um *um lançamento com tempo marcado* para que investidores tenham uma camada de proteção caso o(a) dono(a) do projeto não esteja entregando suas promessas. Em Ethereum, programar esse tipo de operação temporizada não é possível. 

   *Parachain/Sidechains:* Essa é uma área da Blockchain Ergo ainda a se desenvolver. É certamente possível e sabemos que a implementação de parachains possui um significante impacto na escalabilidade. Nosso principal desenvolvedor, *Alex Chepurnoy*, está prestes a lançar um artigo sobre isso, então fique atento!

Fontes:

<https://ergoplatform.org/docs/teaser.pdf>

[https://ergoplatform.org/docs/ErgoScript.pdf](https://ergoplatform.org/docs/teaser.pdf)

[Contratos multi-assinaturas no Modelo UTXO: por Alexander Chepurnoy & Amitabh Saxena](https://www.youtube.com/watch?v=g3FlM_WOwBU) (em inglês)

<!--EndFragment-->