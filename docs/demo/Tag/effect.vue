
<template>
    <div class="basic block">
        <div>
            <span style="margin-right: 10px;">dark </span>
            <Tag v-for="tag in tags" :key="tag.name" :type="tag.type" effect="dark">
                {{ tag.name }}
            </Tag>
        </div>
        <div style="margin-top: 10px;">
            <span style="margin-right: 10px;">plain</span>
            <Tag v-for="tag in tags" :key="tag.name" :type="tag.type" effect="plain">
                {{ tag.name }}
            </Tag>
        </div>
    </div>
</template>
<script setup>
import { reactive } from 'vue'
import Tag from '@/components/Tag/Tag.vue'
const tags = reactive([
    { name: '标签一', type: 'primary' },
    { name: '标签二', type: 'success' },
    { name: '标签三', type: 'warning' },
    { name: '标签四', type: 'danger' },
    { name: '标签五', type: 'info' },
])
</script>

<style scoped>
.block {
    margin-bottom: 10px;
}
</style>



