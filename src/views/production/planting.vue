<template>
  <div class="page-container">
    <n-space vertical>
      <n-grid :cols="3" :x-gap="12">
        <n-grid-item v-for="stat in statistics" :key="stat.key">
          <n-card :bordered="false" class="shadow-card stat-card">
            <n-space align="center" :size="12">
              <div class="stat-icon" :style="{ background: stat.color }">
                <n-icon :size="24" :color="stat.iconColor">
                  <component :is="stat.icon" />
                </n-icon>
              </div>
              <n-space vertical :size="2">
                <n-text depth="3">{{ stat.label }}</n-text>
                <n-statistic :value="stat.value">
                  <template #suffix>{{ stat.unit }}</template>
                </n-statistic>
              </n-space>
            </n-space>
          </n-card>
        </n-grid-item>
      </n-grid>

      <n-card title="种植记录" :bordered="false" class="shadow-card mt-4">
        <template #header-extra>
          <n-space>
            <n-button-group>
              <n-button>
                <template #icon>
                  <n-icon><DownloadOutline /></n-icon>
                </template>
                导出数据
              </n-button>
              <n-button type="primary">
                <template #icon>
                  <n-icon><AddOutline /></n-icon>
                </template>
                新增记录
              </n-button>
            </n-button-group>
          </n-space>
        </template>

        <n-tabs type="segment" animated>
          <n-tab-pane name="current" tab="当前种植">
            <n-grid :cols="3" :x-gap="12" :y-gap="12">
              <n-grid-item v-for="item in currentPlanting" :key="item.id">
                <n-card size="small" :bordered="false" class="planting-card">
                  <template #header>
                    <n-space justify="space-between">
                      <n-space>
                        <n-avatar 
                          round 
                          :size="32"
                          :src="item.image"
                          fallback-src="/placeholder.png"
                        />
                        <n-text strong>{{ item.name }}</n-text>
                      </n-space>
                      <n-tag :type="getStatusType(item.progress)" round>
                        {{ getStatusText(item.progress) }}
                      </n-tag>
                    </n-space>
                  </template>

                  <n-list>
                    <n-list-item>
                      <n-space justify="space-between">
                        <n-text depth="3">种植面积</n-text>
                        <n-text>{{ item.area }}亩</n-text>
                      </n-space>
                    </n-list-item>
                    <n-list-item>
                      <n-space justify="space-between">
                        <n-text depth="3">预计产量</n-text>
                        <n-text>{{ item.expectedYield }}kg</n-text>
                      </n-space>
                    </n-list-item>
                    <n-list-item>
                      <n-space justify="space-between">
                        <n-text depth="3">种植日期</n-text>
                        <n-text>{{ item.plantDate }}</n-text>
                      </n-space>
                    </n-list-item>
                  </n-list>

                  <div class="progress-section">
                    <n-progress 
                      type="line"
                      :percentage="item.progress"
                      :color="getProgressColor(item.progress)"
                      :height="8"
                      :border-radius="4"
                    >
                      <n-text>生长进度 {{ item.progress }}%</n-text>
                    </n-progress>
                  </div>

                  <template #footer>
                    <n-space justify="end">
                      <n-button text size="small">
                        <template #icon>
                          <n-icon><EyeOutline /></n-icon>
                        </template>
                        查看详情
                      </n-button>
                      <n-button text size="small" type="info">
                        <template #icon>
                          <n-icon><CreateOutline /></n-icon>
                        </template>
                        记录生长
                      </n-button>
                    </n-space>
                  </template>
                </n-card>
              </n-grid-item>
            </n-grid>
          </n-tab-pane>

          <n-tab-pane name="history" tab="历史记录">
            <n-space vertical>
              <n-space justify="end">
                <n-date-picker 
                  value-format="yyyy-MM-dd"
                  type="daterange"
                  size="small"
                />
                <n-input-group>
                  <n-input placeholder="搜索...">
                    <template #prefix>
                      <n-icon><SearchOutline /></n-icon>
                    </template>
                  </n-input>
                  <n-button type="primary">搜索</n-button>
                </n-input-group>
              </n-space>

              <n-data-table 
                :columns="columns" 
                :data="data" 
                :pagination="pagination"
                :bordered="false"
              />
            </n-space>
          </n-tab-pane>
        </n-tabs>
      </n-card>
    </n-space>

    <n-back-top :right="40" />
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { 
  LeafOutline,
  NutritionOutline,
  CalendarOutline,
  AddOutline,
  DownloadOutline,
  SearchOutline,
  EyeOutline,
  CreateOutline
} from '@vicons/ionicons5'

