<template>
    <i class="vk-icon" :class="{ [`vk-icon--${type}`]: type }" :style="customStyles" v-bind="$attrs">
        <font-awesome-icon v-bind="filteredProps" />
    </i>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { omit } from 'lodash-es'
// 会报错使用setup语法从第三方库引入类型会报错
// import type { FontAwesomeIconProps } from '@fortawesome/vue-fontawesome'
import type { IconProps } from './types'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
defineOptions({ name: 'VkIcon', inheritAttrs: false })
const props = defineProps<IconProps>()
// 过滤属性， 把自己定义的属性过滤出去
const filteredProps = computed(() => omit(props, ['type', 'color']))
// console.log('filteredProps', filteredProps)
const customStyles = computed(() => {
    return props.color ? { color: props.color } : {}
})
</script>

<style scoped></style>