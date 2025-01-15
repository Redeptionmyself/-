import jwt from 'jsonwebtoken';
import { logger } from '../services/logger.service';
export function authMiddleware(req, res, next) {
    try {
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: '未提供认证令牌' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (error) {
        logger.error('认证失败:', error);
        return res.status(401).json({ message: '认证失败' });
    }
}
export function roleMiddleware(roles) {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: '未认证' });
        }
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: '权限不足' });
        }
        next();
    };
}
