import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/Portfolio/',
  base: '/Portfolio/', 
  publicDir: 'public',
})
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'

// export default defineConfig({
//   plugins: [react()],
//   base: '/Portfolio/', 
//   publicDir: 'public',
//   build: {
//     assetsDir: 'assets',
//     rollupOptions: {
//       output: {
//         assetFileNames: (assetInfo) => {
//           if (assetInfo.name.endsWith('.jpg') || assetInfo.names.endsWith('.png'))
//           {return 'images/[name][ext]';}
//           return 'assets/[name] - [hash][ext]';
//         },
//       },
//     },
//   },
//   optimizeDeps: {
//     esbuildOptions: {
//       define: {
//         global: 'globalThis',
//       },
//       plugins: [
//         NodeGlobalsPolyfillPlugin({
//           process: true,
//           buffer: true,
//         }),
//       ],
//     },
//   },
//   resolve: {
//     alias: {
//       crypto: 'crypto-browserify',
//     },
//   },
// })