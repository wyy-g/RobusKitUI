<template>
  <div class="vk-select" :class="{ 'is-disabled': disabled }" @click="toggleDropdown"
    @mouseenter="states.mouseHover = true" @mouseleave="states.mouseHover = false">
    <Tooltip placement="bottom-start" manual ref="tooltipRef" :popperOptions="popperOptions"
      @click-outside="controlDropdown(false)">
      <Input v-model="states.inputValue" :placeholder="filteredPlaceholder" :disabled="disabled"
        :readonly="!filterable || !isDropdownShow" ref="inputRef" @input="debounceOnFilter" @keydown="handleKeydown">
      <template #suffix>
        <Icon icon="circle-xmark" v-if="showClearIcon" class="vk-input__clear" @mousedown.prevent="NOOP"
          @click.stop="onClear">
        </Icon>
        <Icon icon="angle-down" v-else class="header-angle" :class="{ 'is-active': isDropdownShow }"></Icon>
      </template>
      </Input>
      <template #content>
        <div class="vk-select__loading" v-if="states.loading">
          <Icon icon="spinner" spin />
        </div>
        <div class="vk-select__nodata" v-else-if="filterable && filterOptions.length === 0">
          no data
        </div>
        <ul class="vk-select__menu" v-else>
          <template v-for="(item, index) in filterOptions" :key="index">
            <li class="vk-select__menu-item" :class="{
              'is-disabled': item.disabled,
              'is-selected': states.selectedOption?.value === item.value,
              'is-highlighted': states.highlightIndex === index
            }" :id="`select-item-${item.value}`" @click.stop="itemSelect(item)">
              <RanderVnode :vNode="renderLabel ? renderLabel(item) : item.label"></RanderVnode>
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'
import type { Ref } from 'vue'
import { isFunction, debounce } from 'lodash-es'
import type { SelectEmits, SelectOption, SelectProps, SelectStates } from './types'
import Tooltip from '../Tooltip/Tooltip.vue'
import type { TooltipInstance } from '../Tooltip/types'
import Input from '../Input/Input.vue'
import type { InputInstance } from '../Input/types'
import Icon from '../Icon/Icon.vue'
import RanderVnode from '../Common/RenderVnode'

defineOptions({ name: 'VkSelect' })
const props = withDefaults(defineProps<SelectProps>(), {
  options: () => [],
  disabled: false
})
const emits = defineEmits<SelectEmits>()

const timeout = computed(() => props.remote ? 300 : 0)

const tooltipRef = ref() as Ref<TooltipInstance>
const inputRef = ref() as Ref<InputInstance>
const isDropdownShow = ref(false)

const popperOptions: any = {
  modifiers: [{
    name: 'offset',
    options: {
      offset: [0, 9]
    }
  },
  {
    name: 'sameWidth',
    enabled: true,
    fn: ({ state }: { state: any }) => {
      state.styles.popper.width = `${state.rects.reference.width}px`
    },
    phase: "beforeWrite",
    requires: ["computeStyles"]
  }
  ]
}

const filterOptions = ref(props.options)
watch(() => props.options, (newValue) => {
  filterOptions.value = newValue
})

const generateFilterOptions = async (searchValue: string) => {
  if (!props.filterable) return
  if (props.filterMethod && isFunction(props.filterMethod)) {
    filterOptions.value = props.filterMethod(searchValue)
  } else if (props.remote && props.remoteMethod && isFunction(props.remoteMethod)) {
    states.loading = true
    try {
      filterOptions.value = await props.remoteMethod(searchValue)
    } catch (e) {
      console.error(e)
      filterOptions.value = []
    } finally {
      states.loading = false
    }
  }
  else {
    filterOptions.value = props.options.filter(option => option.label.includes(searchValue))
  }
  states.highlightIndex = -1
}

const onFilter = () => {
  generateFilterOptions(states.inputValue)
}

const debounceOnFilter = debounce(() => {
  onFilter()
}, timeout.value)

const controlDropdown = (show: boolean) => {
  if (show) {
    // filter模式
    // 之前选择过对应的值
    if (props.filterable && states.selectedOption) {
      states.inputValue = ''
    }
    //进行一次默认选项的生成
    if (props.filterable) {
      generateFilterOptions(states.inputValue)
    }
    tooltipRef.value.show()
  } else {
    tooltipRef.value.hide()
    // blur 的时候将之前的值回灌到input中
    if (props.filterable) {
      states.inputValue = states.selectedOption ? states.selectedOption.label : ''
    }
    states.highlightIndex = -1
  }
  isDropdownShow.value = show
  emits('visible-change', show)
}

const handleKeydown = (e: KeyboardEvent) => {
  switch (e.key) {
    case 'Enter':
      if (!isDropdownShow.value) {
        controlDropdown(true)
      } else {
        if (states.highlightIndex > -1 && filterOptions.value[states.highlightIndex]) {
          itemSelect(filterOptions.value[states.highlightIndex])
        } else {
          controlDropdown(false)
        }
      }
      break;
    case 'Escape':
      if (isDropdownShow.value) {
        controlDropdown(false)
      }
      break
    case 'ArrowUp':
      e.preventDefault()
      if (filterOptions.value.length > 0) {
        if (states.highlightIndex === -1 || states.highlightIndex === 0) {
          states.highlightIndex = filterOptions.value.length - 1
        } else {
          states.highlightIndex--
        }
      }
      break
    case 'ArrowDown':
      e.preventDefault()
      if (filterOptions.value.length > 0) {
        if (states.highlightIndex === -1 || states.highlightIndex === (filterOptions.value.length - 1)) {
          states.highlightIndex = 0
        } else {
          states.highlightIndex++
        }
      }
      break
    default:
      break;
  }
}

const showClearIcon = computed(() => {
  // hover 上去
  // props.clearable 为true
  // 必须要有选择过选项
  // Input 的值不能为空
  return props.clearable
    && states.mouseHover
    && states.selectedOption
    && states.inputValue.trim() !== ''
})

const onClear = () => {
  states.selectedOption = null
  states.inputValue = ''
  emits('clear')
  emits('change', '')
  emits('update:modelValue', '')
}

const filteredPlaceholder = computed(() => {
  return (props.filterable && states.selectedOption && isDropdownShow.value)
    ? states.selectedOption.label : props.placeholder
})

const NOOP = () => { }

const toggleDropdown = () => {
  if (props.disabled) return
  if (isDropdownShow.value) {
    controlDropdown(false)
  } else {
    controlDropdown(true)
  }
}

const findOption = (value: string) => {
  const option = props.options.find(option => option.value === value)
  return option ? option : null
}

const initialOption = findOption(props.modelValue)

const states = reactive<SelectStates>({
  inputValue: initialOption ? initialOption.label : '',
  selectedOption: initialOption,
  mouseHover: false,
  loading: false,
  highlightIndex: -1
})

const itemSelect = (e: SelectOption) => {
  if (e.disabled) return
  states.inputValue = e.label
  states.selectedOption = e
  emits('change', e.value)
  emits('update:modelValue', e.value)
  controlDropdown(false)
  inputRef.value.ref.focus()
}
</script>

<style scoped></style>