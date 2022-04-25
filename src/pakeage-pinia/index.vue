<script lang="ts" setup>
  import { useCounterStore } from '../stores/counter'
  const counterStore = useCounterStore()
  const btnClick = () => {
    counterStore.increment()
  }
</script>

<template>
  <div class="container">
    <div class="pinia-num">Pinia count: {{ counterStore.count }}</div>
    <u-button type="primary" @click="btnClick">Pinia ++</u-button>
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
  }
</style>
