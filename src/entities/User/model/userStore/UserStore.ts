import { defineStore } from 'pinia'
import { TypeUserStore } from '../userTypes/TypesUser'
import { USER_LOCALESTORAGE_KEY } from '@/shared/const/localeStorage'

export const useUserStore = defineStore({
  id: 'UserStore',
  state: (): TypeUserStore => {
    return {
      user: {
        id: 0,
        username: ''
      },
      isAuth: false
    }
  },
  getters: {},
  actions: {
    setUser (id: number, username: string) {
      this.user.id = id
      this.user.username = username
      this.isAuth = true
    },
    initUser () {
      const user = localStorage.getItem(USER_LOCALESTORAGE_KEY)
      if (user) {
        const obj = JSON.parse(user)
        this.user.id = obj.id
        this.user.username = obj.username
        this.isAuth = true
      }
    },
    removeUser () {
      this.user.id = 0
      this.user.username = ''
      this.isAuth = false
      localStorage.removeItem(USER_LOCALESTORAGE_KEY)
    }
  }
})
