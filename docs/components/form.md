---
title: Form
---

# Form 表单

表单包含 输入框, 单选框, 下拉选择, 多选框 等用户输入的组件。 使用表单，您可以收集、验证和提交数据。

## 典型表单

最基础的表单包括各种输入表单项，比如 input、select、radio、checkbox 等。

在每一个 form 组件中，你需要一个 form-item 字段作为输入项的容器，用于获取值与验证值。

<preview path="../demo/Form/basic.vue"></preview>

## 表单校验

Form 组件允许你验证用户的输入是否符合规范，来帮助你找到和纠正错误。

Form 组件提供了表单验证的功能，只需为 rules 属性传入约定的验证规则，并将 form-Item 的 prop 属性设置为需要验证的特殊键值即可。 更多高级用法可参考 async-validator。

<preview path="../demo/Form/validator.vue"></preview>

## 自定义校验规则

这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。

<preview path="../demo/Form/customValidate.vue"></preview>

## API

### Form 属性

| 参数  | 说明         | 类型     | 可选值 | 默认值 |
| ----- | ------------ | -------- | ------ | ------ |
| model | 表单数据对象 | `object` | ——     | ——     |
| rules | 表单验证规则 | `object` | ——     | ——     |

### Form Methods

| Name          | Description                                                | Type                     |
| ------------- | ---------------------------------------------------------- | ------------------------ |
| validate      | 对整个表单进行校验的方法                                   | `() => Promise(any)`     |
| resetFields   | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果 | `(props: array) => void` |
| clearValidate | 移除表单项的校验结果                                       | `(props: array) => void` |

### Form-Item 属性

| 参数  | 说明                                                                         | 类型     | 可选值                            | 默认值 |
| ----- | ---------------------------------------------------------------------------- | -------- | --------------------------------- | ------ |
| label | 标签文本                                                                     | `string` | ——                                | ——     |
| prop  | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | `string` | 传入 Form 组件的 `model` 中的字段 | ——     |

### Form-Item Methods

| Name          | Description                                          | Type                                 |
| ------------- | ---------------------------------------------------- | ------------------------------------ |
| validate      | 对表单项进行校验的方法                               | `(trigger?: string) => Promise<any>` |
| resetFields   | 对该表单项进行重置，将其值重置为初始值并移除校验结果 | `() => void`                         |
| clearValidate | 移除该表单项的校验结果                               | `() => void`                         |

### Form-Item expose 属性

| 参数           | 说明               | 类型     |
| -------------- | ------------------ | -------- |
| validateStatus | 验证结果的状态对象 | `object` |
