import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    Components({
      // 指定组件位置，默认是src/components
      dirs: ['src/components'],
      // 配置文件生成位置
      dts: 'src/components.d.ts'
    }),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      // global imports to register
      imports: [
        {
          vue: ['computed', 'nextTick', 'onMounted', 'ref', 'watch', 'shallowRef', 'unref'],
          '@dcloudio/uni-app': ['onLaunch', 'onShow', 'onHide', 'onReady']
        }
      ],
      // Auto import for all module exports under directories
      dirs: ['src/stores', 'src/utils', 'src/composables'],
      // Filepath to generate corresponding .d.ts file.
      // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
      // Set `false` to disable.
      dts: 'src/auto-import.d.ts'
    })
  ],
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
