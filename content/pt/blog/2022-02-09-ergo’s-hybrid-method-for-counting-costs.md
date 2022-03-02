---
title: Método Híbrido de Ergo para Análise de Custos
date: 2022-02-09T15:10:56.295Z
author: Plataforma Ergo
authorPhoto: /img/uploads/symbol_bold__1080px__black.png
blogPhoto: /img/uploads/04_ergoblog_cover_09022022-2-1-1-.png
tags:
  - Construindo Ergo
  - Roadmap
---
<!--StartFragment-->

## Introdução

Verificar a validade de contratos inteligentes em uma blockchain Prova-de-Trabalho (PoW) tem custos tanto em termos de tempo quanto em recursos. Se esses custos não forem controlados, podem levar a lentidão da rede e até mesmo ataques de negação de serviço que impeça a rede ser usada. Portanto, controle de custos é fundamental para uma blockchain funcional.  



Tipicamente, há duas formas gerais de controlar custos em uma blockchain PoW:



1. **Custeio Antecipado (AOT Costing, em inglês)** - estima os custos antes da execução de um programa para que um programa extremamente caro não seja nem executado
2. **Custeio Just-In-Time* (JIT Costing, em inglês)** - calcula os custos durante a execução de um programa

Cada um desses métodos possui vantagens e desvantagens. A próxima atualização v.5.0 dos nós de Ergo usa uma abordagem híbrida para melhorar o controle de custos.

## Vantagens e Desvantagens do Custeio AOT

Atualmente, Ergo usa custeio AOT. Trabalho é feito na blockchain Ergo em blocos. Cada bloco leva aproximadamente 2 minutos e inclui todas as transações que aconteceram durante esse período de tempo. Blocos recebem um orçamento que eles não podem exceder. 

Quando um minerador cria um bloco, o custo do bloco é estimado antecipadamente. Se o custo está abaixo do orçamento do bloco e a matemática / lógica faz sentido, o bloco é submetido para a blockchain.

Porém, estimativas também possuem um custo. Custeio AOT faz sentido quando esses custos são menores que efetivamente rodar o programa. É mais barato estimar quando estamos usando linguagens simples para contratos inteligentes.

Usar custeio AOT possui uma vantagem principal. Limites são impostos pela rede nos blocos ao invés de nas transações. Como custos de estimação são baixos, os mineradores absorvem os custos de transação para as transações que são rejeitadas. Então, cada transação aceita requer que uma taxa simples seja adicionada ao bloco.

 

É importante notar que o custeio AOT não é livre de desvantagens. Estimativas não são os custos reais e são frequentemente ineficientes, o que desperdiça recursos da rede, reduz a capacidade de cada bloco e, por tabela, reduz a habilidade da blockchain escalar. Isso é particularmente verdade em casos como de Ergo, onde a blockchain suporta o uso de coleções de entradas e saídas, variáveis de extensão com contexto definido pelos usuários, e outras funcionalidades sofisticadas. Além disso, custeio AOT não se utiliza das eficiências das novas gerações de linguagens de contratos inteligentes, que são mais baratas de executar do que de estimar. 

Existem outras desvantagens no método de custeio AOT, mas a desvantagem acima estabelece a necessidade de um melhor modelo de controle de custos do que apenas usar o custeio AOT.

## Novo Método Híbrido de Ergo para Análise de Custos

A próxima versão do nó Ergo, v.5.0, usará um algoritmo de custeio híbrido para conter custos e proteger a rede de ataques de negação-de-serviço, *spam* e outros ataques aos recursos da rede. Com essa nova abordagem, há dois estágios para o algoritmo de custo. 

No primeiro estágio, entradas de transações passam por um verificador (uma de cada vez) e cada programa de entrada é reduzido a uma *proposição sigma* - um tipo de condição de gasto que pode ser verificada criptograficamente. Custeio JIT é aplicado durante esse estágio de redução.

Depois de toda entrada na transação possuir uma proposição sigma, então o custeio AOT (que é muito simples e muito rápido) é usado para calcular os custos de todas as operações criptográficas na transação. Todos os custos são então adicionados para determinar o custo final da transação em si. Uma vez que o custo final da transação é obtido, ele é adicionado ao custo do bloco, que deve estar dentro do orçamento do bloco antes de poder ser adicionado.

O mesmo processo é repetido para cada transação no bloco (em sequência) e o custo total do bloco é acumulado. Antes de poder ser submetido para a blockchain, cada bloco deve estar abaixo do custo permitido por bloco. 

Com a implementação desse novo método de custeio em duas partes, custos podem ser estabelecidos mais eficientemente e mais acuradamente, com menos despesas do que usando somente o custeio AOT. Como resultado, o lançamento do nó Ergo v.5.0 deve efetivamente aumentar o número de transações por bloco, melhorar estimativas de custo e melhorar performance da blockchain Ergo.




*\* Talvez uma boa tradução seja "em cima da hora", porém preferi não traduzir esse termo.

<!--EndFragment-->