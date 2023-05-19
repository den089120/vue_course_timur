import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AboutPage from '@/pages/AboutPage/AboutPage.vue'
import MainPage from '@/pages/MainPage/MainPage.vue'
import NotFoundPage from '@/pages/notFoundPage/NotFoundPage.vue'
import { RoutesPath } from '@/router/RoutesPath'
import ProfilePage from '@/pages/ProfilePage/ProfilePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: RoutesPath.Main,
    name: 'MainPage',
    component: MainPage
  },
  {
    path: RoutesPath.About,
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: RoutesPath.Profile,
    name: 'ProfilePage',
    component: ProfilePage
  },
  {
    path: RoutesPath.NotFound,
    name: 'NotFoundPage',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
