---
title: Ergo Bootstrap, Streamlining Ergo dApp Infrastructure With One Simple Tool
date: 2020-12-11T09:00:28.435Z
author: Robert Kornacki
authorPhoto: /img/uploads/robert_kornacki.jpg
blogPhoto: /img/uploads/danielle-macinnes-iulgi9pwetu-unsplash.jpg
tags:
  - Building Ergo
---
*The Ergo ecosystem is quickly growing with new design patterns, tools, dApps, and more every single month. This is an exciting point in time for developers to jump in and get started.*

That said, while building dApps on top of Ergo, vital infrastructure components to develop and run your dApp might be intimidating to set up for someone who is unfamiliar with the existing tooling. Between an Ergo full node, explorer back end, explorer front end, logging, and metrics, it can become quite overwhelming for a nascent dApp developer entering into the ecosystem.

For this reason, we are introducing [ergo-bootstrap](https://github.com/ergoplatform/ergo-bootstrap), an easy-to-use tool that enables quick and clean Ergo blockchain cluster deployments which supports a variety of useful infrastructure components you will need on your path of dApp development. This was developed by [Marek of Five Binaries](https://www.fivebinaries.com/) thanks to a grant given by the Ergo Foundation and their latest push to empower the ecosystem via funding key projects.

Ergo-bootstrap currently supports:

* Ergo node, a full blockchain node, the reference client implementation.
* Explorer API, provides a set of HTTP API methods for querying chain/off-chain data.
* UTX watcher, dumps unconfirmed transactions from mempool to local database.
* UTX broadcaster, broadcasts unconfirmed transactions to Ergo nodes.
* Chain grabber, scans blockchain and dumps aggregated data to database.
* Yoroi backend, a wrapper for the Ergo explorer API providing light wallets endpoints.
* Ergo node panel, built-in
* Ergo explorer, a browser for viewing activity on the underlying blockchain network.

### Built With Reproducibility In Mind

The Ergo Bootstrap tool is based on the [Ergo Nix](https://github.com/ergoplatform/ergo-nix) project, which leverages the power of the Nix language to create declarative reproducible builds. This makes ergo-bootstrap have a higher degree of reliability and longevity, which is a vital goal for the Ergo ecosystem as a whole.

Additionally, we are using Docker images for the infrastructure to be deployed on top to make it easy to debug and reproduce any problems you may encounter, thereby improving the dApp developer experience.

### Preparing Your Development Environment In Under A Minute

To get started using ergo-bootstrap simply:

1. Clone [the project git repository](https://github.com/ergoplatform/ergo-bootstrap)
2. Use `./ergo-bootstrap init` to begin the initialization process for your cluster.
3. Follow the interface instructions for choosing what infrastructure components you wish to deploy.
4. You have finished preparing your deployment in under a minute. The tool will do the rest for you and automatically set everything up for you.

![](https://raw.githubusercontent.com/ergoplatform/ergo-bootstrap/master/.github/ergo-bootstrap-init.svg?token=AAAZSW42HAT4BEOMQFVUHCC72C5HU)

### Conclusion

Developers of all stripes, from wallet devs to dApp developers, now have access to a brand new tool that will both make their lives easier, while also allowing the ecosystem to become more decentralized. Because key components such as the Ergo Node and the Explorer Backend are so easy to deploy now, more and more instances will be available for use by end-users. This will thereby decrease the overreliance on any one individual deployment and thus aid the ecosystem in growing more and more robust moving forward.