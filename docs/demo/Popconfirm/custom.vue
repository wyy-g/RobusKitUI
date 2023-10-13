<script setup>
import Popconfirm from '@/components/Popconfirm/Popconfirm.vue'
import Button from '@/components/Button/Button.vue'

</script>

<template>
    <div class="basic block">
        <Popconfirm title="这是自定义Popconfirm内容" confirmText="好的" cancelText="不用了" icon="check-circle" icon-color="red">
            <Button>自定义内容</Button>
        </Popconfirm>
    </div>
</template>