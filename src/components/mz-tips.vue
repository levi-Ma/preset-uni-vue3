<script lang="ts" setup>
import UTopTips from '@/uni_modules/vk-uview-ui/components/u-top-tips/u-top-tips.vue'

const uTips = ref<InstanceType<typeof UTopTips>>()
const show = ({ title, type, duration = 2000 }: ToastType) => {
  uTips.value?.show({
    title,
    type,
    duration
  })
}
defineExpose({
  show
})
</script>

<template>
  <u-top-tips ref="uTips"></u-top-tips>
</template>

<style lang="scss" scoped></style>
