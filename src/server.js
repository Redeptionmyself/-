import express from 'express';
import { createServer } from 'http';
import { WebSocketService } from './services/websocket.service';
import apiRouter from './routes/api';
import { logger } from './services/logger.service';
const app = express();
const server = createServer(app);
const wss = new WebSocketService(server);
// 中间件
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// API 路由
app.use('/api', apiRouter);
// 错误处理
app.use((err, req, res, next) => {
    logger.error('服务器错误:', err);
    res.status(500).json({ message: '服务器内部错误' });
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    logger.info(`服务器运行在端口 ${PORT}`);
});
export { wss };
