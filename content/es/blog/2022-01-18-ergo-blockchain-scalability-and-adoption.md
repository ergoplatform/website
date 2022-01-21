---
title: "Ergo & Blockchain: Escalabilidad y adopción"
date: 2022-01-18T17:48:31.980Z
author: Ergo Platform (translated by Daniu, original version will always prevail)
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/06_ergoblog_cover_01182022-1-.png
tags:
  - Building Ergo
---
<!--StartFragment-->

En este episodio de la serie Ergo & Blockchain, veremos varios aspectos de [escalabilidad](https://www.investopedia.com/terms/s/scalability.asp) y por qué son cruciales para la adopción de criptomonedas. Desde la introducción de los contratos inteligentes en las cadenas de bloques, la industria ha sido testigo de problemas relacionados con el crecimiento exponencial del almacenamiento, los requisitos de los nodos y el aumento de las tarifas del gas. Estos problemas han creado barreras de entrada para nuevas personas, a menudo debido a las altas tarifas de transacción. Hay pocas opciones para reducir la congestión y aumentar el rendimiento, ya sea actualizando el hardware y usando más energía o haciendo que la infraestructura subyacente sea más eficiente.

## Escalar verticalmente

El escalado vertical es la forma más fácil de aumentar la escalabilidad de una red. En este modelo, la escalabilidad aumenta al actualizar el hardware computacional y usar más energía. No hay desarrollo de software porque el aumento del ancho de banda depende de la potencia bruta. Es por eso que existe un límite para este tipo de desarrollo: los gastos aumentan a medida que crece la red.

Al observar las cadenas de bloques, el escalado vertical significa que los nodos de validación tienen requisitos de hardware elevados. Inevitablemente, esto provoca la centralización solo cuando los grandes actores con servidores potentes participan en el consenso de la red. En este caso, una cadena de bloques puede alcanzar fácilmente miles de valores de transacción por segundo (TPS). Este tipo de blockchain representaría una red con solo un par de nodos que representan todo el consenso.

Supongamos que solo un puñado de validadores están protegiendo la red. En este caso, la red puede denominarse blockchain como servicio (BaaS), lo que significa que un tercero proporciona un servicio en la nube para implementar aplicaciones descentralizadas. El problema con este modelo es que la red contiene puntos de falla centralizados. Por lo tanto, solo los proveedores de servicios pueden mantener el mecanismo de consenso y puede ser difícil que nuevos participantes se unan al consenso.

**EXPLICACIÓN SENCILLA** Imagina que google pone sus 1000 ordenadores más potentes a hacer de nodos de la red, la blockchain tendrá unas transacciones por segundo abrumadoras, pero claro, ya no es una red *descentralizada* ya que si google apaga esos 1000 ordenadores...

Bien, sigamos.



## Escala horizontal

El escalado horizontal indica que los recursos existentes (p. ej., hardware y energía) no se modifican, pero se amplía la capacidad de la red para utilizar los recursos. Hay costos más altos (al menos a corto plazo) para este desarrollo, ya que necesita más recursos humanos, más investigación y más tiempo sin la promesa de retornos instantáneos. Sin embargo, los avances tecnológicos pueden ser un desarrollo colaborativo y un poder que impulse más investigación. Siguiendo ese camino, los rendimientos pueden aumentar exponencialmente con el tiempo.

Además de reducir los costos computacionales a largo plazo, otro beneficio de este tipo de escalado es la capacidad de disminuir los puntos de falla centralizados. Como la red depende menos de las supercomputadoras, más actores pueden poseer la red y la cadena de bloques puede volverse más descentralizada. Dicho esto, siempre depende de las personas si quieren utilizar las soluciones existentes o admitir nuevos avances.

## Adopción de las criptomonedas

Es una certeza que las cadenas de bloques deben escalar para adaptarse a la adopción masiva. Como se mencionó anteriormente, esto se puede lograr utilizando servidores más potentes o utilizando unidades más pequeñas de manera más efectiva. Para la adopción masiva de criptomonedas, las cadenas de bloques deben manejar una gran cantidad de transacciones, incluidos micropagos y contratos de firma simple.

Las soluciones de escalado de capa 2 son contratos inteligentes que facilitan las transferencias de blockchain al reducir los costos y el tiempo de procesamiento. Las soluciones de capa 2 también se denominan soluciones fuera de la cadena (off-chain) porque las transferencias y las interacciones no ocurren en la cadena de bloques principal. En cambio, los usuarios interactúan con una capa separada conectada a la cadena de bloques principal. Para usar la escalabilidad de Capa 2, primero se deben unir los activos de la cadena principal al protocolo fuera de la cadena.
## Soluciones capa 2

**Lightning Network:** Las soluciones de capa 2 también tienen nodos de validación, por lo que su seguridad no siempre está ligada únicamente a la cadena principal. Por ejemplo, [Lightning Network](http://lightning.network/how-it-works/) es una solución de escalado de Bitcoin y también tiene sus propios nodos que validan transacciones. No hay recompensas mineras por alojar un nodo Lightning Network, por lo que los ingresos del operador del nodo dependen únicamente de las tarifas de transacción.

**Plasma Chains:** Este es un enfoque híbrido (que es aplicado por Polygon) que utiliza una capa de consenso de prueba de participación (PoS) sobre Ethereum. Esta cadena lateral paralela, que se basa en el diseño de [cadenas de plasma](https://ethereum.org/en/developers/docs/scaling/plasma/), es una cadena de menor costo que depende de las partes interesadas para asegurar la red. A medida que los tokens de participación interactúan con la cadena principal, el modelo utiliza una parte de la seguridad de Ethereum y una parte de su propio consenso interno de PoS. Cuando los usuarios apuestan sus tokens, delegan el consenso a un operador de validación, conocido como proveedores de servidores confiables y seguros.

**ZK-Rollups:** Utilizando [zkSNARK](https://blog.ethereum.org/2016/12/05/zksnarks-in-a-nutshell/), pueden disminuir la carga de la red permitiendo que las transacciones se procesen en grandes lotes. La seguridad de las transacciones se basa directamente en la cadena principal asegurada mediante la adición de pruebas matemáticas para validar las transacciones. Sin embargo, es relativamente más difícil que los enfoques híbridos implementar todas las funcionalidades de la red principal con total seguridad. Varios proyectos están desarrollando su propio enfoque para implementar zkSNARK.

**Optimistic Rollups:** [Optimistic Rollups](https://docs.ethhub.io/ethereum-roadmap/layer-2-scaling/optimistic_rollups/) funciona un poco diferente al plasma y zkSNARK en términos de asegurar la capa. Los rollups optimistas calculan las transacciones en una cadena paralela compatible con EVM llamada Optimistic Virtual Machine (OVM) y se comunican con la cadena principal. El modelo se llama optimista porque se basa en el principio Fraud-Proof, en el que los agregadores no verifican activamente la capa 2, pero interfieren en caso de disputa por fraude.

**State Channels:** Por último, un modelo llamado canales estatales, es un tipo de modelo de firma entre pares y el diseño también se puede usar como canales de pago para propósitos simples. El problema, sin embargo, es que los canales estatales son contratos preestablecidos para los cuales los participantes se definen en el lanzamiento. Cada vez que un nuevo participante quiere usar el canal, se necesita la creación de un nuevo contrato. A cambio, hay mayor privacidad y seguridad, pero poca o ninguna flexibilidad para un sistema abierto. Los miembros de investigación de IOHK publicaron un nuevo modelo llamado [Hydra: canales de estado isomorfos] (https://iohk.io/en/research/library/papers/hydrafast-isomorphic-state-channels/) que introduce canales de estado multipartidistas utilizando cálculos dentro y fuera de la cadena impulsados ​​por el diseño eUTXO.

**NIPoPoWs:** [Non-interactive proofs of proof of work](http://docs.ergoplatform.org/dev/protocol/nipopow/) es un término generalizado que se refiere a clientes ligeros y cadenas laterales. Los clientes ligeros, que consisten en nodos ligeros y billeteras ligeras, son clientes eficientes que no necesitan mantener toda la cadena de bloques para verificar las transacciones y habilitar billeteras móviles eficientes y un arranque de minero más rápido. Los clientes pueden interactuar entre sí usando solo los encabezados de los bloques, lo que reduce los recursos computacionales. Ergo ha habilitado la compatibilidad con NIPoPoW desde el bloque de génesis y se pueden aplicar a la cadena de bloques de Ergo con una implementación fácil [velvet fork](https://www.coindesk.com/markets/2018/03/15/velvet-forks-crypto-updates-without-the-controversy/). Los NIPoPoW también se pueden implementar para admitir la comunicación entre cadenas PoW y PoS.

*En el próximo artículo, analizaremos el tema de Sostenibilidad y Crecimiento de blockchains. Al hacer eso, echaremos un vistazo a la historia y al ecosistema actual; cómo está evolucionando el panorama legal, qué tipo de actores están participando y qué tipo de problemas podemos esperar encontrar.*

**Artículos previos**

[Ergo & Blockchain: Cryptocurrency Sphere](https://ergoplatform.org/en/blog/2021-10-26-ergo-blockchain-cryptocurrency-sphere/) este está en inglés.

[Ergo & Blockchain: Tokenomics and Finance](https://ergoplatform.org/es/blog/2021-11-05-ergo-blockchain-tokenomics-and-finance/)

[Ergo & Blockchain: Privacy and Security](https://ergoplatform.org/es/blog/2021-12-02-ergo-blockchain-privacy-and-security/)

[Ergo & Blockchain: Technology and Innovation](https://ergoplatform.org/es/blog/2021-12-28-ergo-blockchain-technology-and-innovation/) 

<!--EndFragment-->