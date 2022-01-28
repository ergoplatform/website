---
title: Alquiler por almacenamiento y el futuro de la minería
date: 2022-01-27T17:23:36.033Z
author: Ergo Platform (translated by Daniu, original version will always prevail)
authorPhoto: /img/uploads/symbol_bold__1080px__black.png
blogPhoto: /img/uploads/09_ergoblog_cover_01262022-1-.png
tags:
  - Building Ergo
---
<!--StartFragment-->

**Terminología**
- Storage Rent: Alquiler por almacenamiento (se entenderá más adelante)

**Introducción**

Los mineros son la capa de consenso de las blockchain PoW y la seguridad de todos los contratos inteligentes depende de que establezcan un consenso para mantener la red. A cambio de este servicio, reciben recompensas mineras: la suma total de las recompensas del bloque base y las tarifas de transacción. En el caso de Ergo, estas recompensas se pagan en ERG, la moneda de la red. A medida que la red es utilizada por más y más personas, se puede esperar que se pierda una cierta cantidad de monedas debido a direcciones antiguas y/o inactivas. ¿Qué pasa con estas monedas perdidas? ¿Se pueden recuperar y recircular de alguna manera en el futuro? La implementación del Storage Rent de Ergo aborda esta preocupación y está diseñada para revitalizar el estancamiento en el suministro de monedas, creando una sostenibilidad adicional para futuras recompensas mineras.



Investigaciones demuestran que [cerca del 20% de todo el supply de Bitcoin](https://www.cryptimi.com/news/new-research-shows-21-of-bitcoin-unmoved-for-5-years) no se ha movido en 5 años. Ya sea que estas monedas se usen o no en una fecha posterior, los mineros deben conservar esos datos (que esas direcciones tienen x cantidad de Bitcoin) sin recibir ninguna compensación por ese servicio!. Los mineros son compensados ​​​​con recompensas en bloque y cualquier otra tarifa de transacción que ocurra en blockchain. Sin embargo, una vez que se complete el cronograma de emisión de Bitcoin, las recompensas del bloque base terminarán y las ganancias de la minería dependerán únicamente de las tarifas de transacción. Si por alguna razón la frecuencia de las transacciones cae repentinamente en la red, las tarifas de los mineros se verán profundamente afectadas y esto puede causar desequilibrios en el poder de hash de la red. Imagina un minero que no pueda recibir recompensas porque nadie mueve sus Bitcoin!



## Aquí entra en juego el Storage Rent de Ergo



Su objetivo es tratar dos problemas



1. Monedas perdidas y el aumento del "polvo"
2. Cambios en la cantidad de recompensas mineras (mira las recompensas diarias del bloque ETH)

![](https://lh6.googleusercontent.com/x7uiN72e95m0WTo-6Fz1Tfitae26BsIsjhFt2PUUWnpclTJFsVo-_tU9N3jUVSGZe3COP-G29rf-p7gMsFcWIkisCCiFwxR3iiOEbIh12ZBNTb6OAhpLgk2ShqHANTPCXQVjLT4r)

[Gráficas Y](https://ycharts.com/indicators/ethereum_block_rewards_per_day)



Los mineros son la capa de seguridad para la cadena de bloques de prueba de trabajo y es de suma importancia proporcionar incentivos económicos para que los mineros mantengan y sostengan la red. Las tarifas de almacenamiento están diseñadas para agregar una capa de previsibilidad para futuras recompensas en bloque. Así es como funciona el Storage Rent


Se cobra una tarifa de aproximadamente 0,14 ERG por cada caja UTXO que NO se gasta en un período de cuatro años. La red Ergo aún es joven, ya que se lanzó hace solo dos años y medio. Como resultado, el protocolo Storage Rent aún no se ha iniciado. La solución Storage Rent se desarrolló a partir de una investigación realizada por Ergo Platform en 2019: [A Systematic Approach To Cryptocurrency Fees](https://fc18.ifca.ai/bitcoin/papers/bitcoin18-final18.pdf). 

## Direcciones inactivas y escasez digital


A medida que la cadena de bloques envejece, las monedas potencialmente perdidas podrían crear una tendencia deflacionaria para el suministro circulante restante. Este problema es de gran preocupación para la sostenibilidad y viabilidad a largo plazo de la cadena de bloques. Los activos deflacionarios desincentivan los hábitos de gasto porque las monedas se vuelven cada vez más escasas. Se podría argumentar que esto podría ser rentable debido a la ecuación de "la escasez aumenta el valor", sin embargo, en el futuro, las recompensas en bloque tienen el potencial de ser más impredecibles cuando se basan únicamente en las tarifas de transacción.



Ergo es una plataforma de contratos inteligentes PoW y todas las interacciones requieren ERG para ejecutarse. Los mineros son la capa de seguridad de la cadena de bloques, por lo que un incentivo de liquidez asegurará su participación activa. Los participantes inactivos también deberán pagar tarifas por almacenar sus monedas. Toda la infraestructura de la cadena de bloques depende de los mineros para proteger los datos. A medida que crezcan las cadenas de bloques, habrá más direcciones de billetera inactivas (como lo ha demostrado la historia con Bitcoin). Storage Rent tiene como objetivo proporcionar incentivos más sostenibles para los mineros al volver a poner estas monedas en circulación.



Además, si una dirección con diferentes activos no tiene suficientes monedas ERG para pagar el alquiler de almacenamiento (una dirección con otros tokens nativos y/o NFT), estos activos pueden volver a minarse y ponerse en circulación. Eso significa que los mineros pueden apoderarse de los NFT y otros tokens en Ergo como recompensa en bloque. Existe la posibilidad de una especie de [guerra de almacenamiento](https://curiaregiscrypto.medium.com/the-value-of-storage-rent-mining-on-ergo-b9e22d788d2) entre los pools de minería para obtener el control de estos activos en el futuro, pero los usuarios estarán protegidos con funciones de consolidación de UTXO que se agregarán a las billeteras necesarias para pagar el alquiler de almacenamiento.



Ergo tiene un suministro limitado de 97 millones de monedas. Este suministro limitado ya crea escasez de monedas ERG. Si una parte del suministro se pierde o se almacena permanentemente en direcciones no utilizadas, el protocolo Storage Rent de la red recuperará lentamente estas monedas, a intervalos regulares si estos activos continúan sin usarse durante un período de tiempo significativo. El alquiler de almacenamiento es una solución innovadora y novedosa que tiene como objetivo aumentar la interacción del titular al tiempo que logra un equilibrio entre la escasez digital y los incentivos a largo plazo.
 

Si desea explorar más a fondo el protocolo Storage Rent de Ergo después de esta introducción, le recomendamos el siguiente artículo en inglés: [The Value of Storage Rent: Mining on Ergo](https://curiaregiscrypto.medium.com/the-value-of-storage-rent-mining-on-ergo-b9e22d788d2). 


<!--EndFragment-->