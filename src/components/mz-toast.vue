<script lang="ts" setup>
  import { ref } from 'vue'
  import UToast from '@/uni_modules/vk-uview-ui/components/u-toast/u-toast.vue'

  const uToast = ref<UToastType>()
  const show = ({ title, type = 'default', duration = 2000 }: ToastType) => {
    uToast.value.show({
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
