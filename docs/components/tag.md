---
title: Tag
---

# Tag 标签

用于标记和选择。

## 基础用法

由 `type` 属性来选择 tag 的类型

<preview path="../demo/Tag/basic.vue" ></preview>

## 可移除标签

设置 `closable`属性可以定义一个标签是否可移除

<preview path="../demo/Tag/closeable.vue" ></preview>

## 动态编辑标签

动态编辑标签可以通过点击标签关闭按钮后触发的 `close` 事件来实现

<preview path="../demo/Tag/dynamicEdit.vue" ></preview>

## 不同尺寸

Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

<preview path="../demo/Tag/size.vue" ></preview>

## 不同主题

Tag 组件提供了三个不同的主题：`dark、light 和 plain`

<preview path="../demo/Tag/effect.vue" ></preview>

## API

### tag 属性

| 参数     | 说明           | 类型    | 可选值                                                   | 默认值 |
| -------- | -------------- | ------- | -------------------------------------------------------- | ------ |
| type     | 类型           | string  | `parmary` \|`success` \| `warning` \| `danger` \| `info` | info   |
| effect   | 选择提供的主题 | string  | `light` \| `dark` \|`plain`                              | light  |
| closable | 是否可关闭     | boolean | ——                                                       | true   |
| size     | 尺寸           | string  | `medium` \| `small` \| `mini`                            | ——     |

<!-- ### tag 事件

| 事件名称 | 说明                  | 回调参数 |
| -------- | --------------------- | -------- |
| close    | 关闭 tag 时触发的事件 | ——       | -->
