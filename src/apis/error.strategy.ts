import { AjaxResponse } from 'uni-ajax'
import { redirectTo } from '../utils'
const loggerError = (errMsg: string, callback?: () => void) => {
  uni.showToast({ title: errMsg, icon: 'none', mask: true })
  setTimeout(() => callback?.(), 1500)
}
export const ERROR_STRATEGY = {
  /** 该请求参数不正确 */
  400: (err: AjaxResponse) => loggerError(err.data?.msg ?? '请求错误'),
  /** 该请求需要用户登录 */
  401: (err: AjaxResponse) => {
    loggerError('登录已过期, 请重新登录!', () => {
      redirectTo('/module-auth/pages/login')
    })
  },
  /** 该请求未得到授权 */
  403: (err: AjaxResponse) => loggerError('权限不足!'),
  /** 该请求地址不存在 */
  404: (err: AjaxResponse) => loggerError('请求地址不存在!'),
  /** 不允许的方法 */
  405: (err: AjaxResponse) => loggerError('不允许的方法!'),
  /** 服务器内部异常 */
  500: (err: AjaxResponse) => loggerError('服务器内部异常, 请联系技术人员!'),
  /** 服务器授权异常 */
  501: (err: AjaxResponse) => loggerError('解析手机号错误, 请点击再次授权')
}

export type STRATEGY_KEYS = keyof typeof ERROR_STRATEGY
