import { ref } from 'vue';
import { CheckmarkCircleOutline, WarningOutline, SearchOutline, DownloadOutline, FilterOutline, RefreshOutline, FlaskOutline, SpeedometerOutline, LeafOutline } from '@vicons/ionicons5';
const activeTab = ref('overview');
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
];
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
];
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
];
const columns = [
    { title: '检测编号', key: 'id', width: 120 },
    { title: '检测项目', key: 'item' },
    {
        title: '检测结果',
        key: 'result',
        render(row) {
            return h('div', {
                style: {
                    color: row.status === 'normal' ? '#18a058' : '#d03050'
                }
            }, row.result);
        }
    },
    { title: '标准值', key: 'standard' },
    { title: '检测时间', key: 'time' },
    {
        title: '状态',
        key: 'status',
        render(row) {
            return h(NTag, {
                type: row.status === 'normal' ? 'success' : 'warning',
                round: true,
                bordered: false
            }, { default: () => row.status === 'normal' ? '合格' : '不合格' });
        }
    }
];
const tableData = [
    {
        id: 'QC20240114001',
        item: '农药残留',
        result: '0.05 mg/kg',
        standard: '≤0.1 mg/kg',
        time: '2024-01-14 10:00:00',
        status: 'normal'
    }
];
const pagination = { pageSize: 10 }; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['shadow-card', 'stat-card', 'stat-icon', 'n-list-item', 'n-button', 'n-tabs-tab',];
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
        type: ("card"),
        animated: (true),
        value: ((__VLS_ctx.activeTab)),
        ...{ style: ({}) },
    }));
    const __VLS_8 = __VLS_7({
        type: ("card"),
        animated: (true),
        value: ((__VLS_ctx.activeTab)),
        ...{ style: ({}) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    for (const [tab] of __VLS_getVForSourceType((__VLS_ctx.tabs))) {
        const __VLS_12 = {}.NTabPane;
        /** @type { [typeof __VLS_components.NTabPane, typeof __VLS_components.nTabPane, typeof __VLS_components.NTabPane, typeof __VLS_components.nTabPane, ] } */ ;
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
            key: ((tab.key)),
            name: ((tab.key)),
        }));
        const __VLS_14 = __VLS_13({
            key: ((tab.key)),
            name: ((tab.key)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { tab: __VLS_thisSlot } = __VLS_17.slots;
            const __VLS_18 = {}.NSpace;
            /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
            // @ts-ignore
            const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({
                align: ("center"),
                size: ((4)),
            }));
            const __VLS_20 = __VLS_19({
                align: ("center"),
                size: ((4)),
            }, ...__VLS_functionalComponentArgsRest(__VLS_19));
            const __VLS_24 = {}.NIcon;
            /** @type { [typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, ] } */ ;
            // @ts-ignore
            const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
                color: ((tab.iconColor)),
                size: ((16)),
            }));
            const __VLS_26 = __VLS_25({
                color: ((tab.iconColor)),
                size: ((16)),
            }, ...__VLS_functionalComponentArgsRest(__VLS_25));
            const __VLS_30 = ((tab.icon));
            // @ts-ignore
            const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({}));
            const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
            __VLS_29.slots.default;
            var __VLS_29;
            (tab.tab);
            __VLS_23.slots.default;
            var __VLS_23;
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("tab-content") },
        });
        if (tab.key === 'overview') {
            const __VLS_36 = {}.NGrid;
            /** @type { [typeof __VLS_components.NGrid, typeof __VLS_components.nGrid, typeof __VLS_components.NGrid, typeof __VLS_components.nGrid, ] } */ ;
            // @ts-ignore
            const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
                xGap: ((12)),
                cols: ((3)),
            }));
            const __VLS_38 = __VLS_37({
                xGap: ((12)),
                cols: ((3)),
            }, ...__VLS_functionalComponentArgsRest(__VLS_37));
            for (const [stat] of __VLS_getVForSourceType((__VLS_ctx.statistics))) {
                const __VLS_42 = {}.NGridItem;
                /** @type { [typeof __VLS_components.NGridItem, typeof __VLS_components.nGridItem, typeof __VLS_components.NGridItem, typeof __VLS_components.nGridItem, ] } */ ;
                // @ts-ignore
                const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({
                    key: ((stat.key)),
                }));
                const __VLS_44 = __VLS_43({
                    key: ((stat.key)),
                }, ...__VLS_functionalComponentArgsRest(__VLS_43));
                const __VLS_48 = {}.NCard;
                /** @type { [typeof __VLS_components.NCard, typeof __VLS_components.nCard, typeof __VLS_components.NCard, typeof __VLS_components.nCard, ] } */ ;
                // @ts-ignore
                const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({
                    bordered: ((false)),
                    ...{ class: ("shadow-card stat-card") },
                }));
                const __VLS_50 = __VLS_49({
                    bordered: ((false)),
                    ...{ class: ("shadow-card stat-card") },
                }, ...__VLS_functionalComponentArgsRest(__VLS_49));
                const __VLS_54 = {}.NSpace;
                /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
                // @ts-ignore
                const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({
                    align: ("center"),
                    size: ((12)),
                }));
                const __VLS_56 = __VLS_55({
                    align: ("center"),
                    size: ((12)),
                }, ...__VLS_functionalComponentArgsRest(__VLS_55));
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    ...{ class: ("stat-icon") },
                    ...{ style: (({ background: stat.color })) },
                });
                const __VLS_60 = {}.NIcon;
                /** @type { [typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, ] } */ ;
                // @ts-ignore
                const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
                    size: ((24)),
                    color: ((stat.iconColor)),
                }));
                const __VLS_62 = __VLS_61({
                    size: ((24)),
                    color: ((stat.iconColor)),
                }, ...__VLS_functionalComponentArgsRest(__VLS_61));
                const __VLS_66 = ((stat.icon));
                // @ts-ignore
                const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({}));
                const __VLS_68 = __VLS_67({}, ...__VLS_functionalComponentArgsRest(__VLS_67));
                __VLS_65.slots.default;
                var __VLS_65;
                const __VLS_72 = {}.NSpace;
                /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
                // @ts-ignore
                const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({
                    vertical: (true),
                    size: ((2)),
                }));
                const __VLS_74 = __VLS_73({
                    vertical: (true),
                    size: ((2)),
                }, ...__VLS_functionalComponentArgsRest(__VLS_73));
                const __VLS_78 = {}.NText;
                /** @type { [typeof __VLS_components.NText, typeof __VLS_components.nText, typeof __VLS_components.NText, typeof __VLS_components.nText, ] } */ ;
                // @ts-ignore
                const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({
                    depth: ("3"),
                }));
                const __VLS_80 = __VLS_79({
                    depth: ("3"),
                }, ...__VLS_functionalComponentArgsRest(__VLS_79));
                (stat.label);
                __VLS_83.slots.default;
                var __VLS_83;
                const __VLS_84 = {}.NStatistic;
                /** @type { [typeof __VLS_components.NStatistic, typeof __VLS_components.nStatistic, typeof __VLS_components.NStatistic, typeof __VLS_components.nStatistic, ] } */ ;
                // @ts-ignore
                const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({
                    value: ((stat.value)),
                    precision: ((1)),
                }));
                const __VLS_86 = __VLS_85({
                    value: ((stat.value)),
                    precision: ((1)),
                }, ...__VLS_functionalComponentArgsRest(__VLS_85));
                __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
                {
                    const { suffix: __VLS_thisSlot } = __VLS_89.slots;
                    (stat.unit);
                }
                var __VLS_89;
                __VLS_77.slots.default;
                var __VLS_77;
                __VLS_59.slots.default;
                var __VLS_59;
                __VLS_53.slots.default;
                var __VLS_53;
                __VLS_47.slots.default;
                var __VLS_47;
            }
            __VLS_41.slots.default;
            var __VLS_41;
        }
        const __VLS_90 = {}.NCard;
        /** @type { [typeof __VLS_components.NCard, typeof __VLS_components.nCard, typeof __VLS_components.NCard, typeof __VLS_components.nCard, ] } */ ;
        // @ts-ignore
        const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({
            title: ("最新检测数据"),
            bordered: ((false)),
            ...{ class: ("shadow-card mt-4") },
        }));
        const __VLS_92 = __VLS_91({
            title: ("最新检测数据"),
            bordered: ((false)),
            ...{ class: ("shadow-card mt-4") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_91));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { 'header-extra': __VLS_thisSlot } = __VLS_95.slots;
            const __VLS_96 = {}.NSpace;
            /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
            // @ts-ignore
            const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({}));
            const __VLS_98 = __VLS_97({}, ...__VLS_functionalComponentArgsRest(__VLS_97));
            const __VLS_102 = {}.NTag;
            /** @type { [typeof __VLS_components.NTag, typeof __VLS_components.nTag, typeof __VLS_components.NTag, typeof __VLS_components.nTag, ] } */ ;
            // @ts-ignore
            const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({
                bordered: ((false)),
                type: ("success"),
            }));
            const __VLS_104 = __VLS_103({
                bordered: ((false)),
                type: ("success"),
            }, ...__VLS_functionalComponentArgsRest(__VLS_103));
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { icon: __VLS_thisSlot } = __VLS_107.slots;
                const __VLS_108 = {}.NIcon;
                /** @type { [typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, ] } */ ;
                // @ts-ignore
                const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({}));
                const __VLS_110 = __VLS_109({}, ...__VLS_functionalComponentArgsRest(__VLS_109));
                const __VLS_114 = {}.CheckmarkCircleOutline;
                /** @type { [typeof __VLS_components.CheckmarkCircleOutline, ] } */ ;
                // @ts-ignore
                const __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({}));
                const __VLS_116 = __VLS_115({}, ...__VLS_functionalComponentArgsRest(__VLS_115));
                __VLS_113.slots.default;
                var __VLS_113;
            }
            var __VLS_107;
            const __VLS_120 = {}.NButton;
            /** @type { [typeof __VLS_components.NButton, typeof __VLS_components.nButton, typeof __VLS_components.NButton, typeof __VLS_components.nButton, ] } */ ;
            // @ts-ignore
            const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({
                quaternary: (true),
                circle: (true),
            }));
            const __VLS_122 = __VLS_121({
                quaternary: (true),
                circle: (true),
            }, ...__VLS_functionalComponentArgsRest(__VLS_121));
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { icon: __VLS_thisSlot } = __VLS_125.slots;
                const __VLS_126 = {}.NIcon;
                /** @type { [typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, ] } */ ;
                // @ts-ignore
                const __VLS_127 = __VLS_asFunctionalComponent(__VLS_126, new __VLS_126({}));
                const __VLS_128 = __VLS_127({}, ...__VLS_functionalComponentArgsRest(__VLS_127));
                const __VLS_132 = {}.RefreshOutline;
                /** @type { [typeof __VLS_components.RefreshOutline, ] } */ ;
                // @ts-ignore
                const __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132({}));
                const __VLS_134 = __VLS_133({}, ...__VLS_functionalComponentArgsRest(__VLS_133));
                __VLS_131.slots.default;
                var __VLS_131;
            }
            var __VLS_125;
            __VLS_101.slots.default;
            var __VLS_101;
        }
        const __VLS_138 = {}.NGrid;
        /** @type { [typeof __VLS_components.NGrid, typeof __VLS_components.nGrid, typeof __VLS_components.NGrid, typeof __VLS_components.nGrid, ] } */ ;
        // @ts-ignore
        const __VLS_139 = __VLS_asFunctionalComponent(__VLS_138, new __VLS_138({
            cols: ((2)),
            xGap: ((12)),
        }));
        const __VLS_140 = __VLS_139({
            cols: ((2)),
            xGap: ((12)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_139));
        const __VLS_144 = {}.NGridItem;
        /** @type { [typeof __VLS_components.NGridItem, typeof __VLS_components.nGridItem, typeof __VLS_components.NGridItem, typeof __VLS_components.nGridItem, ] } */ ;
        // @ts-ignore
        const __VLS_145 = __VLS_asFunctionalComponent(__VLS_144, new __VLS_144({}));
        const __VLS_146 = __VLS_145({}, ...__VLS_functionalComponentArgsRest(__VLS_145));
        const __VLS_150 = {}.NList;
        /** @type { [typeof __VLS_components.NList, typeof __VLS_components.nList, typeof __VLS_components.NList, typeof __VLS_components.nList, ] } */ ;
        // @ts-ignore
        const __VLS_151 = __VLS_asFunctionalComponent(__VLS_150, new __VLS_150({
            hoverable: (true),
            clickable: (true),
        }));
        const __VLS_152 = __VLS_151({
            hoverable: (true),
            clickable: (true),
        }, ...__VLS_functionalComponentArgsRest(__VLS_151));
        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.latestData))) {
            const __VLS_156 = {}.NListItem;
            /** @type { [typeof __VLS_components.NListItem, typeof __VLS_components.nListItem, typeof __VLS_components.NListItem, typeof __VLS_components.nListItem, ] } */ ;
            // @ts-ignore
            const __VLS_157 = __VLS_asFunctionalComponent(__VLS_156, new __VLS_156({
                key: ((item.key)),
            }));
            const __VLS_158 = __VLS_157({
                key: ((item.key)),
            }, ...__VLS_functionalComponentArgsRest(__VLS_157));
            const __VLS_162 = {}.NThing;
            /** @type { [typeof __VLS_components.NThing, typeof __VLS_components.nThing, typeof __VLS_components.NThing, typeof __VLS_components.nThing, ] } */ ;
            // @ts-ignore
            const __VLS_163 = __VLS_asFunctionalComponent(__VLS_162, new __VLS_162({
                title: ((item.label)),
                description: ((item.description)),
            }));
            const __VLS_164 = __VLS_163({
                title: ((item.label)),
                description: ((item.description)),
            }, ...__VLS_functionalComponentArgsRest(__VLS_163));
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { 'header-extra': __VLS_thisSlot } = __VLS_167.slots;
                const __VLS_168 = {}.NTag;
                /** @type { [typeof __VLS_components.NTag, typeof __VLS_components.nTag, typeof __VLS_components.NTag, typeof __VLS_components.nTag, ] } */ ;
                // @ts-ignore
                const __VLS_169 = __VLS_asFunctionalComponent(__VLS_168, new __VLS_168({
                    type: ((item.status)),
                    bordered: ((false)),
                    round: (true),
                }));
                const __VLS_170 = __VLS_169({
                    type: ((item.status)),
                    bordered: ((false)),
                    round: (true),
                }, ...__VLS_functionalComponentArgsRest(__VLS_169));
                (item.value);
                (item.unit);
                __VLS_173.slots.default;
                var __VLS_173;
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { description: __VLS_thisSlot } = __VLS_167.slots;
                const __VLS_174 = {}.NProgress;
                /** @type { [typeof __VLS_components.NProgress, typeof __VLS_components.nProgress, ] } */ ;
                // @ts-ignore
                const __VLS_175 = __VLS_asFunctionalComponent(__VLS_174, new __VLS_174({
                    type: ("line"),
                    percentage: ((item.percentage)),
                    color: ((item.status === 'success' ? '#18a058' : '#f0a020')),
                    height: ((4)),
                    showIndicator: ((false)),
                }));
                const __VLS_176 = __VLS_175({
                    type: ("line"),
                    percentage: ((item.percentage)),
                    color: ((item.status === 'success' ? '#18a058' : '#f0a020')),
                    height: ((4)),
                    showIndicator: ((false)),
                }, ...__VLS_functionalComponentArgsRest(__VLS_175));
            }
            var __VLS_167;
            __VLS_161.slots.default;
            var __VLS_161;
        }
        __VLS_155.slots.default;
        var __VLS_155;
        __VLS_149.slots.default;
        var __VLS_149;
        const __VLS_180 = {}.NGridItem;
        /** @type { [typeof __VLS_components.NGridItem, typeof __VLS_components.nGridItem, typeof __VLS_components.NGridItem, typeof __VLS_components.nGridItem, ] } */ ;
        // @ts-ignore
        const __VLS_181 = __VLS_asFunctionalComponent(__VLS_180, new __VLS_180({}));
        const __VLS_182 = __VLS_181({}, ...__VLS_functionalComponentArgsRest(__VLS_181));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("chart-container") },
        });
        const __VLS_186 = {}.NEmpty;
        /** @type { [typeof __VLS_components.NEmpty, typeof __VLS_components.nEmpty, typeof __VLS_components.NEmpty, typeof __VLS_components.nEmpty, ] } */ ;
        // @ts-ignore
        const __VLS_187 = __VLS_asFunctionalComponent(__VLS_186, new __VLS_186({
            description: ("暂无图表数据"),
        }));
        const __VLS_188 = __VLS_187({
            description: ("暂无图表数据"),
        }, ...__VLS_functionalComponentArgsRest(__VLS_187));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { extra: __VLS_thisSlot } = __VLS_191.slots;
            const __VLS_192 = {}.NButton;
            /** @type { [typeof __VLS_components.NButton, typeof __VLS_components.nButton, typeof __VLS_components.NButton, typeof __VLS_components.nButton, ] } */ ;
            // @ts-ignore
            const __VLS_193 = __VLS_asFunctionalComponent(__VLS_192, new __VLS_192({
                size: ("small"),
            }));
            const __VLS_194 = __VLS_193({
                size: ("small"),
            }, ...__VLS_functionalComponentArgsRest(__VLS_193));
            __VLS_197.slots.default;
            var __VLS_197;
        }
        var __VLS_191;
        __VLS_185.slots.default;
        var __VLS_185;
        __VLS_143.slots.default;
        var __VLS_143;
        var __VLS_95;
        const __VLS_198 = {}.NCard;
        /** @type { [typeof __VLS_components.NCard, typeof __VLS_components.nCard, typeof __VLS_components.NCard, typeof __VLS_components.nCard, ] } */ ;
        // @ts-ignore
        const __VLS_199 = __VLS_asFunctionalComponent(__VLS_198, new __VLS_198({
            title: ("历史记录"),
            bordered: ((false)),
            ...{ class: ("shadow-card mt-4") },
        }));
        const __VLS_200 = __VLS_199({
            title: ("历史记录"),
            bordered: ((false)),
            ...{ class: ("shadow-card mt-4") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_199));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { 'header-extra': __VLS_thisSlot } = __VLS_203.slots;
            const __VLS_204 = {}.NSpace;
            /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
            // @ts-ignore
            const __VLS_205 = __VLS_asFunctionalComponent(__VLS_204, new __VLS_204({}));
            const __VLS_206 = __VLS_205({}, ...__VLS_functionalComponentArgsRest(__VLS_205));
            const __VLS_210 = {}.NDatePicker;
            /** @type { [typeof __VLS_components.NDatePicker, typeof __VLS_components.nDatePicker, ] } */ ;
            // @ts-ignore
            const __VLS_211 = __VLS_asFunctionalComponent(__VLS_210, new __VLS_210({
                valueFormat: ("yyyy-MM-dd"),
                type: ("daterange"),
                size: ("small"),
            }));
            const __VLS_212 = __VLS_211({
                valueFormat: ("yyyy-MM-dd"),
                type: ("daterange"),
                size: ("small"),
            }, ...__VLS_functionalComponentArgsRest(__VLS_211));
            const __VLS_216 = {}.NInputGroup;
            /** @type { [typeof __VLS_components.NInputGroup, typeof __VLS_components.nInputGroup, typeof __VLS_components.NInputGroup, typeof __VLS_components.nInputGroup, ] } */ ;
            // @ts-ignore
            const __VLS_217 = __VLS_asFunctionalComponent(__VLS_216, new __VLS_216({}));
            const __VLS_218 = __VLS_217({}, ...__VLS_functionalComponentArgsRest(__VLS_217));
            const __VLS_222 = {}.NInput;
            /** @type { [typeof __VLS_components.NInput, typeof __VLS_components.nInput, typeof __VLS_components.NInput, typeof __VLS_components.nInput, ] } */ ;
            // @ts-ignore
            const __VLS_223 = __VLS_asFunctionalComponent(__VLS_222, new __VLS_222({
                placeholder: ("搜索..."),
            }));
            const __VLS_224 = __VLS_223({
                placeholder: ("搜索..."),
            }, ...__VLS_functionalComponentArgsRest(__VLS_223));
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { prefix: __VLS_thisSlot } = __VLS_227.slots;
                const __VLS_228 = {}.NIcon;
                /** @type { [typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, ] } */ ;
                // @ts-ignore
                const __VLS_229 = __VLS_asFunctionalComponent(__VLS_228, new __VLS_228({}));
                const __VLS_230 = __VLS_229({}, ...__VLS_functionalComponentArgsRest(__VLS_229));
                const __VLS_234 = {}.SearchOutline;
                /** @type { [typeof __VLS_components.SearchOutline, ] } */ ;
                // @ts-ignore
                const __VLS_235 = __VLS_asFunctionalComponent(__VLS_234, new __VLS_234({}));
                const __VLS_236 = __VLS_235({}, ...__VLS_functionalComponentArgsRest(__VLS_235));
                __VLS_233.slots.default;
                var __VLS_233;
            }
            var __VLS_227;
            const __VLS_240 = {}.NButton;
            /** @type { [typeof __VLS_components.NButton, typeof __VLS_components.nButton, typeof __VLS_components.NButton, typeof __VLS_components.nButton, ] } */ ;
            // @ts-ignore
            const __VLS_241 = __VLS_asFunctionalComponent(__VLS_240, new __VLS_240({
                type: ("primary"),
            }));
            const __VLS_242 = __VLS_241({
                type: ("primary"),
            }, ...__VLS_functionalComponentArgsRest(__VLS_241));
            __VLS_245.slots.default;
            var __VLS_245;
            __VLS_221.slots.default;
            var __VLS_221;
            const __VLS_246 = {}.NButtonGroup;
            /** @type { [typeof __VLS_components.NButtonGroup, typeof __VLS_components.nButtonGroup, typeof __VLS_components.NButtonGroup, typeof __VLS_components.nButtonGroup, ] } */ ;
            // @ts-ignore
            const __VLS_247 = __VLS_asFunctionalComponent(__VLS_246, new __VLS_246({}));
            const __VLS_248 = __VLS_247({}, ...__VLS_functionalComponentArgsRest(__VLS_247));
            const __VLS_252 = {}.NButton;
            /** @type { [typeof __VLS_components.NButton, typeof __VLS_components.nButton, typeof __VLS_components.NButton, typeof __VLS_components.nButton, ] } */ ;
            // @ts-ignore
            const __VLS_253 = __VLS_asFunctionalComponent(__VLS_252, new __VLS_252({}));
            const __VLS_254 = __VLS_253({}, ...__VLS_functionalComponentArgsRest(__VLS_253));
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { icon: __VLS_thisSlot } = __VLS_257.slots;
                const __VLS_258 = {}.NIcon;
                /** @type { [typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, ] } */ ;
                // @ts-ignore
                const __VLS_259 = __VLS_asFunctionalComponent(__VLS_258, new __VLS_258({}));
                const __VLS_260 = __VLS_259({}, ...__VLS_functionalComponentArgsRest(__VLS_259));
                const __VLS_264 = {}.DownloadOutline;
                /** @type { [typeof __VLS_components.DownloadOutline, ] } */ ;
                // @ts-ignore
                const __VLS_265 = __VLS_asFunctionalComponent(__VLS_264, new __VLS_264({}));
                const __VLS_266 = __VLS_265({}, ...__VLS_functionalComponentArgsRest(__VLS_265));
                __VLS_263.slots.default;
                var __VLS_263;
            }
            var __VLS_257;
            const __VLS_270 = {}.NButton;
            /** @type { [typeof __VLS_components.NButton, typeof __VLS_components.nButton, typeof __VLS_components.NButton, typeof __VLS_components.nButton, ] } */ ;
            // @ts-ignore
            const __VLS_271 = __VLS_asFunctionalComponent(__VLS_270, new __VLS_270({
                type: ("info"),
            }));
            const __VLS_272 = __VLS_271({
                type: ("info"),
            }, ...__VLS_functionalComponentArgsRest(__VLS_271));
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { icon: __VLS_thisSlot } = __VLS_275.slots;
                const __VLS_276 = {}.NIcon;
                /** @type { [typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, ] } */ ;
                // @ts-ignore
                const __VLS_277 = __VLS_asFunctionalComponent(__VLS_276, new __VLS_276({}));
                const __VLS_278 = __VLS_277({}, ...__VLS_functionalComponentArgsRest(__VLS_277));
                const __VLS_282 = {}.FilterOutline;
                /** @type { [typeof __VLS_components.FilterOutline, ] } */ ;
                // @ts-ignore
                const __VLS_283 = __VLS_asFunctionalComponent(__VLS_282, new __VLS_282({}));
                const __VLS_284 = __VLS_283({}, ...__VLS_functionalComponentArgsRest(__VLS_283));
                __VLS_281.slots.default;
                var __VLS_281;
            }
            var __VLS_275;
            __VLS_251.slots.default;
            var __VLS_251;
            __VLS_209.slots.default;
            var __VLS_209;
        }
        const __VLS_288 = {}.NDataTable;
        /** @type { [typeof __VLS_components.NDataTable, typeof __VLS_components.nDataTable, ] } */ ;
        // @ts-ignore
        const __VLS_289 = __VLS_asFunctionalComponent(__VLS_288, new __VLS_288({
            columns: ((__VLS_ctx.columns)),
            data: ((__VLS_ctx.tableData)),
            pagination: ((__VLS_ctx.pagination)),
            bordered: ((false)),
        }));
        const __VLS_290 = __VLS_289({
            columns: ((__VLS_ctx.columns)),
            data: ((__VLS_ctx.tableData)),
            pagination: ((__VLS_ctx.pagination)),
            bordered: ((false)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_289));
        var __VLS_203;
        var __VLS_17;
    }
    __VLS_11.slots.default;
    var __VLS_11;
    __VLS_5.slots.default;
    var __VLS_5;
    const __VLS_294 = {}.NBackTop;
    /** @type { [typeof __VLS_components.NBackTop, typeof __VLS_components.nBackTop, ] } */ ;
    // @ts-ignore
    const __VLS_295 = __VLS_asFunctionalComponent(__VLS_294, new __VLS_294({
        right: ((40)),
    }));
    const __VLS_296 = __VLS_295({
        right: ((40)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_295));
    ['page-container', 'tab-content', 'shadow-card', 'stat-card', 'stat-icon', 'shadow-card', 'mt-4', 'chart-container', 'shadow-card', 'mt-4',];
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
            SearchOutline: SearchOutline,
            DownloadOutline: DownloadOutline,
            FilterOutline: FilterOutline,
            RefreshOutline: RefreshOutline,
            activeTab: activeTab,
            tabs: tabs,
            statistics: statistics,
            latestData: latestData,
            columns: columns,
            tableData: tableData,
            pagination: pagination,
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
