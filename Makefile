.DEFAULT_GOAL := serve

serve: 
	npx quartz build --serve

build: 
	rm -rf public
	npx quartz build

sync: #syncs to https://github.com/sspaeti/graceful-kitchen
	npx quartz sync

deploy: sync


help: ## Show all Makefile targets
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

