import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AboutPage from '@/pages/AboutPage/AboutPage.vue'
import MainPage from '@/pages/MainPage/MainPage.vue'
import NotFoundPage from '@/pages/notFoundPage/NotFoundPage.vue'
import { RoutesPath } from '@/router/RoutesPath'
import ProfilePage from '@/pages/ProfilePage/ProfilePage.vue'
import { USER_LOCALESTORAGE_KEY } from '@/shared/const/localeStorage'
import { ProfileStore, ArticleStore, CommentStore, ProfileUserReadStore, GlobalStore } from '@/store'
import ArticlesPage from '@/pages/ArticlesPage/ArticlesPage.vue'
import ArticleDetailsPage from '@/pages/ArticleDetailsPage/ArticleDetailsPage.vue'
import { asyncProfileUserReadPage } from '@/shared/lib/asyncComponents'

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
    beforeEnter: async (to) => {
      const isAuthenticated = localStorage.getItem(USER_LOCALESTORAGE_KEY)
      if (!isAuthenticated) return { path: RoutesPath.Main }
      await ProfileStore.getProfile()
    }
  },
  {
    path: RoutesPath.ProfileCommentUser,
    name: 'asyncProfileUserReadPage',
    component: asyncProfileUserReadPage,
    beforeEnter: async (to) => {
      const isAuthenticated = localStorage.getItem(USER_LOCALESTORAGE_KEY)
      if (!isAuthenticated) return { path: RoutesPath.Main }
      await ProfileUserReadStore.getUserProfileRead()
    }
  },
  {
    path: RoutesPath.Articles,
    name: 'ArticlesPage',
    component: ArticlesPage,
    beforeEnter: async (to) => {
      const isAuthenticated = localStorage.getItem(USER_LOCALESTORAGE_KEY)
      if (!isAuthenticated) return { path: RoutesPath.Main }
      const obj = to.query
      if (obj.sort) ArticleStore.setAscOrDesc(obj.sort.toString())
      if (obj.order) ArticleStore.setSortOption(obj.order.toString())
      if (obj.search) ArticleStore.setSearchString(obj.search.toString())
      if (obj.type) ArticleStore.setSortType(obj.type.toString())
    }
  },
  {
    path: RoutesPath.Articles_details,
    name: 'ArticleDetailsPage',
    component: ArticleDetailsPage,
    beforeEnter: async (to) => {
      const isAuthenticated = localStorage.getItem(USER_LOCALESTORAGE_KEY)
      if (!isAuthenticated) return { path: RoutesPath.Main }
      await ArticleStore.getArticleDetails()
      await CommentStore.getComments()
    }
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
