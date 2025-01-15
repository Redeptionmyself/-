<template>
  <n-layout has-sider position="absolute">
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="200"
      :collapsed="collapsed"
      show-trigger
      @collapse="collapsed = true"
      @expand="collapsed = false"
      :native-scrollbar="false"
      class="layout-sider"
    >
      <div class="logo">
        <div class="logo-icon">BC</div>
        <h1 v-show="!collapsed">食品溯源链</h1>
      </div>
      <n-menu
        :collapsed="collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
        :value="activeKey"
        @update:value="handleMenuUpdate"
      />
    </n-layout-sider>
    <n-layout>
      <n-layout-header bordered class="layout-header">
        <div class="header-content">
          <div class="header-left">
            <n-button quaternary circle @click="collapsed = !collapsed">
              <template #icon>
                <n-icon size="20">
                  <MenuOutline />
                </n-icon>
              </template>
            </n-button>
            <n-breadcrumb>
              <n-breadcrumb-item>{{ currentRoute.meta?.title }}</n-breadcrumb-item>
            </n-breadcrumb>
          </div>
          <div class="header-right">
            <n-dropdown :options="userOptions" @select="handleUserSelect">
              <n-button text>
                管理员
                <template #icon>
                  <n-icon><ChevronDownOutline /></n-icon>
                </template>
              </n-button>
            </n-dropdown>
          </div>
        </div>
      </n-layout-header>
      <n-layout-content class="layout-content">
        <router-view></router-view>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import { ref, computed, h } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { 
  MenuOutline,
  HomeOutline,
  CubeOutline,
  LinkOutline,
  ServerOutline,
  ChevronDownOutline,
  PulseOutline,
  LeafOutline
} from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'

const collapsed = ref(false)
const route = useRoute()
const router = useRouter()

const currentRoute = computed(() => route)
const activeKey = computed(() => route.name as string)

function renderIcon(icon: any) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: '系统概览',
    key: 'Dashboard',
    icon: renderIcon(HomeOutline)
  },
  {
    label: '产品管理',
    key: 'products',
    icon: renderIcon(CubeOutline),
    children: [
      {
        label: '产品列表',
        key: 'ProductsList'
      },
      {
        label: '批次管理',
        key: 'BatchManagement'
      }
    ]
  },
  {
    label: 'IoT监控',
    key: 'iot',
    icon: renderIcon(PulseOutline),
    children: [
      {
        label: 'RFID记录',
        key: 'RFIDRecords'
      },
      {
        label: '环境监测',
        key: 'EnvironmentMonitor'
      },
      {
        label: '质量检测',
        key: 'QualityControl'
      }
    ]
  },
  {
    label: '生产管理',
    key: 'production',
    icon: renderIcon(LeafOutline),
    children: [
      {
        label: '种植记录',
        key: 'PlantingRecords'
      },
      {
        label: '农资使用',
        key: 'FarmingInputs'
      },
      {
        label: '生长数据',
        key: 'GrowthData'
      }
    ]
  },
  {
    label: '仓储物流',
    key: 'logistics',
    icon: renderIcon(CubeOutline),
    children: [
      {
        label: '仓储环境',
        key: 'StorageEnvironment'
      },
      {
        label: '运输追踪',
        key: 'TransportTracking'
      },
      {
        label: '冷链监控',
        key: 'ColdChainMonitor'
      }
    ]
  },
  {
    label: '区块链数据',
    key: 'blockchain',
    icon: renderIcon(ServerOutline),
    children: [
      {
        label: '交易记录',
        key: 'Transactions'
      },
      {
        label: '合约事件',
        key: 'ContractEvents'
      },
      {
        label: '节点状态',
        key: 'NodeStatus'
      }
    ]
  }
]

const userOptions = [
  {
    label: '退出登录',
    key: 'logout'
  }
]

function handleMenuUpdate(key: string) {
  router.push({ name: key })
}

function handleUserSelect(key: string) {
  if (key === 'logout') {
    window.$message.info('退出登录')
  }
}
</script>

<style scoped>
.layout-sider {
  background: #001529;
}

.logo {
  height: 48px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo-icon {
  width: 32px;
  height: 32px;
  background: #1890ff;
  color: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.logo h1 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.layout-header {
  height: 48px;
  background: white;
}

.header-content {
  height: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.layout-content {
  padding: 16px;
  background: #f0f2f5;
}

:deep(.n-menu) {
  background: #001529;
}

:deep(.n-menu .n-menu-item) {
  height: 48px;
}

:deep(.n-menu .n-menu-item:not(.n-menu-item--disabled):hover) {
  color: #1890ff;
}

:deep(.n-menu .n-menu-item.n-menu-item--selected) {
  color: #1890ff;
}
</style> 