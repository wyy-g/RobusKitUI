---
title: Button
description: Button 组件的文档
---

# Button 按钮

常用的操作按钮

## 基础用法

使用 type、plain、round 和 circle 来定义按钮的样式。

<preview path="../demo/Button/basic.vue" ></preview>

## 禁用状态

使用 disabled 属性来定义按钮是否被禁用

<preview path="../demo/Button/disabled.vue" ></preview>

## 图标按钮

使用 icon 属性来为按钮添加图标。图标名称请看 fontawesome 官网 https://fontawesome.com/icons

<preview path="../demo/Button/iconButton.vue" ></preview>

## 加载状态按钮

通过设置 loading 属性为 true 来显示正在加载的状态。

<preview path="../demo/Button/loading.vue" ></preview>

## 按钮尺寸大小

通过设置 size 属性为 small | large 来调整图标的大小。

<preview path="../demo/Button/size.vue"></preview>

## API

### Button 属性

| Name        | Description    | Type                                                             | Default |
| ----------- | -------------- | ---------------------------------------------------------------- | ------- |
| size        | 尺寸           | `enum` - `'large'\| 'small'`                                     | —       |
| type        | 类型           | `enum` - `'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'` | —       |
| plain       | 是否朴素按钮   | `boolean`                                                        | false   |
| round       | 是否圆角按钮   | `boolean`                                                        | false   |
| circle      | 是否圆形按钮   | `boolean`                                                        | false   |
| loading     | 是否加载中状态 | `boolean`                                                        | false   |
| disabled    | 是否禁用状态   | `boolean`                                                        | false   |
| icon        | 图标类名       | `string`                                                         | —       |
| autofocus   | 是否默认聚焦   | `boolean`                                                        | false   |
| native-type | 原生 type 属性 | `enum` - `'button'\| 'submit'\| 'reset'`                         | button  |
