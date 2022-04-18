---
title: Minerando Ergo no Windows
date: 2022-03-17T16:42:03.324Z
author: Plataforma Ergo
authorPhoto: /img/uploads/1762.png
blogPhoto: /img/uploads/news-blog-47.png
tags:
  - Construindo Ergo
---
Minerar Ergo como parte de uma *pool* de mineração é fácil, particularmente no Windows. É possível começar a minerar Ergo em um computador com uma GPU (placa de vídeo) em menos de 5 minutos.

# O que significa Minerar uma Criptomoeda?

Mineração é o motor que dirige a blockchain Ergo. Ergo usa o algoritmo [Autolykos](https://ergoplatform.org/docs/ErgoPow.pdf) v.2 para criar uma loteria de quebra-cabeças, e computadores com GPUs são usados para resolver esses quebra-cabeças. Na média, um minerador ou *pool* de mineração vence a loteria de quebra-cabeças a cada dois minutos. Então, os mineradores vencedores agregam um bloco de transações para submeter à blockchain em troca de uma recompensa.

## Equipamento

Você precisará do seguinte para minerar Ergo:

* uma GPU com no mínimo **4GB de memória RAM** (idealmente mais, se dentro do seu orçamento)
* [*software* de mineração](https://ergoplatform.org/pt/mining/) compatível com sua placa, e.g. [T-Rex](https://trex-miner.com/) (Nvidia) ou [RedTeamMiner](https://www.teamredminer.com/) (AMD)
* [uma carteira Ergo](https://ergoplatform.org/pt/wallets/) (e.g. [Nautilus](https://ergoplatform.org/en/blog/2022-03-10-storing-crypto-on-ergo-nautilus-wallet/))

## Custos de Mineração

Inicialmente, há os custos de comprar um computador com uma placa gráfica ou equipamento de mineração. Se você quiser pesquisar e comparar vários modelos de GPUs, há sites que podem lhe dizer quais placas de vídeo são [melhores para mineração de Ergo.](https://woolypooly.com/en/coin/erg) Você pode também determinar quanto tempo demorará para conseguir um retorno no seu investimento ao acessar [calculadoras de lucros](https://www.whattomine.com/coins/340-erg-autolykos) que levam em consideração o custo de eletricidade para a sua área.

Tanto o *software* de mineração quanto as *pools* de mineração cobram uma taxa pelo uso do *software* de mineração (tipicamente entre 1 e 2% da sua *hashrate*) e por se juntar a uma *pool* (1%). Ao escolher uma *pool*, é melhor para a segurança da blockchain Ergo se você minerar em uma pool menor, com menos *hashrate* que a maior *pool*. Por exemplo, existe uma vulnerabilidade conhecida, onde uma *pool* de mineração consegue 51% (ou mais) da *hashrate* da rede, o que pode comprometer a segurança da blockchain. Espalhar a *hashrate* entre *pools* menores reduz as chances esse cenário.

## Configurando

Suponha que você quer minerar em um computador com uma GPU apropriada para Ergo, com Microsoft Windows, e deseja se juntar à pool de mineração [GetBlok.io](https://ergo.getblok.io/).  

Faça o download do [*software* de mineração](https://ergoplatform.org/pt/mining/) compatível com sua placa, e.g. [T-Rex](https://trex-miner.com/) (Nvidia) ou [RedTeamMiner](https://www.teamredminer.com/) (AMD). Extraia o arquivo do *software* de mineração em seu diretório "Download". Abra um editor de texto e digite (ou copie & cole) o seguinte:

`setx GPU_FORCE_64BIT_PTR 0`

`setx GPU_MAX_HEAP_SIZE 100`

`setx GPU_USE_SYNC_OBJECTS 1`

`setx GPU_MAX_ALLOC_PERCENT 100`

`setx GPU_SINGLE_ALLOC_PERCENT 100`

`C:\Usuários\seu_usuário\caminho\para\arquivo\de\mineração\t-rex.exe -a autolykos2 -o stratum+ssl://ergo.getblok.io:4056 -u <SeuEndereçoErgo>.<QualquerNomeQueVocêQueiraIdentificarSeuComputador>`

Para esclarecer, a última parte deve parecer com o seguinte, se o nome do seu usuário no Windows é "ninguém", se seu endereço de Ergo é *9g1p6UU8XoAeU4yGPLpbTHYiG8aBHwfCFzQqJZrfzuLnmF3zb7P* e se o nome da sua máquina é *bubba*:

`C:\Usuários\ninguém\Downloads\t-rex-0.25.8-win\t-rex.exe -a autolykos2 -o stratum+ssl://ergo.getblok.io:4056 -u 9g1p6UU8XoAeU4yGPLpbTHYiG8aBHwfCFzQqJZrfzuLnmF3zb7P.bubba`

Você pode encontrar seu endereço Ergo na aba "Receber" na sua carteira Ergo. Você pode, então, ir à página ["como se conectar"](https://www.getblok.io/how-to-connect/) no website da [GetBlok.io](https://www.getblok.io/), colocar as informações relevantes que essa página pede e ela irá fornecer a informação acima para você. Outras *pools* de mineração possuem um formato similar, apenas essa seção que muda para o protocolo, *pool* e porta relevante:

`stratum+ssl://ergo.getblok.io:4056`

Após terminar, salve o arquivo como **ERGO_mining.bat**. Para começar a minerar, simplesmente clique no arquivo.

**Nota:** Se você tem um programa anti-vírus, e.g. McAfee, você precisará restaurar o arquivo *t-rex.exe* após a extração e excluí-lo do Escaneamento em Tempo-Real para executá-lo. 

Se você quiser que o software de mineração comece junto com a inicialização do seu computador, então salve ERGO_mining.bat em `C:\Usuários\NomeDeUsuário\AppData\Roaming\Microsoft\Windows\Menu Iniciar\Programas\Startup`. Se você tiver problemas para encontrar a pasta Startup, você sempre pode salvar ERGO_mining.bat em algum lugar, apertar as teclas Windows **key + R** para abrir um *shell prompt*, e então digitar:

`shell:startup`

Isso irá lhe mostrar a pasta Startup, e você pode arrastar e soltar o arquivo Ergo_mining.bat para dentro dela.

E é isso! Você agora está pronto para minerar Ergo no seu computador. Se você tiver equipamento de mineração com múltiplas GPUs ou um computador com somente uma, você pode facilmente acessar o protocolo de mineração de Ergo e desfrutar de renda passiva proveniente de recompensas de mineração, enquanto ajudando a segurar a rede. Se você tiver perguntas específicas sobre equipamentos ou queira acessar alguns dos recursos da comunidade de mineração, por favor visite o canal no [Telegram sobre Mineração de Ergo](https://t.me/ergo_mining).