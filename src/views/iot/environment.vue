<template>
  <div class="page-container">
    <n-space vertical>
      <n-tabs 
        type="card"
        animated
        closable
        v-model:value="activeTab"
        @close="handleClose"
        style="margin-top: -12px;"
      >
        <n-tab-pane 
          v-for="tab in tabs" 
          :key="tab.key"
          :name="tab.key"
          :tab="tab.tab"
          :closable="tab.key !== 'main'"
        >
          <template #tab>
            <n-space align="center" :size="4">
              <n-icon :color="tab.iconColor" :size="16">
                <component :is="tab.icon" />
              </n-icon>
              {{ tab.tab }}
            </n-space>
          </template>

          <div class="tab-content">
            <n-grid :cols="2" :x-gap="12" v-if="tab.key === 'main'">
              <n-grid-item>
                <n-card title="实时环境数据" :bordered="false" class="shadow-card">
                  <template #header-extra>
                    <n-space>
                      <n-tag :bordered="false" type="success">
                        <template #icon>
                          <n-icon><CheckmarkCircleOutline /></n-icon>
                        </template>
                        数据正常
                      </n-tag>
                      <n-button quaternary circle size="small">
                        <template #icon>
                          <n-icon><RefreshOutline /></n-icon>
                        </template>
                      </n-button>
                    </n-space>
                  </template>
                  <n-grid :cols="2" :x-gap="12" :y-gap="8">
                    <n-grid-item v-for="item in envData" :key="item.key">
                      <n-card :bordered="false" class="data-card">
                        <n-space vertical :size="4">
                          <n-space justify="space-between">
                            <n-text depth="3">{{ item.label }}</n-text>
                            <n-icon :color="item.color" :size="20">
                              <component :is="item.icon" />
                            </n-icon>
                          </n-space>
                          <n-statistic :value="item.value" :precision="1">
                            <template #suffix>{{ item.unit }}</template>
                          </n-statistic>
                          <n-progress 
                            type="line"
                            :percentage="item.percentage"
                            :color="item.color"
                            :height="4"
                            :show-indicator="false"
                          />
                        </n-space>
                      </n-card>
                    </n-grid-item>
                  </n-grid>
                </n-card>
              </n-grid-item>
              <n-grid-item>
                <n-card title="24小时趋势" :bordered="false" class="shadow-card">
                  <template #header-extra>
                    <n-space>
                      <n-select 
                        v-model:value="chartType"
                        :options="chartOptions"
                        size="small"
                      />
                      <n-button-group size="small">
                        <n-button>日</n-button>
                        <n-button type="primary">周</n-button>
                        <n-button>月</n-button>
                      </n-button-group>
                    </n-space>
                  </template>
                  <div class="chart-container">
                    <n-spin :show="true">
                      <template #description>
                        加载中...
                      </template>
                      图表区域
                    </n-spin>
                  </div>
                </n-card>
              </n-grid-item>
            </n-grid>

            <n-card 
              title="历史记录" 
              :bordered="false" 
              class="shadow-card mt-4"
            >
              <template #header-extra>
                <n-space>
                  <n-input-group>
                    <n-input placeholder="搜索...">
                      <template #prefix>
                        <n-icon><SearchOutline /></n-icon>
                      </template>
                    </n-input>
                    <n-button type="primary">搜索</n-button>
                  </n-input-group>
                  <n-button-group>
                    <n-button>
                      <template #icon>
                        <n-icon><DownloadOutline /></n-icon>
                      </template>
                      导出
                    </n-button>
                    <n-button type="info">
                      <template #icon>
                        <n-icon><FilterOutline /></n-icon>
                      </template>
                      筛选
                    </n-button>
                  </n-button-group>
                </n-space>
              </template>
              <n-data-table 
                :columns="columns" 
                :data="data" 
                :pagination="pagination"
                :bordered="false"
              />
            </n-card>
          </div>
        </n-tab-pane>
      </n-tabs>
    </n-space>

    <n-back-top :right="40" />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { 
  ThermometerOutline,
  WaterOutline,
  SunnyOutline,
  LeafOutline,
  CheckmarkCircleOutline,
  RefreshOutline,
  SearchOutline,
  DownloadOutline,
  FilterOutline,
  AnalyticsOutline,
  StatsChartOutline,
  PulseOutline
} from '@vicons/ionicons5'
import NGradientText from 'path/to/NGradientText'

