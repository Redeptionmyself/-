import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { logger } from '../services/logger.service'

export interface AuthRequest extends Request {
  user?: {
    id: number
    wallet_address: string
    role: string
  }
  body: any
}

export function authMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
      return res.status(401).json({ message: '未提供认证令牌' })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: number
      wallet_address: string
      role: string
    }
    req.user = decoded
    next()
  } catch (error) {
    logger.error('认证失败:', error)
    return res.status(401).json({ message: '认证失败' })
  }
}

export function roleMiddleware(roles: string[]) {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ message: '未认证' })
    }

    if (!roles.includes(req.user.role as string)) {
      return res.status(403).json({ message: '权限不足' })
    }

    next()
  }
} 