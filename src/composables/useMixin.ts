import { calcStatusCode } from '@/common/statusCode.config'
export const useMixin = () => {
  /**
   * isFunction
   * @description 校验数据是否是Function类型
   * @param {Any} val 需要校验的数据
   * @return {Boolean} true: 是；false: 否；
   */
  const isFunction = (val: any): boolean => {
    return Object.prototype.toString.call(val) === '[object Function]'
  }

  /**
   * uView表单设置
   */
  const formSettings = ref({
    borderBottom: true, // 是否显示下边框
    errorType: 'toast', // 验证提示类型
    labelWidth: 82, // label宽度
    labelStyle: { fontSize: '14px', color: '#333333' }, // label样式
    itemCustomStyle: 'height: 50px; padding: 0;', // u-form-item的自定义样式
    fontSize: 14, // 输入框字体大小
    placeholderStyle: 'color: #999999', // placeholder样式
    inputColor: '#333333', // 输入框的字体颜色
    inputAlign: 'right', // 输入框内容对齐方式
    disabledColor: 'transparent' // 输入框禁用状态时的背景色
  })

  /**
   * 页面数据
   */
  const page = ref({
    // 页码
    index: 1,
    // 页长
    size: 10,
    // 加载状态 loadmore: 加载更多; loading: 加载中; nomore: 没有更多数
    loadStatus: 'loadmore'
  })

  /**
   * getList
   *
   * @description 查询列表数据，因为所有页面的查询列表的逻辑都是一样的，只是请求的接口不一样，每次都要在每个页面重写一遍相同的逻辑，所以就把此函数单独提取出来了
   * @param {Function} fn 请求数据的函数
   * @param {Object} opts 请求fn函数时携带的配置数据
   * @param {Array} listName 请求接口成功后要更新的列表字段的名称，这里的列表字段必须是 data 数据中的第一级，如果是多级字段， 此参数就传 null 或 undefined，然后在 successCallback 或 .then() 中自己更新列表
   * @param {Function} successCallback 如果需要在查询数据成功后单独处理数据，就传递此函数，此函数的参数是接口返回的数据
   * @return {Promise} 返回一个 Promise
   */
  const getList = (fn: any, opts: any, listName: any, successCallback: any): Promise<any> => {
    // 正在查询或已加载全部数据，就不再进行查询了
    if (page.value.loadStatus !== 'loadmore') return Promise.reject(calcStatusCode('444'))

    // 当前加载状态，用于查询失败后重置状态
    const loadStatus = page.value.loadStatus

    // 更新加载状态
    page.value.loadStatus = 'loading'

    // 查询数据
    return fn(opts)
      .then((res: any) => {
        //
        if (isFunction(successCallback)) successCallback(res)
        // 判断是否是最后一页数据
        // 返回的数据不足一页，说明是最后一页数据了
        if (res?.result?.length < page.value.size) {
          page.value.loadStatus = 'nomore'
        }
        // 反之，说明不是最后一页数据
        else {
          page.value.loadStatus = 'loadmore'
        }

        // 更新列表
        if (listName) listName = listName.concat(res?.result)
        // 更新页码
        page.value.index = page.value.index + 1
      })
      .catch((err: any) => {
        // 还原加载状态
        page.value.loadStatus = loadStatus
      })
  }

  return {
    formSettings,
    getList
  }
}
