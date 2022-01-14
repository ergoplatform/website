---
title: "Ergo & Blockchain: Tecnologia e Inovação"
date: 2021-12-28T20:47:56.308Z
author: Plataforma Ergo
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/tech-1-2-1-1-.png
tags:
  - Construindo Ergo
---
<!--StartFragment-->

Neste quarto artigo da [série Ergo & Blockchain](https://ergoplatform.org/pt/blog/2021-10-26-ergo-blockchain-cryptocurrency-sphere/), descreveremos tecnologia blockchain em diferentes camadas de estrutura. Atualmente, existem mais de dez mil criptomoedas listadas no website CoinGecko, muito embora existam apenas alguns projetos construindo plataformas financeiras inovadoras e descentralizadas. 

A ideia inicial por trás de Bitcoin dependia da promessa de comércio protegido contra pontos de falha que sejam centralizados. 

Neste artigo, explicaremos tecnologia e inovação nas três camadas de blockchain: camada 0, camada 1 e camada 2.

Camada 0 se refere à camada de rede / referência da blockchain - também chamada de camada *off-chain*. 

Camada 1 é a camada de contratos inteligentes, além de se a camada de transações *on-chain*. 

Camada 2 pode se referir a off-chain, on-chain ou uma combinação de ambas. 

## Camada de Rede

### Modelos PoW e PoS

Bitcoin revelou uma solução para o [Problema dos Generais Bizantinos](https://pt.wikipedia.org/wiki/Problema_dos_dois_generais) ao introduzir o mecanismo PoW (sigla em inglês para [Prova-de-Trabalho](https://pt.wikipedia.org/wiki/Prova_de_trabalho)). Neste modelo, nós mineradores podem validar novas transações ao alcançar consenso. O modelo PoW permite uma rede descentralizada tolerante a falhas e cria uma nova forma de dinheiro digital, conhecida como criptomoeda. 

*Exemplos de projetos PoW: Bitcoin, Ergo, Ethereum, Monero, Litecoin, Ravencoin, Digibyte, ZCash*

Outra solução para o Problema dos Generais Bizantinos foi desenvolvida através do uso de PoS (sigla em inglês para [Prova-de-Participação](https://pt.wikipedia.org/wiki/Prova_de_participa%C3%A7%C3%A3o)). Neste modelo, pools de delegação fornecem o consenso para transações. Existem também diferentes requisitos para se operar uma pool de delegação, tais como hospedar uma quantidade mínida de tokens e requisitar computadores específicos. 

*Exemplos de projetos PoS: Cardano, Algorand, Cosmos, Polkadot, Solana, Avalanche, Tezos, Waves*

PoW e PoS são duas soluções conhecidas para alcançar consenso em uma blockchain pública. Porém, essas suas soluções não são livres de falhas inerentes: PoW precisa evitar pools de mineração centralizadas e PoS precisa evitar centralização tokens nas mãos de poucos. Ao avaliar sua eficiência energética, o design do protocolo PoS é frequentemente considerado uma alternativa "mais verde", enquanto PoW depende de quantidades maiores de eletricidade para manter a rede segura e operacional.

**Ergo escolheu o modelo PoW por dois motivos:**

* Primeiro, garantia a execução de um lançamento justo (acesso igualitário a todas as moedas através de mineração). 
* Segundo, desde o início de Bitcoin, PoW foi provado como um modelo de blockchain seguro (ver: [Efeito Lindy](https://pt.wikipedia.org/wiki/Efeito_Lindy)). Autolykos v2, o algoritmo de consenso de Ergo, é um modelo minerável em GPUs e exige menos do hardware de mineração ao operar o hardware em temperaturas mais baixas que outros algoritmos. 

### Modelos UTXO e de Contas

Além dos dois modelos de consenso, também existem dois modelos diferentes de disponibilidade de dados, conhecidos como modelo UTXO e modelo de Contas. No artigo que lançou Bitcoin, UTXO não é mencionado. Em vez disso, pesquisadores, a posteriori, deram a este modelo o nome UTXO porque a soma de todas Saídas Não-Gastas de Transações (tradução livre de "Unspent Transaction Outputs") de uso único representa a blockchain inteira. O modelo de Contas (como descrito no artigo que lançou Ethereum) representa contas que contém balanço de moedas na blockchain. O número de contas na blockchain é sempre crescente. 

Cada um desses modelos aplica uma lógica única. O modelo de Ethereum depende fortemente de computações on-chain, resultando em congestão da rede. Bitcoin também tem problemas similares com congestão de rede e ambos os modelos aplicam diferentes soluções para atacar estes problemas de escalabilidade. Uma solução direta (e indesejada) para o problema de escalabilidade é limitar o número de nós ao tornar necessária a execução de nós em hardwares de última linha, mas isso consequentemente pode levar a centralização da blockchain.

Seguindo Bitcoin, o modelo de contas de Ethereum introduziu um design de blockchain mais flexível com capacidade para contratos inteligentes. A plataforma Ethereum oferece a habilidade de produzir outros tokens na plataforma e é por isso que vimos um boom de ICOs alguns anos atrás. Ideias novas, como NFTs, DAOs e apps DeFi, nasceram de comunidades de Ethereum. A maioria das outras blockchains aplicaram o design de Ethereum com pequenas modificações e é por isso que vemos muitas blockchains "novas" lançadas com capacidade para rodar EVM (sigla em inglês para Máquina Virtual de Ethereum).

*Exemplos de modelos de Contas: Ethereum, Tron, Solana, Avalanche (C Chain), Binance Smart Chain, EOS*

O modelo UTXO tem mais flexibilidade no seu design off-chain ao combinar tanto computações on-chain quanto off-chain para aumentar a escalabilidade da blockchain. Similarmente, o UTXO estendido (implantado por Ergo e Cardano) possui mais [composibilidade](https://artigos.wiki/blog/en/Universal_composability) de dados que o modelo de contas, facilitando a escalabilidade e implantação de dApps em outras blockchains. O modelo UTXO tem certas vantagens no que diz respeito à escalabilidade e privacidade ao se utilizar de computações off-chain e endereços UTXO de uso único.

*Exemplos de modelo UTXO: Cardano, Ergo, Digibyte, Ravencoin, Bitcoin, Komodo, Avalanche (X Chain), Monero, ZCash*

Ambos os modelos podem implementar soluções diferentes para eficiência de disponibilidade de dados (conhecias como soluções de Camada 2), e.g. canais de pagamentos, side-chains, canais-estado, *sharding* e/ou *zk-rollups*.

## Camada de Aplicação

### Aplicações Distribuídas

Bitcoin carece de uma linguagem Turing-completa e não emprega contratos inteligentes complexos. Em Ethereum, contratos inteligentes existem principalmente on-chain e são executados em uma EVM. Em Ergo, algumas partes dos dApps estão off-chain e algumas acontecem on-chain. Portanto, a lógica eUTXO off-chain de Ergo permite a execução de nós de dApps localmente em um computador de um usuário e introduz novos designs para aplicações distribuídas.

Hoje, um desenvolvedor de Ethereum precisa operar um nó completo que contenha todos os dados da rede. O [atual estado de Ethereum](https://etherscan.io/chartsync/chaindefault) contém mais de 340 GB de dados e aumenta em uma taxa enorme. Os desenvolvedores encontram soluções ao alugar computadores virtuais de empresas como AWS e Google Cloud. Em troca, vemos que apenas alguns nós hospedam todos aqueles apps chamados descentralizados. A lógica de contas de Ethereum é mais limitada em distribuir armazenamento para o backend dos apps porque todos os nós precisam ter informação de toda a blockchain. Portanto, o problema de armazenamento continuamente leva a uma blockchain mais cara para indivíduos.

Em Ergo, o design eUTXO introduz um jeito único de superar problemas de segurança e escalabilidade na camada de aplicações. Usuários de aplicações serão capazes de rodar nós leves para participar diretamente da governança de uma aplicação. Ao introduzir nós leves e clientes leves e criar clientes verdadeiramente sem estado, desenvolvedores, mineradores e usuários podem distribuir a rede com [*bootstrapping leve*](https://ergoplatform.org/pt/blog/2021-07-19-mining-in-logarithmic-space-nipopow-power-and-ergo/) e aumenta colaboração na plataforma. Para mais informações sobre lógicas off-chain e design eUTXO, por favor veja este [artigo](https://ergoplatform.org/pt/blog/2021-10-04-off-chain-logic-and-eutxo/). 

### Privacidade Opcional 

Outro tópico de debate em criptomoedas é anonimidade financeira e privacidade. Endereços de Bitcoin não estão diretamente conectadas a identidades pessoais. Assim, a rede fornece a usuários um nível de pseudo-anonimidade. Porém, usuários precisam depender de serviços centralizados de mistura de moedas para esconder suas transações e manter privacidade. 

Monero, um dos exemplos mais populares de criptomoedas voltadas a privacidade, fornece uma criptomoeda completamente privada. Tanto endereços quanto transações são privadas e ninguém pode extrair detalhes da atividade na blockchain. É uma criptomoeda altamente privatizada, mas, por ser completamente anônima, carece de flexibilidade para ganhar adoção em massa.

Privacidade opcional oferece flexibilidade entre esses dois extremos. Pessoas e organizações precisam de privacidade e transparência em vários graus. Ergo, ZCash e Dash são alguns dos projetos com funcionalidades de privacidade opcional. Privacidade opcional torna possível a implementação de diferentes estruturas para organização com e sem fins lucrativos. 

Privacidade opcional permite a criação de camadas de transparência com segurança criptográfica e descentralizada. Essa opção torna possível a construção de uma blockchain pública com casos de uso comerciais - usuários e organizações devem ser capazes de escolher o nível de privacidade que atende às suas necessidades. Por exemplo, ao usar ErgoMixers hospedados localmente, ps usuários tem opções de privacidade em cima de outros dApps em Ergo, e.g. ErgoDEX. 

Com privacidade opcional, o grau de privacidade na blockchain pode ser configurado e também composto com outras aplicações. A flexibilidade e composibilidade da blockchain são aspectos incrivelmente importantes para conseguirmos adoção em massa.

Além das camadas de rede e aplicação, também há a Camada 2, que inclui componentes tanto off-chain quanto on-chain, e.g. side-chains, canais-estado, canais de pagamento ou canais privados, sharding, etc. O próximo artigo, intitulado "Ergo & Blockchain: Escalabilidade & Adoção", explicará em mais detalhes as redes de Camada 2.

**Artigos anteriores:**

[Ergo & Blockchain: "Criptosfera"](https://ergoplatform.org/pt/blog/2021-10-26-ergo-blockchain-cryptocurrency-sphere/)

[Ergo & Blockchain: Economia de Token e Finanças](https://ergoplatform.org/pt/blog/2021-11-05-ergo-blockchain-tokenomics-and-finance/)

[Ergo & Blockchain: Privacidade e Segurança](https://ergoplatform.org/pt/blog/2021-12-02-ergo-blockchain-privacy-and-security/)

<!--EndFragment-->