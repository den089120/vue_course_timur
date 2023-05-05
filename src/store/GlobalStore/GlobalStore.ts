import { defineStore } from 'pinia'
import { TypeGlobalState } from './TypeGlobalState'
import { i18n } from '@/shared/lib/i18n'

export const useGlobalStore = defineStore({
  id: 'globalStore',
  state: (): TypeGlobalState => {
    return {
      isDark: false,
      isCollapsed: false,
      langApp: 'ru',
      isModal: false
    }
  },
  getters: {},
  actions: {
    closeModal (): void {
      this.isModal = false
    },
    openModal ():void {
      this.isModal = true
    },
    changeLang (lang: string): void {
      this.langApp = lang
      i18n.setLocale(this.langApp)
    },
    changeTheme (): void {
      this.isDark = !this.isDark
      this.setThemeLocal()
    },
    changeSideView (): void {
      this.isCollapsed = !this.isCollapsed
      this.setCollapseLocal()
    },
    setThemeLocal (): void {
      const str = process.env.VUE_APP_NAME_THEME
      if (str) localStorage.setItem(str, JSON.stringify(this.isDark))
    },
    getThemeLocal (): void {
      const str = process.env.VUE_APP_NAME_THEME
      if (str) {
        const bool = localStorage.getItem(str)
        if (bool) this.isDark = JSON.parse(bool)
        if (bool === 'false') this.isDark = JSON.parse(bool)
      }
    },
    setCollapseLocal (): void {
      const str = process.env.VUE_APP_NAME_COLLAPSE
      if (str) localStorage.setItem(str, JSON.stringify(this.isCollapsed))
    },
    getCollapseLocal (): void {
      const str = process.env.VUE_APP_NAME_COLLAPSE
      if (str) {
        const bool = localStorage.getItem(str)
        if (bool) this.isDark = JSON.parse(bool)
        if (bool === 'false') this.isDark = JSON.parse(bool)
      }
    }
  }
})
