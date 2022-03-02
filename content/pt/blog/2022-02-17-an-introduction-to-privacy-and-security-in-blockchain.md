---
title: Uma Introdução a Privacidade e Segurança em Blockchain
date: 2022-02-17T18:26:49.358Z
author: Plataforma Ergo
authorPhoto: /img/uploads/symbol_bold__1080px__black.png
blogPhoto: /img/uploads/intrprivsec-2-.png
tags:
  - Construindo Ergo
---
<!--StartFragment-->

Depois que o primeiro artigo científico emergiu na internet em 2008, a tecnologia blockchain evoluiu tremendamente. Fundadores, desenvolvedores e entusiastas de blockchain propuseram uma gama de ideias sobre como a tecnologia deve funcionar. Porém, apesar dos vários protótipos, parece haver diversos princípios e fundamentos para tecnologia blockchain. Vamos olhar para tecnologia blockchain através da lente de privacidade e segurança.



## Privacidade

Tecnologias blockchain funcionam como uma tecnologia distribuída de livro-razão - um livro-razão em rede, encriptado publicamente e compartilhado entre múltiplos nós, requisitando um mecanismo de consenso para validar transações. Consequentemente, toda transação é registrada na blockchain e pode ser vista a qualquer momento por qualquer parte envolvida. A identidade de todo indivíduo é representada por um endereço de carteira, por isso o termo "pseudo-anônimo".



A primeira funcionalidade de privacidade em qualquer rede blockchain é que todas as transações são pseudo-anônimas. Todo usuário tem um endereço de carteira público, é dono de uma chave privada para a carteira e existe um livro-razão onde toda carteira e suas transações são registradas e exibidas publicamente.



## Segurança

Precisamos considerar duas questões quando discutimos segurança. Primeiro, como os usuários de blockchain se protegem? Segundo, como a rede blockchain como um todo é protegida de ataques externos?



A frase-semente e uma chave privada são necessárias para resguardar o usuário em qualquer rede blockchain descentralizada. Uma frase-semente é um específico número de palavras geradas por uma carteira cripto durante a sua criação (seja a carteira do tipo software ou hardware). Uma frase-semente pode ter doze, vinte quatro ou quinze palavras, como é o caso na blockchain Ergo. Uma chave privada é uma longa sequência de números hexadecimais, necessária assinar toda transação feita por uma carteira. Na prática, uma frase-semente codifica uma chave provada e é a porta de entrada para uma carteira.



Toda rede blockchain é protegida por um protocolo descentralizado para verificação de transações conhecido como "mecanismo de consenso". Desde a emergência de Bitcoin, redes blockchain tem sido construídas sob vários mecanismos de consenso. De forma geral, os três mecanismos de consenso mais comuns são: Prova-de-Trabalho (PoW, em inglês), Prova-de-Participação (PoS, em inglês) e Prova-Delegada-de-Participação (DPoS, em inglês). Cada modelo usa mineradores ou validadores para verificar transações e blocos.



## Prova-de-Trabalho versus Prova-de-Participação

A emergência do artigo científico de Bitcoin representou o começo da era das criptomoedas, mas deixou as portas abertas para potenciais melhorias. Durante os últimos anos, houve muito debate entre Prova-de-Trabalho usada em Bitcoin e o mecanismo de consenso que usa Prova-de-Participação.

s

No mecanismo de consenso PoW, mineradores resolvem equações complexas e o primeiro minerador a encontrar a nova *hash* é recompensado e uma nova transação é adicionada ao bloco. Com Ergo, o protocolo é resistente a ASIC e permite que mineradores usem placas de vídeo comerciais para participar na rede. Porém, em PoS, validadores delegam suas criptomoedas na rede. Em troca, eles são aleatoriamente selecionados para verificar transações na rede baseado na sua quantidade de criptomoedas delegadas.



### UTXO estendido de Ergo e Prova-de-Trabalho

Fundada em 2018, a Blockchain Ergo utiliza tanto o mecanismo de consenso PoW quanto o modelo UTXO estendido (similar ao modelo UTXO de Bitcoin). A escolha que Ergo fez por PoW foi baseada em anos de pesquisa e em um entendimento de que esse mecanismo de consenso ainda tem espaço para desenvolvimento e melhoramento.



Ergo esforçou-se para optimizar o consenso PoW enquanto construindo sobre suas fundações sólidas. Isto, em combinação com a implementação de contratos inteligentes no UTXO estendido, é a principal fundação da blockchain Ergo. 



### Ergo e o UTXO estendido

O modelo UTXO estendido é onde um total de saídas não-gastas de transações são registradas após cada transação. Bitcoin primeiro introduziu UTXO e, em contraste com estado global compartilhado de Ethereum onde qualquer conta pode modificar, UTXOs são estruturas de dados imutáveis e de curta duração.



Enquanto UTXO oferece muitas garantias de privacidade e até mesmo escalabilidade, a implementação de contratos inteligentes é restrita no modelo UTXO que Bitcoin usa. Porém, no caso de Ergo, o UTXO foi desenhado com ErgoScript para permitir contratos multi-estágios com operações de conhecimento-zero impulsionadas pelos Protocolos Sigma. Ergo possui suporte a Provas Não-Interativas de Provas-de-Trabalho (NIPoPoWs, em inglês) desde seu lançamento para possibilitar clientes leves eficientes e também *sidechains*. 



Ergo introduziu UTXOs em modo somente-leitura para permitir a formação de cadeias de transações UTXO. Em resumo, o UTXO estendido de Ergo possui habilidade para contratos inteligentes e provê uma plataforma para construção de dApps e ferramentas DeFi que maximizam o design escalonável dos UTXOs.



### ErgoMixer — Uma Ferramente para Privacidade em Ergo

Desde a implementação de Protocolos Sigma no consenso PoW e no modelo UTXO, a blockchain Ergo foi construída com privacidade e segurança em mente.



ErgoMixer é o primeiro "misturador" (*mixer*) não interativo e sem custódia em uma blockchain. Essa ferramenta baseada em privacidade funciona como uma carteira física onde um usuário pode gastar ou fazer uma transferência sem relevar seus fundos. O dApp é não-autorizado, permitindo que qualquer um na blockchain Ergo possa esconder detalhes privados quando conduzindo transações.



## Cúpula Ergo: Semana da Privacidade

Como uma comunidade comprometida com o futuro da descentralização em blockchain, Ergo hospedará uma cúpula sobre privacidade entre 17 e 23 de Fevereiro de 2022. A Cúpula de Privacidade tem a participação de diversos convidados de peso que são especialistas na indústria e acontecerá no [canal do YouTube](https://www.youtube.com/c/ErgoPlatform) da Plataforma Ergo. Todo entusiasta de blockchain / DeFi está convidado a participar nessa excitante cúpula que está por vir!



<!--EndFragment-->