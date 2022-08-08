import {
  computed,
  h,
  provide,
  ref,
  toRef,
} from "vue";

import ATableCountProPage from "./ATableCountProPage/ATableCountProPage";
import ATableHeader from "./ATableHeader/ATableHeader";
import ATablePagination from "./ATablePagination/ATablePagination";
import ATablePreviewRight from "./ATablePreviewRight/ATablePreviewRight";
import ATableTopPanel from "./ATableTopPanel/ATableTopPanel";
import ATableTr from "./ATableTr/ATableTr";

import PreviewAPI from "./compositionAPI/PreviewAPI";
import ScrollControlAPI from "./compositionAPI/ScrollControlAPI";

import {
  getModelColumnsOrderingDefault,
  getModelColumnsVisibleDefault,
} from "./utils/utils";
import {
  cloneDeep, forEach, get, isArray, isNil, isPlainObject, keyBy,
  orderBy,
  startsWith,
  uniqueId,
} from "lodash-es";


export default {
  name: "ATable",
  components: {
    ATableCountProPage,
    ATableHeader,
    ATablePagination,
    ATableTopPanel,
    ATableTr,
  },
  props: {
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_table"),
    },
    columns: {
      type: Array,
      required: true,
    },
    columnWidthDefault: {
      type: Number,
      required: false,
      default: 250,
    },
    columnActionsWidth: {
      type: Number,
      required: false,
      default: 250,
    },
    countAllRows: {
      type: Number,
      required: false,
      default: undefined,
    },
    label: {
      type: [String, Number],
      required: false,
      default: "",
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
    offsetStart: {
      type: Number,
      required: false,
      default: 0,
    },
    sortingStart: {
      type: String,
      required: false,
      default: undefined,
    },
    modelIsTableWithoutScrollStart: {
      type: Boolean,
      required: false,
      default: true,
    },
    data: {
      type: [Array, Object, Promise],
      required: false,
    },
    isLoadingTable: {
      type: Boolean,
      required: false,
    },
    isLoadingOptions: {
      type: Boolean,
      required: false,
    },
    keyCountAllRowsInData: {
      type: String,
      required: false,
      default: "count",
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
    tableActions: {
      type: Array,
      required: false,
      default: () => [],
    },
    rowActions: {
      type: Array,
      required: false,
      default: () => [],
    },
    isPaginationOutside: {
      type: Boolean,
      required: false,
    },
    isSortingOutside: {
      type: Boolean,
      required: false,
    },
    preview: {
      type: String,
      required: false,
      default: undefined,
      validator: value => ["right", "down"].indexOf(value) !== -1,
    },
    previewHeaderTag: {
      type: String,
      required: false,
      default: "h2",
    },
    previewBoxWidth: {
      type: Number,
      required: false,
      default: 300,
    },
    isQuickSearch: {
      type: Boolean,
      required: false,
    },
    modelQuickSearch: {
      type: String,
      required: false,
      default: "",
    },
  },
  emits: [
    "update:modelColumnsOrder",
    "update:modelColumnsVisible",
    "update:modelQuickSearch",
    "changeColumnsOrdering",
    "changeColumnsVisible",
    "changeLimit",
    "changeOffset",
    "changeSorting",
    "mouseupResizePreviewRight",
    "updateModelIsTableWithoutScroll",
  ],
  provide() {
    return {
      changeColumnsOrdering: this.changeColumnsOrdering,
      changeModelColumnsVisible: this.changeModelColumnsVisible,
      changeModelSort: this.changeModelSort,
      columns: computed(() => this.columns),
      columnActionsWidthLocal: computed(() => this.columnActionsWidth),
      columnWidthDefault: computed(() => this.columnWidthDefault),
      isLoadingOptions: computed(() => this.isLoadingOptions),
      isLoadingTable: computed(() => this.isLoadingTable),
      rowActions: computed(() => this.rowActions),
      tableId: computed(() => this.tableId),
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
      aTableRef,
      changeModelIsTableWithoutScroll,
      checkVisibleColumns,
      columnsVisibleAdditionalSpaceForOneGrow,
      columnsScrollInvisible,
      indexFirstScrollInvisibleColumn,
      modelIsTableWithoutScroll,
    } = ScrollControlAPI(props, context, {
      columnsOrdered,
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

    provide("changeModelIsTableWithoutScroll", changeModelIsTableWithoutScroll);
    provide("columnsOrdered", columnsOrdered);
    provide("columnsVisibleAdditionalSpaceForOneGrow", columnsVisibleAdditionalSpaceForOneGrow);
    provide("columnsScrollInvisible", columnsScrollInvisible);
    provide("hasPreview", hasPreview);
    provide("indexFirstScrollInvisibleColumn", indexFirstScrollInvisibleColumn);
    provide("modelIsTableWithoutScroll", modelIsTableWithoutScroll);
    provide("onTogglePreview", onTogglePreview);
    provide("previewRightRowIndex", previewRightRowIndex);
    provide("previewRightRowIndexLast", previewRightRowIndexLast);

    provide("modelColumnsVisibleLocal", modelColumnsVisibleLocal);
    provide("modelColumnsVisibleMapping", modelColumnsVisibleMapping);


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
    };
  },
  data() {
    return {
      resolved: undefined,
      error: undefined,
      modelSort: this.sortingStart,
      limit: this.limitStart,
      offset: this.offsetStart,
    };
  },
  computed: {
    rowsLocal() {
      return this.dataPaginated;
    },

    dataPaginated() {
      if (this.limit && !this.isPaginationOutside) {
        const DATA_SORTED = cloneDeep(this.dataSorted);
        const INDEX_START = this.offset;
        const INDEX_END = INDEX_START + this.limit;
        return DATA_SORTED.slice(INDEX_START, INDEX_END);
      }
      return this.dataSorted;
    },

    dataSorted() {
      if (this.modelSort && !this.isSortingOutside) {
        return orderBy(this.data, [this.sortOptions.model], [this.sortOptions.direction]);
      }
      return this.data;
    },

    sortOptions() {
      if (this.modelSort) {
        let directionSort = "asc";
        let modelSort = this.modelSort;
        if (startsWith(this.modelSort, "-")) {
          directionSort = "desc";
          modelSort = this.modelSort.slice(1);
        }
        return {
          direction: directionSort,
          model: modelSort,
        };
      }
    },

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

    hasRows() {
      return !!this.rowsLocal.length;
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
      this.closePreviewAll();
    },

    changeLimit(limit) {
      this.limit = limit;
      this.offset = this.offsetStart;
      this.$emit("changeLimit", {
        offset: this.offset,
        limit,
      });
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
    return h("div", {
      ref: "aTableRef",
      class: ["a_table__parent", {
        a_table__parent_scrollable: !this.modelIsTableWithoutScroll,
      }],
    }, [
      h(ATableTopPanel, {
        countAllRows: this.countAllRowsLocal,
        label: this.label,
        labelTag: this.labelTag,
        tableActions: this.tableActions,
        isQuickSearch: this.isQuickSearch,
        modelQuickSearch: this.modelQuickSearch,
        onUpdateModelQuickSearch: this.updateModelQuickSearch,
      }, this.$slots),
      h("div", {
        class: "a_table",
      }, [
        h(ATableHeader, {
          modelSort: this.modelSort,
        }),
        h("div", {
          class: "a_table__body"
        }, this.rowsLocal.map((row, rowIndex) => {
          return h(ATableTr, {
            row,
            rowIndex,
          }, this.$slots);
        })),
      ]),
      !this.hasRows && h("div", {
        class: "a_table__empty_text",
      }, "Keine Einträge vorhanden."),
      h("div", {
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
    ]);
  },
};
