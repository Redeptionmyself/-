// 通用响应类型
export interface ApiResponse<T = any> {
  data: T
  message?: string
  status: number
}

// 通用请求参数类型
export interface RequestParams {
  [key: string]: any
}

// 产品相关类型
export interface Product {
  id: number
  name: string
  category: string
  manufacturer_id: number
  status: string
  created_at: string
  updated_at: string
}

export interface ProductCreateInput {
  name: string
  category: string
  manufacturer_id: number
}

export interface ProductUpdateInput extends Partial<ProductCreateInput> {
  status?: string
}

// 批次相关类型
export interface Batch {
  id: string
  contract_batch_id: string
  product_id: number
  quantity: number
  location: string
  status: string
  produce_date: string
  created_at: string
  updated_at: string
}

export interface BatchCreateInput {
  product_id: number
  quantity: number
  location: string
}

export interface BatchUpdateInput extends Partial<BatchCreateInput> {
  status?: string
}

// 质量检测相关类型
export interface QualityCheck {
  id: number
  batch_id: string
  check_type: string
  check_result: Record<string, any>
  inspector_id: number
  status: string
  checked_at: string
  created_at: string
}

export interface QualityCheckCreateInput {
  batch_id: string
  check_type: string
  check_result: Record<string, any>
}

// 环境监测相关类型
export interface EnvironmentData {
  id: number
  location_id: number
  temperature?: number
  humidity?: number
  light_intensity?: number
  co2_level?: number
  recorded_at: string
  created_at: string
}

// 用户认证相关类型
export interface AuthUser {
  id: number
  wallet_address: string
  username: string
  role: string
  created_at: string
  updated_at: string
}

export interface AuthRegisterInput {
  wallet_address: string
  username: string
  signature: string
}

export interface AuthLoginInput {
  wallet_address: string
  signature: string
}

export interface AuthResponse {
  token: string
  user: AuthUser
} 