import {
  h, resolveComponent,
} from "vue";

import AButton from "../../AButton/AButton";
import AOneCheckbox from "../../ui/AOneCheckbox/AOneCheckbox";
import ATablePreviewDown from "../ATablePreviewDown/ATablePreviewDown";
import ATableTd from "../ATableTd/ATableTd";
import ATableTdAction from "../ATableTdAction/ATableTdAction";

import AttributesAPI from "./compositionAPI/AttributesAPI";
import CheckboxAPI from "./compositionAPI/CheckboxAPI";
import ChildrenAPI from "./compositionAPI/ChildrenAPI";
import ChildrenToggleAPI from "./compositionAPI/ChildrenToggleAPI";
import MobileAPI from "./compositionAPI/MobileAPI";
import PreviewAPI from "./compositionAPI/PreviewAPI";

import {
  forEach,
} from "lodash-es";

export default {
  name: "ATableTr",
  props: {
    allVisibleMobileColumns: {
      type: Array,
      required: true,
    },
    areAllRowsSelected: {
      type: Boolean,
      required: true,
    },
    countVisibleMobileColumns: {
      type: Number,
      required: true,
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
    isFooter: {
      type: Boolean,
      required: false,
    },
    isOneOfParentsClose: {
      type: Boolean,
      required: false,
    },
    isPreviewDownOpen: {
      type: Boolean,
      required: false,
    },
    isRowActionsStickyLocal: {
      type: Boolean,
      required: true,
    },
    isTree: {
      type: Boolean,
      required: false,
    },
    keyChildren: {
      type: String,
      required: false,
      default: undefined,
    },
    keyId: {
      type: String,
      required: false,
      default: "id",
    },
    level: {
      type: Number,
      required: true,
    },
    row: {
      type: Object,
      required: true,
    },
    rowActionsClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    rowClass: {
      type: [String, Object, Function],
      required: false,
      default: undefined,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
    rowsLength: {
      type: Number,
      required: true,
    },
    selectedRowsIndexes: {
      type: Object,
      required: true,
    },
  },
  emits: [
    "setSelectedRowsIndexes",
  ],
  setup(props, context) {
    const {
      ariaTreeAttributes,
      children,
      hasChildren,
      levelForChildren,
      rowClassLevelChildren,
    } = ChildrenAPI(props);

    const {
      ariaExpanded,
      isOneOfParentsCloseForChildren,
      rowClassChildren,
      toggleChildren,
    } = ChildrenToggleAPI(props, {
      hasChildren,
    });

    const {
      hasPreviewLocal,
      previewAttributes,
      rowClassPreview,
    } = PreviewAPI(props, {
      hasChildren,
    });

    const {
      disabledPreviewRow,
      eventsLocal,
      roleLocal,
      rowClassComputed,
      rowId,
    } = AttributesAPI(props, {
      hasChildren,
      hasPreviewLocal,
      rowClassChildren,
      rowClassLevelChildren,
      rowClassPreview,
      toggleChildren,
    });

    const {
      countInvisibleMobileColumns,
      isAllColumnsVisibleMobile,
      isBtnToggleAllColumnsVisible,
      textBtnToggleAllColumns,
      toggleAllColumnsVisibleMobile,
    } = MobileAPI(props);

    const {
      isCheckboxDisabled,
      isRowSelected,
      labelCheckbox,
      toggleCheckbox,
    } = CheckboxAPI(props, context);

    return {
      ariaExpanded,
      ariaTreeAttributes,
      children,
      countInvisibleMobileColumns,
      disabledPreviewRow,
      eventsLocal,
      hasChildren,
      isAllColumnsVisibleMobile,
      isBtnToggleAllColumnsVisible,
      isCheckboxDisabled,
      isOneOfParentsCloseForChildren,
      isRowSelected,
      labelCheckbox,
      levelForChildren,
      previewAttributes,
      roleLocal,
      rowClassComputed,
      rowId,
      textBtnToggleAllColumns,
      toggleAllColumnsVisibleMobile,
      toggleCheckbox,
    };
  },
  inject: [
    "columnsFilteredForRender",
    "isActionColumnVisible",
    "isMultipleActionsActive",
    "isMobile",
  ],
  render() {
    let tds = [];
    if (this.isMobile && !this.isAllColumnsVisibleMobile) {
      forEach(this.allVisibleMobileColumns, (column, columnIndex) => {
        if (columnIndex + 1 > this.countVisibleMobileColumns) {
          return false;
        }
        tds.push(
          h(ATableTd, {
            key: column.id,
            column,
            columnIndex,
            disabledPreview: this.disabledPreview || this.disabledPreviewRow,
            row: this.row,
            rowIndex: this.rowIndex,
            isFooter: this.isFooter,
          }, this.$slots)
        );
      });
    } else {
      tds = this.columnsFilteredForRender.map((column, columnIndex) => {
        return h(ATableTd, {
          key: column.id,
          column,
          columnIndex,
          disabledPreview: this.disabledPreview || this.disabledPreviewRow,
          row: this.row,
          rowIndex: this.rowIndex,
          isFooter: this.isFooter,
          showIconChildren: !!(this.hasChildren && columnIndex === 0),
        }, this.$slots);
      });
    }

    const ACTIONS = this.isActionColumnVisible &&
      h(ATableTdAction, {
        disabledRowActions: this.disabledRowActions,
        row: this.row,
        rowIndex: this.rowIndex,
        isFooter: this.isFooter,
        rowActionsClass: this.rowActionsClass,
        isRowActionsStickyLocal: this.isRowActionsStickyLocal,
      }, this.$slots);

    const CHILDREN = this.isMobile ?
      h("dl", {
        class: "a_table_mobile__dl",
      }, tds) :
      tds;

    return [
      h("div", {
        id: this.rowId,
        role: this.roleLocal,
        class: this.rowClassComputed,
        "aria-expanded": this.ariaExpanded,
        ...this.previewAttributes,
        ...this.ariaTreeAttributes,
        ...this.eventsLocal,
      }, [
        this.isMultipleActionsActive && h("div", {
          class: "a_table__td a_table__cell a_table__cell_checkbox",
          style: `width: 50px; min-width: 50px; max-width: 50px;`,
        }, [
          !this.isFooter && h(AOneCheckbox, {
            isWidthAuto: true,
            modelValue: this.isRowSelected,
            disabled: this.isCheckboxDisabled,
            label: this.labelCheckbox,
            labelClass: "a_sr_only",
            isLabelTitle: true,
            "onUpdate:modelValue": this.toggleCheckbox,
          }),
        ]),
        CHILDREN,
      this.isMobile ?
        h("div", {
          class: "a_table_mobile__actions_parent",
        }, [
          this.isBtnToggleAllColumnsVisible && h(AButton, {
            class: "a_btn a_btn_link a_table_mobile__columns_btn_toggle",
            extra: {
              count: this.countInvisibleMobileColumns,
            },
            text: this.textBtnToggleAllColumns,
            onClick: this.toggleAllColumnsVisibleMobile,
          }),
          ACTIONS,
        ]) :
        ACTIONS,
      ]),
      this.isPreviewDownOpen && h(ATablePreviewDown, {
        row: this.row,
        rowIndex: this.rowIndex,
      }, {
        preview: arg => this.$slots.preview ? this.$slots.preview(arg) : undefined,
      }),
      this.hasChildren ?
        this.children.map((row, rowIndex) => {
          return h(resolveComponent("ATableTr"), {
            key: row[this.keyId] || rowIndex,
            allVisibleMobileColumns: this.allVisibleMobileColumns,
            areAllRowsSelected: this.areAllRowsSelected,
            countVisibleMobileColumns: this.countVisibleMobileColumns,
            disabledPreview: this.disabledPreview || this.disabledPreviewRow,
            disabledRowActions: this.disabledRowActions,
            isFooter: this.isFooter,
            isOneOfParentsClose: this.isOneOfParentsCloseForChildren,
            isPreviewDownOpen: false,
            isRowActionsStickyLocal: this.isRowActionsStickyLocal,
            isTree: this.isTree,
            keyChildren: this.keyChildren,
            keyId: this.keyId,
            level: this.levelForChildren,
            row,
            rowActionsClass: this.rowActionsClass,
            rowClass: this.rowClass,
            rowIndex,
            rowsLength: this.children.length,
            selectedRowsIndexes: this.selectedRowsIndexes,
          });
        }) :
        "",
    ];
  },
};
