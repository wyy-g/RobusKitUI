<script setup lang="ts">
import { ref, onMounted, h } from 'vue'
import Button from './components/Button/Button.vue'
import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
import Icon from './components/Icon/Icon.vue'
import Alert from './components/Alert/Alert.vue'
import Tag from './components/Tag/Tag.vue'
import Tooltip from './components/Tooltip/Tooltip.vue'
import Popconfirm from './components/Popconfirm/Popconfirm.vue'
import BackTop from './components/BackTop/BackTop.vue'
// import Message from './components/Message/Message.vue'
// import Notification from './components/Notification/Notification.vue'
import Input from './components/Input/Input.vue'
import Dropdown from './components/Dropdown/Dropdown.vue'
import { createMessage } from './components/Message/methods'
import { createNotify } from './components/Notification/method'
import type { ButtonInstance } from './components/Button/types'
const buttonRef = ref<ButtonInstance | null>(null)
const openCollapse = ref(['a'])
const inputValue1 = ref('a')
const handleChange = (activeNames: (number | string)[]) => {
  console.log(activeNames)
}
const handleClose = () => {
  alert('hello')
}
const trigger = 'click'
onMounted(() => {
  createMessage({ message: '11111111', showClose: true, duration: 0, })
  createNotify({ title: '我是标题', message: '123222222', duration: 0, type: "danger" })
  createNotify({ title: '2222', message: '123222222', showClose: false, duration: 0 })
  // createNotify({ title: '我是标题', message: '123222222', showClose: false, duration: 0 })
  if (buttonRef.value) {
    console.log(buttonRef.value.ref)
  }
})
// Popconfirm事件
const handleCancel = () => {
  console.log('Popconfirm事件handleCancel')
}
const options = [
  { key: 1, label: h('b', 'this is bold') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4' }
]
</script>

<template>
  <Input type="text" v-model="inputValue1" disabled>
  <template #prepend></template>
  <template #prefix></template>
  </Input>
  <!-- <Message message="hello word" :duration="0" :show-close="true" /> -->
  <!-- <Notification title="测试标题" message="这是内容"></Notification> -->
  <Popconfirm title="测试Popconfirm标题" @cancel="handleCancel"><Button>测试</Button></Popconfirm>
  <div>
    <Button type="danger" plain disabled ref="buttonRef">Test Button</Button>
    <Button type="warning" plain ref="buttonRef">Test Button</Button>
    <Button type="primary" ref="buttonRef" size="small">Test Button</Button>
    <Button type="info" ref="buttonRef" round>Test Button</Button>
    <Button type="success" loading>loading</Button>
    <Button type="success" size="large" icon="arrow-up">icon</Button>
    <a href="">你好</a>
  </div>
  <div>
    <Dropdown :menu-options="options">
      <Button type="primary"> Hover 下拉菜单 </Button>
    </Dropdown>
  </div>
  <div>
    <Collapse v-model="openCollapse" accordion @change="handleChange">
      <CollapseItem name="a" title="折叠1">
        <div>折叠1的内容</div>
      </CollapseItem>
      <CollapseItem name="b" title="折叠2" disabled>
        <div>折叠2的内容</div>
      </CollapseItem>
      <CollapseItem name="c">
        <template #title>
          <p>具名插槽-标题c</p>
        </template>
        <div>折叠3的内容</div>
      </CollapseItem>
    </Collapse>
    {{ openCollapse }}
  </div>
  <Icon icon="arrow-up" size="2xl" type="primary"></Icon>
  <Alert context="这是context" type="success" show-icon>123</Alert>
  <Alert context="这是context" type="warning" show-icon>test</Alert>
  <Alert context="这是context" type="info" effect="dark" @close="handleClose" show-icon>dark</Alert>
  <Alert context="这是context" type="danger" effect="dark" :closable="false" show-icon>dark</Alert>
  <div>
    <Tag closable>tag-text</Tag>
    <Tag type="danger">tag-text</Tag>
    <Tag type="info">tag-text</Tag>
    <Tag type="success">tag-text</Tag>
  </div>
  <div>
    <Tag closable effect="dark">tag-text</Tag>
    <Tag type="danger" effect="dark">tag-text</Tag>
    <Tag type="info" effect="plain">tag-text</Tag>
    <Tag type="success" effect="plain">tag-text</Tag>
  </div>
  <div>
    <Tag size="default">tag-text</Tag>
    <Tag size="medium" closable>tag-text</Tag>
    <Tag size="mini" closable>tag-text</Tag>
    <Tag size="small" closable>tag-text</Tag>
  </div>
  <div>
    <Tooltip content="默认" placement="top" :trigger="trigger">
      <Button>测试tooltip</Button>
    </Tooltip>
  </div>
  <BackTop>
    <!-- <div style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }">
      UP
    </div> -->
  </BackTop>
</template>