## 项目目录说明

```makefile
preset-uni-vue3
├── README.md # 说明文件
├── src # 源码文件
│   ├── api # 全局接口
│   │   ├── error.strategy.ts # 错误策略
│   │   ├── http.config.ts # 接口配置
│   │   └── index.ts # 接口入口
│   ├── App.vue # 全局入口组件
│   ├── common # 公共方法/配置/参数
│   ├── components # 组件目录
│   ├── main.ts # 文件入口
│   ├── manifest.json # uni 配置文件
│   ├── pages # 视图组件(路由)
│   ├── pakeage-xxxx # 视图组件(分包路由)
│   ├── pages.json # 页面配置
│   ├── plugins # 插件目录
│   ├── static # 静态目录
│   ├── stores # pinia 储存库
│   ├── style # 全局样式(不需要引入, 全局生效)
│   │   ├── class.scss # 全局样式表
│   │   └── base.scss # 初始化样式表
│   ├── types # 类型说明
│   │   ├── declares # 项目依赖说明
│   │   ├── custom.d.ts # 自定义类型
│   │   └── request.d.ts # 请求类型说明
│   ├── uni.scss # 全局样式入口
│   └── utils # 工具函数
│       ├── calculation.ts  # 计算处理
│       ├── index.ts # 入口文件
│       ├── debounce.ts # 防抖
│       ├── deepClone.ts # 深度克隆
│       ├── deepMerge.ts # 对象深度合并
│       ├── throttle.ts # 节流
│       ├── verify.ts # 校验
│       └── wx-utils.ts # 微信工具函数
├── tsconfig.json # ts 文件配置
├── .editorconfig # 编码样式
├── .eslintrc.js # 代码检测
├── .prettierrc.js # 代码格式化
└── vite.config.js # vite 脚手架配置
```

## 更新 CLI 依赖

`npx @dcloudio/uvm alpha`

## 项目规范说明

项目采用`scss`，`uniapp`，`vk-uview`，`pinia` 等主体技术进行开发项目要求组件化开发，结构化，清晰化项目结构。 请遵循代码中所定义的规范进行开发

### CSS 预编辑器规范

- 所有主题色号不允许在单独页面/组件使用，只允许使用 src/style/variables 中定义的变量。
- 避免大量的嵌套规则。当可读性受到影响时，将之打断。推荐避免出现多于 20 行的嵌套规则出现。
- 少用#，少用\*，少用标签选择器
- 尽量避免使用 !important

### CSS 属性书写顺序

- 建议遵循以下顺序

1. 局方式、位置，相关属性：`position / top / right / bottom / left / z-index / display / float /`
2. 盒模型：`width / height / padding / margin / border / overflow /`
3. 文本排版：`font / line-height / text-align / word-wrap /`
4. 视觉外观：`color / background / list-style / transform / animation / transition /`
5. 其他属性：`...`

### class 标签命名

- 尽量采用-分开关键字命名
- 英文单词尽量不要缩写

### js 规范

- 采用模块化编程，通过`ES6`语法暴露 `-> export`
- 重复代码进行封装为方法，减少代码臃肿，让代码清晰明了
- 减少代码圈复杂度，减少代码嵌套，善于`return`，少用`else`
- 函数与变量命名采用驼峰命名法 `-> userInfo or getUserInfo`
- 常量(不会再次进行修改)命名采用大写加下划线命名 `-> USER_STATUS`

## 项目构建命令清单

```bash
# 让 uni-cli 项目运行时自动打开调试工具
npm run cli

# 开发时构建
npm run serve

# 打包构建
npm run build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm run dev:h5
npm run dev:mp-weixin
...

# 指定平台的打包构建
npm run build:h5
npm run build:mp-weixin
...
```
