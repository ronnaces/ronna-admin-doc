(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{441:function(n,e,t){"use strict";t.r(e);var s=t(8),o=Object(s.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("p",[e("a",{attrs:{href:"https://github.com/ronnaces/ronna-admin",target:"_blank",rel:"noopener noreferrer"}},[this._v("完整版"),e("OutboundLink")],1),this._v("目录结构")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("├── .github  # GitHub 配置文件\n│   ├── ISSUE_TEMPLATE  # 问题提交参考模板\n│   ├── workflows git  # 工作流\n├── .husky  # 代码提交前校验配置文件\n├── .vscode  # IDE 工具推荐配置文件\n│   │   ├── extensions.json  # 一键安装平台推荐的 vscode 插件\n│   │   ├── settings.json  # 设置扩展程序或 vscode 编辑器的一些属性\n│   │   ├── vue3.0.code-snippets  # vue3.0 代码片段\n│   │   └── vue3.2.code-snippets  # vue3.2 代码片段\n│   │   └── vue3.3.code-snippets  # vue3.3 代码片段\n├── build  # 构建工具\n│   │   ├── cdn.ts  # 打包时采用 cdn 模式\n│   │   ├── compress.ts  # 打包时启用 gzip 压缩或 brotli 压缩\n│   │   ├── info.ts  # 输出打包信息（大小、用时）\n│   │   ├── optimize.ts  # vite 依赖预构建配置项\n│   │   ├── plugins.ts  # vite 相关插件存放处\n│   │   ├── utils.ts  # 构建工具常用方法抽离\n├── locales  # 国际化文件存放处\n│   │   ├── en.yaml  # 英文配置\n│   │   ├── zh-CN.yaml  # 中文配置\n├── mock  # mock 模拟后台数据\n│   │   ├── asyncRoutes.ts  # 模拟后台返回动态路由\n│   │   ├── ...\n├── node_modules  # 模块依赖\n├── public  # 静态资源\n│   │   ├── audio  # 音频文件\n│   │   ├── html  # 静态 iframe 页面\n│   │   ├── wasm  # wasm 文件以及胶水代码\n│   │   ├── favicon.ico  # favicon\n│   │   ├── logo.svg  # logo\n│   │   ├── platform-config.json  # 全局配置文件（打包后修改也可生效）\n├── src\n│   ├── api  # 接口请求统一管理\n│   ├── assets  # 字体、图片等静态资源\n│   ├── components  # 自定义通用组件\n│   │   ├── ReAnimateSelector  # [animate.css](https://animate.style/) 选择器组件\n│   │   ├── ReAuth  # 按钮级别权限组件\n│   │   ├── ReBarcode  # 条形码组件\n│   │   ├── ReCol  # 封装 element-plus 的 el-col 组件\n│   │   ├── ReCountTo  # 数字动画组件\n│   │   ├── ReCropper  # 图片裁剪组件\n│   │   ├── ReDialog  # 基于 element-plus 中 el-dialog 组件开发的函数式弹框\n│   │   ├── ReFlicker  # 圆点、方形闪烁动画组件\n│   │   ├── ReFlop  # 时间翻牌组件\n│   │   ├── ReFlowChart  # LogicFlow 流程图组件\n│   │   ├── ReIcon  # 图标组件\n│   │   ├── ReImageVerify  # 图形验证码组件\n│   │   ├── ReMap  # 高德地图组件\n│   │   ├── RePureTableBar  # 配合 `@pureadmin/table` 实现快速便捷的表格操作 https://github.com/ronnacespure-admin-table */\n│   │   ├── ReQrcode  # 二维码组件\n│   │   ├── ReSeamlessScroll  # 无缝滚动组件\n│   │   ├── ReSegmented  # 分段控制器组件\n│   │   ├── ReSelector  # 选择器组件\n│   │   ├── ReSplitPane  # 切割面板组件\n│   │   ├── ReText  # 支持 Tooltip 提示的文本省略组件\n│   │   ├── ReTreeLine  # 树形连接线组件（基于element-plus）\n│   │   ├── ReTypeit  # 打字机效果组件\n│   ├── config  # 获取平台动态全局配置\n│   ├── directives  # 自定义指令\n│   │   ├── auth  # 按钮级别权限指令\n│   │   ├── copy  # 文本复制指令（默认双击复制）\n│   │   ├── longpress  # 长按指令\n│   │   ├── optimize  # 防抖、节流指令\n│   ├── layout  # 主要页面布局\n│   ├── plugins  # 处理一些库或插件，导出更方便的 api\n│   ├── router  # 路由配置\n│   ├── store  # pinia 状态管理\n│   ├── style  # 全局样式\n│   │   ├── dark.scss  # 暗黑模式样式适配文件\n│   │   ├── element-plus.scss  # 全局覆盖 element-plus 样式文件\n│   │   ├── reset.scss  # 全局重置样式文件\n│   │   ├── sidebar.scss  # layout 布局样式文件\n│   │   ├── tailwind.css  # tailwindcss 自定义样式配置文件\n│   │   ├── ...\n│   ├── utils  # 全局工具方法\n│   │   ├── http  # 封装 axios 文件\n│   │   ├── localforage  # 二次封装 localforage (https://localforage.docschina.org/) 支持设置过期时间，提供完整的类型提示\n│   │   ├── progress  # 封装 nprogress\n│   │   └── auth.ts  # 处理用户信息和 token 相关\n│   │   └── chinaArea.ts  # 汉字转区域码\n│   │   └── globalPolyfills.ts  # 解决项目可能因为安装某个依赖出现 `global is not defined` 报错\n│   │   └── message.ts  # 消息提示函数\n│   │   ├── mitt.ts  # 触发公共事件，类似 EventBus\n│   │   ├── preventDefault.ts  # 阻止键盘F12、浏览器默认右键菜单、页面元素选中、图片默认可拖动的方法\n│   │   ├── print.ts  # 打印函数\n│   │   ├── propTypes.ts  # 二次封装 vue 的 propTypes\n│   │   ├── responsive.ts  # 全局响应式 storage 配置\n│   │   ├── sso.ts  # 前端单点登录逻辑处理\n│   │   ├── tree.ts  # 树结构相关处理函数\n│   ├── views  # 存放编写业务代码页面\n│   ├── App.vue  # 入口页面\n│   ├── main.ts  # 入口文件\n├── types  # 全局 TS 类型配置\n│   │   ├── global-components.d.ts  # 自定义全局组件获得 Volar 提示（自定义的全局组件需要在这里声明下才能获得 Volar 类型提示哦）\n│   │   ├── global.d.ts  # 全局类型声明，无需引入直接在 `.vue` 、`.ts` 、`.tsx` 文件使用即可获得类型提示\n│   │   ├── index.d.ts  # 此文件跟同级目录的 global.d.ts 文件一样也是全局类型声明，只不过这里存放一些零散的全局类型，无需引入直接在 .vue 、.ts 、.tsx 文件使用即可获得类型提示\n│   │   ├── router.d.ts  # 全局路由类型声明\n│   │   ├── shims-tsx.d.ts  # 该文件是为了给 .tsx 文件提供类型支持，在编写时能正确识别语法\n│   │   └── shims-vue.d.ts  # .vue、.scss 文件不是常规的文件类型，typescript 无法识别，所以我们需要通过下图的代码告诉 typescript 这些文件的类型，防止类型报错\n├── .browserslistrc  # 配置目标浏览器的环境\n├── .dockerignore  # 排除不需要上传到 docker 服务端的文件或目录\n├── .editorconfig  # 编辑器读取文件格式及样式定义配置 https://editorconfig.org/\n├── .env  # 全局环境变量配置（当 .env 文件与 .env.development、.env.production、.env.staging 这三个文件之一存在相同的配置 key 时，.env 优先级更低）\n├── .env.development  # 开发环境变量配置\n├── .env.production  # 生产环境变量配置\n├── .env.staging  # 预发布环境变量配置\n├── .eslintignore  # eslint 语法检查忽略文件\n├── .gitattributes  # 自定义指定文件属性\n├── .gitignore  # git 提交忽略文件\n├── .gitpod.yml  # gitpod 部署配置\n├── .lintstagedrc  # lint-staged 配置\n├── .markdownlint.json  # markdown 格式检查配置\n├── .npmrc  # npm 配置文件\n├── .nvmrc  # 用于指定在使用 Node Version Manager（NVM）时要使用的特定 Node.js 版本\n├── .prettierignore  # prettier 语法检查忽略文件\n├── .prettierrc.js  # prettier 插件配置\n├── .stylelintignore  # stylelint 语法检查忽略文件\n├── CHANGELOG.en_US.md  # 版本更新日志（英文版）\n├── CHANGELOG.md  # 版本更新日志（英文版）\n├── CHANGELOG.zh_CN.md  # 版本更新日志（中文版）\n├── commitlint.config.js  # git 提交前检查配置\n├── Dockerfile  # 用来构建 docker 镜像\n├── eslint.config.js  # eslint 语法检查配置\n├── index.html  # html 主入口\n├── LICENSE  # 证书\n├── package.json  # 依赖包管理以及命令配置\n├── pnpm-lock.yaml  # 依赖包版本锁定文件\n├── postcss.config.js  # postcss 插件配置\n├── README.en-US.md  # README（英文版）\n├── README.md  # README\n├── stylelint.config.js  # stylelint 配置\n├── tailwind.config.ts  # tailwindcss 配置\n├── tsconfig.json  # typescript 配置\n└── vite.config.ts  # vite 配置\n")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);