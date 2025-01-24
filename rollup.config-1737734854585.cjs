'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var commonjs = require('@rollup/plugin-commonjs');
var json = require('@rollup/plugin-json');
var resolve = require('@rollup/plugin-node-resolve');
var typescript = require('@rollup/plugin-typescript');

var rollup_config = {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
    preferConst: true
  },
  plugins: [
    typescript(),
    resolve({ preferBuiltins: true }),
    commonjs({ ignoreDynamicRequires: true }),
    json({ compact: true,preferConst: true})
  ]
};

exports.default = rollup_config;
