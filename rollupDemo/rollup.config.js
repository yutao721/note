import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-typescript'
import typescript from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
  input: './src/main',
  output: {
    file: './dist/bundle.js',
    format: 'cjs',
    name: 'bundleName',
    sourcemap: true
  },
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    terser(),
    postcss(),
    livereload(),
    serve({
      open: true,
      contentBase: 'dist'
    })
  ],
  external: ['lodash']
}
