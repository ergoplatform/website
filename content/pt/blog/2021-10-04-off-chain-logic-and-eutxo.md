---
title: Lógica off-chain e eUTXO
date: 2021-10-04T16:03:30.700Z
author: Curia Regis Crypto
authorPhoto: /img/uploads/1_70ukrjwixwgrxoxbgdl3fq.jpeg
blogPhoto: /img/uploads/photo_2021-10-04_19-02-03.jpg
tags:
  - Construindo Ergo
---
<!--StartFragment-->

## Vantagens de eUTXO

\
Há uma diferença significativa entre os modelos eUTXO e de conta (corrente). No modelo de conta, toda a lógica é feita diretamente na blockchain, o que causa dificuldades de escalabilidade. No modelo eUTXO, somente a validação do contrato inteligente é realizada na blockchain, enquanto as outras partes do contrato são executadas fora da blockchain. 



A fim de clarificar este conceito, considere a parte fora da blockchain como uma caixa preta que lê o status da blockchain (UTXOs), executa todas as computações, e finalmente gera uma ou mai txs (transações). Essas txs são então enviadas para a blockchain para serem verificadas.



A blockchain verifica as txs e elas serão mineradas se os requisitos das txs são cumpridos. Isto muda o status da blockchain (UTXO set). 



Como resultado, somente a validação do contrato inteligente é realizada *on-chain* e todas as outras lógicas são realizadas *off-chain*. Isto significa que validação de tx pode ser incrivelmente eficiente e escalável - uma grande vantagem no modelo eUTXO.



A questão de escalabilidade é uma das razões principais para Ethereum estar tentando impulsionar transações para soluções de Layer 2 / sidechain, que são governadas por códigos off-chain. Em suma, as soluções que Ethereum está explorando a fim de resolver os problemas de escalabilidade, na prática, imitam o modelo eUTXO.

 

Em geral, existe um consenso na indústria de que lógica on-chain é naturalmente descentralizada e, portanto, superior. Mas e a lógica off-chain, pode ser distribuída (no sentido de federalizada)? 

 

Em eUTxO, lógica off-chain pode ser escrita dentre de um escala que varia desde completamente centralizada até completamente descentralizada. Por exemplo, em ErgoMixer a parte off-chain é decentralizada. Você pode executar no seu computador, mas usuários também têm a habilidade de executar suas próprias lógicas off-chain. Lógica off-chain pode ser distribuída ou localizada e ser executada por cada usuário, deste modo variando desde centralizada até altamente distribuída. 



## Solução de robôs distribuídos de ErgoDEX

ErgoDex vem testando, e irá implementar, um robô que permite a distribuição de lógica off-chain para ser executada concomitantemente. Embora contrária ao jeito que ErgoMixer usa a lógica off-chain (onde cada usuário está executando sua própria lógica off-chain individual), os robôs off-chain podem ser distribuídos a quem executa os robôs pode ganhar uma taxa de execução. Esta taxa de execução é similar à taxa de transação e será pré-definida antes que os fundos sejam enviados.\
\
Isto incentiva participantes a executarem esses robôs distribuídos, além de dar clareza aos usuários no que diz respeito a preços. Deste modo, todo participante tem uma igual chance de ganhar uma porção da rede com incentivos econômicos. O código off-chain se tornará mais e mais descentralizado com o aumento do uso da plataforma.\
\
A receita adicional criada pelos usuários executando robôs parece integrar-se particularmente bem entre pequenas pools de mineração, além de operadores individuais de pool em Cardano. É nosso objetivo trabalhar com esses participantes desde o começo para encorajar descentralização.  



![](https://lh3.googleusercontent.com/kzEchHe0C8NMk5y-yNuouF1YbrtUi7onuve7NvzBVyWMOa6WTQ5s9Ft4T7bVJ3cbooIECSAeazqwIwmc-lO0ya6hjC5poyxwFLucTuznTX52_jwAwsbLaIfYTxDrKhLyqFTKG7bK=s0)



 



Descentralização é alcançada dependendo do número de atores que escolhem executar robôs off-chain. Também há um incentivo econômico adicional para mineradores participarem nesta solução enquanto honrando a confiança e transparência que prova-de-trabalho proporciona. 



## Hipóteses de eUTxO

\
Enquanto eUTxO continuar a ser adotado, veremos alguns dApps onde a lógica off-chain não é necessariamente descentralizada. A pergunta será: isto é um problema ou não? A resposta dependerá da função de cada dApp único e se os usuários estão cientes das hipóteses que precisam fazer. Esses dApps também podem escolher um modelo que descentralize ou distribua lógica off-chain. Mas isso é necessário? Meu palpite é que provavelmente não, dependendo da função do dApp.



Verificação de transações ainda será on-chain, mas os incentivos podem não estar em posição para encorajar os usuários a executar essa lógica de forma descentralizada. Eu não vejo isso sendo um problema quando levo em consideração que alguns dApps podem existir para uma tarefa muito específica ou um serviço muito simples.



Entretanto, o modelo eUTxO cria, sim, algumas hipóteses adicionais que os usuários precisam estar atentos, e é por isso que Ergo está no processo de agregar a iniciativa "Conheça Suas Hipóteses" (KYA, em inglês).



O KYA funcionaria de maneira similar aos "Termos e Condições de Concordância” dos softwares convencionais e é  

desenhada para informar usuários sobre confiança e hipóteses criptográficas de uma blockchain, contratos, possibilidades de atualizações, níveis de controle pelos controladores do protocolo, etc.

 

O objetivo de um KYA seria prevenir as chamados *puxadas de tapete* (esquemas fraudulentos) e proteger investidores. 



Com respeito à lógica off-chain, é muito importante entender o KYA. Atualmente, usuários confiam em auditorias de segurança de blockchains e dApps, mas uma auditoria apenas certifica que uma certa lógica faz parte de um contrato. Uma auditoria não é uma prova de segurança em todos os sentidos da expressão, mas apenas prova da intenção do contrato.



Existe a necessidade de KYA que diga respeito ao potencial para atualizações tanto da lógica on-chain quanto da off-chain, porque a distribuição de lógica off-chain indica o nível de confiança que cada ator coloca sobre um dApp. Poder de custódia entre participantes pode potencialmente ser uma importante hipótese a ser entendida. 



Na verdade, todas essas hipóteses são importantes para lógica off-chain. A única diferença é que lógica off-chain does adiciona uma camada de complexidade que deve ser resolvida tanto pelo modelo eUTXO quanto pelo modelo de contas. Lógica off-chain inclui dApps de L1 (Camada 1, em inglês), e.g. ErgoDEX, como modelos de L2 (Camada 2, em inglês), e.g. sidechains.



<!--EndFragment-->