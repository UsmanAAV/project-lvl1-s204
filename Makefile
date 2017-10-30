install:
	npm install
start:
	npm run babel-node -- src/bin/brain-games.js
prepublish:
	npm run build
publish:
	npm publish
