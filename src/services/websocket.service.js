import { WebSocket, WebSocketServer } from 'ws';
import { logger } from './logger.service';
export class WebSocketService {
    wss;
    clients;
    constructor(server) {
        this.wss = new WebSocketServer({ server });
        this.clients = new Map();
        this.wss.on('connection', this.handleConnection.bind(this));
    }
    handleConnection(ws) {
        const clientId = Math.random().toString(36).substring(7);
        this.clients.set(clientId, ws);
        logger.info(`WebSocket 客户端连接: ${clientId}`);
        ws.on('message', (message) => {
            this.handleMessage(clientId, message);
        });
        ws.on('close', () => {
            this.clients.delete(clientId);
            logger.info(`WebSocket 客户端断开: ${clientId}`);
        });
        ws.on('error', (error) => {
            logger.error(`WebSocket 错误 (${clientId}):`, error);
        });
    }
    handleMessage(clientId, message) {
        try {
            const data = JSON.parse(message);
            logger.info(`收到消息 (${clientId}):`, data);
            // 处理不同类型的消息
            switch (data.type) {
                case 'subscribe':
                    this.handleSubscribe(clientId, data.topics);
                    break;
                case 'unsubscribe':
                    this.handleUnsubscribe(clientId, data.topics);
                    break;
                default:
                    logger.warn(`未知的消息类型 (${clientId}):`, data.type);
            }
        }
        catch (error) {
            logger.error(`处理消息失败 (${clientId}):`, error);
        }
    }
    handleSubscribe(clientId, topics) {
        // 处理订阅逻辑
    }
    handleUnsubscribe(clientId, topics) {
        // 处理取消订阅逻辑
    }
    // 广播消息给所有客户端
    broadcast(type, data) {
        const message = JSON.stringify({ type, data });
        this.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    }
    // 发送消息给特定客户端
    sendTo(clientId, type, data) {
        const client = this.clients.get(clientId);
        if (client && client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ type, data }));
        }
    }
}
