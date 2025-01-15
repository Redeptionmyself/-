import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { useCustomNotification } from '@/components/useNotification'
import type {
  ApiResponse,
  RequestParams,
  Product,
  ProductCreateInput,
  ProductUpdateInput,
  Batch,
  BatchCreateInput,
  BatchUpdateInput,
  QualityCheck,
  QualityCheckCreateInput,
  EnvironmentData,
  AuthUser,
  AuthLoginInput,
  AuthRegisterInput,
  AuthResponse
} from '@/types/api'

// 定义接口类型
interface ApiResponse<T = any> {
  data: T
  message?: string
  status: number
}

// 定义请求参数类型
interface RequestParams {
  [key: string]: any
}

// 定义API错误类型
class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public data?: any
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

// 类型定义
interface Product {
  id: number
  name: string
  category: string
  manufacturer_id: number
  status: string
  created_at: string
  updated_at: string
}

interface ProductCreateInput {
  name: string
  category: string
  manufacturer_id: number
}

interface ProductUpdateInput extends Partial<ProductCreateInput> {
  status?: string
}

// 批次相关类型
interface Batch {
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

interface BatchCreateInput {
  product_id: number
  quantity: number
  location: string
}

interface BatchUpdateInput extends Partial<BatchCreateInput> {
  status?: string
}

// 质量检测相关类型
interface QualityCheck {
  id: number
  batch_id: string
  check_type: string
  check_result: Record<string, any>
  inspector_id: number
  status: string
  checked_at: string
  created_at: string
}

interface QualityCheckCreateInput {
  batch_id: string
  check_type: string
  check_result: Record<string, any>
}

// 环境监测相关类型
interface EnvironmentData {
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
interface AuthUser {
  id: number
  wallet_address: string
  username: string
  role: string
  created_at: string
  updated_at: string
}

interface AuthRegisterInput {
  wallet_address: string
  username: string
  signature: string
}

interface AuthLoginInput {
  wallet_address: string
  signature: string
}

interface AuthResponse {
  token: string
  user: AuthUser
}

export class ApiService {
  private api: AxiosInstance
  private notification = useCustomNotification()

  constructor() {
    this.api = axios.create({
      baseURL: '/api',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    // 请求拦截器
    this.api.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const token = localStorage.getItem('token')
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error: any) => {
        this.notification.error('请求错误', error.message)
        return Promise.reject(new ApiError(error.message))
      }
    )

    // 响应拦截器
    this.api.interceptors.response.use(
      (response: AxiosResponse<ApiResponse>) => response.data,
      (error: any) => {
        const message = error.response?.data?.message || error.message
        this.notification.error('响应错误', message)
        return Promise.reject(new ApiError(message, error.response?.status, error.response?.data))
      }
    )
  }

  // API 方法类型定义
  public products = {
    create: (data: ProductCreateInput) => this.api.post<ApiResponse<Product>>('/products', data),
    list: (params?: RequestParams) => this.api.get<ApiResponse<Product[]>>('/products', { params }),
    get: (id: number) => this.api.get<ApiResponse<Product>>(`/products/${id}`),
    update: (id: number, data: ProductUpdateInput) => this.api.put<ApiResponse<Product>>(`/products/${id}`, data),
    delete: (id: number) => this.api.delete<ApiResponse<void>>(`/products/${id}`)
  }

  // 批次相关 API
  public batches = {
    create: (data: BatchCreateInput) => this.api.post<ApiResponse<Batch>>('/batches', data),
    list: (params?: RequestParams) => this.api.get<ApiResponse<Batch[]>>('/batches', { params }),
    get: (id: string) => this.api.get<ApiResponse<Batch>>(`/batches/${id}`),
    update: (id: string, data: BatchUpdateInput) => this.api.put<ApiResponse<Batch>>(`/batches/${id}`, data),
    delete: (id: string) => this.api.delete<ApiResponse<void>>(`/batches/${id}`)
  }

  // 质量检测相关 API
  public qualityChecks = {
    create: (data: QualityCheckCreateInput) => this.api.post<ApiResponse<QualityCheck>>('/quality-checks', data),
    list: (params?: RequestParams) => this.api.get<ApiResponse<QualityCheck[]>>('/quality-checks', { params }),
    get: (id: number) => this.api.get<ApiResponse<QualityCheck>>(`/quality-checks/${id}`)
  }

  // 环境监测相关 API
  public environment = {
    list: (params?: RequestParams) => this.api.get<ApiResponse<EnvironmentData[]>>('/environment', { params }),
    latest: () => this.api.get<ApiResponse<EnvironmentData>>('/environment/latest')
  }

  // 用户认证相关 API
  public auth = {
    login: (data: AuthLoginInput) => this.api.post<ApiResponse<AuthResponse>>('/auth/login', data),
    register: (data: AuthRegisterInput) => this.api.post<ApiResponse<AuthUser>>('/auth/register', data),
    profile: () => this.api.get<ApiResponse<AuthUser>>('/auth/profile'),
    updateProfile: (data: Partial<AuthUser>) => this.api.put<ApiResponse<AuthUser>>('/auth/profile', data)
  }
}

// 创建单例
export const apiService = new ApiService() 