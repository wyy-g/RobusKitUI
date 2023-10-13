<template>
    <div class="vk-tooltip" v-on="outEvents" ref="popperContainerNode">
        <div class="vk-tooltip__trigger" ref="triggerNode" v-on="events">
            <slot></slot>
        </div>
        <Transition :name="transition">
            <div class="vk-tooltip__popper" v-if="isOpen" ref="popperNode" @mouseenter="openFinal">
                <slot name="content">
                    {{ content }}
                </slot>
                <div id="arrow" data-popper-arrow></div>
            </div>
        </Transition>

    </div>
</template>

<script setup lang="ts">
import { ref, watch, reactive, onUnmounted, computed } from 'vue';
import { createPopper } from '@popperjs/core';
import type { Instance } from '@popperjs/core';
import { debounce } from 'lodash-es';
import type { TooltipEmits, TooltipProps, TooltipInstance } from './types'
import useClickOutside from '../../hooks/useClickOutside'
defineOptions({ name: 'VkTooltip' })
const props = withDefaults(defineProps<TooltipProps>(), {
    placement: 'bottom',
    trigger: 'hover',
    transition: 'fade',
    openDelay: 0,
    closeDelay: 0
})
const emits = defineEmits<TooltipEmits>()
const isOpen = ref(false)  //popper是否打开
const triggerNode = ref<HTMLElement>() //获取trigger节点
const popperNode = ref<HTMLElement>()  //获取popper节点
const popperContainerNode = ref<HTMLElement>() // 获取tooltip(最大的)节点 
const popperOptions = computed(() => {
    return {
        placement: props.placement,
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 9]
                }
            }
        ],
        ...props.popperOptions
    }
})
// 点击的事件
function togglePopper() {
    if (isOpen.value) {
        closeFinal()
    } else {
        openFinal()
    }
    emits('visible-change', isOpen.value)
}
// 鼠标进入的事件
function open() {
    isOpen.value = true
    emits('visible-change', true)
}
// 鼠标离开的事件
function close() {
    isOpen.value = false
    emits('visible-change', false)
}

const openDebounce = debounce(open, props.openDelay)
const closeDebounce = debounce(close, props.closeDelay)
const openFinal = () => {
    closeDebounce.cancel()
    openDebounce()
}
const closeFinal = () => {
    openDebounce.cancel()
    closeDebounce()
}

// 点击盒子意外触发的自定义函数，用于关闭popper
useClickOutside(popperContainerNode, () => {
    if (props.trigger === 'click' && isOpen.value === true && !props.manual) {
        closeFinal()
    }
    if (isOpen.value) {
        emits('click-outside', true)
    }
})

// 动态事件的修改
let events: Record<string, any> = reactive({})
// 这个事件添加到父组件上，避免鼠标离开的时候不能对popper层操作
let outEvents: Record<string, any> = reactive({})
// 根据props.trigger的值为events添加事件
function attachEvents() {
    if (props.trigger === 'click') {
        events['click'] = togglePopper
    } else if (props.trigger === 'hover') {
        // 鼠标进入
        events['mouseenter'] = openFinal
        outEvents['mouseleave'] = closeFinal
    }
}
// 如果不是手动模式就添加事件
if (!props.manual) {
    // 初始化的时候执行attachevents 绑定事件 用v-on=events == v-on={'事件名（click）': 事件执行的函数} 
    attachEvents()
}

// 监听props.manual,
watch(() => props.manual, (isManual) => {
    if (isManual) {
        events = {}
        outEvents = {}
    } else {
        attachEvents()
    }
})

// 监听props.trigger, 变化的时候重新执行attchEvents
watch(() => props.trigger, (newTrigger, oldTrigger) => {
    if (newTrigger !== oldTrigger) {
        // 先清空
        events = {}
        outEvents = {}
        attachEvents()
    }
})

let poperInstance: Instance | null = null
watch(isOpen, (newValue) => {
    if (newValue) {
        if (triggerNode.value && popperNode.value) {
            poperInstance = createPopper(triggerNode.value, popperNode.value, popperOptions.value)
        } else {
            poperInstance?.destroy()
        }
    }
}, { flush: 'post' })

onUnmounted(() => {
    poperInstance?.destroy()
})

defineExpose<TooltipInstance>({
    'show': openFinal,
    'hide': closeFinal
})
</script>

<style scoped></style>