---
title: "Minería en Ergo: Herramientas de descentralización"
date: 2021-12-23T17:20:48.055Z
author: Ergo Platform (translated by Daniu, original version will always prevail)
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/mining_ergo_tools_of_decentralization.png
tags:
  - Building Ergo
---
<!--StartFragment-->

Ergo es una cadena de bloques PoW (Prueba de trabajo) en el modelo de consenso llamado Autolykos. Se eligió el modelo PoW porque ofrece los beneficios de un lanzamiento justo. Un lanzamiento justo significa que la Plataforma Ergo no pre-minó una asignación para el equipo o los capitalistas de riesgo. El suministro de ERG solo se libera a través del protocolo de minería y la tesorería de desarrollo del ecosistema recibe el 10% de las recompensas mineras durante los primeros dos años después del lanzamiento de la red principal. Después de 2,5 años desde el lanzamiento, la asignación de tesorería para el desarrollo del ecosistema cae al 0%. A partir de este momento, la tesorería no recibirá más fondos de las recompensas en bloque y solo reciben los mineros.



#### Es importante señalar que la asignación de tesorería representa solo el 4,43% del suministro total de ERG. Esto significa que más del 95% de ERG se destina a la circulación pública.



Ergo tiene muchas herramientas diferentes para respaldar la privacidad y la descentralización de la red: ErgoMixer, minería on-chain, AMM bots fuera de la blockchain y otras implementaciones planificadas (como minería ligera con NIPoPoW). En el modelo UTXO extendido (eUTXO), las partes dentro y fuera de la cadena se pueden usar en combinación, lo que mejora la experiencia del usuario y del minero con una red más segura y escalable.



La seguridad es siempre de suma importancia y las características novedosas de Ergo están diseñadas para permitir que los mineros ayuden a respaldar la red mientras mantienen los más altos estándares de seguridad. A continuación se presenta una descripción general de algunas de las características que garantizan la descentralización y sostenibilidad de la red:


1. **Autolykos:** 

Es un algoritmo de consenso minable por GPU y resistente a ASIC. Ergo se puede explotar con tarjetas gráficas de 4GB, por lo que es más accesible al público promedio. A medida que más mineros se suman y aumentan el hashrate, la minería en solitario se vuelve cada vez más difícil. Siempre es una prioridad diversificar la cantidad de grupos de minería para aumentar la descentralización; esto es algo que la Plataforma Ergo promueve activamente. En la actualidad, hay más de 15 grupos que admiten la minería Ergo.



2. **NIPoPoW:** 

Dado que diversificar y aumentar los grupos de minería es un aspecto importante de la descentralización, la creación de herramientas blockchain para respaldar la descentralización es igualmente importante. Ergo ofrece pruebas de prueba de trabajo no interactivas (NIPoPoW) que se pueden configurar como herramientas nuevas y novedosas para la minería descentralizada.   


Una de las implementaciones de NIPoPoWs es la minería espacial logarítmica (explicado más en detalle en [este artículo](https://medium.com/@ergoplatformes/nipopows-592093035ac6) y su capacidad para configurar mineros con bootstrapping ligero. Esto significa que los mineros no necesitan descargar toda la cadena de bloques cuando realizan minería ligera, lo que permite a los mineros reducir en gran medida los costos de minería de una cadena de bloques en constante crecimiento en el futuro.



3. **Minería On-Chain :**

Esta fue una idea de ErgoHack I que se convirtió en un proyecto durante ErgoHack II. La minería en cadena ofrece interacción con un contrato inteligente, lo que permite un proceso más transparente y verificable al minar en un grupo. En los grupos de minería regulares, los mineros solitarios se conectan a servidores centralizados y minan como un grupo. Dentro de esta estructura, es imposible verificar si los mineros obtienen sus acciones legítimas. Con la minería en cadena, los mineros pueden verificar que lo que obtienen es lo que se les prometió: su objetivo es eliminar las barreras entre los mineros individuales y los grupos de minería.



4. **AMM Bots**

El modelo fuera de cadena de ErgoDEX dio lugar a algunos debates sobre la descentralización de la aplicación. Como Armeanio [explico aquí](https://ergoplatform.org/en/blog/2021-10-04-off-chain-logic-and-eutxo/), los bots distribuidos fuera de la cadena resolverán el problema de los nodos centralizados para ErgoDEX. Cuando las personas tienen incentivos (como tarifas de ejecución de DEX) para ejecutar los bots de AMM, se espera un mayor número de usuarios que ejecutan el back-end de ErgoDEX. Se puede aplicar un diseño similar a otras aplicaciones DeFi en Ergo.



5. **ErgoMixer:**

ErgoMixer es el PRIMER mezclador no interactivo y sin custodia en la cadena de bloques. Es un componente útil para quienes desean mantener la privacidad de sus transacciones. Los protocolos Sigma nativos de Ergo también proporcionan una variedad de otros esquemas de privacidad. Por ejemplo, cuando se implementan direcciones furtivas dentro de contratos inteligentes, la privacidad puede ser una opción al interactuar con la cadena de bloques.



6. **Tarifas de almacenamiento**

Este componente se explica en [Cryptocurrency Fees: A Solution to Unreasonable State Growth](https://ergoplatform.org/en/blog/2021-07-09-cryptocurrency-fees-a-solution-to-unreasonable-state-growth/). En resumen, es útil para eliminar el problema de las monedas perdidas y los contratos inteligentes no utilizados que consumen espacio en la cadena de bloques. El componente de alquiler de almacenamiento se incluye en el bloque de génesis para mantener el protocolo de minería en el futuro cuando las recompensas del bloque comiencen a disminuir. Al emplear este componente, las direcciones no utilizadas pagarán una tarifa de almacenamiento de alrededor de 0,13 ERG por caja UTXO cada cuatro años. Esta característica permite la reintegración de ERG en circulación mientras reduce la saturación de la red por bytes de datos no utilizados. A través de este proceso, los mineros podrán extraer tanto las tarifas de transacción como las tarifas de almacenamiento cuando las recompensas de bloque de la emisión caigan a cero.



<!--EndFragment-->