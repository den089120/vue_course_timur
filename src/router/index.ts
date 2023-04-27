import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AboutPage from '@/pages/AboutPage/AboutPage.vue'
import MainPage from '@/pages/MainPage/MainPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
