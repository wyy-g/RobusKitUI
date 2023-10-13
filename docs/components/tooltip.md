---
title: Tooltip
---

# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

## 基础用法

使用 `content` 属性来决定 hover 时的提示信息。

<preview path="../demo/Tooltip/basic.vue"></preview>

## 不同位置

由 `placement` 属性决定展示效果： `placement`属性值为：[方向]-[对齐位置]；四个方向：`top、left、right、bottom`；三种对齐位置：`start, end`，默认为空。

<preview path="../demo/Tooltip/placement.vue"></preview>

## 触发方式

由 `trigger` 属性决定触发方式： `hover | click`, 默认为 `hover`。

<preview path="../demo/Tooltip/trigger.vue"></preview>

## 更多内容的文字提示

展示多行文本或者是设置文本内容的格式。用具名 slot content，替代 tooltip 中的`content`属性

<preview path="../demo/Tooltip/content.vue"></preview>

## 手动触发

将 manual 属性设置为 true 即可， 然后可以使用实例上面的 show 和 hide 方法打开关闭下拉菜单。

<preview path="../demo/Tooltip/manual.vue"></preview>

## API

### tooltip 属性

| 参数           | 说明                   | 类型      | 可选值                                                                                                    | 默认值  |
| -------------- | ---------------------- | --------- | --------------------------------------------------------------------------------------------------------- | ------- |
| content        | 显示的内容，也可以通过 | `string`  | ——                                                                                                        | ——      |
| placement      | Tooltip 的出现位置     | `boolean` | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom  |
| open-delay     | 延迟出现，单位毫秒     | `number`  | ——                                                                                                        | 0       |
| close-delay    | 延迟关闭，单位毫秒     | `number`  | ——                                                                                                        | 0       |
| trigger        | 触发方式               | `string`  | `hover` \| `click`                                                                                        | `hover` |
| manual         | 是否开启手动触发模式   | `boolean` | ——                                                                                                        | ——      |
| popper-options | popper.js 的参数       | `object`  | 参考 popper.js 文档                                                                                       | ——      |

### tooltip 事件

| Name           | Description                       | Type      |
| -------------- | --------------------------------- | --------- |
| visible-change | 当 tooltip 展示/隐藏时被触发      | `boolean` |
| click-outside  | 当点击到 Tooltip 外侧区域时被触发 | `boolean` |

### tooltip Exposes

| Name | Description                           | Type                                   |
| ---- | ------------------------------------- | -------------------------------------- |
| show | 开启手动模式后，当 tooltip 展示时触发 | `(event?: Event \| undefined) => void` |
| hide | 开启手动模式后，当 tooltip 隐藏时触发 | `(event?: Event \| undefined) => void` |
