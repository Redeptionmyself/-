<template>
  <div class="page-container">
    <n-card title="产品管理">
      <template #header-extra>
        <n-button type="primary" @click="handleAddProduct">
          新增产品
        </n-button>
      </template>
      <n-data-table
        :columns="columns"
        :data="tableData"
        :pagination="pagination"
      />
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { NButton, NSpace, useMessage } from 'naive-ui'

const message = useMessage()

const columns = [
  { title: '产品编号', key: 'id' },
  { title: '产品名称', key: 'name' },
  { title: '产品类别', key: 'category' },
  { title: '生产商', key: 'manufacturer' },
  {
    title: '操作',
    key: 'actions',
    render(row: any) {
      return h(
        NSpace,
        { justify: 'center' },
        {
          default: () => [
            h(
              NButton,
              {
                text: true,
                type: 'primary',
                onClick: () => handleView(row)
              },
              { default: () => '查看' }
            ),
            h(
              NButton,
              {
                text: true,
                onClick: () => handleTrace(row)
              },
              { default: () => '溯源' }
            )
          ]
        }
      )
    }
  }
]

const tableData = [
  {
    id: 'P001',
    name: '有机大米',
    category: '粮食',
    manufacturer: '某某农业'
  }
]

const pagination = {
  pageSize: 10
}

function handleAddProduct() {
  message.info('新增产品')
}

function handleView(row: any) {
  message.info(`查看产品：${row.id}`)
}

function handleTrace(row: any) {
  message.info(`产品溯源：${row.id}`)
}
</script>

<style scoped>
.page-container {
  max-width: 1200px;
  margin: 0 auto;
}
</style> 