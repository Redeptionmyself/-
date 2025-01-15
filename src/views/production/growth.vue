<template>
  <div class="growth-page">
    <n-card title="生长数据">
      <n-space vertical>
        <n-alert type="info">
          欢迎使用生长数据管理模块
        </n-alert>
        <n-grid :cols="4" :x-gap="12">
          <n-grid-item v-for="stat in statistics" :key="stat.key">
            <n-statistic :label="stat.label" :value="stat.value">
              <template #prefix>
                <n-icon>
                  <component :is="stat.icon" />
                </n-icon>
              </template>
              <template #suffix>
                {{ stat.unit }}
              </template>
            </n-statistic>
          </n-grid-item>
        </n-grid>
      </n-space>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NCard, NSpace, NAlert, NGrid, NGridItem, NStatistic, NIcon } from 'naive-ui'
import { LeafOutline, WaterOutline, ThermometerOutline, SunnyOutline } from '@vicons/ionicons5'

const statistics = ref([
  {
    key: 'height',
    label: '株高',
    value: 45.5,
    unit: 'cm',
    icon: LeafOutline
  },
  {
    key: 'water',
    label: '灌溉量',
    value: 2.5,
    unit: 'L',
    icon: WaterOutline
  },
  {
    key: 'temperature',
    label: '生长温度',
    value: 25,
    unit: '°C',
    icon: ThermometerOutline
  },
  {
    key: 'light',
    label: '光照时长',
    value: 12,
    unit: 'h',
    icon: SunnyOutline
  }
])
</script>

<style scoped>
.growth-page {
  padding: 16px;
  max-width: 1200px;
  margin: 0 auto;
}
</style> 