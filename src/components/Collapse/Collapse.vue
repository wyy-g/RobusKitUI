<template>
    <div class="vk-collapse">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { ref, provide, watch } from 'vue';
import type { NameType, CollapseEmits, CollapseProps } from './types'
import { collapseContextKey } from './types'
defineOptions({
    name: 'VkCollapse'
})
const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()
const activeNames = ref<NameType[]>(props.modelValue)
watch(() => props.modelValue, () => {
    activeNames.value = props.modelValue
})
if (props.accordion && activeNames.value.length > 1) {
    console.warn('accordion mode should only have one active item')
}
const handleItemClick = (item: NameType) => {
    if (props.accordion) {
        activeNames.value = [activeNames.value[0] === item ? '' : item]
    } else {
        const index = activeNames.value.indexOf(item)
        if (index > -1) {
            // 存在就删除数组中的一项
            activeNames.value.splice(index, 1)
        } else {
            // 不存在就插入到数组
            activeNames.value.push(item)
        }
    }

    emits('update:modelValue', activeNames.value)
    emits('change', activeNames.value)
}
provide(collapseContextKey, {
    activeNames,
    handleItemClick
})
</script>

<style scoped></style>