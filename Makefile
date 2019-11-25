install:
	npm install

start:
	npx babel-node src/

publish:
	npm publish --dry-run

lint:
	npx eslint .