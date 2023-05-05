import { createApp } from 'vue'
import App from './App/App.vue'
import router from './router'
import { pinia } from '@/store'
import { i18n } from '@/shared/lib/i18n'
import './App/styles/index.scss'
import ClassNames from '@/shared/lib/plugins/ClassNames'

createApp(App).use(router).use(pinia).use(i18n).use(ClassNames).mount('#app')
