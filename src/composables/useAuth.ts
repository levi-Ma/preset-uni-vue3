const auth = useStorage('auth', null)

export const useAuth = () => {
  const setAuth = (obj: any) => {
    auth.value = obj
  }

  const deleteAuth = () => {
    auth.value = null
  }

  return {
    auth,
    setAuth,
    deleteAuth
  }
}
