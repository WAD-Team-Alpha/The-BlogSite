build-for-dev:
	docker build -t client-app -f Dockerfile.dev .

build-for-prod:
	docker build -t client-app-prod -f Dockerfile.prod .