import buble from '@rollup/plugin-buble';

const pkg = require('./package.json');

const external = Object.keys(pkg.dependencies);

export default {
  input: 'index.js',
  plugins: [
    buble({
      target: { node: '8.10' }
    })
  ],
  external: external,
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg['jsnext:main'],
      format: 'es'
    }
  ]
};
