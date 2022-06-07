let baseURL = 'https://www.example.com/api'

// 开发环境
if (process.env.NODE_ENV === 'development') {
  // 域名
  baseURL = 'http://localhost:3000'
}

export const httpConfig = {
  baseURL
}
