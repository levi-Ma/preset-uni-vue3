<script lang="ts" setup>
import UToast from '@/uni_modules/vk-uview-ui/components/u-toast/u-toast.vue'

const uToast = ref<InstanceType<typeof UToast>>()
const show = ({ title, type = 'default', duration = 2000 }: ToastType) => {
  uToast.value?.show({
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
  <u-toast ref="uToast"></u-toast>
</template>
