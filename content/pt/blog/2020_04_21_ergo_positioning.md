---
title: "Construindo Ergo: Aluguel de armazenamento"
date: 2020-04-21
author: "Guy Brandon"
authorPhoto: "/img/authors/guy_brandon.jpg"
blogPhoto: "/img/blog/rent_storage.jpg"
tags: ['Construindo Ergo']
---

__Nós desenvolvemos Ergo com sustentabilidade de longo prazo em mente, e o aluguel de armazenamento é um dos meios de garantir que mineração seja uma atividade lucrativa por muito tempo no futuro. Um membro da comunidade, Robert, descreveu essa função como "coleta de lixo" que ajuda a reduzir o problema de inchaço na blockchain – e até a torna lucrativa.__

A redução de recompensas por bloco em 2020 provavelmente será o mais importante [*halving*](https://cointelegraph.com.br/explained/bitcoin-halving-explained) da história do Bitcoin. No contexto do do declínio econômico mais abrupto dos últimos tempos, esse é o momento que as narrativas de "escassez programática" e "ouro digital" serão verdadeiramente provadas. Nos halvings anteriores, Bitcoin ainda estava em sua infância, ainda era um experimento voltado a um nicho. Halvings futuros confirmarão os princípios mencionados anteriormente, mas este é o divisor de águas.

Olhando pra frente, porém, o que acontecerá em 20 ou 30 anos, quando as recompensas por bloco terão diminuído tanto que os mineradores dependerão de taxas de transação e potencialmente outras fontes de renda? Bitcoin será sustentável? Qual será o impacto no ecossistema?

A resposta simples é que não sabemos.

Recompensas de mineração são a principal funcionalidade no que diz respeito à manutenção da segurança de blockchains de Prova-de-Trabalho (PoW, em inglês), i.e. Bitcoin e Ergo. E assim, mesmo tendo deliberadamente mantivemos várias funcionalidades do Bitcoin, modificamos essa para dar uma ajuda aos mineradores assim que recompensas por bloco tenham diminuído a zero.

## Moedas perdidas

Escassez digital é uma funcionalidade importante da Ergo. Assim como Bitcoin, ERG é projetada para ser um recurso finito e uma reserva de valor de longo prazo. Não concordamos com o princípio da inflação infinita.

Mesmo assim, é preciso um balanço com relação a necessidade de se pagar mineradores para garantir o funcionamento da blockchain e o processamento de transações. Sem qualquer compensação aos mineradores, nenhuma blockchain é viável. Ergo aborda essa questão através da lenta reciclagem de moedas perdidas, em uma funcionalidade que chamamos de "aluguel de armazenamento".

Estudos sugerem que até [4 milhões de BTC podem ter sido perdidas para sempre (link em inglês)](https://bitcoinist.com/estimated-4-million-bitcoin-lost-forever-by-users-forgetfulness/). Estas são moedas que foram mineradas nos primórdios de Bitcoin e armazenadas em discos rígidos que foram subsequentemente jogados fora ou destruídos porque os donos ou esqueceram de suas Bitcoins ou as julgaram sem valor. Além disso, muitas BTCs foram perdidas pois estão em endereços que tiveram suas chaves privadas perdidas. (E, claro, há uma estimativa de 1 milhão de BTC na posse de seu criador, Satoshi Nakamoto, que podem nunca serem usadas.)

Nas situações em que moedas são genuinamente tiradas de circulação de forma permanente, faz sentido ter um mecanismo de recuperação que as coloque de volta na economia. Dessa forma, podemos preservar a escassez digital sem acelerá-la desnecessariamente, ou seja, podemos persistir na oferta algorítmica planejada em qualquer período de tempo.

O cronograma de halvings de Ergo é mais rápido que o de Bitcoin. Recompensas de mineração começam em 75 ERG e diminuem constantemente após os primeiros dois anos. Não há uma "longa cauda" de emissão, e após 8 (oito) anos as recompensas caem a zero. Depois disso, a oferta total será constante. A quantidade de ERG em existência nunca será maior que 97,739,925.

## Taxas de armazenamento

A partir desse momento, porém, os mineradores precisarão de mais incentivos para garantir a rede. Mineradores possuem custos correntes em termos de internet e armazenamento e, nos casos onde moedas simplesmente ficam paradas por anos, tipicamente não há cobrança que reflita o valor de garantir essas moedas na rede. A taxa de transação que é paga adiantada em Bitcoin é a única cobrança que é feita para armazenar essas moedas.

Em Ergo, além das taxas de transação, mineradores também será capazes de coletar taxas de aluguel de armazenamento sobre UTXOs que não tenham sido movimentados por 4 anos ou mais.

Taxas são deduzidas lentamente ao longo do tempo – os UTXOs não movimentados não serão simplesmente apropriados pelos mineradores. Qualquer um que quiser evitar isso simplesmente precisa movimentar seus balanços uma vez a cada quatro anos, o que não é um requerimento oneroso para ajudar a incentivar mineradores e evitar consequências deflacionárias de moedas perdidas. Você pode ler mais sobre como taxas serão cobradas [neste artigo (em inglês)](https://fc18.ifca.ai/bitcoin/papers/bitcoin18-final18.pdf).

Deste modo, Ergo busca garantir um balanço entre a manutenção da escassez digital e incentivos de longo prazo a mineradores que garantem a segurança da rede – muito além de quando novas moedas param de ser emitidas.
