import { ref, h } from 'vue';
import { ThermometerOutline, WaterOutline, SunnyOutline, LeafOutline, CheckmarkCircleOutline, RefreshOutline, SearchOutline, DownloadOutline, FilterOutline, AnalyticsOutline, StatsChartOutline, PulseOutline } from '@vicons/ionicons5';
import NGradientText from 'path/to/NGradientText';
const activeTab = ref('main');
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
];
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
];
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
        render(row) {
            return h(NGradientText, {
                gradient: {
                    from: '#d03050',
                    to: '#f0a020'
                }
            }, { default: () => row.temperature });
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
        render(row) {
            return h(NTag, {
                type: row.status === 'normal' ? 'success' : 'warning',
                round: true,
                bordered: false
            }, { default: () => row.status === 'normal' ? '正常' : '异常' });
        }
    }
];
const chartType = ref('line');
const chartOptions = [
    { label: '折线图', value: 'line' },
    { label: '面积图', value: 'area' },
    { label: '柱状图', value: 'bar' }
];
const data = [
    {
        time: '2024-01-14 10:00:00',
        temperature: 25.6,
        humidity: 65,
        light: 12000,
        co2: 450,
        status: 'normal'
    }
];
const pagination = { pageSize: 10 };
function handleClose(name) {
    const index = tabs.findIndex(tab => tab.key === name);
    if (index !== -1) {
        tabs.splice(index, 1);
        if (name === activeTab.value) {
            activeTab.value = tabs[0].key;
        }
    }
}
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['shadow-card', 'data-card', 'n-tabs-tab', 'n-button',];
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
    const __VLS_6 = {}.NTabs;
    /** @type { [typeof __VLS_components.NTabs, typeof __VLS_components.nTabs, typeof __VLS_components.NTabs, typeof __VLS_components.nTabs, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
        ...{ 'onClose': {} },
        type: ("card"),
        animated: (true),
        closable: (true),
        value: ((__VLS_ctx.activeTab)),
        ...{ style: ({}) },
    }));
    const __VLS_8 = __VLS_7({
        ...{ 'onClose': {} },
        type: ("card"),
        animated: (true),
        closable: (true),
        value: ((__VLS_ctx.activeTab)),
        ...{ style: ({}) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_12;
    const __VLS_13 = {
        onClose: (__VLS_ctx.handleClose)
    };
    let __VLS_9;
    let __VLS_10;
    for (const [tab] of __VLS_getVForSourceType((__VLS_ctx.tabs))) {
        const __VLS_14 = {}.NTabPane;
        /** @type { [typeof __VLS_components.NTabPane, typeof __VLS_components.nTabPane, typeof __VLS_components.NTabPane, typeof __VLS_components.nTabPane, ] } */ ;
        // @ts-ignore
        const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({
            key: ((tab.key)),
            name: ((tab.key)),
            tab: ((tab.tab)),
            closable: ((tab.key !== 'main')),
        }));
        const __VLS_16 = __VLS_15({
            key: ((tab.key)),
            name: ((tab.key)),
            tab: ((tab.tab)),
            closable: ((tab.key !== 'main')),
        }, ...__VLS_functionalComponentArgsRest(__VLS_15));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { tab: __VLS_thisSlot } = __VLS_19.slots;
            const __VLS_20 = {}.NSpace;
            /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
            // @ts-ignore
            const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
                align: ("center"),
                size: ((4)),
            }));
            const __VLS_22 = __VLS_21({
                align: ("center"),
                size: ((4)),
            }, ...__VLS_functionalComponentArgsRest(__VLS_21));
            const __VLS_26 = {}.NIcon;
            /** @type { [typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, ] } */ ;
            // @ts-ignore
            const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({
                color: ((tab.iconColor)),
                size: ((16)),
            }));
            const __VLS_28 = __VLS_27({
                color: ((tab.iconColor)),
                size: ((16)),
            }, ...__VLS_functionalComponentArgsRest(__VLS_27));
            const __VLS_32 = ((tab.icon));
            // @ts-ignore
            const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({}));
            const __VLS_34 = __VLS_33({}, ...__VLS_functionalComponentArgsRest(__VLS_33));
            __VLS_31.slots.default;
            var __VLS_31;
            (tab.tab);
            __VLS_25.slots.default;
            var __VLS_25;
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("tab-content") },
        });
        if (tab.key === 'main') {
            const __VLS_38 = {}.NGrid;
            /** @type { [typeof __VLS_components.NGrid, typeof __VLS_components.nGrid, typeof __VLS_components.NGrid, typeof __VLS_components.nGrid, ] } */ ;
            // @ts-ignore
            const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({
                cols: ((2)),
                xGap: ((12)),
            }));
            const __VLS_40 = __VLS_39({
                cols: ((2)),
                xGap: ((12)),
            }, ...__VLS_functionalComponentArgsRest(__VLS_39));
            const __VLS_44 = {}.NGridItem;
            /** @type { [typeof __VLS_components.NGridItem, typeof __VLS_components.nGridItem, typeof __VLS_components.NGridItem, typeof __VLS_components.nGridItem, ] } */ ;
            // @ts-ignore
            const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({}));
            const __VLS_46 = __VLS_45({}, ...__VLS_functionalComponentArgsRest(__VLS_45));
            const __VLS_50 = {}.NCard;
            /** @type { [typeof __VLS_components.NCard, typeof __VLS_components.nCard, typeof __VLS_components.NCard, typeof __VLS_components.nCard, ] } */ ;
            // @ts-ignore
            const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({
                title: ("实时环境数据"),
                bordered: ((false)),
                ...{ class: ("shadow-card") },
            }));
            const __VLS_52 = __VLS_51({
                title: ("实时环境数据"),
                bordered: ((false)),
                ...{ class: ("shadow-card") },
            }, ...__VLS_functionalComponentArgsRest(__VLS_51));
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { 'header-extra': __VLS_thisSlot } = __VLS_55.slots;
                const __VLS_56 = {}.NSpace;
                /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
                // @ts-ignore
                const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({}));
                const __VLS_58 = __VLS_57({}, ...__VLS_functionalComponentArgsRest(__VLS_57));
                const __VLS_62 = {}.NTag;
                /** @type { [typeof __VLS_components.NTag, typeof __VLS_components.nTag, typeof __VLS_components.NTag, typeof __VLS_components.nTag, ] } */ ;
                // @ts-ignore
                const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({
                    bordered: ((false)),
                    type: ("success"),
                }));
                const __VLS_64 = __VLS_63({
                    bordered: ((false)),
                    type: ("success"),
                }, ...__VLS_functionalComponentArgsRest(__VLS_63));
                __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
                {
                    const { icon: __VLS_thisSlot } = __VLS_67.slots;
                    const __VLS_68 = {}.NIcon;
                    /** @type { [typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, ] } */ ;
                    // @ts-ignore
                    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({}));
                    const __VLS_70 = __VLS_69({}, ...__VLS_functionalComponentArgsRest(__VLS_69));
                    const __VLS_74 = {}.CheckmarkCircleOutline;
                    /** @type { [typeof __VLS_components.CheckmarkCircleOutline, ] } */ ;
                    // @ts-ignore
                    const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({}));
                    const __VLS_76 = __VLS_75({}, ...__VLS_functionalComponentArgsRest(__VLS_75));
                    __VLS_73.slots.default;
                    var __VLS_73;
                }
                var __VLS_67;
                const __VLS_80 = {}.NButton;
                /** @type { [typeof __VLS_components.NButton, typeof __VLS_components.nButton, typeof __VLS_components.NButton, typeof __VLS_components.nButton, ] } */ ;
                // @ts-ignore
                const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({
                    quaternary: (true),
                    circle: (true),
                    size: ("small"),
                }));
                const __VLS_82 = __VLS_81({
                    quaternary: (true),
                    circle: (true),
                    size: ("small"),
                }, ...__VLS_functionalComponentArgsRest(__VLS_81));
                __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
                {
                    const { icon: __VLS_thisSlot } = __VLS_85.slots;
                    const __VLS_86 = {}.NIcon;
                    /** @type { [typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, ] } */ ;
                    // @ts-ignore
                    const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({}));
                    const __VLS_88 = __VLS_87({}, ...__VLS_functionalComponentArgsRest(__VLS_87));
                    const __VLS_92 = {}.RefreshOutline;
                    /** @type { [typeof __VLS_components.RefreshOutline, ] } */ ;
                    // @ts-ignore
                    const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({}));
                    const __VLS_94 = __VLS_93({}, ...__VLS_functionalComponentArgsRest(__VLS_93));
                    __VLS_91.slots.default;
                    var __VLS_91;
                }
                var __VLS_85;
                __VLS_61.slots.default;
                var __VLS_61;
            }
            const __VLS_98 = {}.NGrid;
            /** @type { [typeof __VLS_components.NGrid, typeof __VLS_components.nGrid, typeof __VLS_components.NGrid, typeof __VLS_components.nGrid, ] } */ ;
            // @ts-ignore
            const __VLS_99 = __VLS_asFunctionalComponent(__VLS_98, new __VLS_98({
                cols: ((2)),
                xGap: ((12)),
                yGap: ((8)),
            }));
            const __VLS_100 = __VLS_99({
                cols: ((2)),
                xGap: ((12)),
                yGap: ((8)),
            }, ...__VLS_functionalComponentArgsRest(__VLS_99));
            for (const [item] of __VLS_getVForSourceType((__VLS_ctx.envData))) {
                const __VLS_104 = {}.NGridItem;
                /** @type { [typeof __VLS_components.NGridItem, typeof __VLS_components.nGridItem, typeof __VLS_components.NGridItem, typeof __VLS_components.nGridItem, ] } */ ;
                // @ts-ignore
                const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({
                    key: ((item.key)),
                }));
                const __VLS_106 = __VLS_105({
                    key: ((item.key)),
                }, ...__VLS_functionalComponentArgsRest(__VLS_105));
                const __VLS_110 = {}.NCard;
                /** @type { [typeof __VLS_components.NCard, typeof __VLS_components.nCard, typeof __VLS_components.NCard, typeof __VLS_components.nCard, ] } */ ;
                // @ts-ignore
                const __VLS_111 = __VLS_asFunctionalComponent(__VLS_110, new __VLS_110({
                    bordered: ((false)),
                    ...{ class: ("data-card") },
                }));
                const __VLS_112 = __VLS_111({
                    bordered: ((false)),
                    ...{ class: ("data-card") },
                }, ...__VLS_functionalComponentArgsRest(__VLS_111));
                const __VLS_116 = {}.NSpace;
                /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
                // @ts-ignore
                const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({
                    vertical: (true),
                    size: ((4)),
                }));
                const __VLS_118 = __VLS_117({
                    vertical: (true),
                    size: ((4)),
                }, ...__VLS_functionalComponentArgsRest(__VLS_117));
                const __VLS_122 = {}.NSpace;
                /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
                // @ts-ignore
                const __VLS_123 = __VLS_asFunctionalComponent(__VLS_122, new __VLS_122({
                    justify: ("space-between"),
                }));
                const __VLS_124 = __VLS_123({
                    justify: ("space-between"),
                }, ...__VLS_functionalComponentArgsRest(__VLS_123));
                const __VLS_128 = {}.NText;
                /** @type { [typeof __VLS_components.NText, typeof __VLS_components.nText, typeof __VLS_components.NText, typeof __VLS_components.nText, ] } */ ;
                // @ts-ignore
                const __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128({
                    depth: ("3"),
                }));
                const __VLS_130 = __VLS_129({
                    depth: ("3"),
                }, ...__VLS_functionalComponentArgsRest(__VLS_129));
                (item.label);
                __VLS_133.slots.default;
                var __VLS_133;
                const __VLS_134 = {}.NIcon;
                /** @type { [typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, ] } */ ;
                // @ts-ignore
                const __VLS_135 = __VLS_asFunctionalComponent(__VLS_134, new __VLS_134({
                    color: ((item.color)),
                    size: ((20)),
                }));
                const __VLS_136 = __VLS_135({
                    color: ((item.color)),
                    size: ((20)),
                }, ...__VLS_functionalComponentArgsRest(__VLS_135));
                const __VLS_140 = ((item.icon));
                // @ts-ignore
                const __VLS_141 = __VLS_asFunctionalComponent(__VLS_140, new __VLS_140({}));
                const __VLS_142 = __VLS_141({}, ...__VLS_functionalComponentArgsRest(__VLS_141));
                __VLS_139.slots.default;
                var __VLS_139;
                __VLS_127.slots.default;
                var __VLS_127;
                const __VLS_146 = {}.NStatistic;
                /** @type { [typeof __VLS_components.NStatistic, typeof __VLS_components.nStatistic, typeof __VLS_components.NStatistic, typeof __VLS_components.nStatistic, ] } */ ;
                // @ts-ignore
                const __VLS_147 = __VLS_asFunctionalComponent(__VLS_146, new __VLS_146({
                    value: ((item.value)),
                    precision: ((1)),
                }));
                const __VLS_148 = __VLS_147({
                    value: ((item.value)),
                    precision: ((1)),
                }, ...__VLS_functionalComponentArgsRest(__VLS_147));
                __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
                {
                    const { suffix: __VLS_thisSlot } = __VLS_151.slots;
                    (item.unit);
                }
                var __VLS_151;
                const __VLS_152 = {}.NProgress;
                /** @type { [typeof __VLS_components.NProgress, typeof __VLS_components.nProgress, ] } */ ;
                // @ts-ignore
                const __VLS_153 = __VLS_asFunctionalComponent(__VLS_152, new __VLS_152({
                    type: ("line"),
                    percentage: ((item.percentage)),
                    color: ((item.color)),
                    height: ((4)),
                    showIndicator: ((false)),
                }));
                const __VLS_154 = __VLS_153({
                    type: ("line"),
                    percentage: ((item.percentage)),
                    color: ((item.color)),
                    height: ((4)),
                    showIndicator: ((false)),
                }, ...__VLS_functionalComponentArgsRest(__VLS_153));
                __VLS_121.slots.default;
                var __VLS_121;
                __VLS_115.slots.default;
                var __VLS_115;
                __VLS_109.slots.default;
                var __VLS_109;
            }
            __VLS_103.slots.default;
            var __VLS_103;
            var __VLS_55;
            __VLS_49.slots.default;
            var __VLS_49;
            const __VLS_158 = {}.NGridItem;
            /** @type { [typeof __VLS_components.NGridItem, typeof __VLS_components.nGridItem, typeof __VLS_components.NGridItem, typeof __VLS_components.nGridItem, ] } */ ;
            // @ts-ignore
            const __VLS_159 = __VLS_asFunctionalComponent(__VLS_158, new __VLS_158({}));
            const __VLS_160 = __VLS_159({}, ...__VLS_functionalComponentArgsRest(__VLS_159));
            const __VLS_164 = {}.NCard;
            /** @type { [typeof __VLS_components.NCard, typeof __VLS_components.nCard, typeof __VLS_components.NCard, typeof __VLS_components.nCard, ] } */ ;
            // @ts-ignore
            const __VLS_165 = __VLS_asFunctionalComponent(__VLS_164, new __VLS_164({
                title: ("24小时趋势"),
                bordered: ((false)),
                ...{ class: ("shadow-card") },
            }));
            const __VLS_166 = __VLS_165({
                title: ("24小时趋势"),
                bordered: ((false)),
                ...{ class: ("shadow-card") },
            }, ...__VLS_functionalComponentArgsRest(__VLS_165));
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { 'header-extra': __VLS_thisSlot } = __VLS_169.slots;
                const __VLS_170 = {}.NSpace;
                /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
                // @ts-ignore
                const __VLS_171 = __VLS_asFunctionalComponent(__VLS_170, new __VLS_170({}));
                const __VLS_172 = __VLS_171({}, ...__VLS_functionalComponentArgsRest(__VLS_171));
                const __VLS_176 = {}.NSelect;
                /** @type { [typeof __VLS_components.NSelect, typeof __VLS_components.nSelect, ] } */ ;
                // @ts-ignore
                const __VLS_177 = __VLS_asFunctionalComponent(__VLS_176, new __VLS_176({
                    value: ((__VLS_ctx.chartType)),
                    options: ((__VLS_ctx.chartOptions)),
                    size: ("small"),
                }));
                const __VLS_178 = __VLS_177({
                    value: ((__VLS_ctx.chartType)),
                    options: ((__VLS_ctx.chartOptions)),
                    size: ("small"),
                }, ...__VLS_functionalComponentArgsRest(__VLS_177));
                const __VLS_182 = {}.NButtonGroup;
                /** @type { [typeof __VLS_components.NButtonGroup, typeof __VLS_components.nButtonGroup, typeof __VLS_components.NButtonGroup, typeof __VLS_components.nButtonGroup, ] } */ ;
                // @ts-ignore
                const __VLS_183 = __VLS_asFunctionalComponent(__VLS_182, new __VLS_182({
                    size: ("small"),
                }));
                const __VLS_184 = __VLS_183({
                    size: ("small"),
                }, ...__VLS_functionalComponentArgsRest(__VLS_183));
                const __VLS_188 = {}.NButton;
                /** @type { [typeof __VLS_components.NButton, typeof __VLS_components.nButton, typeof __VLS_components.NButton, typeof __VLS_components.nButton, ] } */ ;
                // @ts-ignore
                const __VLS_189 = __VLS_asFunctionalComponent(__VLS_188, new __VLS_188({}));
                const __VLS_190 = __VLS_189({}, ...__VLS_functionalComponentArgsRest(__VLS_189));
                __VLS_193.slots.default;
                var __VLS_193;
                const __VLS_194 = {}.NButton;
                /** @type { [typeof __VLS_components.NButton, typeof __VLS_components.nButton, typeof __VLS_components.NButton, typeof __VLS_components.nButton, ] } */ ;
                // @ts-ignore
                const __VLS_195 = __VLS_asFunctionalComponent(__VLS_194, new __VLS_194({
                    type: ("primary"),
                }));
                const __VLS_196 = __VLS_195({
                    type: ("primary"),
                }, ...__VLS_functionalComponentArgsRest(__VLS_195));
                __VLS_199.slots.default;
                var __VLS_199;
                const __VLS_200 = {}.NButton;
                /** @type { [typeof __VLS_components.NButton, typeof __VLS_components.nButton, typeof __VLS_components.NButton, typeof __VLS_components.nButton, ] } */ ;
                // @ts-ignore
                const __VLS_201 = __VLS_asFunctionalComponent(__VLS_200, new __VLS_200({}));
                const __VLS_202 = __VLS_201({}, ...__VLS_functionalComponentArgsRest(__VLS_201));
                __VLS_205.slots.default;
                var __VLS_205;
                __VLS_187.slots.default;
                var __VLS_187;
                __VLS_175.slots.default;
                var __VLS_175;
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("chart-container") },
            });
            const __VLS_206 = {}.NSpin;
            /** @type { [typeof __VLS_components.NSpin, typeof __VLS_components.nSpin, typeof __VLS_components.NSpin, typeof __VLS_components.nSpin, ] } */ ;
            // @ts-ignore
            const __VLS_207 = __VLS_asFunctionalComponent(__VLS_206, new __VLS_206({
                show: ((true)),
            }));
            const __VLS_208 = __VLS_207({
                show: ((true)),
            }, ...__VLS_functionalComponentArgsRest(__VLS_207));
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { description: __VLS_thisSlot } = __VLS_211.slots;
            }
            var __VLS_211;
            var __VLS_169;
            __VLS_163.slots.default;
            var __VLS_163;
            __VLS_43.slots.default;
            var __VLS_43;
        }
        const __VLS_212 = {}.NCard;
        /** @type { [typeof __VLS_components.NCard, typeof __VLS_components.nCard, typeof __VLS_components.NCard, typeof __VLS_components.nCard, ] } */ ;
        // @ts-ignore
        const __VLS_213 = __VLS_asFunctionalComponent(__VLS_212, new __VLS_212({
            title: ("历史记录"),
            bordered: ((false)),
            ...{ class: ("shadow-card mt-4") },
        }));
        const __VLS_214 = __VLS_213({
            title: ("历史记录"),
            bordered: ((false)),
            ...{ class: ("shadow-card mt-4") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_213));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { 'header-extra': __VLS_thisSlot } = __VLS_217.slots;
            const __VLS_218 = {}.NSpace;
            /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
            // @ts-ignore
            const __VLS_219 = __VLS_asFunctionalComponent(__VLS_218, new __VLS_218({}));
            const __VLS_220 = __VLS_219({}, ...__VLS_functionalComponentArgsRest(__VLS_219));
            const __VLS_224 = {}.NInputGroup;
            /** @type { [typeof __VLS_components.NInputGroup, typeof __VLS_components.nInputGroup, typeof __VLS_components.NInputGroup, typeof __VLS_components.nInputGroup, ] } */ ;
            // @ts-ignore
            const __VLS_225 = __VLS_asFunctionalComponent(__VLS_224, new __VLS_224({}));
            const __VLS_226 = __VLS_225({}, ...__VLS_functionalComponentArgsRest(__VLS_225));
            const __VLS_230 = {}.NInput;
            /** @type { [typeof __VLS_components.NInput, typeof __VLS_components.nInput, typeof __VLS_components.NInput, typeof __VLS_components.nInput, ] } */ ;
            // @ts-ignore
            const __VLS_231 = __VLS_asFunctionalComponent(__VLS_230, new __VLS_230({
                placeholder: ("搜索..."),
            }));
            const __VLS_232 = __VLS_231({
                placeholder: ("搜索..."),
            }, ...__VLS_functionalComponentArgsRest(__VLS_231));
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { prefix: __VLS_thisSlot } = __VLS_235.slots;
                const __VLS_236 = {}.NIcon;
                /** @type { [typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, ] } */ ;
                // @ts-ignore
                const __VLS_237 = __VLS_asFunctionalComponent(__VLS_236, new __VLS_236({}));
                const __VLS_238 = __VLS_237({}, ...__VLS_functionalComponentArgsRest(__VLS_237));
                const __VLS_242 = {}.SearchOutline;
                /** @type { [typeof __VLS_components.SearchOutline, ] } */ ;
                // @ts-ignore
                const __VLS_243 = __VLS_asFunctionalComponent(__VLS_242, new __VLS_242({}));
                const __VLS_244 = __VLS_243({}, ...__VLS_functionalComponentArgsRest(__VLS_243));
                __VLS_241.slots.default;
                var __VLS_241;
            }
            var __VLS_235;
            const __VLS_248 = {}.NButton;
            /** @type { [typeof __VLS_components.NButton, typeof __VLS_components.nButton, typeof __VLS_components.NButton, typeof __VLS_components.nButton, ] } */ ;
            // @ts-ignore
            const __VLS_249 = __VLS_asFunctionalComponent(__VLS_248, new __VLS_248({
                type: ("primary"),
            }));
            const __VLS_250 = __VLS_249({
                type: ("primary"),
            }, ...__VLS_functionalComponentArgsRest(__VLS_249));
            __VLS_253.slots.default;
            var __VLS_253;
            __VLS_229.slots.default;
            var __VLS_229;
            const __VLS_254 = {}.NButtonGroup;
            /** @type { [typeof __VLS_components.NButtonGroup, typeof __VLS_components.nButtonGroup, typeof __VLS_components.NButtonGroup, typeof __VLS_components.nButtonGroup, ] } */ ;
            // @ts-ignore
            const __VLS_255 = __VLS_asFunctionalComponent(__VLS_254, new __VLS_254({}));
            const __VLS_256 = __VLS_255({}, ...__VLS_functionalComponentArgsRest(__VLS_255));
            const __VLS_260 = {}.NButton;
            /** @type { [typeof __VLS_components.NButton, typeof __VLS_components.nButton, typeof __VLS_components.NButton, typeof __VLS_components.nButton, ] } */ ;
            // @ts-ignore
            const __VLS_261 = __VLS_asFunctionalComponent(__VLS_260, new __VLS_260({}));
            const __VLS_262 = __VLS_261({}, ...__VLS_functionalComponentArgsRest(__VLS_261));
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { icon: __VLS_thisSlot } = __VLS_265.slots;
                const __VLS_266 = {}.NIcon;
                /** @type { [typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, ] } */ ;
                // @ts-ignore
                const __VLS_267 = __VLS_asFunctionalComponent(__VLS_266, new __VLS_266({}));
                const __VLS_268 = __VLS_267({}, ...__VLS_functionalComponentArgsRest(__VLS_267));
                const __VLS_272 = {}.DownloadOutline;
                /** @type { [typeof __VLS_components.DownloadOutline, ] } */ ;
                // @ts-ignore
                const __VLS_273 = __VLS_asFunctionalComponent(__VLS_272, new __VLS_272({}));
                const __VLS_274 = __VLS_273({}, ...__VLS_functionalComponentArgsRest(__VLS_273));
                __VLS_271.slots.default;
                var __VLS_271;
            }
            var __VLS_265;
            const __VLS_278 = {}.NButton;
            /** @type { [typeof __VLS_components.NButton, typeof __VLS_components.nButton, typeof __VLS_components.NButton, typeof __VLS_components.nButton, ] } */ ;
            // @ts-ignore
            const __VLS_279 = __VLS_asFunctionalComponent(__VLS_278, new __VLS_278({
                type: ("info"),
            }));
            const __VLS_280 = __VLS_279({
                type: ("info"),
            }, ...__VLS_functionalComponentArgsRest(__VLS_279));
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { icon: __VLS_thisSlot } = __VLS_283.slots;
                const __VLS_284 = {}.NIcon;
                /** @type { [typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, ] } */ ;
                // @ts-ignore
                const __VLS_285 = __VLS_asFunctionalComponent(__VLS_284, new __VLS_284({}));
                const __VLS_286 = __VLS_285({}, ...__VLS_functionalComponentArgsRest(__VLS_285));
                const __VLS_290 = {}.FilterOutline;
                /** @type { [typeof __VLS_components.FilterOutline, ] } */ ;
                // @ts-ignore
                const __VLS_291 = __VLS_asFunctionalComponent(__VLS_290, new __VLS_290({}));
                const __VLS_292 = __VLS_291({}, ...__VLS_functionalComponentArgsRest(__VLS_291));
                __VLS_289.slots.default;
                var __VLS_289;
            }
            var __VLS_283;
            __VLS_259.slots.default;
            var __VLS_259;
            __VLS_223.slots.default;
            var __VLS_223;
        }
        const __VLS_296 = {}.NDataTable;
        /** @type { [typeof __VLS_components.NDataTable, typeof __VLS_components.nDataTable, ] } */ ;
        // @ts-ignore
        const __VLS_297 = __VLS_asFunctionalComponent(__VLS_296, new __VLS_296({
            columns: ((__VLS_ctx.columns)),
            data: ((__VLS_ctx.data)),
            pagination: ((__VLS_ctx.pagination)),
            bordered: ((false)),
        }));
        const __VLS_298 = __VLS_297({
            columns: ((__VLS_ctx.columns)),
            data: ((__VLS_ctx.data)),
            pagination: ((__VLS_ctx.pagination)),
            bordered: ((false)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_297));
        var __VLS_217;
        var __VLS_19;
    }
    __VLS_11.slots.default;
    var __VLS_11;
    __VLS_5.slots.default;
    var __VLS_5;
    const __VLS_302 = {}.NBackTop;
    /** @type { [typeof __VLS_components.NBackTop, typeof __VLS_components.nBackTop, ] } */ ;
    // @ts-ignore
    const __VLS_303 = __VLS_asFunctionalComponent(__VLS_302, new __VLS_302({
        right: ((40)),
    }));
    const __VLS_304 = __VLS_303({
        right: ((40)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_303));
    ['page-container', 'tab-content', 'shadow-card', 'data-card', 'shadow-card', 'chart-container', 'shadow-card', 'mt-4',];
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
            CheckmarkCircleOutline: CheckmarkCircleOutline,
            RefreshOutline: RefreshOutline,
            SearchOutline: SearchOutline,
            DownloadOutline: DownloadOutline,
            FilterOutline: FilterOutline,
            activeTab: activeTab,
            tabs: tabs,
            envData: envData,
            columns: columns,
            chartType: chartType,
            chartOptions: chartOptions,
            data: data,
            pagination: pagination,
            handleClose: handleClose,
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
