import { Router, RouteLocationNormalized } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

interface RouteMeta {
  requiresAuth?: boolean
  role?: string
}

export function setupRouteGuards(router: Router) {
  router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next) => {
    const authStore = useAuthStore()
    const requiresAuth = to.matched.some(record => (record.meta as RouteMeta).requiresAuth)
    const requiresRole = (to.meta as RouteMeta).role

    if (!authStore.user && authStore.token) {
      try {
        await authStore.fetchProfile()
      } catch (error) {
        authStore.logout()
      }
    }

    if (requiresAuth && !authStore.user) {
      next({
        name: 'login',
        query: { redirect: to.fullPath }
      })
      return
    }

    if (requiresRole && authStore.user?.role !== requiresRole) {
      next({ name: 'forbidden' })
      return
    }

    next()
  })
} 