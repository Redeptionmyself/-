import { defineStore } from 'pinia';
import { ref } from 'vue';
import { apiService } from '@/services/api.service';
import { useCustomNotification } from '@/components/useNotification';
export const useAuthStore = defineStore('auth', () => {
    const user = ref(null);
    const token = ref(null);
    const loading = ref(false);
    const notification = useCustomNotification();
    async function init() {
        const savedToken = localStorage.getItem('token');
        if (savedToken) {
            token.value = savedToken;
            await fetchProfile();
        }
    }
    async function login(credentials) {
        try {
            loading.value = true;
            const response = await apiService.auth.login(credentials);
            token.value = response.token;
            localStorage.setItem('token', response.token);
            await fetchProfile();
            notification.success('登录成功');
        }
        catch (error) {
            notification.error('登录失败', error instanceof Error ? error.message : '未知错误');
            throw error;
        }
        finally {
            loading.value = false;
        }
    }
    async function fetchProfile() {
        try {
            loading.value = true;
            const profile = await apiService.auth.profile();
            user.value = profile;
        }
        catch (error) {
            notification.error('获取用户信息失败', error instanceof Error ? error.message : '未知错误');
            throw error;
        }
        finally {
            loading.value = false;
        }
    }
    function logout() {
        user.value = null;
        token.value = null;
        localStorage.removeItem('token');
        notification.info('已退出登录');
    }
    return {
        user,
        token,
        loading,
        init,
        login,
        logout,
        fetchProfile
    };
});
