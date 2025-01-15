const columns = [
    { title: '记录ID', key: 'id' },
    { title: '时间', key: 'time' },
    { title: '设备ID', key: 'deviceId' },
    { title: '数据', key: 'data' }
];
const data = [];
const pagination = { pageSize: 10 }; /* PartiallyEnd: #3632/scriptSetup.vue */
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
        title: ("RFID记录"),
    }));
    const __VLS_2 = __VLS_1({
        title: ("RFID记录"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = {}.NSpace;
    /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
        vertical: (true),
    }));
    const __VLS_8 = __VLS_7({
        vertical: (true),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = {}.NDataTable;
    /** @type { [typeof __VLS_components.NDataTable, typeof __VLS_components.nDataTable, ] } */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
        columns: ((__VLS_ctx.columns)),
        data: ((__VLS_ctx.data)),
        pagination: ((__VLS_ctx.pagination)),
    }));
    const __VLS_14 = __VLS_13({
        columns: ((__VLS_ctx.columns)),
        data: ((__VLS_ctx.data)),
        pagination: ((__VLS_ctx.pagination)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
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
            columns: columns,
            data: data,
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
