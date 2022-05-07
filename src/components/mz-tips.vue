<script lang="ts" setup>
  import { ref } from 'vue'

  const uTips = ref<UTopTipsType>()
  const show = ({ title, type = 'default', duration = 2000 }: ToastType) => {
    uTips.value.show({
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
