---
title: Resumo do ErgoHack III
date: 2022-02-16T14:07:34.817Z
author: Fundação Ergo
authorPhoto: /img/uploads/logo.png
blogPhoto: /img/uploads/06_ergoblog_cover_15022022-1-.png
tags:
  - Construindo Ergo
  - Equipe Ergo
---
<!--StartFragment-->

Veja [docs.ergoplatform.org](http://docs.ergoplatform.org) (em inglês) para ter acesso às submissões finais completas dos participantes.

### **Nautilus**

Nautilus é um projeto de carteira iniciado pela comunidade. Esta carteira é uma extensão para navegador web e funcionará de forma similar à Metamask. Como a maioria dos Ergonautas sabem, Yoroi tem enfrentado problemas de sincronização ultimamente, frequentemente operando de forma lenta e por muito tempo sem uma conexão com dApps. Então, Captain Nemo começou a criar a carteira Nautilus. Durante o ErgoHack III, Nemo esteve sempre presente, comentando em quase todos os chats com os outros participantes e ajudando com o conector da Nautilus com dApps. Nautilus também terá capacidade de cunhar NFTs e misturar moedas diretamente de dentro da carteira.

<https://github.com/capt-nemo429/nautilus-wallet/pull/6/files>

### **Satergo**

Uma carteira de nó completo de Ergo é algo tecnicamente avançado para uma pessoa não-técnica construir e operar, mas às vezes é preferível hospedar uma aplicação de carteira desktop. A carteira Satergo é construída para habilitar fácil implantação de um carteira de nó com apenas alguns cliques. Durante o hackathon, eles trabalharam na implementação de suporte Ledger.

<https://github.com/Satergo/jledger>

### **SAFEW - Carteira Ergo simples e rápida**

SAFEW, como o nome sugere, é uma alternativa rápida à Yoroi. O time também implementou o conector dApp e *mixer*, e suporte a Ledger está quase pronto.

<https://docs.ergoplatform.com/events/pdf/SAFEW_ergohack3_report.pdf>

### **Cassino NightOwl**

Como o nome sugere, o time está criando um cassino usando Ergo. Durante o hackathon, eles trabalharam na interface gráfica e implementação de troca, liquidez, roleta e lançamento de moeda. Eles avançaram bastante no desenvolvimento usando ErgoScript com uma interface aamigável aos usuários. Eles prepararam uma análise competitiva com outros dApps de cassinos fora do ecossistema Ergo. Também propuseram uma Prova-de-Conceito com integração do ErgoMixer. Essa integração permitirá uso privado dos dApps.

[https://docs.ergoplatform.com/events/pdf/Night\_Owl\_-_Ergo_Hack_lll_Presentation_Final.pdf](https://docs.ergoplatform.com/events/pdf/Night_Owl_-_Ergo_Hack_lll_Presentation_Final.pdf)

### **AnetaBTC**

O projeto AnetaBTC gerou muita popularidade nas últimas semanas com seus *airdrops* de até cinco mil transações em um único bloco. Eles são um projeto de "*wrapped BTC*" ("Bitcoin embrulhada", em tradução livre) que está sendo construído tanto usando Ergo como Cardano. Durante o ErgoHack III, eles melhoraram seu *frontend*, ponte de *token* e carteira anetaBTC. Além disso, eles desenvolveram o *Tosi Drop* - uma ferramenta de fácil uso que facilitará *airdrops* de *tokens* nativos em Ergo.

<https://medium.com/@anetaBTC/ergohack-summary-and-development-update-dad3224227b7>

### **GuapSwap**

GuapSwap é o primeiro produto a oferecer um serviço de troca de pagamentos por mineração na blockchain Ergo. É um serviço completamente descentralizado de contrato inteligente para troca de lucro. Para usar GuapSwap, o cliente ou interage com a interface gráfica do GuapSwaps ou eles executam o cliente em um nó próprio. Guapswap dá suporte a múltiplas pools de mineração e será diretamente conectado à ErgoDEX.

[https://docs.ergoplatform.com/events/pdf/GuapSwap_-_ErgoHack3_Project_Report.pdf](https://docs.ergoplatform.com/events/pdf/GuapSwap_-_ErgoHack3_Project_Report.pdf)

### **Delphi**

Pools Oráculo em Ergo são programas de código-aberto e podem ser implantados por qualquer um. Eles possuem um baixo custo de operação, custando apenas uma taxa de transação e sem um mecanismo de queima de token. Mesmo que seja fácil implementar  pools oráculo, uma pessoa ainda precisa escrever algumas linhas de código para fazê-lo. Durante o ErgoHack III, o time Delphi implantou tornou a implantação de pool oráculo um processo ainda mais fácil. Eles almejam criar uma central de pools oráculo para que qualquer pessoa possa implantar seus próprios oráculos e se juntar a outras pools oráculo. Eles também está desenvolvendo ferramentas analíticas para acessar diferentes conjuntos de dados das pools oráculo em Ergo. 

[https://delphiproject.org/ ](https://delphiproject.org/)

### **Hypo10Use**

A equipe do Hypo10Use está criando o Quid Games - um aplicativo descentralizado que é um jogo de sobrevivência baseado na popular série de TV chamada Squid Game. O projeto quer utilizar as funcionalidades criptográficas avançadas da plataforma Ergo para criar um jogo legal, porém difícil. Hypo10Use começou a desenvolver os contratos durante o ErgoHack II, e continuaram avançando ao continuar a fazer melhorias na interface gráfica e conserto de erros.

<https://github.com/hypo10use/quid-games> 

### **Ergo-DNS**

Ergo-DNS é um serviço descentralizado de domínio na blockchain Ergo. Domínios em Web 2 são vendidos por serviços centralizados como GoDaddy, mas usuários serão capazes de cunhar domínios em forma de NFTs diretamente a partir de duas carteiras privadas usando Ergo-DNS. No futuro, domínios serão um ativo que pode ser negociável em um mercado de NFTs como a Ergo Auction House. Assim como domínios .eth, Ergonautas serão capazes de conseguir seus Nomes Ergo usando contratos inteligentes.

<https://www.youtube.com/watch?v=G7glbtnAnMY> 

### **SkyHarbor: Mercado de NFTs**

A equipe SkyHarbor trabalhou em melhorias de interface gráfica, conector dApp e cunhagem rápida. Eles estão planejando implementar páginas verificadas de artistas para prevenir fraude. A equipe implementou compra, venda e cunhagem de contratos. 

<https://www.youtube.com/watch?v=nnLmTG-43m8> 

### **Endereços Furtivos**

*Time 1:*

Endereços furtivos são endereços que podem ser criados via carteiras privadas. Eles são úteis quando o recebedor de uma transação não quer compartilhar seu endereço ao receber uma transação. Pessoas ou instituições podem usar isso para realizar negociações que preservem privacidade para se proteger contra atores maliciosos. Para isso, eles criaram uma abordagem de assinatura que pode ser usada por qualquer carteira, ao invés de usar as carteiras produzidas especificamente para uso furtivo. O projeto continua a fazer pesquisa e desenvolvimento. O problema é que o que o projeto almeja é diferente de simplesmente enviar uma transação privada, porque o endereço precisa escanear as caixas furtivas para receber a transação. O time desenvolveu um escaneador furtivo e integração com interface gráfica no ErgoMixer. <https://github.com/aragogi/Stealth-doc> 

*Time 2:*

Time 2 tentou implementar a abordagem do design de endereço furtivo proposta anteriormente no Fórum Ergo. 

<https://github.com/ergoplatform/ergo-playgrounds/pull/24> 

### **Castanets**

O projeto Castanet está abordando de forma mais abrangente a construção de infraestrutura para dApps. Almeja tornar dApps mais combináveis. Para isso, eles usam uma rede petri colorida para orquestração de contratos inteligentes e testaram a partir do exemplo contrato cabeça-aos-pés para generalizar o conceito a partir daí. O escopo do projeto é maior do que o um projeto de hackathon.

<https://github.com/iandebeer/ergo-castanet/blob/main/docs/Conclusion.md> 

### **Ponte SuSy**

A equipe SuSy terminou não submetendo ao ErgoHack. Devido ao recente hack do Wormhole de Solana, eles estão reconsiderando o uso do Wormhole.

<!--EndFragment-->