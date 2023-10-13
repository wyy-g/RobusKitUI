<template>
    <div class="container">
        <ul class="list1">
            <li v-for="(_, index) of Array(40)" :key="index">This is the content</li>
        </ul>
        <BackTop target=".list1" :style="{ position: 'absolute' }">
            <Button circle>up</Button>
        </BackTop>
    </div>
</template>
<script setup>
import BackTop from '@/components/BackTop/BackTop.vue'
import Button from '@/components/Button/Button.vue'
</script>
<style>
.container {
    position: relative;
}

.list1 {
    overflow-y: auto;
    height: 200px;
}

li {
    line-height: 30px;
}
</style>