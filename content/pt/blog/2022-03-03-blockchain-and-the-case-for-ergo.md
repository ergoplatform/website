---
title: Blockchain e a Motivação para Ergo
date: 2022-03-03T15:58:30.807Z
author: Plataforma Ergo
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/news-blog-41.png
tags:
  - Construindo Ergo
---
Desde o nascimento de Bitcoin, tecnologia blockchain tem sofrido enormes avanços. Melhorias em questões de segurança, acesso e em vários outros protocolos têm permitido que blockchains evoluam para dar conta da sua sempre-crescente demanda. Criptomoedas populares que têm sido desenvolvidas usando tecnologia blockchain incluem: Bitcoin (BTC), Ethereum (ETH), Cardano (ADA), Polkadot (DOT) e Ripple (XRP), apenas nomeando algumas. O propósito deste artigo é ajudar a colocar um holofote sobre como ERG (Ergo) é um competidor viável para blockchains populares atualmente e no futuro. 

`Gerações de Blockchain`

* `1° Geração - DOGE, BTC, XRP.`
* `2° Geração - BNB, NEO, ETH`
* `3° Geração - ADA, DOT, ERG`

Atualmente, existem três gerações de blockchain, cada uma capaz de comportamentos mais complexos que a outra. A primeira geração se refere ao uso original proposto para BTC, que é o de prover um método fidedigno e acurado de manter um livro-razão de transações públicas. A segunda geração de blockchains foi criada tendo como prioridade a implementação de contratos inteligentes, com a mais popular sendo ETH (Ethereum). Uma das grandes diferenças da ETH é a linguagem usada para programar contratos inteligentes. ETH utiliza uma linguagem [Turing-completa](https://www.cs.odu.edu/~zeil/cs390/latest/Public/turing-complete/index.html) (link em Inglês), conhecida como  *Solidity*, o que significa que é computacionalmente universal. 

A terceira geração de tecnologias blockchain está agora focada em resolver problemas como congestão e escalabilidade. Conforme essa tecnologia se torna mais descentralizada, inevitavelmente haverá um crescimento exponencial no número de usuários interagindo com a blockchain. DOT, ADA e ERG são blockchains da terceira geração, ou seja, elas possuem capacidades de contratos inteligentes enquanto propõem soluções para escalabilidade para uma audiência global. Blockchains de terceira geração geralmente possuem a habilidade de processar transações fora da rede, ajudando a significativamente acelerar o número de transações. Ergo também tem várias inovações para resolver escalabilidade. NIPoPows em Ergo permitem conexão com as chamadas *sidechains* e clientes leves, abrindo todo um novo mundo de possibilidades. Leitores podem aprender mais sobre NIPoPoWs aqui: [Aplicações de NIPoPoW: Clientes Leves e Sidechains | Ergo (ergoplatform.org](https://ergoplatform.org/pt/blog/2021-08-26-nipopow-applications-light-clients-and-side-chains/)).

Contratos inteligentes em ERG são programados usando ErgoScript, uma linguagem de programação Turing-completa. ErgoScript é especificamente projetada para ser amigável a protocolos criptográficos e aplicações, o que permite o desenvolvimento de todos os tipos de dApps para incontáveis casos de uso. Aprenda mais sobre ErgoScript aqui: [ErgoScript.pdf](https://ergoplatform.org/docs/ErgoScript.pdf) (link em Inglês).

#### Velocidade de Transação

Velocidade de transação é geralmente mensurada em Transações por Bloco / Segundo (TPS). Abaixo estão valores de TPS aproximados para outras blockchains:

* `BTC - ~7 TPS (Gobbel, 2017)`
* `ETH - ~15 TPS (Clincy et al (tabela 1), 2019)`
* `XRP - ~1500 TPS (Clincy et al (tabela 1), 2019)`
* `ADA - ~7 TPS (~250 em testes controlados) (Stamoulis, 2021)`
* `DOT - ~1500 TPS (Hiemstra et al., 2021)`

Velocidade de transação, mais especificamente TPS, é uma medida de quantas transações por bloco / segundo uma blockchain pode realizar, essencialmente quantificando o quão rápido uma blockchain pode realizar transações. Você pode ter notado que ERG não está listada como tendo um TPS concretamente quantificável. O modelo eUTXO que Ergo utiliza apresenta valores de TPS obsoletos, porque múltiplas transações podem ser agrupadas em apenas uma transação. Abaixo, você encontrará um desenvolvedor que se aproveitou do poder do modelo eUTXO para enviar [10000 transações de uma vez só](<[https://explorer.ergoplatform.com/en/transactions/e2c4954665ccf87791f42983ae4f7031205c2e719709907cbf2ff09e5489d4b8](<https://explorer.ergoplatform.com/en/transactions/c4e5276182543b17eae4e767d60965feceaf1fd1ba1f5bde76aae751b33a6bb8>).

Até o momento, soluções para escalabilidade via uma segunda camada estão sendo implementadas na blockchain Ergo, porém processamento e armazenamento de transações não são a ideia principal por trás de Ergo. Uma frase de um desenvolvedor resume bem:

*“Porém, simples transações de pagamento não são o que motiva Ergo. O principal poder de Ergo é que possibilita muitos dApps únicos (aqueles já implementados, aqueles já descobertos e muitos mais ainda não descobertos). Além disso, Ergo permite muitas soluções de Camada 2 (como sidechains, que o kushti já mencionou como um trabalho em andamento). Essas soluções / protocolos de Camada 2 serão a fonte principal da real escalabilidade. A ideia geral, aproximadamente, é que grandes pedaços de transações podem acontecer em camada 2 e pedaços inteiros serão estabelecidas na blockchain Ergo usando uma única transação. Graças à alta flexibilidade do modelo de programação ErgoScript (que chamamos de eUTXO), muitos protocolos diferentes serão possíveis na Camada 2, cada um resolvendo um problema de escalabilidade em um domínio específico (como simples transações de pagamento). Então, a blockchain Ergo pode ser pensada como uma camada comum de estabelecimento para muitos protocolos e aplicações de Camada 2. E para transações de estabelecimento, até mesmo 50 transações / segundo é um número bom o suficiente.” - [Velocidade de transação em ERGO: ergonautas (reddit.com)](https://www.reddit.com/r/ergonauts/comments/pcff16/ergo_transaction_speed/?utm_source=share&utm_medium=ios_app&utm_name=iossmf)*

Em conclusão, Ergo é uma blockchain poderosa capaz de detronar competidores atuais e futuros. Ergo oferece soluções únicas para problemas de escalabilidade via utilização de NIPoPows, se aproveitando do modelo eUTXO e uma segunda camada para processar transações, tudo isso enquanto oferecendo a habilidade de criar dApps e contratos inteligentes usando ErgoScript.

Para aqueles que estão interessados em leituras adicionais, por favor vejam os seguintes artigos:

*[Construindo Ergo: UTXO vs Contas | Ergo (ergoplatform.org)](https://ergoplatform.org/pt/blog/2020_03_03_building_utxo/)*

*[Transações no Modelo UTXO | Ergo (ergoplatform.org)](https://ergoplatform.org/pt/blog/2021-10-07-utxo-model-transaction/)*

*[Lógica Off-chain e eUTXO | Ergo (ergoplatform.org)](https://ergoplatform.org/pt/blog/2021-10-04-off-chain-logic-and-eutxo/)*