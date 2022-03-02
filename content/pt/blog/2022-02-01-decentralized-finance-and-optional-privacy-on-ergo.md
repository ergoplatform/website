---
title: Finanças Descentralizadas e Privacidade Opcional em Ergo
date: 2022-02-01T16:43:44.215Z
author: Plataforma Ergo
authorPhoto: /img/uploads/symbol_bold__1080px__black.png
blogPhoto: /img/uploads/01_ergoblog_cover_02012022-1-.png
tags:
  - Construindo Ergo
---
<!--StartFragment-->

## Privacidade Financeira e Blockchains Públicas

Bitcoin é uma rede de livros-razão distribuídos publicamente, que é acessível para todo mundo que queira verificar o estado da blockchain. Há ferramentas como [Explorador Bitcoin](https://bitcoinexplorer.org/), que é constituído de interfaces para verificação de dados e transações diretamente na rede. A transparência de uma criptomoeda é da mais suma importância, porque Bitcoin foi inventada para prevenir manipulação por terceiros. Também é importante que as pessoas protejam sua privacidade financeira em plataformas digitais. Por este motivo, Ergo desenvolveu os Protocolos Sigma: provas criptográficas que suportam [funcionalidades de privacidade opcionais](https://eprint.iacr.org/2020/560.pdf) (link em inglês) sem comprometer a segurança. 



Satoshi Nakamoto nos mostrou uma abordagem genial para tecnologias blockchain ao introduzir o mecanismo de consenso chamado Prova-de-Trabalho para resolver o ["Problema dos Generais Bizantinos"](https://pt.wikipedia.org/wiki/Problema_dos_dois_generais). O design de Bitcoin elimina fraudes ao permitir que qualquer um valide a rede. A tecnologia criptográfica continuou a ser desenvolvida desde o bloco-gênesis de Bitcoin, com a recente [atualização Taproot do Bitcoin](https://ergoplatform.org/pt/blog/2021-11-17-bitcoin-taproot-upgrade-and-ergos-sigma-protocols/). Essa atualização integrou as [Provas de Schnorr](https://pt.wikipedia.org/wiki/Prova_de_conhecimento) para criar propriedades de privacidade para carteiras *multi-sig* (multi-assinaturas), permitindo que múltiplas pessoas assinem uma transação sem revelar toda a informação no contrato.



Em conjunto com os Protocolos Sigma, Ergo avança o design UTXO de Bitcoin com a implementação dos contratos Multi-Estágio. O modelo de Bitcoin se diferencia do longevo modelo de contas de Ethereum, porque um balanço de um endereço é a sima de múltiplas caixas UTXO de curta duração. O modelo [UTXO estendido de Ergo](https://docs.ergoplatform.com/dev/protocol/eutxo/) permite a criação ilimitada de novos endereços de recebimento a partir da mesma chave-semente. Os usuários podem facilmente criar funcionalidades de privacidade opcionais a partir de toda carteira Ergo, seja ela móvel, uma extensão para navegador ou um nó completo. Porém, Ergo não é uma blockchain estritamente volta à privacidade, porque você também está no controle do compartilhamento de informações somente-leitura com uma chave pública. A anatomia do modelo eUTXO está para além do objetivo deste artigo, mas, por agora, nos focaremos em funcionalidades opcionais de privacidade que são possíveis graças aos Protocolos Sigma.



## Protocolos Sigma: Abordagem de Ergo para Provas de Conhecimento-Zero



[Protocolos Sigma](https://docs.ergoplatform.com/dev/scs/sigma/) (link em inglês) são um subconjunto de Provas Generalizadas de Schnorr, as provas matemáticas que ajudam a verificar a informação necessária para executar uma transação. Tecnologia criptográfica faz com que servidores validem transações sem acessar todos os dados dos usuários. Os fundadores [de Ergo] incluíram os Protocolos Sigma em seu bloco-gênesis com a ideia de que Ergo será a plataforma contratual do futuro. Blockchains tê o potencial de se tornar uma ferramenta de vigilância em massa para empresas de marketing e atores maliciosos, mas, com a implementação de provas de conhecimento-zero, funcionalidades opcionais de privacidade são possíveis.



Por exemplo, Moedas Digitais de Banco Central (CBDCs, sigla em inglês) são versões privadas de livros-razão distribuídos. Nessas redes, os usuários podem verificar e esconder transações até um certo nível. Porém, governos e/ou outras instituições de confiança na rede terão a habilidade de usar ferramentas de vigilância em massa, censurar nossas transações ou potencialmente usar nossos fundos depositados de maneiras que não poderemos controlar. Em Bitcoin, identidade não está diretamente correlacionada com um endereço e, portanto, existe algum grau de privacidade na rede. Por outro lado, CBDCs são abertas a potenciais explorações, porque toda ação é processada em servidores centralizados de propriedade de governos ou bancos. 



Vamos discutir as preocupações sobre lavagem de dinheiro e negociações em mercados paralelos usando criptomoedas. Muito embora somente em torno de [1% das transações em Bitcoin sejam categorizadas como ilícitas](https://cryptoforinnovation.org/resources/Analysis_of_Bitcoin_in_Illicit_Finance.pdf) (link em inglês), criptomoedas são frequentemente criticadas como uma plataforma para lavagem de dinheiro. O processo de [lavagem de dinheiro](https://pt.wikipedia.org/wiki/Lavagem_de_dinheiro) envolve três fases: *colocação*, *disposição em camadas* e *integração*. Criptomoedas facilitam a fase de disposição em camadas ao criar a possibilidade de transações através de fronteiras para todos, mas o dinheiro sujo tem que entrar e sair através de canais não-identificáveis. Verificar as fontes de renda e as instalações de produção são pontos onde governos podem facilmente interceptar essa atividade ilegal, já que o dinheiro sujo ainda opera com moedas fiduciárias.



Sistemas de conhecimento-zero não são ferramentas para lavagem de dinheiro - eles são ferramentas para construção de sistemas verificáveis. Atualmente, qualquer economia com múltiplas partes envolvidas precisa depender em fontes centrais de dados para a segurança de seus fundos. Não podemos saber quantas transações estão acontecendo ou quantos fundos são transferidos se não somos os governos. Aqui, os Protocolos Sigma podem ser úteis para criação de economias desse tipo, estabelecendo uma confiança mínima com o poder de contratos inteligentes.



## Exemplo de Privacidade Opcional: LETS agnósticos 



LETS é uma sigla em Inglês para [Sistema de Negociação de Câmbio Local](https://ergoplatform.org/pt/blog/2021-07-01-lets-start-the-discussion/) - um tipo de economia de crédito mútuo. Quando consideramos economias menores, LETS podem ser especialmente úteis durante tempos de crise. Esse sistema pode também ser visto como um sistema baseado em cupons que as pessoas poderão usar dentro de sua comunidade local específica em troca de bens e serviços. Tradicionalmente, registros de cupons são guardados por uma base de dados comissionada, portando sendo vulneráveis a erro humano.



A blockchain Ergo fornece uma infraestrutura para construção de LETS agnósticos usando Protocolos Sigma. Em uma blockchain sem foco em privacidade, tudo será transparente, mas uma empresa poderia ser prejudicada se seus dados fossem expostos para o público. Em uma blockchain com foco em privacidade, não podemos verificar como entidades (governos, instituições de caridade, bancos, etc) estão usando dinheiro. Os Protocolos Sigma de Ergo permitem modelos de privacidade que sejam adaptados para qualquer motivação econômica ao garantir a segurança de fundos na base de dados da blockchain. 



Se Protocolos Sigma nos dá poder sobre que tipo de informação queremos revelar, então como podemos usá-lo? Vamos olhar para as necessidades de alguns atores em uma simples comunidade econômica:



**Municipalidades:** Precisam de um alto nível de transparência no que diz respeito à alocação de fundos provenientes de impostos e tarifas

**Instituições de Caridade**: Precisam de um alto nível de transparência para corretamente exibir gastos enquanto mantendo a opção de esconder doadores

**Empresas:** Precisam de transparência para controle de impostos, mas alto nível de privacidade sobre dados sensíveis

**Indivíduos:** Precisam de transparência para controle de impostos, mas alto nível de privacidade sobre dados sensíveis



O que são dados sensíveis? Pode ser qualquer coisa desde "quando", "onde" e/ou "como" uma transação é completada. Com o tempo, a acumulação desses dados forma um perfil que pode ser explorado por entidades centralizadas. Por exemplo:



* quando você comprar um chocolate. 
* quando você fez uma compra de um ativo.
* seus hábitos financeiros e sua localização. 



Essas informações são armazenadas nos servidores do seu banco / cartão de crédito sob efeitos de acordos legais de privacidade. Em uma blockchain pública, provas são armazenadas nos nós com criptografia, então temos a opção de criar transações de conhecimento-zero. No dia-a-dia de nossas vidas, atualmente, indivíduos são prevenidos de controlar opções de privacidade. Com Ergo, as necessidades de privacidade de toda entidade precisa ser respeitada e mantida através de uma rede de finanças descentralizadas funcional e robusta.



<!--EndFragment-->