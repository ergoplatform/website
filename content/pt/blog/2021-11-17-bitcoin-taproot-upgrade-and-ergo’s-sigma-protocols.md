---
title: Atualizaçao Taproot de Bitcoin e Protocolos Sigma de Ergo
date: 2021-11-17T16:29:53.359Z
author: Plataforma Ergo
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/taproot.png
tags:
  - Building Ergo
---
<!--StartFragment-->

A recente [atualização Taproot (em inglês)](https://www.research.arcane.no/blog/what-is-taproot-the-next-bitcoin-upgrade) de Bitcoin inclui diversas mudanças que estão gerando muitos debates. A atualização Taproot consiste de três Propostas de Aperfeiçoamento da Bitcoin (BIP, em inglês): Assinaturas Schnorr (BIP340), Árvore Sintática Abstrata Merkeliana (MAST-BIP341) e Tapscript (BIP342). Com esta atualização, Bitcoin permitirá maior escalabilidade, privacidade  e um design flexível de contratos inteligentes. 



Ergo igualmente baseou seu design em [Protocolos Sigma](https://ergoplatform.org/pt/blog/2020_03_16_ergo_sigma/), também conhecidos como Provas de Schnorr Generalizadas. Ergo foi lançada já com designs de  escalabilidade e privacidade em mente, como NiPoPoWs que foram similarmente imaginados para Bitcoin. Além disso, Ergo se utiliza do poder do modelo UTXO estendido e da duradoura segurança de protocolos do tipo Prova-de-Trabalho.



BIP340 introduz o esquema de Assinaturas Schnorr, que tem sido debatigo entre desenvolvedores de Bitcoin desde 2018. Assinaturas Schnorr são consideradas como tendo um alto nível de segurança enquanto não abrindo mão de um processo rápido de verificação. Assinaturas Schnorr fazem com que transações complexas parecerem transações regulares, o que torna difícil distingui-las dentre várias transações.



BIP341 implementa uma Árvore Sintática Abstrata Merkeliana ([MAST, em inglês](https://bitcoinops.org/en/topics/mast/)) que possibilita a compilação de muitas *hashes* sob uma única *hash*. Esta estrutura permite a quem está gastando escolher algumas condições a serem cumpridas e outras condições não serão reveladas. MAST possibilita que o processo de verificação aconteça de forma mais simples, aumentando a expressividade e privacidade, sem enfraquecer a segurança.



O antigo design "pague-para-executar-script" (P2SH, em inglês) de Bitcoin era limitado no que diz respeito à privacidade dos contratos inteligentes. Se estivesse usando um contrato de multi-assinaturas, o script do contrato era revelado após a transação. Isto revelaria informações sobre os usuários, além de simultaneamente inchar a blockchain com dados desnecessários. A nova implementação do design MAST design permite esconder essas informações extras atreladas ao contrato. Com provas de Schnorr, Taproot pode até esconder evidências de que a estrutura MAST existiu.



BIP 342 [Tapscript](https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki#cite_note-9) atualiza o Script Bitcoin, implementando as atualizações Schnorr e MAST mencionadas anteriormente. Tapscript também remove os limites de tamanho de script (10.000 bytes) e de número de *opcode (tradução não feita)*. Portanto, melhora o *hashing* de assinaturas e permite scripts mais expressivos. 



A inclusão de BIP340 e provas de conhecimento-zero em Bitcoin permite interoperabilidade entre Ergo e Bitcoin. Permite também *atomic swaps* privados entre blockchains e potencialmente *sidechaining* (utilização de uma blockchain como rede auxiliar de uma blockchain principal) em um futuro próximo. 

Enquanto Ergo não é uma blockchain dedicada exclusivamente à privacidade, seus Protocolos Sigma possibilitam aplicações de privacidade com conhecimento-zero que usem Assinaturas Schnorr para permitir verificação. Isto possibilita aplicações em *Camada 2*, como por exemplo Provas Não-Interativas de Provas-de-Trabalho ([NIPoPoWs, em inglês](https://nipopows.com/)) e *sidechains* para operação anônima em Ergo. 



A linguagem de Ergo, ErgoScript, já inclui o que imaginado para Bitcoin - emprega uma estrutura similar, mas com diferentes técnicas de implementação de uma linguagem de contratos inteligentes mais expressiva com elementos de UTXO e de PoW . Ergo almeja ser a plataforma para aplicações financeiras descentralizadas que sejam seguras, complexas, escaláveis, e privadas. Bitcoin pode utilizar da segurança de Ergo com sua interoperabilidade em DeFi.



<!--EndFragment-->