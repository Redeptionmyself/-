export interface User {
  id: number
  wallet_address: string
  username: string
  role: string
  created_at: Date
  updated_at: Date
}

export interface Product {
  id: number
  contract_id: number
  name: string
  category: string
  manufacturer_id: number
  status: string
  created_at: Date
  updated_at: Date
}

export interface Batch {
  id: string
  contract_batch_id: Buffer
  product_id: number
  quantity: number
  location: string
  status: string
  produce_date: Date
  created_at: Date
  updated_at: Date
}

export interface TrackingData {
  id: string
  contract_data_id: Buffer
  batch_id: string
  data_type: string
  data_value: any
  recorder_id: number
  recorded_at: Date
  created_at: Date
}

export interface EnvironmentData {
  id: number
  location_id: number
  temperature: number
  humidity: number
  light_intensity: number
  co2_level: number
  recorded_at: Date
  created_at: Date
} 