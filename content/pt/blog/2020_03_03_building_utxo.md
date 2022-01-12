---
title: "Construindo Ergo: UTXO vs. Modelo de Contas"
date: 2020-03-03
author: "Equipe Ergo"
authorPhoto: "/img/logotype_black_circle.svg"
blogPhoto: "/img/blog/building_ergo.jpg"
tags: ['Construindo Ergo', 'Equipe Ergo']
---

Ergo seleciona as funcionalidades mais seguras e bem-estabelecidas de Bitcoin e implementa novas funcionalidades criptográficas avançadas sobre esta sólida fundação. Esta série de artigos explora as escolhas que temos feito ao criar Ergo, com o primeiro artigo detalhando as vantagens do modelo UTXO.

Quando estamos lidando com valores financeiros, não podemos nos dar ao luxo de correr riscos. Toda decisão de arquitetura de software em uma plataforma de criptomoedas tem consequências. Enquanto existem diferentes formas de resolver um mesmo problema, algumas soluções são melhor testadas e mais confiáveis que outras.

Como Bitcoin, Ergo usa o modelo "UTXO" (saídas transações não gastas, em inglês) ao invés de um modelo de Contas, como é usado por plataformas como a Ethereum. Há diversas razões para termos feito esta escolha, mas primeiro vale a pena explicar um pouco sobre como o modelo UTXO, ou modelo "Box" (caixa, em inglês), funciona.

A maioria das pessoas acham que o balanço de uma conta é um simples número que é atualizado quando voê envia ou recebe fundos. Este é o jeito óbvio de abordar o problema; afinal de contas, é assim que dinheiro efetivamente funciona no mundo real. Sua conta bancária tem um balanço que é aumentado ou diminuído quando diferentes transferências são feitas. É assim que o modelo de "Contas" opera: seu balanço na blockchain é alterado pelas transações para sua conta e de sua conta para outra.

## Quanto de massa?

O modelo UTXO, desenvolvido pela primeira vez por Bitcoin, é bem diferente. Você pode pensar neste modelo mais ou menos como uma pessoa segurando uma série de caroços de massa de pão. O balanço deles é a soma desses caroços, ou UTXOs. Caroços podem ser divididos ou combinados antes que sejam enviados para um novo endereço, mas você sempre sabe de onde eles vieram. Por exemplo:

Alice tem 100g de massa de pão (100 ERG). Ela separa um pedaço de 75g e dá para Bob, mantendo 25g de "troco" para si.
Charlie tem 250g de massa. Ele separa 150g e dá para Bob, mantendo 100g de troco para si.
Bob separa 20g massa do caroço de 150g que ele recebeu de Charlie e combina as 130g resultantes com as 75g que ele recebeu de Alice. Ele dá o total de 205g para Dave, mantendo o troco de 20g para si.
Dave agora possui 205g de massa de pão, que costumava pertencer a Charlie. Antes de Charlie ser dono, 75g costumavam pertencer a Alice, enquanto 130g estavam na posse de Bob.

No modelo UTXO, "caroços" de moedas podem ser combinados e divididos, mas, ao contrário da massa de pão, eles não podem ser misturados. Podemos seguir a história dos fundos desde a transação em que estas moedas foram mineradas. Isto é muito diferente do modelo de Contas, onde o balanço de cada conta é simplesmente alterado. (Podemos, claro, verificar a blockchain para garantir que a Conta mostra o saldo que deve, mas isto não é intrinsecamente necessário como é com a abordagem UTXO.)

## Por que UTXO?

O modelo UXTO possui diversas implicações. Para começar, cada objeto é imutável – caroços de moedas não podem ser "editados" como um balanço de Conta é editada quando uma transação é feita. O balanço é calculado a partir do histórico de transações, de volta ao ponto em que estas moedas entraram em existência.

Isto torna a questão da segurança muito mais simples, porque ou um UTXO existe na forma que esperamos, ou não existe de jeito nenhum. Com o modelo de contas, precisamos cuidadosamente verificar que a conta que estamos lidando está no estado que deve estar (e, tipicamente, desenvolvedores fazem isso de maneira apropriada). Isto também torna UTXOs mais amigáveis a protocolos off-chain, como sidechains e a rede Lightning.

Contas tornam mais fácil o armazenamento do "estado", mas "fácil" nem sempre significa "melhor". Com o modelo UTXO estendido de Ergo, transições de estado são mais explícitas e portanto mais claras – não existem surpresas indesejadas. Pode até ser mais trabalhoso de se lidar, mas é muito melhor e mais direto em termos de segurança.
