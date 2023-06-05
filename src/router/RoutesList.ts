import { RouteRecordRaw } from 'vue-router'
import { RoutesPath } from './RoutesPath'
import MainPage from '@/pages/MainPage/MainPage.vue'
import AboutPage from '@/pages/AboutPage/AboutPage.vue'
import ProfilePage from '@/pages/ProfilePage/ProfilePage.vue'
import NotFoundPage from '@/pages/notFoundPage/NotFoundPage.vue'
import { USER_LOCALESTORAGE_KEY } from '@/shared/const/localeStorage'

const isAuthenticated = localStorage.getItem(USER_LOCALESTORAGE_KEY)

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
    component: ProfilePage,
    meta: { requiresAuth: true }
  },
  {
    path: RoutesPath.NotFound,
    name: 'NotFoundPage',
    component: NotFoundPage
  }
]

export const RoutesList = isAuthenticated ? routes : routes.filter(el => !el.meta?.requiresAuth)
