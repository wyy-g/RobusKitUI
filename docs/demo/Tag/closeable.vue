
<template>
	<div class="basic block">
		<Tag v-for="tag in tags" :key="tag.name" :type="tag.type" closable>
			{{ tag.name }}
		</Tag>
	</div>
</template>
<script setup>
import { reactive } from 'vue'
import Tag from '@/components/Tag/Tag.vue'
const tags = reactive([
	{ name: '标签一', type: '' },
	{ name: '标签二', type: 'success' },
	{ name: '标签三', type: 'warning' },
	{ name: '标签四', type: 'danger' },
	{ name: '标签五', type: 'info' },
])
</script>

<style>
.block {
	margin-bottom: 10px;
}
</style>



