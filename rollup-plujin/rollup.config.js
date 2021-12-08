import myExample from './plugins/myExample';

export default {
  input: './src/index.js',
  output: {
    file: './dist/bundle.js',
    format: 'cjs',
    name: 'bundleName',
    sourcemap: true
  },
  // plugins: [myExample()],
}
