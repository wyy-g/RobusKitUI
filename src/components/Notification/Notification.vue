<template>
    <Transition name="fade-up" @enter="updateHeight" @after-leave="destoryComponent">
        <div class="vk-notification" v-if="visible" :class="{ [`vk-notification__${type}`]: type }" :style="cssStyle"
            ref="notifaRef" @mouseenter="clearTime" @mouseleave="startTimer">
            <div class="vk-notification__title">
                <div>
                    <span v-if="type" class="show-icon">
                        <Icon :icon="iconStyle" :type="type" size="lg"></Icon>
                    </span>
                    <span class="title">{{ title }}</span>
                </div>

                <span v-if="showClose" @click="noVisible" style="cursor: pointer;">
                    <Icon icon="xmark"></Icon>
                </span>
            </div>
            <div class="vk-notification__content">
                <RanderVnode :v-node="message" v-if="message" />
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { onMounted, ref, computed, nextTick } from 'vue'
import type { NotificationProps, } from './types'
import { getLastBottomOffset } from './method'
import RanderVnode from '../Common/RenderVnode'
import Icon from '../Icon/Icon.vue'
defineOptions({ name: 'VkNotification' })
const props = withDefaults(defineProps<NotificationProps>(), {
    duration: 4500,
    showClose: true,
    offset: 20
})
const notifaRef = ref<HTMLElement>()
const visible = ref(true)
let timer: any
function startTimer() {
    if (props.duration !== 0) {
        timer = setTimeout(() => {
            visible.value = false
        }, props.duration);
    }

}
function clearTime() {
    clearTimeout(timer)
}
onMounted(async () => {
    startTimer()
    await nextTick()
    height.value = notifaRef.value!.getBoundingClientRect().height
})

function noVisible() {
    visible.value = false
    props.destory!()
}

function updateHeight() {
    height.value = notifaRef.value!.getBoundingClientRect().height
}

function destoryComponent() {
    props.destory!()
}

// 计算div的高度
const height = ref(0)
// 上一个实例最下面的高度
const lastOffset = computed(() => getLastBottomOffset(props.id!))
const topOffset = computed(() => (props.offset + lastOffset.value))
const bottomOffset = computed(() => height.value + topOffset.value)

let iconStyle = ref('')
switch (props.type) {
    case 'danger':
        iconStyle.value = 'times-circle'
        break
    case 'info':
        iconStyle.value = 'info-circle'
        break
    case 'warning':
        iconStyle.value = 'exclamation-circle'
        break
    case 'success':
        iconStyle.value = 'check-circle'
        break
    default:
        iconStyle.value = 'info-circle'
}

const cssStyle = computed(() => ({
    top: topOffset.value + 'px'
}))

defineExpose({
    bottomOffset
})



</script>

<style scoped></style>