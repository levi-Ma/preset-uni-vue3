import { instance } from './http.config'

/* apis->index.ts 统一命名规范
 * 需详细描述数据时, 在 src/types/request.d.ts中声明
 * Template: req[name] = () => ajax.get("/api/list")
 */
const http = {
  /**
   * 公共接口相关
   */
  common: {
    /**
     * 获取公共案例
     */
    getPublicCase(params = {}) {
      return instance.get('/api/xxxx', params)
    },
    /**
     * test
     */
    test(params = {}) {
      return instance.get('/api/user/getUser', params)
    }
  }
}

export default http
