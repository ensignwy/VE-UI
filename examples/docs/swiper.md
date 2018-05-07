# Swiper 滑动切换
----
### 基础用法 
滑动效果请打开浏览器手机版查看

<div style="width: 320px;height: 380px">
  <ve-swiper :sum="3">
    <div class="swiper-item">
      1
    </div>
    <div class="swiper-item">
      2
    </div>
    <div class="swiper-item">
      3
    </div>
  </ve-swiper>
</div>


::: demo
```html

<div style="width: 320px;height: 380px">
  <ve-swiper :sum="3">
    <div class="swiper-item">
      1
    </div>
    <div class="swiper-item">
      2
    </div>
    <div class="swiper-item">
      3
    </div>
  </ve-swiper>
</div>
<style>
.swiper-item {
    background-color: #eee;
    width: 320px;
    height: 320px;
  }
</style>

```
:::

<style>
.swiper-item {
    background-color: #fff;
    width: 320px;
    height: 320px;
  }
</style>


<script>
export default {
  data() {
    return {
      content: ''
    };
  }
}
</script>


## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| sum | 轮播div个数（必填） | Number | — | — |
| autopaly| 是否自动轮播 | Boolean | — | false |



## 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |

