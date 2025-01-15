/// <reference types="../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { h } from 'vue';
import { NButton, NSpace, useMessage } from 'naive-ui';
const message = useMessage();
const columns = [
    { title: '产品编号', key: 'id' },
    { title: '产品名称', key: 'name' },
    { title: '产品类别', key: 'category' },
    { title: '生产商', key: 'manufacturer' },
    {
        title: '操作',
        key: 'actions',
        render(row) {
            return h(NSpace, { justify: 'center' }, {
                default: () => [
                    h(NButton, {
                        text: true,
                        type: 'primary',
                        onClick: () => handleView(row)
                    }, { default: () => '查看' }),
                    h(NButton, {
                        text: true,
                        onClick: () => handleTrace(row)
                    }, { default: () => '溯源' })
                ]
            });
        }
    }
];
const tableData = [
    {
        id: 'P001',
        name: '有机大米',
        category: '粮食',
        manufacturer: '某某农业'
    }
];
const pagination = {
    pageSize: 10
};
function handleAddProduct() {
    message.info('新增产品');
}
function handleView(row) {
    message.info(`查看产品：${row.id}`);
}
function handleTrace(row) {
    message.info(`产品溯源：${row.id}`);
}
; /* PartiallyEnd: #3632/scriptSetup.vue */
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
        title: ("产品管理"),
    }));
    const __VLS_2 = __VLS_1({
        title: ("产品管理"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { 'header-extra': __VLS_thisSlot } = __VLS_5.slots;
        const __VLS_6 = {}.NButton;
        /** @type { [typeof __VLS_components.NButton, typeof __VLS_components.nButton, typeof __VLS_components.NButton, typeof __VLS_components.nButton, ] } */ ;
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
            ...{ 'onClick': {} },
            type: ("primary"),
        }));
        const __VLS_8 = __VLS_7({
            ...{ 'onClick': {} },
            type: ("primary"),
        }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        let __VLS_12;
        const __VLS_13 = {
            onClick: (__VLS_ctx.handleAddProduct)
        };
        let __VLS_9;
        let __VLS_10;
        __VLS_11.slots.default;
        var __VLS_11;
    }
    const __VLS_14 = {}.NDataTable;
    /** @type { [typeof __VLS_components.NDataTable, typeof __VLS_components.nDataTable, ] } */ ;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({
        columns: ((__VLS_ctx.columns)),
        data: ((__VLS_ctx.tableData)),
        pagination: ((__VLS_ctx.pagination)),
    }));
    const __VLS_16 = __VLS_15({
        columns: ((__VLS_ctx.columns)),
        data: ((__VLS_ctx.tableData)),
        pagination: ((__VLS_ctx.pagination)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_15));
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
            NButton: NButton,
            columns: columns,
            tableData: tableData,
            pagination: pagination,
            handleAddProduct: handleAddProduct,
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
