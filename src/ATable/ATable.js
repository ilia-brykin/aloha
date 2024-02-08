import {
  computed,
  h,
  provide,
} from "vue";

import AGet from "../AGet/AGet";
import ALoading from "../ALoading/ALoading";
import APagination from "../APagination/APagination";
import ATableHeader from "./ATableHeader/ATableHeader";
import ATablePreviewRight from "./ATablePreviewRight/ATablePreviewRight";
import ATableTopPanel from "./ATableTopPanel/ATableTopPanel";
import ATableTr from "./ATableTr/ATableTr";

import AMobileAPI from "../compositionAPI/AMobileAPI";
import ColumnsAPI from "./compositionAPI/ColumnsAPI";
import ColumnsOrderingAPI from "./compositionAPI/ColumnsOrderingAPI";
import FocusTableAPI from "./compositionAPI/FocusTableAPI";
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
import TableColumnsVisibleFunctionAPI from "./compositionAPI/TableColumnsVisibleFunctionAPI";
import TextsAPI from "./compositionAPI/TextsAPI";
import VariablesAPI from "./compositionAPI/VariablesAPI";
import ViewsAPI from "./compositionAPI/ViewsAPI";

import {
  get,
  isArray,
  isInteger,
  isNil,
  isPlainObject,
  uniqueId,
} from "lodash-es";
import ATranslation from "../ATranslation/ATranslation";

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
    disabledActions: {
      type: Boolean,
      required: false,
    },
    disabledMultipleActions: {
      type: Boolean,
      required: false,
    },
    disabledOptions: {
      type: Boolean,
      required: false,
    },
    disabledPreview: {
      type: Boolean,
      required: false,
    },
    disabledRowActions: {
      type: Boolean,
      required: false,
    },
    disabledSort: {
      type: Boolean,
      required: false,
    },
    disabledViews: {
      type: Boolean,
      required: false,
    },
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_table"),
    },
    isActionColumnVisible: {
      type: Boolean,
      required: false,
      default: false,
    },
    isColumnsDnd: {
      type: Boolean,
      required: false,
      default: false,
    },
    isLabelVisible: {
      type: Boolean,
      required: false,
      default: true,
    },
    isLoadingMultipleActions: {
      type: Boolean,
      required: false,
    },
    isLoadingOptions: {
      type: Boolean,
      required: false,
    },
    isLoadingTable: {
      type: Boolean,
      required: false,
    },
    isQuickSearch: {
      type: Boolean,
      required: false,
    },
    isSortingMultiColumn: {
      type: Boolean,
      required: false,
      default: false,
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
    keyId: {
      type: String,
      required: false,
      default: "id",
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
    modelIsTableWithoutScrollStart: {
      type: Boolean,
      required: false,
      default: false,
    },
    modelQuickSearch: {
      type: String,
      required: false,
      default: "",
    },
    modelSort: {
      type: [String, Array],
      required: false,
      default: undefined,
    },
    modelView: {
      type: [String, Number],
      required: false,
      default: undefined,
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
    pagination: {
      type: Object,
      required: false,
      default: () => ({
        use: false,
        maxPages: 5,
        limitsPerPage: [],
        limitStart: 10,
        disabled: false,
        isOutside: false,
        outside: false,
        modes: {
          // perPage: inline / select
          // pagination: normal / short / loadMore
          desktop: {
            pagination: {
              mode: "normal",
              position: 0,
            },
            perPage: {
              mode: "inline",
              position: 1,
            },
          },
          mobile: {
            pagination: {
              mode: "loadMore",
            },
          },
        },
      }),
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
    previewStyles: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    rowActions: {
      type: Array,
      required: false,
      default: () => [],
    },
    rowActionsClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    rowActionsSticky: {
      type: Boolean,
      required: false,
      default: true,
    },
    rowClass: {
      type: [String, Object, Function],
      required: false,
      default: undefined,
    },
    rowsCountRenderPerTick: {
      type: Number,
      required: false,
      default: 25,
      validator: value => isInteger(value) && value >= 0,
    },
    rowsFooter: {
      type: Array,
      required: false,
      default: () => [],
    },
    showFirstSortingSequenceNumber: {
      type: Boolean,
      required: false,
      default: false,
    },
    sortingMultiColumnKey: {
      type: String,
      required: false,
      default: "shift",
      validator: value => ["shift", "ctrl", "alt"].indexOf(value) !== -1,
    },
    sortingSequenceNumberClass: {
      type: [String, Object],
      required: false,
      default: "a_badge",
    },
    tableActions: {
      type: Array,
      required: false,
      default: () => [],
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
    texts: {
      type: Object,
      required: false,
      default: () => ({
        empty: "_A_TABLE_EMPTY_TEXT_",
      }),
    },
    useViewSlot: {
      type: Boolean,
      required: false,
    },
    valuesForColumnDefault: {
      type: Array,
      required: false,
      default: () => [null, undefined, ""],
    },
    views: {
      type: Array,
      required: false,
      default: () => [],
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
    "toggleMultipleActions",
    "update:modelColumnsOrder",
    "update:modelColumnsVisible",
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
    const {
      columnsScrollInvisible,
      indexFirstScrollInvisibleColumn,
      isMultipleActionsActive,
      modelColumnsVisibleLocal,
      modelIsTableWithoutScroll,
      tableGrandparentRef,
      tableRef,
    } = VariablesAPI(props);

    const {
      scrollToTable,
      setFocusToTable,
    } = FocusTableAPI({
      tableRef,
    });

    const {
      columnIdsGroupByLocked,
      columnsFilteredForRender,
      columnsOrdered,
      countNotHiddenColumns,
    } = ColumnsAPI(props, {
      columnsScrollInvisible,
      indexFirstScrollInvisibleColumn,
      modelColumnsVisibleLocal,
      modelIsTableWithoutScroll,
    });

    const {
      isMobileWidth: isMobile,
    } = AMobileAPI();

    const {
      dataSorted,
      initModelSort,
      modelSortLocal,
    } = SortAPI(props);

    const {
      addRow,
      deleteRow,
      hasRows,
      limit,
      offset,
      rowsLocal,
      rowsLocalAll,
      rowsLocalLength,
      stopRenderRows,
      updateRow,
    } = RowsAPI(props, {
      dataSorted,
    });

    const {
      aTableRef,
      changeModelIsTableWithoutScroll,
      checkVisibleColumns,
      columnsVisibleAdditionalSpaceForOneGrow,
    } = ScrollControlAPI(props, context, {
      columnsOrdered,
      columnsScrollInvisible,
      indexFirstScrollInvisibleColumn,
      isMobile,
      isMultipleActionsActive,
      modelColumnsVisibleLocal,
      modelIsTableWithoutScroll,
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
      hasMultipleActions,
      selectedRows,
      selectedRowsIndexes,
      setEmptySelectedRowsIndexes,
      setSelectedRowsIndexes,
      toggleBtnAllRows,
      toggleMultipleActionsActive,
    } = MultipleActionAPI(props, context, {
      checkVisibleColumns,
      isMultipleActionsActive,
      rowsLocalAll,
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
      rowsLocalAll,
      tableGrandparentRef,
    });

    const {
      hasViews,
      initViewCurrent,
      isViewTableVisible,
      updateViewCurrent,
      viewCurrent,
    } = ViewsAPI(props, context, {
      closePreviewAll,
      startSearch: () => ({}), // TODO: in AFilters
    });

    const {
      changeOffset,
      changeLimit,
      usePaginationLocal,
    } = LimitOffsetAPI(props, context, {
      closePreviewAll,
      isViewTableVisible,
      limit,
      offset,
      scrollToTable,
      setEmptySelectedRowsIndexes,
      setFocusToTable,
      viewCurrent,
    });

    const {
      tableChildRole,
      tableRoleAttributes,
    } = TableAttributesAPI({
      countNotHiddenColumns,
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

    const {
      emptyText,
    } = TextsAPI(props);

    provide("changeModelIsTableWithoutScroll", changeModelIsTableWithoutScroll);
    provide("changeModelSort", changeModelSort);
    provide("columnsOrdered", columnsOrdered);
    provide("columnsFilteredForRender", columnsFilteredForRender);
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

    provide("rowsLocalAll", rowsLocalAll);
    provide("modelColumnsVisibleLocal", modelColumnsVisibleLocal);
    provide("changeColumnsOrdering", changeColumnsOrdering);

    initTable();

    initViewCurrent();
    initModelSort();

    return {
      addRow,
      allVisibleMobileColumns,
      areAllRowsSelected,
      areAllVisibleRowsSelected,
      areSomeRowsSelected,
      aTableRef,
      changeLimit,
      changeModelColumnsVisible,
      changeOffset,
      checkVisibleColumns,
      closeMultipleActionsActive,
      closePreview,
      closePreviewAll,
      columnsFilteredForRender,
      columnsOrdered,
      deleteRow,
      emptyText,
      hasMultipleActions,
      hasRows,
      hasViews,
      isMobile,
      isMultipleActionsActive,
      isPreviewRightOpen,
      isRowActionsStickyLocal,
      isViewTableVisible,
      limit,
      modelColumnsVisibleLocal,
      modelIsTableWithoutScroll,
      modelSortLocal,
      mousedownResizePreviewRight,
      mousemoveResizePreviewRight,
      mouseupResizePreviewRight,
      offset,
      onTogglePreview,
      previewDownRowIndexes,
      previewRightRowIndex,
      rowsLocal,
      rowsLocalAll,
      rowsLocalLength,
      selectedRows,
      selectedRowsIndexes,
      setEmptySelectedRowsIndexes,
      setSelectedRowsIndexes,
      stopRenderRows,
      tableChildRole,
      tableGrandparentRef,
      tableRef,
      tableRoleAttributes,
      toggleBtnAllRows,
      toggleMultipleActionsActive,
      togglePreviewResize,
      updateRow,
      updateViewCurrent,
      usePaginationLocal,
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
      return 0;
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
      this.$slots.tablePrepend &&
        this.$slots.tablePrepend({
          id: this.id,
        }),
      h("div", {
        ref: "aTableRef",
        class: ["a_table__parent", {
          a_table__parent_scrollable: !this.modelIsTableWithoutScroll,
        }],
      }, [
        h(ATableTopPanel, {
          areAllRowsSelected: this.areAllRowsSelected,
          areSomeRowsSelected: this.areSomeRowsSelected,
          closeMultipleActionsActive: this.closeMultipleActionsActive,
          countAllRows: this.countAllRowsLocal,
          disabledActions: this.disabledActions,
          disabledMultipleActions: this.disabledMultipleActions,
          disabledViews: this.disabledViews,
          isLabelVisible: this.isLabelVisible,
          label: this.label,
          labelTag: this.labelTag,
          labelClass: this.labelClass,
          tableActions: this.tableActions,
          multipleActions: this.multipleActions,
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
          useViewSlot: this.useViewSlot,
          onUpdateViewCurrent: this.updateViewCurrent,
          onUpdateModelQuickSearch: this.updateModelQuickSearch,
          onToggleMultipleActionsActive: this.toggleMultipleActionsActive,
          onToggleBtnAllRows: this.toggleBtnAllRows,
        }, this.$slots),
        this.isViewTableVisible && h("div", {
          ref: "tableRef",
          class: "a_table",
          ...this.tableRoleAttributes,
        }, [
          h(ATableHeader, {
            areAllRowsSelected: this.areAllRowsSelected,
            areAllVisibleRowsSelected: this.areAllVisibleRowsSelected,
            areSomeRowsSelected: this.areSomeRowsSelected,
            disabledOptions: this.disabledOptions,
            disabledSort: this.disabledSort,
            hasMultipleActions: this.hasMultipleActions,
            isRowActionsStickyLocal: this.isRowActionsStickyLocal,
            isSortingMultiColumn: this.isSortingMultiColumn,
            modelSort: this.modelSortLocal,
            rowsLocalLength: this.rowsLocalLength,
            showFirstSortingSequenceNumber: this.showFirstSortingSequenceNumber,
            sortingSequenceNumberClass: this.sortingSequenceNumberClass,
            onSetSelectedRowsIndexes: this.setSelectedRowsIndexes,
          }),
          h("div", {
            class: "a_table__loading",
          }, [
            h(ALoading, {
              isLoading: this.isLoadingTable,
            }, () => [
              h("div", {
                class: "a_table__body",
                role: this.tableChildRole,
              }, {
                default: () => this.rowsLocal.map((row, rowIndex) => {
                  return h(ATableTr, {
                    key: row[this.keyId] || rowIndex,
                    allVisibleMobileColumns: this.allVisibleMobileColumns,
                    areAllRowsSelected: this.areAllRowsSelected,
                    countVisibleMobileColumns: this.countVisibleMobileColumns,
                    disabledPreview: this.disabledPreview,
                    disabledRowActions: this.disabledRowActions,
                    row,
                    rowClass: this.rowClass,
                    rowIndex,
                    isPreviewDownOpen: this.previewDownRowIndexes[rowIndex],
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
                })
              }),
              (this.hasRows && this.hasRowsFooter) && h("div", {
                class: "a_table__footer",
                role: this.tableChildRole,
              }, this.rowsFooter.map((row, rowIndex) => {
                return h(ATableTr, {
                  allVisibleMobileColumns: this.allVisibleMobileColumns,
                  areAllRowsSelected: this.areAllRowsSelected,
                  countVisibleMobileColumns: this.countVisibleMobileColumns,
                  disabledPreview: this.disabledPreview,
                  disabledRowActions: this.disabledRowActions,
                  row,
                  rowClass: this.rowClass,
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
              (this.isViewTableVisible && !this.hasRows) && h(ATranslation, {
                class: "a_table__empty_text",
                text: this.emptyText,
              }),
            ]),
          ]),

        ]),
        (!this.isViewTableVisible && this.viewCurrent && this.$slots[this.viewCurrent.type]) &&
        this.$slots[this.viewCurrent.type]({
          isLoading: this.isLoadingTable,
          rows: this.rowsLocalAll,
        }),
        (this.usePaginationLocal) &&
        h(APagination, {
          countAllRows: this.countAllRowsLocal,
          disabled: this.pagination.disabled,
          hasRows: this.hasRows,
          limit: this.limit,
          limitsPerPage: this.pagination.limitsPerPage,
          maxPages: this.pagination.maxPages,
          offset: this.offset,
          rowsLength: this.rowsLocalLength,
          totalRowsCount: this.totalRowsCountLocal,
          "onUpdate:limit": this.changeLimit,
          "onUpdate:offset": this.changeOffset,
        }),
        this.isPreviewRightOpen && h(ATablePreviewRight, {
          countAllRows: this.countAllRowsLocal,
          isLoadingTable: this.isLoadingTable,
          limitPagination: this.limit,
          offsetPagination: this.offset,
          previewHeaderTag: this.previewHeaderTag,
          previewStyles: this.previewStyles,
          rowIndex: this.previewRightRowIndex,
          rows: this.rowsLocalAll,
          usePagination: !!this.pagination.use,
          onClosePreview: this.closePreview,
          onMousedownResizePreviewRight: this.mousedownResizePreviewRight,
          onMousemoveResizePreviewRight: this.mousemoveResizePreviewRight,
          onMouseupResizePreviewRight: this.mouseupResizePreviewRight,
          onTogglePreview: this.onTogglePreview,
          onTogglePreviewResize: this.togglePreviewResize,
          "onUpdate:offset": this.changeOffset,
        }, this.$slots),
      ]),
    ]);
  },
};
