import { createLogger, format, transports } from 'winston'
import { join } from 'path'

const { combine, timestamp, printf, colorize } = format

// 自定义日志格式
const logFormat = printf(({ level, message, timestamp, ...metadata }: { level: string; message: string; timestamp: string; [key: string]: any }) => {
  let msg = `${timestamp} [${level}] : ${message}`
  if (Object.keys(metadata).length > 0) {
    msg += ` ${JSON.stringify(metadata)}`
  }
  return msg
})

// 创建日志记录器
export const logger = createLogger({
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    logFormat
  ),
  transports: [
    // 控制台输出
    new transports.Console({
      format: combine(
        colorize(),
        logFormat
      )
    }),
    // 文件输出
    new transports.File({
      filename: join(__dirname, '../../logs/error.log'),
      level: 'error'
    }),
    new transports.File({
      filename: join(__dirname, '../../logs/combined.log')
    })
  ]
})

// 开发环境下额外的配置
if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: combine(
      colorize(),
      logFormat
    )
  }))
}

export default logger 