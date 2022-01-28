---
title: "Ergo: Construindo um Futuro Descentralizado"
date: 2021-12-16T20:17:03.289Z
author: Plataforma Ergo
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/ergf.jpg
tags:
  - Construindo Ergo
---
<!--StartFragment-->

Criptomoedas ainda são consideradas uma nova classe de ativos. Com mais e mais pessoas interessadas em investimentos na indústria de blockchain, ainda há alguns mal entendidos sobre a função de uma criptomoeda porque, além de não serem dinheiro fiduciário, também não são somente uma plataforma de software.

Inicialmente, com o advento de Bitcoin, testemunhamos a criação das "blockchains de dinheiro”. Até a [Explosão de ICOs (em inglês)](https://hackernoon.com/3-moments-in-history-that-explain-the-ico-bubble-e7c42896ca6f) em 2017/18, a maioria das criptomoedas disponíveis eram apenas bifurcações de Bitcoin com pequenos ajustes. Muitos projetos mudaram alguns dos elementos mais simples de Bitcoin, e.g. recompensas ou tempo por bloco, e/ou oferta total. Com essas mudanças, as pessoas começaram a se perguntar: "Por que deveríamos comprar Bitcoin? Há milhares de outras criptomoedas, por que não escolher uma delas? Se todo mundo pode fazer sua própria criptomoeda, qual a diferença?"

Com o lançamento de Ethereum por volta de 2015, uma nova classe de criptomoedas foi criada - conhecida como “blockchains tech”. Depois da popularização inicial de Bitcoin por volta de 2013, também houve o infame ataque hacker da corretora de cripto chamada Mt. Gox. Este foi só um dos primeiros exemplos de ataque hacker a uma corretora centralizada. Obviamente, se moedas não-fiduciárias globalizadas fossem ter algum futuro, deveriam existir novos canais para transação e segurança de valores. Nem todo mundo poderia encontrar um canal de transações pessoa-para-pessoa para comprar e vender Bitcoin diretamente. A resposta era clara: cripto-economias precisavam de ferramentas financeiras descentralizadas.

