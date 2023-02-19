import {
  computed,
  h,
  provide,
  ref,
} from "vue";

import AGet from "../AGet/AGet";
import ALoading from "../ALoading/ALoading";
import ATableCountProPage from "./ATableCountProPage/ATableCountProPage";
import ATableFilterCenter from "./ATableFilterCenter/ATableFilterCenter";
import ATableFiltersTop from "./ATableFiltersTop/ATableFiltersTop";
import ATableHeader from "./ATableHeader/ATableHeader";
import ATablePagination from "./ATablePagination/ATablePagination";
import ATablePreviewRight from "./ATablePreviewRight/ATablePreviewRight";
import ATableTopPanel from "./ATableTopPanel/ATableTopPanel";
import ATableTr from "./ATableTr/ATableTr";

import LimitOffsetAPI from "./compositionAPI/LimitOffsetAPI";
import MobileAPI from "./compositionAPI/MobileAPI";
import MobileColumnsAPI from "./compositionAPI/MobileColumnsAPI";
import MultipleActionAPI from "./compositionAPI/MultipleActionAPI";
import PreviewAPI from "./compositionAPI/PreviewAPI";
import RowsAPI from "./compositionAPI/RowsAPI";
import ScrollControlAPI from "./compositionAPI/ScrollControlAPI";
import TableAttributesAPI from "./compositionAPI/TableAttributesAPI";
import TableColumnsAPI from "./compositionAPI/TableColumnsAPI";
import TableColumnsVisibleAPI from "./compositionAPI/TableColumnsVisibleAPI";
import TableColumnsVisibleFunctionAPI from "./compositionAPI/TableColumnsVisibleFunctionAPI";
import TableFiltersAPI from "./compositionAPI/TableFiltersAPI";
import ViewsAPI from "./compositionAPI/ViewsAPI";

