# Swiper 滑动切换
参考https://github.com/helicopters/wc-swiper，原版本为v1.x的，现改为vue2.x版本
----
### 基础用法

<ve-swiper id="swiper_loop"
        :loop="true"
        :pagination-visible="true"
        direction="horizontal">
    <div>Page 1</div>
    <div>Page 3</div>
    <div>Page 3</div>
</ve-swiper>


::: demo
```html

<ve-swiper id="swiper_loop"
        :loop="true"
        :pagination-visible="true"
        direction="horizontal">
    <div>Page 1</div>
    <div>Page 3</div>
    <div>Page 3</div>
</ve-swiper>
<style>
.swiper {
    height: 200px;
    margin-bottom: 80px;
}
.swiper-wrap > div {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 48px;
    color: #fff;
}
.swiper-wrap > div:nth-child(3n) {
    background-color: skyblue;
}
.swiper-wrap > div:nth-child(3n + 1) {
    background-color: yellowgreen;
}
.swiper-wrap > div:nth-child(3n + 2) {
    background-color: rosybrown;
}
</style>

```
:::

<style>
.swiper {
    height: 200px;
    margin-bottom: 80px;
}
.swiper-wrap > div {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 48px;
    color: #fff;
}
.swiper-wrap > div:nth-child(3n) {
    background-color: skyblue;
}
.swiper-wrap > div:nth-child(3n + 1) {
    background-color: yellowgreen;
}
.swiper-wrap > div:nth-child(3n + 2) {
    background-color: rosybrown;
}

</style>


<script>
export default {
  data() {
    return {
    };
  }
}
</script>


## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |



## 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |

