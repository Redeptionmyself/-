import { ref } from 'vue';
import { logger } from './logger.service';
export class WebSocketClient {
    url;
    ws = null;
    reconnectAttempts = 0;
    maxReconnectAttempts = 5;
    reconnectTimeout = 3000;
    connected = ref(false);
    messages = ref([]);
    constructor(url) {
        this.url = url;
        this.connect();
    }
    connect() {
        try {
            this.ws = new WebSocket(this.url);
            this.ws.onopen = () => {
                this.connected.value = true;
                this.reconnectAttempts = 0;
                logger.info('WebSocket 连接成功');
            };
            this.ws.onmessage = (event) => {
                try {
                    const data = JSON.parse(event.data);
                    this.messages.value.push(data);
                    this.handleMessage(data);
                }
                catch (error) {
                    logger.error('处理消息失败:', error);
                }
            };
            this.ws.onclose = () => {
                this.connected.value = false;
                this.handleReconnect();
            };
            this.ws.onerror = (error) => {
                logger.error('WebSocket 错误:', error);
            };
        }
        catch (error) {
            logger.error('WebSocket 连接失败:', error);
            this.handleReconnect();
        }
    }
    handleReconnect() {
        if (this.reconnectAttempts < this.maxReconnectAttempts) {
            this.reconnectAttempts++;
            logger.info(`尝试重新连接 (${this.reconnectAttempts}/${this.maxReconnectAttempts})...`);
            setTimeout(() => this.connect(), this.reconnectTimeout);
        }
        else {
            logger.error('WebSocket 重连失败');
        }
    }
    handleMessage(data) {
        // 处理不同类型的消息
        switch (data.type) {
            case 'notification':
                // 处理通知
                break;
            case 'update':
                // 处理更新
                break;
            default:
                logger.warn('未知的消息类型:', data.type);
        }
    }
    send(type, data) {
        if (this.ws && this.connected.value) {
            this.ws.send(JSON.stringify({ type, data }));
        }
        else {
            logger.warn('WebSocket 未连接');
        }
    }
    subscribe(topics) {
        this.send('subscribe', { topics });
    }
    unsubscribe(topics) {
        this.send('unsubscribe', { topics });
    }
    disconnect() {
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
    }
}
// 创建单例
export const wsClient = new WebSocketClient(`ws://${location.host}`);
