---
title: Transações no Modelo UTXO
date: 2021-10-07T13:53:49.094Z
author: Plataforma Ergo
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/photo_2021-10-07_16-52-48.jpg
tags:
  - Construindo Ergo
---
<!--StartFragment-->

Com o crescimento do ecossistema Ergo, nossa comunidade agora pode usufruir das funcionalidades de diversos dos nossos dApps principais. Ergo tem um protocolo para moeda estável em que usuários podem cunhar os tokens SigUSD e SigRSV. Ergo Auction House (Casa de Leilões Ergo, em tradução livre) oferece a habilidade de cunhar NFTs, e a ErgoDEX (Beta) permite que você troque tokens e provenha liquidez. Esses são os primeiros, complexos e exclusivos dApps DeFi no modelo UTXO - um modelo em que o Bitcoin foi pioneiro. Frequentemente tem-se debatido se o modelo UTXO pode expressar contratos inteligentes elaborados, muito como o modelo de Contas. É por isso que a Plataforma Ergo construiu a linguagem ErgoScript do zero, em um esforço para progredir com o legado do Bitcoin.



*Para uma comparação à fundo entre modelo UTXO e modelo de Contas, por favor leia nossa publicação anterior no blog:* [Ergo: Avançando sobre Bitcoin](https://ergoplatform.org/en/blog/2021-08-17-ergo-advancing-on-bitcoin/)



Como um Ergonauta, você pode ter ficado um pouco perdido ao checar o Explorador para ver os detalhes de suas transações. O modelo UTXO é essencialmente diferente do modelo de Contas devido ao uso de "caixas" para manutenção de dados. No modelo de Contas, há uma única conta onde você recebe suas moedas. Porém, no modelo UTXO, toda transação (tx) cria uma nova caixa e seu balanço é a soma de todas as caixas conectadas ao seu endereço.



Para ser claro, sua chave privada da Yoroi pode consistir de mais de uma caixa em um único endereço para hospedar suas moedas.

![](https://lh6.googleusercontent.com/qxEWrauKaD8yEXAjwXFzlikSNAXFeAxSPwuxUolS410Xf5HgOzJh_1vCL6YOfFfOyWnBhxLVIWZ0scz4BbIF9w4Tm_9aywTKo3EIrvG0zSPhCIPvLoyrlwgvZCHWHqEfXZb43klV=s0)



Ao gerar um novo endereço, você criará uma caixa secundária para hospedar suas moedas. Após a criação, você pode enviar fundos para esse novo endereço e seus fundos serão vistos como um só com sua chave privada. Você pode criar um número infinito de novas caixas para hospedar suas moedas. Como tal, toda ação de envio ou recebimento também criará uma caixa adicional única.



À primeira vista, essa funcionalidade pode gerar equívocos pelo usuário. Quando você faz uma transação, a rede escaneia suas "caixas" para verificar se você tem seus tokens e então inicia a transação. 



As coisas se tornam complexas a partir deste ponto, porque você não pode adivinhar quais caixas serão usadas para o gasto. Imagine que você tenha três endereços diferentes de recebimento. Você recebeu algumas moedas em cada um dos endereços e você quer gastar uma parte das suas moedas. Em sua carteira, você pode hospedar qualquer moeda nativa de Ergo, e.g. SigRSV ou SigUSD. Quando você inicializa uma transação que acessa as caixas dessas moedas, você verá que elas (moedas) são retiradas e então redepositadas. Recentemente, um Ergonauta levantou a seguinte [questão](https://www.reddit.com/r/ergonauts/comments/prn7x3/comment/hdty87z/?utm_source=share&utm_medium=web2x&context=3): 



“Eu acabei de criar uma carteira na Yoroi Nightly. Transferi 31 ERG da minha carteira principal para a carteira Yoroi Nightly. A transação mostra 31 ERG mais uma pequena taxa: 0,0011 ERG. Porém, também mostra +92,000 SigRSV. Meu balanço não mostra mudanças em SigRSV. Qual é o sentido desses +92,000 SigRSV na transação?”



Vamos olhar os detalhes dessa [transação](https://explorer.ergoplatform.com/en/transactions/143f5ba0ee1482d332d1020c94f261399f220c7f4523063ade8290c478acbd29) particular:



![](https://lh5.googleusercontent.com/HOFhlYx5l3wvUzET-wa9E4dhU8az4srODa_4n09qZm3y-gWQz1L9Obw5qobgQM5Bthokn8SYMuO13cLDNEW5fqbboSj3qAwf2rzYH1rHkyvaoDsIMSDa3zwJU31s5XLEc_n5VbZ0=s0)



Para fazer uma transação de 31 ERG, a carteira selecionou três das caixas com ERG:

* Uma caixa contendo 0,029595 ERG, recebidas em 19/07/2021
* Uma segunda caixa contendo 19,76 ERG, recebidas em 19/07/2021
* Uma terceira caixa contendo 208,26 ERG, recebidas em 09/06/2021 



Na parte esquerda da imagem acima, você verá aproximadamente 228 ERG saindo, enquanto na parte direita você verá 31 ERG enviadas e 197 ERG redepositadas na sua carteira.



Então, sua carteira usou três das suas caixas para gastar a quantidade desejada. Essa ação inclui todos os ativos daquela caixa na transação. 



Após a quantidade desejada ser gasta, seus fundos são simplesmente reembolsados ao seu endereço em uma(s) recém-criada(s) caixa(s) UTXO. Gastar qualquer moeda em uma caixa significa gastar a caixa inteira e criar uma nova caixa UTXOs, e é por isso que você vê seus tokens sendo retirados e redepositados.



A seleção de quais caixas usar é um segredo da estratégia de escolha aleatória da carteira. Quaisquer moedas que estejam nas caixas selecionadas, seja SigRSV, SigUSD ou um NFT, serão mostradas como no exemplo acima. 



### Resumindo: 



O modelo de Contas contém uma única caixa e essa caixa não é gasta. Ela permanece a mesma, então moedas não-relacionadas permanecerão não afetadas.



O modelo UTXO, por outro lado, contém um conjunto de caixas que representa a quantidade total do balanço dos usuários e a saída não-gasta da transação tem que mudar com cada transação de gasto.  



Você pode ver uma longa lista de tokens ao trocar apenas 5 SigRSV como no exemplo abaixo:![](https://lh6.googleusercontent.com/wK-uprlqrj6wKt74AODkxBt6xR5Dey_qGB4kclXm5OuhWz2nfIuBTZm412oFA1h0OHXRi_oGcx6y7jR6A6kRcgpAUU7vSaQrfAMY6lKzdzy8THl2Hh2uEMzHjs5M5Sdlly6DO8f4=s0)



Assim é como transações no modelo UTXO funcionam - seu armazenamento é diferente do modelo de Contas. No modelo UTXO, moedas serão armazenadas em caixas UTXO de uso-único e não em contas de longo-prazo.



<!--EndFragment-->