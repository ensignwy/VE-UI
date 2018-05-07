# Switcher 点击切换选择
----
### 基础用法

<div style="width: 400px">
  <ve-switcher @change-value="handleChange" :data="switcherData">
  </ve-switcher>
</div>


::: demo
```html

<div style="width: 400px">
  <ve-switcher @change-value="handleChange" :data="switcherData">
  </ve-switcher>
</div>
export default {
  data() {
    return {
      switcherData: [
        {value: '2018-3-16', label: '今天&nbsp;&nbsp;&nbsp;&nbsp;2018-3-16',active: false},
        {value: '2018-3-17', label: '明天&nbsp;&nbsp;&nbsp;&nbsp;2018-3-17', active: true},
        {value: '2018-3-18', label: '后天&nbsp;&nbsp;&nbsp;&nbsp;2018-3-18',active: false}
      ]
    };
  },
  methods: {
    handleChange:function (data) {
      console.log(data)
    }
  }
}

```
:::

<script>
export default {
  data() {
    return {
      switcherData: [
        {value: '2018-3-16', label: '今天&nbsp;&nbsp;&nbsp;&nbsp;2018-3-16',active: false},
        {value: '2018-3-17', label: '明天&nbsp;&nbsp;&nbsp;&nbsp;2018-3-17', active: true},
        {value: '2018-3-18', label: '后天&nbsp;&nbsp;&nbsp;&nbsp;2018-3-18',active: false}
      ]
    };
  },
  methods: {
    handleChange:function (data) {
      console.log(data)
    }
  }
}
</script>


## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| data | 展示数据 | Array | — | — |



## 事件

| 事件名称      | 说明          | 回调参数  |
|---------- |-------------- |---------- |
| change-value | 点击切换时的回调 | 共一个参数，依次为：切换到当前的元素的值|
