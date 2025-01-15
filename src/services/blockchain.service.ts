import { ethers } from 'ethers'
import TraceabilitySystem from '../../contracts/TraceabilitySystem.json'

export class BlockchainService {
  private provider: ethers.providers.JsonRpcProvider
  private contract: ethers.Contract
  private signer: ethers.Signer

  constructor() {
    this.provider = new ethers.providers.JsonRpcProvider(process.env.BLOCKCHAIN_RPC_URL)
    this.contract = new ethers.Contract(
      process.env.CONTRACT_ADDRESS,
      TraceabilitySystem.abi,
      this.provider
    )
    this.signer = this.provider.getSigner()
  }

  // 创建产品
  async createProduct(name: string, category: string) {
    try {
      const tx = await this.contract.connect(this.signer).createProduct(name, category)
      const receipt = await tx.wait()
      const event = receipt.events?.find(e => e.event === 'ProductCreated')
      return event?.args
    } catch (error) {
      console.error('创建产品失败:', error)
      throw error
    }
  }

  // 创建批次
  async createBatch(productId: number, quantity: number, location: string) {
    try {
      const tx = await this.contract.connect(this.signer).createBatch(productId, quantity, location)
      const receipt = await tx.wait()
      const event = receipt.events?.find(e => e.event === 'BatchCreated')
      return event?.args
    } catch (error) {
      console.error('创建批次失败:', error)
      throw error
    }
  }

  // 添加追踪数据
  async addTrackingData(batchId: string, dataType: string, value: string) {
    try {
      const tx = await this.contract.connect(this.signer).addTrackingData(batchId, dataType, value)
      const receipt = await tx.wait()
      const event = receipt.events?.find(e => e.event === 'TrackingDataAdded')
      return event?.args
    } catch (error) {
      console.error('添加追踪数据失败:', error)
      throw error
    }
  }
} 