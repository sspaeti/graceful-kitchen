.DEFAULT_GOAL := serve

serve: 
	npx quartz build --serve

build: 
	rm -rf public
	npx quartz build

upload: # upload to server 
	rsync -avz --delete public/ sspaeti@sspaeti.com:~/www/graceful

deploy: build upload


help: ## Show all Makefile targets
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

