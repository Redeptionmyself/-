<template>
  <div class="page-container">
    <n-space vertical>
      <n-tabs 
        type="card"
        animated
        v-model:value="activeTab"
        style="margin-top: -12px;"
      >
        <n-tab-pane 
          v-for="tab in tabs" 
          :key="tab.key"
          :name="tab.key"
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
            <n-grid :x-gap="12" :cols="3" v-if="tab.key === 'overview'">
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
                      <n-statistic :value="stat.value" :precision="1">
                        <template #suffix>{{ stat.unit }}</template>
                      </n-statistic>
                    </n-space>
                  </n-space>
                </n-card>
              </n-grid-item>
            </n-grid>

            <n-card 
              title="最新检测数据" 
              :bordered="false" 
              class="shadow-card mt-4"
            >
              <template #header-extra>
                <n-space>
                  <n-tag :bordered="false" type="success">
                    <template #icon>
                      <n-icon><CheckmarkCircleOutline /></n-icon>
                    </template>
                    全部合格
                  </n-tag>
                  <n-button quaternary circle>
                    <template #icon>
                      <n-icon><RefreshOutline /></n-icon>
                    </template>
                  </n-button>
                </n-space>
              </template>

              <n-grid :cols="2" :x-gap="12">
                <n-grid-item>
                  <n-list hoverable clickable>
                    <n-list-item v-for="item in latestData" :key="item.key">
                      <n-thing :title="item.label" :description="item.description">
                        <template #header-extra>
                          <n-tag 
                            :type="item.status" 
                            :bordered="false"
                            round
                          >
                            {{ item.value }} {{ item.unit }}
                          </n-tag>
                        </template>
                        <template #description>
                          <n-progress
                            type="line"
                            :percentage="item.percentage"
                            :color="item.status === 'success' ? '#18a058' : '#f0a020'"
                            :height="4"
                            :show-indicator="false"
                          />
                        </template>
                      </n-thing>
                    </n-list-item>
                  </n-list>
                </n-grid-item>
                <n-grid-item>
                  <div class="chart-container">
                    <n-empty description="暂无图表数据">
                      <template #extra>
                        <n-button size="small">
                          刷新数据
                        </n-button>
                      </template>
                    </n-empty>
                  </div>
                </n-grid-item>
              </n-grid>
            </n-card>

            <n-card 
              title="历史记录" 
              :bordered="false" 
              class="shadow-card mt-4"
            >
              <template #header-extra>
                <n-space>
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
                :data="tableData" 
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
import { ref } from 'vue'
import { 
  CheckmarkCircleOutline,
  WarningOutline,
  SearchOutline,
  DownloadOutline,
  FilterOutline,
  RefreshOutline,
  FlaskOutline,
  SpeedometerOutline,
  LeafOutline
} from '@vicons/ionicons5'

const activeTab = ref('overview')
const tabs = [
  {
    key: 'overview',
    tab: '质量概览',
    icon: SpeedometerOutline,
    iconColor: '#2080f0'
  },
  {
    key: 'pesticide',
    tab: '农残检测',
    icon: FlaskOutline,
    iconColor: '#18a058'
  },
  {
    key: 'nutrition',
    tab: '营养成分',
    icon: LeafOutline,
    iconColor: '#f0a020'
  }
]

const statistics = [
  {
    label: '合格率',
    value: 98.5,
    unit: '%',
    key: 'qualified',
    icon: CheckmarkCircleOutline,
    color: 'rgba(24, 160, 88, 0.1)',
    iconColor: '#18a058'
  },
  {
    label: '待检测',
    value: 12,
    unit: '批次',
    key: 'pending',
    icon: WarningOutline,
    color: 'rgba(240, 160, 32, 0.1)',
    iconColor: '#f0a020'
  },
  {
    label: '不合格',
    value: 2,
    unit: '批次',
    key: 'failed',
    icon: FlaskOutline,
    color: 'rgba(208, 48, 80, 0.1)',
    iconColor: '#d03050'
  }
]

const latestData = [
  {
    label: '农药残留',
    value: '0.05',
    unit: 'mg/kg',
    key: 'pesticide',
    status: 'success',
    percentage: 85,
    description: '低于国家标准 (0.1mg/kg)'
  },
  {
    label: '重金属含量',
    value: '0.001',
    unit: 'mg/kg',
    key: 'metal',
    status: 'success',
    percentage: 95,
    description: '低于国家标准 (0.01mg/kg)'
  },
  {
    label: '微生物指标',
    value: '合格',
    unit: '',
    key: 'microbe',
    status: 'success',
    percentage: 100,
    description: '符合食品安全标准'
  }
]

const columns = [
  { title: '检测编号', key: 'id', width: 120 },
  { title: '检测项目', key: 'item' },
  { 
    title: '检测结果',
    key: 'result',
    render(row: any) {
      return h('div', {
        style: {
          color: row.status === 'normal' ? '#18a058' : '#d03050'
        }
      }, row.result)
    }
  },
  { title: '标准值', key: 'standard' },
  { title: '检测时间', key: 'time' },
  {
    title: '状态',
    key: 'status',
    render(row: any) {
      return h(NTag, {
        type: row.status === 'normal' ? 'success' : 'warning',
        round: true,
        bordered: false
      }, { default: () => row.status === 'normal' ? '合格' : '不合格' })
    }
  }
]

const tableData = [
  {
    id: 'QC20240114001',
    item: '农药残留',
    result: '0.05 mg/kg',
    standard: '≤0.1 mg/kg',
    time: '2024-01-14 10:00:00',
    status: 'normal'
  }
]

const pagination = { pageSize: 10 }
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

:deep(.n-list-item) {
  padding: 8px 12px;
  transition: all 0.2s ease-in-out;
}

:deep(.n-list-item:hover) {
  transform: translateX(4px);
}

:deep(.n-button) {
  transition: all 0.2s ease-in-out;
}

:deep(.n-button:not(.n-button--disabled):hover) {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

:deep(.n-tabs-tab) {
  transition: all 0.3s ease-in-out;
}

:deep(.n-tabs-tab:hover) {
  transform: translateY(-2px);
}
</style> 