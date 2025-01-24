'use strict';

var index = require('./index.js');

var typescriptExports = index.requireTypescript();
var typescript = /*@__PURE__*/index.getDefaultExportFromCjs(typescriptExports);

var typescript$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	default: typescript
});

exports.typescript = typescript$1;
