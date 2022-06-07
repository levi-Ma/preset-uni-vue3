/**
 * 选择图片
 */
import { showToast } from '@/utils'

export const useChooseImage = () => {
  // 图片上传参数
  const imageParameter = {
    limitType: ['png', 'jpg', 'jpeg', 'webp'],
    maxSize: 1024 * 1024 * 10
  }

  // 判断文件后缀是否允许
  const checkFileExt = (file: UniApp.ChooseImageSuccessCallbackResultFile | File) => {
    // 检查是否在允许的后缀中
    let noArrowExt = false
    // 获取后缀名
    let fileExt = ''
    const reg = /.+\./
    // 如果是H5，需要从name中判断
    // #ifdef H5
    let fileIsH5 = file as File
    fileExt = fileIsH5.name.replace(reg, '').toLowerCase()
    // #endif
    // 非H5，需要从path中读取后缀
    // #ifndef H5
    let fileNotH5 = file as UniApp.ChooseImageSuccessCallbackResultFile
    fileExt = fileNotH5.path.replace(reg, '').toLowerCase()
    // #endif
    // 使用数组的some方法，只要符合limitType中的一个，就返回true
    noArrowExt = imageParameter.limitType.some((ext) => {
      // 转为小写
      return ext.toLowerCase() === fileExt
    })
    if (!noArrowExt) showToast({ title: `不允许选择${fileExt}格式的文件`, icon: 'none' })
    return noArrowExt
  }

  // 上传图片
  const chooseImage = () => {
    return new Promise((resolve, reject) => {
      uni.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: resolve,
        fail: reject
      })
    })
  }

  // 返回参数和方法
  return {
    imageParameter,
    checkFileExt,
    chooseImage
  }
}
