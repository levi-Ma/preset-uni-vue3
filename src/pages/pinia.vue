<script setup lang="ts">
const posters = ref([
  { id: 1, title: 'Pinia', icon: 'coupon', pageUrl: '/pakeage-pinia/pages/index' },
  { id: 2, title: 'Composables', icon: 'coupon-fill', pageUrl: '/pakeage-pinia/pages/hook' }
])
</script>

<template>
  <div class="container">
    <u-cell-group>
      <u-cell-item
        v-for="item in posters"
        :key="item.id"
        @click="navigateTo(item.pageUrl)"
        :icon="item.icon"
        :title="item.title"
      ></u-cell-item>
    </u-cell-group>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 20rpx;
}
</style>
