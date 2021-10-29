import Request from './request'
import localCache from '@/utils/cache'
import { BASE_URL, TIME_OUT } from './request/config'

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = token
      }

      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptors: (res) => {
      return res
    },
    responseInterceptorsCatch: (err) => {
      return err
    }
  }
})

export default request
