import { defineStore } from 'pinia'
import { ProfileSchema, ProfileType } from '../profileTypes/ProfileType'
import { apiAxios } from '@/shared/api/api'

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
        const res = await apiAxios.get('/profile')
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
        const res = await apiAxios.put('/profile', data)
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
