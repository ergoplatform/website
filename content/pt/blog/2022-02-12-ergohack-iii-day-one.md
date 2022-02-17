---
title: "ErgoHack III: Dia Um"
date: 2022-02-12T17:40:08.037Z
author: Fundação Ergo
authorPhoto: /img/uploads/logo.png
blogPhoto: /img/uploads/eh_d1-1-.png
tags:
  - Construindo Ergo
  - Equipe Ergo
---
<!--StartFragment-->

O primeiro dia do ErgoHack III está completo e aqui estão as últimos avanços no desenvolvimento dos projetos. O ErgoHack continua até amanhã a noite, então veja abaixo o que está acontecendo:

## **Integração com Ledger (Nautilus - Satergo - SAFEW)**

### **Nautilus**

\- Conexão inicial e integração de assinatura de transações está pronta

\- O aplicativo Ledger possui um problema com bytes assinados retornados (a equipe Tesseract está trabalhando nisso no momento)

\- Trabalhando em refinamentos da interface gráfica

\- Sinta-se a vontade para falar comigo a qualquer momento se precisar de ajuda integrando a Nautilus com os seus projetos.

### **Satergo**

\- Conexão USB está finalizada

\- Comecei a implementação de protocolo de Ergo no aplicativo Ledger em Java

### **SAFEW - Carteira Ergo Simples e Rápida**

\- Repositório do projeto no GitHub: <https://github.com/ThierryM1212/SAFEW>

\- O objetivo é fornecer uma carteira simples e segura construída para Ergo. 

Você pode contribuir se quiser testando, revisando, promovendo e fazendo *pull requests*.

\- Preparando um novo lançamento para adicionar algumas melhorias à carteira ErgoPay e uma interface para o ErgoMixer dentro da carteira (atualização de dependências). Começarei a olhar a integração com Ledger amanhã, quando conseguirei ter uma Ledger.

### **Cassino NightOwl:**

\- Explicamos em slides a implementação de contratos de Swap

\- Explicamos em slides a implementação de contratos LP

