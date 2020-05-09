build-hugo:
	hugo -D --minify

build-assets:
	yarn run build

site:
	 make build-assets && make build-hugo

server:
	hugo -D server --noHTTPCache

deploy:
	bash ./tools/update.sh && bash ./tools/deploy.sh
