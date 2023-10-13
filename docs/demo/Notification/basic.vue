<script setup>
import { createNotify } from '@/components/Notification/method.ts'
import Button from '@/components/Button/Button.vue'
import { h } from 'vue'
const open = () => {
    createNotify({ title: '这是一条消息提示', message: 'Hello world' })
}
const open2 = () => {
    createNotify({ title: 'VNode 创建', message: h('b', '内容可以是 VNode') })
}
</script>

<template>
    <div class="basic block">
        <Button @click="open" type="primary"> 打开消息提示 </Button>
        <Button @click="open2"> VNode </Button>
    </div>
</template>
<style></style>
