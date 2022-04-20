---
title: "Instruções: Cunhando um Token Não-Fungível (NFT) na Blockchain Ergo"
date: 2022-03-08T20:11:17.629Z
author: "Plataforma Ergo"
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/01_ergoblog_cover_08032022.png
tags:
  - Construindo Ergo
---
## O que é um NFT?

Qualquer unidade de uma moeda corrente, como por exemplo o dólar estadunidense, é indistinguível de qualquer outro dólar estadunidense. Um Euro é exatamente igual a qualquer outro Euro. Fungível é apenas outra palavra para inter is just another word for intercambiável.

Não-fungível significa único. Uma csa não é a mesma que uma outra, mesmo que seus preços sejam os mesmos. Em cripto, tokens não-fungíveis são singulares e não podem ser recriados ou substituídos usando qualquer outro token. Uma vez que um token tenha sido cunhado, não pode ser recriado - mesmo que seja o mesmo artista ou alguém tentando usar o mesmo trabalho de arte.

Estamos ainda nos estágios iniciais de entendimento e cumprimento do inteiro potencial dos NFTs. Eles podem ser usados para representar identidade, propriedade, trabalhos de arte, ativos, documentos legais, e muito mais. Portanto, NFTs são como escrituras digitais. Quando eles estaão em uma blockchain, NFTs podem ser uma [reserva de valor](https://taschalabs.com/nft-is-better-than-diamond-heres-why/) (link em Inglês), porque eles existem em oferta limitada, são duráveis e uma comunidade de compradores e vendedores decide seus valores. Com essas condições, NFTs tornam-se ativos digitais que podem ser negociados. Assim como em qualquer tipo de negociação, os negociadores precisam de um mercado. Na blockchain Ergo, o principal mercado de NFTs é a [Ergo Auction House](https://ergoauctions.org/) ("Casa de Leilões Ergo", em tradução livre).

## Como cunhar um NFT?

Se você quiser participar como um criador em um mercado de NFTs, você precisará aprender a como cunhar NFTs. Para começar, há alguns requisitos.

## Requisitos

* Criar uma Carteira Ergo em [Ergo Wallet](https://ergoplatform.org/pt/mobile_wallets/) (carteira móvel) ou usar uma carteira do tipo extensão de navegador, como [Yoroi](https://yoroi-wallet.com/) ou [Nautilus](https://chrome.google.com/webstore/detail/nautilus-wallet/gjlmehlldlphhljhpnlddaodbjjcchai).  
* Comprar ERG, a criptomoeda nativa da rede, e transferí-la de uma corretora para sua carteira. (Para informações em como adquirir ERG, por favor ver [o guia de compra de ERG](https://www.reddit.com/r/ergonauts/wiki/trade) (link em Inglês)).
* Salve um arquivo digital (como uma foto, pedaço de música, desenho, etc.) em seu computador ou o item que será transformado em NFT. Esse arquivo digital deve ser algo de sua autoria.

## Referência Visual

![Referência Visual](/img/uploads/group-17-1-.png "Referência Visual")

## Cunhando um NFT

Para este exemplo, vamos partir do princípio de que estamos usando a carteira Nautilus no navegador Google Chrome. Há 1 ERG em nossa carteira e estamos fazendo um NFT de uma fotografia salva como um arquivo PNG no nosso computador.

1. No nosso navegador, selecione a carteira Nautilus.

![extensões](/img/uploads/extentions.png "Extensões")

2. Na carteira Nautilus, clique em Receber (Receive), o ícone do meio no topo. Então, copie o endereço padrão da sua Ergo Wallet.

![](https://lh3.googleusercontent.com/ivdhFyA8mfVKBsvZ0rHTRE3STyT_AfhpqxDx1YeWAZEqIoztpMNIIWHHKhshp8inJ8eTs1-qpiMiQgfsjvOXUbHhGsk69yOCN_ENMAThArXZVoGeraXwHptZwwVbvhN6MDAMEzDN)

3. Vá para o website da Ergo Auction House, <https://ergoauctions.org/>
4. No canto superior direito, cselecione o ícone da carteira.

![](https://lh5.googleusercontent.com/jYSJbFvbhvbvsmvmFgkpWb1d98JF4MaruMXwIdVx7JxNEOS5Ck0Dv7lsW2huUPKapD9xYBY5c8qOHqBNNIWyvPmJpG9MLqMr62zYVyaA7zBpypK-XwwS3TaC-SfspxUD8Vwlg-Lt)

5. Selecione "Qualquer Carteira" ("Any Wallet")
6. Cole seu endereço de carteira na caixa de texto - esse será o destinatário que você copiou da sua carteira Nautilus. Deve ser uma expressão de 51 caracteres que são uma mistura de números e letras maiúsculas e minúsculas. Por exemplo: \
   *9g1p6UU8XoAeU4yGPLpbTHYiG8aBHwfCFzQqJZrfzuLnmF3zb7P* 
7. Então, clique no botão "Salvar" ("Save").
8. Você voltará para a página principal da Ergo Auction House.
9. Selecione o botão "Adicionar" ("Add"), que é o primeiro ícone no canto direito superior. Depois, selecione "Criar Obra" ("Create Artwork") no menu suspenso.

![](https://lh5.googleusercontent.com/cc109waYgYoB6wx8qFX1d5_vUWkUPHUSi6KWl06lHSLuRv0vqbJLFX_oQLKcpDaGE-LNP63UOYd4AX6yFCKGfxLIhosbryz8XGrLtJaetuxdpmrbvXUbfRASMvYwJkn4Kg_hWmUp)

10. Na caixa de diálogo "Criando item novo" ("Creating new item"), arraste & solte sua imagem em formato PNG na seção de obras. Depois, selecione uma quantidade (você pode escolher criar um NFT a partir de uma imagem ou quantas cópias quiser). Então, dê ao item um nome, uma descrição e selecione uma porcentagem de direitos autorais ("royalties").
11. Clique em "Emitir" ("Issue"). 
12. Depois, você será solicitado a completar uma transação para a cunhagem do seu(s) NFT(s). Uma janela aparecerá, fornecendo a você um endereço e as taxas necessárias para completar o processo:

 ![](https://lh5.googleusercontent.com/2zzBHkc07mykvs2lZRe0GEokSoIjSqoqnRT0FZbR--AjnDocPrFayataBmWWrqPSFOmMZ_-3kkuk6JNbXKb4ZQCzMZ0uqnArGSCOtlPXfxB9iG4FAoQ4H_qloH8gSpZ7zLbN0hsg)

13. Envie a quantia de ERG necessária e sua carteira irá adicionar a taxa de transação de 0.0011, enviando um total de 0.0041 ERG. Em retorno, você irá receber 0.001 ERG e o recém-criado NFT. O custo total pela cunhagem desse NFT é 0.0031 ERG. 
14. Espere alguns minutos para que a transação seja confirmada. Então, vá até o website da Ergo Auction House e selecione "Obras em posse" ("Owned Artworks") para ver seu(s) novo(s) NFT(s).