\- Projeto (<https://github.com/nightowlcasino>) está público

\- Para o *frontend*, a página inicial está 90% pronta. O código do website está rodando bem com responsividade e ponto de interrupção do menu. Terminando botão "conectar carteira” e alguns pequenos detalhes de estilo. Procederemos então com a página de jogo de moeda e página de troca (esses devem ser rápidos). 

\- Modelo para troca será finalizado hoje a noite. 

Continuamos trabalhando na integração da Nautilus com o *backend* e devemos terminar hoje a noite. O contrato inteligente para troca e liquidez está completo. 

\- Contrato da Roleta está sob revisão (disponibilizaremos o contrato completo amanhã). Contrato de jogada de moeda será completado até amanhã também. Começamos a trabalhar no design da integração do ErgoMixer. Estamos encaminhados para lançar o primeiro jogo até o final do hackathon para testes. Além disso, trabalhamos na atualização do nosso artigo e fizemos um post no blog do Night Owl sobre privacidade e segurança.

\-Proposta publicada:  <https://medium.com/@NightOwlCasino/night-owls-security-and-privacy-mission-ergohack-lll-5371922caaf9>

### **AnetaBTC:**

\- Toques finais no vídeo demonstrativo do progresso do *frontend* da AnetaBTC

\- *Frontend* do TosiDrop estará completo até hoje a noite; Hazey então começará a construir a API do *backend*

\- Carteira Aneta está bem encaminhada; Esperamos começar testes pela comunidade até o final desse final de semana

<https://github.com/anetabtc>

### **GuapSwap:**

Feito:

\- Contrato proxy

\- Comandos determinados para serem usados pelo programa

\- Formatação de guapswap_config.json e proxy_addresses.json

\- Objetos config para armazenamento de configurações de usuários em arquivos json

Será feito hoje:

\- Contrato para taxa de serviço

\- Consolidação de todas as constantes necessárias para pools e tokens

\- Implementação do comando geral

<https://github.com/GuapSwap>

### **Delphi - Interface para Pools Oráculo**

\- Fez bom progresso no *backend* de estatísticas para pools v1

\- Começou a trabalhar no construtor-conector

\- Organizando o primeiro esqueleto do *frontend*; compartilhará um link uma vez que estiver funcionando

Estamos todos entrando no ritmo, parece

Github: <https://github.com/thedelphiproject/connector-builder>

Página de destino: <https://delphiproject.org/>

### **Hype10Use:** 

\- Conseguimos reunir todos os códigos que estamos fazendo desde o último hackathon. Nosso objetivo é conseguir hospedar o dApp hoje a noite e trabalhar nele diretamente para que seja mais fácil demonstrarmos o dApp no fim do hackathon. Nosso time começará a trabalhar completa a partir dessa manhã, já que hoje foi principalmente sobre nos organizarmos, revisitar nossos problemas e arrumar um plano para daqui para frente.

\- Tivemos um grande problema com a integração de carteira ontem, mas não fomos dormir até consertá-lo :D. Agora que isso está funcionando e nossas transações são processadas na blockchain, hoje é dia de finalizar os contratos, enquanto dois desenvolvedores de *frontend* trabalharão para tornar o *frontend* mais amigável

### **Ergo-DNS:** 

Minutos de Encontro

\- Demonstração do @6directions - 

   EasyName -> Holding Address Resolver está funcionando

   Verificador de falsificação de NFT, EasyName, está funcionando

   Hipótese - Todos os EasyNFT seriam cunhados a partir do mesmo endereço

   Convertendo para biblioteca do JavaScript é possível para acelerar a integração com Nautilus

\- Demonstração do @Balb -

   *Frontend* está de certa forma pronto.

   Fluxo de cunhagem de NFTs baseado em Ergo Assembler. 

      Passo 1 - Receber entradas de usuário

      Passo 2 - Gerar endereços de contratos inteligentes e esperar que ERG seja recebida

      Passo 3 - Transação de ERG pode ser feita através de conector dApp ou pela carteira

      Passo 4 - Contrato inteligente ou cunhará o NFT ou retornará os fundos menos a taxa de transação

   Cada endereço de cunhagem de NFT seria diferente se Ergo Assembler fosse usado

   Solução baseada em Appkit pode permitir que mesmo endereço de cunhagem seja repetido para cada NFT.

Criamos *backend* inicial para cunhar NFTs de domínios

Creiamos um sistema API para verificar endereços de cada dono de NFT

Planejando como conectar cada módulo do sistema entre si

### **SkyHarbor: Mercado de NFTs**

\- Tivemos nossa reunião de grupo, solidificando a melhor forma de lidar com dados de blockchain

\- Terminamos o contrato de vendas de ERG e testamos compra e venda de NFTs

\- Implementamos a interface gráfica de compra e construímos a transação de venda no *frontend* usando a carteira Nautilus. Colocar um NFT a venda funcionou muito bem.

\- Implementamos o mostruário de NFTs à venda.

Agora, trabalhando para fazer funcionar a funcionalidade de compra. Uma vez que isso esteja pronto, teremos um mercado funcionando completamente à base de contratos inteligentes. Queremos fazer o rodar num ritmo tolerável, então só o lançaremos após a implementação da nossa base de dados. Trabalharemos nisso no Sábado e no Domingo com @HazeyOneKenobi 

### **Endereços Furtivos:**

**Time 1:**

\- Trabalhando em endereços furtivos baseados nessa conversa no Fórum Ergo. <https://www.ergoforum.org/t/stealth-address-contract/255>

\- Desenvolvemos um projeto para criar um endereço furtivo e escanear as caixas furtivas. Agora, estamos trabalhando na incorporação com o mixer. Se funcionar e passar por todos os testes, o próximo nível de interface gráfica do mixer precisa ser editado para ter a funcionalidade de furtividade.

**Time 2:**

\- Desenvolvendo uma nova abordagem para implementação de pools furtivas que serão utilizáveis com qualquer carteira com o suporte de um conversor de endereços.

\- Provando os contratos primeiro no scastie playground, para então implementá-los em sigma-rust. Primeiros testes começaram.



### **Redes Petri:**

\- Criei um *pull request* no *sigmaverse* para o projeto: <https://github.com/iandebeer/ergo-castanet>. Uso o construtor de rede Petri de um serviço GRPC usando as definições protobuf em <https://github.com/ergoplatform/ergo-appkit/tree/develop/docs/design-contracts> 

\- Com isso, estou agora implementando o "Jogo Cara ou Coroa" como uma Rede Petri, com a ideia de que posso visualizar os estágios, validar o fluxo e rodar uma instância do dApp ErgoPlayground ou Appkit.

### SuSy:

* Sem atualizações disponíveis

<!--EndFragment-->