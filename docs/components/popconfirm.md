---
title: Popconfirm
---

# Popconfirm 气泡确认框

点击元素，弹出气泡确认框。

## 基础用法

`title`属性为文本提示内容

<preview path="../demo/Popconfirm/basic.vue"></preview>

## 自定义

可以在 Popconfirm 中自定义内容。

<preview path="../demo/Popconfirm/custom.vue"></preview>

## API

### Popconfirm 属性

| 参数         | 说明          | 类型      | 可选值 | 默认值            |
| ------------ | ------------- | --------- | ------ | ----------------- |
| title        | title         | `string`  | ——     | ——                |
| confirm-text | 确认按钮文字  | `string`  | ——     | ——                |
| cancel-text  | 取消按钮文字  | `string`  | ——     | ——                |
| icon         | 图标          | `string`  | ——     | 'question-circle' |
| icon-color   | icon 颜色     | `string`  | ——     | ——                |
| hide-icon    | 是否隐藏 Icon | `Boolean` | ——     | false             |

### Popconfirm 事件

| Name    | Description        | Type         |
| ------- | ------------------ | ------------ |
| confirm | 点击确认按钮时触发 | `() => void` |
| cancel  | 点击取消按钮时触发 | `() => void` |
