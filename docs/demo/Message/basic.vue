<script setup>
import { createMessage } from '@/components/Message/methods.ts'
import Button from '@/components/Button/Button.vue'
import { h } from 'vue'
const open = () => {
    createMessage({ message: '这是一条消息提示' })
}
const open2 = () => {
    createMessage({ message: h('b', '内容可以是 VNode') })
}
</script>

<template>
    <div class="basic block">
        <Button @click="open"> 打开消息提示 </Button>
        <Button @click="open2"> VNode </Button>
    </div>
</template>
<style></style>
