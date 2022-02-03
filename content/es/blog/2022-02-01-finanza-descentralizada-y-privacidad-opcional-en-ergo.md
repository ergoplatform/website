---
title: Finanza descentralizada y privacidad opcional en Ergo
date: 2022-02-01T23:12:19.231Z
author: Ergo Platform (translated by Daniu, original version will always prevail)
authorPhoto: /img/uploads/spanish_logo.jpg
blogPhoto: /img/uploads/01_ergoblog_cover_02012022-1-.png
tags:
  - Building Ergo
---
<!--StartFragment-->

## Privacidad financial y blockchains públicas

Bitcoin es una red de contabilidad distribuida pública a la que pueden acceder todos los que quieran verificar el estado de la cadena de bloques. Hay herramientas como [Bitcoin explorer](https://bitcoinexplorer.org/) que son interfaces para verificar datos y transacciones en cadena. La transparencia de una criptomoneda es de suma importancia porque Bitcoin se inventa para evitar cualquier manipulación por parte de terceros. También es importante que las personas protejan su privacidad financiera en las plataformas digitales. Por ello, Ergo desarrolló los Protocolos Sigma: pruebas criptográficas que soportan [herramientas de privacidad opcional](https://eprint.iacr.org/2020/560.pdf) sin comprometer la seguridad

Satoshi Nakamoto nos mostró un enfoque genial para las tecnologías de cadena de bloques al presentar un consenso de prueba de trabajo para resolver el problema del general bizantino. El diseño de Bitcoin elimina el fraude al permitir que todos validen la red. La tecnología criptográfica ha seguido desarrollándose desde el bloque de génesis de Bitcoin con el reciente [Bitcoin Taproot Update](https://ergoplatform.org/en/blog/2021-11-17-bitcoin-taproot-upgrade-and-ergos-sigma-protocols/). Esta actualización integró Schnorr Proofs para crear propiedades de privacidad para billeteras de múltiples firmas, lo que permite que varias personas firmen una transacción sin revelar toda la información del contrato.

Además de los protocolos Sigma, Ergo promueve el diseño UTXO de Bitcoin con la implementación de contratos de etapas múltiples. El modelo de Bitcoin difiere del modelo de cuentas de larga duración de Ethereum porque el saldo de una dirección es la suma de varias cajas UTXO. [El modelo eUTXO de Ergo](https://dav009.medium.com/learning-ergo-101-blockchain-paradigm-eutxo-c90b0274cf5ehttps://docs.ergoplatform.com/dev/protocol/eutxo/) permite la creación de nuevas direcciones de recepción ilimitadas a partir de la misma clave inicial. Los usuarios pueden crear fácilmente funciones de privacidad opcionales desde cada billetera Ergo, ya sea móvil, extensión del navegador o nodo completo. Sin embargo, Ergo no es estrictamente una cadena de bloques de privacidad, porque también tiene el control de compartir información de solo lectura con una clave pública. La anatomía del modelo eUTXO está más allá del alcance de este artículo, pero por ahora nos centraremos en las características de privacidad opcionales habilitadas por los Protocolos Sigma.

## Protocolos Sigma: el enfoque de Ergo para las pruebas de conocimiento cero

[Los protocolos sigma](https://medium.com/@ergoplatformes/protocolos-sigma-b1038144b35e) son un subconjunto de las pruebas de Schnorr generalizadas, las pruebas matemáticas que ayudan a verificar la información necesaria para ejecutar una transacción. La tecnología criptográfica hace que los servidores validen las transacciones sin acceder a todos los datos de los usuarios. Los fundadores incluyeron Sigma Protocols en el bloque génesis con la idea de que Ergo será la plataforma contractual del futuro. Las cadenas de bloques tienen el potencial de convertirse en una herramienta de vigilancia masiva por parte de las empresas de publicidad y los actores maliciosos, pero con la implementación de pruebas de conocimiento cero, las funciones de privacidad opcionales son posibles.

Por ejemplo, las monedas digitales de bancos centrales (CBDC) son versiones privadas de libros de contabilidad distribuidos. En estas redes, los usuarios pueden verificar y ocultar transacciones hasta cierto punto. Sin embargo, los gobiernos y/u otras instituciones confiables en la red podrán usar herramientas de vigilancia masiva, censurar nuestras transacciones o potencialmente usar nuestros fondos depositados en formas que no podemos controlar. En Bitcoin, la identidad no está directamente vinculada a una dirección y, por lo tanto, existe cierto grado de privacidad en la cadena. Los CBDC, por otro lado, están abiertos a una explotación potencial porque cada acción se procesa en servidores centralizados propiedad de gobiernos o bancos.

Analicemos las preocupaciones sobre el lavado de dinero y las transacciones en el mercado negro de criptomonedas. Aunque solo sobre [un 1% de las transacciones de bitcoin son ilícitas](https://cryptoforinnovation.org/resources/Analysis_of_Bitcoin_in_Illicit_Finance.pdf), las criptomonedas se sigue diciendo que son para el lavado de dinero. El [lavado de dinero](https://corporatefinanceinstitute.com/resources/knowledge/finance/money-laundering/) consta de tres fases: colocación, estratificación e integración. Las criptomonedas facilitan la fase de estratificación al abrir transacciones transfronterizas para todos, pero el dinero negro tiene que entrar y salir por canales no identificables. La verificación de las fuentes de ingresos y las instalaciones de producción son puntos donde los gobiernos pueden interceptar fácilmente esta actividad ilegal, ya que el mercado negro aún opera con monedas fiduciarias.

Las pruebas de conocimiento cero no son herramientas para el lavado de dinero, son herramientas para construir sistemas verificables. Actualmente, cualquier economía con múltiples partes involucradas necesita confiar en fuentes de datos centrales para la seguridad de sus fondos. No podemos saber cuántas transacciones están ocurriendo o cuántos fondos se transfieren si no somos los gobernadores. Aquí, los Protocolos Sigma pueden ser útiles para crear tales economías, estableciendo una confianza mínima con el poder de los contratos inteligentes.

## Ejemplo de privacidad opcional: LETS sin necesidad de confianza

LETS es un acrónimo de [Local Exchange Trading System](https://ergoplatform.org/en/blog/2021-07-01-lets-start-the-discussion/) - un tipo de economía de crédito mutuo. Al considerar economías pequeñas, LETS puede ser especialmente útil en tiempos de crisis. Este sistema también puede verse como un sistema basado en cupones que las personas podrán usar dentro de su comunidad comercial particular a cambio de servicios y bienes. Tradicionalmente, los registros de cupones se mantienen en una base de datos de comités, por lo que son vulnerables a errores humanos.

La cadena de bloques de Ergo proporciona una infraestructura para construir un LETS sin confianza utilizando los protocolos Sigma. En una cadena de bloques sin privacidad, todo será transparente, pero una empresa podría verse perjudicada si sus datos estuvieran expuestos al público. En una cadena de bloques basada en la privacidad, no podemos verificar cómo las entidades (gobierno, caridad, bancos, etc.) están usando el dinero. Los protocolos Sigma de Ergo permiten que los modelos de privacidad se adapten a cualquier medio económico asegurando los fondos en la base de datos de la cadena de bloques.

Si los Sigma Protocols nos dan poder sobre qué información queremos revelar, ¿cómo podemos usarlo? Veamos las necesidades de unos pocos actores en una comunidad económica simple:

**Municipios:** Necesita un alto nivel de transparencia con respecto a cómo se asignan los impuestos

**Organizaciones benéficas**: necesita un alto nivel de transparencia para mostrar correctamente los gastos mientras mantiene la opción de ofuscar a los donantes

**Empresas:** Necesita transparencia para el control fiscal pero alta privacidad para datos confidenciales

**Individuos:** Necesita transparencia para el control fiscal pero alta privacidad para datos confidenciales

¿Qué son los datos confidenciales? Puede ser cualquier cosa, desde cuándo, dónde y/o cómo completó una transacción. Con el tiempo, la acumulación de estos datos forma un perfil que puede ser explotado por entidades centralizadas. Por ejemplo:

* a que hora compraste chocolate
* el momento en que realizó la compra de su activo.
* tu localización y hábitos de finanzas

Esta información se almacena en los servidores de su banco/proveedor de tarjeta de crédito bajo un acuerdo legal de privacidad. En una cadena de bloques pública, las pruebas se almacenan en los nodos con criptografía, por lo que tenemos la opción de crear transacciones de conocimiento cero. En nuestra vida cotidiana, las personas actualmente no pueden controlar las opciones de privacidad. Con Ergo, las necesidades de privacidad de cada entidad pueden respetarse y mantenerse a través de una red financiera descentralizada sólida y funcional.

<!--EndFragment-->