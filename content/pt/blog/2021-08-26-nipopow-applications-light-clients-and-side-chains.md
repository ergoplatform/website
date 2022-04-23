---
title: "Aplicações NIPoPoW: Clientes Leves e Cadeias Laterais"
date: 2021-08-26T19:29:21.989Z
author: root7Z
authorPhoto: /img/uploads/rootz-the-storyteller-4root7z.png
blogPhoto: /img/uploads/nipopows.jpg
tags:
  - Construindo Ergo
---
<!--StartFragment-->

**Provas Não-Interativas de Prova-de-Trabalho** ([NIPoPoWs](https://nipopows.com/)) são importantes por dois motivos essenciais: Clientes Leves e Cadeias Laterais. Esses dois componentes são essenciais para clientes e nós a fim de facilitar integração com a blockchain. Uma rede descentralizada é inerentemente ineficiente por causa do mecanismo de aleatoriedade em uma rede síncrona, i.e. toda vez que uma transação (TX) ocorre na rede, alguns nós aleatórios devem processar a TX para provar e segurar a sua confiabilidade. Quando colocado em perspectiva, essa é uma enorme tarefa em uma escala global. Há bilhões de transações e é plausível que muitas delas venham de contribuidores operando com pouca banda de internet.



# Clientes Leves



**Clientes Leves** ([SPV](https://ergoplatform.org/pt/blog/2020_05_1_spv_security/)) são importantes quando consideramos os obstáculos que criptomoedas enfrentam com adoção em massa. A maioria dos usuários de cripto não possuem as ferramentas necessárias para executar um nó completo. Executar um nó completo significa ter um forte processador com alta potência elétrica e mais de 100GB de memória para armazenar a blockchain inteira. Clientes leves são úteis porque eles habilitam a verificação com uma oferta limitada de provedores de dados (nós) e, portanto, significativamente reduzir a quantidade de armazenamento de dados e banda necessária para usuários médios.



O uso de clientes leves com a implementação de NIPoPoWs torna possível a interação com a blockchain através de cabeçalhos de blocos ao usar somente alguns kilobytes. Verificar se uma transação aconteceu na blockchain torna-se simplificado. NIPoPoWs podem ajudar pessoas a interagirem com a blockchain através do uso de carteiras móveis mais eficientes e convenientes.



# Redes Laterais



**Redes laterais**, por outro lado, são componentes da blockchain completamente diferentes. Elas são incrivelmente úteis para vários elementos, como redes privadas, melhorias de escalabilidade e interoperabilidade entre redes. [Kushti mencionou](https://youtu.be/QCMpVRVrHqI) que ele irá lançar um "livro de receitas" sobre redes laterais nos próximos meses. 



Uma aplicação de NIPoPoWs que descrevemos em um artigo anterior lida com [mineração em espaço-log](https://www.youtube.com/watch?v=s05ypkSC7gk). Mineração em espaço logarítmico permite a criação de “mineradores leves”. Similar a clientes leves, mineradores leves podem trabalhar com cabeçalhos de blocos sem baixar a blockchain inteira. Em uma blockchain, também é possível armazenar apenas alguns blocos necessários para verificar a rede inteira. Isto essencialmente erradica a necessidade de mineradores armazenarem toda a blockchain. A integração de mineração espaço logarítmico em Ergo é possível através de "bifurcações de veludo", o que previne a necessidade de difíceis bifurcações duras.



Outra aplicação de NIPoPoWs foi proposta no primeiro [ErgoHack](https://curiaregiscrypto.medium.com/ergohack-results-f7d72711a9db) por uma equipe chamada SmartPools. A proposta da SmartPools almeja aumentar o **Coeficiente Nakamoto**, uma métrica para calcular a descentralização de uma dada rede. No nosso caso, a proposta almeja aumentar a descentralização da Plataforma Ergo ao organizar entidades mineradoras com contratos inteligentes garantidos. O propósito aqui é fornecer retornos para investidores que não sejam mineradores e prevenir que grandes fazendas de GPUs controlem o sistema.



O exemplo mais conhecido de NIPoPoWs é a implementação de segunda camadas de blockchain. Segundas camadas são úteis para interação com diferentes blockchains ao aumentar escalabilidade e criar redes laterais privadas para aplicações de nível empresarial. Segundas camadas criam blockchains em cima da blockchain principal para diferentes casos de uso. Por transações poderem acontecer nessas segundas camadas sem constantes atualizações síncronas, o carregamento da rede pode ser diminuído substancialmente ao manter tudo na rede principal ao mesmo tempo.

**\
A blockchain Ergo tem dado suporte a NIPoPoWs desde sua criação, mas seus casos de uso ainda estão em sua infância. Continuamos a desenvolver esse campo de pesquisa com nossos parceiros da [IOHK](https://iohk.io/) e [EMURGO](https://emurgo.io/), e esperamos que suas aplicações aumentem com contribuições contínuas da comunidade de desenvolvedores.**

<!--EndFragment-->