<script setup lang="ts">
const posters = ref([
  { id: 1, title: '基本使用', icon: 'photo', pageUrl: '/pakeage-poster/pages/index' },
  { id: 2, title: '二维码海报', icon: 'photo-fill', pageUrl: '/pakeage-poster/pages/qrcode' }
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
