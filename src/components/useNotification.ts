import { useNotification } from 'naive-ui'

export function useCustomNotification() {
  const notification = useNotification()

  if (!notification) {
    throw new Error('useNotification() 必须在 n-notification-provider 内使用')
  }

  return {
    success(title: string, content?: string) {
      notification.success({
        title,
        content,
        duration: 3000,
        keepAliveOnHover: true
      })
    },

    error(title: string, content?: string) {
      notification.error({
        title,
        content,
        duration: 5000,
        keepAliveOnHover: true
      })
    },

    warning(title: string, content?: string) {
      notification.warning({
        title,
        content,
        duration: 4000,
        keepAliveOnHover: true
      })
    },

    info(title: string, content?: string) {
      notification.info({
        title,
        content,
        duration: 3000,
        keepAliveOnHover: true
      })
    }
  }
} 