<script setup>
import Button from '@/components/Button/Button.vue'
import Icon from '@/components/Icon/Icon.vue'
</script>

<template>
    <div class="basic block">
        <Button>默认按钮</Button>
        <Button type="primary">主要按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="info">信息按钮</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="danger">危险按钮</Button>
    </div>

    <div class="plain block">
        <Button plain> 默认按钮 </Button>
        <Button type="primary" plain> 主要按钮 </Button>
        <Button type="success" plain> 成功按钮 </Button>
        <Button type="warning" plain> 警告按钮 </Button>
        <Button type="danger" plain> 危险按钮 </Button>
        <Button type="info" plain> 信息按钮 </Button>
    </div>

    <div class="round block">
        <Button round> 默认按钮 </Button>
        <Button type="primary" round> 主要按钮 </Button>
        <Button type="success" round> 成功按钮 </Button>
        <Button type="warning" round> 警告按钮 </Button>
        <Button type="danger" round> 危险按钮 </Button>
        <Button type="info" round> 信息按钮 </Button>
    </div>

    <div class="circle block">
        <Button circle>
            <Icon icon="star" />
        </Button>
        <Button type="primary" circle>
            <Icon icon="star" />
        </Button>
        <Button type="success" circle>
            <Icon icon="star" />
        </Button>
        <Button type="warning" circle>
            <Icon icon="star" />
        </Button>
        <Button type="danger" circle>
            <Icon icon="star" />
        </Button>
        <Button type="info" circle>
            <Icon icon="star" />
        </Button>
    </div>
</template>
<style>
.block {
    margin-bottom: 10px;
}
</style>



