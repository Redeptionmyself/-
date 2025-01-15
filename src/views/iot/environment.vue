<template>
  <div class="environment-page">
    <n-card title="环境监测">
      <n-space vertical>
        <n-alert type="info">
          环境监测数据
        </n-alert>
        <n-grid :cols="4" :x-gap="12">
          <n-grid-item v-for="item in environmentData" :key="item.key">
            <n-statistic :label="item.label" :value="item.value">
              <template #prefix>
                <n-icon>
                  <component :is="item.icon" />
                </n-icon>
              </template>
              <template #suffix>
                {{ item.unit }}
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
import { 
  ThermometerOutline, 
  WaterOutline, 
  SunnyOutline, 
  LeafOutline 
} from '@vicons/ionicons5'

const environmentData = ref([
  {
    key: 'temperature',
    label: '温度',
    value: 25.6,
    unit: '°C',
    icon: ThermometerOutline
  },
  {
    key: 'humidity',
    label: '湿度',
    value: 65,
    unit: '%',
    icon: WaterOutline
  },
  {
    key: 'light',
    label: '光照',
    value: 12000,
    unit: 'lux',
    icon: SunnyOutline
  },
  {
    key: 'co2',
    label: 'CO2',
    value: 400,
    unit: 'ppm',
    icon: LeafOutline
  }
])
</script>

<style scoped>
.environment-page {
  padding: 16px;
}
</style> 