import {
  h,
} from "vue";

import AButton from "../../AButton/AButton";
import AElement from "../../AElement/AElement";
import AGroupButtonDropdown from "../../AGroupButtonDropdown/AGroupButtonDropdown";
import AInput from "../../ui/AInput/AInput";
import ARadio from "../../ui/ARadio/ARadio";
import ATableSortingAdditional from "../ATableSortingAdditional/ATableSortingAdditional";
import ATranslation from "../../ATranslation/ATranslation";

import AFiltersAPI from "../../compositionAPI/AFiltersAPI";
import ActionsAPI from "./compositionAPI/ActionsAPI";
import CountAllRowsAPI from "./compositionAPI/CountAllRowsAPI";
import IdAPI from "./compositionAPI/IdAPI";
import MultipleAPI from "./compositionAPI/MultipleAPI";
import ViewsAPI from "./compositionAPI/ViewsAPI";

import Search from "aloha-svg/dist/js/bootstrap3/Search";
import ThreeDots from "aloha-svg/dist/js/bootstrap/ThreeDots";
import UiChecks from "aloha-svg/dist/js/bootstrap/UiChecks";

export default {
  name: "ATableTopPanel",
  props: {
    additionalSortingColumns: {
      type: Array,
      required: false,
      default: () => [],
    },
    areAllRowsSelected: {
      type: Boolean,
      required: true,
    },
    areSomeRowsSelected: {
      type: Boolean,
      required: true,
    },
    closeMultipleActionsActive: {
      type: Function,
      required: true,
    },
    countAllRows: {
      type: Number,
      required: true,
    },
    disabledActions: {
      type: Boolean,
      required: true,
    },
    disabledMultipleActions: {
      type: Boolean,
      required: true,
    },
    disabledSort: {
      type: Boolean,
      required: false,
    },
    disabledViews: {
      type: Boolean,
      required: true,
    },
    extra: {
      type: Object,
      required: false,
      default: undefined,
    },
    hasViews: {
      type: Boolean,
      required: true,
    },
    isLabelVisible: {
      type: Boolean,
      required: false,
    },
    isLoadingMultipleActions: {
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
      required: true,
    },
    modelQuickSearch: {
      type: String,
      required: true,
    },
    modelSort: {
      type: Array,
      required: false,
    },
    modelView: {
      type: String,
      required: false,
      default: undefined,
    },
    multipleActions: {
      type: Array,
      required: true,
    },
    selectedRows: {
      type: Array,
      required: true,
    },
    showCount: {
      type: Boolean,
      required: false,
      default: true,
    },
    tableActions: {
      type: Array,
      required: true,
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
    useAdditionalSorting: {
      type: Boolean,
      required: false,
      default: true,
    },
    useViewSlot: {
      type: Boolean,
      required: false,
    },
    viewCurrent: {
      type: Object,
      required: false,
      default: undefined,
    },
    views: {
      type: Array,
      required: true,
    },
  },
  emits: [
    "toggleBtnAllRows",
    "toggleMultipleActionsActive",
    "updateModelQuickSearch",
    "updateViewCurrent",
  ],
  inject: [
    "isMultipleActionsActive",
    "rowsLocalAll",
    "tableId",
  ],
  setup(props, context) {
    const {
      tableLabelId,
    } = IdAPI();

    const {
      filterCurrency,
    } = AFiltersAPI();

    const {
      buttonMultipleId,
      currentMultipleActions,
      multipleActionsFiltered,
      onCancelMultipleActions,
      onOpenModalMultipleActions,
      tableActionsFiltered,
    } = ActionsAPI(props, context);

    const {
      isBtnMultipleActionDisabled,
      isBtnSelectAllRowsDisabled,
      multiplePanelId,
      textMultipleBtnAllRowsTranslate,
      textMultipleSelectedTranslateExtra,
      toggleBtnAllRows,
    } = MultipleAPI(props, context);

    const {
      updateViewCurrentLocal,
      viewSlotLocal,
    } = ViewsAPI(props, context);

    const {
      countAllRowsFormatted,
    } = CountAllRowsAPI(props);

    return {
      buttonMultipleId,
      countAllRowsFormatted,
      currentMultipleActions,
      filterCurrency,
      isBtnMultipleActionDisabled,
      isBtnSelectAllRowsDisabled,
      multipleActionsFiltered,
      multiplePanelId,
      onCancelMultipleActions,
      onOpenModalMultipleActions,
      tableActionsFiltered,
      tableLabelId,
      textMultipleBtnAllRowsTranslate,
      textMultipleSelectedTranslateExtra,
      toggleBtnAllRows,
      updateViewCurrentLocal,
      viewSlotLocal,
    };
  },
  methods: {
    updateModelQuickSearch(model) {
      this.$emit("updateModelQuickSearch", model);
    },
  },
  render() {
    return [
      h("div", {
        class: "a_table__top_panel",
      }, [
        this.isLabelVisible ?
          this.$slots.tableLabel ?
            this.$slots.tableLabel({
              countAllRows: this.countAllRows,
              tableLabelId: this.tableLabelId,
            }) :
            h(this.labelTag, {
              class: ["a_table__top_panel__label", this.labelClass],
            }, [
              h(ATranslation, {
                id: this.tableLabelId,
                tag: "span",
                class: "a_table__top_panel__label__text",
                text: this.label,
                extra: this.extra,
              }),
              this.showCount ?
                h(AElement, {
                  class: "a_table__top_panel__label__count",
                  extra: {
                    count: this.countAllRows,
                  },
                  tag: "span",
                  text: this.countAllRowsFormatted,
                  textAriaHidden: true,
                  textScreenReader: "_A_TABLE_ALL_ROWS_{{count}}_",
                  title: "_A_TABLE_ALL_ROWS_{{count}}_",
                  type: "text",
                }) :
                "",
            ]) :
          "",
        h("div", {
          class: "a_table__top_panel__actions",
        }, [
          this.$slots.tableActionsPrepend ?
            this.$slots.tableActionsPrepend({
              isMultipleActionsActive: this.isMultipleActionsActive,
              modelView: this.modelView,
            }) :
            "",
          h(AGroupButtonDropdown, {
            actions: this.tableActionsFiltered,
            actionsClasses: [],
            disabled: this.isMultipleActionsActive || this.disabledActions,
            indexFirstDropdownAction: this.tableActionsIndexFirstDropdownAction,
            indexFirstDropdownActionMobile: this.tableActionsIndexFirstDropdownActionMobile,
            minDropdownActions: 0,
            dropdownAttributes: {
              buttonClass: "a_btn a_btn_secondary a_table__action",
              buttonIconLeft: ThreeDots,
              buttonText: {
                desktop: "_A_TABLE_ACTIONS_",
              },
              hasCaret: false,
              inBody: true,
              placement: "bottom-end",
            },
          }),
          h(AGroupButtonDropdown, {
            actions: this.multipleActionsFiltered,
            actionsClasses: [],
            disabled: this.isMultipleActionsActive || this.disabledMultipleActions,
            indexFirstDropdownAction: 0,
            indexFirstDropdownActionMobile: 0,
            minDropdownActions: 0,
            dropdownAttributes: {
              id: this.buttonMultipleId,
              buttonClass: "a_btn a_btn_secondary a_table__action",
              buttonText: {
                desktop: "_A_TABLE_MULTIPLE_ACTIONS_",
              },
              buttonIconLeft: UiChecks,
              inBody: true,
              placement: "bottom-end",
            },
          }),
          this.isQuickSearch ?
            h(AInput, {
              label: "_A_TABLE_QUICK_SEARCH_",
              class: "a_table__top_panel__actions__quick_search",
              modelUndefined: "",
              modelValue: this.modelQuickSearch,
              iconPrepend: Search,
              "onUpdate:modelValue": this.updateModelQuickSearch,
            }) :
            "",
          this.hasViews ?
            h(ARadio, {
              modelValue: this.modelView,
              class: "a_d_inline_block",
              isButtonGroup: true,
              disabled: this.disabledViews,
              slotName: this.viewSlotLocal,
              data: this.views,
              keyId: "id",
              keyLabel: "label",
              hasBorder: false,
              classFieldset: "a_p_0",
              "onUpdate:modelValue": this.updateViewCurrentLocal,
            }, {
              viewSlot: arg => this.$slots.viewSlot && this.$slots.viewSlot({
                ...arg,
              }),
            }) :
            "",
          this.useAdditionalSorting ?
            h(ATableSortingAdditional, {
              additionalSortingColumns: this.additionalSortingColumns,
              disabledSort: this.disabledSort,
              isSortingMultiColumn: this.isSortingMultiColumn,
              modelSort: this.modelSort,
            }) :
            "",
          this.$slots.tableActionsAppend ?
            this.$slots.tableActionsAppend({
              isMultipleActionsActive: this.isMultipleActionsActive,
              modelView: this.modelView,
            }) :
            "",
        ]),
      ]),
      (this.isMultipleActionsActive && this.currentMultipleActions) ?
        h("div", {
          id: this.multiplePanelId,
          class: "a_table__multiple_panel",
        }, [
          h("div", {
            class: "a_table__multiple_panel__header",
          }, [
            h(ATranslation, {
              class: "a_table__multiple_panel__header__text",
              tag: "strong",
              text: "_A_TABLE_MULTIPLE_ACTIONS_",
            }),
            h("div", {
              class: "a_table__multiple_panel__items",
            }, [
              h(ATranslation, {
                class: "a_table__multiple_panel__items__selected",
                tag: "span",
                text: "_A_TABLE_MULTIPLE_ITEMS_SELECTED_{{countSelectedRows}}_{{countAllRows}}_{{countSelectedRowsFiltered}}_{{countAllRowsFiltered}}_",
                extra: this.textMultipleSelectedTranslateExtra,
              }),
              this.currentMultipleActions?.isAllRowsSelected &&
              h(AButton, {
                class: "a_btn a_btn_secondary a_table__multiple_panel__btn_all_rows",
                type: "button",
                text: this.textMultipleBtnAllRowsTranslate,
                extra: this.textMultipleSelectedTranslateExtra,
                disabled: this.isBtnSelectAllRowsDisabled || this.disabledMultipleActions,
                loading: this.isLoadingMultipleActions,
                onClick: this.toggleBtnAllRows,
              }),
            ]),
          ]),
          h("div", {
            class: "a_table__multiple_panel__actions",
          }, [
            this.currentMultipleActions?.slot && this.$slots.multipleActionActiveSlot ?
              this.$slots.multipleActionActiveSlot({
                disabled: this.isBtnMultipleActionDisabled || this.isLoadingMultipleActions || this.disabledMultipleActions,
                loading: this.isLoadingMultipleActions,
                text: this.currentMultipleActions?.text,
                action: this.currentMultipleActions,
                onClick: this.onOpenModalMultipleActions,
                close: this.closeMultipleActionsActive,
                rows: this.selectedRows,
                rowsVisible: this.rowsLocalAll,
                id: this.buttonMultipleId,
                areAllRowsSelected: this.areAllRowsSelected,
              }) :
              h(AButton, {
                class: "a_btn a_btn_primary a_table__action",
                type: "button",
                disabled: this.isBtnMultipleActionDisabled || this.isLoadingMultipleActions || this.disabledMultipleActions,
                text: this.currentMultipleActions?.text,
                loading: this.isLoadingMultipleActions,
                loadingAlign: "left",
                onClick: this.onOpenModalMultipleActions,
              }),
            h(AButton, {
              class: "a_btn a_btn_secondary a_table__action",
              type: "button",
              text: "_A_TABLE_MULTIPLE_CANCEL_",
              onClick: this.onCancelMultipleActions,
            }),
          ]),
        ]) :
        "",
    ];
  },
};
