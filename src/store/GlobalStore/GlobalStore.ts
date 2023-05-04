import { defineStore } from 'pinia'
import { TypeGlobalState } from './TypeGlobalState'
import { i18n } from '@/shared/lib/i18n'

export const useGlobalStore = defineStore({
  id: 'globalStore',
  state: (): TypeGlobalState => {
    return {
      isDark: false,
      isCollapsed: false,
      langApp: 'ru'
    }
  },
  getters: {},
  actions: {
    changeLang (lang: string) {
      this.langApp = lang
      i18n.setLocale(this.langApp)
    },
    changeTheme (): void {
      this.isDark = !this.isDark
      this.setThemeLocal()
    },
    changeSideView () {
      this.isCollapsed = !this.isCollapsed
      this.setCollapseLocal()
    },
    setThemeLocal () {
      const str = process.env.VUE_APP_NAME_THEME
      if (str) localStorage.setItem(str, JSON.stringify(this.isDark))
    },
    getThemeLocal () {
      const str = process.env.VUE_APP_NAME_THEME
      if (str) {
        const bool = localStorage.getItem(str)
        if (bool) this.isDark = JSON.parse(bool)
        if (bool === 'false') this.isDark = JSON.parse(bool)
      }
    },
    setCollapseLocal () {
      const str = process.env.VUE_APP_NAME_COLLAPSE
      if (str) localStorage.setItem(str, JSON.stringify(this.isCollapsed))
    },
    getCollapseLocal () {
      const str = process.env.VUE_APP_NAME_COLLAPSE
      if (str) {
        const bool = localStorage.getItem(str)
        if (bool) this.isDark = JSON.parse(bool)
        if (bool === 'false') this.isDark = JSON.parse(bool)
      }
    }
  }
})
