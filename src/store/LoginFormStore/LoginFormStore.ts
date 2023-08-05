import { defineStore } from 'pinia'
import { TypeLoginFormStore } from './TypeLoginForm'
import { axiosPost } from '@/shared/api/api'
import { ProfileStore, UserStore } from '@/store'
import { USER_LOCALESTORAGE_KEY } from '@/shared/const/localeStorage'
import { UrlPaths } from '@/shared/const/urlPaths'
import { TypeUser } from '@/entities/User'

export const useLoginFormStore = defineStore({
  id: 'LoginFormStore',
  state: (): TypeLoginFormStore => {
    return {
      isLoading: false,
      errorText: '',
      isLoginForm: false
    }
  },
  getters: {},
  actions: {
    openLoginForm () {
      this.isLoginForm = true
    },
    closeLoginForm () {
      this.isLoginForm = false
    },
    async loginByUser (name: string, password: string) {
      this.isLoading = true
      this.errorText = ''
      try {
        const response = await axiosPost<TypeUser>(UrlPaths.LOGIN, {
          username: name,
          password: password
        })
        // const response = await apiAxios.post('/login', {
        //   username: name,
        //   password: password
        // })
        if (!response.data) {
          this.isLoading = false
          this.errorText = 'You_are_not_registred'
        }
        this.isLoading = false
        const dat = response.data
        localStorage.setItem(USER_LOCALESTORAGE_KEY, JSON.stringify(dat))
        UserStore.setUser(dat.id, dat.username)
        this.errorText = ''
        this.closeLoginForm()
        window.location.reload()
        await ProfileStore.getProfile()
      } catch (e) {
        this.isLoading = false
        this.errorText = 'You_entered_the_wrong_username_or_password'
      }
    }
  }
})
