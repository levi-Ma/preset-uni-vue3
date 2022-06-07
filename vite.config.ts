import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import defineName from 'vite-plugin-vue-definename'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    defineName(),
    Components({
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      // 指定组件位置，默认是src/components
      dirs: ['src/components', 'src/uni_modules/vk-uview-ui'],
      // 配置文件生成位置
      dts: 'src/types/components.d.ts'
    }),
    AutoImport({
      eslintrc: {
        enabled: true
      },
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      // global imports to register
      imports: [
        'vue',
        {
          '@dcloudio/uni-app': [
            'onLaunch',
            'onInit',
            'onLoad',
            'onShow',
            'onReady',
            'onHide',
            'onUnload',
            'onResize',
            'onPullDownRefresh',
            'onReachBottom',
            'onTabItemTap',
            'onShareAppMessage',
            'onPageScroll',
            'onNavigationBarButtonTap',
            'onBackPress',
            'onShareTimeline',
            'onAddToFavorites'
          ]
        }
      ],
      // Identifiers to be ignored
      ignore: ['createApp'],
      // Auto import for all module exports under directories
      dirs: ['src/stores', 'src/utils', 'src/composables'],
      // Filepath to generate corresponding .d.ts file.
      // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
      // Set `false` to disable.
      dts: 'src/types/auto-import.d.ts'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
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