const statistics = [
  {
    label: '种植面积',
    value: 150,
    unit: '亩',
    key: 'area',
    icon: LeafOutline,
    color: 'rgba(24, 160, 88, 0.1)',
    iconColor: '#18a058'
  },
  {
    label: '预计产量',
    value: 75000,
    unit: 'kg',
    key: 'yield',
    icon: NutritionOutline,
    color: 'rgba(32, 128, 240, 0.1)',
    iconColor: '#2080f0'
  },
  {
    label: '种植批次',
    value: 5,
    unit: '个',
    key: 'batches',
    icon: CalendarOutline,
    color: 'rgba(240, 160, 32, 0.1)',
    iconColor: '#f0a020'
  }
]

const currentPlanting = [
  {
    id: 1,
    name: '有机水稻',
    area: 100,
    expectedYield: 50000,
    plantDate: '2024-01-01',
    progress: 85,
    image: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg'
  },
  {
    id: 2,
    name: '绿色蔬菜',
    area: 50,
    expectedYield: 25000,
    plantDate: '2024-01-10',
    progress: 45,
    image: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg'
  },
  {
    id: 3,
    name: '水果种植',
    area: 30,
    expectedYield: 15000,
    plantDate: '2024-01-15',
    progress: 15,
    image: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg'
  }
]

const columns = [
  { title: '作物名称', key: 'name' },
  { title: '种植面积(亩)', key: 'area', align: 'right' },
  { title: '实际产量(kg)', key: 'yield', align: 'right' },
  { title: '种植日期', key: 'plantDate' },
  { title: '收获日期', key: 'harvestDate' },
  {
    title: '状态',
    key: 'status',
    render(row: any) {
      return h('div', {
        style: {
          color: row.status === 'completed' ? '#18a058' : '#2080f0'
        }
      }, row.status === 'completed' ? '已完成' : '进行中')
    }
  }
]

const data = []
const pagination = { pageSize: 10 }

function getStatusType(progress: number) {
  if (progress >= 80) return 'success'
  if (progress >= 30) return 'info'
  return 'warning'
}

function getStatusText(progress: number) {
  if (progress >= 80) return '即将收获'
  if (progress >= 30) return '生长中'
  return '幼苗期'
}

function getProgressColor(progress: number) {
  if (progress >= 80) return '#18a058'
  if (progress >= 30) return '#2080f0'
  return '#f0a020'
}
</script>

<style scoped>
.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px;
}

.shadow-card {
  transition: all 0.3s ease-in-out;
}

.shadow-card:hover {
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.stat-card {
  background: linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%);
  backdrop-filter: blur(10px);
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
}

.stat-card:hover .stat-icon {
  transform: scale(1.1) rotate(5deg);
}

.planting-card {
  background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease-in-out;
}

.planting-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.progress-section {
  margin: 16px 0 8px;
}

.mt-4 {
  margin-top: 16px;
}

:deep(.n-card) {
  border-radius: 8px;
}

:deep(.n-tag) {
  padding: 2px 10px;
}

:deep(.n-button) {
  transition: all 0.2s ease-in-out;
}

:deep(.n-button:not(.n-button--disabled):hover) {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

:deep(.n-list-item) {
  padding: 8px 0;
}

:deep(.n-tabs-tab) {
  transition: all 0.3s ease-in-out;
}

:deep(.n-tabs-tab:hover) {
  transform: translateY(-2px);
}
</style> 