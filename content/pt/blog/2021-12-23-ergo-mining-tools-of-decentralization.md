---
title: "Mineração de Ergo: Ferramentas de Descentralização"
date: 2021-12-23T17:20:48.055Z
author: Plataforma Ergo
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/mining_ergo_tools_of_decentralization.png
tags:
  - Construindo Ergo
---
<!--StartFragment-->

Ergo é uma blockchain PoW (Prova-de-Trabalho) sob o modelo de consenso chamado Autolykos. O modelo PoW foi escolhido porque oferece os benefícios de um lançamento justo. Um lançamento justo significa que a Plataforma Ergo não pré-minerou uma alocação para o time de desenvolvedores ou investidores. A oferta de ERG só é lançada via protocolo de mineração com o tesouro para desenvolvimento do ecossistema recebendo 10% das recompensas de mineração durante os primeiros dois anos após o lançamento da rede principal de Ergo. Dois anos e meio após o lançamento, o alocação ao tesouro cai para zero. A partir desse momento, o tesouro não receberá qualquer financiamento proveniente de recompensas por geração de bloco.



####  É importante notar que a alocação do tesouro representa somente 4,43% da oferta total de ERG. Isso significa que 95% de ERG está alocado para circulação pública.



Ergo tem diversas ferramentas para dar suporte à privacidade e a descentralização da rede: ErgoMixer, Mineração on-Chain, robôs AMM off-chain, e outras implementações planejadas (e.g. mineração leve com NIPoPoWs). No modelo UTXO estendido (eUTXO, sigla em inglês), ambas partes on-chain e off-chain podem ser usadas em combinação, o que impulsiona tanto a experiência para os usuários quanto para mineradores, com uma rede mais segura e escalável.



Segurança é sempre uma prioridade e as novas funcionalidades de Ergo são projetadas para permitir  que mineradores apoiem a rede enquanto mantendo os altos padrões de segurança. Os itens a seguir representam uma visão geral de algumas das funcionalidades que permitem a descentralização e sustentabilidade da rede:



1. **Autolykos:** 

É um algoritmo de consenso que é minerável em GPUs e resistente a ASICs. Ergo é minerável com placas de vídeo que tenham 4GB de memória RAM. Portanto, é mais acessível ao público. Mineração solo se torna mais difícil quanto mais mineradores se juntem a rede e aumentem a hashrate total da rede. Diversificar o número de pools de mineração para aumentar descentralização é sempre uma prioridade - isso é algo que a Plataforma Ergo ativamente promove. Atualmente, há mais de 15 pools que suportam mineração de Ergo.



2. **Mineração NIPoPoW:** 

Já que diversificar e aumentar o número de pools de mineração é um importante aspecto de descentralização, é igualmente importante a criação de ferramentas que suportem a descentralização. Ergo oferece Provas Não-Interativas de Provas-de-Trabalho (NIPoPoWs, sigla em inglês) que podem ser configuradas como um novas ferramentas para mineração descentralizada.   



Uma das implementações de NIPoPoWs é Mineração de Espaço Logarítmico (explicado em detalhes nesse [artigo](https://ergoplatform.org/pt/blog/2021-07-19-mining-in-logarithmic-space-nipopow-power-and-ergo/)) e sua habilidade de configuar mineração leve para os mineradores. Isso significa que mineradores não precisam fazer o download da blockchain inteira quando fazendo mineração leve, permitindo que mineradores reduzam muito os custos futuros de mineração.



3. **Mineração On-Chain:**

Essa foi uma ideia do ErgoHack I que foi transformada em um projeto durante o ErgoHack II. Mineração on-chain oferece interação com um contrato inteligente, portanto permitindo um processo mais transparente e verificável enquanto minerando em uma pool. Em uma pool de mineração regular, mineradores solo se conectam a servidores centralizados e mineram como se fossem uma pool de uma pessoa só. Dentro dessa estrutura, é impossível verificar se os mineradores estão recebendo suas quotas legítimas. Com mineração on-chain, mineradores podem verificar que o que eles estão recebendo é o que eles foram prometidos - pretende remover as barreiras entre mineradores individuais e pools de mineração.



4. **Robôs AMM**

O modelo off-chain de ErgoDEX levou a alguns debates sobre a descentralização da aplicação. Como Armeanio [explicou aqui](https://ergoplatform.org/pt/blog/2021-10-04-off-chain-logic-and-eutxo/), robôs distribuídos off-chain resolverão o problema de nós centralizados para a ErgoDEX. Quando pessoas tem incentivos (e.g. taxas de execução da DEX) para executar os robôs AMM, é esperado um grande número de usuários executando o backend da ErgoDEX. Um design similar pode ser aplicado para outras aplicações DeFi em Ergo. 



5. **ErgoMixer:**

ErgoMixer é o primeiro mixer não-interativo e sem custódia na blockchain. É um componente útil para aqueles que querem manter suas transações privadas. Os Protocolos Sigma também proporciona uma variedade de esquemas de privacidade. Por exemplo, quando endereços escondidos são implementados dentro de contratos inteligentes, privacidade pode ser uma escolha quando interagindo com a blockchain. 



6. **Aluguel de Armazenamento:**

Esse componente é explicado em [Taxas em criptomoedas: Uma solução para o crescimento exorbitante do estado da rede](https://ergoplatform.org/pt/blog/2021-07-09-cryptocurrency-fees-a-solution-to-unreasonable-state-growth/). Resumindo, é útil eliminar o problema de moedas perdidas e contratos inteligentes não utilizados que consomem espaço na blockchain. A componente de aluguel de armazenamento está incluída no bloco inicial da rede para sustentar o protocolo de mineração no futuro, quando recompensas de mineração comecem a diminuir. Endereços inutilizados pagarão uma taxa de armazenamento de 0,13 ERG por caixa UTXO a cada quatro anos. Essa funcionalidade permite a reintegração de ERG de volta circulação enquanto diminuindo o inchaço da rede devido a dados inutilizados. Através desse processo, mineradores serão capazes de minerar tanto as taxas de transação quanto as taxas de aluguel de armazenamento quando recompensas por bloco diminuirem a zero.



<!--EndFragment-->