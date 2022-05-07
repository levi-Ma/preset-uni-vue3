import { computed, ref } from 'vue'
import { showToast } from '@/utils'

const user = ref(JSON.parse(uni.getStorageSync('user')))

export const useUser = () => {
  const loginModel = ref({
    username: '',
    password: ''
  })

  const loggedIn = computed(() => user.value?.id)

  const login = async () => {
    user.value = { id: 1, username: loginModel.value.username }
    uni.setStorageSync('user', JSON.stringify(user.value))
    showToast({ title: '登录成功' })
  }

  const logout = async () => {
    user.value = null
    uni.removeStorageSync('user')
    showToast({ title: '退出成功' })
  }

  return {
    loginModel,
    user,
    loggedIn,
    login,
    logout
  }
}
