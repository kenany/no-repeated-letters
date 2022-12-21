const pkg = require('./package.json');

const external = Object.keys(pkg.dependencies);

module.exports = {
  input: 'index.js',
  plugins: [],
  external,
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ]
};
