build-hugo:
	hugo -D

build-assets:
	yarn run build

build-site:
	make build-assets && make build-hugo
