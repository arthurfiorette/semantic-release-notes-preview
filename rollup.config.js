import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
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
