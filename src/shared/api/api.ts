import axios from 'axios'
import { USER_LOCALESTORAGE_KEY } from '@/shared/const/localeStorage'

export const apiAxios = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    authorization: localStorage.getItem(USER_LOCALESTORAGE_KEY)
  }
})
