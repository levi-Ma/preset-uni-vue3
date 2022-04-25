<script setup lang="ts">
  import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'

  onLaunch(() => {
    console.log('App Launch')
  })

  onShow(() => {
    console.log('App Show')
  })

  onHide(() => {
    console.log('App Hide')
  })
</script>

<style lang="scss">
  // uview 默认样式表
  @import './uni_modules/vk-uview-ui/index.scss';

  // 初始化样式表
  @import './style/base.scss';

  // 统一样式表
  @import './style/class.scss';
</style>
