---
title: "Ecosistema de ergo: soluciones escalables"
date: 2021-10-29T13:47:53.833Z
author: Ergo Foundation
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/ergoscale.jpg
tags:
  - Building Ergo
  - Roadmap
---
<!--StartFragment-->

El factor de la escalabilidad en el diseño de Ergo ha sido una alta prioridad desde el lanzamiento de la red principal. Para obtener una adopción masiva, una cadena de bloques debería ser escalable. La escalabilidad se refiere al uso eficiente de recursos computacionales y alto rendimiento. Ergo incorpora varios elementos para lograr una escalabilidad casi infinita. El diseño se basa en el modelo UTXO extendido con su lenguaje novedoso, ErgoScript, que se basa en investigaciones académicas revisadas por pares. Con años de investigación, Ergo desarrolló varias características como clientes sin estado, NIPoPoWs y contratos inteligentes basados ​​en UTXO.



Inicialmente, la Capa 0 es la capa de referencia donde se conectan los nodos. Esta es la capa de infraestructura de igual a igual. Ergo Node Client ha mejorado mucho desde la v4.0.8 y todavía tiene 20 veces más espacio para desarrollarse. [Bootstrapping ligeros](https://ergoplatform.org/en/blog/2021-07-19-mining-in-logarithmic-space-nipopow-power-and-ergo/) utilizando NIPoPoWs también está previsto integrarse a través de un Velvet soft-fork.



En la Capa 1, la capa de aplicación, Ergo admite soluciones de escalabilidad en cadena como Sharding(fragmentación). Aparte de Sharding, el modelo UTXO extendido permite que la mayoría de las transacciones se ejecuten fuera de la cadena y reduce la carga de la red dentro de la cadena.



Al final, existen soluciones de escalado de capa 2 que se refieren a soluciones de escalado de capa fuera de la cadena. Hay varias soluciones fuera de la cadena como [Hydra] (https://iohk.io/en/research/library/papers/hydrafast-isomorphic-state-channels/) y cadenas laterales para comprimir la congestiónen la blockchain y proporcionar beneficios similares como inscripciones -zk. Ergo también puede ser compatible con otras soluciones UTXO Layer 2 como la Lightning Network de Bitcoin.



Los clientes sin estado permiten que tanto las billeteras ligeras como los mineros ligeros se ejecuten con seguridad de nodo completa. La implementación de NIPoPoW a través de las bifurcaciones suaves Velvet permitirá cadenas laterales infinitas en la parte superior de Ergo.


Ergo utiliza "[Storage rent](https://ergoplatform.org/en/blog/2021-07-09-cryptocurrency-fees-a-solution-to-unreasonable-state-growth/)" para evitar el spam y la recirculación bytes de datos no utilizados, conocidos como polvo. La tarifa de premio por almacenamiento ayuda a limpiar la contaminación de la red y anima a los usuarios a ser más activos.



Ergo Platform tiene un enfoque basado en la investigación para el éxito a largo plazo y tiene mucho en la caja de herramientas para abordar los problemas de escalabilidad que vendrán en el futuro.
Estamos preparados para ser el rey de todas las blockchains.



<!--EndFragment-->