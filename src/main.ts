import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import uView from '@/uni_modules/vk-uview-ui/index.js'
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)
  app.use(createPinia())
  app.use(uView)
  return {
    app
  }
}
