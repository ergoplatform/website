---
title: Método híbrido de calcular costes de Ergo
date: 2022-02-09T15:10:56.295Z
author: Ergo Platform (Translated by Darkkknight, original version will always prevail)
authorPhoto: /img/uploads/spanish_logo.jpg
blogPhoto: /img/uploads/04_ergoblog_cover_09022022-2-1-1-.png
tags:
  - Building Ergo
  - Roadmap
---
<!--StartFragment-->

## Introducción

Verificar la validez de los contratos inteligentes en una blockchain de Prueba de trabajo (PoW) tiene costos, tanto en tiempo como en recursos. Si estos costos no se controlan, puede hacer a una red lenta o incluso   ataques de denegación de servicio que impiden que la red se utilice en absoluto. Por lo tanto, el control de costos es fundamental para que una blockchain que funcione.



Por lo general, hay dos formas de controlar los costos en una blockchain PoW:



1. **Cálculo de costos anticipados (Cálculo de costos AOT)** - estima los costos antes de la ejecución del script para que no se ejecute un script demasiado costoso.
2. **Just-In-Time Costing (JIT Costing)** - calcula los costos durante la ejecución real de un script

Cada uno de estos métodos tiene ventajas y desventajas. La próxima actualización v.5.0 de los nodos de Ergo utiliza un enfoque híbrido para mejorar el control de costos.

## Ventajas y desventajas del costo AOT

Actualmente, Ergo utiliza el costeo AOT. El trabajo se realiza en la blockchain Ergo en bloques. Cada bloque toma alrededor de 2 minutos y incluye todas las transacciones durante ese período de tiempo. A los bloques se les asigna un presupuesto y no pueden exceder ese presupuesto.

Cuando un minero crea un bloque, el costo del bloque se estima con anticipación. Si el costo está por debajo del presupuesto del bloque y la matemática/lógica se suma, el bloque se envía a la blockchain.

Sin embargo, las estimaciones también tienen un costo. El cálculo de costos de AOT tiene sentido cuando esos costos son menores que la ejecución real del script. Es menos costoso estimar cuando se usan lenguajes de contratos inteligentes simples.

El uso del costeo AOT tiene una ventaja principal. Los límites son impuestos por la red en bloques en lugar de por transacción. Dado que los costos de estimación son bajos, los mineros absorben los costos de transacción de las transacciones que se rechazan. Cada transacción aceptada requiere que se agregue una tarifa simple al bloque.

Es importante tener en cuenta que el costeo AOT no está exento de desventajas. Las estimaciones no son costos reales y, a menudo, son ineficientes, lo que desperdicia recursos de la red, reduce la capacidad de cada bloque y, por extensión, la capacidad de escalar de la blockchain. Esto es particularmente cierto en casos como Ergo, donde blockchain admite el uso de colecciones de entradas y salidas, variables de extensión de contexto definidas por el usuario y otras características sofisticadas. Además, el costeo de AOT no aprovecha las eficiencias de los lenguajes de contratos inteligentes de próxima generación que son menos costosos de ejecutar que de estimar.

Existen otras desventajas en el costeo AOT, pero lo anterior establece la necesidad de un mejor modelo de control de costos que el costeo AOT solo.

## Nuevo método híbrido de Ergo para contar costos

El próximo lanzamiento de Ergo node v.5.0 utilizará un algoritmo de cálculo de costos híbrido para contener los costos y proteger la red de la denegación de servicio, el spam y otros ataques a los recursos de la red. Con este nuevo enfoque, hay dos etapas en el algoritmo de costeo.

En la primera etapa, las entradas de transacciones pasan por un verificador (una entrada tras otra) y el script de cada entrada se reduce a una propuesta sigma, una especie de condición de gasto que se puede verificar criptográficamente. El costeo JIT se aplica durante esta etapa de reducción.

Cuando cada entrada en la transacción tiene una propuesta sigma, entonces se usa el costo AOT (que es muy simple y rápido) para calcular los costos de todas las operaciones criptográficas en la transacción. Luego, todos los costos se suman para determinar el costo final de la transacción en sí. Una vez que se obtiene el costo final de la transacción, se agrega al costo del bloque, que debe estar dentro del presupuesto del bloque antes de que se le pueda agregar.

El mismo proceso se repite para cada transacción en el bloque (en secuencia) y se acumula el costo total del bloque. Antes de que pueda enviarse a la blockchain, cada bloque debe estar por debajo del costo permitido por bloque.

Con la implementación de este nuevo método de cálculo de costos de dos partes, los costos se pueden establecer de manera más eficiente y precisa con menos gastos que utilizando solo el cálculo de costos AOT. Como resultado, el lanzamiento de Ergo node v.5.0 debería aumentar efectivamente la cantidad de transacciones por bloque, mejorar las estimaciones de costos y mejorar el rendimiento de la blockchain de Ergo.


<!--EndFragment-->