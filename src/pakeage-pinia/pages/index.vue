<script lang="ts" setup>
  import { useCounterStore } from '@/stores/counter'
  const counterStore = useCounterStore()
  const btnClick = () => {
    counterStore.increment()
  }
</script>

<template>
  <div class="container">
    <div class="pinia-num">Pinia count: {{ counterStore.count }}</div>
    <u-button type="primary" @click="btnClick">Pinia ++</u-button>
    <p class="desc">不建议在小程序中使用Pinia和Vuex, 避免小程序的性能消耗过大</p>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    padding: 20%;

    .pinia-num {
      margin-bottom: 30rpx;
      font-size: 50rpx;
      font-weight: 700;
      text-align: center;
      color: #000;
    }

    .desc {
      margin-top: 40rpx;
    }
  }
</style>
