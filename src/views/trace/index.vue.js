import { h } from 'vue';
import { NTag, NButton, useMessage } from 'naive-ui';
const message = useMessage();
const columns = [
    { title: '追溯编号', key: 'id' },
    { title: '产品名称', key: 'product' },
    { title: '批次号', key: 'batch' },
    { title: '创建时间', key: 'createTime' },
    {
        title: '状态',
        key: 'status',
        render(row) {
            return h(NTag, {
                type: row.status === '已完成' ? 'success' : 'warning',
                round: true
            }, { default: () => row.status });
        }
    },
    {
        title: '操作',
        key: 'actions',
        render(row) {
            return h(NSpace, { align: 'center' }, {
                default: () => [
                    h(NButton, {
                        text: true,
                        type: 'primary',
                        onClick: () => handleView(row)
                    }, { default: () => '查看' }),
                    h(NButton, {
                        text: true,
                        onClick: () => handleEdit(row)
                    }, { default: () => '编辑' })
                ]
            });
        }
    }
];
const tableData = [
    {
        id: 'TR001',
        product: '有机蔬菜',
        batch: 'B20240113001',
        createTime: '2024-01-13',
        status: '已完成'
    },
    {
        id: 'TR002',
        product: '水果',
        batch: 'B20240113002',
        createTime: '2024-01-13',
        status: '处理中'
    }
];
const pagination = {
    pageSize: 10
};
function handleAdd() {
    message.info('点击了新增追溯');
}
function handleView(row) {
    message.info(`查看追溯: ${row.id}`);
}
function handleEdit(row) {
    message.info(`编辑追溯: ${row.id}`);
}
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['page-header',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("trace") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("page-header") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("description") },
    });
    const __VLS_0 = {}.NCard;
    /** @type { [typeof __VLS_components.NCard, typeof __VLS_components.nCard, typeof __VLS_components.NCard, typeof __VLS_components.nCard, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = {}.NSpace;
    /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
        vertical: (true),
        size: ((24)),
    }));
    const __VLS_8 = __VLS_7({
        vertical: (true),
        size: ((24)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = {}.NSpace;
    /** @type { [typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, typeof __VLS_components.NSpace, typeof __VLS_components.nSpace, ] } */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
        justify: ("end"),
    }));
    const __VLS_14 = __VLS_13({
        justify: ("end"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    const __VLS_18 = {}.NButton;
    /** @type { [typeof __VLS_components.NButton, typeof __VLS_components.nButton, typeof __VLS_components.NButton, typeof __VLS_components.nButton, ] } */ ;
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({
        ...{ 'onClick': {} },
        type: ("primary"),
    }));
    const __VLS_20 = __VLS_19({
        ...{ 'onClick': {} },
        type: ("primary"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    let __VLS_24;
    const __VLS_25 = {
        onClick: (__VLS_ctx.handleAdd)
    };
    let __VLS_21;
    let __VLS_22;
    __VLS_23.slots.default;
    var __VLS_23;
    __VLS_17.slots.default;
    var __VLS_17;
    const __VLS_26 = {}.NDataTable;
    /** @type { [typeof __VLS_components.NDataTable, typeof __VLS_components.nDataTable, ] } */ ;
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({
        columns: ((__VLS_ctx.columns)),
        data: ((__VLS_ctx.tableData)),
        pagination: ((__VLS_ctx.pagination)),
        bordered: ((false)),
    }));
    const __VLS_28 = __VLS_27({
        columns: ((__VLS_ctx.columns)),
        data: ((__VLS_ctx.tableData)),
        pagination: ((__VLS_ctx.pagination)),
        bordered: ((false)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    __VLS_11.slots.default;
    var __VLS_11;
    __VLS_5.slots.default;
    var __VLS_5;
    ['trace', 'page-header', 'description',];
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
            handleAdd: handleAdd,
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
