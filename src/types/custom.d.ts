/* 自定义全局类型存放 */
type WillObject = {
  [key: string | symbol | number]: any
}
type Key = number | string

type _typeObj = { [key: string]: any }

type btnItem = {
  id: number
  type: string
  text: string
}

type ToastType = {
  title: string
  type?: string
  duration?: number
}
