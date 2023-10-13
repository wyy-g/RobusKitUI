---
title: Switch
---

# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

绑定 v-model 到一个 Boolean 类型的变量。 可以使用 --vk-switch-on-color 属性与 --vk-switch-off-color 属性来设置开关的背景色。

<preview path="../demo/Switch/basic.vue"></preview>

## 禁用状态

设置 disabled 属性，接受一个 boolean，设置 true 即可禁用。

<preview path="../demo/Switch/disabled.vue"></preview>

## 不同尺寸

设置 size 属性，接受 large / small，呈现不同的尺寸。

<preview path="../demo/Switch/size.vue"></preview>

## 支持自定义 value 类型

你可以设置 active-value 和 inactive-value 属性， 它们接受 boolean | string | number 类型的值。

<preview path="../demo/Switch/manualValue.vue"></preview>

## 文字描述

使用 active-text 属性与 inactive-text 属性来设置开关的文字描述。

<preview path="../demo/Switch/description.vue"></preview>

## API

### switch 属性

| 参数           | 说明                     | 类型                              | 可选值 | 默认值 |
| -------------- | ------------------------ | --------------------------------- | ------ | ------ |
| v-model        | 绑定值                   | `string` \| `boolean` \| `number` | ——     | ——     |
| disabled       | 是否禁用                 | `boolean`                         | ——     | false  |
| active-text    | switch 打开时的文字描述  | `string`                          | ——     | ——     |
| inactive-text  | switch 关闭时的文字描述  | `string`                          | ——     | ——     |
| active-value   | switch 状态为 on 时的值  | `string` \| `boolean` \| `number` | ——     | ——     |
| inactive-value | switch 状态为 off 时的值 | `string` \| `boolean` \| `number` | ——     | ——     |
| name           | switch 对应的 name 属性  | `string`                          | ——     | ——     |
| id             | input 的 id              | `string`                          | ——     | ——     |

### switch 事件

| Name   | Description                     | Type                                       |
| ------ | ------------------------------- | ------------------------------------------ |
| change | switch 状态发生变化时的回调函数 | `(e: string \| boolean \| number) => void` |
