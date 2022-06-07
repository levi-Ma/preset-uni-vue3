<template>
  <!-- 提示页 -->
  <view class="broswer-container flex flex-center">
    <i class="broswer-icon-info broswer-icon_msg"></i>
    <view class="hint">请在微信内部浏览器打开此页面</view>
  </view>
</template>

<script></script>

<style lang="scss" scoped>
.broswer-container {
  width: 100%;
  height: 80vh;
  flex-direction: column;

  .broswer-icon_msg {
    width: 64px;
    height: 64px;
  }

  .broswer-icon-info {
    color: #10aeff;
    -webkit-mask-size: 100%;
    mask-size: 100%;
    background-color: currentColor;
    -webkit-mask-image: url(data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010zm-.75-12v7h1.5v-7h-1.5zM12%209a1%201%200%20100-2%201%201%200%20000%202z%22%2F%3E%3C%2Fsvg%3E);
    mask-image: url(data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010zm-.75-12v7h1.5v-7h-1.5zM12%209a1%201%200%20100-2%201%201%200%20000%202z%22%2F%3E%3C%2Fsvg%3E);
  }

  .hint {
    font-size: 14px;
    color: #666;
    margin-top: 20px;
    text-align: center;
  }
}
</style>
