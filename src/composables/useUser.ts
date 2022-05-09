import { computed, ref } from 'vue'
import { showToast } from '@/utils'
import { useStorage } from '@/utils/useStorage'

const user = useStorage('user', null)

export const useUser = () => {
  const loginModel = ref({
    username: '',
    password: ''
  })

  const loggedIn = computed(() => user.value?.id)

  const login = async () => {
    user.value = { id: 1, username: loginModel.value.username }
    showToast({ title: '登录成功' })
  }

  const logout = async () => {
    user.value = null
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
