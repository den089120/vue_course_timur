import axios, { AxiosResponse } from 'axios'
import { USER_LOCALESTORAGE_KEY } from '@/shared/const/localeStorage'
import { UrlPaths } from '@/shared/const/urlPaths'

export const apiAxios = axios.create({
  baseURL: process.env.VUE_APP_NAME_BASE_URL, // 'http://localhost:8000',
  headers: {
    authorization: localStorage.getItem(USER_LOCALESTORAGE_KEY)
  }
})

export function axiosGet<T> (urlReq: UrlPaths, urlParams = '', queryParams: Record<string, string> = {}): Promise<AxiosResponse<T>> {
  const url = urlParams ? `${urlReq}/${urlParams}` : urlReq
  return apiAxios.get<T>(url, {
    params: {
      ...queryParams
    }
  })
}

export function axiosPost<T> (urlReq: UrlPaths, data: Record<string, string | undefined>, urlParams = '', queryParams: Record<string, string> = {}): Promise<AxiosResponse<T>> {
  const url = urlParams ? `${urlReq}/${urlParams}` : urlReq
  return apiAxios.post<T>(
    url,
    {
      ...data
    },
    {
      params: {
        ...queryParams
      }
    })
}

export function axiosPut<T> (urlReq: UrlPaths, data: Record<string, string | undefined>, urlParams = '', queryParams: Record<string, string> = {}): Promise<AxiosResponse<T>> {
  const url = urlParams ? `${urlReq}/${urlParams}` : urlReq
  return apiAxios.put<T>(
    url,
    {
      ...data
    },
    {
      params: {
        ...queryParams
      }
    }
  )
}

export function axiosDelete<T> (urlReq: UrlPaths, urlParams = '', queryParams: Record<string, string> = {}): Promise<AxiosResponse<T>> {
  const url = urlParams ? `${urlReq}/${urlParams}` : urlReq
  return apiAxios.delete<T>(
    url,
    {
      params: {
        ...queryParams
      }
    }
  )
}
