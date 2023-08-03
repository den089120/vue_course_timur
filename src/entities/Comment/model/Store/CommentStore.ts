import { defineStore } from 'pinia'
import { CommentServer, CommentStoreSchema } from '@/entities/Comment/model/type/commentTypes'
import { apiAxios } from '@/shared/api/api'
import { ArticleStore, CommentStoreORM } from '@/store'

export const useCommentStore = defineStore({
  id: 'CommentStore',
  state: (): CommentStoreSchema => {
    return {
      isLoading: false,
      error: ''
    }
  },
  getters: {},
  actions: {
    async getComments (): Promise<void> {
      this.isLoading = true
      try {
        const res = await apiAxios.get<CommentServer[]>('/comments', {
          params: {
            articlesId: ArticleStore.articleId,
            _expand: 'user'
          }
        })
        if (res) {
          this.isLoading = false
          const data: CommentServer[] = res.data
          CommentStoreORM.save([...data])
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
