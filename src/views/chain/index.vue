<template>
  <div class="page-container">
    <n-card title="区块链记录">
      <n-data-table
        :columns="columns"
        :data="tableData"
        :pagination="pagination"
      />
    </n-card>
  </div>
</template>

<script setup lang="ts">
const columns = [
  { title: '区块高度', key: 'height' },
  { title: '区块哈希', key: 'hash' },
  { title: '交易数量', key: 'txCount' },
  { title: '生成时间', key: 'timestamp' }
]

const tableData = [
  {
    height: '1001',
    hash: '0x8f...3d2e',
    txCount: 3,
    timestamp: '2024-01-13 14:30:00'
  }
]

const pagination = {
  pageSize: 10
}
</script>

<style scoped>
.page-container {
  max-width: 1200px;
  margin: 0 auto;
}
</style> 