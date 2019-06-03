build-hugo:
	hugo -D

build-assets:
	yarn run build

site:
	rm -rf public/ && make build-assets && make build-hugo

server:
	hugo -D server --noHTTPCache
