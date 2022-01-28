---
title: "Construindo Ergo: Protocolos Sigma"
date: 2020-03-16
author: "Equipe Ergo"
authorPhoto: "/img/logotype_black_circle.svg"
blogPhoto: "/img/blog/ergo_sigma.jpg"
tags: ['Construindo Ergo', 'Equipe Ergo']
---

_Contratos inteligentes em Ergo e funcionalidades DeFi são construídas com Protocolos Sigma – uma classe poderosa e flexível de provas de conhecimento-zero. Descubra mais sobre o por quê de sua importância, e como eles colocam Ergo na frente dos competidores._

Criptografia é uma área fascinante, e um de seus conceitos mais intrigantes e excitantes é conhecido como provas de conhecimento-zero. Em termos simples, uma prova de conhecimento-zero permite que alguém prove que sabe a solução de um problema sem que se revele a solução em si.

Digamos que alguém encontre um telefone em um bar. Você pode provar que o telefone é seu travando a tela, destravando a tela, e mostrando a tela destravada a pessoa que o encontrou. Este é um exemplo simples de prova de conhecimento-zero: você provou que o telefone é seu sem divulgar qualquer informação sensível.

Em criptografia, a maioria dos problemas práticos estão associados a segredos. A aplicação mais popular encontra-se em assinaturas digitais, que são usadas por milhões de pessoas todos os dias ao redor do mundo. Essencialmente, estas assinaturas envolvem dizer: ‘Esta mensagem prova que eu sei a chave privada associada a esta chave pública – mas não revelarei a chave privada’. (Nem todo esquema de assinatura digital usa provas de conhecimento-zero, mas o mais popular usa.)

## Protocolos Sigma

Dentre as centenas ou até milhares de protocolos de conhecimento-zero, há uma sub-classe de protocolos de prova-de-conhecimento eficientes e combináveis, chamados Protocolos Sigma. Estes também são conhecidos como Provas de Schnorr Generalizadas. Protocolos Sigma podem ser representados como assinaturas digitais de uma forma direta, nos permitindo pensar neles efetivamente como assinaturas no contexto de blockchain.

Portanto, uma assinatura Schnorr é uma simples assinatura de protocolo Sigma. Assinaturas Schnorr foram propostas como [uma alternativa às atuais assinaturas em Bitcoin](https://en.bitcoin.it/wiki/Schnorr). (É um dos esquemas de assinatura mais eficientes, razão pela qual seria benéfico para Bitcoin.)

Porém, há dezenas de Protocolos Sigma. Uma das melhores coisas sobre eles é o fato de serem combináveis usando simples lógica AND (E) e OR (OU). Você pode pedir por uma assinatura com a seguinte declaração: ‘Prove para mim o conhecimento deste segredo OU daquele segredo’ (está é uma assinatura em anel um-de-dois). Ou você pode perguntar: ‘Prove para mim o conhecimento de dois desses três segredos’ (uma assinatura em anel dois-de-três). Estes são apenas dois exemplos simples; há muitos mais, e eles podem ser muito mais complexos e sofisticados.

## Ergo: Sigma + blockchain

Quando combinadas com uma blockchain, essas provas combináveis habilitam o desenvolvimento de casos de uso muito poderosos. A lógica para provas pode incluir condições baseadas no estado da blockchain. Por exemplo,  ‘Se a última altura de bloco foi atingida, Alice pode fornecer conhecimento de uma chave secreta para um reembolso. OU uma assinatura em anel entre Alice e Bob é necessária para gastar moedas.’ Ou ‘Se esta conta possui no mínimo 100 ERG, Alice OU Bob podem remover fundos acima daquele valor.’

Logo, aplicações DeFi muito interessantes e flexíveis podem ser construídas em Ergo usando protocolos Sigma seguros, diretos e eficientes.
