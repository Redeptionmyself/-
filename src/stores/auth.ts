import { defineStore } from 'pinia'
import { ref } from 'vue'
import { apiService } from '@/services/api.service'
import { useCustomNotification } from '@/components/useNotification'

interface User {
  id: number
  wallet_address: string
  username: string
  role: string
  created_at: string
  updated_at: string
}

interface LoginCredentials {
  wallet_address: string
  signature: string
}

interface AuthResponse {
  token: string
  user: User
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const token = ref<string | null>(null)
  const loading = ref(false)
  const notification = useCustomNotification()

  async function init() {
    const savedToken = localStorage.getItem('token')
    if (savedToken) {
      token.value = savedToken
      await fetchProfile()
    }
  }

  async function login(credentials: LoginCredentials) {
    try {
      loading.value = true
      const response = await apiService.auth.login<AuthResponse>(credentials)
      token.value = response.token
      localStorage.setItem('token', response.token)
      await fetchProfile()
      notification.success('登录成功')
    } catch (error) {
      notification.error('登录失败', error instanceof Error ? error.message : '未知错误')
      throw error
    } finally {
      loading.value = false
    }
  }

  async function fetchProfile() {
    try {
      loading.value = true
      const profile = await apiService.auth.profile<User>()
      user.value = profile
    } catch (error) {
      notification.error('获取用户信息失败', error instanceof Error ? error.message : '未知错误')
      throw error
    } finally {
      loading.value = false
    }
  }

  function logout() {
    user.value = null
    token.value = null
    localStorage.removeItem('token')
    notification.info('已退出登录')
  }

  return {
    user,
    token,
    loading,
    init,
    login,
    logout,
    fetchProfile
  }
}) 