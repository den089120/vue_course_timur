import { defineStore } from 'pinia'
import { ProfileUserReadSchema } from '@/entities/Profile/model/profileTypes/ProfileUserReadType'
import { axiosGet } from '@/shared/api/api'
import { UrlPaths } from '@/shared/const/urlPaths'
import { ProfileSchema } from '@/entities/Profile'

export const useProfileUserReadStore = defineStore({
  id: 'ProfileUserReadStore',
  state: (): ProfileUserReadSchema => {
    return {
      data: undefined,
      isLoading: false,
      error: '',
      id: ''
    }
  },
  getters: {},
  actions: {
    setIdUser (id: string | undefined) {
      if (id) this.id = id
    },
    async getUserProfileRead () {
      this.isLoading = true
      try {
        const res = await axiosGet<ProfileSchema>(UrlPaths.PROFILE, this.id)
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
