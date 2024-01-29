import {
  h,
} from "vue";

import AButton from "../../AButton/AButton";
import AGroupButtonDropdown from "../../AGroupButtonDropdown/AGroupButtonDropdown";
import AInput from "../../ui/AInput/AInput";
import ARadio from "../../ui/ARadio/ARadio";
import ATranslation from "../../ATranslation/ATranslation";

import ActionsAPI from "./compositionAPI/ActionsAPI";
import AFiltersAPI from "../../compositionAPI/AFiltersAPI";
import CountAllRowsAPI from "./compositionAPI/CountAllRowsAPI";
import MultipleAPI from "./compositionAPI/MultipleAPI";
import ViewsAPI from "./compositionAPI/ViewsAPI";

export default {
  name: "ATableTopPanel",
  props: {
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
    disabledViews: {
      type: Boolean,
      required: true,
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
      onCancelMultipleActions,
      onOpenModalMultipleActions,
      tableActionsFiltered,
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
          this.$slots.tableLabel ? this.$slots.tableLabel({
            countAllRows: this.countAllRows,
          }) :
            h(this.labelTag, {
              class: ["a_table__top_panel__label", this.labelClass],
            }, [
              h(ATranslation, {
                tag: "span",
                class: "a_table__top_panel__label__text",
                text: this.label,
              }),
              h(AButton, {
                class: "a_table__top_panel__label__count",
                tag: "span",
                text: this.countAllRowsFormatted,
                textAriaHidden: true,
                title: "_A_TABLE_ALL_ROWS_{{count}}_",
                extra: {
                  count: this.countAllRows,
                },
              }),
            ]) :
          "",
        h("div", {
          class: "a_table__top_panel__actions",
        }, [
          this.$slots.tableActionsPrepend && this.$slots.tableActionsPrepend({
            isMultipleActionsActive: this.isMultipleActionsActive,
            modelView: this.modelView,
          }),
          h(AGroupButtonDropdown, {
            actions: this.tableActionsFiltered,
            actionsClasses: [],
            disabled: this.isMultipleActionsActive || this.disabledActions,
            indexFirstDropdownAction: this.tableActionsIndexFirstDropdownAction,
            indexFirstDropdownActionMobile: this.tableActionsIndexFirstDropdownActionMobile,
            minDropdownActions: 0,
            dropdownAttributes: {
              buttonText: "Aktionen",
              buttonClass: "a_btn a_btn_secondary a_table__action",
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
              buttonText: "Mehrfachaktionen",
              inBody: true,
              placement: "bottom-end",
            },
          }),
          this.isQuickSearch && h(AInput, {
            label: "_A_TABLE_QUICK_SEARCH_",
            class: "a_table__top_panel__actions__quick_search",
            modelUndefined: "",
            modelValue: this.modelQuickSearch,
            iconPrepend: "Search",
            "onUpdate:modelValue": this.updateModelQuickSearch,
          }),
          this.hasViews && h(ARadio, {
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
          }),
          this.$slots.tableActionsAppend && this.$slots.tableActionsAppend({
            isMultipleActionsActive: this.isMultipleActionsActive,
            modelView: this.modelView,
          }),
        ]),
      ]),
      this.isMultipleActionsActive && h("div", {
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
              text: "_A_TABLE_MULTIPLE_ITEMS_SELECTED_{{countSelectedRows}}_{{countAllRows}}_",
              extra: this.textMultipleSelectedTranslateExtra,
            }),
            this.currentMultipleActions.isAllRowsSelected &&
            h(AButton, {
              class: "a_btn a_btn_secondary a_table__multiple_panel__btn_all_rows",
              type: "button",
              text: this.textMultipleBtnAllRowsTranslate,
              extra: {
                countAllRows: this.countAllRows,
              },
              disabled: this.isBtnSelectAllRowsDisabled || this.disabledMultipleActions,
              loading: this.isLoadingMultipleActions,
              onClick: this.toggleBtnAllRows,
            }),
          ]),
        ]),
        h("div", {
          class: "a_table__multiple_panel__actions",
        }, [
          this.currentMultipleActions.slot && this.$slots.multipleActionActiveSlot ?
            this.$slots.multipleActionActiveSlot({
              disabled: this.isBtnMultipleActionDisabled || this.isLoadingMultipleActions || this.disabledMultipleActions,
              loading: this.isLoadingMultipleActions,
              text: this.currentMultipleActions.text,
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
              text: this.currentMultipleActions.text,
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
      ]),
    ];
  },
};
