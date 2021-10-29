import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { RequestInterceptors, MyRequestConfig } from './type'
import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'

const DEFAULT_SHOW_LOADING = true

class Request {
  instance: AxiosInstance
  interceptors?: RequestInterceptors
  showLoading?: boolean
  defaultShowLoading?: boolean
  loading?: ILoadingInstance

  constructor(config: MyRequestConfig) {
    // 這個傳入的參數中必須包含攔截器的資料 所以定義了MyRequestIntercaptors這個街口
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    this.showLoading = config.showLoading ?? DEFAULT_SHOW_LOADING
    // 這是第一次初始化實例時保存的showloading參數 因為之後如果在外部修改要改回來
    this.defaultShowLoading = config.showLoading ?? DEFAULT_SHOW_LOADING

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor, // 請求成功攔截函數
      this.interceptors?.requestInterceptorCatch // 請求失敗攔截函數
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    )

    // 添加所有實例都有的攔截器 優先執行
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('全局請求攔截')

        // console.log('是否加入loading', this.showLoading)
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '加載中'
          })
        }

        return config
      },
      (err) => {
        return err
      }
    )

    // 響應攔截 後執行
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('全局響應攔截')
        setTimeout(() => {
          this.loading?.close()
        }, 1000)
        return res.data
      },
      (err) => {
        this.loading?.close()
        return err
      }
    )
  }

  // 透過傳入泛型來定義 then之後回傳res的類型
  request<T>(config: MyRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        // 判斷如果有攔截器參數 調用內部的攔截器函數
        config = config.interceptors.requestInterceptor(config)
      }

      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res)
          }

          this.showLoading = this.defaultShowLoading

          resolve(res)
        })
        .catch((err) => {
          this.showLoading = this.defaultShowLoading
          reject(err)
          return err
        })
    })
  }

  get<T>(config: MyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: MyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: MyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: MyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default Request
