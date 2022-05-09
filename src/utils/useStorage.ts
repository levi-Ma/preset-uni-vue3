import { shallowRef, unref, watch } from 'vue'

export function useStorage(key: string, initialValue: any) {
  const onError = (e: any) => {
    console.error(e)
  }

  const data = shallowRef(initialValue)
  const rawInit = unref(initialValue)

  if (read(key)) {
    update(key)
  } else {
    watch(data, (newVal) => {
      write(newVal)
    })
  }
  return data

  function write(v: any) {
    try {
      if (v == null) uni.removeStorageSync(key)
      else uni.setStorageSync(key, JSON.stringify(v))
      update(v)
    } catch (e) {
      onError(e)
    }
  }

  function read(event: string) {
    if (event !== key) return
    try {
      const rawValue = event
      if (rawValue == null) {
        if (rawInit !== null) {
          write(rawInit)
        }
        return rawInit
      } else if (typeof rawValue !== 'string') {
        return rawValue
      } else {
        return JSON.parse(uni.getStorageSync(rawValue))
      }
    } catch (e) {
      onError(e)
    }
  }

  function update(event: any) {
    if (event !== key) return
    data.value = read(event)
  }
}
