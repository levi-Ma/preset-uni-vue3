import { paramsAnaly } from './calculation'

// 微信路由跳转封装
export const navigateTo = (url: string, params: WillObject = {}) => {
  uni.navigateTo({ url: paramsAnaly(url, params) })
}
export const reLaunch = (url: string, params: WillObject = {}) => {
  uni.reLaunch({ url: paramsAnaly(url, params) })
}
export const switchTab = (url: string, params: WillObject = {}) => {
  uni.switchTab({ url: paramsAnaly(url, params) })
}
export const redirectTo = (url: string, params: WillObject = {}) => {
  uni.redirectTo({ url: paramsAnaly(url, params) })
}
export const navigateBack = (delta = 1) => {
  uni.navigateBack({ delta })
}
export const $uni = (uni as any) as UniApp.Uni

export const lookMap = (latitude: string | number, longitude: string | number) => {
  if (typeof latitude === 'string') latitude = Number(latitude)
  if (typeof longitude === 'string') longitude = Number(longitude)
  return $uni.openLocation({ latitude, longitude })
}
export const showToast = (options: UniApp.ShowToastOptions) => {
  const duration = options.duration || 1500
  uni.showToast({
    ...options,
    duration
  })
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, duration)
  })
}

// export const PLATFORM = typeof process !== 'undefined' ? (process?.env?.VUE_APP_PLATFORM as UniPlatforms) : undefined;
