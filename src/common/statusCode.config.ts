/**
 * 自定义状态码
 */
const statusCode: {
  [key: string]: any
} = {
  '444': { code: 444, msg: '正在查询或已加载全部数据' }
}

export const calcStatusCode = (code: string): any => {
  return statusCode[code]
}
