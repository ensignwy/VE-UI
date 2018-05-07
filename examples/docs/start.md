# 快速上手

----

## 标准开发

实际项目中，往往会使用 `webpack`，`rollup` 或者 `gulp` 的工作流，大多可以做到按需加载页面用到的组件，所以不推荐直接使用 `<script>` 标签全局引入的方式使用。

### 全局组件使用

可以在项目的入口文件中引入所有组件或所需组件

```js
import VeUI from 've-ui' // 引入组件库
import 've-ui/packages/theme/touch-screen-global.css' // 如果是触摸屏，引入触摸屏样式库

Vue.use(VeUI)
```
