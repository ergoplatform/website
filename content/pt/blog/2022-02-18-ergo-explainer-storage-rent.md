---
title: "Explicativo Ergo: Aluguel de Armazenamento"
date: 2022-02-18T14:51:13.772Z
author: Plataforma Ergo
authorPhoto: /img/uploads/symbol_bold__1080px__black.png
blogPhoto: /img/uploads/ergoexplainerstoragerent-1-.png
tags:
  - Construindo Ergo
---
<!--StartFragment-->

**Resumo do Artigo: Aluguel de Armazenamento é uma taxa por armazenamento de longo prazo na blockchain Ergo. Quatro anos a partir da última transação, você será taxado em ~0.14 ERG e uma taxa de transação para cobrir os custos de de armazenamento de sua informação digital.**



![](https://lh4.googleusercontent.com/eDJP1o6VTnR9PzwRw_7vX-oTcuQQQvIvsS1UnWfJibxfQT77GwGRX7N_aTa1VbrNKK_IFpDJxao0WU7Jnnv3lFAE1gsEcmvjKXwyxOE3EQkEotT50Ahj_O7UakASb6xxGmBAJ7sJ)

# Armazenamento na Blockchain Ergo

Quando se cria uma carteira, está se reservando espaço na blockchain. No começo, não há nada nele, mas, para usar esse espaço reservado, precisa-se transferir ERG para o endereço da carteira.



Essa primeira transação deve conter uma pequena quantia de ERG. A blockchain usa essa taxa para criar uma caixa digital onde pode-se armazenar ERG, tokens nativos (e.g. SigUSD), NFTs, etc. Esse é a primeira conexão na blockchain do "modelo estendido de saída não-gasta de transação" (modelo eUTXO, sigla em inglês). Neste modelo, a blockchain envia a parte não-gasta da transação para a nova caixa.



Para toda transação na blockchain, caixas são entradas. Uma transação muda essas entradas e então a saída não-gasta é movida para novas caixas.

 

Por exemplo, se você pagar por um NFT em uma transação, a pessoa vendendo o NFT receberá o pagamento em uma nova caixa. Essa nova caixa também terá todos os ativos da caixa anterior. Em troca, você recebe o NFT e o conteúdo de sua caixa antiga, menos a taxa de transação (ver ilustração acima). 



As caixas antigas agora estão vazias. Após quatro anos, o aluguel de armazenamento remove essas caixas da blockchain.

# O que é Aluguel de Armazenamento?

Nem todas as caixas adormecidas estão vazias. Se uma caixa não participa de uma transação por quatro anos e ainda possui alguma coisa nela, ela está sujeita a aluguel de armazenamento. Aluguel de armazenamento permite que mineradores gastem os conteúdos de uma caixa (desde que seja mais velha que o período de aluguel de armazenamento, o que possibilita que eles coletem uma taxa por armazenar essa caixa por quatro anos. A taxa depende do tamanho da caixa em bytes. A maioria das caixas são pequenas e o custo da taxa para essas caixas é de somente ~0,14 ERG mais uma taxa de transação. O pagamento de aluguel de armazenamento permite que caixas permaneçam na blockchain por tempos mais longos do que quatro anos e garante circulação de ERG no longo prazo.



Vamos colocar isso em perspectiva. Se você tivesse 1 ERG em sua caixa, levaria 32 anos a partir da sua última transação para um minerador se apossar do conteúdo da sua caixa. Se uma caixa não é usada durante esse período, o aluguel de armazenamento reivindica os valores para a blockchain.



O que acontece quando uma caixa não está vazia e não pode pagar a taxa de aluguel? O minerador pode se apossar de tudo naquela caixa, incluindo tokens e NFTs.

## Evitando o aluguel de armazenamento

Cada endereço em uma carteira que contém um ativo está sujeito ao aluguel de armazenamento. Se você combinar seus ativos em um único endereço uma vez a cada quatro anos, o cronômetro da taxa de aluguel é reiniciado para aquela aquela caixa. Isso também reduzirá o número de caixas atingidas pela taxa de aluguel.
 

# Por quê do aluguel de armazenamento?

"Coleta de lixo" é um termo em programação de computadores para liberação de espaço não utilizado. A remoção de caixas vazias é um processo de coleta de lixo na blockchain Ergo e o aluguel de armazenamento expande esse processo de coleta de lixo também para caixas quase vazias.



Por que isso é importante? Você pode ter ouvido o termo "poeira".  Poeira é uma quantidade pequena de criptomoeda deixada para trás após uma transação. Muito embora pequenas quantias de poeira possuam muito pouco valor, elas utilizam muita capacidade de armazenamento quando estão distribuídas em muitas caixas. É, portanto, útil para uma blockchain que se tenha um processo de limpeza dessa “poeira” e que se torne o armazenamento dela mais eficiente. Aluguel de armazenamento é esse processo para a blockchain Ergo. 



Aluguel de armazenamento traz benefícios adicionais, como a adição de um incentivo para que mineradores continuem garantindo a segurança da blockchain. Ela ajuda a recuperar moedas e tokens perdidos, e a colocá-los de volta à circulação. Manter moedas em circulação diminui os efeitos deflacionários da perda de moedas.



Um ponto negativo do aluguel de armazenamento é que traz um custo a mais para usuários da blockchain. Porém, as taxas são mínimas e podem ser evitadas com uso regular da blockchain dentro de um período de quatro anos.

O aluguel de armazenamento é também um parâmetro flexível, ou seja, pode ser mudado de forma relativamente fácil para torná-lo razoável para todo mundo. Se haver qualquer mudança no protocolo de aluguel de armazenamento, e.g. o intervalo de quatro anos para ativação da taxa, uma "bifurcação forte" seria necessária. Bifurcações fortes são mudanças fundamentais na blockchain Ergo em si e geralmente são evitados.



Resumindo, aluguel de armazenamento ajuda a manter a blockchain Ergo viável no longo prazo, reduzindo requisitos de armazenamento enquanto também incentivando mineradores a garantir a segurança da blockchain. O custo é nominal e é somente cobrado sobre contas inativas e/ou perdidas.



<!--EndFragment-->