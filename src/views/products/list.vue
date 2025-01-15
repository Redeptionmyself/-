<template>
  <div class="page-container">
    <n-card title="产品列表">
      <template #header-extra>
        <n-button type="primary">新增产品</n-button>
      </template>
      <n-data-table :columns="columns" :data="data" :pagination="pagination" />
    </n-card>
  </div>
</template>

<script setup lang="ts">
const columns = [
  { title: '产品编号', key: 'id' },
  { title: '产品名称', key: 'name' },
  { title: '产品类别', key: 'category' },
  { title: '生产商', key: 'manufacturer' }
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