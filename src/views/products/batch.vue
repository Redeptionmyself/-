<template>
  <div class="page-container">
    <n-card title="批次管理">
      <n-data-table :columns="columns" :data="data" :pagination="pagination" />
    </n-card>
  </div>
</template>

<script setup lang="ts">
const columns = [
  { title: '批次编号', key: 'id' },
  { title: '产品名称', key: 'product' },
  { title: '生产日期', key: 'date' },
  { title: '状态', key: 'status' }
]

const data = []
const pagination = { pageSize: 10 }
</script> 