import { App } from 'vue'

export type Mods = Record<string, boolean | string>

export default {
  install: (app: App<Element>) => {
    app.config.globalProperties.$ClassNames = (cls?: string, mods: Mods = {}, additional: Array<string> = []) => {
      const str: Array<string> = Object.entries(mods).filter(([, value]) => Boolean(value)).map(([key]) => key)
      return [cls, ...str, ...additional].join(' ')
    }
  }
}
