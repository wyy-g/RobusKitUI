<script setup>
import Alert from '@/components/Alert/Alert.vue'
</script>
<template>
    <Alert type="success" :closable="false">这里是 success 提示</Alert>
    <Alert type="warning">
        这里是 warning 提示
        <template #canClose>
            知道了
        </template>
    </Alert>
    <Alert type="danger">这里是 error 提示</Alert>
</template>