const activeTab = ref('main')
const tabs = [
  { 
    key: 'main',
    tab: '环境监控',
    icon: PulseOutline,
    iconColor: '#2080f0'
  },
  {
    key: 'analysis',
    tab: '数据分析',
    icon: AnalyticsOutline,
    iconColor: '#18a058'
  },
  {
    key: 'report',
    tab: '统计报表',
    icon: StatsChartOutline,
    iconColor: '#f0a020'
  }
]

const envData = [
  { 
    label: '温度',
    value: 25.6,
    unit: '°C',
    key: 'temp',
    icon: ThermometerOutline,
    color: '#d03050',
    percentage: 75
  },
  {
    label: '湿度',
    value: 65,
    unit: '%',
    key: 'humidity',
    icon: WaterOutline,
    color: '#2080f0',
    percentage: 65
  },
  {
    label: '光照',
    value: 12000,
    unit: 'Lux',
    key: 'light',
    icon: SunnyOutline,
    color: '#f0a020',
    percentage: 80
  },
  {
    label: 'CO2',
    value: 450,
    unit: 'ppm',
    key: 'co2',
    icon: LeafOutline,
    color: '#18a058',
    percentage: 45
  }
]

const columns = [
  { 
    title: '记录时间',
    key: 'time',
    width: 180
  },
  { 
    title: '温度(°C)',
    key: 'temperature',
    align: 'right',
    render(row: any) {
      return h(NGradientText, {
        gradient: {
          from: '#d03050',
          to: '#f0a020'
        }
      }, { default: () => row.temperature })
    }
  },
  {
    title: '湿度(%)',
    key: 'humidity',
    align: 'right'
  },
  {
    title: '光照(Lux)',
    key: 'light',
    align: 'right'
  },
  {
    title: 'CO2(ppm)',
    key: 'co2',
    align: 'right'
  },
  {
    title: '状态',
    key: 'status',
    render(row: any) {
      return h(NTag, {
        type: row.status === 'normal' ? 'success' : 'warning',
        round: true,
        bordered: false
      }, { default: () => row.status === 'normal' ? '正常' : '异常' })
    }
  }
]

const chartType = ref('line')
const chartOptions = [
  { label: '折线图', value: 'line' },
  { label: '面积图', value: 'area' },
  { label: '柱状图', value: 'bar' }
]

const data = [
  {
    time: '2024-01-14 10:00:00',
    temperature: 25.6,
    humidity: 65,
    light: 12000,
    co2: 450,
    status: 'normal'
  }
]
const pagination = { pageSize: 10 }

function handleClose(name: string) {
  const index = tabs.findIndex(tab => tab.key === name)
  if (index !== -1) {
    tabs.splice(index, 1)
    if (name === activeTab.value) {
      activeTab.value = tabs[0].key
    }
  }
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

.data-card {
  background: linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 100%);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease-in-out;
}

.data-card:hover {
  transform: scale(1.02);
}

.mt-4 {
  margin-top: 16px;
}

.chart-container {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  border-radius: 4px;
}

.tab-content {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

:deep(.n-card) {
  border-radius: 8px;
}

:deep(.n-tag) {
  padding: 2px 10px;
}

:deep(.n-tabs-tab) {
  transition: all 0.3s ease-in-out;
}

:deep(.n-tabs-tab:hover) {
  transform: translateY(-2px);
}

:deep(.n-button) {
  transition: all 0.2s ease-in-out;
}

:deep(.n-button:not(.n-button--disabled):hover) {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style> 