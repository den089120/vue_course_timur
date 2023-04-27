import { createApp } from 'vue'
import App from './App/App.vue'
import router from './router'
import { pinia } from '@/store'
import './App/styles/index.scss'

createApp(App).use(router).use(pinia).mount('#app')
