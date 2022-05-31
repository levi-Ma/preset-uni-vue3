import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        // 生产环境时移除console
        drop_console: true,
        drop_debugger: true
      }
    }
  }
  // server: {
  //   host: 'localhost',
  //   port: 8080,
  //   https: true,
  //   proxy: {
  //     '/api': {
  //       target: '', // 代理目标的域名
  //       changeOrigin: true,
  //       configure: (proxy, options) => {
  //         console.log(proxy);
  //         console.log(options);
  //       }
  //     },
  //   }
  // }
})
