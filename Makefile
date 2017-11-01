install:
	npm install
start-brain-games:
	npm run babel-node -- ./src/bin/brain-games.js
start-brain-even:
	npm run babel-node -- ./src/bin/brain-even.js
build:
	rm -rf dist
	npm run build
publish:
	npm publish
lint:
	npm run eslint
