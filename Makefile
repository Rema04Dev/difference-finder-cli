install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

gendiff:
	gendiff __tests__/__fixtures__/file1.json __tests__/__fixtures__/file2.json
