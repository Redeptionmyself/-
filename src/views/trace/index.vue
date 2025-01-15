<template>
  <div class="trace">
    <div class="page-header">
      <h1>追溯管理</h1>
      <p class="description">管理和追踪您的供应链产品</p>
    </div>

    <n-card>
      <n-space vertical :size="24">
        <n-space justify="end">
          <n-button type="primary" @click="handleAdd">
            新增追溯
          </n-button>
        </n-space>

        <n-data-table
          :columns="columns"
          :data="tableData"
          :pagination="pagination"
          :bordered="false"
        />
      </n-space>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { h, ref } from 'vue'
import { NTag, NButton, useMessage } from 'naive-ui'

const message = useMessage()

const columns = [
  { title: '追溯编号', key: 'id' },
  { title: '产品名称', key: 'product' },
  { title: '批次号', key: 'batch' },
  { title: '创建时间', key: 'createTime' },
  {
    title: '状态',
    key: 'status',
    render(row: any) {
      return h(
        NTag,
        {
          type: row.status === '已完成' ? 'success' : 'warning',
          round: true
        },
        { default: () => row.status }
      )
    }
  },
  {
    title: '操作',
    key: 'actions',
    render(row: any) {
      return h(
        NSpace,
        { align: 'center' },
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
                onClick: () => handleEdit(row)
              },
              { default: () => '编辑' }
            )
          ]
        }
      )
    }
  }
]

const tableData = [
  {
    id: 'TR001',
    product: '有机蔬菜',
    batch: 'B20240113001',
    createTime: '2024-01-13',
    status: '已完成'
  },
  {
    id: 'TR002',
    product: '水果',
    batch: 'B20240113002',
    createTime: '2024-01-13',
    status: '处理中'
  }
]

const pagination = {
  pageSize: 10
}

function handleAdd() {
  message.info('点击了新增追溯')
}

function handleView(row: any) {
  message.info(`查看追溯: ${row.id}`)
}

function handleEdit(row: any) {
  message.info(`编辑追溯: ${row.id}`)
}
</script>

<style scoped>
.trace {
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 24px;
}

.page-header h1 {
  margin: 0;
  font-size: 24px;
  font-weight: 400;
  color: #161616;
}

.description {
  margin: 8px 0 0;
  color: #525252;
}
</style> 