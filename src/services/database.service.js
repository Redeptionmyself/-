import { pool, query } from '../config/database';
export class DatabaseService {
    // 通用查询方法
    static async query(text, params) {
        return await query(text, params);
    }
    // 事务处理
    static async transaction(callback) {
        const client = await pool.connect();
        try {
            await client.query('BEGIN');
            const result = await callback(client);
            await client.query('COMMIT');
            return result;
        }
        catch (err) {
            await client.query('ROLLBACK');
            throw err;
        }
        finally {
            client.release();
        }
    }
    // 健康检查
    static async healthCheck() {
        try {
            await query('SELECT NOW()');
            return true;
        }
        catch (err) {
            console.error('数据库健康检查失败:', err);
            return false;
        }
    }
}
