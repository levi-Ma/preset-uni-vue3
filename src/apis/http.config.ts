import ajax from 'uni-ajax'
import httpConfig from '../common/http.config'
import { ERROR_STRATEGY, STRATEGY_KEYS } from './error.strategy'

// 创建请求实例
const instance = ajax.create({
  baseURL: httpConfig.baseURL,
  header: {}
})

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 判断是否有 Token 有的话请求头加入 Token。
    const token: string = uni.getStorageSync('TOKEN')
    token && (config.header['Authorization'] = token)
    return config
  },
  (error) => {
    return error
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做些什么
    if (response.statusCode === 200) {
      return response.data
    }
    // return response
  },
  (error) => {
    if (typeof error.config.custom?.errorhandle === 'undefined' || error.config.custom?.errorhandle)
      ERROR_STRATEGY[(error.statusCode ?? 1000) as STRATEGY_KEYS](error)
    // 对响应错误做些什么
    return Promise.reject(error)
  }
)

// 导出 create 创建后的实例
export default instance
