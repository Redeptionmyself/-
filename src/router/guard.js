import { useAuthStore } from '@/stores/auth';
export function setupRouteGuards(router) {
    router.beforeEach(async (to, from, next) => {
        const authStore = useAuthStore();
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
        const requiresRole = to.meta.role;
        if (!authStore.user && authStore.token) {
            try {
                await authStore.fetchProfile();
            }
            catch (error) {
                authStore.logout();
            }
        }
        if (requiresAuth && !authStore.user) {
            next({
                name: 'login',
                query: { redirect: to.fullPath }
            });
            return;
        }
        if (requiresRole && authStore.user?.role !== requiresRole) {
            next({ name: 'forbidden' });
            return;
        }
        next();
    });
}
