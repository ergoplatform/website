---
title: "Construindo Ergo: ErgoScript"
date: 2021-06-09T15:23:35.828Z
author: root7Z
authorPhoto: /img/uploads/rootz-the-storyteller-4root7z.png
blogPhoto: /img/uploads/ergcode.png
tags:
  - Building Ergo
---
<!--StartFragment-->

Estamos buscando novos desenvolvedores no nosso time para explorar ErgoScript conosco. ErgoScript é uma nova linguagem para criação de contratos inteligentes em Ergo. Seu design é baseado em Scala (sigla para Linguagem Escalável, em inglês), que é uma linguagem de programação para propósitos diversos. O [Artigo (em inglês)](https://ergoplatform.org/docs/ErgoScript.pdf) de Ergo nota que:

“ErgoScript é uma linguagem de script para criptomoedas que é poderosa e amigável a protocolos. Programas em são usados para especificar as condições sob as quais moedas podem ser gastas. A linguagem suporta um tipo de provas não-interativas de conhecimento-zero chamadas de Protocolos Σ(Sigma), e é flexível o suficiente para permitir assinaturas em anel, multi assinaturas, múltiplas moedas, *swaps* atômicos, scripts auto-replicantes e computações de longo prazo.”

## O UTXO Estendido

ErgoScript é construído considerando a segurança e privacidade de Bitcoin e o propósito de tornar acessíveis todos os tipos de contratos financeiros complexos a todo mundo. Contudo, o design de Bitcoin não permite *loops*, o que torna impossível usá-la para construir contratos inteligentes complexos. Como ErgoScript permite auto-replicação, pode ser usada para criar processos na blockchain que são Turing-completos.

Outra abordagem para criar contratos inteligentes em blockchain é o modelo baseado em Contas, como em Ethereum. O design de Ethereum facilita *smart contract opeld coins (tradução não feita)*. Logo, a Saída de Transação não-gasta (UTXO, em inglês) nos mostra qual chave privada hospeda qual *coiration (tradução não feita)* por intermédio de processamento de contratos inteligentes como contas correntes. Em Bitcoin, não há contas que *hons (tradução não feita)*. Moedas estão em um conjunto de endereços representados com uma única UTXO. Também é mais fácil incluir esquemas de privacidade neste modelo do que no modelo baseado em contas.

Portanto, Ergo desenvolveu o modelo UTXO de Bitcoin para o modelo UTXO estendido através da introdução do design UTXO legível. Isto habilita contratos inteligentes a usarem UTXOs como dados de entrada sem que precisem ser alterados. Assim, nós estão verificando transações, e não balanços. Em comparação, no modelo de contas da Ethereum, nós fazem isso por intermédio de verificação de todas as contas para validar o sistema.

Em comparação, o modelo UTXO é mais escalável, mas também é mais complicado de se construir ferramentas de interface com usuário (UI, em inglês). O modelo de conta corrente permite acesso mais fácil para desenvolvedores, mas demanda mais computacionalmente da blockchain, o que pode levar à congestão da rede. 

Além disso, UTXO permite computação paralela e uma computação mais fácil de *atomic swaps* sem custódia. 

## NIPoPows

Uma importante  característica de Ergo é o fato de estar pronta para o uso de NIPoPoWs (Provas não-interativas de Prova-de-Trabalho, em inglês), o que permite que clientes leves interajam com a blockchain sem a necessidade de baixar toda a blockchain localmente. Isto é beneficial para criação de clientes leves eficientes, como carteiras em aparelhos móveis. 

Outra implementação é a comunicação entre blockchains que usam Provas-de-Participação (PoS, em inglês). Redes PoS, como a Cardano, podem interagir com Ergo via integração NiPoPoW. Tais esquemas de verificação podem eliminar a necessidade de estruturas DAO centralizadas e criar novas operações não-interativas entre blockchains. 

Colocando de forma simples, NiPoPoWs agem como *sidechains* (uma blockchain separada que auxilia a blockchain principal). Duas ou mais blockchains podem se integram através de NiPoPoWs sem a necessidade de mudanças em outras blockchains. Tal integração pode eliminar, por exemplo,  “Wrapped Tokens” (tokens que têm valor atrelado a outros tokens, e dependem de governança DAO). 

A ferramenta NIPoPoW é importante na criação de redes blockchain e provê acesso mais fácil a clientes. Também são úteis para melhorar escalabilidade, por criarem organizações do tipo *Layer 2* (em tradução livre, Camada 2). 

Estamos mais perto do evento ErgoHack e ainda há muito para ser explorado sobre os casos de uso de ErgoScript. Se está procurando maneiras de contribuir com o Ecossistema Ergo, [veja aqui](https://ergoplatform.org/pt/blog/2021-06-04-ergo-community-launches-its-first-hackathon-ergohack/) e entre em contato no Telegram ou Discord!

**Fontes (em inglês):**

\
\
[Destravando o Potencial do Modelo UTXO](https://github.com/Emurgo/Emurgo-Research/blob/master/smart-contracts/Unlocking%20The%20Potential%20Of%20The%20UTXO%20Model.md)

[Uma análise de poeira em criptomoedas baseadas em UTXO](https://eprint.iacr.org/2018/513.pdf)

<https://nipopows.com/> 

[NiPoPoWs & Mineração Espaço-Log - Ergo Cast Episódio #5](https://www.youtube.com/watch?v=OUjxar1WCmo)



<!--EndFragment-->