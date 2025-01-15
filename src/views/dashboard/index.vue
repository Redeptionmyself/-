<template>
  <div class="page-container">
    <n-card title="系统概览">
      <n-grid :cols="4" :x-gap="12">
        <n-grid-item v-for="item in statistics" :key="item.title">
          <n-card size="small">
            <n-statistic :label="item.title" :value="item.value">
              <template #prefix>
                <n-icon :component="item.icon" />
              </template>
            </n-statistic>
          </n-card>
        </n-grid-item>
      </n-grid>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { CubeOutline, LinkOutline, ServerOutline, PeopleOutline } from '@vicons/ionicons5'

const statistics = [
  {
    title: '产品总数',
    value: 128,
    icon: CubeOutline
  },
  {
    title: '溯源记录',
    value: 856,
    icon: LinkOutline
  },
  {
    title: '区块数量',
    value: 234,
    icon: ServerOutline
  },
  {
    title: '参与方',
    value: 45,
    icon: PeopleOutline
  }
]
</script>

<style scoped>
.page-container {
  max-width: 1200px;
  margin: 0 auto;
}
</style> 