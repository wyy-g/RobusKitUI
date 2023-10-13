---
title: Dropdown
description: Dropdown 组件的文档
---

# Dropdown 下拉菜单

将动作或菜单折叠到下拉菜单中。

## 基础用法

悬停在下拉菜单上以展开更多操作。

<preview path="../demo/Dropdown/basic.vue"></preview>

## 触发方式

可以配置点击激活或者悬停激活。将 trigger 属性设置为 click 即可， 默认为 hover。

<preview path="../demo/Dropdown/triggerMode.vue"></preview>

## 手动打开关闭

将 manual 属性设置为 true 即可， 然后可以使用实例上面的 show 和 hide 方法打开关闭下拉菜单。

<preview path="../demo/Dropdown/manual.vue"></preview>

## API

### dropdown 属性

| 参数           | 说明                     | 类型           | 可选值             | 默认值  |
| -------------- | ------------------------ | -------------- | ------------------ | ------- |
| menuOptions    | 菜单选项                 | `MenuOption[]` | ——                 | []      |
| placement      | 菜单位置                 | `string`       | ——                 | bottom  |
| trigger        | 触发方式                 | `string`       | `hover` \| `click` | `hover` |
| manual         | 是否开启手动触发模式     | `boolean`      | ——                 | `fasle` |
| hideAfterClick | 点击以后是否自动隐藏菜单 | `number`       | `boolean`          | `true`  |
| transition     | transition name          | `string`       | ——                 | ——      |

### MenuOption

| Name     | Description    | Type                 | Default |
| -------- | -------------- | -------------------- | ------- |
| label    | 菜单展示标签   | `string` \| `vNode`  | ——      |
| key      | 菜单选项 Key   | `string` \| `number` | ——      |
| disabled | 是否禁用       | `boolean`            | `false` |
| divided  | 是否显示分隔符 | `boolean`            | `false` |

### dropdown 事件

| Name           | Description                    | Type                      |
| -------------- | ------------------------------ | ------------------------- |
| visible-change | 当 tooltip 展示/隐藏时被触发   | `(e: boolean) => void`    |
| select         | 当选择到某一个选项的时候被触发 | `(e: MenuOption) => void` |

### dropdown Exposes

| Name | Description          | Type                              |
| ---- | -------------------- | --------------------------------- |
| show | expose show function | `(e: Event \| undefined) => void` |
| hide | expose hide function | `(e: Event \| undefined) => void` |
