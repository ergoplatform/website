---
title: "Mineração em Espaço Logarítmico: Poder de NIPoPoW e Ergo"
date: 2021-07-19T16:10:57.037Z
author: Fundação Ergo
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/img_20210719_190901_375.jpg
tags:
  - Construindo Ergo
---
<!--StartFragment-->



Este artigo é baseado em um artigo [publicado recentemente](https://eprint.iacr.org/2021/623.pdf) pela IOHK. Para mais, por favor ver o seguinte [vídeo.](https://www.youtube.com/watch?v=s05ypkSC7gk)



## Introdução



Seja Ergo, Bitcoin, u qualquer outro modelo de consenso PoW, mineradores são necessários para constantemente manter a blockchain. Além de usar recursos computacionais, mineradores também usam recursos de armazenamento que mantém todos os dados da blockchain desde seu bloco inicial.



## Problema



Um novo problema para mineradores: É estritamente necessário fazer o download do dado completo da blockchain desde seu bloco inicial? Por que não é possível baixar somente os blocos mais relevantes para manter a rede?



## Solução



Os cabeçalhos dos blocos devem ser suficientes para acessar os dados necessários. [NIPoPoWs](https://nipopows.com/) (sigla em inglês para "Provas Não-Interativas de Prova-de-Trabalho") podem ser integrados para formar conjuntos interligados de cabeçalhos de blocos que reduzirão o armazenamento de dado histórico.



Quando for preciso acessar blocos importantes na blockchain, mineradores dever ser capazes de eficientemente acessá-los através dos cabeçalhos dos blocos antigos. Isto se deve ao fato de que cada novo bloco deve indicar toda a rede atual. Com a criação de novos blocos, um conjunto de novos cabeçalhos de blocos podem ser suficientes para verificar o atual conjunto UTXO. Já que os novos blocos contém informações sobre conjuntos de blocos antigos da cadeia, eles permitem rotinas leves de mineração por eliminar a necessidade de baixas dados da blockchain inteira.



O que estamos tentando otimizar ao emendar partes antigas da história da blockchain e as compilar em apenas um *snapshot*?



Se denominarmos C=blocos antigos e K=blocos novos, então blocos incluídos no snapshot podem estar crescendo quando K é constante e C é linear. Mas também pode estar encolhendo, dependendo das aplicações de contratos inteligentes. O problema dos mineradores terem que manter cargas pesadas de dados pode ser resolvido pela aplicação passo-a-passo de NIPoPoWs. 



## Implementação de NIPoPoW



Ao invés de acessar todos os blocos, super blocos (ou clientes leves) são o suficiente para verificar todos os blocos. Isto é possível graças à manutenção de dados históricos da blockchain através de contratos inteligentes. A introdução desses clientes de superbloco em NIPoPoWs pode ser feita bifurcações suaves, e subsequentemente mineradores "leves" podem trabalhar através de mineração “online”.



NIPoPoWs permitem que contratos inteligentes mantenham dados históricos para que novos mineradores "leves" sejam capazes de trabalhar da forma chamada “online”. Esta é a ideia principal da Mineração em Espaço Logarítmico, onde, ao invés de salvar toda a blockchain localmente nos nós, a parte desnecessária pode ser compilada na própria blockchain. Novos mineradores não precisam carregar o dado histórico completo e novos mineradores "leves" ajudarão outros mineradores "leves" a trabalhar. Não haverá necessidade de carregar dados históricos antigos e mineradores velhos podem trocar dados históricos por uma mineração mais leve. É assim que toda a população de mineradores pode abandonar blocos antigos e tornar o sistema muito mais eficiente.



<!--EndFragment-->