<script lang="ts" setup>
  import { useUser } from '@/composables/useUser'
  import { switchTab } from '@/utils'
  const { loggedIn, user, loginModel, login, logout } = useUser()
</script>

<template>
  <div class="container">
    <p v-if="loggedIn">
      Welcome {{ user?.username }},
      <span href="#" @click.prevent="logout">Logout</span>
    </p>
    <u-form v-else :model="loginModel" ref="uForm" label-position="top">
      <u-form-item label="用户名"><u-input v-model="loginModel.username" /></u-form-item>
      <u-form-item label="密码"><u-input type="password" v-model="loginModel.password" /></u-form-item>
    </u-form>
    <div class="btns">
      <u-button v-if="!loggedIn" @click="login">提交</u-button>
      <u-button v-else @click="logout">退出</u-button>
      <p class="tips" v-if="loggedIn" @click="switchTab('/pages/home')">返回Home页查看</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    padding: 20%;
    .btns {
      margin-top: 30rpx;
    }

    .tips {
      margin-top: 30rpx;
      text-align: center;
    }
  }
</style>
