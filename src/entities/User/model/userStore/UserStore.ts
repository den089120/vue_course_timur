import { defineStore } from 'pinia'
import { TypeUserStore } from '../userTypes/TypesUser'

export const useUserStore = defineStore({
  id: 'UserStore',
  state: (): TypeUserStore => {
    return {
      user: {
        id: '',
        username: ''
      }
    }
  },
  getters: {},
  actions: {}
})
