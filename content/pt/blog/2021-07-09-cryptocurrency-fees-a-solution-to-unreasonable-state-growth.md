---
title: "Taxas em criptomoedas: Uma solução para o crescimento exorbitante do estado da rede"
date: 2021-07-09T15:28:18.620Z
author: root7Z
authorPhoto: /img/uploads/rootz-the-storyteller-4root7z.png
blogPhoto: /img/uploads/cryptofees.jpg
tags:
  - Construindo Ergo
---
<!--StartFragment-->

Este artigo é uma continuação e resumo de “[Uma Abordagem Sistemática para Taxas em Criptomoedas](https://fc18.ifca.ai/bitcoin/papers/bitcoin18-final18.pdf)” (artigo em inglẽs e daqui para frente referido como "o artigo") por Alex (Kushti) Chepurnoy, Vasily Kharin e Dmitry Meshkov. No artigo, os autores atacam o problema de utilização de recursos de armazenagem. Há uma preocupação que, uma vez criado um elemento do estado da rede, ele existe para semrpe e inevitavelmente infla o espaço em disco rígido utilizado por um nó. Isto levará a um crescimento exorbitante da blockchain.

Enquanto criptomoedas deliberam sobre taxas de transações com uma perspectiva atômica, o artigo sugere que é razoável levar a taxa de armazenamento em consideração em uma escala tridimensional.

![Figura A.](/img/uploads/3d.png)



# Custos da Blockchain

Blockchains em Prova-de-Trabalho dependem de mineradores para segurar sua integridade. Recursos para mineração, tais como memória RAM e eletricidade, são custosos e portanto é preciso um esquema de receita para incentivar mineradores. Incentivos a mineração atualmente incluem recompensas por bloco e taxas de transação. Taxas de transação são uma importante componente na prevenção de ataques spam que esgotam recursos de mineração.

Além da utilização da rede, processamento de transações necessitam que um minerador gaste recursos para manter todos os dados originais da blockchain. No caso do Bitcoin, isso pode ser um problema menos relevante, porque a rede ainda não implementou a funcionalidade de contratos inteligentes. Porém, criptomoedas que suportam contratos inteligentes tais como Solidity (Ethereum) podem necessitar de muita computação, e os custos correspondentes serão incluídos na taxa de transação.

A escala tridimensional mostrada acima é baseada na carga orientada para armazenamento, carga computacional e carga da rede.

* Carga orientada por armazenamento refere-se ao custo adicional de armazenar dados antigos no blockchain. 
* Carga computacional é criada para a execução de contratos inteligentes. 
* Carga de rede é toda transação que não existe no bloco atual mas será adicionada no bloco seguinte.

Em Ergo, o tamanho total do estado é a soma dos tamanhos de todos os UTXOs. Isso quer dizer que contém a execução de contratos inteligentes, todas as transações e informações de nós. Porque os recursos de memória providos pelos mineradores são limitados, a taxa de deterioração de estado deve ser adicionada para o fluxo de receitas dos mineradores a fim de encorajar o descrescimento de carga do sistema enquanto protegendo a contribuição futura de mineradores.

# Aluguel de Armazenamento

O crescimento incrontrolável do estado da rede é um problema econômico e pode levar a ataques spam e congestão da rede. Outro problema pode ser a deflação de uma criptomoeda se meodas são perdidas e/ou esquecidas. Logo, ao invés de ser usada como a base dos contratos inteligentes, a moeda se torna exageradamente escassa e torna o sistema pesado e limita o fluxo de moeda.

Isto leva a um estado de crescimento perpétuo (e.g. o tamanho total do UTXO de Bitcoin) e o estado pode crescer mais rápido durante um ataque de spam. Por exemplo, 15 milhões de outputs foram criados durante um ataque spam contra Bitcoin em Julho de 2015. Um ataque sobre Ethereum criou 18 milhões de novas contas adicionadas ao estado - que anteriormente possuía apenas 1 milhão - e praticaram um ataque do tipo ["negação de serviço"](https://pt.wikipedia.org/wiki/Ataque_de_nega%C3%A7%C3%A3o_de_servi%C3%A7o) de forma bem-sucedida contra os nós.

Para atacar esse problema de crescimento insustentável de estado, uma taxa de "aluguel de armazenamento" é proposta pelo artigo. Aluguel de armazenamento é uma taxa agendada que é baseada na continuação de cada UTXO criado na blockchain. Isso é alcançado pelo uso de pagamentos agendados, que erradicarão os bytes não usados após um certo tempo.

Adicionalmente, o uso de blockchains como armazenamento em nuvem está ganhando tração. Logo, armazenar objetos permamentemente no estado da rede sem algum procedimento de recirculação dos dados antigos não é uma opção plausível.

Para fins de pesquisa e deste artigo, é válido notar que o conceito de aluguel de armazenamento foi proposto em 2014 pela [Freicoin](http://freico.in):

“Demurrage força que freicoins circulem em velocidades deliberadamente altas. A separação das funções do dinheiro como reserva de valor e meio de troca permite que o dinheiro circule quando é preciso, nos tempos bons e ruins.“

# Conclusões

Uma importante consequência de taxas de armazenamento é que elas podem prover recompensas adicionais para mineradores (além de recompensas por bloco e transações).

Taxas de armazenamento descrescem a carga de armazenamento e eliminam custos extras que poderiam ser adicionados durante crescimento desproporcional de estado.

Taxas de armazenamento estimulam o fluxo de moedas e previnem deflação, o que pode causar iliquidez e a congestão do sistema monetário.

<!--EndFragment-->