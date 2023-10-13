<template>
    <Transition name="close">
        <div class="vk-alert" :class="{
            [`vk-alert--${type}`]: type,
            [`vk-alert--${effect}`]: effect,
        }" v-show="!close">
            <div class="vk-alert__context">
                <span v-show="showIcon" style="margin-right: 5px;">
                    <Icon :icon="icon" size="1x"></Icon>
                </span>
                <span>
                    <slot>{{ context }}</slot>
                </span>
            </div>
            <div class="vk-alert__closeable" v-if="closable" @click="handleClose">
                <slot name="canClose">
                    <Icon icon="close"></Icon>
                </slot>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { AlertProps, AlertEvents } from './types'
import Icon from '../Icon/Icon.vue';
defineOptions({ name: 'VkAlert' })
const props = withDefaults(defineProps<AlertProps>(), {
    type: 'info',
    effect: 'light',
    closable: true,
})
const close = ref(false)
const emits = defineEmits<AlertEvents>()
function handleClose() {
    emits('close')
    close.value = true
}
let icon = ref('')
switch (props.type) {
    case 'danger':
        icon.value = 'times-circle'
        break
    case 'info':
        icon.value = 'info-circle'
        break
    case 'warning':
        icon.value = 'exclamation-circle'
        break
    case 'success':
        icon.value = 'check-circle'
        break
    default:
        icon.value = 'info-circle'
}

</script>

<style scoped></style>