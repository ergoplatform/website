---
title: Primeiros passos em direção a interoperabilidade com oráculos Cardano
date: 2020-11-09T18:01:39.573Z
author: Guy Brandon
authorPhoto: /img/uploads/guy_brandon.jpg
blogPhoto: /img/uploads/joshua-hoehne-xhnbw5x63mw-unsplash.jpg
tags:
  - Construindo Ergo
---
<!--StartFragment-->

*A solução oráculo para Cardano publicará dados das pools oráculo de Ergo, tratando os dados pré-processados como uma fonte confiável para seus próprios registros para a blockchain.*

No final do último Agosto, anunciamos as [Pools Oráculo](https://ergoplatform.org/pt/blog/2020-08-31-ergos-oracle-pools-and-what-they-mean-for-the-ecosystem/): uma nova abordagem aos oráculos, empoderada pelo modelo UTXO estendido de Ergo. Os benefícios desses oráculos em relação a modelos existentes é considerável, e eles proporcionam a criação de novos tipos de dApps.

Agora, um dos oráculos da Cardano está usando dados provenientes das pools oráculo de Ergo. Marek, que opera uma Pool de Delegação de Cardano, criou uma solução simples para Cardano. Informação de um oráculo Ergo é publicada na blockchain Cardano via [metadados](https://pt.wikipedia.org/wiki/Metadados) de transações.

O oráculo NUTS, que você pode encontrar em [nut.link](https://nut.link/), atualmente serve seis fluxos de dados. Possui duas fontes de dados para ERG/USD: Coingecko, e pools oráculo de Ergo. Essas duas fontes também são usadas para o preço ADA/USD. Adicionalmente, NUTS registra ADA/EUR e o valor das ações da empresa Tesla. 

Além disso, NUTS usa um esquema de financiamento inspirado pela abordagem de Ergo com relação a pools oráculo, que tratam dados externos como um bem público que devem ser disponibilizados gratuitamente. Você pode seguir a NUTS no Twitter: [@stakenuts](https://twitter.com/stakenuts).

**Conectando redes**

Esse é um grande avanço por pelo menos dois motivos. Primeiro, a solução reusa trabalho já feito pelas pools oráculo de Ergo – portanto permitindo que Cardano publique um sinal de preço confiável de maneira mais eficiente. Compartilhar dados dessa forma beneficiará ambas as redes no futuro, já que, uma vez estabelecida a confiança nos oráculos, qualquer outra plataforma pode usar aqueles dados com relativamente pouca sobrecarga (de dados).

Em segundo lugar, isso fornece os primeiros passos para a construção de interoperabilidade entre as duas plataformas. Tanto Cardano quanto Ergo agora compartilham a mesma fonte de dados sobre as mesmas criptos. Isso abre caminho para grandes colaborações e interações entre-redes, solidificando a conexão entre as duas redes.

Por fim, essa funcionalidade pode empoderar soluções complexas de DeFi como, por exemplo, *swaps atômicos* Ergo-Cardano, com pools de liquidez entre-redes e precificação decidida por dados de oráculo combinados mutuamente entre as redes. Apesar de um desenvolvimento para o futuro, isso demonstra o que deve um dia ser possível.

Enquanto isso, fique ligado nas próximas atualizações sobre pools oráculo e pesquisa adicional feita pela Emurgo, que desenvolverá interoperabilidade entre Cardano e Ergo.

<!--EndFragment-->