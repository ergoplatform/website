---
title: "Ergo Ecosystem: Scaling Solutions"
date: 2021-10-29T13:47:53.833Z
author: Ergo Foundation
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/ergoscale.jpg
tags:
  - Building Ergo
  - Roadmap
---
<!--StartFragment-->

L'aspetto del ridimensionamento nel design di Ergo Platform è stato un'alta priorità sin dal lancio della mainnet. Per ottenere un'adozione di massa, una blockchain dovrebbe essere in grado di scalare. La scalabilità si riferisce all'uso efficiente delle risorse computazionali e all'elevata velocità effettiva. Ergo incorpora vari elementi per ottenere una scalabilità quasi infinita. Il design è basato sul modello UTXO esteso con il suo nuovo linguaggio, ErgoScript, che si basa su ricerche accademiche sottoposte a revisione paritaria. Con anni di ricerca, Ergo ha sviluppato varie funzionalità come client stateless, NIPoPoW e contratti intelligenti basati su UTXO.



Inizialmente, il livello 0 è il livello di riferimento in cui sono collegati i nodi. Questo è il livello dell'infrastruttura peer-to-peer. Il client Ergo Node è migliorato molto dalla v4.0.8 e ha ancora 20 volte più spazio per lo sviluppo. [Light bootstrapping](https://ergoplatform.org/en/blog/2021-07-19-mining-in-logarithmic-space-nipopow-power-and-ergo/) utilizzando NIPoPoWs è prevista anche l'integrazione tramite un Forchetta morbida in velluto.



Sul Layer 1, il livello applicativo, Ergo supporta soluzioni di scalabilità on-chain come lo Sharding. A parte lo Sharding, il modello UTXO esteso consente di eseguire la maggior parte delle transazioni off-chain e riduce il carico di rete on-chain.



Alla fine, ci sono soluzioni di ridimensionamento di livello 2 che si riferiscono a soluzioni di ridimensionamento di livello fuori catena. Esistono più soluzioni off-chain come [Hydra](https://iohk.io/en/research/library/papers/hydrafast-isomorphic-state-channels/) e sidechain per comprimere la blockchain e fornire vantaggi simili come zk -rollup. Ergo può anche essere compatibile con altre soluzioni UTXO Layer 2 come Lightning Network di Bitcoin.



I client stateless consentono sia ai portafogli leggeri che ai minatori leggeri di funzionare con la sicurezza completa del nodo. L'implementazione di NIPoPoW tramite le forcelle morbide Velvet consentirà sidechain infinite su Ergo. 



Ergo utilizza "[Storage Rent Fee](https://ergoplatform.org/en/blog/2021-07-09-cryptocurrency-fees-a-solution-to-unreasonable-state-growth/)" per prevenire lo spam e il ricircolo byte di dati inutilizzati, noti come polvere. Storage Rent Fee aiuta a pulire l'inquinamento della rete e incoraggia gli utenti a essere più attivi.



Ergo Platform ha un approccio basato sulla ricerca per il successo a lungo termine e ha molto nella cassetta degli attrezzi per affrontare i problemi di ridimensionamento che arriveranno in futuro. 



<!--EndFragment-->