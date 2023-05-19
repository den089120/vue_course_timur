import { defineStore } from 'pinia'
import { ProfileType } from '../profileTypes/ProfileType'

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
  actions: {}
})
