/**
 * 封装微信jssdk
 */
import jweixin from 'jweixin-npm'

export const useJwx = () => {
  //判断是否在微信中
  const isWechat = () => {
    const ua = window.navigator.userAgent.toLowerCase()
    return ua.indexOf('micromessenger') > -1 ? true : false
  }
  // 初始化微信配置
  const initJssdk = (callback: any, shareContent?: IWxShareConfig) => {
    if (callback) {
      callback(shareContent)
    }
  }
  // 分享
  const share = (data: IWxConfig, shareContent: IWxShareConfig) => {
    //每次都需要重新初始化配置，才可以进行分享
    jweixin.config(data)
    jweixin.ready(function () {
      var shareData = {
        title: shareContent.title,
        desc: shareContent.desc,
        link: shareContent.link,
        imgUrl: shareContent.imgUrl,
        success: function () {
          console.log('设置成功')
        },
        fail: function () {
          console.log('设置失败')
        }
      }

      // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容
      jweixin.updateAppMessageShareData(shareData)
      // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
      jweixin.updateTimelineShareData(shareData)
    })
  }
  //微信支付
  const wxpay = (data: IWxPayConfig, callback: any) => {
    if (!isWechat()) {
      return
    }
    initJssdk(function () {
      jweixin.ready(function () {
        jweixin.chooseWXPay({
          timestamp: data.timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
          nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
          package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
          signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
          paySign: data.paysign, // 支付签名
          success: function (res: any) {
            callback(res)
          },
          fail: function (err: any) {
            callback(err)
          },
          complete: function (res: any) {
            console.log(res)
          }
        })
      })
    })
  }

  return {
    isWechat,
    share,
    wxpay
  }
}
