import { h } from 'vue';
import { LeafOutline, NutritionOutline, CalendarOutline, AddOutline, DownloadOutline, SearchOutline, EyeOutline, CreateOutline } from '@vicons/ionicons5';
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
];
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
];
const columns = [
    { title: '作物名称', key: 'name' },
    { title: '种植面积(亩)', key: 'area', align: 'right' },
    { title: '实际产量(kg)', key: 'yield', align: 'right' },
    { title: '种植日期', key: 'plantDate' },
    { title: '收获日期', key: 'harvestDate' },
    {
        title: '状态',
        key: 'status',
        render(row) {
            return h('div', {
                style: {
                    color: row.status === 'completed' ? '#18a058' : '#2080f0'
                }
            }, row.status === 'completed' ? '已完成' : '进行中');
        }
    }
];
const data = [];
const pagination = { pageSize: 10 };
function getStatusType(progress) {
    if (progress >= 80)
        return 'success';
    if (progress >= 30)
        return 'info';
    return 'warning';
}
function getStatusText(progress) {
    if (progress >= 80)
        return '即将收获';
    if (progress >= 30)
        return '生长中';
    return '幼苗期';
}
function getProgressColor(progress) {
    if (progress >= 80)
        return '#18a058';
    if (progress >= 30)
        return '#2080f0';
    return '#f0a020';
}
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['shadow-card', 'stat-card', 'stat-icon', 'planting-card', 'n-button', 'n-tabs-tab',];
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
        cols: ((3)),
        xGap: ((12)),
    }));
    const __VLS_8 = __VLS_7({
        cols: ((3)),
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
        title: ("种植记录"),
        bordered: ((false)),
        ...{ class: ("shadow-card mt-4") },
    }));
    const __VLS_62 = __VLS_61({
        title: ("种植记录"),
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
        const __VLS_72 = {}.NButtonGroup;
        /** @type { [typeof __VLS_components.NButtonGroup, typeof __VLS_components.nButtonGroup, typeof __VLS_components.NButtonGroup, typeof __VLS_components.nButtonGroup, ] } */ ;
        // @ts-ignore
        const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({}));
        const __VLS_74 = __VLS_73({}, ...__VLS_functionalComponentArgsRest(__VLS_73));
        const __VLS_78 = {}.NButton;
        /** @type { [typeof __VLS_components.NButton, typeof __VLS_components.nButton, typeof __VLS_components.NButton, typeof __VLS_components.nButton, ] } */ ;
        // @ts-ignore
        const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({}));
        const __VLS_80 = __VLS_79({}, ...__VLS_functionalComponentArgsRest(__VLS_79));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { icon: __VLS_thisSlot } = __VLS_83.slots;
            const __VLS_84 = {}.NIcon;
            /** @type { [typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, ] } */ ;
            // @ts-ignore
            const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({}));
            const __VLS_86 = __VLS_85({}, ...__VLS_functionalComponentArgsRest(__VLS_85));
            const __VLS_90 = {}.DownloadOutline;
            /** @type { [typeof __VLS_components.DownloadOutline, ] } */ ;
            // @ts-ignore
            const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({}));
            const __VLS_92 = __VLS_91({}, ...__VLS_functionalComponentArgsRest(__VLS_91));
            __VLS_89.slots.default;
            var __VLS_89;
        }
        var __VLS_83;
        const __VLS_96 = {}.NButton;
        /** @type { [typeof __VLS_components.NButton, typeof __VLS_components.nButton, typeof __VLS_components.NButton, typeof __VLS_components.nButton, ] } */ ;
        // @ts-ignore
        const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({
            type: ("primary"),
        }));
        const __VLS_98 = __VLS_97({
            type: ("primary"),
        }, ...__VLS_functionalComponentArgsRest(__VLS_97));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { icon: __VLS_thisSlot } = __VLS_101.slots;
            const __VLS_102 = {}.NIcon;
            /** @type { [typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, ] } */ ;
            // @ts-ignore
            const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({}));
            const __VLS_104 = __VLS_103({}, ...__VLS_functionalComponentArgsRest(__VLS_103));
            const __VLS_108 = {}.AddOutline;
            /** @type { [typeof __VLS_components.AddOutline, ] } */ ;
            // @ts-ignore
            const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({}));
            const __VLS_110 = __VLS_109({}, ...__VLS_functionalComponentArgsRest(__VLS_109));
            __VLS_107.slots.default;
            var __VLS_107;
        }
        var __VLS_101;
        __VLS_77.slots.default;
        var __VLS_77;
        __VLS_71.slots.default;
        var __VLS_71;
    }
    const __VLS_114 = {}.NTabs;
    /** @type { [typeof __VLS_components.NTabs, typeof __VLS_components.nTabs, typeof __VLS_components.NTabs, typeof __VLS_components.nTabs, ] } */ ;
    // @ts-ignore
    const __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({
        type: ("segment"),
        animated: (true),
    }));
    const __VLS_116 = __VLS_115({
        type: ("segment"),
        animated: (true),
    }, ...__VLS_functionalComponentArgsRest(__VLS_115));
    const __VLS_120 = {}.NTabPane;
    /** @type { [typeof __VLS_components.NTabPane, typeof __VLS_components.nTabPane, typeof __VLS_components.NTabPane, typeof __VLS_components.nTabPane, ] } */ ;
    // @ts-ignore
    const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({
        name: ("current"),
        tab: ("当前种植"),
    }));
    const __VLS_122 = __VLS_121({
        name: ("current"),
        tab: ("当前种植"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_121));
    const __VLS_126 = {}.NGrid;
    /** @type { [typeof __VLS_components.NGrid, typeof __VLS_components.nGrid, typeof __VLS_components.NGrid, typeof __VLS_components.nGrid, ] } */ ;
    // @ts-ignore
    const __VLS_127 = __VLS_asFunctionalComponent(__VLS_126, new __VLS_126({
        cols: ((3)),
        xGap: ((12)),
        yGap: ((12)),
    }));
    const __VLS_128 = __VLS_127({
        cols: ((3)),
        xGap: ((12)),
        yGap: ((12)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_127));
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.currentPlanting))) {
        const __VLS_132 = {}.NGridItem;
        /** @type { [typeof __VLS_components.NGridItem, typeof __VLS_components.nGridItem, typeof __VLS_components.NGridItem, typeof __VLS_components.nGridItem, ] } */ ;
        // @ts-ignore
        const __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132({
            key: ((item.id)),
        }));
        const __VLS_134 = __VLS_133({
            key: ((item.id)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_133));
        const __VLS_138 = {}.NCard;
        /** @type { [typeof __VLS_components.NCard, typeof __VLS_components.nCard, typeof __VLS_components.NCard, typeof __VLS_components.nCard, ] } */ ;
        // @ts-ignore
        const __VLS_139 = __VLS_asFunctionalComponent(__VLS_138, new __VLS_138({
            size: ("small"),
            bordered: ((false)),
            ...{ class: ("planting-card") },
        }));
        const __VLS_140 = __VLS_139({
            size: ("small"),
            bordered: ((false)),
            ...{ class: ("planting-card") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_139));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { header: __VLS_thisSlot } = __VLS_143.slots;
            const __VLS_144 = {}.NSpace;
            /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
            // @ts-ignore
            const __VLS_145 = __VLS_asFunctionalComponent(__VLS_144, new __VLS_144({
                justify: ("space-between"),
            }));
            const __VLS_146 = __VLS_145({
                justify: ("space-between"),
            }, ...__VLS_functionalComponentArgsRest(__VLS_145));
            const __VLS_150 = {}.NSpace;
            /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
            // @ts-ignore
            const __VLS_151 = __VLS_asFunctionalComponent(__VLS_150, new __VLS_150({}));
            const __VLS_152 = __VLS_151({}, ...__VLS_functionalComponentArgsRest(__VLS_151));
            const __VLS_156 = {}.NAvatar;
            /** @type { [typeof __VLS_components.NAvatar, typeof __VLS_components.nAvatar, ] } */ ;
            // @ts-ignore
            const __VLS_157 = __VLS_asFunctionalComponent(__VLS_156, new __VLS_156({
                round: (true),
                size: ((32)),
                src: ((item.image)),
                fallbackSrc: ("/placeholder.png"),
            }));
            const __VLS_158 = __VLS_157({
                round: (true),
                size: ((32)),
                src: ((item.image)),
                fallbackSrc: ("/placeholder.png"),
            }, ...__VLS_functionalComponentArgsRest(__VLS_157));
            const __VLS_162 = {}.NText;
            /** @type { [typeof __VLS_components.NText, typeof __VLS_components.nText, typeof __VLS_components.NText, typeof __VLS_components.nText, ] } */ ;
            // @ts-ignore
            const __VLS_163 = __VLS_asFunctionalComponent(__VLS_162, new __VLS_162({
                strong: (true),
            }));
            const __VLS_164 = __VLS_163({
                strong: (true),
            }, ...__VLS_functionalComponentArgsRest(__VLS_163));
            (item.name);
            __VLS_167.slots.default;
            var __VLS_167;
            __VLS_155.slots.default;
            var __VLS_155;
            const __VLS_168 = {}.NTag;
            /** @type { [typeof __VLS_components.NTag, typeof __VLS_components.nTag, typeof __VLS_components.NTag, typeof __VLS_components.nTag, ] } */ ;
            // @ts-ignore
            const __VLS_169 = __VLS_asFunctionalComponent(__VLS_168, new __VLS_168({
                type: ((__VLS_ctx.getStatusType(item.progress))),
                round: (true),
            }));
            const __VLS_170 = __VLS_169({
                type: ((__VLS_ctx.getStatusType(item.progress))),
                round: (true),
            }, ...__VLS_functionalComponentArgsRest(__VLS_169));
            (__VLS_ctx.getStatusText(item.progress));
            __VLS_173.slots.default;
            var __VLS_173;
            __VLS_149.slots.default;
            var __VLS_149;
        }
        const __VLS_174 = {}.NList;
        /** @type { [typeof __VLS_components.NList, typeof __VLS_components.nList, typeof __VLS_components.NList, typeof __VLS_components.nList, ] } */ ;
        // @ts-ignore
        const __VLS_175 = __VLS_asFunctionalComponent(__VLS_174, new __VLS_174({}));
        const __VLS_176 = __VLS_175({}, ...__VLS_functionalComponentArgsRest(__VLS_175));
        const __VLS_180 = {}.NListItem;
        /** @type { [typeof __VLS_components.NListItem, typeof __VLS_components.nListItem, typeof __VLS_components.NListItem, typeof __VLS_components.nListItem, ] } */ ;
        // @ts-ignore
        const __VLS_181 = __VLS_asFunctionalComponent(__VLS_180, new __VLS_180({}));
        const __VLS_182 = __VLS_181({}, ...__VLS_functionalComponentArgsRest(__VLS_181));
        const __VLS_186 = {}.NSpace;
        /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
        // @ts-ignore
        const __VLS_187 = __VLS_asFunctionalComponent(__VLS_186, new __VLS_186({
            justify: ("space-between"),
        }));
        const __VLS_188 = __VLS_187({
            justify: ("space-between"),
        }, ...__VLS_functionalComponentArgsRest(__VLS_187));
        const __VLS_192 = {}.NText;
        /** @type { [typeof __VLS_components.NText, typeof __VLS_components.nText, typeof __VLS_components.NText, typeof __VLS_components.nText, ] } */ ;
        // @ts-ignore
        const __VLS_193 = __VLS_asFunctionalComponent(__VLS_192, new __VLS_192({
            depth: ("3"),
        }));
        const __VLS_194 = __VLS_193({
            depth: ("3"),
        }, ...__VLS_functionalComponentArgsRest(__VLS_193));
        __VLS_197.slots.default;
        var __VLS_197;
        const __VLS_198 = {}.NText;
        /** @type { [typeof __VLS_components.NText, typeof __VLS_components.nText, typeof __VLS_components.NText, typeof __VLS_components.nText, ] } */ ;
        // @ts-ignore
        const __VLS_199 = __VLS_asFunctionalComponent(__VLS_198, new __VLS_198({}));
        const __VLS_200 = __VLS_199({}, ...__VLS_functionalComponentArgsRest(__VLS_199));
        (item.area);
        __VLS_203.slots.default;
        var __VLS_203;
        __VLS_191.slots.default;
        var __VLS_191;
        __VLS_185.slots.default;
        var __VLS_185;
        const __VLS_204 = {}.NListItem;
        /** @type { [typeof __VLS_components.NListItem, typeof __VLS_components.nListItem, typeof __VLS_components.NListItem, typeof __VLS_components.nListItem, ] } */ ;
        // @ts-ignore
        const __VLS_205 = __VLS_asFunctionalComponent(__VLS_204, new __VLS_204({}));
        const __VLS_206 = __VLS_205({}, ...__VLS_functionalComponentArgsRest(__VLS_205));
        const __VLS_210 = {}.NSpace;
        /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
        // @ts-ignore
        const __VLS_211 = __VLS_asFunctionalComponent(__VLS_210, new __VLS_210({
            justify: ("space-between"),
        }));
        const __VLS_212 = __VLS_211({
            justify: ("space-between"),
        }, ...__VLS_functionalComponentArgsRest(__VLS_211));
        const __VLS_216 = {}.NText;
        /** @type { [typeof __VLS_components.NText, typeof __VLS_components.nText, typeof __VLS_components.NText, typeof __VLS_components.nText, ] } */ ;
        // @ts-ignore
        const __VLS_217 = __VLS_asFunctionalComponent(__VLS_216, new __VLS_216({
            depth: ("3"),
        }));
        const __VLS_218 = __VLS_217({
            depth: ("3"),
        }, ...__VLS_functionalComponentArgsRest(__VLS_217));
        __VLS_221.slots.default;
        var __VLS_221;
        const __VLS_222 = {}.NText;
        /** @type { [typeof __VLS_components.NText, typeof __VLS_components.nText, typeof __VLS_components.NText, typeof __VLS_components.nText, ] } */ ;
        // @ts-ignore
        const __VLS_223 = __VLS_asFunctionalComponent(__VLS_222, new __VLS_222({}));
        const __VLS_224 = __VLS_223({}, ...__VLS_functionalComponentArgsRest(__VLS_223));
        (item.expectedYield);
        __VLS_227.slots.default;
        var __VLS_227;
        __VLS_215.slots.default;
        var __VLS_215;
        __VLS_209.slots.default;
        var __VLS_209;
        const __VLS_228 = {}.NListItem;
        /** @type { [typeof __VLS_components.NListItem, typeof __VLS_components.nListItem, typeof __VLS_components.NListItem, typeof __VLS_components.nListItem, ] } */ ;
        // @ts-ignore
        const __VLS_229 = __VLS_asFunctionalComponent(__VLS_228, new __VLS_228({}));
        const __VLS_230 = __VLS_229({}, ...__VLS_functionalComponentArgsRest(__VLS_229));
        const __VLS_234 = {}.NSpace;
        /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
        // @ts-ignore
        const __VLS_235 = __VLS_asFunctionalComponent(__VLS_234, new __VLS_234({
            justify: ("space-between"),
        }));
        const __VLS_236 = __VLS_235({
            justify: ("space-between"),
        }, ...__VLS_functionalComponentArgsRest(__VLS_235));
        const __VLS_240 = {}.NText;
        /** @type { [typeof __VLS_components.NText, typeof __VLS_components.nText, typeof __VLS_components.NText, typeof __VLS_components.nText, ] } */ ;
        // @ts-ignore
        const __VLS_241 = __VLS_asFunctionalComponent(__VLS_240, new __VLS_240({
            depth: ("3"),
        }));
        const __VLS_242 = __VLS_241({
            depth: ("3"),
        }, ...__VLS_functionalComponentArgsRest(__VLS_241));
        __VLS_245.slots.default;
        var __VLS_245;
        const __VLS_246 = {}.NText;
        /** @type { [typeof __VLS_components.NText, typeof __VLS_components.nText, typeof __VLS_components.NText, typeof __VLS_components.nText, ] } */ ;
        // @ts-ignore
        const __VLS_247 = __VLS_asFunctionalComponent(__VLS_246, new __VLS_246({}));
        const __VLS_248 = __VLS_247({}, ...__VLS_functionalComponentArgsRest(__VLS_247));
        (item.plantDate);
        __VLS_251.slots.default;
        var __VLS_251;
        __VLS_239.slots.default;
        var __VLS_239;
        __VLS_233.slots.default;
        var __VLS_233;
        __VLS_179.slots.default;
        var __VLS_179;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("progress-section") },
        });
        const __VLS_252 = {}.NProgress;
        /** @type { [typeof __VLS_components.NProgress, typeof __VLS_components.nProgress, typeof __VLS_components.NProgress, typeof __VLS_components.nProgress, ] } */ ;
        // @ts-ignore
        const __VLS_253 = __VLS_asFunctionalComponent(__VLS_252, new __VLS_252({
            type: ("line"),
            percentage: ((item.progress)),
            color: ((__VLS_ctx.getProgressColor(item.progress))),
            height: ((8)),
            borderRadius: ((4)),
        }));
        const __VLS_254 = __VLS_253({
            type: ("line"),
            percentage: ((item.progress)),
            color: ((__VLS_ctx.getProgressColor(item.progress))),
            height: ((8)),
            borderRadius: ((4)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_253));
        const __VLS_258 = {}.NText;
        /** @type { [typeof __VLS_components.NText, typeof __VLS_components.nText, typeof __VLS_components.NText, typeof __VLS_components.nText, ] } */ ;
        // @ts-ignore
        const __VLS_259 = __VLS_asFunctionalComponent(__VLS_258, new __VLS_258({}));
        const __VLS_260 = __VLS_259({}, ...__VLS_functionalComponentArgsRest(__VLS_259));
        (item.progress);
        __VLS_263.slots.default;
        var __VLS_263;
        __VLS_257.slots.default;
        var __VLS_257;
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { footer: __VLS_thisSlot } = __VLS_143.slots;
            const __VLS_264 = {}.NSpace;
            /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
            // @ts-ignore
            const __VLS_265 = __VLS_asFunctionalComponent(__VLS_264, new __VLS_264({
                justify: ("end"),
            }));
            const __VLS_266 = __VLS_265({
                justify: ("end"),
            }, ...__VLS_functionalComponentArgsRest(__VLS_265));
            const __VLS_270 = {}.NButton;
            /** @type { [typeof __VLS_components.NButton, typeof __VLS_components.nButton, typeof __VLS_components.NButton, typeof __VLS_components.nButton, ] } */ ;
            // @ts-ignore
            const __VLS_271 = __VLS_asFunctionalComponent(__VLS_270, new __VLS_270({
                text: (true),
                size: ("small"),
            }));
            const __VLS_272 = __VLS_271({
                text: (true),
                size: ("small"),
            }, ...__VLS_functionalComponentArgsRest(__VLS_271));
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { icon: __VLS_thisSlot } = __VLS_275.slots;
                const __VLS_276 = {}.NIcon;
                /** @type { [typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, ] } */ ;
                // @ts-ignore
                const __VLS_277 = __VLS_asFunctionalComponent(__VLS_276, new __VLS_276({}));
                const __VLS_278 = __VLS_277({}, ...__VLS_functionalComponentArgsRest(__VLS_277));
                const __VLS_282 = {}.EyeOutline;
                /** @type { [typeof __VLS_components.EyeOutline, ] } */ ;
                // @ts-ignore
                const __VLS_283 = __VLS_asFunctionalComponent(__VLS_282, new __VLS_282({}));
                const __VLS_284 = __VLS_283({}, ...__VLS_functionalComponentArgsRest(__VLS_283));
                __VLS_281.slots.default;
                var __VLS_281;
            }
            var __VLS_275;
            const __VLS_288 = {}.NButton;
            /** @type { [typeof __VLS_components.NButton, typeof __VLS_components.nButton, typeof __VLS_components.NButton, typeof __VLS_components.nButton, ] } */ ;
            // @ts-ignore
            const __VLS_289 = __VLS_asFunctionalComponent(__VLS_288, new __VLS_288({
                text: (true),
                size: ("small"),
                type: ("info"),
            }));
            const __VLS_290 = __VLS_289({
                text: (true),
                size: ("small"),
                type: ("info"),
            }, ...__VLS_functionalComponentArgsRest(__VLS_289));
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { icon: __VLS_thisSlot } = __VLS_293.slots;
                const __VLS_294 = {}.NIcon;
                /** @type { [typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, ] } */ ;
                // @ts-ignore
                const __VLS_295 = __VLS_asFunctionalComponent(__VLS_294, new __VLS_294({}));
                const __VLS_296 = __VLS_295({}, ...__VLS_functionalComponentArgsRest(__VLS_295));
                const __VLS_300 = {}.CreateOutline;
                /** @type { [typeof __VLS_components.CreateOutline, ] } */ ;
                // @ts-ignore
                const __VLS_301 = __VLS_asFunctionalComponent(__VLS_300, new __VLS_300({}));
                const __VLS_302 = __VLS_301({}, ...__VLS_functionalComponentArgsRest(__VLS_301));
                __VLS_299.slots.default;
                var __VLS_299;
            }
            var __VLS_293;
            __VLS_269.slots.default;
            var __VLS_269;
        }
        var __VLS_143;
        __VLS_137.slots.default;
        var __VLS_137;
    }
    __VLS_131.slots.default;
    var __VLS_131;
    __VLS_125.slots.default;
    var __VLS_125;
    const __VLS_306 = {}.NTabPane;
    /** @type { [typeof __VLS_components.NTabPane, typeof __VLS_components.nTabPane, typeof __VLS_components.NTabPane, typeof __VLS_components.nTabPane, ] } */ ;
    // @ts-ignore
    const __VLS_307 = __VLS_asFunctionalComponent(__VLS_306, new __VLS_306({
        name: ("history"),
        tab: ("历史记录"),
    }));
    const __VLS_308 = __VLS_307({
        name: ("history"),
        tab: ("历史记录"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_307));
    const __VLS_312 = {}.NSpace;
    /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
    // @ts-ignore
    const __VLS_313 = __VLS_asFunctionalComponent(__VLS_312, new __VLS_312({
        vertical: (true),
    }));
    const __VLS_314 = __VLS_313({
        vertical: (true),
    }, ...__VLS_functionalComponentArgsRest(__VLS_313));
    const __VLS_318 = {}.NSpace;
    /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
    // @ts-ignore
    const __VLS_319 = __VLS_asFunctionalComponent(__VLS_318, new __VLS_318({
        justify: ("end"),
    }));
    const __VLS_320 = __VLS_319({
        justify: ("end"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_319));
    const __VLS_324 = {}.NDatePicker;
    /** @type { [typeof __VLS_components.NDatePicker, typeof __VLS_components.nDatePicker, ] } */ ;
    // @ts-ignore
    const __VLS_325 = __VLS_asFunctionalComponent(__VLS_324, new __VLS_324({
        valueFormat: ("yyyy-MM-dd"),
        type: ("daterange"),
        size: ("small"),
    }));
    const __VLS_326 = __VLS_325({
        valueFormat: ("yyyy-MM-dd"),
        type: ("daterange"),
        size: ("small"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_325));
    const __VLS_330 = {}.NInputGroup;
    /** @type { [typeof __VLS_components.NInputGroup, typeof __VLS_components.nInputGroup, typeof __VLS_components.NInputGroup, typeof __VLS_components.nInputGroup, ] } */ ;
    // @ts-ignore
    const __VLS_331 = __VLS_asFunctionalComponent(__VLS_330, new __VLS_330({}));
    const __VLS_332 = __VLS_331({}, ...__VLS_functionalComponentArgsRest(__VLS_331));
    const __VLS_336 = {}.NInput;
    /** @type { [typeof __VLS_components.NInput, typeof __VLS_components.nInput, typeof __VLS_components.NInput, typeof __VLS_components.nInput, ] } */ ;
    // @ts-ignore
    const __VLS_337 = __VLS_asFunctionalComponent(__VLS_336, new __VLS_336({
        placeholder: ("搜索..."),
    }));
    const __VLS_338 = __VLS_337({
        placeholder: ("搜索..."),
    }, ...__VLS_functionalComponentArgsRest(__VLS_337));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { prefix: __VLS_thisSlot } = __VLS_341.slots;
        const __VLS_342 = {}.NIcon;
        /** @type { [typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, ] } */ ;
        // @ts-ignore
        const __VLS_343 = __VLS_asFunctionalComponent(__VLS_342, new __VLS_342({}));
        const __VLS_344 = __VLS_343({}, ...__VLS_functionalComponentArgsRest(__VLS_343));
        const __VLS_348 = {}.SearchOutline;
        /** @type { [typeof __VLS_components.SearchOutline, ] } */ ;
        // @ts-ignore
        const __VLS_349 = __VLS_asFunctionalComponent(__VLS_348, new __VLS_348({}));
        const __VLS_350 = __VLS_349({}, ...__VLS_functionalComponentArgsRest(__VLS_349));
        __VLS_347.slots.default;
        var __VLS_347;
    }
    var __VLS_341;
    const __VLS_354 = {}.NButton;
    /** @type { [typeof __VLS_components.NButton, typeof __VLS_components.nButton, typeof __VLS_components.NButton, typeof __VLS_components.nButton, ] } */ ;
    // @ts-ignore
    const __VLS_355 = __VLS_asFunctionalComponent(__VLS_354, new __VLS_354({
        type: ("primary"),
    }));
    const __VLS_356 = __VLS_355({
        type: ("primary"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_355));
    __VLS_359.slots.default;
    var __VLS_359;
    __VLS_335.slots.default;
    var __VLS_335;
    __VLS_323.slots.default;
    var __VLS_323;
    const __VLS_360 = {}.NDataTable;
    /** @type { [typeof __VLS_components.NDataTable, typeof __VLS_components.nDataTable, ] } */ ;
    // @ts-ignore
    const __VLS_361 = __VLS_asFunctionalComponent(__VLS_360, new __VLS_360({
        columns: ((__VLS_ctx.columns)),
        data: ((__VLS_ctx.data)),
        pagination: ((__VLS_ctx.pagination)),
        bordered: ((false)),
    }));
    const __VLS_362 = __VLS_361({
        columns: ((__VLS_ctx.columns)),
        data: ((__VLS_ctx.data)),
        pagination: ((__VLS_ctx.pagination)),
        bordered: ((false)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_361));
    __VLS_317.slots.default;
    var __VLS_317;
    __VLS_311.slots.default;
    var __VLS_311;
    __VLS_119.slots.default;
    var __VLS_119;
    var __VLS_65;
    __VLS_5.slots.default;
    var __VLS_5;
    const __VLS_366 = {}.NBackTop;
    /** @type { [typeof __VLS_components.NBackTop, typeof __VLS_components.nBackTop, ] } */ ;
    // @ts-ignore
    const __VLS_367 = __VLS_asFunctionalComponent(__VLS_366, new __VLS_366({
        right: ((40)),
    }));
    const __VLS_368 = __VLS_367({
        right: ((40)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_367));
    ['page-container', 'shadow-card', 'stat-card', 'stat-icon', 'shadow-card', 'mt-4', 'planting-card', 'progress-section',];
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
            AddOutline: AddOutline,
            DownloadOutline: DownloadOutline,
            SearchOutline: SearchOutline,
            EyeOutline: EyeOutline,
            CreateOutline: CreateOutline,
            statistics: statistics,
            currentPlanting: currentPlanting,
            columns: columns,
            data: data,
            pagination: pagination,
            getStatusType: getStatusType,
            getStatusText: getStatusText,
            getProgressColor: getProgressColor,
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
