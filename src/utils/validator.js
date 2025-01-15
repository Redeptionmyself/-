import { z } from 'zod';
// 产品验证模式
export const ProductSchema = z.object({
    name: z.string().min(1).max(100),
    category: z.string().min(1).max(50),
    manufacturer_id: z.number().positive()
});
// 批次验证模式
export const BatchSchema = z.object({
    product_id: z.number().positive(),
    quantity: z.number().positive(),
    location: z.string().min(1).max(100)
});
// 环境数据验证模式
export const EnvironmentDataSchema = z.object({
    location_id: z.number().positive(),
    temperature: z.number().min(-50).max(100).optional(),
    humidity: z.number().min(0).max(100).optional(),
    light_intensity: z.number().min(0).optional(),
    co2_level: z.number().min(0).optional()
});
// 质量检测验证模式
export const QualityCheckSchema = z.object({
    batch_id: z.string().uuid(),
    check_type: z.string().min(1).max(50),
    check_result: z.record(z.any()),
    inspector_id: z.number().positive()
});
