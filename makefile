b:
	npm run build
	rm -rf docs
	cp -r build docs
	cp .env docs/.env
