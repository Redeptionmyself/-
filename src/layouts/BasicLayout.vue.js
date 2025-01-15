/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { ref, computed, h } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { MenuOutline, HomeOutline, CubeOutline, ServerOutline, ChevronDownOutline, PulseOutline, LeafOutline } from '@vicons/ionicons5';
import { NIcon } from 'naive-ui';
const collapsed = ref(false);
const route = useRoute();
const router = useRouter();
const currentRoute = computed(() => route);
const activeKey = computed(() => route.name);
function renderIcon(icon) {
    return () => h(NIcon, null, { default: () => h(icon) });
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
];
const userOptions = [
    {
        label: '退出登录',
        key: 'logout'
    }
];
function handleMenuUpdate(key) {
    router.push({ name: key });
}
function handleUserSelect(key) {
    if (key === 'logout') {
        window.$message.info('退出登录');
    }
}
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['logo', 'n-menu', 'n-menu', 'n-menu-item', 'n-menu', 'n-menu-item',];
    // CSS variable injection 
    // CSS variable injection end 
    const __VLS_0 = {}.NLayout;
    /** @type { [typeof __VLS_components.NLayout, typeof __VLS_components.nLayout, typeof __VLS_components.NLayout, typeof __VLS_components.nLayout, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        hasSider: (true),
        position: ("absolute"),
    }));
    const __VLS_2 = __VLS_1({
        hasSider: (true),
        position: ("absolute"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    const __VLS_7 = {}.NLayoutSider;
    /** @type { [typeof __VLS_components.NLayoutSider, typeof __VLS_components.nLayoutSider, typeof __VLS_components.NLayoutSider, typeof __VLS_components.nLayoutSider, ] } */ ;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
        ...{ 'onCollapse': {} },
        ...{ 'onExpand': {} },
        bordered: (true),
        collapseMode: ("width"),
        collapsedWidth: ((64)),
        width: ((200)),
        collapsed: ((__VLS_ctx.collapsed)),
        showTrigger: (true),
        nativeScrollbar: ((false)),
        ...{ class: ("layout-sider") },
    }));
    const __VLS_9 = __VLS_8({
        ...{ 'onCollapse': {} },
        ...{ 'onExpand': {} },
        bordered: (true),
        collapseMode: ("width"),
        collapsedWidth: ((64)),
        width: ((200)),
        collapsed: ((__VLS_ctx.collapsed)),
        showTrigger: (true),
        nativeScrollbar: ((false)),
        ...{ class: ("layout-sider") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    let __VLS_13;
    const __VLS_14 = {
        onCollapse: (...[$event]) => {
            __VLS_ctx.collapsed = true;
        }
    };
    const __VLS_15 = {
        onExpand: (...[$event]) => {
            __VLS_ctx.collapsed = false;
        }
    };
    let __VLS_10;
    let __VLS_11;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("logo") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("logo-icon") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (!__VLS_ctx.collapsed) }, null, null);
    const __VLS_16 = {}.NMenu;
    /** @type { [typeof __VLS_components.NMenu, typeof __VLS_components.nMenu, ] } */ ;
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
        ...{ 'onUpdate:value': {} },
        collapsed: ((__VLS_ctx.collapsed)),
        collapsedWidth: ((64)),
        collapsedIconSize: ((22)),
        options: ((__VLS_ctx.menuOptions)),
        value: ((__VLS_ctx.activeKey)),
    }));
    const __VLS_18 = __VLS_17({
        ...{ 'onUpdate:value': {} },
        collapsed: ((__VLS_ctx.collapsed)),
        collapsedWidth: ((64)),
        collapsedIconSize: ((22)),
        options: ((__VLS_ctx.menuOptions)),
        value: ((__VLS_ctx.activeKey)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    let __VLS_22;
    const __VLS_23 = {
        'onUpdate:value': (__VLS_ctx.handleMenuUpdate)
    };
    let __VLS_19;
    let __VLS_20;
    var __VLS_21;
    __VLS_12.slots.default;
    var __VLS_12;
    const __VLS_24 = {}.NLayout;
    /** @type { [typeof __VLS_components.NLayout, typeof __VLS_components.nLayout, typeof __VLS_components.NLayout, typeof __VLS_components.nLayout, ] } */ ;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
    const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
    const __VLS_30 = {}.NLayoutHeader;
    /** @type { [typeof __VLS_components.NLayoutHeader, typeof __VLS_components.nLayoutHeader, typeof __VLS_components.NLayoutHeader, typeof __VLS_components.nLayoutHeader, ] } */ ;
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({
        bordered: (true),
        ...{ class: ("layout-header") },
    }));
    const __VLS_32 = __VLS_31({
        bordered: (true),
        ...{ class: ("layout-header") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("header-content") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("header-left") },
    });
    const __VLS_36 = {}.NButton;
    /** @type { [typeof __VLS_components.NButton, typeof __VLS_components.nButton, typeof __VLS_components.NButton, typeof __VLS_components.nButton, ] } */ ;
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
        ...{ 'onClick': {} },
        quaternary: (true),
        circle: (true),
    }));
    const __VLS_38 = __VLS_37({
        ...{ 'onClick': {} },
        quaternary: (true),
        circle: (true),
    }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    let __VLS_42;
    const __VLS_43 = {
        onClick: (...[$event]) => {
            __VLS_ctx.collapsed = !__VLS_ctx.collapsed;
        }
    };
    let __VLS_39;
    let __VLS_40;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { icon: __VLS_thisSlot } = __VLS_41.slots;
        const __VLS_44 = {}.NIcon;
        /** @type { [typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, ] } */ ;
        // @ts-ignore
        const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
            size: ("20"),
        }));
        const __VLS_46 = __VLS_45({
            size: ("20"),
        }, ...__VLS_functionalComponentArgsRest(__VLS_45));
        const __VLS_50 = {}.MenuOutline;
        /** @type { [typeof __VLS_components.MenuOutline, ] } */ ;
        // @ts-ignore
        const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({}));
        const __VLS_52 = __VLS_51({}, ...__VLS_functionalComponentArgsRest(__VLS_51));
        __VLS_49.slots.default;
        var __VLS_49;
    }
    var __VLS_41;
    const __VLS_56 = {}.NBreadcrumb;
    /** @type { [typeof __VLS_components.NBreadcrumb, typeof __VLS_components.nBreadcrumb, typeof __VLS_components.NBreadcrumb, typeof __VLS_components.nBreadcrumb, ] } */ ;
    // @ts-ignore
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({}));
    const __VLS_58 = __VLS_57({}, ...__VLS_functionalComponentArgsRest(__VLS_57));
    const __VLS_62 = {}.NBreadcrumbItem;
    /** @type { [typeof __VLS_components.NBreadcrumbItem, typeof __VLS_components.nBreadcrumbItem, typeof __VLS_components.NBreadcrumbItem, typeof __VLS_components.nBreadcrumbItem, ] } */ ;
    // @ts-ignore
    const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({}));
    const __VLS_64 = __VLS_63({}, ...__VLS_functionalComponentArgsRest(__VLS_63));
    (__VLS_ctx.currentRoute.meta?.title);
    __VLS_67.slots.default;
    var __VLS_67;
    __VLS_61.slots.default;
    var __VLS_61;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("header-right") },
    });
    const __VLS_68 = {}.NDropdown;
    /** @type { [typeof __VLS_components.NDropdown, typeof __VLS_components.nDropdown, typeof __VLS_components.NDropdown, typeof __VLS_components.nDropdown, ] } */ ;
    // @ts-ignore
    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({
        ...{ 'onSelect': {} },
        options: ((__VLS_ctx.userOptions)),
    }));
    const __VLS_70 = __VLS_69({
        ...{ 'onSelect': {} },
        options: ((__VLS_ctx.userOptions)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_69));
    let __VLS_74;
    const __VLS_75 = {
        onSelect: (__VLS_ctx.handleUserSelect)
    };
    let __VLS_71;
    let __VLS_72;
    const __VLS_76 = {}.NButton;
    /** @type { [typeof __VLS_components.NButton, typeof __VLS_components.nButton, typeof __VLS_components.NButton, typeof __VLS_components.nButton, ] } */ ;
    // @ts-ignore
    const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({
        text: (true),
    }));
    const __VLS_78 = __VLS_77({
        text: (true),
    }, ...__VLS_functionalComponentArgsRest(__VLS_77));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { icon: __VLS_thisSlot } = __VLS_81.slots;
        const __VLS_82 = {}.NIcon;
        /** @type { [typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, ] } */ ;
        // @ts-ignore
        const __VLS_83 = __VLS_asFunctionalComponent(__VLS_82, new __VLS_82({}));
        const __VLS_84 = __VLS_83({}, ...__VLS_functionalComponentArgsRest(__VLS_83));
        const __VLS_88 = {}.ChevronDownOutline;
        /** @type { [typeof __VLS_components.ChevronDownOutline, ] } */ ;
        // @ts-ignore
        const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({}));
        const __VLS_90 = __VLS_89({}, ...__VLS_functionalComponentArgsRest(__VLS_89));
        __VLS_87.slots.default;
        var __VLS_87;
    }
    var __VLS_81;
    __VLS_73.slots.default;
    var __VLS_73;
    __VLS_35.slots.default;
    var __VLS_35;
    const __VLS_94 = {}.NLayoutContent;
    /** @type { [typeof __VLS_components.NLayoutContent, typeof __VLS_components.nLayoutContent, typeof __VLS_components.NLayoutContent, typeof __VLS_components.nLayoutContent, ] } */ ;
    // @ts-ignore
    const __VLS_95 = __VLS_asFunctionalComponent(__VLS_94, new __VLS_94({
        ...{ class: ("layout-content") },
    }));
    const __VLS_96 = __VLS_95({
        ...{ class: ("layout-content") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_95));
    const __VLS_100 = {}.RouterView;
    /** @type { [typeof __VLS_components.RouterView, typeof __VLS_components.routerView, typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ] } */ ;
    // @ts-ignore
    const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({}));
    const __VLS_102 = __VLS_101({}, ...__VLS_functionalComponentArgsRest(__VLS_101));
    __VLS_99.slots.default;
    var __VLS_99;
    __VLS_29.slots.default;
    var __VLS_29;
    __VLS_5.slots.default;
    var __VLS_5;
    ['layout-sider', 'logo', 'logo-icon', 'layout-header', 'header-content', 'header-left', 'header-right', 'layout-content',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            MenuOutline: MenuOutline,
            ChevronDownOutline: ChevronDownOutline,
            NIcon: NIcon,
            collapsed: collapsed,
            currentRoute: currentRoute,
            activeKey: activeKey,
            menuOptions: menuOptions,
            userOptions: userOptions,
            handleMenuUpdate: handleMenuUpdate,
            handleUserSelect: handleUserSelect,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
