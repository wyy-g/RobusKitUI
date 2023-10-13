<template>
    <div class="container">
        <ul ref="list" class="list">
            <li v-for="(_, index) of Array(40)" :key="index">This is the content</li>
        </ul>
        <BackTop target=".list" :style="{ position: 'absolute' }"></BackTop>
    </div>
</template>
<script setup>
import BackTop from '@/components/BackTop/BackTop.vue'
</script>
<style>
.container {
    position: relative;
}

.list {
    overflow-y: auto;
    height: 200px;
}

li {
    line-height: 30px;
}
</style>