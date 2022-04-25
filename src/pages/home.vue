<template>
  <view class="header-container">
    <view class="header-wrap">
      <view class="flex items-center wrap">
        <view class="logo">
          <u-image height="100%" src="@/static/uview/logo.png"></u-image>
        </view>
        <view class="tit-box">
          <view class="tit">uView UI</view>
          <view class="txt">多平台快速开发的UI框架</view>
        </view>
      </view>
      <view class="desc">众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让你快速集成，开箱即用</view>
    </view>
  </view>

  <view class="main-container">
    <view class="btn" v-for="item in btns" :key="item.id">
      <u-button :type="item.type" @click="handelShowTips(item)">{{ item.text }}</u-button>
    </view>
  </view>

  <u-top-tips ref="uTips"></u-top-tips>
  <u-toast ref="uToast"></u-toast>
</template>

<script lang="ts" setup>
  // 引入 api
  import { onMounted, ref } from 'vue'
  import { onReady } from '@dcloudio/uni-app'
  // 引入组件
  import UToast from '../uni_modules/vk-uview-ui/components/u-toast/u-toast.vue'
  // 引入类型
  import { UTopTipsType, UToastType } from '../types/declares/uView-ui.d'
  interface btnItem {
    id: number
    type: null | string
    text: string
  }

  // 定义数据
  const uTips = ref<UTopTipsType | null>()
  const uToast = ref<UToastType | null>()
  const btns = ref<btnItem[]>([
    { id: 1, type: null, text: '默认按钮' },
    { id: 2, type: 'primary', text: '主要按钮' },
    { id: 3, type: 'success', text: '成功按钮' },
    { id: 4, type: 'info', text: '信息按钮' },
    { id: 5, type: 'warning', text: '警告按钮' },
    { id: 6, type: 'error', text: '危险按钮' }
  ])

  // 方法
  onReady(() => {})
  onMounted(() => {})

  const handelShowTips = (item: btnItem) => {
    if (!item.type) {
      uToast.value.show({
        title: `${item.text}的消息提示`,
        type: 'success ',
        duration: 2000
      })
      return false
    }
    uTips.value.show({
      title: `${item.text}的顶部提示`,
      type: item.type,
      duration: '2300'
    })
  }
</script>

<style lang="scss" scoped>
  .header-container {
    .header-wrap {
      padding: 0 30rpx;
      .wrap {
        padding: 20rpx 0;
      }
      .logo {
        width: 140rpx;
        height: 140rpx;
      }
      .tit-box {
        flex: 1;
        margin-left: 20rpx;
        .tit {
          font-size: 50rpx;
          font-weight: 700;
          color: #303030;
        }
        .txt {
          font-size: 28rpx;
          color: #909090;
        }
      }
      .desc {
        margin-top: 20rpx;
        font-size: 28rpx;
        line-height: 1.8;
        color: #606060;
      }
    }
  }
  .main-container {
    padding: 0 30rpx;
    margin-top: 60rpx;
    .btn {
      margin-bottom: 20rpx;
    }
  }
</style>
