import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import { createPlugin as VitePluginAlias } from 'vite-plugin-alias';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
  // ,
  // VitePluginAlias({
  //   '@': path.resolve(dirname(import.meta.url), './src')
  // }),
})

// function dirname(url) {
//   return path.dirname(new URL(url).pathname);
// }
