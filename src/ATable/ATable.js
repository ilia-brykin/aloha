import {
  computed,
  h,
  provide,
  watch,
} from "vue";

import AGet from "../AGet/AGet";
import ALoading from "../ALoading/ALoading";
import APagination from "../APagination/APagination";
import ATableGroupedHeader from "./ATableGroupedHeader/ATableGroupedHeader";
import ATableHeader from "./ATableHeader/ATableHeader";
import ATablePreviewRight from "./ATablePreviewRight/ATablePreviewRight";
import ATableTopPanel from "./ATableTopPanel/ATableTopPanel";
import ATableTr from "./ATableTr/ATableTr";
import ATranslation from "../ATranslation/ATranslation";
import {
  getRowIdOrIndex,
} from "./utils/utils";

import ColumnActionAPI from "./compositionAPI/ColumnActionAPI";
import ColumnsAPI from "./compositionAPI/ColumnsAPI";
import ColumnsGroupedAPI from "./compositionAPI/ColumnsGroupedAPI";
import ColumnsOrderingAPI from "./compositionAPI/ColumnsOrderingAPI";
import CountAPI from "./compositionAPI/CountAPI";
import FocusTableAPI from "./compositionAPI/FocusTableAPI";
import InitAPI from "./compositionAPI/InitAPI";
import LimitOffsetAPI from "./compositionAPI/LimitOffsetAPI";
import MobileColumnsAPI from "./compositionAPI/MobileColumnsAPI";
import MultipleActionAPI from "./compositionAPI/MultipleActionAPI";
import PreviewAPI from "./compositionAPI/PreviewAPI";
import RowsAPI from "./compositionAPI/RowsAPI";
import ScrollControlAPI from "./compositionAPI/ScrollControlAPI";
import SimpleTableAPI from "./compositionAPI/SimpleTableAPI";
import SortAPI from "./compositionAPI/SortAPI";
import SortChangeAPI from "./compositionAPI/SortChangeAPI";
import StickyAPI from "./compositionAPI/StickyAPI";
import TableAttributesAPI from "./compositionAPI/TableAttributesAPI";
import TableColumnsVisibleFunctionAPI from "./compositionAPI/TableColumnsVisibleFunctionAPI";
import TextsAPI from "./compositionAPI/TextsAPI";
import VariablesAPI from "./compositionAPI/VariablesAPI";
import ViewsAPI from "./compositionAPI/ViewsAPI";
import WidthAPI from "./compositionAPI/WidthAPI";

import {
  tablePluginOptions,
} from "../plugins/ATablePlugin";
import {
  isInteger,
  uniqueId,
} from "lodash-es";

