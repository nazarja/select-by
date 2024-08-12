import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.ts', // Your entry file
  output: [
    {
      file: 'dist/select-by.js', // Output file
      format: 'umd', // UMD format
      name: 'by', // Global variable name
    },
    {
      file: 'dist/select-by.esm.js', // Output file
      format: 'es', // ES module format
    },
  ],
  plugins: [typescript(), commonjs(), resolve()],
};