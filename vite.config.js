import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
      ],
    },
  },
  envPrefix: 'REACT_APP_', // default: VITE_
  define: {
    'process.env': {},
  },
  server: {
    port: 3000,
    open: true,
    host: true,
  },
  plugins: [react()],
  resolve: {
    // alias: {
    //   '@src': '/src',
    //   '@assets': '/src/assets',
    //   '@utils': '/src/utils',
    //   '@hooks': '/src/hooks',
    //   '@components': '/src/components',
    // },
    // alias: [
    //   { find: '@src', replacement: '/src' },
    //   { find: '@assets', replacement: '/src/assets' },
    //   { find: '@utils', replacement: '/src/utils' },
    //   { find: '@hooks', replacement: '/src/hooks' },
    //   { find: '@components', replacement: '/src/components' },
    // ],
  },
})
