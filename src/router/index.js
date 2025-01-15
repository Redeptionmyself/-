import { createRouter, createWebHashHistory } from 'vue-router';
import BasicLayout from '@/layouts/BasicLayout.vue';

const routes = [
    {
        path: '/',
        component: BasicLayout,
        children: [
            {
                path: '',
                name: 'Dashboard',
                component: () => import('@/views/dashboard/index.vue'),
                meta: {
                    title: '系统概览'
                }
            },
            {
                path: 'products/list',
                name: 'ProductsList',
                component: () => import('@/views/products/list.vue'),
                meta: {
                    title: '产品列表'
                }
            },
            {
                path: 'products/batch',
                name: 'BatchManagement',
                component: () => import('@/views/products/batch.vue'),
                meta: {
                    title: '批次管理'
                }
            },
            {
                path: 'iot/rfid',
                name: 'RFIDRecords',
                component: () => import('@/views/iot/rfid.vue'),
                meta: {
                    title: 'RFID记录'
                }
            },
            {
                path: 'iot/environment',
                name: 'EnvironmentMonitor',
                component: () => import('@/views/iot/environment.vue'),
                meta: {
                    title: '环境监测'
                }
            },
            {
                path: 'iot/quality',
                name: 'QualityControl',
                component: () => import('@/views/iot/quality.vue'),
                meta: {
                    title: '质量检测'
                }
            },
            {
                path: 'production/planting',
                name: 'PlantingRecords',
                component: () => import('@/views/production/planting.vue'),
                meta: {
                    title: '种植记录'
                }
            },
            {
                path: 'production/Inputs',
                name: 'FarmingInputs',
                component: () => import('@/views/production/Inputs.vue'),
                meta: {
                    title: '农资使用'
                }
            },
            {
                path: 'production/growth',
                name: 'GrowthData',
                component: () => import('@/views/production/growth.vue'),
                meta: {
                    title: '生长数据'
                }
            },
            {
                path: 'logistics/storage',
                name: 'StorageEnvironment',
                component: () => import('@/views/logistics/storage.vue'),
                meta: {
                    title: '仓储环境'
                }
            },
            {
                path: 'logistics/transport',
                name: 'TransportTracking',
                component: () => import('@/views/logistics/transport.vue'),
                meta: {
                    title: '运输追踪'
                }
            },
            {
                path: 'logistics/coldchain',
                name: 'ColdChainMonitor',
                component: () => import('@/views/logistics/coldchain.vue'),
                meta: {
                    title: '冷链监控'
                }
            },
            {
                path: 'blockchain/transactions',
                name: 'Transactions',
                component: () => import('@/views/blockchain/transactions.vue'),
                meta: {
                    title: '交易记录'
                }
            },
            {
                path: 'blockchain/events',
                name: 'ContractEvents',
                component: () => import('@/views/blockchain/events.vue'),
                meta: {
                    title: '合约事件'
                }
            },
            {
                path: 'blockchain/nodes',
                name: 'NodeStatus',
                component: () => import('@/views/blockchain/nodes.vue'),
                meta: {
                    title: '节点状态'
                }
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/404.vue')
    }
];
const router = createRouter({
    history: createWebHashHistory('/-/'),
    routes,
    scrollBehavior: () => ({ left: 0, top: 0 })
});

router.onError((error) => {
    console.error('Router Error:', error)
})

export default router;
