import {
  computed,
  h,
  provide,
  ref,
  toRef,
} from "vue";

import AGet from "../AGet/AGet";
import ATableCountProPage from "./ATableCountProPage/ATableCountProPage";
import ATableFilterCenter from "./ATableFilterCenter/ATableFilterCenter";
import ATableHeader from "./ATableHeader/ATableHeader";
import ATablePagination from "./ATablePagination/ATablePagination";
import ATablePreviewRight from "./ATablePreviewRight/ATablePreviewRight";
import ATableTopPanel from "./ATableTopPanel/ATableTopPanel";
import ATableTr from "./ATableTr/ATableTr";

import MultipleActionAPI from "./compositionAPI/MultipleActionAPI";
import PreviewAPI from "./compositionAPI/PreviewAPI";
import RowsAPI from "./compositionAPI/RowsAPI";
import ScrollControlAPI from "./compositionAPI/ScrollControlAPI";
import TableFiltersAPI from "./compositionAPI/TableFiltersAPI";

import {
  getModelColumnsOrderingDefault,
  getModelColumnsVisibleDefault,
} from "./utils/utils";
import {
  cloneDeep,
  forEach,
  get,
  isArray,
  isNil,
  isPlainObject,
  keyBy,
  uniqueId,
} from "lodash-es";
import ATableFiltersTop from "./ATableFiltersTop/ATableFiltersTop";


