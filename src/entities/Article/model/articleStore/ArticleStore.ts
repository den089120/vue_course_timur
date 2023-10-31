import { defineStore } from 'pinia'
import { Article, ArticleView } from '@/entities/Article'
import { ArticleDetailsSchema } from '../articleTypes/articleDetailsSchema'
import { axiosGet } from '@/shared/api/api'
import { UrlPaths } from '@/shared/const/urlPaths'
import { GlobalStore } from '@/store'

export const useArticleStore = defineStore({
  id: 'ArticleStore',
  state: (): ArticleDetailsSchema => {
    return {
      isLoading: false,
      error: '',
      data: undefined,
      articleId: '',
      listArticles: undefined,
      page: '1',
      limit: '4',
      allPages: null
    }
  },
  getters: {},
  actions: {
    setId (id: string): void {
      this.articleId = id
    },
    setLoading (bool: boolean): void {
      this.isLoading = bool
    },
    addPage () {
      this.page = `${parseInt(this.page) + 1}`
    },
    async getArticleDetails (): Promise<void> {
      this.isLoading = true
      try {
        const res = await axiosGet<Article>(UrlPaths.ARTICLES, this.articleId)
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
    async getArticles (): Promise<void> {
      if (GlobalStore.isListArticles === ArticleView.SMALL) this.limit = '9'
      else this.limit = '4'
      if (this.allPages) {
        if (this.allPages < parseInt(this.page) || this.allPages === 0) {
          return
        }
      }
      this.isLoading = true
      try {
        const res = await axiosGet<Article[]>(UrlPaths.ARTICLES, '', { _expand: 'user', _limit: this.limit, _page: this.page })
        if (res) {
          this.isLoading = false
          const count: string = res.headers['x-total-count']
          this.allPages = Math.ceil(parseInt(count) / parseInt(this.limit))
          if (this.listArticles) this.listArticles = [...this.listArticles, ...res.data]
          else this.listArticles = res.data
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
