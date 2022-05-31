<script setup lang="ts">
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
@import './style/index.scss';

// 统一样式表
@import './style/class.scss';

// 自定义全局主题
// page {
//   @include VRgb(
//     (
//       primary: #fff,
//       secondary: #f000b8,
//       accent: #37cdbe,
//       neutral: #3d4451,
//       base: #7f899a,
//       ...
//     )
//   );
// }

// 自定义局部主题
// .theme-B {
//   @include VRgb(
//     (
//       primary: red
//     )
//   );
// }
</style>
