import { Pool } from 'pg';
import { config } from 'dotenv';
import { join } from 'path';
import { logger } from '../services/logger.service';
// 加载环境变量
config({ path: join(__dirname, '../../.env') });
// 数据库配置
const dbConfig = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432'),
    // 连接池配置
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    // 生产环境启用 SSL
    ...(process.env.NODE_ENV === 'production' && {
        ssl: {
            rejectUnauthorized: false
        }
    })
};
// 检查必需的环境变量
if (!dbConfig.user || !dbConfig.host || !dbConfig.database || !dbConfig.password) {
    throw new Error('缺少必要的数据库环境变量');
}
// 创建连接池
const pool = new Pool(dbConfig);
// 错误处理
pool.on('error', (err) => {
    logger.error('数据库连接池错误:', err);
});
// 查询方法
async function query(text, params) {
    const start = Date.now();
    const client = await pool.connect();
    try {
        const result = await client.query(text, params);
        const duration = Date.now() - start;
        logger.info('执行查询', { text, duration, rows: result.rowCount });
        return result;
    }
    catch (error) {
        logger.error('查询错误', { text, error, params });
        throw error;
    }
    finally {
        client.release();
    }
}
// 事务方法
async function transaction(callback) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const result = await callback(client);
        await client.query('COMMIT');
        return result;
    }
    catch (error) {
        await client.query('ROLLBACK');
        throw error;
    }
    finally {
        client.release();
    }
}
export { pool, query, transaction };
