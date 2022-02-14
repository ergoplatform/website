---
title: "ErgoHack III: Dia Dois"
date: 2022-02-13T18:48:32.211Z
author: Fundação Ergo
authorPhoto: /img/uploads/logo.png
blogPhoto: /img/uploads/news-blog-35-1-.png
tags:
  - Construindo Ergo
  - Equipe Ergo
---
<!--StartFragment-->

Vendo o segundo dia de atualizações do ErgoHack III, está ficando claro que será muito difícil escolher um vencedor! Veja as notícias mais novas vindas das equipes.

## Integração com Ledger (Nautilus - Satergo - SAFEW)

### Nautilus

Trabalhando em melhorias na interface gráfica para conexão com Ledger e fluxo de entrada

Ajudando outros times com integração com a Nautilus

### Satergo

Implementou o protocolo, exceto algumas partes que ainda não estão claras. Agora, criará as interfaces gráficas e implementará suporte para carteira física tanto no que diz respeito à carteira quanto às transações.

### SAFEW - Carteira Ergo Simples e Rápida:

Atualmente trabalhando com integração Ledger. Até o momento, possível conectar-se e descobrir os endereços para construir a carteira. Ainda trabalhando em ajustes da interface gráfica e de outras funcionalidades na administração da carteira, antes de iniciar a assinatura de transações.

### Cassino NightOwl:

Preparou a apresentação resumindo o mecanismo customizável do jogo do Cassino implementando um simples jogo de roleta.

Escreveu documentação para principais contratos:

<https://github.com/nightowlcasino/ERGOHACK-III->

<https://dev.nightowlcasino.io/#> 

### AnetaBTC:

Integração com Yoroi e Nautilus para anetaBTC e TosiDrop. Também terminaram documentação e nova página de destino. Por último, preparando vídeo demonstrativo da Aneta Wallet

### GuapSwap:

Feito: -Criação de constantes: ErgoDEX PoolIDs, TokenIDs, etc. 

Atualmente: -Criação de funções matemáticas de ajuda para cálculo de parâmetros na ErgoDEX 

Futuro: -Continuar implementação de funcionalidade para os diferentes comandos: guapswap$ generate guapswap$ swap <endereço_proxy> 

### Delphi - Interface para Pools Oráculo:

Tem feito progresso decente da lista de tarefas com um objetivo ousado de terminar todas até o final do EH3 

\-Serviço API provendo uma lista de pools oráculo conhecidas

*Dados Específicos de Pools*

\-séries temporais dos dados

\-quantidade de dados postados até o momento

\-série temporal de oráculos ativos (oráculos que estão submetendo dados)

*Dados Específicos de Oráculos:*

\-Data do primeiro post

\-Data do último post

\-quantidade de dados submetidos até o momento

\-série temporal dos dados

\- Balb: Dividindo tempo. Primeiro teve que modificar o conector para que os dados corretos fossem analisados com base na URL. Isto está funcionando agora, mas ainda precisa de tempo para criar uma forma de baixar os binários.

### Hype10Use: 

Hoje foi principalmente sobre atualizar a interface gráfica e mecanismos de contrato, compilação de contrato no backend e, no frontend, composição de transações e sistema de login. Planejávamos ter um exemplo completo funcionando hoje, mas ainda estamos com dificuldades técnicas entre frontend e backend.

### Ergo-DNS:

Trabalhando na criação de APIs entre frontend e backend.

Planejando padronização para nome do token de domínio.

Começamos o design de contratos inteligentes com processo de cunhagem.

### SkyHarbor NFT Marketplace:

Sistema de compra, venda e cancelamento de vendas na blockchain está pronto. Mais testes de erros e então partiremos para construção do website.

### Stealth-Addresses:

*Time 1:*

Embutimos nosso projeto no mixer. Agora, estamos testando o mixer e também trabalhando na interface gráfica. Amanhã, tentaremos colocar nosso projeto principal e nossa versão do mixer no GitHub e compartilhar o link.

*Time 2:*

Adicionamos uma PR ("pull request") para o necessário acesso DHTuple na certeira - <https://github.com/ergoplatform/ergo-playgrounds/pull/24> Uma vez que isso seja resolvido, eu poderia fazer um PR para adicioná-lo a "ergo by example" ("Aprendendo Ergo por exemplos").

### Petri-Nets:

Cancelei o "pull request" no Sigmaverso já que este projeto é uma estrutura de desenvolvimento, não um caso de uso da Plataforma Ergo. Esperamos ter mais progresso hoje, porém ainda é necessário muito conhecimento fundamental para avançar. Li mais do que programei, mas ainda acredito que ainda me encaixo bem. Também está claro para mim que o âmbito do projeto é maior do que a intenção do Hackathon, mas foi o que me fez começar e agora tenho momento. Espero pelo menos usar o ErgoHack III para provar a viabilidade do projeto.

Estou estudando os aspectos categóricos de Petri Nets já a algum tempo, além de fazer uma implementação de Scala 3 em um projeto de código aberto que criei: <https://github.com/iandebeer/castanet>. O intuito original era compor aplicações a partir de Serviços Knative em Kubernetes, mas isso requer muita programação Macro para funcionar com interfaces GRPC.

### SuSy:

* Sem atualizações disponíveis

<!--EndFragment-->