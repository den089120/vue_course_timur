import { defineStore } from 'pinia'
import { ProfileSchema, ProfileType } from '../profileTypes/ProfileType'
import { axiosGet, axiosPut } from '@/shared/api/api'
import { UrlPaths } from '@/shared/const/urlPaths'
import { UserStore } from '@/store'

export const useProfileStore = defineStore({
  id: 'ProfileStore',
  state: (): ProfileType => {
    return {
      data: undefined,
      isLoading: false,
      error: '',
      readonly: true
    }
  },
  getters: {},
  actions: {
    removeReadonly () {
      this.readonly = false
    },
    addReadonly () {
      this.readonly = true
    },
    async getProfile (): Promise<void> {
      this.isLoading = true
      try {
        const res = await axiosGet<ProfileSchema>(UrlPaths.PROFILE, UserStore.user.id)
        if (res) {
          this.isLoading = false
          this.data = res.data
        } else {
          this.isLoading = false
          this.error = ''
        }
      } catch (e) {
        this.isLoading = false
        this.error = ''
      }
    },
    async updateProfile (data: ProfileSchema): Promise<void> {
      this.isLoading = true
      try {
        const res = await axiosPut<ProfileSchema>(UrlPaths.PROFILE, { ...data }, UserStore.user.id)
        if (res) {
          this.isLoading = false
          this.data = res.data
        } else {
          this.isLoading = false
          this.error = ''
        }
      } catch (e) {
        this.isLoading = false
        this.error = ''
      }
    }
  }
})
