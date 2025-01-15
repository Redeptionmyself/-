/// <reference types="../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { CubeOutline, LinkOutline, ServerOutline, PeopleOutline } from '@vicons/ionicons5';
const statistics = [
    {
        title: '产品总数',
        value: 128,
        icon: CubeOutline
    },
    {
        title: '溯源记录',
        value: 856,
        icon: LinkOutline
    },
    {
        title: '区块数量',
        value: 234,
        icon: ServerOutline
    },
    {
        title: '参与方',
        value: 45,
        icon: PeopleOutline
    }
]; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("page-container") },
    });
    const __VLS_0 = {}.NCard;
    /** @type { [typeof __VLS_components.NCard, typeof __VLS_components.nCard, typeof __VLS_components.NCard, typeof __VLS_components.nCard, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        title: ("系统概览"),
    }));
    const __VLS_2 = __VLS_1({
        title: ("系统概览"),
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
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.statistics))) {
        const __VLS_12 = {}.NGridItem;
        /** @type { [typeof __VLS_components.NGridItem, typeof __VLS_components.nGridItem, typeof __VLS_components.NGridItem, typeof __VLS_components.nGridItem, ] } */ ;
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
            key: ((item.title)),
        }));
        const __VLS_14 = __VLS_13({
            key: ((item.title)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        const __VLS_18 = {}.NCard;
        /** @type { [typeof __VLS_components.NCard, typeof __VLS_components.nCard, typeof __VLS_components.NCard, typeof __VLS_components.nCard, ] } */ ;
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({
            size: ("small"),
        }));
        const __VLS_20 = __VLS_19({
            size: ("small"),
        }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        const __VLS_24 = {}.NStatistic;
        /** @type { [typeof __VLS_components.NStatistic, typeof __VLS_components.nStatistic, typeof __VLS_components.NStatistic, typeof __VLS_components.nStatistic, ] } */ ;
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
            label: ((item.title)),
            value: ((item.value)),
        }));
        const __VLS_26 = __VLS_25({
            label: ((item.title)),
            value: ((item.value)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { prefix: __VLS_thisSlot } = __VLS_29.slots;
            const __VLS_30 = {}.NIcon;
            /** @type { [typeof __VLS_components.NIcon, typeof __VLS_components.nIcon, ] } */ ;
            // @ts-ignore
            const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({
                component: ((item.icon)),
            }));
            const __VLS_32 = __VLS_31({
                component: ((item.icon)),
            }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        }
        var __VLS_29;
        __VLS_23.slots.default;
        var __VLS_23;
        __VLS_17.slots.default;
        var __VLS_17;
    }
    __VLS_11.slots.default;
    var __VLS_11;
    __VLS_5.slots.default;
    var __VLS_5;
    ['page-container',];
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
            statistics: statistics,
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
