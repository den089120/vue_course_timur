import { defineStore } from 'pinia'
import { TypeGlobalState } from './TypeGlobalState'

export const useGlobalStore = defineStore({
  id: 'globalStore',
  state: (): TypeGlobalState => {
    return {
      isDark: false,
      isCollapsed: false
    }
  },
  getters: {},
  actions: {
    changeTheme (): void {
      this.isDark = !this.isDark
      this.setThemeLocal()
    },
    changeSideView () {
      this.isCollapsed = !this.isCollapsed
      this.setCollapseLocal()
    },
    setThemeLocal () {
      localStorage.setItem(process.env.VUE_APP_NAME_THEME, JSON.stringify(this.isDark))
    },
    getThemeLocal () {
      const bool = localStorage.getItem(process.env.VUE_APP_NAME_THEME)
      if (bool) this.isDark = JSON.parse(bool)
    },
    setCollapseLocal () {
      localStorage.setItem(process.env.VUE_APP_NAME_COLLAPSE, JSON.stringify(this.isDark))
    },
    getCollapseLocal () {
      const bool = localStorage.getItem(process.env.VUE_APP_NAME_COLLAPSE)
      if (bool) this.isDark = JSON.parse(bool)
    }
  }
})
