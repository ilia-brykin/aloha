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

import AMobileAPI from "../compositionAPI/AMobileAPI";
import ColumnsIdsAPI from "./compositionAPI/ColumnsIdsAPI";
import ColumnsOrderingAPI from "./compositionAPI/ColumnsOrderingAPI";
import InitAPI from "./compositionAPI/InitAPI";
import LimitOffsetAPI from "./compositionAPI/LimitOffsetAPI";
import MobileColumnsAPI from "./compositionAPI/MobileColumnsAPI";
import MultipleActionAPI from "./compositionAPI/MultipleActionAPI";
import PreviewAPI from "./compositionAPI/PreviewAPI";
import RowsAPI from "./compositionAPI/RowsAPI";
import ScrollControlAPI from "./compositionAPI/ScrollControlAPI";
import SortAPI from "./compositionAPI/SortAPI";
import SortChangeAPI from "./compositionAPI/SortChangeAPI";
import StickyAPI from "./compositionAPI/StickyAPI";
import TableAttributesAPI from "./compositionAPI/TableAttributesAPI";
import TableColumnsAPI from "./compositionAPI/TableColumnsAPI";
import TableColumnsVisibleAPI from "./compositionAPI/TableColumnsVisibleAPI";
import TableColumnsVisibleFunctionAPI from "./compositionAPI/TableColumnsVisibleFunctionAPI";
import TableFiltersAPI from "./compositionAPI/TableFiltersAPI";
import ViewsAPI from "./compositionAPI/ViewsAPI";

import {
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
    isSortingMultiColumn: {
      type: Boolean,
      required: false,
      default: true,
    },
    sortingSequenceNumberClass: {
      type: [String, Object],
      required: false,
      default: "a_badge",
    },
    showFirstSortingSequenceNumber: {
      type: Boolean,
      required: false,
      default: true,
    },
    sortingMultiColumnKey: {
      type: String,
      required: false,
      default: "shift",
      validator: value => ["shift", "ctrl", "alt"].indexOf(value) !== -1,
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
    rowActionsSticky: {
      type: Boolean,
      required: false,
      default: true,
    },
    rowActionsClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    rowsFooter: {
      type: Array,
      required: false,
      default: () => [],
    },
    modelSort: {
      type: [String, Array],
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
    perPageView: {
      type: Object,
      required: false,
      default: () => ({
        desktop: "inline",
        mobile: "select",
      }),
    },
  },
  emits: [
    "changeColumnsOrdering",
    "changeColumnsVisible",
    "changeLimit",
    "changeOffset",
    "changeSorting",
    "mouseupResizePreviewRight",
    "initTable",
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
      changeModelColumnsVisible: this.changeModelColumnsVisible,
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
      columnsKeyById,
      columnIdsGroupByLocked,
    } = ColumnsIdsAPI(props);

    const {
      columnsOrdered,
    } = TableColumnsAPI(props, {
      columnsKeyById,
      columnIdsGroupByLocked,
    });

    const {
      modelColumnsVisibleLocal,
    } = TableColumnsVisibleAPI();

    const {
      isMobile,
    } = AMobileAPI();

    const {
      dataSorted,
      initModelSort,
      modelSortLocal,
    } = SortAPI(props);

    const {
      hasRows,
      limit,
      offset,
      rowsLocal,
      rowsLocalLength,
    } = RowsAPI(props, {
      dataSorted,
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
      isMobile,
      isMultipleActionsActive,
      modelColumnsVisibleLocal,
    });

    const {
      changeColumnsOrdering,
      checkColumnsOrdering,
    } = ColumnsOrderingAPI(props, context, {
      checkVisibleColumns,
      columnIdsGroupByLocked,
    });

    const {
      isRowActionsStickyLocal,
    } = StickyAPI(props, {
      isMobile,
      modelIsTableWithoutScroll,
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

    const {
      changeModelSort,
    } = SortChangeAPI(props, context, {
      modelSortLocal,
      setEmptySelectedRowsIndexes,
      closePreviewAll,
    });

    const {
      initTable,
    } = InitAPI(props, context, {
      checkColumnsOrdering,
      checkVisibleColumns,
      modelColumnsVisibleLocal,
    });

    provide("changeModelIsTableWithoutScroll", changeModelIsTableWithoutScroll);
    provide("changeModelSort", changeModelSort);
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
    provide("changeColumnsOrdering", changeColumnsOrdering);

    initTable();

    initViewCurrent();
    initModelSort();

    return {
      allVisibleMobileColumns,
      areAllRowsSelected,
      areAllVisibleRowsSelected,
      areSomeRowsSelected,
      aTableRef,
      changeLimit,
      changeModelColumnsVisible,
      changeOffset,
      checkVisibleColumns,
      closeFilterValue,
      closeMultipleActionsActive,
      closePreview,
      closePreviewAll,
      columnsOrdered,
      dataKeyByKeyIdPerFilter,
      filtersGroup,
      filtersKeyById,
      filtersVisible,
      filtersVisibleAll,
      hasFilters,
      hasRows,
      hasViews,
      isMobile,
      isMultipleActionsActive,
      isPreviewRightOpen,
      isRowActionsStickyLocal,
      isViewTableVisible,
      limit,
      modelColumnsVisibleLocal,
      modelFiltersLocal,
      modelIsTableWithoutScroll,
      modelSortLocal,
      mousedownResizePreviewRight,
      mousemoveResizePreviewRight,
      mouseupResizePreviewRight,
      offset,
      onUpdateModelFilters,
      previewDownRowIndexes,
      previewRightRowIndex,
      rowsLocal,
      rowsLocalLength,
      selectedRows,
      selectedRowsIndexes,
      setEmptySelectedRowsIndexes,
      setSelectedRowsIndexes,
      startSearch,
      tableChildRole,
      tableGrandparentRef,
      tableRoleAttributes,
      toggleBtnAllRows,
      toggleMultipleActionsActive,
      togglePreviewResize,
      updateViewCurrent,
      viewCurrent,
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
  methods: {
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
              isRowActionsStickyLocal: this.isRowActionsStickyLocal,
              rowsLocalLength: this.rowsLocalLength,
              modelSort: this.modelSortLocal,
              isSortingMultiColumn: this.isSortingMultiColumn,
              sortingSequenceNumberClass: this.sortingSequenceNumberClass,
              showFirstSortingSequenceNumber: this.showFirstSortingSequenceNumber,
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
                isRowActionsStickyLocal: this.isRowActionsStickyLocal,
                selectedRowsIndexes: this.selectedRowsIndexes,
                rowActionsClass: this.rowActionsClass,
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
                isRowActionsStickyLocal: this.isRowActionsStickyLocal,
                rowActionsClass: this.rowActionsClass,
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
              perPageView: this.perPageView,
              isMobile: this.isMobile,
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
