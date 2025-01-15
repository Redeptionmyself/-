import { useNotification } from 'naive-ui';
export function useCustomNotification() {
    const notification = useNotification();
    if (!notification) {
        throw new Error('useNotification() 必须在 n-notification-provider 内使用');
    }
    return {
        success(title, content) {
            notification.success({
                title,
                content,
                duration: 3000,
                keepAliveOnHover: true
            });
        },
        error(title, content) {
            notification.error({
                title,
                content,
                duration: 5000,
                keepAliveOnHover: true
            });
        },
        warning(title, content) {
            notification.warning({
                title,
                content,
                duration: 4000,
                keepAliveOnHover: true
            });
        },
        info(title, content) {
            notification.info({
                title,
                content,
                duration: 3000,
                keepAliveOnHover: true
            });
        }
    };
}
