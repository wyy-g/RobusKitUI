---
title: "BackTop"
---

# Backtop 返回顶部

返回页面顶部的操作按钮

## 基本使用

当容器滚动到一定高度的时候，在右下角会出现一个返回顶部的按钮

<preview path="../demo/BackTop/basic.vue" ></preview>

## 自定义按钮

可以自定义返回按钮。

<preview path="../demo/BackTop/custom.vue" ></preview>

## API

### backTop 属性

| 参数              | 说明                             | 类型     | 可选值 | 默认值 |
| ----------------- | -------------------------------- | -------- | ------ | ------ |
| target            | 触发滚动的对象                   | `string` | ——     | ——     |
| visibility-height | 滚动高度达到此参数值才出现       | `number` | ——     | number |
| right             | 控制其显示位置, 距离页面右边距   | `number` | ——     | 40     |
| bottom            | 控制其显示位置, 距离页面底部距离 | `number` | ——     | 40     |

### backTop Slots

| Name     | Description      |
| -------- | ---------------- |
| 默认插槽 | 自定义按钮的内容 |

### backTop 事件

| 事件名称 | 说明               | 回调参数 |
| -------- | ------------------ | -------- |
| click    | 点击按钮触发的事件 | 点击事件 |
