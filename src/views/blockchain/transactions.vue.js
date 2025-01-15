import { ref, h } from 'vue';
import { ServerOutline, SwapHorizontalOutline, TimeOutline, PulseOutline, SearchOutline, DownloadOutline, RefreshOutline, EyeOutline, DocumentTextOutline } from '@vicons/ionicons5';
import { useCustomNotification } from '@/components/useNotification';
const notification = useCustomNotification();
const statistics = [
    {
        label: '区块高度',
        value: 12345,
        unit: '块',
        key: 'blocks',
        icon: ServerOutline,
        color: 'rgba(24, 160, 88, 0.1)',
        iconColor: '#18a058'
    },
    {
        label: '交易总数',
        value: 54321,
        unit: '笔',
        key: 'transactions',
        icon: SwapHorizontalOutline,
        color: 'rgba(32, 128, 240, 0.1)',
        iconColor: '#2080f0'
    },
    {
        label: '平均出块时间',
        value: 2.5,
        unit: '秒',
        key: 'blockTime',
        icon: TimeOutline,
        color: 'rgba(240, 160, 32, 0.1)',
        iconColor: '#f0a020'
    },
    {
        label: 'TPS',
        value: 1234,
        unit: '笔/秒',
        key: 'tps',
        icon: PulseOutline,
        color: 'rgba(208, 48, 80, 0.1)',
        iconColor: '#d03050'
    }
];
const chainType = ref('main');
const chainOptions = [
    { label: '主链', value: 'main' },
    { label: '测试链', value: 'test' }
];
const transactionColumns = [
    {
        title: '交易哈希',
        key: 'hash',
        width: 180,
        ellipsis: {
            tooltip: true
        }
    },
    { title: '区块高度', key: 'blockHeight', width: 100 },
    { title: '时间戳', key: 'timestamp', width: 180 },
    { title: '发送方', key: 'from', ellipsis: true },
    { title: '接收方', key: 'to', ellipsis: true },
    {
        title: '状态',
        key: 'status',
        width: 100,
        render(row) {
            return h('div', {
                style: {
                    color: row.status === 'success' ? '#18a058' : '#d03050'
                }
            }, row.status === 'success' ? '成功' : '失败');
        }
    }
];
const transactions = [
    {
        hash: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
        blockHeight: 12345,
        timestamp: '2024-01-14 10:00:00',
        from: '0x1234567890abcdef1234567890abcdef12345678',
        to: '0xabcdef1234567890abcdef1234567890abcdef12',
        status: 'success'
    }
];
const contractEvents = [
    {
        id: 1,
        type: 'success',
        title: '产品注册',
        content: '新产品已成功注册到区块链',
        time: '2024-01-14 10:00:00',
        icon: DocumentTextOutline,
        iconColor: '#18a058',
        details: [
            { label: '交易哈希', value: '0x1234...5678', key: 'hash' },
            { label: '产品ID', value: 'PROD001', key: 'productId' },
            { label: '操作人', value: '0xabcd...ef12', key: 'operator' },
            { label: '区块高度', value: '12345', key: 'blockHeight' }
        ]
    }
];
const nodes = [
    {
        id: 1,
        name: '节点-1',
        status: 'success',
        statusText: '运行中',
        blockHeight: 12345,
        txCount: 54321,
        updateTime: '2024-01-14 10:00:00'
    },
    {
        id: 2,
        name: '节点-2',
        status: 'warning',
        statusText: '同步中',
        blockHeight: 12340,
        txCount: 54310,
        updateTime: '2024-01-14 09:59:00'
    }
];
const pagination = { pageSize: 10 };
const searchHash = ref('');
const loading = ref(false);
async function handleRefresh() {
    await notification.withLoading(async () => {
        // 模拟异步请求
        await new Promise(resolve => setTimeout(resolve, 1500));
        // 这里可以添加实际的刷新逻辑
    }, {
        successTitle: '刷新成功',
        successContent: '数据已更新',
        errorTitle: '刷新失败',
        errorContent: '请稍后重试'
    });
}
async function handleExport() {
    notification.confirm({
        title: '确认导出',
        content: '是否导出当前数据？',
        async onPositiveClick() {
            await notification.withLoading(async () => {
                // 模拟导出过程
                await new Promise(resolve => setTimeout(resolve, 2000));
                // 这里可以添加实际的导出逻辑
            }, {
                successTitle: '导出成功',
                successContent: '数据已导出到文件',
                errorTitle: '导出失败',
                errorContent: '请稍后重试'
            });
        }
    });
}
async function handleSearch(hash) {
    if (!hash) {
        notification.warning('请输入交易哈希');
        return;
    }
    await notification.withLoading(async () => {
        // 模拟搜索过程
        await new Promise(resolve => setTimeout(resolve, 1000));
        // 这里可以添加实际的搜索逻辑
    }, {
        successTitle: '搜索完成',
        errorTitle: '搜索失败',
        errorContent: '请检查输入的哈希值'
    });
}
async function handleNodeDetail(node) {
    await notification.withLoading(async () => {
        // 模拟加载过程
        await new Promise(resolve => setTimeout(resolve, 1000));
        // 这里可以添加实际的节点详情加载逻辑
    }, {
        successTitle: '加载完成',
        errorTitle: '加载失败',
        errorContent: '无法获取节点详情'
    });
}
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['shadow-card', 'stat-card', 'stat-icon', 'node-card', 'node-status', 'node-status', 'node-status', 'n-button', 'n-tabs-tab',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("page-container") },
    });
    const __VLS_0 = {}.NSpace;
    /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        vertical: (true),
    }));
    const __VLS_2 = __VLS_1({
        vertical: (true),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = {}.NGrid;
    /** @type { [typeof __VLS_components.NGrid, typeof __VLS_components.nGrid, typeof __VLS_components.NGrid, typeof __VLS_components.nGrid, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
        cols: ((4)),
        xGap: ((12)),
    }));
    const __VLS_8 = __VLS_7({
        cols: ((4)),
        xGap: ((12)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    for (const [stat] of __VLS_getVForSourceType((__VLS_ctx.statistics))) {
        const __VLS_12 = {}.NGridItem;
        /** @type { [typeof __VLS_components.NGridItem, typeof __VLS_components.nGridItem, typeof __VLS_components.NGridItem, typeof __VLS_components.nGridItem, ] } */ ;
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
            key: ((stat.key)),
        }));
        const __VLS_14 = __VLS_13({
            key: ((stat.key)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        const __VLS_18 = {}.NCard;
        /** @type { [typeof __VLS_components.NCard, typeof __VLS_components.nCard, typeof __VLS_components.NCard, typeof __VLS_components.nCard, ] } */ ;
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({
            bordered: ((false)),
            ...{ class: ("shadow-card stat-card") },
        }));
        const __VLS_20 = __VLS_19({
            bordered: ((false)),
            ...{ class: ("shadow-card stat-card") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        const __VLS_24 = {}.NSpace;
        /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
            align: ("center"),
            size: ((12)),
        }));
        const __VLS_26 = __VLS_25({
            align: ("center"),
            size: ((12)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("stat-icon") },
            ...{ style: (({ background: stat.color })) },
        });
        const __VLS_30 = {}.NIcon;
        /** @type { [typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, ] } */ ;
        // @ts-ignore
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({
            size: ((24)),
            color: ((stat.iconColor)),
        }));
        const __VLS_32 = __VLS_31({
            size: ((24)),
            color: ((stat.iconColor)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        const __VLS_36 = ((stat.icon));
        // @ts-ignore
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
        const __VLS_38 = __VLS_37({}, ...__VLS_functionalComponentArgsRest(__VLS_37));
        __VLS_35.slots.default;
        var __VLS_35;
        const __VLS_42 = {}.NSpace;
        /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
        // @ts-ignore
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({
            vertical: (true),
            size: ((2)),
        }));
        const __VLS_44 = __VLS_43({
            vertical: (true),
            size: ((2)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_43));
        const __VLS_48 = {}.NText;
        /** @type { [typeof __VLS_components.NText, typeof __VLS_components.nText, typeof __VLS_components.NText, typeof __VLS_components.nText, ] } */ ;
        // @ts-ignore
        const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({
            depth: ("3"),
        }));
        const __VLS_50 = __VLS_49({
            depth: ("3"),
        }, ...__VLS_functionalComponentArgsRest(__VLS_49));
        (stat.label);
        __VLS_53.slots.default;
        var __VLS_53;
        const __VLS_54 = {}.NStatistic;
        /** @type { [typeof __VLS_components.NStatistic, typeof __VLS_components.nStatistic, typeof __VLS_components.NStatistic, typeof __VLS_components.nStatistic, ] } */ ;
        // @ts-ignore
        const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({
            value: ((stat.value)),
        }));
        const __VLS_56 = __VLS_55({
            value: ((stat.value)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_55));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { suffix: __VLS_thisSlot } = __VLS_59.slots;
            (stat.unit);
        }
        var __VLS_59;
        __VLS_47.slots.default;
        var __VLS_47;
        __VLS_29.slots.default;
        var __VLS_29;
        __VLS_23.slots.default;
        var __VLS_23;
        __VLS_17.slots.default;
        var __VLS_17;
    }
    __VLS_11.slots.default;
    var __VLS_11;
    const __VLS_60 = {}.NCard;
    /** @type { [typeof __VLS_components.NCard, typeof __VLS_components.nCard, typeof __VLS_components.NCard, typeof __VLS_components.nCard, ] } */ ;
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
        title: ("区块链数据"),
        bordered: ((false)),
        ...{ class: ("shadow-card mt-4") },
    }));
    const __VLS_62 = __VLS_61({
        title: ("区块链数据"),
        bordered: ((false)),
        ...{ class: ("shadow-card mt-4") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { 'header-extra': __VLS_thisSlot } = __VLS_65.slots;
        const __VLS_66 = {}.NSpace;
        /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
        // @ts-ignore
        const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({}));
        const __VLS_68 = __VLS_67({}, ...__VLS_functionalComponentArgsRest(__VLS_67));
        const __VLS_72 = {}.NSelect;
        /** @type { [typeof __VLS_components.NSelect, typeof __VLS_components.nSelect, ] } */ ;
        // @ts-ignore
        const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({
            value: ((__VLS_ctx.chainType)),
            options: ((__VLS_ctx.chainOptions)),
            size: ("small"),
            ...{ style: ({}) },
        }));
        const __VLS_74 = __VLS_73({
            value: ((__VLS_ctx.chainType)),
            options: ((__VLS_ctx.chainOptions)),
            size: ("small"),
            ...{ style: ({}) },
        }, ...__VLS_functionalComponentArgsRest(__VLS_73));
        const __VLS_78 = {}.NButtonGroup;
        /** @type { [typeof __VLS_components.NButtonGroup, typeof __VLS_components.nButtonGroup, typeof __VLS_components.NButtonGroup, typeof __VLS_components.nButtonGroup, ] } */ ;
        // @ts-ignore
        const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({}));
        const __VLS_80 = __VLS_79({}, ...__VLS_functionalComponentArgsRest(__VLS_79));
        const __VLS_84 = {}.NButton;
        /** @type { [typeof __VLS_components.NButton, typeof __VLS_components.nButton, typeof __VLS_components.NButton, typeof __VLS_components.nButton, ] } */ ;
        // @ts-ignore
        const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({
            ...{ 'onClick': {} },
        }));
        const __VLS_86 = __VLS_85({
            ...{ 'onClick': {} },
        }, ...__VLS_functionalComponentArgsRest(__VLS_85));
        let __VLS_90;
        const __VLS_91 = {
            onClick: (__VLS_ctx.handleExport)
        };
        let __VLS_87;
        let __VLS_88;
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { icon: __VLS_thisSlot } = __VLS_89.slots;
            const __VLS_92 = {}.NIcon;
            /** @type { [typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, ] } */ ;
            // @ts-ignore
            const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({}));
            const __VLS_94 = __VLS_93({}, ...__VLS_functionalComponentArgsRest(__VLS_93));
            const __VLS_98 = {}.DownloadOutline;
            /** @type { [typeof __VLS_components.DownloadOutline, ] } */ ;
            // @ts-ignore
            const __VLS_99 = __VLS_asFunctionalComponent(__VLS_98, new __VLS_98({}));
            const __VLS_100 = __VLS_99({}, ...__VLS_functionalComponentArgsRest(__VLS_99));
            __VLS_97.slots.default;
            var __VLS_97;
        }
        var __VLS_89;
        const __VLS_104 = {}.NButton;
        /** @type { [typeof __VLS_components.NButton, typeof __VLS_components.nButton, typeof __VLS_components.NButton, typeof __VLS_components.nButton, ] } */ ;
        // @ts-ignore
        const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({
            ...{ 'onClick': {} },
            type: ("primary"),
        }));
        const __VLS_106 = __VLS_105({
            ...{ 'onClick': {} },
            type: ("primary"),
        }, ...__VLS_functionalComponentArgsRest(__VLS_105));
        let __VLS_110;
        const __VLS_111 = {
            onClick: (__VLS_ctx.handleRefresh)
        };
        let __VLS_107;
        let __VLS_108;
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { icon: __VLS_thisSlot } = __VLS_109.slots;
            const __VLS_112 = {}.NIcon;
            /** @type { [typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, ] } */ ;
            // @ts-ignore
            const __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112({}));
            const __VLS_114 = __VLS_113({}, ...__VLS_functionalComponentArgsRest(__VLS_113));
            const __VLS_118 = {}.RefreshOutline;
            /** @type { [typeof __VLS_components.RefreshOutline, ] } */ ;
            // @ts-ignore
            const __VLS_119 = __VLS_asFunctionalComponent(__VLS_118, new __VLS_118({}));
            const __VLS_120 = __VLS_119({}, ...__VLS_functionalComponentArgsRest(__VLS_119));
            __VLS_117.slots.default;
            var __VLS_117;
        }
        var __VLS_109;
        __VLS_83.slots.default;
        var __VLS_83;
        __VLS_71.slots.default;
        var __VLS_71;
    }
    const __VLS_124 = {}.NTabs;
    /** @type { [typeof __VLS_components.NTabs, typeof __VLS_components.nTabs, typeof __VLS_components.NTabs, typeof __VLS_components.nTabs, ] } */ ;
    // @ts-ignore
    const __VLS_125 = __VLS_asFunctionalComponent(__VLS_124, new __VLS_124({
        type: ("segment"),
        animated: (true),
    }));
    const __VLS_126 = __VLS_125({
        type: ("segment"),
        animated: (true),
    }, ...__VLS_functionalComponentArgsRest(__VLS_125));
    const __VLS_130 = {}.NTabPane;
    /** @type { [typeof __VLS_components.NTabPane, typeof __VLS_components.nTabPane, typeof __VLS_components.NTabPane, typeof __VLS_components.nTabPane, ] } */ ;
    // @ts-ignore
    const __VLS_131 = __VLS_asFunctionalComponent(__VLS_130, new __VLS_130({
        name: ("transactions"),
        tab: ("交易记录"),
    }));
    const __VLS_132 = __VLS_131({
        name: ("transactions"),
        tab: ("交易记录"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_131));
    const __VLS_136 = {}.NSpace;
    /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
    // @ts-ignore
    const __VLS_137 = __VLS_asFunctionalComponent(__VLS_136, new __VLS_136({
        vertical: (true),
    }));
    const __VLS_138 = __VLS_137({
        vertical: (true),
    }, ...__VLS_functionalComponentArgsRest(__VLS_137));
    const __VLS_142 = {}.NSpace;
    /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
    // @ts-ignore
    const __VLS_143 = __VLS_asFunctionalComponent(__VLS_142, new __VLS_142({
        justify: ("end"),
    }));
    const __VLS_144 = __VLS_143({
        justify: ("end"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_143));
    const __VLS_148 = {}.NInputGroup;
    /** @type { [typeof __VLS_components.NInputGroup, typeof __VLS_components.nInputGroup, typeof __VLS_components.NInputGroup, typeof __VLS_components.nInputGroup, ] } */ ;
    // @ts-ignore
    const __VLS_149 = __VLS_asFunctionalComponent(__VLS_148, new __VLS_148({}));
    const __VLS_150 = __VLS_149({}, ...__VLS_functionalComponentArgsRest(__VLS_149));
    const __VLS_154 = {}.NInput;
    /** @type { [typeof __VLS_components.NInput, typeof __VLS_components.nInput, typeof __VLS_components.NInput, typeof __VLS_components.nInput, ] } */ ;
    // @ts-ignore
    const __VLS_155 = __VLS_asFunctionalComponent(__VLS_154, new __VLS_154({
        value: ((__VLS_ctx.searchHash)),
        placeholder: ("搜索交易哈希..."),
    }));
    const __VLS_156 = __VLS_155({
        value: ((__VLS_ctx.searchHash)),
        placeholder: ("搜索交易哈希..."),
    }, ...__VLS_functionalComponentArgsRest(__VLS_155));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { prefix: __VLS_thisSlot } = __VLS_159.slots;
        const __VLS_160 = {}.NIcon;
        /** @type { [typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, ] } */ ;
        // @ts-ignore
        const __VLS_161 = __VLS_asFunctionalComponent(__VLS_160, new __VLS_160({}));
        const __VLS_162 = __VLS_161({}, ...__VLS_functionalComponentArgsRest(__VLS_161));
        const __VLS_166 = {}.SearchOutline;
        /** @type { [typeof __VLS_components.SearchOutline, ] } */ ;
        // @ts-ignore
        const __VLS_167 = __VLS_asFunctionalComponent(__VLS_166, new __VLS_166({}));
        const __VLS_168 = __VLS_167({}, ...__VLS_functionalComponentArgsRest(__VLS_167));
        __VLS_165.slots.default;
        var __VLS_165;
    }
    var __VLS_159;
    const __VLS_172 = {}.NButton;
    /** @type { [typeof __VLS_components.NButton, typeof __VLS_components.nButton, typeof __VLS_components.NButton, typeof __VLS_components.nButton, ] } */ ;
    // @ts-ignore
    const __VLS_173 = __VLS_asFunctionalComponent(__VLS_172, new __VLS_172({
        ...{ 'onClick': {} },
        type: ("primary"),
    }));
    const __VLS_174 = __VLS_173({
        ...{ 'onClick': {} },
        type: ("primary"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_173));
    let __VLS_178;
    const __VLS_179 = {
        onClick: (...[$event]) => {
            __VLS_ctx.handleSearch(__VLS_ctx.searchHash);
        }
    };
    let __VLS_175;
    let __VLS_176;
    __VLS_177.slots.default;
    var __VLS_177;
    __VLS_153.slots.default;
    var __VLS_153;
    __VLS_147.slots.default;
    var __VLS_147;
    const __VLS_180 = {}.NDataTable;
    /** @type { [typeof __VLS_components.NDataTable, typeof __VLS_components.nDataTable, ] } */ ;
    // @ts-ignore
    const __VLS_181 = __VLS_asFunctionalComponent(__VLS_180, new __VLS_180({
        columns: ((__VLS_ctx.transactionColumns)),
        data: ((__VLS_ctx.transactions)),
        pagination: ((__VLS_ctx.pagination)),
        bordered: ((false)),
    }));
    const __VLS_182 = __VLS_181({
        columns: ((__VLS_ctx.transactionColumns)),
        data: ((__VLS_ctx.transactions)),
        pagination: ((__VLS_ctx.pagination)),
        bordered: ((false)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_181));
    __VLS_141.slots.default;
    var __VLS_141;
    __VLS_135.slots.default;
    var __VLS_135;
    const __VLS_186 = {}.NTabPane;
    /** @type { [typeof __VLS_components.NTabPane, typeof __VLS_components.nTabPane, typeof __VLS_components.NTabPane, typeof __VLS_components.nTabPane, ] } */ ;
    // @ts-ignore
    const __VLS_187 = __VLS_asFunctionalComponent(__VLS_186, new __VLS_186({
        name: ("events"),
        tab: ("合约事件"),
    }));
    const __VLS_188 = __VLS_187({
        name: ("events"),
        tab: ("合约事件"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_187));
    const __VLS_192 = {}.NTimeline;
    /** @type { [typeof __VLS_components.NTimeline, typeof __VLS_components.nTimeline, typeof __VLS_components.NTimeline, typeof __VLS_components.nTimeline, ] } */ ;
    // @ts-ignore
    const __VLS_193 = __VLS_asFunctionalComponent(__VLS_192, new __VLS_192({}));
    const __VLS_194 = __VLS_193({}, ...__VLS_functionalComponentArgsRest(__VLS_193));
    for (const [event] of __VLS_getVForSourceType((__VLS_ctx.contractEvents))) {
        const __VLS_198 = {}.NTimelineItem;
        /** @type { [typeof __VLS_components.NTimelineItem, typeof __VLS_components.nTimelineItem, typeof __VLS_components.NTimelineItem, typeof __VLS_components.nTimelineItem, ] } */ ;
        // @ts-ignore
        const __VLS_199 = __VLS_asFunctionalComponent(__VLS_198, new __VLS_198({
            key: ((event.id)),
            type: ((event.type)),
            title: ((event.title)),
            content: ((event.content)),
            time: ((event.time)),
        }));
        const __VLS_200 = __VLS_199({
            key: ((event.id)),
            type: ((event.type)),
            title: ((event.title)),
            content: ((event.content)),
            time: ((event.time)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_199));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { icon: __VLS_thisSlot } = __VLS_203.slots;
            const __VLS_204 = {}.NIcon;
            /** @type { [typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, ] } */ ;
            // @ts-ignore
            const __VLS_205 = __VLS_asFunctionalComponent(__VLS_204, new __VLS_204({
                color: ((event.iconColor)),
            }));
            const __VLS_206 = __VLS_205({
                color: ((event.iconColor)),
            }, ...__VLS_functionalComponentArgsRest(__VLS_205));
            const __VLS_210 = ((event.icon));
            // @ts-ignore
            const __VLS_211 = __VLS_asFunctionalComponent(__VLS_210, new __VLS_210({}));
            const __VLS_212 = __VLS_211({}, ...__VLS_functionalComponentArgsRest(__VLS_211));
            __VLS_209.slots.default;
            var __VLS_209;
        }
        const __VLS_216 = {}.NCard;
        /** @type { [typeof __VLS_components.NCard, typeof __VLS_components.nCard, typeof __VLS_components.NCard, typeof __VLS_components.nCard, ] } */ ;
        // @ts-ignore
        const __VLS_217 = __VLS_asFunctionalComponent(__VLS_216, new __VLS_216({
            size: ("small"),
            bordered: ((false)),
            ...{ class: ("event-card") },
        }));
        const __VLS_218 = __VLS_217({
            size: ("small"),
            bordered: ((false)),
            ...{ class: ("event-card") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_217));
        const __VLS_222 = {}.NDescriptions;
        /** @type { [typeof __VLS_components.NDescriptions, typeof __VLS_components.nDescriptions, typeof __VLS_components.NDescriptions, typeof __VLS_components.nDescriptions, ] } */ ;
        // @ts-ignore
        const __VLS_223 = __VLS_asFunctionalComponent(__VLS_222, new __VLS_222({
            column: ((2)),
            bordered: (true),
        }));
        const __VLS_224 = __VLS_223({
            column: ((2)),
            bordered: (true),
        }, ...__VLS_functionalComponentArgsRest(__VLS_223));
        for (const [item] of __VLS_getVForSourceType((event.details))) {
            const __VLS_228 = {}.NDescriptionsItem;
            /** @type { [typeof __VLS_components.NDescriptionsItem, typeof __VLS_components.nDescriptionsItem, typeof __VLS_components.NDescriptionsItem, typeof __VLS_components.nDescriptionsItem, ] } */ ;
            // @ts-ignore
            const __VLS_229 = __VLS_asFunctionalComponent(__VLS_228, new __VLS_228({
                key: ((item.key)),
                label: ((item.label)),
            }));
            const __VLS_230 = __VLS_229({
                key: ((item.key)),
                label: ((item.label)),
            }, ...__VLS_functionalComponentArgsRest(__VLS_229));
            const __VLS_234 = {}.NEllipsis;
            /** @type { [typeof __VLS_components.NEllipsis, typeof __VLS_components.nEllipsis, typeof __VLS_components.NEllipsis, typeof __VLS_components.nEllipsis, ] } */ ;
            // @ts-ignore
            const __VLS_235 = __VLS_asFunctionalComponent(__VLS_234, new __VLS_234({}));
            const __VLS_236 = __VLS_235({}, ...__VLS_functionalComponentArgsRest(__VLS_235));
            (item.value);
            __VLS_239.slots.default;
            var __VLS_239;
            __VLS_233.slots.default;
            var __VLS_233;
        }
        __VLS_227.slots.default;
        var __VLS_227;
        __VLS_221.slots.default;
        var __VLS_221;
        var __VLS_203;
    }
    __VLS_197.slots.default;
    var __VLS_197;
    __VLS_191.slots.default;
    var __VLS_191;
    const __VLS_240 = {}.NTabPane;
    /** @type { [typeof __VLS_components.NTabPane, typeof __VLS_components.nTabPane, typeof __VLS_components.NTabPane, typeof __VLS_components.nTabPane, ] } */ ;
    // @ts-ignore
    const __VLS_241 = __VLS_asFunctionalComponent(__VLS_240, new __VLS_240({
        name: ("nodes"),
        tab: ("节点状态"),
    }));
    const __VLS_242 = __VLS_241({
        name: ("nodes"),
        tab: ("节点状态"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_241));
    const __VLS_246 = {}.NGrid;
    /** @type { [typeof __VLS_components.NGrid, typeof __VLS_components.nGrid, typeof __VLS_components.NGrid, typeof __VLS_components.nGrid, ] } */ ;
    // @ts-ignore
    const __VLS_247 = __VLS_asFunctionalComponent(__VLS_246, new __VLS_246({
        cols: ((3)),
        xGap: ((12)),
        yGap: ((12)),
    }));
    const __VLS_248 = __VLS_247({
        cols: ((3)),
        xGap: ((12)),
        yGap: ((12)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_247));
    for (const [node] of __VLS_getVForSourceType((__VLS_ctx.nodes))) {
        const __VLS_252 = {}.NGridItem;
        /** @type { [typeof __VLS_components.NGridItem, typeof __VLS_components.nGridItem, typeof __VLS_components.NGridItem, typeof __VLS_components.nGridItem, ] } */ ;
        // @ts-ignore
        const __VLS_253 = __VLS_asFunctionalComponent(__VLS_252, new __VLS_252({
            key: ((node.id)),
        }));
        const __VLS_254 = __VLS_253({
            key: ((node.id)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_253));
        const __VLS_258 = {}.NCard;
        /** @type { [typeof __VLS_components.NCard, typeof __VLS_components.nCard, typeof __VLS_components.NCard, typeof __VLS_components.nCard, ] } */ ;
        // @ts-ignore
        const __VLS_259 = __VLS_asFunctionalComponent(__VLS_258, new __VLS_258({
            bordered: ((false)),
            ...{ class: ("node-card") },
        }));
        const __VLS_260 = __VLS_259({
            bordered: ((false)),
            ...{ class: ("node-card") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_259));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { header: __VLS_thisSlot } = __VLS_263.slots;
            const __VLS_264 = {}.NSpace;
            /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
            // @ts-ignore
            const __VLS_265 = __VLS_asFunctionalComponent(__VLS_264, new __VLS_264({
                justify: ("space-between"),
            }));
            const __VLS_266 = __VLS_265({
                justify: ("space-between"),
            }, ...__VLS_functionalComponentArgsRest(__VLS_265));
            const __VLS_270 = {}.NSpace;
            /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
            // @ts-ignore
            const __VLS_271 = __VLS_asFunctionalComponent(__VLS_270, new __VLS_270({}));
            const __VLS_272 = __VLS_271({}, ...__VLS_functionalComponentArgsRest(__VLS_271));
            __VLS_elementAsFunction(__VLS_intrinsicElements.div)({
                ...{ class: ("node-status") },
                ...{ class: ((node.status)) },
            });
            const __VLS_276 = {}.NText;
            /** @type { [typeof __VLS_components.NText, typeof __VLS_components.nText, typeof __VLS_components.NText, typeof __VLS_components.nText, ] } */ ;
            // @ts-ignore
            const __VLS_277 = __VLS_asFunctionalComponent(__VLS_276, new __VLS_276({
                strong: (true),
            }));
            const __VLS_278 = __VLS_277({
                strong: (true),
            }, ...__VLS_functionalComponentArgsRest(__VLS_277));
            (node.name);
            __VLS_281.slots.default;
            var __VLS_281;
            __VLS_275.slots.default;
            var __VLS_275;
            const __VLS_282 = {}.NTag;
            /** @type { [typeof __VLS_components.NTag, typeof __VLS_components.nTag, typeof __VLS_components.NTag, typeof __VLS_components.nTag, ] } */ ;
            // @ts-ignore
            const __VLS_283 = __VLS_asFunctionalComponent(__VLS_282, new __VLS_282({
                type: ((node.status)),
                round: (true),
            }));
            const __VLS_284 = __VLS_283({
                type: ((node.status)),
                round: (true),
            }, ...__VLS_functionalComponentArgsRest(__VLS_283));
            (node.statusText);
            __VLS_287.slots.default;
            var __VLS_287;
            __VLS_269.slots.default;
            var __VLS_269;
        }
        const __VLS_288 = {}.NList;
        /** @type { [typeof __VLS_components.NList, typeof __VLS_components.nList, typeof __VLS_components.NList, typeof __VLS_components.nList, ] } */ ;
        // @ts-ignore
        const __VLS_289 = __VLS_asFunctionalComponent(__VLS_288, new __VLS_288({}));
        const __VLS_290 = __VLS_289({}, ...__VLS_functionalComponentArgsRest(__VLS_289));
        const __VLS_294 = {}.NListItem;
        /** @type { [typeof __VLS_components.NListItem, typeof __VLS_components.nListItem, typeof __VLS_components.NListItem, typeof __VLS_components.nListItem, ] } */ ;
        // @ts-ignore
        const __VLS_295 = __VLS_asFunctionalComponent(__VLS_294, new __VLS_294({}));
        const __VLS_296 = __VLS_295({}, ...__VLS_functionalComponentArgsRest(__VLS_295));
        const __VLS_300 = {}.NSpace;
        /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
        // @ts-ignore
        const __VLS_301 = __VLS_asFunctionalComponent(__VLS_300, new __VLS_300({
            justify: ("space-between"),
        }));
        const __VLS_302 = __VLS_301({
            justify: ("space-between"),
        }, ...__VLS_functionalComponentArgsRest(__VLS_301));
        const __VLS_306 = {}.NText;
        /** @type { [typeof __VLS_components.NText, typeof __VLS_components.nText, typeof __VLS_components.NText, typeof __VLS_components.nText, ] } */ ;
        // @ts-ignore
        const __VLS_307 = __VLS_asFunctionalComponent(__VLS_306, new __VLS_306({
            depth: ("3"),
        }));
        const __VLS_308 = __VLS_307({
            depth: ("3"),
        }, ...__VLS_functionalComponentArgsRest(__VLS_307));
        __VLS_311.slots.default;
        var __VLS_311;
        const __VLS_312 = {}.NText;
        /** @type { [typeof __VLS_components.NText, typeof __VLS_components.nText, typeof __VLS_components.NText, typeof __VLS_components.nText, ] } */ ;
        // @ts-ignore
        const __VLS_313 = __VLS_asFunctionalComponent(__VLS_312, new __VLS_312({}));
        const __VLS_314 = __VLS_313({}, ...__VLS_functionalComponentArgsRest(__VLS_313));
        (node.blockHeight);
        __VLS_317.slots.default;
        var __VLS_317;
        __VLS_305.slots.default;
        var __VLS_305;
        __VLS_299.slots.default;
        var __VLS_299;
        const __VLS_318 = {}.NListItem;
        /** @type { [typeof __VLS_components.NListItem, typeof __VLS_components.nListItem, typeof __VLS_components.NListItem, typeof __VLS_components.nListItem, ] } */ ;
        // @ts-ignore
        const __VLS_319 = __VLS_asFunctionalComponent(__VLS_318, new __VLS_318({}));
        const __VLS_320 = __VLS_319({}, ...__VLS_functionalComponentArgsRest(__VLS_319));
        const __VLS_324 = {}.NSpace;
        /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
        // @ts-ignore
        const __VLS_325 = __VLS_asFunctionalComponent(__VLS_324, new __VLS_324({
            justify: ("space-between"),
        }));
        const __VLS_326 = __VLS_325({
            justify: ("space-between"),
        }, ...__VLS_functionalComponentArgsRest(__VLS_325));
        const __VLS_330 = {}.NText;
        /** @type { [typeof __VLS_components.NText, typeof __VLS_components.nText, typeof __VLS_components.NText, typeof __VLS_components.nText, ] } */ ;
        // @ts-ignore
        const __VLS_331 = __VLS_asFunctionalComponent(__VLS_330, new __VLS_330({
            depth: ("3"),
        }));
        const __VLS_332 = __VLS_331({
            depth: ("3"),
        }, ...__VLS_functionalComponentArgsRest(__VLS_331));
        __VLS_335.slots.default;
        var __VLS_335;
        const __VLS_336 = {}.NText;
        /** @type { [typeof __VLS_components.NText, typeof __VLS_components.nText, typeof __VLS_components.NText, typeof __VLS_components.nText, ] } */ ;
        // @ts-ignore
        const __VLS_337 = __VLS_asFunctionalComponent(__VLS_336, new __VLS_336({}));
        const __VLS_338 = __VLS_337({}, ...__VLS_functionalComponentArgsRest(__VLS_337));
        (node.txCount);
        __VLS_341.slots.default;
        var __VLS_341;
        __VLS_329.slots.default;
        var __VLS_329;
        __VLS_323.slots.default;
        var __VLS_323;
        const __VLS_342 = {}.NListItem;
        /** @type { [typeof __VLS_components.NListItem, typeof __VLS_components.nListItem, typeof __VLS_components.NListItem, typeof __VLS_components.nListItem, ] } */ ;
        // @ts-ignore
        const __VLS_343 = __VLS_asFunctionalComponent(__VLS_342, new __VLS_342({}));
        const __VLS_344 = __VLS_343({}, ...__VLS_functionalComponentArgsRest(__VLS_343));
        const __VLS_348 = {}.NSpace;
        /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
        // @ts-ignore
        const __VLS_349 = __VLS_asFunctionalComponent(__VLS_348, new __VLS_348({
            justify: ("space-between"),
        }));
        const __VLS_350 = __VLS_349({
            justify: ("space-between"),
        }, ...__VLS_functionalComponentArgsRest(__VLS_349));
        const __VLS_354 = {}.NText;
        /** @type { [typeof __VLS_components.NText, typeof __VLS_components.nText, typeof __VLS_components.NText, typeof __VLS_components.nText, ] } */ ;
        // @ts-ignore
        const __VLS_355 = __VLS_asFunctionalComponent(__VLS_354, new __VLS_354({
            depth: ("3"),
        }));
        const __VLS_356 = __VLS_355({
            depth: ("3"),
        }, ...__VLS_functionalComponentArgsRest(__VLS_355));
        __VLS_359.slots.default;
        var __VLS_359;
        const __VLS_360 = {}.NText;
        /** @type { [typeof __VLS_components.NText, typeof __VLS_components.nText, typeof __VLS_components.NText, typeof __VLS_components.nText, ] } */ ;
        // @ts-ignore
        const __VLS_361 = __VLS_asFunctionalComponent(__VLS_360, new __VLS_360({}));
        const __VLS_362 = __VLS_361({}, ...__VLS_functionalComponentArgsRest(__VLS_361));
        (node.updateTime);
        __VLS_365.slots.default;
        var __VLS_365;
        __VLS_353.slots.default;
        var __VLS_353;
        __VLS_347.slots.default;
        var __VLS_347;
        __VLS_293.slots.default;
        var __VLS_293;
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { footer: __VLS_thisSlot } = __VLS_263.slots;
            const __VLS_366 = {}.NSpace;
            /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
            // @ts-ignore
            const __VLS_367 = __VLS_asFunctionalComponent(__VLS_366, new __VLS_366({
                justify: ("end"),
            }));
            const __VLS_368 = __VLS_367({
                justify: ("end"),
            }, ...__VLS_functionalComponentArgsRest(__VLS_367));
            const __VLS_372 = {}.NButton;
            /** @type { [typeof __VLS_components.NButton, typeof __VLS_components.nButton, typeof __VLS_components.NButton, typeof __VLS_components.nButton, ] } */ ;
            // @ts-ignore
            const __VLS_373 = __VLS_asFunctionalComponent(__VLS_372, new __VLS_372({
                ...{ 'onClick': {} },
                text: (true),
                size: ("small"),
            }));
            const __VLS_374 = __VLS_373({
                ...{ 'onClick': {} },
                text: (true),
                size: ("small"),
            }, ...__VLS_functionalComponentArgsRest(__VLS_373));
            let __VLS_378;
            const __VLS_379 = {
                onClick: (...[$event]) => {
                    __VLS_ctx.handleNodeDetail(node);
                }
            };
            let __VLS_375;
            let __VLS_376;
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { icon: __VLS_thisSlot } = __VLS_377.slots;
                const __VLS_380 = {}.NIcon;
                /** @type { [typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, ] } */ ;
                // @ts-ignore
                const __VLS_381 = __VLS_asFunctionalComponent(__VLS_380, new __VLS_380({}));
                const __VLS_382 = __VLS_381({}, ...__VLS_functionalComponentArgsRest(__VLS_381));
                const __VLS_386 = {}.EyeOutline;
                /** @type { [typeof __VLS_components.EyeOutline, ] } */ ;
                // @ts-ignore
                const __VLS_387 = __VLS_asFunctionalComponent(__VLS_386, new __VLS_386({}));
                const __VLS_388 = __VLS_387({}, ...__VLS_functionalComponentArgsRest(__VLS_387));
                __VLS_385.slots.default;
                var __VLS_385;
            }
            var __VLS_377;
            __VLS_371.slots.default;
            var __VLS_371;
        }
        var __VLS_263;
        __VLS_257.slots.default;
        var __VLS_257;
    }
    __VLS_251.slots.default;
    var __VLS_251;
    __VLS_245.slots.default;
    var __VLS_245;
    __VLS_129.slots.default;
    var __VLS_129;
    var __VLS_65;
    __VLS_5.slots.default;
    var __VLS_5;
    const __VLS_392 = {}.NBackTop;
    /** @type { [typeof __VLS_components.NBackTop, typeof __VLS_components.nBackTop, ] } */ ;
    // @ts-ignore
    const __VLS_393 = __VLS_asFunctionalComponent(__VLS_392, new __VLS_392({
        right: ((40)),
    }));
    const __VLS_394 = __VLS_393({
        right: ((40)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_393));
    ['page-container', 'shadow-card', 'stat-card', 'stat-icon', 'shadow-card', 'mt-4', 'event-card', 'node-card', 'node-status',];
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
            SearchOutline: SearchOutline,
            DownloadOutline: DownloadOutline,
            RefreshOutline: RefreshOutline,
            EyeOutline: EyeOutline,
            statistics: statistics,
            chainType: chainType,
            chainOptions: chainOptions,
            transactionColumns: transactionColumns,
            transactions: transactions,
            contractEvents: contractEvents,
            nodes: nodes,
            pagination: pagination,
            searchHash: searchHash,
            handleRefresh: handleRefresh,
            handleExport: handleExport,
            handleSearch: handleSearch,
            handleNodeDetail: handleNodeDetail,
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
