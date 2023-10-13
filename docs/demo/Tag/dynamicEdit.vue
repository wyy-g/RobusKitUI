
<template>
	<div class="basic block">
		<Tag v-for="tag in tags" :key="tag" closable @close="handleClose(tag)">
			{{ tag }}
		</Tag>
		<Input v-if="inputVisible" ref="saveTagInput" v-model="inputValue" @keyup.enter="handleInputConfirm"
			@blur.stop="handleInputConfirm" class="input-new-tag" />
		<Button v-else size="small" @click="showInput" class="button-new-tag">+ New Tag</Button>
	</div>
</template>
<script setup>
import { reactive, ref, nextTick } from 'vue'
import Tag from '@/components/Tag/Tag.vue'
import Input from '@/components/Input/Input.vue'
import Button from '@/components/Button/Button.vue'

const tags = reactive(['标签一', '标签二', '标签三'])

const saveTagInput = ref()

const inputVisible = ref(false)
const inputValue = ref('')

const handleClose = (tag) => {
	tags.splice(tags.indexOf(tag), 1)
}

const handleInputConfirm = () => {
	if (inputValue.value) {
		tags.push(inputValue.value)
	}
	inputVisible.value = false
	inputValue.value = ''
}

const showInput = () => {
	inputVisible.value = true
	nextTick(() => {
		saveTagInput.value.ref.focus()
	})
}
</script>

<style>
.block {
	margin-bottom: 10px;
}

.button-new-tag {
	margin-left: 10px;
	height: 32px;
	line-height: 30px;
	padding-top: 0;
	padding-bottom: 0;
}

.vk-input {
	width: 90px;
	margin-left: 10px;
	vertical-align: bottom;
}
</style>



