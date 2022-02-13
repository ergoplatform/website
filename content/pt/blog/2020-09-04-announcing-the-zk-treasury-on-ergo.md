---
title: Anunciando o Tesouro ZK de Ergo!
date: 2020-09-04T18:54:28.168Z
author: Guy Brandon
authorPhoto: /img/uploads/guy_brandon.jpg
blogPhoto: /img/uploads/aziz-acharki-puvpzckrnog-unsplash.jpg
tags:
  - Construindo Ergo
---
<!--StartFragment-->

*O Tesouro de Conhecimento-Zero de Ergo permite que usuários facilmente criem assinaturas digitais conjuntas, com condições sob medida para gastos de fundos, enquanto garantindo que os signatários dos endereços criados permaneçam ocultos.*

Criptografia de Conhecimento-Zero (ZK, sigla em inglês) oferece muitos casos de uso poderosos. O benefício das operações ZK está em não somente serem seguras, mas também serem privadas.

Imagine que você encontre um smartphone no chão de um parque. Uma mulher que está perto de você diz que o celular é dela, mas você não confia nela porque talvez ela apenas queira ficar com o telefone para ela. Ela poderia lhe falar o código de desbloqueio do telefone, mas então você ganharia uma informação que, enquanto dona do aparelho, ela não quereria que você tivesse. Então, você fecha seus olhos e segura o telefone na direção da mulher. Quando abre seus olhos, a tela está desbloqueada. Ela, então, provou ser dona do celular sem entregar qualquer informação confidencial. Este é um exemplo simples de uma prova de conhecimento-zero.

As aplicações disso no mundo blockchain são atrativas. Considere um endereço multi-assinatura dois-de-três convencional na blockchain do Bitcoin. Este endereço requer que pelo menos dois de três donos de chaves secretas para aquele endereço tenham que assinar uma transação para que fundos possam ser movidos. Isso é muito mais seguro que um endereço de assinatura-única, mas deixa a desejar em privacidade. Qualquer pessoa pode ver na blockchain quem assinou a transação.

Com uma assinatura de conhecimento-zero, ninguém sabe quem é responsável por uma transação – sabe-se somente que a transação foi assinada pelo número correto de chaves privadas.

Os Protocolos Sigma de Ergo são excelentes para criação de assinaturas ZK compostas. Em outras palavras, um grupo de usuários pode se juntar e criar um endereço com as condições que eles quiserem especificar. Por exemplo, cinco usuários podem criar um endereço que requer pelo menos três deles para confirmar uma transação. Por outro lado, as condições podem ser mais complicadas: uma startup com sete pessoas poderia criar um endereço através do qual ambos CEO e CFO tenham que assinar a liberação de fundos ou então que pelo menos cinco chaves precisem ser usadas na assinatura de uma transação (oferecendo uma apólice de seguro se ou CEO ou CFO não possa ser acionado(a)).

Ergo sempre foi um projeto voltado à comunidade e sempre tivemos um forte e animado apoio dos nossos desenvolvedores – muitos dos quais preferem permanecer anônimos. Um dos nossos anons (apelido em inglês para "anônimo") foi pioneiro em criar uma interface amigável aos usuários e que torna fácil a formação de grupos de gastos que requer um quórum de signatários para fazer uma transação (já que o processo para fazê-lo era complexo anteriormente, mesmo para usuários mais técnicos).

*Usuário [‘anon_real’ escreve](https://www.ergoforum.org/t/app-on-distributed-signatures/342):*

*Este projeto contém dois apps separados, servidor e cliente.*

*O servidor é acessível a qualquer um que possa propor ideias e requisitar fundos de uma equipe.*

*Por outro lado, todo membro de equipe tem que configurar o app cliente que será responsável por interagir com sua chave secreta, nó, explorador e servidor para criar as necessárias provas para propostas aprovadas.*

*Se uma proposta é marcada como completamente aprovada (aprovações suficientes foram coletadas baseadas na assinatura da equipe), então apps cliente irão gerar as necessárias provas e transação no plano de fundo sem a necessidade de qualquer intervenção dos membros.*

![](/img/uploads/ergsig.jpg)

Você pode encontrar mais [discussão (em inglês) sobre o Tesouro de Conhecimento-Zero no Ergo Fórum](https://www.ergoforum.org/t/zero-knowledge-treasury-on-top-of-ergo/354/3).

Existem muitos casos de uso para essa aplicação para além de seguramente gastar fundos em Ergo. Por exemplo, uma interface similar poderia ser a base de uma [infraestrutura de chave pública](https://www.ssh.com/pki/) descentralizada (dPKI, sigla em inglês): uma forma de gerar e administrar pares de chaves públicas / privadas para autenticação de usuários e aparelhos, porém sem pontos de falha centralizados que existem em configurações PKI de confiança.

Uma grande agradecimento vai para anon_real, e esperamos ver o Tesouro ZK sendo usado pela comunidade Ergo!

<!--EndFragment-->