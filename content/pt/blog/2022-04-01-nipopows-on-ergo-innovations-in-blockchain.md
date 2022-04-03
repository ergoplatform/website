---
title: "NIPoPoWs em Ergo: Inovações em Blockchain"
date: 2022-04-01T15:42:00.322Z
author: Plataforma Ergo
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/news-blog-52-1-.png
tags:
  - Construindo Ergo
---
A blockchain Ergo está rapidamente se tornando conhecida dentro do espaço cripto como uma líder em desenvolvimento e inovação em blockchains. Mesmo que essa reputação seja merecida e algo que orgulha a equipe de desenvolvimento, as razões para esse elogio frequentemente não são apreciadas pelo entusiasta médio de cripto. Por que Charles Hoskinson (fundador do projeto Cardano) chamaria Ergo de uma “maravilha técnica”? A verdade é que há muitas razões para elogiar Ergo; a blockchain foi construída do zero. Ela melhora muitos aspectos das inovações mais bem-sucedidas de cripto e implementa diversas ferramentas criptográficas que são inéditas no espaço cripto. 

Para verdadeiramente apreciar o que torna Ergo maravilhosa, é necessário um conhecimento profundo de tecnologia blockchain e a paciência para navegar pelo design de protocolo completo, porém elegante, pedaço por pedaço. Protocolos Sigma, ErgoScript, Autolykos, eUTxO e O Manifesto em si, cada um merece a atenção dos desenvolvedores, investidores e usuários. Este artigo tem a intenção de descrever e simplificar uma inovação em particular na blockchain Ergo: NIPoPoWs. 

## O que são NIPoPoWs? 

NiPoPoW é uma sigla em Inglês para "Provas Não-Interativas de Prova-de-Trabalho". Vamos por partes. O PoW no final de NIPoPoW significa que esse conceito é baseado no mecanismo de consenso chamado Prova-de-Trabalho (do Inglês "Proof-of-Work"). Como todas as outras redes PoW, Ergo depende que mineradores resolvam quebra-cabeças criptográficos que dão a eles o direito de verificar transações e adicionar blocos na blockchain. A sima desses blocos armazena a história inteira das transações completadas na rede Ergo. Em seguida, o "Po" no centro de NIPoPoW significa "Provas". Ter prova da Prova-de-Trabalho significa usar criptografia para entrar em um nível de abstração da blockchain de uma forma matematicamente verificável. Em outras palavras, PoPoW é uma representação leve, porém provadamente acurada, da blockchain. Por último, o "NI" significa "não-interativas". Não-interativa significa que aplicações operam no *backend* de um programa sem a participação ou permissão de outro usuário. Esse tipo de sistema é auto-contido, consistente e completo. Aplicações não-interativas são como máquinas de venda automáticas, prontas para serem usadas por qualquer um.

## Por que precisamos de NIPoPoWs?

Agora que sabemos o que que são, você pode se perguntar: "por que precisamos de NIPoPoWs"? NIPoPoWs solucionam diversos problemas, gerando oportunidades de aumento de adoção e acessibilidade de tecnologia blockchain. A aplicação mais óbvia de NIPoPoWs é a redução do tamanho de uma blockchain. A blockchain Bitcoin está acima de 300GB. Devido a contratos inteligentes, a blockchain Ethereum está em quase 1TB! Qualquer um que queira executar um nó terá que possuir um disco rígido considerável e aguardar entre 1 e 5 dias para sincronizar o nó. NIPoPoWs permitirão que clientes super-leves sincronizem com a blockchain usando menos de 1MB de dados. Essa redução dramática também implica uma exigência tecnológica reduzida. NIPoPoWs irá habilitar que tecnologias limitadas, como telefones de *flip*, operem com serviços de dados limitados e alcancem o mesmo nível de segurança que um nó completo. Isto tem o potencial de revolucionar completamente a indústria.

