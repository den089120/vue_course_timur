import { createApp } from 'vue'
import App from './App/App.vue'
import router from './router'
import { pinia } from '@/store'
import { i18n } from '@/shared/lib/i18n'
import './App/styles/index.scss'
import ClassNames from '@/shared/lib/plugins/ClassNames'
import directives from '@/shared/lib/directives'

const app = createApp(App)

directives.forEach(direct => {
  app.directive(direct.name, direct.directive)
})

app
  .use(router)
  .use(pinia)
  .use(i18n)
  .use(ClassNames)
  .mount('#app')
