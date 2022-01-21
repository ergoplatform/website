---
title: "Ergo & Blockchain: Escalabilidade e Adoção"
date: 2022-01-18T17:48:31.980Z
author: Plataforma Ergo
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/06_ergoblog_cover_01182022-1-.png
tags:
  - Construindo Ergo
---s
<!--StartFragment-->

Neste episódio da série Ergo & Blockchain, veremos os vários aspectos de [escalabilidade](https://pt.wikipedia.org/wiki/Escalabilidade) e o por quê deles serem cruciais para adoção dascriptomoedas. Desde a introdução de contratos inteligentes em blockchains, a indústria tem testemunhado problemas relacionados ao crescimento exponencial do armazenamento, dos requisitos mínimos para um nó e do aumento de taxas de transação. Esses problemas tem criado barreiras de entrada para novas pessoas, frequentemente devido a altas taxas de transação. Há poucas opções para reduzir a congestão e aumentar taxa de transferência, seja através de atualizações de hardware e usando mais energia ou seja por tornar a infraestrutura fundamental mais eficiente.



## Escalada Vertical



Escalada Vertical é o modo mais fácil de aumentar a escalabilidade de uma rede. Neste modelo, escalabilidade é aumentada ao atualizar o hardware computacional e usar mais energia. Não há desenvolvimento de software, porque aumento de largura de banda depende de poder bruto. É por isso que existe um limite para esse tipo de desenvolvimento - despesas aumentam junto com a rede. 



Ao ohar para blockchains, escalada vertical significa que os nós validadores requerem hardware sofisticados. Inevitavelmente, isso leva a descentralização apenas quando grandes atores com servidores potentes participalm no processo de consenso da rede. Neste caso, uma blockchain pode facilmente alcançar valores de milhares de transações por segundo (TPS). Este tipo de blockchain representaria uma rede com somente alguns nós representando o consenso como um todo.



Suponha que apenas poucos validadores estão garantindo a rede. Neste caso, a rede pode ser chamada de "blockchain como um serviço (BaaS, sigla em inglês), que significa que uma terceira parte fornece um serviço de nuvem para implantar aplicações descentralizadas. O problema com este modelo é que a rede contém pontos de falha centralizados. Logo, só os provedores de serviço podem manter o mecanismo de consenso e pode ser difícil que novos participantes se juntem ao consenso.



## Escalada Horizontal



Escalada horizontal indica que os recursos existentes (ex. hardware e energia) não são alterados, mas a capacidade que a rede tem de usá-los é escalada. Há custos mais altos (pelo menos no curto prazo) para este modelo, já que precisa de mais recursos humanos, mais pesquisa e mais tempo sem a promessa de retornos instantâneos. Ainda assim, avanços tecnológicos podem ser um desenvolvimento colaborativo e um poder que abastece mais pesquisa. Seguindo nesse caminho, os retornos podem aumentar exponencialmente ao longo do tempo.



Além de reduzir os custos computacionais no longo prazo, outro benefício nesse tipo de escalada é a habilidade de diminuir pontos de falha centralizados. Enquanto a rede depende menos de supercomputadores, mais atores podem ser donos da rede e a blockchain pode se tornar mais descentralizada. Dito isto, é sempre papel dos indivíduos decidir se querem usar soluções existentes ou suportar novos avanços.



## Adoção de Criptomoedas



É uma certeza que blockchains precisam escalar para acomodar adoção em massa. Como mencionado acima, isso pode ser alcançado ou através do uso de mais poder computacional ou pela utilização de menores unidades computacionais de forma mais eficiente. Para adoção em massa de criptomoedas, blockchains devem lidar com um grande número de transações, incluindo micropagamentos e simples contratos.



Soluções de escalada de Camada 2 são contratos inteligentes que facilitam transferências em blockchain ao reduzir custos e tempo de processamento. Soluções de Camada 2 também são chamadas de *soluções off-chain*, porque as transferências e interações não acontecem na blockchain principal. Ao contrário, usuários interagem com uma camada separada conectada com a blockchain principal. Para usar a escalabilidade de Camada 2, deve-se primeiro fazer uma ponte entre bens da blockchain principal para o protocolo off-chain.



## Soluções de Camada 2



**Rede Lightning:** Soluções de Camada Layer 2 também têm nós validadores, então sua segurança não está sempre ligada unicamente à blochchain principal. Por exemplo, a [Rede Lightning](http://lightning.network/how-it-works/) (link em inglês) é uma solução de escalada em Bitcoin e também possui seus próprios nós que validam transações. Não há recompensas de mineração para hospidar um nó da rede Lightning, então a fonte de renda de um operador de nós depende somente de taxas de transação.



**Correntes de Plasma:** Essa é uma abordagem híbrida (que é usada pela Polygon) que usa uma cada de consenso de Prova-de-Participação (PoS, em inglês) em cima da rede Ethereum. Essa side-chain paralela, que é baseada no design de [correntes de plasma](https://ethereum.org/en/developers/docs/scaling/plasma/) (link em inglês), é uma blockchain de baixo custo que depende dos participantes para garantir a segurança da rede. Enquanto os tokens delegados interagem com a rede principal, o modelo usa algumas partes da segurança de Ethereum e algumas partes da sua própria PoS. Quando usuários delegam seus tokens, eles they delegam o consenso para um operador de validação, conhecido como provedores de servidor confiáveis e seguros.



**ZK-Rollups:** Também chamado de [zkSNARK](https://blog.ethereum.org/2016/12/05/zksnarks-in-a-nutshell/)s (argumentos de saberes sucintos, não-interativos, de conhecimento-zero), eles podem descrescer carga na rede ao permitir que transações sejam processadas em grandes grupos. A segurança das transações dependem diretamente da rede principal, que tem sua segurança garantida ao se adicionar provas matemáticas para validar transações. Porém, é relativamente mais difícil que abordagens híbridas pa se implementar todas as funcionalidades da rede principal com completa segurança. Vários projetos estão desenvolvendo sua própria abordagem para implementação de zkSNARKs.



**Rollups Otimistas:** [Rollups otimistas](https://docs.ethhub.io/ethereum-roadmap/layer-2-scaling/optimistic_rollups/) funcionam de forma um pouco diferente de plasmas e zkSNARK em termos de segurança da Camada 2. Rollups otimistas computam as transações em uma blockchain paralela compatível com EVM (sigla em inglês para "Máquina Virtual Ethereum") chamada de Máquina Virtual Otimista (OVM, sigla em inglês) e comunicam-sem com a blockchain principal. O modelo é chamado de otimista porque depende do Princípio à Prova de Fraude, onde os agregadores não estão ativamente verificando a Camada 2, mas eles estão interferindo no evendo de uma disputa de fraude. 



**Canais de Estado:** Por último, um modelo chamado "canais de estado" é um tipo de  modelo de assinatura ponto-a-ponto e o design pode também ser usado como canais de pagamento para simples propósitos. O problema, porém, é que canais-estado são contratos pré-configurados em que os participantes estão definidos no lançamento. Cada vez que um novo participante quer usar o canal, é preciso uma nova criação de contrato. Em retorno, existe uma maior privacidade e segurança, mas pouca ou quase nenhuma flexibilidade para um sistema aberto. Membros pesquisadores da IOHK publicaram um novo modelo chamado [Hydra: Canais Isomórficos de Estado](https://iohk.io/en/research/library/papers/hydrafast-isomorphic-state-channels/) (link em inglês) que introduz canais de estado multi-partidários ao utilizar-se tanto de computações on-chain e computações off-chain distribuídas pelo design eUTXO.



**NIPoPoWs:** [Provas de Provas-de-Trabalho Não-interativas](http://docs.ergoplatform.org/dev/protocol/nipopow/) (NIPoPoWs, sigla em inglês) é um termo geral que se refere a clientes leves e side-chains. Clientes leves, que consistem de nós leves e carteiras leves, são clientes eficientes que não precisam hospedar a blockchain inteira para verificar transações e permitem carteiras móveis eficientes e *bootstraping* mais rápidos de mineradores. Clientes podem interagir entre si usando somente os cabeçalhos dos blocos, portanto reduzindo a necessidade de recursos computacionais. Ergo habilitou suporte a NIPoPoWs desde seu início e eles podem ser aplicados a blockchain Ergo [bifurcação suave](https://www.coindesk.com/markets/2018/03/15/velvet-forks-crypto-updates-without-the-controversy/) de fácil implementação. NIPoPoWs podem também ser implantados para dar suporte a comunicação entre blockchains PoW e PoS.



*No próximo artigo, analisaremos o tópico de Sustentabilidade & Crescimento de blockchains. Ao fazer isso, vamos dar uma olhada na história e no atual momento do ecossistema; como o panorama legal está evoluindo, quais tipos de atores estão participando e quais tipos de problemas podemos esperar encontrar.*



 **Artigos Anteriores:**

[Ergo & Blockchain: Cryptosfera](https://ergoplatform.org/pt/blog/2021-10-26-ergo-blockchain-cryptocurrency-sphere/)

[Ergo & Blockchain: Economia de Token e Finanças](https://ergoplatform.org/pt/blog/2021-11-05-ergo-blockchain-tokenomics-and-finance/)

[Ergo & Blockchain: Privacidade e Segurança](https://ergoplatform.org/pt/blog/2021-12-02-ergo-blockchain-privacy-and-security/)

[Ergo & Blockchain: Tecnologia e Inovação](https://ergoplatform.org/pt/blog/2021-12-28-ergo-blockchain-technology-and-innovation)



<!--EndFragment-->