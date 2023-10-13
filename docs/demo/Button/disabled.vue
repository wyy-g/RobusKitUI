<script setup>
import Button from '@/components/Button/Button.vue'
</script>

<template>
    <div class="basic block">
        <Button disabled>默认按钮</Button>
        <Button type="primary" disabled>主要按钮</Button>
        <Button type="success" disabled>成功按钮</Button>
        <Button type="info" disabled>信息按钮</Button>
        <Button type="warning" disabled>警告按钮</Button>
        <Button type="danger" disabled>危险按钮</Button>
    </div>
</template>
<style>
.block {
    margin-bottom: 10px;
}
</style>



