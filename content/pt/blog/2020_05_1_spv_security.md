---
title: "Construindo Ergo: Segurança SPV"
date: 2020-05-01
author: "Guy Brandon"
authorPhoto: "/img/authors/guy_brandon.jpg"
blogPhoto: "/img/blog/spv_payment.jpg"
tags: ['Construindo Ergo']
---

_Há uma tensão frequente no mundo cripto entre segurança e conveniência. Essa troca de um pelo outro é inaceitável se quisermos que essas tecnologias sejam amplamente usadas. Abaixo mostramos como Ergo soluciona um problema comum e muito importante._

Todos nós sabemos que a forma mais segura de usar Bitcoin, ou qualquer cripto, é baixar uma cópia da blockchain e executar um nó completo você mesmo. Desta maneira, toda vez que você ou outra pessoa fizer uma transação, seu cliente verifica a blockchain para garantir que a transação é válida. Você não tem que confiar em ninguém.

Um nó completo de Bitcoin verifica todos os blocos na blockchain (usando cabeçalhos) e garante que não há transações fraudulentas. É uma maneira muito segura de usar cripto – mas há um problema. Isto requer significante poder de processamento, de banda e armazenamento. Este tipo de hardware comercial é caro, e usar um nó completo para validar e fazer transações é, de qualquer forma, incompatível com aparelhos móveis. Isto é particularmente verdade para Bitcoin, onde a blockchain já tem [270 GB e continua crescendo](https://www.blockchain.com/charts/blocks-size).

## SPV

Verificação Simplificada de Pagamentos (SPV, sigla em Inglês) é projetada para solucionar este problema, como descrito no [artigo original de Bitcoin](https://bitcoin.org/bitcoin.pdf):

- _É possível verificar pagamentos sem executar um nó completo da rede. Um usuário só precisa manter uma cópia dos cabeçalhos dos blocos da cadeira prova-de-trabalho mais longa, que ele pode conseguir requisitando os nós das redes até que ele esteja convencido que ele possui a cadeia mais longa, e obter o galho Merkle que liga a transação ao bloco que ela está ligada. Ele não pode verificar a transação para si, mas ao ligá-la a um lugar na cadeia, ele pode ver que um nó da rede tenha aceitado, e blocos adicionados após ela confirmam ainda mais que a rede a aceitou._
 
Satoshi nota que que isso não é uma solução perfeita, e está vulnerável a um atacante que sobrepuje a rede e engane usuários SPV.

Além disso, enquanto o modo SPV é direcionado a aparelhos com recursos limitados, até mesmo essa abordagem ‘lite’ não é sustentável. Os cabeçalhos de Ethereum sozinhos totalizam por volta de 5 GB de download. Então, clientes móveis de Ethereum não validam a validade da cadeia e cegamente tem que confiar em terceiros.

Existem propostas para reduzir os requisitos para o modo SPV ao verificar apenas alguns blocos aleatórios, ao invés de todos eles. Porém, é difícil fazer isso de forma segura. 

## SPV Eficiente

Alguns anos foram gastos pesquisando e desenvolvendo protocolos seguros que permitam clientes SPV eficientes. Os dois protocolos mais confiáveis e mais conhecidos são NiPoPoWs e FlyClient.

Ergo implementa NiPoPoWs, ou Provas Não-Interativas de Prova-de-Trabalho. Esta tecnologia pode ser explorada por completo nesse website dedicado: [https://nipopows.com](https://nipopows.com):

- _Provas Não-Interativas de Prova-de-Trabalho (NIPoPoWs) são sequências curtas e únicas de caracteres que um programa de computador pode inspecionar para verificar que um evento aconteceu em uma blockchain baseada em prova-de-trabalho sem conectar-se à rede blockchain e sem baixar todos os cabeçalhos de blocos. Por exemplo, essas provas podem ilustrar que um pagamento de criptomoedas foi feito._

- _NIPoPoWs permitem que carteiras móveis muito eficientes sejam criadas. [Carteiras SPV](https://bitcoin.org/en/developer-guide#simplified-payment-verification-spv) já são muito leves se comparadas a nós completos, porque elas requerem somente o download dos cabeçalhos dos blocos, não da blockchain inteira. Carteiras NIPoPoW  precisam baixar somente uma pequena ***amostra*** dos cabeçalhos dos blocos (em torno de 250), enquanto clientes SPV precisam baixar meio milhão de cabeçalhos. Com o crescimento da blockchain durante os anos, a amostra muda, mas não cresce muito em tamanho, mesmo após décadas de dados sendo acumulados._

Isto nos permite construir um cliente SPV móvel que requeira por volta de __apenas 100KB__ de cabeçalhos de blocos para serem baixados.

Uma carteira Ergo super-eficiente com segurança SPV está em desenvolvimento. Então, fique ligado para mais atualizações!
