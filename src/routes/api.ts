import { Router, Response } from 'express'
import { authMiddleware, roleMiddleware } from '../middleware/auth'
import { DatabaseService } from '../services/database.service'
import { BlockchainService } from '../services/blockchain.service'
import { logger } from '../services/logger.service'
import { ProductSchema, BatchSchema, QualityCheckSchema } from '../utils/validator'
import type { AuthRequest } from '../middleware/auth'

const router = Router()
const blockchainService = new BlockchainService()

// 产品相关路由
router.post('/products', authMiddleware, roleMiddleware(['admin', 'manufacturer']), async (req: AuthRequest, res: Response) => {
  try {
    const data = ProductSchema.parse(req.body)
    
    // 创建区块链记录
    const blockchainResult = await blockchainService.createProduct(data.name, data.category)
    
    // 创建数据库记录
    const result = await DatabaseService.transaction(async (client) => {
      const { rows } = await client.query(
        'INSERT INTO products (contract_id, name, category, manufacturer_id, status) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [blockchainResult.id, data.name, data.category, req.user!.id, 'active']
      )
      return rows[0]
    })
    
    res.json(result)
  } catch (error) {
    logger.error('创建产品失败:', error)
    res.status(400).json({ message: '创建产品失败', error })
  }
})

// 批次相关路由
router.post('/batches', authMiddleware, roleMiddleware(['admin', 'manufacturer']), async (req: AuthRequest, res) => {
  try {
    const data = BatchSchema.parse(req.body)
    
    // 创建区块链记录
    const blockchainResult = await blockchainService.createBatch(
      data.product_id,
      data.quantity,
      data.location
    )
    
    // 创建数据库记录
    const result = await DatabaseService.transaction(async (client) => {
      const { rows } = await client.query(
        'INSERT INTO batches (contract_batch_id, product_id, quantity, location, status) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [blockchainResult.id, data.product_id, data.quantity, data.location, 'created']
      )
      return rows[0]
    })
    
    res.json(result)
  } catch (error) {
    logger.error('创建批次失败:', error)
    res.status(400).json({ message: '创建批次失败', error })
  }
})

// 质量检测路由
router.post('/quality-checks', authMiddleware, roleMiddleware(['admin', 'inspector']), async (req: AuthRequest, res) => {
  try {
    const data = QualityCheckSchema.parse(req.body)
    
    // 创建数据库记录
    const result = await DatabaseService.transaction(async (client) => {
      const { rows } = await client.query(
        'INSERT INTO quality_checks (batch_id, check_type, check_result, inspector_id, status) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [data.batch_id, data.check_type, data.check_result, req.user!.id, 'completed']
      )
      return rows[0]
    })
    
    // 添加区块链记录
    await blockchainService.addTrackingData(
      data.batch_id,
      'quality_check',
      JSON.stringify(data.check_result)
    )
    
    res.json(result)
  } catch (error) {
    logger.error('创建质量检测记录失败:', error)
    res.status(400).json({ message: '创建质量检测记录失败', error })
  }
})

export default router 