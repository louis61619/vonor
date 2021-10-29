import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 攔截器的接口
interface RequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptors?: (config: T) => T
  responseInterceptorsCatch?: (error: any) => any
}

interface MyRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>
  showLoading?: boolean
}

export { RequestInterceptors, MyRequestConfig }
