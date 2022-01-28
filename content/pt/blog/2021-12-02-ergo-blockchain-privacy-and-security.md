---
title: "Ergo & Blockchain: Privacidade e Segurança"
date: 2021-12-02T16:51:17.118Z
author: Plataforma Ergo
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/securityprivacy.jpg
tags:
  - Construindo Ergo
  - Roadmap
---
<!--StartFragment-->

Para o terceiro artigo da série Ergo & Blockchain, exploraremos os vários argumentos postulados sobre a privacidade e segurança de diferentes criptomoedas. 

## Descentralização

Criptomoedas e ecossistemas DeFi estão crescendo a um ritmo rápido, e existem diferentes visões sobre os benefícios da blockchain. Devemos notar que uma auto-proclamada criptomoeda descentralizada, onde dez ou vinte validadores controlam [50% da rede](https://ergoplatform.org/pt/blog/2021-11-05-ergo-blockchain-tokenomics-and-finance/), não é necessariamente descentralizada ou imutável. [A procura por eficiência](https://forkast.news/headlines/solana-transaction-less-energy-two-google/) às custas de descentralização tem tido às vezes uma prioridade mais alta dentre projetos blockchain. Enfrentando o risco de se tornarem bancos de dados centralizados, parece que criptomoedas estão sob a ameaça de espionagem e censura.   

A História tem mostrado que centralizção não criará uma forma alternativa de mercado financeiro. Como aprendemos com o advento de contratos inteligentes, criptomoedas são mais que apenas meras ferramentas para um mercado financeiro mais rápido. Para um entendimento mais profundo de como Ergo vê o espírito e aplicação de criptomoedas, por favor veja o [Manifesto Ergo](https://ergoplatform.org/pt/blog/2021-04-26-the-ergo-manifesto/).

Bitcoin foi criada como uma alternativa à moedas fiduciárias e estruturas centralizadas através do oferecimento de um meio descentralizado de armazenamento de dados e autenticação. Criptomoedas apagou a necessidade de uma entidade intermediária e mudou como percebemos finanças, propriedade e transparência. Porém, isso não é necessariamente o caso quando analizamos a economia de token de certas criptomoedas. 

Alguns modelos de mineração por contratos inteligentes, como [SmartPools](https://ergoplatform.org/pt/blog/2021-11-19-ergo-smartpools-and-decentralized-mining/) ou [Mineração em Espaço Logarítmico](https://ergoplatform.org/pt/blog/2021-07-19-mining-in-logarithmic-space-nipopow-power-and-ergo/), podem aumentar a descentralização do poderio de mineração. Estes tipos de modelos ajudam a previnir [ataques de 51%](https://br.investing.com/news/cryptocurrency-news/o-que-e-um-ataque-de-51-pode-acabar-com-o-bitcoin-852594) e aumentar a segurança da rede. A quantidade de pools de mineração que suportam Ergo aumentou de em mais de 20, com duas destas operando como pools lançadas pela comunidade.

No caso de corretoras centralizadas, o ditado diz: se não são suas chaves, não são suas moedas. Toda pessoa precisa possuir uma [carteira sem custódia](https://ergoplatform.org/pt/wallets/) para a segurança de seus fundos. Sua frase-semente é única para você e seus fundos estão sob seu controle e imunes de ataques hackers contra corretoras. Aditionalmente, carteiras sem custódia permitem que usuários acessem dApps de modo que eles possam se beneficiar de interações seguras.

## Accessibilidade de Informação

Bancos, governos, firmas de investmento e etc, todas essas entidades possuem uma grande quantidade de poder sobre indivíduos. Quando indivíduos usam serviços de bancos de dados centralizados para armazenamento e autenticação, sua acessibilidade para aqueles dados se torna um risco. Censura vêm em vários formatos, desde uma simples isenção para certas vantagens (e.g. fontes internas, ofertas especiais) até censura completa (e.g ser banido de mercados globais).

Assim não é como uma economia de livre mercado deveria funcionar. O Estado tem priorizado instituições ao invés de indivíduos e tem criado competição injusta. Isto leva a tomadas de risco irresponsáveis por instituições e uma economia mais frágil. A Natureza não favorece os defavorecidos e uma pessoa média está sujeita a sofrer as piores consequências em uma quebra de mercado - já que frequentemente não há resgates financeiros para pessoas.

Criptomoedas dão uma solução (embora imperfeita) e uma oposição à acumulação central de poderes de governança. A relação entre indivíduos e autoridades passará por uma transição social neste novo contexto de poder. O que antes era visto como uma [Caixa Preta](https://pt.wikipedia.org/wiki/Caixa_preta_(teoria_dos_sistemas)), hoje é tokenizado e descentralizado. O uso de criptografia introduziu autenticidade de conhecimento-zero que é acessível e segura para ser usada por muitos. Pela primeira vez, pessoas não têm que depender de um banco de dados centralizado; embora o poder de bancos de dados centralizados não se dissipará de forma rápida.

## Espionagem

Agora que vemos que criptomoedas estão (supostamente) oferecendo oportunidades para pessoas comuns, devemos explorar quais condições em que isso se torna realmente verdade. Quando Bitcoin foi lançada, foi projetada como um valor de troca imutável e descentralizado. A ideia de privacidade não era uma prioridade maior que a segurança do sistema. Bitcoin provê uma pseudo-anonimidade, já que os endereços podem ser vistos on-chain apesar de não poderem ser ligados a um indivíduo diretamente. Abaixo, uma explicação do "Novo Modelo de Privacidade" do [artigo do Bitcoin](https://bitcoin.org/bitcoin.pdf).

![](https://lh5.googleusercontent.com/xD3ABK9U0KWp3yQArDiJ6HMnjWD7U5Qq1gV8nd2L9ljugm5-a22Mq1j0K960Gkzib_faURcjs0v8aFToTaM_QvJKNbM78OHdFlibzR4CkjlGt-Hh2oDP6wpw8fglqIDvDbm1u073)

Este foi um grande salto para privacidade, mas ainda uma versão inicial de anonimidade digital.

Depois, usuários de Bitcoin puderam obfuscar suas transações através do uso de mixers centralizados. Um mixer não-interativo era difícil de implementar em Bitcoin, apesar do [upgrade Taproot](https://www.research.arcane.no/blog/what-is-taproot-the-next-bitcoin-upgrade) ter aberto a possibilidade para novos modelos de privacidade. Existem também criptomoedas voltadas à privacidade, e.g. Monero, que obfuscam todas as transações. Ergo tem a flexibilidade para implementar privacidade em vários casos de uso. Embora não seja uma blockchain orientada pela privacidade, os Protocolos Sigma permitem dApps voltados à privacidade, e.g. [ErgoMixer](https://ergoplatform.org/pt/blog/2021-05-12-ergomixer/), ou side-chains privadas, para obfuscar transações específicas.

Com a tecnologia blockchain, camadas hierárquicas de privacidade podem ser criadas para selecionar quais dados podem ser compartilhados com quem. Nesse sentido, blockchains estão perfeitamente posicionadas para atender as necessidades de segurança de empresas e outras instituições. Inevitavelmente, isto levará a alguma resistência de instituições centralizadas, porque elas provavelmente não vão querer perder seus poderes para redes pessoa-para-pessoa. 

Ergo acredita que o futuro encontra-se em reconquistar e devolver o poder para pessoas comuns. Precisamos aprender quais ferramentas estão facilmente disponíveis e quais nós, enquanto sociedade, estamos em perigo de perder. Porém, uma revolução tokenizada pode não ser rápida ou estável, já que as pessoas atualmente em controle sem dúvida não gostarão da redistribuição da atual estrutura de poder.

Portanto, é importante entendermos e analizarmos nossas próprias ações. Se criptomoedas se tornarem centralizadas ou se os usuários usarem bancos de dados centralizados em detrimento a blockchains, o modelo não seria diferente do que os modelos históricos que nos levaram a este momento. Recomendamos que todos estejam cientes da distribuição de token e hash-rate da rede, tenham uma carteira sem custódia, e sempre faça sua própria pesquisa.

Para o próximo artigo da série, mergulharemos no mundo da tecnologia blockchain e inovação. Se estiver com curiosidade sobre os artigos anteriores da série Ergo & Blockchain series, por favor veja: 

[Ergo & Blockchain: 'Criptosfera'](https://ergoplatform.org/pt/blog/2021-10-26-ergo-blockchain-cryptocurrency-sphere/) 

[Ergo & Blockchain: Economia de Token & Finanças](https://ergoplatform.org/pt/blog/2021-11-05-ergo-blockchain-tokenomics-and-finance/)

<!--EndFragment-->