---
title: Collapse
---

# Collapse 折叠面板

通过折叠面板收纳内容区域

## 基础用法

可同时展开多个面板，面板之间不影响

<preview path="../demo/Collapse/basic.vue"></preview>

## 手风琴效果

每次只能展开一个面板,通过 `accordion` 属性来设置是否以手风琴模式显示。

<preview path="../demo/Collapse/accordion.vue"></preview>

## API

### Collapse 属性

| 参数      | 说明               | 类型              | 可选值 | 默认值 |
| --------- | ------------------ | ----------------- | ------ | ------ |
| v-model   | 当前激活的面板     | `string \| Array` | ——     | ——     |
| accordion | 是否开启手风琴模式 | `boolean`         | ——     | false  |

### Collapse 事件

| Name   | Description                                                                            | Type                             |
| ------ | -------------------------------------------------------------------------------------- | -------------------------------- |
| change | 当前激活面板改变时触发(如果是手风琴模式，参数 activeNames 类型为 string，否则为 array) | `	(activeNames: array \| string)` |

### Collapse Item 属性

| 参数     | 说明       | 类型               | 可选值 | 默认值 |
| -------- | ---------- | ------------------ | ------ | ------ |
| name     | 唯一标志符 | `string \| number` | ——     | ——     |
| title    | 面板标题   | `string`           | ——     | ——     |
| disabled | 是否禁用   | `	boolean`          | ——     | false  |
