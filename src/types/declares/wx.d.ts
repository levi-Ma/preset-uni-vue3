declare module 'jweixin-npm'

type IWxConfig = {
  debug: boolean
  appId: string
  timestamp: string
  nonceStr: string
  signature: string
  jsApiList: Array<string>
  [key: string]: any
}

type IWxShareConfig = {
  title?: string
  desc?: string
  link?: string
  imgUrl?: string
}

type IWxPayConfig = {
  timestamp: any | number
  nonceStr: string
  package: string
  signType: string
  paysign: string
}
