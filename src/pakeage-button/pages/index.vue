<script lang="ts" setup>
// 导入组件，以便在父组件用ref获取子组件时，通过 instanceType 获取子组件的类型
import MzTips from '../../components/mz-tips.vue'
import MzToast from '../../components/mz-toast.vue'

// 定义数据
const btns = ref<btnItem[]>([
  { id: 1, type: '', text: '默认按钮' },
  { id: 2, type: 'primary', text: '主要按钮' },
  { id: 3, type: 'success', text: '成功按钮' },
  { id: 4, type: 'info', text: '信息按钮' },
  { id: 5, type: 'warning', text: '警告按钮' },
  { id: 6, type: 'error', text: '危险按钮' }
])

// 通过 instanceType InstanceType<typeof component> 获取子组件的类型
const mztips = ref<InstanceType<typeof MzTips>>()
const mztoast = ref<InstanceType<typeof MzToast>>()

const handelShowTips = (item: btnItem) => {
  if (!item.type) {
    mztips.value?.show({ title: `${item.text}的消息提示` })
    return false
  }
  mztoast.value?.show({
    title: `${item.text}的顶部提示`,
    type: item.type
  })
}
</script>

<template>
  <div class="button-container">
    <view class="btn" v-for="item in btns" :key="item.id">
      <u-button :type="item.type" @click="handelShowTips(item)">{{ item.text }}</u-button>
    </view>
  </div>
  <mz-toast ref="mztoast"></mz-toast>
  <mz-tips ref="mztips"></mz-tips>
</template>

<style lang="scss" scoped>
.button-container {
  padding: 0 30rpx;
  margin-top: 60rpx;
  .btn {
    margin-bottom: 20rpx;
  }
}
</style>
