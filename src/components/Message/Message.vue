<template>
    <Transition :name="transitionName" @enter="updateHeight" @after-leave="destoryComponent">
        <div class="vk-message" :class="{
            [`vk-message--${type}`]: type,
            'is-close': showClose
        }" v-show="visible" ref="messageRef" :style="cssStyle" @mouseenter="clearTimer" @mouseleave="startTimer">
            <div class="vk-message__content">
                <slot>
                    <RanderVnode :v-node="message" v-if="message" />
                </slot>
            </div>
            <div class="vk-message__close" v-show="showClose">
                <Icon @click.stop="visible = false" icon="xmark" />
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, } from 'vue'
import type { MessageProps } from './types'
import RanderVnode from '../Common/RenderVnode'
import Icon from '../Icon/Icon.vue'
import { getLastBottomOffset } from './methods'
import useEventListener from '../../hooks/useEventListener'
defineOptions({ name: 'VkMessage' })
const props = withDefaults(defineProps<MessageProps>(), {
    duration: 3000,
    type: 'info',
    offset: 20,
    transitionName: 'fade-up'
})

let timer: any
function startTimer() {
    if (props.duration === 0) return
    timer = setTimeout(() => { visible.value = false }, props.duration)
}

function clearTimer() {
    clearTimeout(timer)
}

const visible = ref(false)
const messageRef = ref<HTMLElement>()
// 计算偏移高度 这个 div 的高度
const height = ref(0)
// 上一个实例的最下面的坐标数字， 第一个是0
const lastOffset = computed(() => getLastBottomOffset(props.id))
// 这个元素应该使用的top
const topOffset = computed(() => props.offset + lastOffset.value)
// 这个元素为下一个元素预留的 offset，也就是它最低端的 bottom 的 值
const bottomOffset = computed(() => height.value + topOffset.value)

const cssStyle = computed(() => ({
    top: topOffset.value + 'px',
    zIndex: props.zIndex
}))

onMounted(async () => {
    visible.value = true
    startTimer()
    // await nextTick()
    // height.value = messageRef.value!.getBoundingClientRect().height
})

// watch(visible, (newValue) => {
//     if (!newValue) {
//         props.onDestory()
//     }
// })

function destoryComponent() {
    props.onDestory()
}

function updateHeight() {
    height.value = messageRef.value!.getBoundingClientRect().height
}

function keydown(e: Event) {
    const event = e as KeyboardEvent
    if (event.code === 'Escape') {
        visible.value = false
    }
}
useEventListener(document, 'keydown', keydown)

defineExpose({
    bottomOffset,
    visible
})
</script>

<style></style>