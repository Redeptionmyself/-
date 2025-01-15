<template>
  <div class="page-container">
    <n-card title="RFID记录">
      <n-space vertical>
        <n-data-table :columns="columns" :data="data" :pagination="pagination" />
      </n-space>
    </n-card>
  </div>
</template>

<script setup lang="ts">
const columns = [
  { title: '记录ID', key: 'id' },
  { title: '时间', key: 'time' },
  { title: '设备ID', key: 'deviceId' },
  { title: '数据', key: 'data' }
]

const data = []
const pagination = { pageSize: 10 }
</script>

<style scoped>
.page-container {
  max-width: 1200px;
  margin: 0 auto;
}
</style> 