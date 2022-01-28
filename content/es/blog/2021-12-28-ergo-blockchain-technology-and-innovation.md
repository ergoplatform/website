---
title: "Ergo y Blockchain: Tecnología e Innovación"
date: 2021-12-28T20:47:56.308Z
author: Ergo Platform (translated by Daniu, original version will always prevail)
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/tech-1-2-1-1-.png
tags:
  - Building Ergo
---
<!--StartFragment-->

La idea inicial detrás de Bitcoin se basó en la promesa de un comercio protegido de puntos centralizados de falla.

En este artículo, explicaremos la tecnología y la innovación en las tres capas de blockchain: capa 0, capa 1 y capa 2.

La capa 0 se refiere a la capa de red / referencia de la cadena de bloques, también llamada capa fuera de la cadena.

La capa 1 es la capa de contrato inteligente, así como la capa de transacciones en la cadena.

La capa 2 puede referirse a fuera de cadena, en cadena o una combinación de ambos.

## Capa 0 (Capa de red)

### Modelos PoW y PoS

Bitcoin reveló una solución al problema de los [Generales Bizantinos](https://criptomundo.com/el-problema-de-los-generales-bizantinos-una-introduccion/) introduciendo el mecanismo de prueba de trabajo. En este modelo, los nodos de minería pueden validar nuevas transacciones al lograr el consenso. El modelo PoW permite una red descentralizada tolerante a fallas y crea una nueva forma de dinero digital, conocida como criptomoneda.

*Ejemplos de PoW: Bitcoin, Ergo, Ethereum, Monero, Litecoin, Ravencoin, Digibyte, ZCash*

Otra solución al problema de Byzantine General fue mediante el uso de prueba de participación. En este modelo, los grupos de participación proporcionan el consenso para la aplicación de transacciones. También existen diferentes requisitos para operar un grupo de participación, como tener una cantidad mínima de tokens y requerir computadoras específicas.

PoW y PoS son dos soluciones conocidas para lograr consenso en una cadena de bloques pública. Sin embargo, estas dos soluciones no están exentas de fallas inherentes: PoW debe evitar la centralización del grupo de mineros y PoS debe evitar la centralización del titular (aquellos con tokens stakeados). Al evaluar su eficiencia energética, el diseño del protocolo PoS a menudo se considera una alternativa más ecológica, mientras que PoW depende de mayores cantidades de electricidad para mantener la red segura y operativa.

**Ergo eligió el modelo PoW por dos razones:**

* En primer lugar, garantizó la ejecución de un lanzamiento justo (acceso equitativo a todas las monedas a través de la minería).
* En segundo lugar, desde el comienzo de Bitcoin, se ha demostrado que PoW es una cadena de bloques segura y probada a lo largo del tiempo (véase: [Lindy Effect](https://en.wikipedia.org/wiki/Lindy_effect)El algoritmo de consenso de Ergo, Autolykos v2, es un modelo extraíble por GPU y es menos exigente con los equipos de minería con temperaturas más bajas.).

### UTXO y el modelo de Cuenta

Además de estos dos modelos de consenso, también hay dos modelos diferentes de disponibilidad de datos conocidos como modelos UTXO y Accounts. En el documento técnico de Bitcoin, no se menciona UTXO. En cambio, los investigadores luego llamaron a esto el modelo UTXO. El modelo de Cuentas (como se describe en el documento técnico de Ethereum) representa cuentas de larga duración que crecen constantemente en la cadena de bloques.

Cada uno de esos modelos aplica una lógica única y diferente. El modelo de Ethereum se basa en gran medida en los cálculos en cadena, lo que genera una congestión en la red. Bitcoin también tiene problemas similares con la congestión de la red y ambos modelos aplican diferentes soluciones para abordar estos problemas de escalabilidad. Una solución directa (y no deseada) al problema de escalabilidad es limitar la cantidad de nodos haciendo que el hardware de alta gama sea necesario para ejecutar un nodo, pero en consecuencia, esto puede llevar a la construcción de una cadena de bloques centralizada.

Después de Bitcoin, el modelo de cuentas de Ethereum ha introducido un diseño de cadena de bloques más flexible con capacidades de contrato inteligente. La plataforma de Ethereum ofrecía la capacidad de producir otros tokens además de ella y es por eso que fuimos testigos del boom de las ICO hace varios años. Las nuevas ideas como las aplicaciones NFT, DAO y DeFi nacieron de las comunidades Ethereum. La mayoría de las otras cadenas han aplicado el diseño de Ethereum con pequeños ajustes y es por eso que vemos muchas cadenas "nuevas" que se lanzan con compatibilidad con Ethereum Virtual Machine.


El modelo UTXO tiene más flexibilidad en su diseño fuera de la cadena al combinar cálculos dentro y fuera de la cadena para impulsar la escalabilidad de la cadena de bloques. De manera similar, el UTXO extendido (empleado por Ergo y Cardano) tiene datos más altos [composability](https://en.wikipedia.org/wiki/Composability) que el modelo de cuentas, lo que hace que las dApps sean más fáciles de escalar e implementar de manera eficiente en otras cadenas. El modelo UTXO tiene ciertas ventajas cuando se trata de escalabilidad y privacidad al aprovechar los cálculos fuera de la cadena y las direcciones UTXO de un solo uso.

*Ejemplos de modelos UTXO: Cardano, Ergo, Digibyte, Ravencoin, Bitcoin, Komodo, Avalanche (X Chain), Monero, ZCash*

Tanto los modelos de cuentas como los de UTXO pueden implementar diferentes soluciones para la eficiencia de la disponibilidad de datos (conocidas como soluciones de Capa 2), como canales de pago, cadenas laterales, canales de estado, fragmentación y/o zk-rollups.

## Capa 1 (Capa de aplicación)

### Aplicaciones distribuidas

Bitcoin carece de un lenguaje completo de Turing y no emplea contratos inteligentes complejos. En Ethereum, los contratos inteligentes existen principalmente en cadena y se ejecutan en la máquina virtual Ethereum. En Ergo, algunas partes de las dApps están fuera de la cadena y otras suceden en la cadena. Por lo tanto, la lógica fuera de cadena eUTXO de Ergo permite la ejecución de nodos dApp localmente en la computadora de un usuario e introduce nuevos diseños para aplicaciones distribuidas.

Hoy, un desarrollador de Ethereum necesita poseer un nodo completo que contenga todos los datos de la red. [Estado actual de Ethereum](https://etherscan.io/chartsync/chaindefault) supera los 340 GB y aumenta a un ritmo enorme. Los desarrolladores encuentran soluciones alquilando computadoras virtuales de firmas como AWS o Google Cloud. A cambio, vemos que solo unos pocos nodos albergan todas las llamadas aplicaciones descentralizadas. La lógica de las cuentas de Ethereum es más limitada en la distribución del almacenamiento de back-end porque todos los nodos deben conocer toda la cadena de bloques. Por lo tanto, el problema del almacenamiento conduce continuamente a una cadena de bloques más cara para las personas.

En Ergo, el diseño eUTXO presenta una forma única de superar los problemas de seguridad y escalabilidad en la capa de aplicación. Los usuarios de aplicaciones podrán poseer nodos ligeros para participar directamente en el gobierno de una aplicación. Al introducir nodos ligeros y clientes ligeros y crear clientes verdaderamente sin estado, los desarrolladores, mineros y usuarios pueden distribuir la red con [light-bootstrapping] (https://medium.com/@ergoplatformes/nipopows-592093035ac6) y aumentar la colaboración en la plataforma. Para obtener más información sobre la lógica fuera de la cadena y el diseño de eUTXO, consulte este [artículo] (https://ergoplatform.org/en/blog/2021-10-04-off-chain-logic-and-eutxo/).

### Privacidad opcional

Otro tema de debate sobre las criptomonedas es el anonimato financiero y la privacidad. Las direcciones de Bitcoin no están directamente vinculadas a identidades personales, por lo que la red proporciona a los usuarios un nivel de pseudoanonimato. Sin embargo, los usuarios deben confiar en los servicios centralizados de mezcladores de monedas para ocultar sus transacciones y mantener la privacidad.

Monero, uno de los ejemplos más populares de criptomonedas orientadas a la privacidad, proporciona una criptomoneda totalmente privada. Tanto las direcciones como las transacciones son privadas y nadie puede extraer detalles de la actividad en la cadena de bloques. Es una criptomoneda altamente privatizada, pero debido a que es completamente anónima, carece de la flexibilidad para lograr una adopción masiva.

La privacidad opcional ofrece flexibilidad entre dos extremos. Las personas y las organizaciones necesitan privacidad y transparencia en diversos grados. Ergo, ZCash y Dash son algunos de los proyectos con características de privacidad opcionales. La privacidad opcional hace que sea más posible implementar diferentes estructuras para organizaciones sin fines de lucro y con fines de lucro.

La privacidad opcional permite crear capas de transparencia con seguridad criptográfica y descentralizada. Esta opción permite construir una cadena de bloques pública con casos de uso comercial: los usuarios y las organizaciones deben poder elegir el nivel de privacidad que se adapte a sus necesidades. Por ejemplo, al utilizar ErgoMixers alojados localmente, los usuarios tienen opciones de privacidad además de otras Ergo dApps como ErgoDEX.

Con privacidad opcional, el grado de privacidad en la cadena de bloques se puede configurar y también componer con otras aplicaciones. La flexibilidad y la capacidad de composición de blockchain es un aspecto increíblemente importante para lograr una adopción masiva.

Además de las capas de red y aplicación, también está la Capa 2, que incluye componentes tanto fuera de la cadena como dentro de la cadena, como cadenas laterales, canales estatales, canales de pago o canales privados, fragmentación, etc. El siguiente artículo Ergo & Blockchain: Escalabilidad y adopción, profundizará en las redes de capa 2.
**Artículos previos**

[Ergo & Blockchain: Cryptocurrency Sphere ,INGLÉS](https://ergoplatform.org/en/blog/2021-10-26-ergo-blockchain-cryptocurrency-sphere/)

[Ergo & Blockchain: Tokenomics y Finanzas](https://ergoplatform.org/es/blog/2021-11-05-ergo-blockchain-tokenomics-and-finance/)

[Ergo & Blockchain: Privacidad y seguridad](https://ergoplatform.org/es/blog/2021-12-02-ergo-blockchain-privacy-and-security/)

<!--EndFragment-->