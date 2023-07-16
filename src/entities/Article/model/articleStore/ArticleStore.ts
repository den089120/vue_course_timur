import { defineStore } from 'pinia'
import { Article } from '../articleTypes/article'
import { ArticleDetailsSchema } from '../articleTypes/articleDetailsSchema'
import { apiAxios } from '@/shared/api/api'

export const useArticleStore = defineStore({
  id: 'ArticleStore',
  state: (): ArticleDetailsSchema => {
    return {
      isLoading: false,
      error: '',
      data: undefined,
      articleId: ''
    }
  },
  getters: {},
  actions: {
    setId (id: string): void {
      this.articleId = id
    },
    async getArticleDetails (): Promise<void> {
      this.isLoading = true
      try {
        const res = await apiAxios.get<Article>(`/articles/${this.articleId}`)
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
