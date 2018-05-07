# ve-ui

> 基于vue2.x的前端组件库
>

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
运行起来可以查看文档
http://localhost:8080

# 作为其他项目的依赖库使用
## 安装

``` bash
npm install git+https://github.com/ensignwy/VE-UI.git
```

## 使用
``` bash
import VeUI from 've-ui' // 引入组件库
import 've-ui/packages/theme/touch-screen-global.css' // 如果是触摸屏，引入触摸屏样式库
Vue.use(VeUI)
```


