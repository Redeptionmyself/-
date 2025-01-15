import { pool, query } from '../config/database'
import { QueryResult } from 'pg'

export class DatabaseService {
  // 通用查询方法
  static async query(text: string, params?: any[]): Promise<QueryResult> {
    return await query(text, params)
  }

  // 事务处理
  static async transaction<T>(callback: (client: any) => Promise<T>): Promise<T> {
    const client = await pool.connect()
    try {
      await client.query('BEGIN')
      const result = await callback(client)
      await client.query('COMMIT')
      return result
    } catch (err) {
      await client.query('ROLLBACK')
      throw err
    } finally {
      client.release()
    }
  }

  // 健康检查
  static async healthCheck(): Promise<boolean> {
    try {
      await query('SELECT NOW()')
      return true
    } catch (err) {
      console.error('数据库健康检查失败:', err)
      return false
    }
  }
} 