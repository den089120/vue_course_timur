import { createApp } from 'vue'
import App from '@/App/App.vue'
import { i18n } from '@/shared/lib/i18n'
import router from '@/router'
import { pinia } from '@/store/index'
import ClassNames from '@/shared/lib/plugins/ClassNames'
import '@/App/styles/index.scss'
import { VIntersection } from '@/shared/lib/directives/VIntersection'

createApp(App).use(router).use(pinia).use(i18n).use(ClassNames).directive('intersection', VIntersection).mount('#app')
