<template>
    <div class="vk-popconfirm" ref="popconfirmNode">
        <div class="vk-popconfirm__trigger" @click="handleClick" ref="triggerNode">
            <slot></slot>
        </div>
        <Transition name="fade">
            <div class="vk-popconfirm__popper" v-show="isOpen" ref="popperNode">
                <div class="vk-popconfirm__title">
                    <span>
                        <Icon :icon="icon" :color="iconColor" v-if="!hideIcon"></Icon>
                        {{ title }}
                    </span>
                </div>
                <div class="vk-popconfirm__button">
                    <Button type="info" size="small" @click="handleCancel">{{ cancelText }}</Button>
                    <Button type="primary" size="small" @click="handleConfirm">{{ confirmText }}</Button>
                </div>
                <div id="arrow" data-popper-arrow></div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { createPopper } from '@popperjs/core';
import type { Instance } from '@popperjs/core';
import type { PopconfirmProps, PopconfirmEmits } from './types'
import Button from '../Button/Button.vue'
import Icon from '../Icon/Icon.vue';
import useClickOutside from '@/hooks/useClickOutside';
defineOptions({ name: 'VkPopconfirm' })
withDefaults(defineProps<PopconfirmProps>(), {
    confirmText: '确认',
    cancelText: '取消',
    icon: 'question-circle',
    iconColor: '#e6a23c',
    hideIcon: false
})
const emits = defineEmits<PopconfirmEmits>()
const popconfirmNode = ref<HTMLElement | undefined>()
const triggerNode = ref<HTMLElement>() //获取trigger节点
const popperNode = ref<HTMLElement>()  //获取popper节点
useClickOutside(popconfirmNode, () => {
    if (popconfirmNode.value && isOpen.value) {
        isOpen.value = false
    }
})
const isOpen = ref(false)
function handleClick() {
    isOpen.value = !isOpen.value
}
function handleCancel() {
    if (isOpen.value) {
        isOpen.value = false
    }
    emits('cancel')
}
function handleConfirm() {
    if (isOpen.value) {
        isOpen.value = false
    }
    emits('confirm')
}
let poperInstance: Instance | null = null
watch(isOpen, (newValue) => {
    if (newValue) {
        if (triggerNode.value && popperNode.value) {
            poperInstance = createPopper(triggerNode.value, popperNode.value, {
                placement: 'bottom', modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 9]
                        }
                    }
                ],
            })
        } else {
            poperInstance?.destroy()
        }
    }
}, { flush: 'post' })
</script>

<style scoped></style>