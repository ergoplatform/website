---
title: "Construindo Ergo: Trocas Atômicas"
date: 2020-04-24
author: "Guy Brandon"
authorPhoto: "/img/authors/guy_brandon.jpg"
blogPhoto: "/img/blog/atomic_swap.jpg"
tags: ['Construindo Ergo']
---

__Por ser uma sistema fechado, auto-contido por design, interações com outros protocolos blockchain são desafiadoras. Trocas Atômicas permitem câmbios de bens digitais entre blockchains, evitando a necessidade de corretoras centralizadas.__

Blockchains são excelentes em transferências de valores descentralizados dentre seus próprios domínios. Isto é, você pode enviar BTC para qualquer endereço Bitcoin de forma segura e pode também enviar LTC para qualquer endereço Litecoin de forma segura.

Porém, por blockchains serem baseadas em consenso entre mineradores, elas não são desenhadas para interagir com outras blockchains. Negociar bens em diferentes blockchains tradicionalmente involve terceiros como corretoras e mesas de negociação – com todos os riscos e ineficiências associados.

## Trocas entre blockchains 

Trocas atômicas (comumente chamadas de "*atomic swaps*", seu nome em inglês) resolvem este problema ao possibilitar que criptomoedas sejam negociadas entre blockchains. Isto permite a troca de bens sem que se confie em terceiros, de forma rápida e eficiente. Abaixo uma explicação de como as trocas funcionam em teoria:

* Alice e Bob concordam em negociar algumas criptomoedas. Alice enviará 1 BTC a Bob e ele enviará a Alice 50.000 ERG. Nenhuma das partes confia na outra, então nenhuma das partes quer enviar sua cripto primeiro.
* Alice gera uma chave secreta – um número aleatório grande – e a transforma em uma hash. Ela então cria uma transação na blockchain da Bitcoin com um script anexado, bloqueando 1 BTC E especificando uma condição: quando é revelada a chave secreta (pré-imagem) da hash que ela criou, o BTC será enviado para o endereço de Bob. A hash pode ser incluída de forma segura no script de transação, porque a pré-imagem não pode ser calculada a partir disso.
* Bob então, de forma parecida, cria uma transação na blockchain Ergo, incluindo um script com a mesma hash que Alice usou. Quando a pré-imagem é revelada, as 50.000 ERG bloqueadas serão enviadas do endereço do Bob para o endereço da Alice. Porque Bob não tem a pré-imagem, ele não pode executar a transação de Alice pois ele criou a sua própria.
* Uma vez que Alice vê que Bob criou sua transação na blockchain Ergo, ela pode publicar a chave secreta e executar a transação dele. Pelo fato da pré-imagem ser agora pública, Bob pode também usá-la para executar o script que enviará a ele se BTC.
* Nenhuma parte pode deletar suas transações e scripts uma vez que eles tenham sido publicados na blockchain. Eles podem incluir uma condição que a transação expirará dentro de um certo limite de tempo, para evitar que suas moedas sejam bloqueadas indefinidamente se Alice não revelar sua chave.

* Trocas atômicas de Ergo

As trocas (swaps) são chamadas de "atômicas" porque as ordens ou são executadas completamente ou não são executadas de maneira alguma – uma ordem do tipo "tudo-ou-nada". Porém, apesar de ter certa utilidade, esse tipo de ordem não permite negociações ativas, como são permitidas em uma corretora.  

A implementação de trocas atômicas em Ergo desenvolve o conceito ainda mais além. É relativamente fácil trocar moedas ou tokens personalizados através de blockchains como Bitcoin sem confiança em terceiros. Porém, além disso, Ergo permite trocas parciais. Assim como em corretoras tradicionais, ordens podem ser parcialmente completadas, se for do desejo do negociante.

Isto significa que é possível construir uma corretora descentralizada (DEX, em inglês) completa que permita negociações entre blockchains: uma versão de corretoras de cripto que funcione completamente sem que se confie cegamente em terceiros. Não há necessidade para quaisquer portais, embrulhos de token ("token wrapping", em inglês) ou outros potenciais gargalos ou pontos de falha.

Você pode encontrar mais sobre a implementação de trocas atômicas em Ergo e trocas de tokens intra- e entre-blockchains no [artigo sobre ErgoScript (em inglês)](https://ergoplatform.org/docs/ErgoScript.pdf).
