<script lang="ts" setup>
// 引入方法
import http from '@/apis'

// 引入组件

// 使用方法
const { loggedIn, login, user } = useUser()

// 定义数据
const components = ref([{ id: 1, icon: 'grid-fill', title: '按钮组', pageUrl: '/pakeage-button/pages/index' }])

// 跳转页面
const handelToPage = (url: string) => {
  navigateTo(url)
}

// 定义页面方法
// 加载数据
const loadPublicCase = async () => {
  let params = {
    custom: {
      errorhandle: true
    }
  }
  // http.common.getPublicCase({ params }
  if (user.value) {
    // 中断请求
    http.common.test().abort()
    return false
  }

  try {
    const data = await http.common.test(params)
    login(data.data.user)
  } catch (error) {
    console.error(error)
  }
}

// 最后使用页面方法
onLoad(() => {
  loadPublicCase()
})
</script>

<template>
  <view class="header-container">
    <view class="header-wrap">
      <view class="flex items-center wrap">
        <view class="logo">
          <u-image height="100%" src="@/static/uview/logo.png"></u-image>
        </view>
        <view class="tit-box">
          <view class="tit">{{ !loggedIn ? 'uView UI' : user.username }}</view>
          <view class="txt">多平台快速开发的UI框架</view>
        </view>
      </view>
      <view class="desc">众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让你快速集成，开箱即用</view>
    </view>
  </view>

  <view class="main-container">
    <u-cell-group>
      <u-cell-item
        v-for="item in components"
        :icon="item.icon"
        :title="item.title"
        :key="item.id"
        @click="handelToPage(item.pageUrl)"
      ></u-cell-item>
    </u-cell-group>
  </view>
</template>

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
}
</style>