export default {
  name: "ATable",
  props: {
    additionalSortingColumns: {
      type: Array,
      required: false,
      default: () => [],
    },
    clearSelectedRowsOnDataChange: {
      type: Boolean,
      required: false,
      default: true,
    },
    columnActionsOnePlusDropdownOptions: {
      type: Object,
      required: false,
      default: () => ({
        actionsClasses: ["a_btn a_btn_primary a_text_truncate"],
        btnGroupClass: "a_btn_group a_btn_group_table",
        hasDividerBeforeDropdown: false,
        indexFirstDropdownAction: 1,
        indexFirstDropdownActionMobile: 1,
        minDropdownActions: 1,
      }),
    },
    columnActionsView: {
      type: String,
      required: false,
      default: "dropdown",
      validator: value => ["onePlusDropdown", "onePlusDropdownEmptyPlace", "dropdown"].indexOf(value) !== -1,
    },
    columnActionsWidth: {
      type: Number,
      required: false,
      default: undefined,
    },
    columnActionsWidthDefaults: {
      type: Object,
      required: false,
      default: () => ({
        default: 170,
        min: 50,
        onePlusDropdown: 320,
        onePlusDropdownMin: 200,
        btnGroupMaxWidth: 180,
      }),
    },
    columnActionsWidthMin: {
      type: Number,
      required: false,
      default: undefined,
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
    borderType: {
      type: String,
      required: false,
      default: () => tablePluginOptions.value.propsDefault.borderType,
      validator: value => ["bordered", "innerBordered"].indexOf(value) !== -1,
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
    disabledPreviewRowCallback: {
      type: Function,
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
    extra: {
      type: Object,
      required: false,
      default: undefined,
    },
    hasMobile: {
      type: Boolean,
      required: false,
      default: true,
    },
    hasScrollClass: {
      type: Boolean,
      required: false,
      default: true,
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
    isActionIconVisible: {
      type: Boolean,
      required: false,
      default: true,
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
    isSimpleTable: {
      type: Boolean,
      required: false,
      default: false,
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
    isTree: {
      type: Boolean,
      required: false,
    },
    isTreeCollapsible: {
      type: Boolean,
      required: false,
      default: true,
    },
    isTreeOpened: {
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
      default: undefined,
    },
    keyChildren: {
      type: String,
      required: false,
      default: "children",
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
      default: () => [],
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
        position: "bottom",
        modes: {
          /*
           * perPage: inline / select
           * pagination: normal / short / loadMore
           */
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
    showCount: {
      type: Boolean,
      required: false,
      default: true,
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
    useAdditionalSorting: {
      type: Boolean,
      required: false,
      default: true,
    },
    useViewSlot: {
      type: Boolean,
      required: false,
    },
    useRem: {
      type: Boolean,
      required: false,
      default: true,
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
      columnActionsOnePlusDropdownOptions: computed(() => this.columnActionsOnePlusDropdownOptions),
      columns: computed(() => this.columns),
      columnsDefaultValue: computed(() => this.columnsDefaultValue),
      isLoadingOptions: computed(() => this.isLoadingOptions),
      isLoadingTable: computed(() => this.isLoadingTable),
      keyId: computed(() => this.keyId),
      rowActions: computed(() => this.rowActions),
      tableId: computed(() => this.id),
      valuesForColumnDefault: computed(() => this.valuesForColumnDefault),
      useRem: computed(() => this.useRem),
    };
  },
  setup(props, context) {
    const {
      columnActionsWidthDefaultsRemLocal,
      columnActionsWidthMinRemLocal,
      columnActionsWidthRemLocal,
      columnWidthDefaultRemLocal,
      previewBoxWidthRemLocal,
    } = WidthAPI(props);

    const {
      initModelIsTableWithoutScroll,
      isActionColumnVisibleLocal,
      isActionIconVisibleLocal,
      isColumnsDndLocal,
      isMobile,
      modelIsTableWithoutScroll,
      modelIsTableWithoutScrollComputed,
    } = SimpleTableAPI(props);

    const {
      countAllRowsLocal,
      totalRowsCount,
    } = CountAPI(props);

    const {
      columnsScrollInvisible,
      indexFirstScrollInvisibleColumn,
      isMultipleActionsActive,
      modelColumnsVisibleLocal,
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
      hasViews,
      initViewCurrent,
      isViewTableVisible,
      updateViewCurrent,
      viewCurrent,
    } = ViewsAPI(props, context, {
      closePreviewAll,
    });

    const {
      dataSorted,
      initModelSort,
      modelSortLocal,
      useAdditionalSortingLocal,
    } = SortAPI(props, {
      viewCurrent,
    });

    const {
      columnsOrderedFromSimpleTable,
      renderedGroupedColumns,
    } = ColumnsGroupedAPI(props, {
      modelSort: modelSortLocal,
    });

    const {
      columnIdsGroupByLocked,
      columnsFilteredForRender,
      columnsFilteredForRenderIndexesMapping,
      columnsOrdered,
      countNotHiddenColumns,
    } = ColumnsAPI(props, {
      columnsScrollInvisible,
      indexFirstScrollInvisibleColumn,
      modelColumnsVisibleLocal,
      modelIsTableWithoutScrollComputed,
      columnsOrderedFromSimpleTable,
    });

    const {
      changeLimit,
      changeOffset,
      initLocalVars,
      limit,
      offset,
      usePaginationBottom,
      usePaginationLocal,
      usePaginationTop,
    } = LimitOffsetAPI(props, context, {
      closePreviewAll,
      scrollToTable,
      setFocusToTable,
      viewCurrent,
    });

    const {
      addRow,
      deleteRow,
      hasRows,
      rowsLocal,
      rowsLocalAll,
      rowsLocalLength,
      stopRenderRows,
      updateRow,
    } = RowsAPI(props, {
      dataSorted,
      limit,
      offset,
      setEmptySelectedRowsIndexes,
      usePaginationLocal,
    });

    const {
      columnActionsBtnGroupMaxWidthStyle,
      columnActionsWidthLocal,
      columnActionsWidthMinLocal,
      isColumnActionWide,
    } = ColumnActionAPI(props, {
      columnActionsWidthDefaultsRemLocal,
      columnActionsWidthMinRemLocal,
      columnActionsWidthRemLocal,
      isMobile,
      rowsLocal,
    });

    const {
      aTableRef,
      changeModelIsTableWithoutScroll,
      checkVisibleColumns,
      columnsVisibleAdditionalSpaceForOneGrow,
      onWatchMobileScrollControl,
    } = ScrollControlAPI(props, context, {
      columnActionsWidthLocal,
      columnActionsWidthMinLocal,
      columnsOrdered,
      columnsScrollInvisible,
      columnWidthDefaultRemLocal,
      indexFirstScrollInvisibleColumn,
      isMobile,
      isMultipleActionsActive,
      modelColumnsVisibleLocal,
      modelIsTableWithoutScroll,
      modelIsTableWithoutScrollComputed,
    });

    const {
      changeColumnsOrdering,
      checkColumnsOrdering,
    } = ColumnsOrderingAPI(props, context, {
      checkVisibleColumns,
      columnIdsGroupByLocked,
      columnsFilteredForRenderIndexesMapping,
    });

    const {
      isRowActionsStickyLocal,
    } = StickyAPI(props, {
      isMobile,
      modelIsTableWithoutScrollComputed,
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
      setEmptySelectedRowsIndexes: _setEmptySelectedRowsIndexes,
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
      closePreviewAll: _closePreviewAll,
      hasPreview,
      isPreviewRightOpen,
      onTogglePreview,
      mousedownResizePreviewRight,
      mousemoveResizePreviewRight,
      mouseupResizePreviewRight,
      previewDownRowIds,
      previewRightRowIndex,
      previewRightRowIndexLast,
      togglePreviewResize,
    } = PreviewAPI(props, context, {
      aTableRef,
      isMobile,
      previewBoxWidthRemLocal,
      rowsLocalAll,
      tableGrandparentRef,
    });

    const {
      tableChildRole,
      tableLabelId,
      tableRoleAttributes,
    } = TableAttributesAPI(props, {
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

    function closePreviewAll() {
      _closePreviewAll();
    }

    function setEmptySelectedRowsIndexes() {
      _setEmptySelectedRowsIndexes();
    }

    watch(isMobile, newValue => {
      onWatchMobileScrollControl(newValue);
      closePreviewAll();
    });

    watch(isColumnActionWide, (newValue, oldValue) => {
      if (newValue !== oldValue) {
        checkVisibleColumns();
      }
    });

    provide("changeModelIsTableWithoutScroll", changeModelIsTableWithoutScroll);
    provide("changeModelSort", changeModelSort);
    provide("columnsOrdered", columnsOrdered);
    provide("columnsFilteredForRender", columnsFilteredForRender);
    provide("columnsScrollInvisible", columnsScrollInvisible);
    provide("columnWidthDefault", columnWidthDefaultRemLocal);
    provide("columnsVisibleAdditionalSpaceForOneGrow", columnsVisibleAdditionalSpaceForOneGrow);
    provide("columnActionsWidthLocal", columnActionsWidthLocal);
    provide("columnActionsWidthMinLocal", columnActionsWidthMinLocal);
    provide("currentMultipleActions", currentMultipleActions);
    provide("hasPreview", hasPreview);
    provide("indexFirstScrollInvisibleColumn", indexFirstScrollInvisibleColumn);
    provide("isActionColumnVisible", isActionColumnVisibleLocal);
    provide("isActionIconVisible", isActionIconVisibleLocal);
    provide("isColumnsDnd", isColumnsDndLocal);
    provide("isMobile", isMobile);
    provide("isMultipleActionsActive", isMultipleActionsActive);
    provide("modelIsTableWithoutScroll", modelIsTableWithoutScrollComputed);
    provide("onTogglePreview", onTogglePreview);
    provide("previewRightRowIndex", previewRightRowIndex);
    provide("previewRightRowIndexLast", previewRightRowIndexLast);

    provide("rowsLocalAll", rowsLocalAll);
    provide("modelColumnsVisibleLocal", modelColumnsVisibleLocal);
    provide("changeColumnsOrdering", changeColumnsOrdering);

    initLocalVars();
    initModelIsTableWithoutScroll();
    initViewCurrent();
    initTable();
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
      columnActionsBtnGroupMaxWidthStyle,
      columnsFilteredForRender,
      columnsOrdered,
      countAllRowsLocal,
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
      modelIsTableWithoutScrollComputed,
      modelSortLocal,
      mousedownResizePreviewRight,
      mousemoveResizePreviewRight,
      mouseupResizePreviewRight,
      offset,
      onTogglePreview,
      previewDownRowIds,
      previewRightRowIndex,
      renderedGroupedColumns,
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
      tableLabelId,
      tableRef,
      tableRoleAttributes,
      toggleBtnAllRows,
      toggleMultipleActionsActive,
      togglePreviewResize,
      totalRowsCount,
      updateRow,
      updateViewCurrent,
      useAdditionalSortingLocal,
      usePaginationBottom,
      usePaginationLocal,
      usePaginationTop,
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
        a_table__grandparent_without_scroll: !this.hasScrollClass,
      }],
    }, [
      this.$slots.tablePrepend &&
      this.$slots.tablePrepend({
        id: this.id,
      }),
      h("div", {
        ref: "aTableRef",
        class: ["a_table__parent", {
          a_table__parent_scrollable: this.hasScrollClass && !this.modelIsTableWithoutScrollComputed,
        }],
      }, [
        h(ATableTopPanel, {
          additionalSortingColumns: this.additionalSortingColumns,
          areAllRowsSelected: this.areAllRowsSelected,
          areSomeRowsSelected: this.areSomeRowsSelected,
          closeMultipleActionsActive: this.closeMultipleActionsActive,
          countAllRows: this.countAllRowsLocal,
          disabledActions: this.disabledActions,
          disabledMultipleActions: this.disabledMultipleActions,
          disabledSort: this.disabledSort,
          disabledViews: this.disabledViews,
          extra: this.extra,
          hasViews: this.hasViews,
          isLabelVisible: this.isLabelVisible,
          isLoadingMultipleActions: this.isLoadingMultipleActions,
          isQuickSearch: this.isQuickSearch,
          isSortingMultiColumn: this.isSortingMultiColumn,
          label: this.label,
          labelClass: this.labelClass,
          labelTag: this.labelTag,
          modelQuickSearch: this.modelQuickSearch,
          modelSort: this.modelSortLocal,
          modelView: this.modelView,
          multipleActions: this.multipleActions,
          selectedRows: this.selectedRows,
          showCount: this.showCount,
          tableActions: this.tableActions,
          tableActionsIndexFirstDropdownAction: this.tableActionsIndexFirstDropdownAction,
          tableActionsIndexFirstDropdownActionMobile: this.tableActionsIndexFirstDropdownActionMobile,
          useAdditionalSorting: this.useAdditionalSortingLocal,
          useViewSlot: this.useViewSlot,
          viewCurrent: this.viewCurrent,
          views: this.views,
          onUpdateViewCurrent: this.updateViewCurrent,
          onUpdateModelQuickSearch: this.updateModelQuickSearch,
          onToggleMultipleActionsActive: this.toggleMultipleActionsActive,
          onToggleBtnAllRows: this.toggleBtnAllRows,
        }, this.$slots),
        this.$slots.topPanelAppend ?
          this.$slots.topPanelAppend() :
          "",
        (this.usePaginationLocal && this.usePaginationTop) ?
          h(APagination, {
            class: "a_table__pagination_top",
            countAllRows: this.countAllRowsLocal,
            disabled: this.pagination.disabled,
            hasRows: this.hasRows,
            limit: this.limit,
            limitsPerPage: this.pagination.limitsPerPage,
            maxPages: this.pagination.maxPages,
            offset: this.offset,
            rowsLength: this.rowsLocalLength,
            totalRowsCount: this.totalRowsCount,
            "onUpdate:limit": this.changeLimit,
            "onUpdate:offset": this.changeOffset,
          }) :
          "",
        this.isViewTableVisible && h("div", {
          ref: "tableRef",
          "aria-labelledby": this.isLabelVisible ?
            this.tableLabelId :
            undefined,
          class: [
            "a_table",
            {
              a_table_simple: this.isSimpleTable,
              a_table_bordered: this.borderType === "bordered",
              a_table_inner_bordered: this.borderType === "innerBordered",
            },
          ],
          ...this.tableRoleAttributes,
        }, [
          this.isSimpleTable ?
          h(ATableGroupedHeader, {
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
            columnsForRender: this.renderedGroupedColumns,
          }) :
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
                  const ROW_ID = getRowIdOrIndex({ row, rowIndex, keyId: this.keyId });

                  return h(ATableTr, {
                    key: ROW_ID,
                    allVisibleMobileColumns: this.allVisibleMobileColumns,
                    areAllRowsSelected: this.areAllRowsSelected,
                    columnActionsBtnGroupMaxWidthStyle: this.columnActionsBtnGroupMaxWidthStyle,
                    columnActionsView: this.columnActionsView,
                    countVisibleMobileColumns: this.countVisibleMobileColumns,
                    disabledPreview: this.disabledPreview,
                    disabledPreviewRowCallback: this.disabledPreviewRowCallback,
                    disabledRowActions: this.disabledRowActions,
                    isFooter: false,
                    isPreviewDownOpen: this.previewDownRowIds[ROW_ID],
                    isRowActionsStickyLocal: this.isRowActionsStickyLocal,
                    isTree: this.isTree,
                    isTreeCollapsible: this.isTreeCollapsible,
                    isTreeOpened: this.isTreeOpened,
                    keyChildren: this.keyChildren,
                    keyId: this.keyId,
                    level: 1,
                    row,
                    rowActionsClass: this.rowActionsClass,
                    rowClass: this.rowClass,
                    rowIndex,
                    rowsLength: this.rowsLocal.length,
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
                }),
              }),
              (this.isViewTableVisible && !this.hasRows) && h(ATranslation, {
                class: "a_table__empty_text",
                text: this.emptyText,
              }),
              this.hasRowsFooter && h("div", {
                class: "a_table__footer",
                role: this.tableChildRole,
              }, this.rowsFooter.map((row, rowIndex) => {
                const ROW_ID = getRowIdOrIndex({ row, rowIndex, keyId: this.keyId });

                return h(ATableTr, {
                  key: ROW_ID,
                  allVisibleMobileColumns: this.allVisibleMobileColumns,
                  areAllRowsSelected: this.areAllRowsSelected,
                  columnActionsBtnGroupMaxWidthStyle: this.columnActionsBtnGroupMaxWidthStyle,
                  columnActionsView: this.columnActionsView,
                  countVisibleMobileColumns: this.countVisibleMobileColumns,
                  disabledPreview: this.disabledPreview,
                  disabledPreviewRowCallback: this.disabledPreviewRowCallback,
                  disabledRowActions: this.disabledRowActions,
                  isFooter: true,
                  isRowActionsStickyLocal: this.isRowActionsStickyLocal,
                  isTree: this.isTree,
                  isTreeCollapsible: this.isTreeCollapsible,
                  isTreeOpened: this.isTreeOpened,
                  keyChildren: this.keyChildren,
                  keyId: this.keyId,
                  level: 1,
                  row,
                  rowActionsClass: this.rowActionsClass,
                  rowClass: this.rowClass,
                  rowIndex,
                  rowsLength: this.rowsFooter.length,
                  selectedRowsIndexes: this.selectedRowsIndexes,
                  onSetSelectedRowsIndexes: this.setSelectedRowsIndexes,
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
          ]),

        ]),
        (!this.isViewTableVisible && this.viewCurrent && this.$slots[this.viewCurrent.type]) &&
        this.$slots[this.viewCurrent.type]({
          isLoading: this.isLoadingTable,
          rows: this.rowsLocalAll,
        }),
        (this.usePaginationLocal && this.usePaginationBottom) ?
          h(APagination, {
            class: "a_table__pagination_bottom",
            countAllRows: this.countAllRowsLocal,
            disabled: this.pagination.disabled,
            hasRows: this.hasRows,
            limit: this.limit,
            limitsPerPage: this.pagination.limitsPerPage,
            maxPages: this.pagination.maxPages,
            offset: this.offset,
            rowsLength: this.rowsLocalLength,
            totalRowsCount: this.totalRowsCount,
            "onUpdate:limit": this.changeLimit,
            "onUpdate:offset": this.changeOffset,
          }) :
          "",
        this.isPreviewRightOpen ?
          h(ATablePreviewRight, {
            countAllRows: this.countAllRowsLocal,
            isMobile: this.isMobile,
            isLoadingTable: this.isLoadingTable,
            limitPagination: this.limit,
            offsetPagination: this.offset,
            previewStyles: this.previewStyles,
            rowIndex: this.previewRightRowIndex,
            rows: this.rowsLocalAll,
            disabledPreviewRowCallback: this.disabledPreviewRowCallback,
            usePagination: !!this.usePaginationLocal,
            onClosePreview: this.closePreview,
            onMousedownResizePreviewRight: this.mousedownResizePreviewRight,
            onMousemoveResizePreviewRight: this.mousemoveResizePreviewRight,
            onMouseupResizePreviewRight: this.mouseupResizePreviewRight,
            onTogglePreview: this.onTogglePreview,
            onTogglePreviewResize: this.togglePreviewResize,
            "onUpdate:offset": this.changeOffset,
          }, this.$slots) :
          "",
      ]),
    ]);
  },
};
