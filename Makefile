install:
	npm install
	
start-brain-even:
	npm run babel-node -- ./src/bin/brain-even.js

start-brain-calc:
	npm run babel-node -- ./src/bin/brain-calc.js

start-brain-gcd:
	npm run babel-node -- ./src/bin/brain-gcd.js

start-brain-balance:
	npm run babel-node -- ./src/bin/brain-balance.js

start-brain-progression:
	npm run babel-node -- ./src/bin/brain-progression.js

start-brain-prime:
	npm run babel-node -- ./src/bin/brain-prime.js

build:
	rm -rf dist
	npm run build

test:
	npm test

publish:
	npm publish

lint:
	npm run eslint

.PHONY: test
