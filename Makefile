install:
	npm ci

gendiff:
	node bin/index.js

install-deps: 
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npm run test

test-coverage:
	npm test -- --coverage --coverageProvider=v8