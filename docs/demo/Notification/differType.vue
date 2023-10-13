<script setup>
import { createNotify } from '@/components/Notification/method.ts'
import Button from '@/components/Button/Button.vue'
const open = (type) => {
    createNotify({ title: '这是一条消息提示', message: 'hello world', type })
}
</script>
<template>
    <div class="basic block">
        <Button @click="open('success')"> Success </Button>
        <Button @click="open('info')"> Info </Button>
        <Button @click="open('warning')"> warning </Button>
        <Button @click="open('danger')"> Danger </Button>
    </div>
</template>