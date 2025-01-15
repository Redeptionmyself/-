declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    PORT: string
    DB_USER: string
    DB_HOST: string
    DB_NAME: string
    DB_PASSWORD: string
    DB_PORT: string
    JWT_SECRET: string
    BLOCKCHAIN_RPC_URL: string
    CONTRACT_ADDRESS: string
    VITE_API_URL: string
    VITE_WS_URL: string
  }
}

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_WS_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module 'dotenv' {
  export function config(options?: { path?: string }): void
} 