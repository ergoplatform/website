---
title: Pools Oráculo de Ergo, e o que elas significam para o ecossistema
date: 2020-08-31T09:31:10.882Z
author: Guy Brandon
authorPhoto: /img/uploads/guy_brandon.jpg
blogPhoto: /img/uploads/terry-p60cjqtbptw-unsplash.jpg
tags:
  - Construindo Ergo
---
<!--StartFragment-->

*O novo esquema desenvolvido pela parceria Emurgo-Ergo verá pools oráculo – infraestrutura importante da blockchain – rodando como serviço público, acessíveis para qualquer dApp ou desenvolvedor, gratuito.*

Oráculos são um elemento crucial da infraestrutura DeFi. Eles são a ponte entre o mundo fechado da blockchain e dados do mundo real. São vitais para que [DeFi atinja todo o seu potencial](https://ergoplatform.org/pt/blog/2020-08-13-building-ergo-our-vision-for-defi/). A integridade de grandes casos de uso, incluindo [stablecoins](https://ergoplatform.org/pt/blog/2020_05_05_stablecoins/) e plataformas de empréstimo, dependem de oráculos que são adequados ao propósito.

Atualmente, implementações de oráculos estão longe do ideal. Um dos primeiros projetos empreendidos como parte da [parceria Emurgo-Ergo](https://ergoplatform.org/pt/blog/2020_06_09_press_release/) é a pesquisa sobre Pools Oráculo: um novo jeito de trazer dados do mundo exterior para a blockchain e torná-los prontamente disponíveis para qualquer dApp.

**As deficiências das implementações atuais**

Oráculos já sustentam muitas aplicações descentralizadas em Ethereum, e tipicamente funcionam da seguinte forma:

1. Um dApp deseja adquirir informação proveniente do mundo exterior e faz uma requisição para um oráculo através de pagamento ao seu contrato inteligente (pagamentos são tipicamente feitos usando um token dedicado do oráculo).
2. O oráculo obtém os dados e os submete de volta ao contrato que os requisitaram via uma transação separada.
3. A informação é enviada unicamente para o dApp que a requisitou, e ninguém mais pode usar aqueles dados sem pagar por eles.

Embora isto funcione relativamente bem, os oráculos podem essencialmente ser considerados serviços privados que empregam um modelo ["pay-to-play"](https://pt.wikipedia.org/wiki/Pay_to_play). Como isto é claramente insuficiente para muitos casos de uso, o conceito de feeds de dados foram desenvolvidos a fim de melhorar a experiência do usuário no que diz respeito a informação de preços regulares.

Feeds de dados atuais em Ethereum, porém, tendem a ser implementados de uma maneira bem confiável. Eles carecem de uma abordagem generalizada que forneça garantias sobre a confiabilidade dos dados, tanto no que diz respeito a sua acurácia quanto com relação a seu cronograma de postagens. Além do mais, tais abordagens tendem a não ter um claro mecanismo descentralizado de financiamento para torná-las sustentáveis no longo-prazo, dependendo de patrocínios de atores centralizados.

A visão de Ergo e Emurgo é que oráculos são importantes demais para se restringirem desta forma. Eles devem ser infraestrutura pública para o setor DeFi. O modelo de pools oráculo desenvolvido por esta parceria resolve este problema.

**Design de pools oráculo**

O [modelo UTXO de Ergo](https://ergoplatform.org/pt/blog/2020_03_03_building_utxo/) oferece benefícios para sistemas de oráculos que não estavam previamente disponíveis. Pools de oráculos atuam para descentralizar o fornecimento de dados, garantindo que tanto o processo quanto os dados em si sejam mais confiáveis.

Na sua forma mais simples, pools oráculo dividem a variável tempo em épocas fixas (e.g. 6 horas), que são subdivididas em blocos (e.g. 180 blocos de dois minutos). O grupo de oráculos dentro da pool concorda sobre as fontes de dados e cada membro do grupo publica seus pontos de dados na blockchain em seu próprio UTXO.

No final de uma época, é calculada uma média desses pontos de dados, após a remoção de *outliers* (i.e. "pontos fora da curva"), em uma transação final que lê cada ponto de dado UTXO. Isso resulta na pool oráculo produzindo um novo ponto de dado finalizado e seguindo em frente para a próxima época.

Isto não é particularmente complicado de se entender, mas estabelece uma sólida base. Um fator crítico de se notar é que o processo todo ocorre *on-chain* (i.e. na blockchain). Além disso, o uso de UTXOs permite a adição de incentivos e mecanismos de governança, permitindo uma sofisticação e flexibilização das pools oráculo e provisão de dados bem maiores do que era possível.

**Construindo sobre a fundação das pools oráculo baseadas em UTXO**

Como mencionado previamente, é possível implementar incentivos e penalidades nas pools para ajudar a garantir a qualidade e pontualidade dos dados que elas fornecem. Os oráculos fornecem colaterais – uma certa quantia de ADA, ERG, etc – para participar em uma pool. Moedas são removidas de seus balanços (do inglês "stake slashing") se elas não conseguem fazer seu trabalho propriamente, e.g. se eles falham em coletar pontos de dados de outros oráculos, se eles submetem pontos de dados altamente imprecisos (um outlier), ou se eles não submetem um ponto de dado em uma janela de tempo razoável. Isso garante que oráculos realizem suas funções bem. O colateral é a moeda corrente nativa da blockchain, não um token separado, simplificando as coisas e melhorando incentivos econômicos.

O modelo também permite governança votações de governança para determinar parâmetros-chave para pools oráculo. A comunidade de governança pode decidir variáveis como, por exemplo, o quão longa é uma época, o quanto oráculos são pagos por publicar pontos de dados válidos, o colateral mínimo que eles requerem, o número de oráculos por pool, e assim por diante. Há um alto grau de flexibilidade, e parâmetros podem ser mudados com base em necessidades atuais. Novos oráculos podem ser convidados para uma pool, outros removidos, etc.

Este modelo incorpora um cronograma restrito de publicações (épocas) e governança diretamente, o que projetos como Chainlink não possui. Efetivamente, pools oráculo se tornam mini [DAOs](https://pt.wikipedia.org/wiki/The_DAO_(organiza%C3%A7%C3%A3o)) que almejam fornecer o melhor serviço e podem competir de acordo com o serviço que fornecem ao livre mercado, assim melhorando a qualidade geral dos dados que todo mundo usa.

**Modelo de pagamentos**

O modelo UTXO significa que os resultados são publicados na blockchain e estão disponíveis para qualquer um utilizar pelo custo de uma taxa de transação. Este não é a abordagem padrão pay-to-play: dApps podem acessar dados por um valor irrisório. Além do mais, esse acesso a dados de pool oráculo escala suavemente e sem custo adicional mesmo que protocolos mais complicados sejam construídos em cima das pools oráculo (e.g. hierarquias ou médias temporais ponderadas).

Pools oráculo são sustentadas pelos dApps que as usam ao longo do tempo. Embora todo mundo possa usar oráculos e todo mundo que os usa tem um incentivo para financiá-los, isso custa muito pouco – uma percentagem pequena de taxas extras em um dado dApp. É esperado que esses pagamentos de pools oráculo serão implementados em grandes dApps, portanto garantindo que as pools sempre tenham um financiamento que elas precisam para funcionar.

Faz mais sentido que aplicações de grande porte (e.g. stablecoins, carteiras, corretoras descentralizadas e protocolos de empréstimo) fossem pagar por importantes pools oráculo – muito da mesma maneira que importantes empresas de blockchain executam seus próprios nós. É parte da operação deles e parte da sua Responsabilidade Social Corporativa (pegando emprestado um termo do mundo corporativo). É como eles garantem acesso aos dados que eles precisam, ajudam a manter o ecossistema saudável e demonstram que são sérios com relação a manter uma distância no setor DeFi. Ao mesmo tempo, pools oráculo são projetadas para que mesmo atores menores possam participar e tenham um mecanismo de financiamento incorporado se encontrem uma base de usuários suficiente.

O modelo de pools significa que fundos pagos podem ser desembolsados eficientemente dentro de uma variedade de diferentes estruturas de pool. Seria possível ter uma pool-de-pools, com diversas pools oráculo agregando dados e estes resultados sendo partidos e calculados em termos de médias. O pagamento é enviado para a pool principal, que envia os fundos para as pools seguintes na hierarquia de acordo com quão confiáveis elas são e estas, por sua vez, distribuem os fundos para seus oráculos internos que são mais confiáveis. A principal vantagem é a simplicidade para o usuário, já que é necessário somente um pagamento para a pool principal.

Também há alcance para usar dados assinados – dados provenientes de entidades confiáveis como, por exemplo, corretoras. Estes podem submeter dados assinados para pools do tipo "primeira-a-publicar", onde os fundos são distribuídos para o primeiro oráculo a recordar dados na blockchain; por serem confiáveis, o processo de cálculo de média não é necessário, ou podem haver pools que agreguem dados parcialmente assinados ou não assinados, trazendo o melhor dos dois mundos. Dados assinados e não-assinados podem ser partidos e trazidos juntos em um único ponto de dado, e pagamentos podem ainda ser feitos suavemente ao serem pagos para a pool principal.

Esta é a primeira implementação a surgir da colaboração Emurgo-Ergo: os primeiros passos em construir o ecossistema DeFi baseado em UTXO. Ainda há muito mais a vir e novos desenvolvimentos prometem ser bastante animadores.

Para mais sobre o assunto, assista a **[Robert Kornacki, pesquisador da Emurgo, explicar pools oráculo](https://www.youtube.com/watch?v=NfSrNxA-MPo&t=1s).**

<!--EndFragment-->