---
title: Alert
---

# Alert 警告提示

用于页面中展示重要的提示信息。

## 基础用法

Alert 组件提供四种类型，由 type 属性指定，为 `success` | `warning` | `danger` | `info` , 默认值为 `info`。

<preview path="../demo/Alert/basic.vue"></preview>

## 主题

Alert 组件提供了两个不同的主题：light 和 dark。通过设置 `effect `属性来改变主题，默认为 `light`。

<preview path="../demo/Alert/theme.vue"></preview>

## 自定义关闭按钮

自定义关闭按钮为文字或其他符号。

<preview path="../demo/Alert/customClose.vue"></preview>

## 带有 icon

表示某种状态时提升可读性。`show-icon` 属性用来展示 Alert 的 icon

<preview path="../demo/Alert/showIcon.vue"></preview>

## API

### alert 属性

| 参数     | 说明           | 类型    | 可选值                                       | 默认值 |
| -------- | -------------- | ------- | -------------------------------------------- | ------ |
| context  | 内容           | string  | ——                                           | ——     |
| type     | 类型           | string  | `success` \| `warning` \| `danger` \| `info` | info   |
| effect   | 选择提供的主题 | string  | `light` \| `dark`                            | light  |
| closable | 是否可关闭     | boolean | ——                                           | true   |
| showIcon | 是否显示图标   | boolean | ——                                           | false  |

### alert Slots

| Name     | Description    |
| -------- | -------------- |
| ——       | 内容           |
| canClose | 关闭按钮自定义 |

### alert 事件

| 事件名称 | 说明                    | 回调参数 |
| -------- | ----------------------- | -------- |
| close    | 关闭 alert 时触发的事件 | ——       |
