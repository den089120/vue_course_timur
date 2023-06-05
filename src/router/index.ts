import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AboutPage from '@/pages/AboutPage/AboutPage.vue'
import MainPage from '@/pages/MainPage/MainPage.vue'
import NotFoundPage from '@/pages/notFoundPage/NotFoundPage.vue'
import { RoutesPath } from '@/router/RoutesPath'
import ProfilePage from '@/pages/ProfilePage/ProfilePage.vue'
import { USER_LOCALESTORAGE_KEY } from '@/shared/const/localeStorage'
// import { RoutesList } from '@/router/RoutesList'

// const arr = (): Array<RouteRecordRaw> => {
//   const isAuthenticated = localStorage.getItem(USER_LOCALESTORAGE_KEY)
//   if (isAuthenticated) {
//     return [
//       {
//         path: RoutesPath.Main,
//         name: 'MainPage',
//         component: MainPage
//       },
//       {
//         path: RoutesPath.About,
//         name: 'AboutPage',
//         component: AboutPage
//       },
//       {
//         path: RoutesPath.Profile,
//         name: 'ProfilePage',
//         component: ProfilePage,
//         meta: { requiresAuth: true }
//       },
//       {
//         path: RoutesPath.NotFound,
//         name: 'NotFoundPage',
//         component: NotFoundPage
//       }
//     ]
//   } else {
//     return [
//       {
//         path: RoutesPath.Main,
//         name: 'MainPage',
//         component: MainPage
//       },
//       {
//         path: RoutesPath.About,
//         name: 'AboutPage',
//         component: AboutPage
//       },
//       {
//         path: RoutesPath.NotFound,
//         name: 'NotFoundPage',
//         component: NotFoundPage
//       }
//     ]
//   }
// }

// const routes: Array<RouteRecordRaw> = RoutesList

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
    beforeEnter: to => {
      const isAuthenticated = localStorage.getItem(USER_LOCALESTORAGE_KEY)
      if (!isAuthenticated) return { path: RoutesPath.NotFound }
    }
    // meta: { requiresAuth: true }
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

// router.beforeEach(async (to, from) => {
//   const isAuthenticated = localStorage.getItem(USER_LOCALESTORAGE_KEY)
//   if (to.meta.requiresAuth && !isAuthenticated) {
//     return { path: RoutesPath.NotFound }
//   } else {
//     return to.path
//   }
// })

// const isAuthenticated = localStorage.getItem(USER_LOCALESTORAGE_KEY)
// if (isAuthenticated) router.addRoute({ path: RoutesPath.Profile, name: 'ProfilePage', component: ProfilePage, meta: { requiresAuth: true } })
// else router.removeRoute('ProfilePage')

export default router
