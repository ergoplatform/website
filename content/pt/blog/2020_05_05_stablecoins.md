---
title: "Introdução a moedas estáveis (stablecoins)"
date: 2020-05-05
author: "Guy Brandon"
authorPhoto: "/img/authors/guy_brandon.jpg"
blogPhoto: "/img/blog/stablecoin.jpg"
---

*Stablecoins são um grande caso de uso para DeFi, mas elas existem vários formatos diferentes. O espaço de stablecoins ainda é relativamente jovem e carente – mas isto está mudando rapidamente.*

Moedas estáveis, comumente chamadas de *stablecoins* (seu nome em inglês), são um dos mais importantes e populares produtos DeFi, permitindo que usuários façam [operações de hedge](https://pt.wikipedia.org/wiki/Cobertura_(finan%C3%A7as)) e armazenem valor em uma blockchain sem ter que usar corretoras ou outros provedores centralizados.

Como uma plataforma de contratos inteligentes e DeFi, Ergo está bem posicionada para construir todos os tipos de dApps, incluindo stablecoins. Você certamente ouvirá mais de nós no futuro sobre uma stablecoin na blockchain Ergo, mas, até lá, queremos introduzir e detalhar a ideia como contexto para o que está por vir.

## Diferentes modelos de moedas estáveis

Existem várias maneiras de fixar o preço de um token cripto com relação ao dólar ou a outra moeda fiduciária. A forma mais fácil é hospedar dólares em uma conta de banco e emitir um token para cada dólar hospedado. Este é exatamente a forma como o [Tether (USDT)](https://tether.to/) é feito. Este tipo de token oferece aos usuários a habilidade de armazenar e transferir USD (dólares americanos) facilmente e sem o uso de uma corretora. Porém, esta abordagem ainda é altamente centralizada; você tem que confiar que a empresa Tether possui dólares suficientes na sua conta em banco para cobrir os tokens emitidos. A Tether é bem conhecida por não ser transparente e recusar auditorias apropriadas. O token também poderia ser descontinuado se um regulador governamental conseguisse congelar suas contas bancárias. 

Há várias stablecoins colateralizadas (i.e. garantidas) por moedas fiduciárias no mercado que se comportam mais ou menos da mesma forma. Tokens como [USDC](https://www.circle.com/en/usdc) e [dólares da Gemini](https://gemini.com/dollar) são quase a mesma coisa, com a diferença de serem bem mais transparentes e operarem dentro de uma estrutura claramente regulamentada. Além disso, existem projetos como o TrustToken, que sustenta o [token TrueUSD (TUSD)](https://www.trusttoken.com/trueusd); este token é quase a mesma coisa que os outros, embora possua uma abordagem mais distribuída, tanto com um alto grau de transparência quanto com múltiplos parceiros bancários.

Todos esses tokens necessariamente possuem um grau de centralização e risco, porque eles dependem de parceiros bancários – e estas contas potencialmente podem ser congeladas, derrubadas ou até mesmo invadidas.

Outros projetos – notavelmente o [Protocolo Maker](https://makerdao.com/en/) – tentam resolver esse problema com um modelo completamente descentralizado. O Dai do Maker é uma stablecoin algorítmica: um dólar "sintético" que não é colateralizado por dólares reais, como são USDT, USDC e outras stablecoins.

Dai são emitidos a partir de "Cofres" (tradução livre do inglês "Vaults") sustentados por garantias em cripto (em sua maioria, ETH). Um sistema de contratos inteligentes e oráculos (sequências de descentralizadas de preços) garante que todo Dai emitido é garantido por pelo menos U$1.50; se a proporção cai muito abaixo disso, o Cofre é fechado e o Dai recomprado automaticamente. É um complexo e impressionante sistema, e o [maior projeto no espaço DeFi](https://defipulse.com/).

## Algumas moedas estáveis são mais estáveis que outras

Stablecoins estão no mercado pelo menos desde 2014, embora as primeiras tentativas tenham tido sucesso limitado. As primeiras moedas algorítmicas, como NuBits e BitUSD, não tiveram o benefício de plataformas de contratos inteligentes (que estivem disponíveis somente com o lançamento de Ethereum, em 2015). Elas tinham a tendência de ser centralizadas ou semi-centralizadas e não funcionavam bem na prática. NuBits, por exemplo, perdeu seu câmbio fixo e [colapsou completamente](https://coinmarketcap.com/currencies/nubits/).

Tether, que existe desde 2014, cresceu e se tornou um fenômeno multi-bilionário, com [dezenas de bilhões de dólares de volume diário](https://coinmarketcap.com/currencies/tether/markets/). Porém, enquanto Tether geralmente mantém seu câmbio fixo muito bem, ocasionalmente peculiaridades do mercado e medos sobre as reservas da empresa significam que nem sempre o Tether vale U$1 (uma vem [caindo até U$0.90](https://coinmarketcap.com/currencies/tether/)). O USDC, que é mais confiável e transparente, tende a ter menor amplitude e um câmbio fixo mais fidedigno.

Enquanto isso, a Dai, como a principal stablecoin algorítmica, tem historicamente se comportado muito bem. Ela almeja manter um câmbio fixo "suave", com uma política monetária descentralizada empurrando-a em direção a U$1 se as condições de mercado a afastarem demais deste valor. Este processo tem tido sucesso de forma geral; o único momento que os preços desviaram significativamente foi durante a enorme volatilidade do mercado na "Quinta-feira Negra" de Março, que viu uma pressão de venda massiva de quase todo ativo cripto ou fiduciário.

## Algo, colateralizada, garantida ou uma combinação?

E assim, as stablecoins existentes abordam o problema de uma ou mais formas para manter o token com câmbio fixo com relação ao dólar. A forma mais simples, mas também a mais centralizada, é colateralizar o token com dólares reais. Pode-se também garantir o token com cripto, contanto que haja garantia suficiente para cobrir os tokens emitidos na eventualidade de alta volatilidade de mercado. Stablecoins algorítmicas usam sequências de preços e política monetária descentralizada para tornar mais ou menos atrativo a compra ou venda dos tokens, ajudando a garantir que o preço orbite em torno de U$1.

Toda abordagem tem suas vantagens e desvantagens. Ergo anunciará suas próprias implementações nas próximas semanas e explicará o porquê de seus desenvolvedores estarem abordando esse problema do jeito que estão. 
