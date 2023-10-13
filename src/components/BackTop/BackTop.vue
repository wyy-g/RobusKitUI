<template>
    <Transition name="fade">
        <div class="vk-backtop" v-show="isShowBackUp" :style="{
            right: `${right}px`,
            bottom: `${bottom}px`
        }" @click="handleClick">
            <div class="vk-backtop__container">
                <slot>
                    <Icon icon="angle-double-up" type="primary"></Icon>
                </slot>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { throttle } from 'lodash-es'
import type { BackTopProps, BackTopEmits } from './types'
import Icon from '../Icon/Icon.vue'
defineOptions({ name: 'VkBacktop' })
const props = withDefaults(defineProps<BackTopProps>(), {
    visibilityHeight: 200,
    right: 40,
    bottom: 40
})
const emits = defineEmits<BackTopEmits>()
const isShowBackUp = ref(false)
const el = ref<HTMLElement | null>(null)
const container = ref<Document | HTMLElement | null>(null)

// 滚动条什么时候显示
const scrollShow = () => {
    isShowBackUp.value = el.value?.scrollTop as number >= props.visibilityHeight
}
const throttleScrollShow = throttle(scrollShow, 300)

const handleClick = (event: MouseEvent) => {
    scrollToTop()
    emits('click', event)
}

// 缓动函数
function easeInOutCubic(x: number): number {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

const scrollToTop = () => {
    const beginTime = Date.now();
    const beginValue = el.value?.scrollTop as number;
    const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16))
    const frameFunc = () => {
        const progress = (Date.now() - beginTime) / 500;  //设置速率 500 毫秒内返回页面顶部
        if (el.value) {
            if (progress < 1) {
                el.value.scrollTop = beginValue * (1 - easeInOutCubic(progress));
                rAF(frameFunc);
            } else {
                // 超过 500 直接返回页面顶部
                el.value.scrollTop = 0;
            }
        }
    };
    rAF(frameFunc)
}


onMounted(() => {
    container.value = document
    el.value = document.documentElement
    if (props.target) {
        if (typeof props.target === 'string') {
            el.value = document.querySelector(props.target)
        }
        if (!el.value) {
            throw (`target is not existed: ${props.target}`)
        }
        container.value = el.value
    }
    container.value?.addEventListener('scroll', throttleScrollShow)
})
onUnmounted(() => {
    container.value?.removeEventListener('scroll', throttleScrollShow)
})
</script>

<style scoped></style>