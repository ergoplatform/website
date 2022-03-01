---
title: "Auditoria de Segurança (por Jean Philippe Aumasson)"
date: 2020-01-12
draft: false
author: "Equipe Ergo"
authorPhoto: "/img/logotype_black_circle.svg"
blogPhoto: "/img/blog/security.jpg"
tags: ["Equipe Ergo"]
---

Gostaríamos de anunciar que Ergo passou com sucesso por uma auditoria de segurança em algumas (das mais críticas) partes do código. Dessa vez, a auditoria foi feita por Jean-Philipee Aumasson (também conhecido como "veorq", [https://aumasson.jp/](https://aumasson.jp/) ).

O relatório detalhado se encontra abaixo. Nada crítico foi encontrado. Comentários sobre problemas encontrados:

1. Sobre senha de carteira, forneceremos uma recomendação nas próximas versões do cliente do protocolo. Não temos certeza se um cumprimento forçado da senha será imposto, mas fazemos mais consultas sobre esse assunto.

2. Mudar os parâmetros "n" e "k" faz sentido somente quando lançarmos a nova rede. Mudar esses parâmetros em um nó de mineração tornará blocos produzidos inválidos para outros nós. Mudar esses parâmetros no cliente do protocolo significa realizar outra bifurcação (blocos provenientes de participantes honestos do protocolo serão rejeitados). Então, não talvez haja necessidade de verificações extras, já que pessoas lançando novas redes configurarão "n" e "k" propriamente.

3. Atualmente, o nó Ergo (assim como outros clientes de protocolo blockchain e carteiras de nosso conhecimento e bibliotecas criptográficas que estamos usando) não fornecem proteção contra ataques em canais paralelos que estejam sendo executados localmente , e.g. ataques temporais ou inspeções de memória feitos por vírus e *malwares*. Então, por favor, proteja máquinas que estejam rodando carteiras!  

==========================================================================================================

% Avaliação de segurança Ergo % Jean-Philippe Aumasson % 07 / Dez / 2019

## Resumo

Fomos solicitados por Ergo para realizar uma avaliação de segurança de diversos componentes da Plataforma Ergo:

* Criação e verificação de provas dos Protocolos Sigma
* Armazenamento seguro de segredos pela carteira oficial
* Validação da Prova-de-Trabalho

Esse breve relatório resume nossa avaliação e descreve nossos achados e recomendações de mitigações de problemas.

## Provas dos Protocolos Sigma

O protocolo Ergo depende de ErgoScript, uma linguagem de programação que suporta declarações-sigma, que podem ser provadas e verificadas através de provas não-interativas de conhecimento.

Essas provas são declarações descritas como uma árvore de portas lógicas E e OU e condições limítrofes, cujas folhas são provas de conhecimento de um problema de logaritmo discreto.

A prova da declaração-sigma, então, é feita de forma não-interativa graças à [heurística de Fiat-Shamir](https://pt.frwiki.wiki/wiki/Heuristique_de_Fiat-Shamir).

Essa lógica é especificada no [artigo do ErgoScript](https://ergoplatform.org/docs/ErgoScript.pdf) (em Inglês), e as rotinas específicas de prova e verificação são descritas no Apêndice A.

Então, os desafios de implementação são:

* Definir a codificação das provas que são seguras e eficientes, implementar a serialização e desserialização que sempre seja bem-sucedida em processar uma entrada válida e que sempre falhe "graciosamente" ao processar uma entrada inválida.

* Implementar corretamente as funcionalidades de prova e verificação, de acordo com a especificação e, mais importante, tal que nenhuma declaração inválida possa passar por um teste de verificação de forma bem-sucedida.

Nós revisamos esses dois aspectos, com base no código disponível no repositório ["sigmastate-interpreter"](https://github.com/ScorexFoundation/sigmastate-interpreter) e no [artigo do ErgoScript](https://ergoplatform.org/docs/ErgoScript.pdf), cuidadosamente comparando o comportamento pretendido (no Apêndice A) com o comportamento real implementado.

Notavelmente, revisamos os códigos dos traços e objetos conhecidos como [SigSerializer](https://github.com/ScorexFoundation/sigmastate-interpreter/blob/master/sigmastate/src/main/scala/sigmastate/SigSerializer.scala), [Interpreter](https://github.com/ScorexFoundation/sigmastate-interpreter/blob/master/sigmastate/src/main/scala/sigmastate/interpreter/Interpreter.scala) e [ProverInterpreter](https://github.com/ScorexFoundation/sigmastate-interpreter/blob/master/sigmastate/src/main/scala/sigmastate/interpreter/ProverInterpreter.scala).

Principalmente, procuramos erros das seguintes classes:

* Processamento inseguro de entrada mal-formada
* Processamento inseguro de entrada excepcionalmente longa ou curta
* Comportamento quando ocorrer larga profundidade de árvore ou grande nível de recursão
* Uso inseguro de tipos e estruturas em Scala
* Tipos inapropriados de variáveis
* Inundação de Inteiros
* Condições de corrida
* Erros lógicos 

Apesar de revisão extensa, não identificamos qualquer questão de segurança.

Mesmo assim, a lógica e funcionamento interno do protocolo são relativamente complexos, e acreditamos que o maior risco se encontra na análise e verificação das provas. Para explorar esses problemas, porém, um agressor teria que criar um programa semanticamente correto, que de alguma maneira o(a) beneficie, e ainda assim passe sem problemas pela verificação quando não deve.

No que diz respeito à segurança de software, Scala elimina certas classes de erros, mas um código em Scala ainda pode sofrer com erros devido a comportamentos que sejam específicos da linguagem Scala ou de erros sem tratamento.

## Carteira

A funcionalidade de carteira Ergo permite que seus usuários armazenem um segredo em um disco e o recuperem, inicializando a carteira com uma nova semente quando ela [a carteira] é usada pela primeira vez.

Essa lógica é principalmente definida em [ErgoWalletActor](https://github.com/ergoplatform/ergo/blob/master/src/main/scala/org/ergoplatform/nodeView/wallet/ErgoWalletActor.scala) e um componente-chave no que diz respeito ao armazenamento de segredos está em [JsonSecretStorage](https://github.com/ergoplatform/ergo/blob/master/ergo-wallet/src/main/scala/org/ergoplatform/wallet/secrets/JsonSecretStorage.scala).

A primeira vez que uma carteira é criada, o comando `InitWallet` faz o seguinte:

* Gera *bits* aleatórios `settings.walletSettings.seedStrengthBits` como entropia inicial. [Por padrão](https://github.com/ergoplatform/ergo/blob/master/src/main/resources/reference.conf), 160 *bits* são gerados.

* Gera uma BIP39 a partir dos *bits* aleatórios gerados, que podem ser vistos como uma codificação dos *bits* de entropia. A lógica BIP39 padrão é utilizada, com senha opcional.
* Deriva uma semente a partir da frase mnemônica usando a lógica de derivação de BIP39 baseada em PBKDF2.

* Encripta essa semente no disco com AES-GCM, usando um [*nonce*](https://pt.wikipedia.org/wiki/Nonce) aleatório, e uma chave é derivada a partir da senha usando PBKDF2-HMAC-SHA256 com [128000](https://github.com/ergoplatform/ergo/blob/master/src/test/resources/application.conf#L107) iterações, usando um [sal](https://pt.wikipedia.org/wiki/Sal_(criptografia)) aleatório.

Para desbloquear a carteira já criada, um usuário fornece a senha e a carteira tenta decodificar os dados armazenados.

Para restaurar uma conta existente a partir de uma frase de acesso em BIP39, um processo similar à inicialização é realizado, exceto pelo fato da carteira ser derivar a semente a partir da frase mnemônica ao invés de selecionar uma frase mnemônica aleatória.

Os dois riscos identificados aqui são:

* A ausência de verificações no comprimento da senha: como a senha é suficiente para acessar a semente dada pelo segredo da carteira armazenado no disco, a senha deve, em teoria, ter pelo menos tanta entropia quanto a frase mnemônica e, na prática, deve ser difícil se der adivinhada. Então, recomendamos o cumprimento de um comprimento mínimo de senha, e.g. 16 caracteres.

* Cópias dos valores secretos (senha, semente e outras chaves-privadas derivadas) provavelmente permanecem em memória após a execução do software da carteira, o que é uma limitação intrínseca de linguagens com [coleta de lixo](https://pt.wikipedia.org/wiki/Coletor_de_lixo_(inform%C3%A1tica)) automática, que é o caso de Scala.

Outro processo ou usuário que compartilhe do mesmo espaço de endereço de memória poderia potencialmente recuperar os segredos, além deles [os segredos] poderem aparecer nos chamados *crash dumps* (quando conteúdo de um processo é escrito em um arquivo). Até onde sabemos, não há mitigação efetiva para esse tipo de questão apenas usando Scala.

​
# Validação da Prova-de-Trabalho

Após revisão prévia da segurança do algoritmo Autolykos, realizamos outra rodada de revisão, focando na sua última lógica de verificação e, notavelmente, nas mudanças feitas pelo *commit* [eb0f85a](https://github.com/ergoplatform/ergo/commit/eb0f85ac48b0ee8194c12369faf4cc5f16954af9).

O principal artigo relevante é [AutolykosPowScheme](https://github.com/ergoplatform/ergo/blob/master/src/main/scala/org/ergoplatform/mining/AutolykosPowScheme.scala), e outras importantes operações são, por exemplo, implementadas em [HeadersProcessor](https://github.com/ergoplatform/ergo/blob/master/src/main/scala/org/ergoplatform/nodeView/history/storage/modifierprocessors/HeadersProcessor.scala) e [ModifierValidator](https://github.com/ScorexFoundation/Scorex/blob/master/src/main/scala/scorex/core/validation/ModifierValidator.scala).

Verificamos que a lógica de verificação implementada é consistente com o que é proposto nas especificações do Autolykos e que é propriamente integrado na lógica de validação dos cabeçalhos de blocos.

Acreditamos que os seguintes pontos devem ser endereçados:

* Validação mais estrita de `k` e `n`: embora a classe force `k <= 32` (número de elementos na solução) e `n < 31` (log2 do número total de elementos), *weak* (sem tradução) ainda poderia ser criado a partir de parâmetros autorizados. A função `validate()` pode, portanto, ter validação adicional tal que `n` e `k` sejam iguais aos valores pretendidos.

* Afirmar que `k` e `n` sejam valores positivos, já que atualmente valores negativos (como `Int`s) parrariam declarações `assert`.
