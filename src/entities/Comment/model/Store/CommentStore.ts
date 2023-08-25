import { defineStore } from 'pinia'
import {
  CommentServer,
  CommentStoreSchema,
  schemaComment,
  Comment,
  commentUserServer
} from '@/entities/Comment/model/type/commentTypes'
import { axiosGet, axiosPost } from '@/shared/api/api'
import { ArticleStore, CommentStoreORM } from '@/store'
import { UrlPaths } from '@/shared/const/urlPaths'

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
        const res = await axiosGet<CommentServer[]>(UrlPaths.COMMENTS, '', {
          articlesId: ArticleStore.articleId,
          _expand: 'user'
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
    },
    async sendNewComment (data: schemaComment): Promise<void> {
      this.isLoading = true
      try {
        const res = await axiosPost<Comment>(UrlPaths.COMMENTS, { ...data })
        if (res) {
          this.isLoading = false
          const id = res.data.userId
          try {
            const res2 = await axiosGet<commentUserServer>(UrlPaths.USER, id)
            const data = { ...res.data, user: res2.data }
            CommentStoreORM.save(data)
          } catch (e) {
            console.log(e)
          }
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
