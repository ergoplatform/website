# ergo-website

Need latest version nodejs and yarn.

Need Hugo [0.55.4](https://github.com/gohugoio/hugo/releases) or later

## Setup

```sh
$ yarn install
```

## Build assets js

```sh
$ make build-assets
```

## Up hugo server on localhost:1313

```sh
$ hugo server -D
```

## Watch assets js

```sh
$ yarn run watch
```

## Deploy build

```sh
$ make site
```
