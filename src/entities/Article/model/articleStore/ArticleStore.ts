import { defineStore } from 'pinia'
import { Article, ArticleView } from '@/entities/Article'
import { ArticleDetailsSchema } from '../articleTypes/articleDetailsSchema'
import { axiosGet } from '@/shared/api/api'
import { UrlPaths } from '@/shared/const/urlPaths'
import { GlobalStore } from '@/store'
import { AxiosResponse } from 'axios'
import { addQueryParams } from '@/shared/lib/url'

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
      allPages: null,
      scrollNumber: 0,
      ascOrDesc: 'asc',
      sortOption: 'createdAt',
      searchString: '',
      sortType: 'All'
    }
  },
  getters: {},
  actions: {
    setScrollNumber (num: number | undefined): void {
      if (num) this.scrollNumber = num
    },
    setId (id: string): void {
      this.articleId = id
    },
    setAscOrDesc (sort: string) {
      this.ascOrDesc = sort
    },
    setSortOption (order: string) {
      this.sortOption = order
    },
    setSearchString (search: string) {
      this.searchString = search
    },
    setSortType (type: string) {
      this.sortType = type
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
    async getArticles (): Promise<AxiosResponse<Article[]> | undefined> {
      if (GlobalStore.isListArticles === ArticleView.SMALL) this.limit = '9'
      else this.limit = '4'
      this.isLoading = true
      try {
        addQueryParams({
          sort: this.ascOrDesc,
          order: this.sortOption,
          search: this.searchString,
          type: this.sortType
        })
        const res = await axiosGet<Article[]>(UrlPaths.ARTICLES, '', {
          _expand: 'user',
          _limit: this.limit,
          _page: this.page,
          _sort: this.ascOrDesc,
          _order: this.sortOption,
          q: this.searchString,
          type: this.sortType === 'All' ? undefined : this.sortType
        })
        if (res) {
          this.isLoading = false
          const count: string = res.headers['x-total-count']
          this.allPages = Math.ceil(parseInt(count) / parseInt(this.limit))
        } else {
          this.isLoading = false
          this.error = ''
        }
        return res
      } catch (e) {
        this.isLoading = false
        this.error = ''
        return undefined
      }
    },
    async getArticlesForSearch (): Promise<void> {
      this.page = '1'
      const res = await this.getArticles()
      if (res) this.listArticles = res.data
    },
    async getListArticle (): Promise<void> {
      if (this.allPages) {
        if (this.allPages < parseInt(this.page) || this.allPages === 0) {
          return
        }
      }
      const res = await this.getArticles()
      if (res) {
        if (this.listArticles) this.listArticles = [...this.listArticles, ...res.data]
        else this.listArticles = res.data
      }
    }
  }
})
