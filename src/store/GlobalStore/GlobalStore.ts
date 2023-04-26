import { defineStore } from 'pinia'
import { TypeGlobalState } from './TypeGlobalState'

export const useGlobalStore = defineStore({
  id: 'globalStore',
  state: (): TypeGlobalState => {
    return {
      isDark: false
    }
  },
  getters: {},
  actions: {
    changeTheme (): void {
      this.isDark = !this.isDark
    }
  }
})