import {
  getModelColumnsOrderingDefault,
} from "./utils/utils";
import {
  cloneDeep,
  get,
  isArray,
  isNil,
  isPlainObject,
  uniqueId,
} from "lodash-es";


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
    countVisibleMobileColumns: {
      type: Number,
      required: false,
      default: 4,
      validator: value => value > 0,
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
    isLabelVisible: {
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
    isLoadingMultipleActions: {
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
    mobileWidth: {
      type: Number,
      required: false,
      default: 768,
      validator: value => value >= 0,
    },
    modelColumnsOrdering: {
      type: Array,
      required: false,
      default: () => [],
    },
    modelColumnsVisible: {
      type: Object,
      required: false,
      default: () => ({}),
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
    rowsFooter: {
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
    updateModelFiltersLocal: {
      type: Function,
      required: false,
      default: undefined,
    },
    views: {
      type: Array,
      required: false,
      default: () => [],
    },
    modelView: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    tableActionsIndexFirstDropdownAction: {
      type: Number,
      required: false,
      default: -1,
    },
    tableActionsIndexFirstDropdownActionMobile: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  emits: [
    "changeColumnsOrdering",
    "changeColumnsVisible",
    "changeLimit",
    "changeOffset",
    "changeSorting",
    "mouseupResizePreviewRight",
    "togglePreview",
    "update:modelColumnsOrder",
    "update:modelColumnsVisible",
    "updateModelFilters",
    "update:modelQuickSearch",
    "updateModelIsTableWithoutScroll",
    "updateView",
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
    const tableGrandparentRef = ref(undefined);
    const isMultipleActionsActive = ref(undefined);

    const {
      columnsOrdered,
      modelColumnsOrderingLocal,
    } = TableColumnsAPI(props);

    const {
      modelColumnsVisibleLocal,
    } = TableColumnsVisibleAPI();

    const {
      isMobile,
    } = MobileAPI(props);

    const {
      hasRows,
      limit,
      modelSort,
      offset,
      rowsLocal,
      rowsLocalLength,
    } = RowsAPI(props);

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
      isMobile,
      isMultipleActionsActive,
      modelColumnsVisibleLocal,
    });

    const {
      areAllRowsSelected,
      areAllVisibleRowsSelected,
      areSomeRowsSelected,
      closeMultipleActionsActive,
      currentMultipleActions,
      selectedRows,
      selectedRowsIndexes,
      setEmptySelectedRowsIndexes,
      setSelectedRowsIndexes,
      toggleBtnAllRows,
      toggleMultipleActionsActive,
    } = MultipleActionAPI({
      checkVisibleColumns,
      isMultipleActionsActive,
      rowsLocal,
      rowsLocalLength,
    });

    const {
      changeModelColumnsVisible,
      initModelColumnsVisibleLocal,
    } = TableColumnsVisibleFunctionAPI(props, context, {
      modelColumnsVisibleLocal,
      checkVisibleColumns,
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
      tableGrandparentRef,
      rowsLocal,
    });

    const {
      changeOffset,
      changeLimit,
    } = LimitOffsetAPI(props, context, {
      offset,
      limit,
      closePreviewAll,
      setEmptySelectedRowsIndexes,
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
    } = TableFiltersAPI(props, context, {
      closePreviewAll,
      offset,
    });

    const {
      hasViews,
      initViewCurrent,
      isViewTableVisible,
      updateViewCurrent,
      viewCurrent,
    } = ViewsAPI(props, context, {
      closePreviewAll,
      startSearch,
    });

    const {
      tableChildRole,
      tableRoleAttributes,
    } = TableAttributesAPI({
      isMobile,
    });

    const {
      allVisibleMobileColumns,
    } = MobileColumnsAPI({
      columnsOrdered,
      isMobile,
      modelColumnsVisibleLocal,
    });

    provide("changeModelIsTableWithoutScroll", changeModelIsTableWithoutScroll);
    provide("columnsOrdered", columnsOrdered);
    provide("columnsScrollInvisible", columnsScrollInvisible);
    provide("columnsVisibleAdditionalSpaceForOneGrow", columnsVisibleAdditionalSpaceForOneGrow);
    provide("currentMultipleActions", currentMultipleActions);
    provide("hasPreview", hasPreview);
    provide("indexFirstScrollInvisibleColumn", indexFirstScrollInvisibleColumn);
    provide("isMobile", isMobile);
    provide("isMultipleActionsActive", isMultipleActionsActive);
    provide("modelIsTableWithoutScroll", modelIsTableWithoutScroll);
    provide("onTogglePreview", onTogglePreview);
    provide("previewRightRowIndex", previewRightRowIndex);
    provide("previewRightRowIndexLast", previewRightRowIndexLast);

    provide("rowsLocal", rowsLocal);
    provide("modelColumnsVisibleLocal", modelColumnsVisibleLocal);
    provide("onUpdateModelFilters", onUpdateModelFilters);
    provide("updateDataKeyByIdFromFilter", updateDataKeyByIdFromFilter);

    initViewCurrent();

    return {
      allVisibleMobileColumns,
      aTableRef,
      changeModelColumnsVisible,
      checkVisibleColumns,
      columnsOrdered,
      hasViews,
      initModelColumnsVisibleLocal,
      isMobile,
      isViewTableVisible,
      modelColumnsOrderingLocal,
      modelColumnsVisibleLocal,
      modelIsTableWithoutScroll,
      onUpdateModelFilters,
      tableChildRole,
      tableGrandparentRef,
      tableRoleAttributes,
      updateViewCurrent,
      viewCurrent,

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
      areAllVisibleRowsSelected,
      areSomeRowsSelected,
      closeMultipleActionsActive,
      isMultipleActionsActive,
      selectedRows,
      selectedRowsIndexes,
      setEmptySelectedRowsIndexes,
      setSelectedRowsIndexes,
      toggleBtnAllRows,
      toggleMultipleActionsActive,

      changeOffset,
      changeLimit,

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

    hasRowsFooter() {
      return this.rowsFooter.length > 0;
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
        this.changeColumnsOrdering({
          modelColumnsOrderingLocal: getModelColumnsOrderingDefault(this.columns),
          isFirst: true,
        });
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

    changeColumnsOrdering({ modelColumnsOrderingLocal, columnIndexDraggable, columnIndexOver, isFirst }) {
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
        isFirst,
      });
      this.checkVisibleColumns();
    },

    updateModelQuickSearch(model) {
      this.$emit("update:modelQuickSearch", model);
    },
  },
  render() {
    return h("div", {
      ref: "tableGrandparentRef",
      class: ["a_table__grandparent", {
        a_table_mobile: this.isMobile,
      }],
    }, [
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
      }, this.$slots),
      h("div", {
        ref: "aTableRef",
        class: ["a_table__parent", {
          a_table__parent_scrollable: !this.modelIsTableWithoutScroll,
        }],
      }, [
        h(ALoading, {
          isLoading: this.isLoadingTable,
        }, () => [
          h(ATableTopPanel, {
            areAllRowsSelected: this.areAllRowsSelected,
            areSomeRowsSelected: this.areSomeRowsSelected,
            closeMultipleActionsActive: this.closeMultipleActionsActive,
            countAllRows: this.countAllRowsLocal,
            isLabelVisible: this.isLabelVisible,
            label: this.label,
            labelTag: this.labelTag,
            labelClass: this.labelClass,
            tableActions: this.tableActions,
            multipleActions: this.multipleActions,
            modelFilters: this.modelFilters,
            isQuickSearch: this.isQuickSearch,
            isLoadingMultipleActions: this.isLoadingMultipleActions,
            modelQuickSearch: this.modelQuickSearch,
            selectedRows: this.selectedRows,
            views: this.views,
            hasViews: this.hasViews,
            viewCurrent: this.viewCurrent,
            modelView: this.modelView,
            tableActionsIndexFirstDropdownAction: this.tableActionsIndexFirstDropdownAction,
            tableActionsIndexFirstDropdownActionMobile: this.tableActionsIndexFirstDropdownActionMobile,
            onUpdateViewCurrent: this.updateViewCurrent,
            onUpdateModelQuickSearch: this.updateModelQuickSearch,
            onToggleMultipleActionsActive: this.toggleMultipleActionsActive,
            onToggleBtnAllRows: this.toggleBtnAllRows,
          }, this.$slots),
          this.isViewTableVisible && h("div", {
            class: "a_table",
            ...this.tableRoleAttributes,
          }, [
            h(ATableHeader, {
              areAllRowsSelected: this.areAllRowsSelected,
              areAllVisibleRowsSelected: this.areAllVisibleRowsSelected,
              areSomeRowsSelected: this.areSomeRowsSelected,
              modelSort: this.modelSort,
              onSetSelectedRowsIndexes: this.setSelectedRowsIndexes,
            }),
            h("div", {
              class: "a_table__body",
              role: this.tableChildRole,
            }, this.rowsLocal.map((row, rowIndex) => {
              return h(ATableTr, {
                allVisibleMobileColumns: this.allVisibleMobileColumns,
                areAllRowsSelected: this.areAllRowsSelected,
                countVisibleMobileColumns: this.countVisibleMobileColumns,
                row,
                rowIndex,
                selectedRowsIndexes: this.selectedRowsIndexes,
                onSetSelectedRowsIndexes: this.setSelectedRowsIndexes,
              }, {
                get: vm => [
                  h(AGet, {
                    data: vm.row,
                    keyLabel: vm.column.keyLabel,
                    filter: vm.column.filter,
                    filterParameters: vm.column.filterParameters,
                    defaultValue: vm.column.defaultValue,
                    tag: vm.column.filterTag || "div",
                  }),
                ],
                ...this.$slots,
              });
            })),
            (this.hasRows && this.hasRowsFooter) && h("div", {
              class: "a_table__footer",
              role: this.tableChildRole,
            }, this.rowsFooter.map((row, rowIndex) => {
              return h(ATableTr, {
                allVisibleMobileColumns: this.allVisibleMobileColumns,
                areAllRowsSelected: this.areAllRowsSelected,
                countVisibleMobileColumns: this.countVisibleMobileColumns,
                row,
                rowIndex,
                selectedRowsIndexes: this.selectedRowsIndexes,
                onSetSelectedRowsIndexes: this.setSelectedRowsIndexes,
                isFooter: true,
              }, {
                get: vm => [
                  h(AGet, {
                    data: vm.row,
                    keyLabel: vm.column.footerPath,
                    filter: vm.column.footerFilter,
                    filterParameters: vm.column.footerFilterParameters,
                    defaultValue: vm.column.footerDefaultValue,
                  }),
                ],
                ...this.$slots,
              });
            })),
          ]),
          (!this.isViewTableVisible && this.viewCurrent && this.$slots[this.viewCurrent.type]) &&
          this.$slots[this.viewCurrent.type]({
            rows: this.rowsLocal,
          }),
          (this.isViewTableVisible && !this.hasRows) && h("div", {
            class: "a_table__empty_text",
          }, "Keine Einträge vorhanden."),
          (this.isViewTableVisible && this.isPagination) && h("div", {
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
              isMobile: this.isMobile,
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
      ]),
    ]);
  },
};
