const user = useStorage('user', null)

export const useUser = () => {
  const loginModel = ref({
    username: '',
    password: ''
  })

  const loggedIn = computed(() => user.value?.id)

  const login = async (data: any) => {
    user.value = data
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
