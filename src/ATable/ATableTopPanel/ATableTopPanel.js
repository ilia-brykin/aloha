import {
  h,
} from "vue";

import AButton from "../../AButton/AButton";
import ADropdown from "../../ADropdown/ADropdown";
import AIcon from "../../AIcon/AIcon";
import AInput from "../../ui/AInput/AInput";
import ARadio from "../../ui/ARadio/ARadio";
import ATableActionItem from "../ATableActionItem/ATableActionItem";
import ATranslation from "../../ATranslation/ATranslation";

import ActionsAPI from "./compositionAPI/ActionsAPI";
import AFiltersAPI from "../../compositionAPI/AFiltersAPI";
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
    countAllRows: {
      type: Number,
      required: true,
    },
    isLabelVisible: {
      type: Boolean,
      required: false,
    },
    label: {
      type: [String, Number],
      required: false,
      default: "",
    },
    labelTag: {
      type: String,
      required: true,
    },
    labelClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    modelFilters: {
      type: Object,
      required: true,
    },
    tableActions: {
      type: Array,
      required: true,
    },
    multipleActions: {
      type: Array,
      required: true,
    },
    isQuickSearch: {
      type: Boolean,
      required: false,
    },
    modelQuickSearch: {
      type: String,
      required: true,
    },
    closeMultipleActionsActive: {
      type: Function,
      required: true,
    },
    selectedRows: {
      type: Array,
      required: true,
    },
    views: {
      type: Array,
      required: true,
    },
    hasViews: {
      type: Boolean,
      required: true,
    },
    viewCurrent: {
      type: Object,
      required: false,
      default: undefined,
    },
    modelView: {
      type: String,
      required: false,
      default: undefined,
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
    "tableId",
  ],
  setup(props, context) {
    const {
      filterCurrency,
    } = AFiltersAPI();

    const {
      buttonMultipleId,
      currentMultipleActions,
      isMultipleActionsFiltered,
      multipleActionsFiltered,
      onCancelMultipleActions,
      onClickMultipleActions,
      onOpenModalMultipleActions,
      tableActionFiltered,
    } = ActionsAPI(props, context);

    const {
      isBtnMultipleActionDisabled,
      textMultipleBtnAllRowsTranslate,
      textMultipleSelectedTranslateExtra,
      toggleBtnAllRows,
    } = MultipleAPI(props, context);

    const {
      updateViewCurrentLocal,
    } = ViewsAPI(props, context);

    return {
      buttonMultipleId,
      currentMultipleActions,
      filterCurrency,
      isBtnMultipleActionDisabled,
      isMultipleActionsFiltered,
      multipleActionsFiltered,
      onCancelMultipleActions,
      onClickMultipleActions,
      onOpenModalMultipleActions,
      tableActionFiltered,
      textMultipleBtnAllRowsTranslate,
      textMultipleSelectedTranslateExtra,
      toggleBtnAllRows,
      updateViewCurrentLocal,
    };
  },
  computed: {
    countAllRowsFormatted() {
      return `(${ this.filterCurrency(this.countAllRows, { suffix: "", digits: 0 }) })`;
    },
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
              h("span", {
                class: "a_table__top_panel__label__text",
              }, this.label),
              h("span", {
                class: "a_table__top_panel__label__count",
              }, this.countAllRowsFormatted),
            ]) :
          "",
        h("div", {
          class: "a_table__top_panel__actions",
        }, [
          this.$slots.tableActionsStart && this.$slots.tableActionsStart({
            isMultipleActionsActive: this.isMultipleActionsActive,
            modelView: this.modelView,
          }),
          this.tableActionFiltered.map(action => {
            return h(ATableActionItem, {
              action,
              disabled: this.isMultipleActionsActive,
            });
          }),
          this.isMultipleActionsFiltered && h(ADropdown, {
            id: this.buttonMultipleId,
            buttonClass: "a_btn a_btn_secondary a_table__action",
            placement: "bottom-end",
            disabled: this.isMultipleActionsActive,
          }, {
            button: () => [
              h("span", null, "Mehrfachaktionen"),
            ],
            dropdown: () => [
              this.multipleActionsFiltered.map((action, actionIndex) => {
                return h("li", {
                  class: {
                    a_dropdown__divider: action.isDivider,
                  },
                }, [
                  !action.isDivider && h("button", {
                    key: actionIndex,
                    class: "a_dropdown__item",
                    type: "button",
                    title: action.title,
                    onClick: () => this.onClickMultipleActions({ action }),
                  }, [
                    action.icon && h(AIcon, {
                      class: "a_mr_2",
                      icon: action.icon,
                    }),
                    action.label,
                  ]),
                ]);
              }),
            ],
          }),
          this.isQuickSearch && h(AInput, {
            label: "Schnellsuche",
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
            slotName: undefined, // TODO: "buttonGroup" AIcon
            data: this.views,
            keyId: "id",
            keyLabel: "label",
            hasBorder: false,
            classFieldset: "a_p_0",
            "onUpdate:modelValue": this.updateViewCurrentLocal,
          }, {
            buttonGroup: () => [ // TODO: AIcon
              h("span", "aloha"),
            ],
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
            text: "Mehrfachaktionen",
          }),
          h("div", {
            class: "a_table__multiple_panel__items",
          }, [
            h(ATranslation, {
              class: "a_table__multiple_panel__items__selected",
              tag: "span",
              text: "_TABLE_MULTIPLE_ITEMS_SELECTED_{{countSelectedRows}}_{{countAllRows}}_",
              extra: this.textMultipleSelectedTranslateExtra,
            }),
            this.currentMultipleActions.isAllRowsSelected && h(AButton, {
              class: "a_btn a_btn_secondary a_table__multiple_panel__btn_all_rows",
              type: "button",
              text: this.textMultipleBtnAllRowsTranslate,
              extraTranslate: {
                countAllRows: this.countAllRows,
              },
              onClick: this.toggleBtnAllRows,
            }),
          ]),
        ]),
        this.$slots.tableActionsEnd && this.$slots.tableActionsEnd({
          isMultipleActionsActive: this.isMultipleActionsActive,
          modelView: this.modelView,
        }),
        h("div", {
          class: "a_table__multiple_panel__actions",
        }, [
          h(AButton, {
            class: "a_btn a_btn_primary a_table__action",
            type: "button",
            disabled: this.isBtnMultipleActionDisabled,
            text: this.currentMultipleActions.label,
            onClick: this.onOpenModalMultipleActions,
          }),
          h(AButton, {
            class: "a_btn a_btn_secondary a_table__action",
            type: "button",
            text: "_TABLE_MULTIPLE_CANCEL_",
            onClick: this.onCancelMultipleActions,
          }),
        ]),
      ]),
    ];
  },
};
