<script setup>
import Tag from '@/components/Tag/Tag.vue'
</script>

<template>
    <div class="basic block">
        <Tag>默认标签一</Tag>
        <Tag type="success">标签二</Tag>
        <Tag type="info">标签三</Tag>
        <Tag type="warning">标签四</Tag>
        <Tag type="danger">标签五</Tag>
    </div>
</template>
<style>
.block {
    margin-bottom: 10px;
}
</style>