Em 2017, o primeiro encontro de ["Descentralizado", em inglês](https://www.decentralized.com/decentralized-2017-overview/) foi organizado e foi a primeira vez que o termo "Finanças Descentralizadas" foi estabelecido. [Wikipédia](https://pt.wikipedia.org/wiki/Finan%C3%A7as_descentralizadas) define Finanças Descentralizadas (ou DeFi, em inglês) como “uma forma experimental de finanças que não depende de intermediários financeiros centrais, como corretoras ou bancos e, em vez disso, utiliza contratos inteligentes em blockchains." 

Hoje, há milhares de projetos trabalhando para fornecer soluções para finanças descentralizadas. Porém nem todos os projetos que alegam ser descentralizados podem completamente substanciar essa afirmação. Parecido com a explosão de ICOs de 2017, houve uma explosão em DeFi. Muitos projetos tentaram replicar plataformas existentes (principalmente Ethereum e dApps em Ethereum) e se propagandearam como uma solução para as massas. Porém, em muitos casos, fundadores e times de desenvolvedores estavam acumulando até 40% da oferta inicial de um token sem oferecer nenhuma inovação. A tal "descentralização" dependia de supercomputadores para hospedar um nó e possuir uma quota da rede. Como resultado, em muitas situações temos blockchains centralizadas ao invés de DeFi.

O fundador da Plataforma Ergo, Alex (Kushti) Chepurnoy, está inserido na indústria de blockchain desde 2011. Em 2018, ele criou um modelo de design para uma plataforma de finanças descentralizadas para dinheiro contratual. Esse design estabeleceu o uso de contratos multiestágio sob o modelo UTXO, que agora é comumente chamado de  modelo UTXO estendido (eUTXO, em inglês). O modelo eUTXO dependia de um modelo similar ao Bitcoin, mas com uma nova linguagem de contratos inteligentes construída do zero, conhecida como [ErgoScript](https://ergoplatform.org/pt/blog/2021-06-09-building-ergo-ergoscript/).

O algoritmo de mineração de Ergo é chamado *Autolykos*, e mineradores têm reportado que esse modelo coloca menos carga sobre placas de vídeo usadas para mineração. Ele opera a temperaturas mais baixas que o algoritmo ETHash da Ethereum, possibilitando uma vida útil mais longa para o hardware de mineração. Até mesmo pessoas com uma simples Raspberry Pi podem hospedar um nó, o que permite um número mais diverso de participantes e, desse modo, tornando a Plataforma Ergo mais descentralizada. Não é necessário ter seu próprio supercomputador para se juntar à rede. 

A Plataforma Ergo foi lançada sem um ICO e sem pré-mineração para que todos os participantes pudessem começar a mineração em pé de igualdade. Aproximadamente 10% das recompensas de mineração foram alocadas no Tesouro Ergo para desenvolvimento do ecossistema da plataforma nos dois anos e meio que sucederão o lançamento da *mainnet* (rede principal, em inglês). No fim do cronograma de emissões de recompensas, essa quantia será igual a apenas 4.37% da oferta total de Ergo. 

ErgoScript é baseado em Scala (acrônimo para "Linguagem Escalável" em inglês), uma linguagem construída para eficiência enquanto mantendo a habilidade de criar proteção robusta. Scala é construída para reduzir linhas computacionais e superar a alta susceptibilidade a *bugs* em JavaScript. Devido a um certo grau de dificuldade em usar Scala, Ergo está desenvolvendo bibliotecas para ajudar desenvolvedores que estejam em transição para a plataforma. Estas ferramentas já estão fornecendo recursos para o influxo de desenvolvedores interessados em desenvolver ferramentas e dApps em Ergo.

Como mencionado anteriormente, Ergo é baseada no modelo eUTXO. Ethereum e muitas outras blockchains foram construídas sobre o Modelo de Contas. O Modelo de Contas depende profundamente em computações *on-chain* (i.e. computações feitas diretamente na blockchain), enquanto o modelo UTXO incorpora o poder de execução *off-chain* (i.e. computações fora da blockchain) na sua camada-base. O Modelo de Contas foi inicialmente fácil de construir para aplicações complexas. Porém, estamos testemunhando a congestão de computações *on-chain*. Para uma análise mais profunda de como a lógica off-chain permite que novos modelos sejam implementados em contratos inteligentes, veja este [artigo](https://ergoplatform.org/pt/blog/2021-10-04-off-chain-logic-and-eutxo/).

O modelo UTXO estendido de Ergo também contém Protocolos Sigmas, que são um subconjunto das Assinaturas de Schnorr - um elemento incluído na recente [atualização Taproot](https://ergoplatform.org/pt/blog/2021-11-17-bitcoin-taproot-upgrade-and-ergos-sigma-protocols/) de Bitcoin. Com Protocolos Sigma, implementações de contratos inteligentes de conhecimento-zero (ZK, em inglês) são facilmente realizáveis, e.g. mixers, carteiras de privacidade e *side-chains* não-interativas. Ao invés de construir *side-chains* que dependam de 5 a 10 donos de MultiSig, *side-chains* de conhecimento-zero em Ergo são possíveis com o uso de NIPoPoWs.

**Resumindo:** 

Ergo não é somente uma moeda. 

Ergo não é somente uma plataforma de contratos inteligentes.

Ergo não é uma blockchain centralizada.

Há promessas que devem ser cumpridas para a criação dos sistemas financeiros do futuro. Criptomoedas devem oferecer ferramentas financeiras para indivíduos, e criar oportunidades financeiras iguais para todos. A Plataforma Ergo incorpora novos designs técnicos, além de valores humanos. A Blockchain Ergo é feita para prover ferramentas e dApps efetivos e eficientes para todos. Bancos e governos são conhecidos por tomar a frente das pessoas no que diz respeito ao desenvolvimento tecnológico, mas Ergo continuará a dar suporte a decentralização para as massas.


**\
Por favor veja o [Manifesto Ergo](https://ergoplatform.org/pt/blog/2021-04-26-the-ergo-manifesto/) para entender melhor o “Contrato Social de Ergo.”**

<!--EndFragment-->