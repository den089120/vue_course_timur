import { defineStore } from 'pinia'
import { TypeLoginFormStore } from './TypeLoginForm'
// import axios from 'axios'
import { apiAxios } from '@/shared/api/api'
import { UserStore } from '@/store'
import { USER_LOCALESTORAGE_KEY } from '@/shared/const/localeStorage'

export const useLoginFormStore = defineStore({
  id: 'LoginFormStore',
  state: (): TypeLoginFormStore => {
    return {
      // userName: '',
      // password: '',
      isLoading: false,
      errorText: '',
      isLoginForm: false
    }
  },
  getters: {},
  actions: {
    // setLoginForm (name: string, password: string): void {
    //   this.userName = name
    //   this.password = password
    // },
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
        const response = await apiAxios.post('/login', {
          username: name,
          password: password
        })
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
      } catch (e) {
        this.isLoading = false
        this.errorText = 'You_entered_the_wrong_username_or_password'
      }
    }
  }
})
