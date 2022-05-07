<script lang="ts" setup>
  import { useUser } from '@/composables/useUser'
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
    <u-button v-if="!loggedIn" @click="login">提交</u-button>
    <u-button v-else @click="logout">退出</u-button>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    padding: 20%;
  }
</style>
