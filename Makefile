install:
	npm ci
	
lint:
	npx eslint --fix .
	
test:
	npm test

test-coverage:
	npx jest --coverage --coverageProvider=v8
