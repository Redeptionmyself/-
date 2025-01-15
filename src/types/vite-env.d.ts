/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'ethers'
declare module 'winston'
declare module 'zod'
declare module 'ws'
declare module 'express' 