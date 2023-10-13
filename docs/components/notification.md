---
title: Notification
---

# Notification 通知

悬浮出现在页面角落，显示全局的通知提醒消息。

## 基本用法

注册了一个 createNotifa 方法用于调用。 你可以通过设置 title 和 message 属性来设置通知的标题和正文内容。默认情况下，通知在 3000 毫秒后自动关闭，但你可以通过设置 duration 属性来自定义通知的展示时间。 如果你将它设置为 0，那么通知将不会自动关闭。 需要注意的是 duration 接收一个 Number，单位为毫秒。

<preview path="../demo/Notification/basic.vue"></preview>

## 不同类型的通知

用来显示「成功、警告、消息、错误」类的操作反馈。设置 type 字段可以定义不同的状态，默认为 info。

<preview path="../demo/Notification/differType.vue"></preview>

## Notification 配置项

使用 createNotifa 创建通知，它接受一个 Object，以下是 Object 中的属性列表。

| 参数      | 说明                                         | 类型           | 可选值                                       | 默认值 |
| --------- | -------------------------------------------- | -------------- | -------------------------------------------- | ------ |
| title     | 标题                                         | string         | ——                                           | ——     |
| message   | 消息文字                                     | string / VNode | ——                                           | ——     |
| type      | 类型                                         | string         | `success` \| `warning` \| `danger` \| `info` | info   |
| showClose | 是否显示关闭按钮                             | boolean        | ——                                           | false  |
| offset    | Message 距离窗口顶部的偏移量                 | number         | ——                                           | 20     |
| duration  | 显示时间，单位为毫秒。 设为 0 则不会自动关闭 | number         | ——                                           | 3000   |

## Notification 方法

调用 createNotifa 会返回当前 Notification 的实例。 如果需要手动关闭实例，可以调用它的 close 方法。

| Name  | Description        | Type         |
| ----- | ------------------ | ------------ |
| close | 关闭当前的 Message | `() => void` |