Essa abordagem leve também possui outros benefícios. A primeira é conhecida como *mineração em espaço-log*, onde cada bloco sendo adicionado à blockchain aumenta o tamanho da rede apenas logaritmicamente. Note que logaritmos são a função inversa das exponenciais; cada bloco só ocupa uma quantidade muito pequena de dados. Isto é crítico para aumentar o número de mineradores que participam na segurança da rede. Em segundo lugar, NIPoPoWs permitirá operações super eficientes de cadeias paralelas. Estas permitirão que novos protocolos sejam construídos usando a blockchain Ergo, que pode ser verificada por mineradores sem congestão. Essa tecnologia será a fundação da abordagem de escalabilidade em Camada Dois da Ergo. Em terceiro lugar, e talvez o mais espetacular tecnologicamente, estão as "bifurcações camurça". Esse desenvolvimento permite que a blockchain seja atualizada sem as consequências das tradicionais bifurcações duras e suaves; bifurcações camurça permitem que atualizações sejam retroativamente compatíveis. Mesmo se apenas uma parte dos mineradores implementes a última atualização, a abstração de NIPoPoWs por fora da rede permite que eles suplantem instâncias mais antigas do protocolo sem completamente remover a habilidade dos mineradores não-atualizados de segurar a rede. Bifurcações camurça são difíceis de entender, mas esperamos que essa explicação simplificada seja o suficiente para a maioria dos leitores. 

## Como NIPoPoWs funcionam? 

Um NIPoPoW é essencialmente uma técnica de compressão de dados, e o foco é em super blocos. Usualmente, blockchains Provas-de-Trabalho alcançam consenso ao permitir que mineradores compitam pelo direito de cunhar novos blocos de dados na blockchain. A corrida é para solucionar um quebra-cabeças criptográfico; mineradores usam placas de vídeo para produzir soluções aleatórias e comparará-las com o quebra-cabeças para ver se estão corretas. A beleza da criptografia está no fato de que os quebra-cabeças criptográficos são difíceis de resolver, mas fáceis de verificar. Isso significa que se os números aleatórios que um minerador gera calharem de resolver o quebra-cabeças, eles podem verificar suas soluções e reivindicar a recompensa do bloco. 

Em uma ocorrência rara e aleatória, alguns blocos são muitos mais difíceis de resolver do que outros. Esses blocos, conhecidos como super blocos, possuem mais zeros em sua solução do que blocos médios. Isso os torna facilmente identificáveis e acessíveis para outros usos. Em um NIPoPoW, super blocos são usados para hospedar bits de dados de todo bloco entre ele e o último super bloco. Esse dado é armazenado no cabeçalho do bloco e então usado como uma chave que pode acessar e confirmar qualquer informação detida por quaisquer dos blocos que contribuíram com dados para o super bloco. Cada vez que um bloco é cunhado, os dados dos blocos regulares se tornam desnecessários. Então, os super blocos existem como uma rede leve em si. Carteiras, dApps e usuários podem confiar somente em super blocos para interagir segura e confiavelmente com a blockchain. Como eles só tem que sincronizar-se com os super blocos, eles podem evitar baixar a blockchain inteira e melhorar a eficiência em 80%. 

Para ajudar o entendimento dos leitores, veja o gráfico abaixo! 

![](/img/uploads/nipopows-on-ergo.png)

## Quer saber mais? 

Se tiver interesse em aprender mais sobre a tecnologia NiPoPoW ou sobre como ela está sendo integrada na blockchain Ergo, explore os links abaixo: 

* <https://docs.ergoplatform.com/dev/protocol/nipopow/> (em Inglês)
* <https://ergoplatform.org/pt/blog/2021-08-26-nipopow-applications-light-clients-and-side-chains/> 
* <https://veriumfellow.medium.com/what-will-ergo-bring-to-cardano-2f7ae911a9bd> (em Inglês)

Se preferir ler artigos acadêmicos sobre esse assunto, os links estão abaixo:

* <https://eprint.iacr.org/2017/963.pdf> 
* <https://eprint.iacr.org/2019/1444.pdf>
* <https://eprint.iacr.org/2021/623.pdf>