import { shallowRef, unref, watch } from 'vue'

export function useStorage(key: string, initialValue: any) {
  // 统一处理通过 try catch 捕获到的错误
  const onError = (e: any) => {
    console.error(e)
  }
  // 创建一个跟踪自身 .value 变化的 ref 并返回给 data
  const data = shallowRef(initialValue)
  // 如果 initialValue 是一个 ref, 则返回 initialValue 本身
  // 否则返回参数本身
  const rawInit = unref(initialValue)

  // 实时监听 data 值的变化并执行 write 方法
  watch(data, (newVal) => {
    write(newVal)
  })

  // 调用 useStorage 方法并立即执行, 如果调用 read 方法能获取到值, 就将获取到的值使用 JSON.parse 方法将字符串转化为 js对象
  if (read(key)) {
    data.value = JSON.parse(uni.getStorageSync(key))
  }

  // 目标: 将key对应的v写入到缓存中
  // 如果 v == null 清除缓存中 key 的值
  // 如果 v != null 将 key 到缓存中, 值为 转化为字符串的 v
  //    并获取缓存中 key 对应的 v 赋值给 data
  function write(v: any) {
    try {
      if (v == null) uni.removeStorageSync(key)
      else uni.setStorageSync(key, JSON.stringify(v))
      update(v)
    } catch (e) {
      onError(e)
    }
  }

  // 目标: 获取 key 对应的 v, 使用 JSON.parse 将 v 转化为 js对象返回出去
  function read(event: string) {
    if (event !== key) return
    try {
      if (event == null) {
        if (rawInit !== null) {
          write(rawInit)
        }
        return rawInit
      } else if (typeof event !== 'string') {
        return event
      } else {
        const storage = uni.getStorageSync(event)
        if (storage) return JSON.parse(uni.getStorageSync(event))
      }
    } catch (e) {
      onError(e)
    }
  }

  // 目标: 调用 read 方法将获取到的 v 返回给data
  function update(event: any) {
    if (event !== key) return
    data.value = read(event)
  }

  return data
}
