<template>
    <div class="vk-tag" :class="{
        [`vk-tag--${type}`]: type,
        [`vk-tag--${size}`]: size,
        [`vk-tag--${effect}`]: effect
    }" v-show="!close">
        <span>
            <slot></slot>
        </span>
        <span class="vk-tag__icon" v-show="closable" @click="handleClose">
            <Icon icon="close" size="sm"></Icon>
        </span>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TagProps } from './types'
import Icon from '../Icon/Icon.vue';
defineOptions({ name: 'VkTag' })
defineProps(TagProps)
const emits = defineEmits(['close'])
const close = ref<Boolean>(false)
function handleClose() {
    emits('close')
    close.value = true
}
</script>

<style scoped></style>