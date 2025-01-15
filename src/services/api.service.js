import axios from 'axios';
import { useCustomNotification } from '@/components/useNotification';
// 定义API错误类型
class ApiError extends Error {
    status;
    data;
    constructor(message, status, data) {
        super(message);
        this.status = status;
        this.data = data;
        this.name = 'ApiError';
    }
}
export class ApiService {
    api;
    notification = useCustomNotification();
    constructor() {
        this.api = axios.create({
            baseURL: '/api',
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // 请求拦截器
        this.api.interceptors.request.use((config) => {
            const token = localStorage.getItem('token');
            if (token && config.headers) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        }, (error) => {
            this.notification.error('请求错误', error.message);
            return Promise.reject(new ApiError(error.message));
        });
        // 响应拦截器
        this.api.interceptors.response.use((response) => response.data, (error) => {
            const message = error.response?.data?.message || error.message;
            this.notification.error('响应错误', message);
            return Promise.reject(new ApiError(message, error.response?.status, error.response?.data));
        });
    }
    // API 方法类型定义
    products = {
        create: (data) => this.api.post('/products', data),
        list: (params) => this.api.get('/products', { params }),
        get: (id) => this.api.get(`/products/${id}`),
        update: (id, data) => this.api.put(`/products/${id}`, data),
        delete: (id) => this.api.delete(`/products/${id}`)
    };
    // 批次相关 API
    batches = {
        create: (data) => this.api.post('/batches', data),
        list: (params) => this.api.get('/batches', { params }),
        get: (id) => this.api.get(`/batches/${id}`),
        update: (id, data) => this.api.put(`/batches/${id}`, data),
        delete: (id) => this.api.delete(`/batches/${id}`)
    };
    // 质量检测相关 API
    qualityChecks = {
        create: (data) => this.api.post('/quality-checks', data),
        list: (params) => this.api.get('/quality-checks', { params }),
        get: (id) => this.api.get(`/quality-checks/${id}`)
    };
    // 环境监测相关 API
    environment = {
        list: (params) => this.api.get('/environment', { params }),
        latest: () => this.api.get('/environment/latest')
    };
    // 用户认证相关 API
    auth = {
        login: (data) => this.api.post('/auth/login', data),
        register: (data) => this.api.post('/auth/register', data),
        profile: () => this.api.get('/auth/profile'),
        updateProfile: (data) => this.api.put('/auth/profile', data)
    };
}
// 创建单例
export const apiService = new ApiService();