export default {
  name: "ATable",
  props: {
    columnActionsWidth: {
      type: Number,
      required: false,
      default: 170,
    },
    columns: {
      type: Array,
      required: true,
    },
    columnsDefaultValue: {
      type: [String, Number],
      required: false,
      default: "",
    },
    columnWidthDefault: {
      type: Number,
      required: false,
      default: 250,
    },
    countAllRows: {
      type: Number,
      required: false,
      default: undefined,
    },
    data: {
      type: [Array, Object, Promise],
      required: false,
    },
    filters: {
      type: Array,
      required: false,
      default: () => [],
    },
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_table"),
    },
    isActionColumnVisible: {
      type: Boolean,
      required: false,
      default: true,
    },
    isColumnsDnd: {
      type: Boolean,
      required: false,
      default: true,
    },
    isLoadingOptions: {
      type: Boolean,
      required: false,
    },
    isLoadingTable: {
      type: Boolean,
      required: false,
    },
    isPagination: {
      type: Boolean,
      required: false,
      default: true,
    },
    isPaginationOutside: {
      type: Boolean,
      required: false,
    },
    isQuickSearch: {
      type: Boolean,
      required: false,
    },
    isSortingOutside: {
      type: Boolean,
      required: false,
    },
    keyCountAllRowsInData: {
      type: String,
      required: false,
      default: "count",
    },
    label: {
      type: [String, Number],
      required: false,
      default: "",
    },
    labelClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    labelTag: {
      type: String,
      required: false,
      default: "h2",
    },
    limitsPerPage: {
      type: Array,
      required: false,
      default: () => ["10", "25", "50", "100"],
    },
    limitStart: {
      type: Number,
      required: false,
      default: 10,
    },
    modelColumnsOrdering: {
      type: Array,
      required: false,
      default: () => [],
    },
    modelColumnsVisible: {
      type: Array,
      required: false,
      default: () => [],
    },
    modelFilters: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    modelIsTableWithoutScrollStart: {
      type: Boolean,
      required: false,
      default: true,
    },
    modelQuickSearch: {
      type: String,
      required: false,
      default: "",
    },
    multipleActions: {
      type: Array,
      required: false,
      default: () => [],
    },
    offsetStart: {
      type: Number,
      required: false,
      default: 0,
    },
    preview: {
      type: String,
      required: false,
      default: undefined,
      validator: value => ["right", "down"].indexOf(value) !== -1,
    },
    previewBoxWidth: {
      type: Number,
      required: false,
      default: 300,
    },
    previewHeaderTag: {
      type: String,
      required: false,
      default: "h2",
    },
    rowActions: {
      type: Array,
      required: false,
      default: () => [],
    },
    sortingStart: {
      type: String,
      required: false,
      default: undefined,
    },
    tableActions: {
      type: Array,
      required: false,
      default: () => [],
    },
    valuesForColumnDefault: {
      type: Array,
      required: false,
      default: () => [null, undefined, ""],
    },
  },
  emits: [
    "changeColumnsOrdering",
    "changeColumnsVisible",
    "changeLimit",
    "changeOffset",
    "changeSorting",
    "mouseupResizePreviewRight",
    "update:modelColumnsOrder",
    "update:modelColumnsVisible",
    "update:modelFilters",
    "update:modelQuickSearch",
    "updateModelIsTableWithoutScroll",
  ],
  provide() {
    return {
      changeColumnsOrdering: this.changeColumnsOrdering,
      changeModelColumnsVisible: this.changeModelColumnsVisible,
      changeModelSort: this.changeModelSort,
      columns: computed(() => this.columns),
      columnsDefaultValue: computed(() => this.columnsDefaultValue),
      columnActionsWidthLocal: computed(() => this.columnActionsWidth),
      columnWidthDefault: computed(() => this.columnWidthDefault),
      isActionColumnVisible: computed(() => this.isActionColumnVisible),
      isColumnsDnd: computed(() => this.isColumnsDnd),
      isLoadingOptions: computed(() => this.isLoadingOptions),
      isLoadingTable: computed(() => this.isLoadingTable),
      rowActions: computed(() => this.rowActions),
      tableId: computed(() => this.id),
      valuesForColumnDefault: computed(() => this.valuesForColumnDefault),
    };
  },
  setup(props, context) {
    const columns = toRef(props, "columns");

    const modelColumnsOrderingLocal = ref([]);

    const columnsKeyById = computed(() => {
      return keyBy(columns.value, "id");
    });
    const columnsOrdered = computed(() => {
      const COLUMNS = [];
      forEach(modelColumnsOrderingLocal.value, columnId => {
        COLUMNS.push(columnsKeyById.value[columnId]);
      });
      return COLUMNS;
    });

    const modelColumnsVisibleLocal = ref([]);
    const modelColumnsVisibleMapping = computed(() => {
      const MODEL_COLUMNS = {};
      modelColumnsVisibleLocal.value.forEach(columnId => {
        MODEL_COLUMNS[columnId] = true;
      });
      return MODEL_COLUMNS;
    });


    const {
      hasRows,
      limit,
      modelSort,
      offset,
      rowsLocal,
      rowsLocalLength,
    } = RowsAPI(props);

    const {
      areAllRowsSelected,
      areSomeRowsSelected,
      closeMultipleActionsActive,
      isMultipleActionsActive,
      selectedRows,
      selectedRowsIndexes,
      setEmptySelectedRowsIndexes,
      setSelectedRowsIndexes,
      toggleMultipleActionsActive,
    } = MultipleActionAPI({
      rowsLocal,
      rowsLocalLength,
    });

    const {
      aTableRef,
      changeModelIsTableWithoutScroll,
      checkVisibleColumns,
      columnsVisibleAdditionalSpaceForOneGrow,
      columnsScrollInvisible,
      indexFirstScrollInvisibleColumn,
      modelIsTableWithoutScroll,
    } = ScrollControlAPI(props, context, {
      columnsOrdered,
      isMultipleActionsActive,
      modelColumnsVisibleMapping,
    });

    const {
      closePreview,
      closePreviewAll,
      hasPreview,
      isPreviewRightOpen,
      onTogglePreview,
      mousedownResizePreviewRight,
      mousemoveResizePreviewRight,
      mouseupResizePreviewRight,
      previewDownRowIndexes,
      previewRightRowIndex,
      previewRightRowIndexLast,
      togglePreviewResize,
    } = PreviewAPI(props, context, {
      aTableRef,
    });
    
    const {
      closeFilterValue,
      dataKeyByKeyIdPerFilter,
      filtersGroup,
      filtersKeyById,
      filtersVisible,
      filtersVisibleAll,
      hasFilters,
      modelFiltersLocal,
      startSearch,
      onUpdateModelFilters,
      updateDataKeyByIdFromFilter,
    } = TableFiltersAPI(props, context);

    provide("changeModelIsTableWithoutScroll", changeModelIsTableWithoutScroll);
    provide("columnsOrdered", columnsOrdered);
    provide("columnsVisibleAdditionalSpaceForOneGrow", columnsVisibleAdditionalSpaceForOneGrow);
    provide("columnsScrollInvisible", columnsScrollInvisible);
    provide("hasPreview", hasPreview);
    provide("indexFirstScrollInvisibleColumn", indexFirstScrollInvisibleColumn);
    provide("isMultipleActionsActive", isMultipleActionsActive);
    provide("modelIsTableWithoutScroll", modelIsTableWithoutScroll);
    provide("onTogglePreview", onTogglePreview);
    provide("previewRightRowIndex", previewRightRowIndex);
    provide("previewRightRowIndexLast", previewRightRowIndexLast);

    provide("modelColumnsVisibleLocal", modelColumnsVisibleLocal);
    provide("modelColumnsVisibleMapping", modelColumnsVisibleMapping);
    provide("onUpdateModelFilters", onUpdateModelFilters);
    provide("updateDataKeyByIdFromFilter", updateDataKeyByIdFromFilter);


    return {
      aTableRef,
      checkVisibleColumns,
      columnsOrdered,
      modelColumnsOrderingLocal,
      modelColumnsVisibleLocal,
      modelIsTableWithoutScroll,

      closePreview,
      closePreviewAll,
      isPreviewRightOpen,
      mousedownResizePreviewRight,
      mousemoveResizePreviewRight,
      mouseupResizePreviewRight,
      previewDownRowIndexes,
      previewRightRowIndex,
      togglePreviewResize,

      hasRows,
      limit,
      modelSort,
      offset,
      rowsLocal,
      rowsLocalLength,

      areAllRowsSelected,
      areSomeRowsSelected,
      closeMultipleActionsActive,
      isMultipleActionsActive,
      selectedRows,
      selectedRowsIndexes,
      setEmptySelectedRowsIndexes,
      setSelectedRowsIndexes,
      toggleMultipleActionsActive,

      closeFilterValue,
      dataKeyByKeyIdPerFilter,
      filtersGroup,
      filtersKeyById,
      filtersVisible,
      filtersVisibleAll,
      hasFilters,
      modelFiltersLocal,
      startSearch,
    };
  },
  data() {
    return {
      resolved: undefined,
      error: undefined,
    };
  },
  computed: {
    totalRowsCountLocal() {
      return this.totalRowsCount;
    },

    totalRowsCount() {
      return !isNil(this.countAllRows) ? this.countAllRows : this.data.length;
    },

    countAllRowsLocal() {
      if (!isNil(this.countAllRows)) {
        return this.countAllRows;
      }
      if (this.isDataObject) {
        return +get(this.data, this.keyCountAllRowsInData);
      }
      if (this.isDataArray) {
        return this.data.length;
      }
    },

    isDataObject() {
      return isPlainObject(this.data);
    },

    isDataArray() {
      return isArray(this.data);
    },
  },
  created() {
    this.initModelColumnsOrderingLocal();
    this.initModelColumnsVisibleLocal();
  },
  methods: {
    initModelColumnsOrderingLocal() {
      if (this.modelColumnsOrdering.length) {
        this.modelColumnsOrderingLocal = cloneDeep(this.modelColumnsOrdering);
      } else {
        this.changeColumnsOrdering({ modelColumnsOrderingLocal: getModelColumnsOrderingDefault(this.columns) });
      }
    },

    initModelColumnsVisibleLocal() {
      if (this.modelColumnsVisible.length) {
        this.modelColumnsVisibleLocal = cloneDeep(this.modelColumnsVisible);
      } else {
        this.changeModelColumnsVisible(getModelColumnsVisibleDefault(this.columns));
      }
    },

    changeModelSort({ sortId }) {
      if (this.modelSort === sortId) {
        this.modelSort = `-${ sortId }`;
      } else if (this.modelSort === `-${ sortId }`) {
        this.modelSort = undefined;
      } else {
        this.modelSort = sortId;
      }
      this.$emit("changeSorting", {
        modelSort: this.modelSort,
      });
      this.setEmptySelectedRowsIndexes();
      this.closePreviewAll();
    },

    changeModelColumnsVisible(value) {
      this.modelColumnsVisibleLocal = value;
      this.$emit("update:modelColumnsVisible", cloneDeep(this.modelColumnsVisibleLocal));
      this.checkVisibleColumns();
    },

    changeOffset(offset) {
      this.offset = offset;
      this.$emit("changeOffset", {
        offset,
        limit: this.limit,
      });
      this.setEmptySelectedRowsIndexes();
      this.closePreviewAll();
    },

    changeLimit(limit) {
      this.limit = limit;
      this.offset = this.offsetStart;
      this.$emit("changeLimit", {
        offset: this.offset,
        limit,
      });
      this.setEmptySelectedRowsIndexes();
      this.closePreviewAll();
    },

    changeColumnsOrdering({ modelColumnsOrderingLocal, columnIndexDraggable, columnIndexOver }) {
      if (columnIndexDraggable === columnIndexOver && !modelColumnsOrderingLocal) {
        return;
      }
      if (modelColumnsOrderingLocal) {
        this.modelColumnsOrderingLocal = modelColumnsOrderingLocal;
      } else {
        const ID_DRAGGABLE = this.modelColumnsOrderingLocal[columnIndexDraggable];
        this.modelColumnsOrderingLocal.splice(columnIndexDraggable, 1);
        this.modelColumnsOrderingLocal.splice(columnIndexOver, 0, ID_DRAGGABLE);
      }
      this.$emit("changeColumnsOrdering", {
        columnIndexDraggable,
        columnIndexOver,
        modelColumnsOrdering: cloneDeep(this.modelColumnsOrderingLocal),
      });
      this.checkVisibleColumns();
    },

    updateModelQuickSearch(model) {
      this.$emit("update:modelQuickSearch", model);
    },
  },
  render() {
    return h("div", {}, [
      this.hasFilters && h(ATableFiltersTop, {
        filtersGroup: this.filtersGroup,
        filtersVisible: this.filtersVisible,
        modelFilters: this.modelFiltersLocal,
        onStartSearch: this.startSearch,
      }, this.$slots),
      this.hasFilters && h(ATableFilterCenter, {
        closeFilterValue: this.closeFilterValue,
        dataKeyByKeyIdPerFilter: this.dataKeyByKeyIdPerFilter,
        filtersKeyById: this.filtersKeyById,
        filtersVisibleAll: this.filtersVisibleAll,
        modelFilters: this.modelFilters,
      }),
      h("div", {
        ref: "aTableRef",
        class: ["a_table__parent", {
          a_table__parent_scrollable: !this.modelIsTableWithoutScroll,
        }],
      }, [
        h(ATableTopPanel, {
          areSomeRowsSelected: this.areSomeRowsSelected,
          closeMultipleActionsActive: this.closeMultipleActionsActive,
          countAllRows: this.countAllRowsLocal,
          label: this.label,
          labelTag: this.labelTag,
          labelClass: this.labelClass,
          tableActions: this.tableActions,
          multipleActions: this.multipleActions,
          isQuickSearch: this.isQuickSearch,
          modelQuickSearch: this.modelQuickSearch,
          selectedRows: this.selectedRows,
          onUpdateModelQuickSearch: this.updateModelQuickSearch,
          onToggleMultipleActionsActive: this.toggleMultipleActionsActive,
        }, this.$slots),
        h("div", {
          class: "a_table",
          role: "table",
        }, [
          h(ATableHeader, {
            areAllRowsSelected: this.areAllRowsSelected,
            areSomeRowsSelected: this.areSomeRowsSelected,
            modelSort: this.modelSort,
            onSetSelectedRowsIndexes: this.setSelectedRowsIndexes,
          }),
          h("div", {
            class: "a_table__body",
            role: "rowgroup",
          }, this.rowsLocal.map((row, rowIndex) => {
            return h(ATableTr, {
              row,
              rowIndex,
              selectedRowsIndexes: this.selectedRowsIndexes,
              onSetSelectedRowsIndexes: this.setSelectedRowsIndexes,
            }, {
              get: vm => [
                h(AGet, {
                  data: vm.row,
                  path: vm.column.path,
                  filter: vm.column.filter,
                  filterParameters: vm.column.filterParameters,
                  defaultValue: vm.column.defaultValue,
                }),
              ],
              ...this.$slots,
            });
          })),
        ]),
        !this.hasRows && h("div", {
          class: "a_table__empty_text",
        }, "Keine Einträge vorhanden."),
        this.isPagination && h("div", {
          class: "a_pagination__parent"
        }, [
          h(ATableCountProPage, {
            countAllRows: this.countAllRowsLocal,
            limitsPerPage: this.limitsPerPage,
            isLoadingTable: this.isLoadingTable,
            limit: this.limit,
            offset: this.offset,
            rowsLength: this.rowsLocal.length,
            hasRows: this.hasRows,
            "onUpdate:limit": this.changeLimit,
          }),
          h(ATablePagination, {
            limit: this.limit,
            totalRowsCount: this.totalRowsCountLocal,
            isLoadingTable: this.isLoadingTable,
            offset: this.offset,
            hasRows: this.hasRows,
            "onUpdate:offset": this.changeOffset,
          }),
        ]),
        this.isPreviewRightOpen && h(ATablePreviewRight, {
          rowIndex: this.previewRightRowIndex,
          rows: this.rowsLocal,
          previewHeaderTag: this.previewHeaderTag,
          onClosePreview: this.closePreview,
          onMousedownResizePreviewRight: this.mousedownResizePreviewRight,
          onMousemoveResizePreviewRight: this.mousemoveResizePreviewRight,
          onMouseupResizePreviewRight: this.mouseupResizePreviewRight,
          onTogglePreviewResize: this.togglePreviewResize,
        }, this.$slots),
      ]),
    ]);
  },
};
