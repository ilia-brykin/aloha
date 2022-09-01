import {
  h,
} from "vue";

import ADropdown from "../../ADropdown/ADropdown";
import AIcon from "../../AIcon/AIcon";
import AInput from "../../ui/AInput/AInput";
import ATableActionItem from "../ATableActionItem/ATableActionItem";

import AFiltersAPI from "../../compositionAPI/AFiltersAPI";
import TableActionsAPI from "../compositionAPI/TableActionsAPI";

export default {
  name: "ATableTopPanel",
  props: {
    areSomeRowsSelected: {
      type: Boolean,
      required: true,
    },
    countAllRows: {
      type: Number,
      required: true,
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
  },
  emits: [
    "updateModelQuickSearch",
    "toggleMultipleActionsActive",
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
    } = TableActionsAPI(props, context);

    return {
      buttonMultipleId,
      currentMultipleActions,
      filterCurrency,
      isMultipleActionsFiltered,
      multipleActionsFiltered,
      onCancelMultipleActions,
      onClickMultipleActions,
      onOpenModalMultipleActions,
      tableActionFiltered,
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
    return h("div", {
      class: "a_table__top_panel",
    }, [
      this.$slots.tableLabel ? this.$slots.tableLabel({
        countAllRows: this.countAllRows,
      }) :
        h(this.labelTag, {
          class: "a_table__top_panel__label",
        }, [
          h("span", {
            class: "a_table__top_panel__label__text",
          }, this.label),
          h("span", {
            class: "a_table__top_panel__label__count",
          }, this.countAllRowsFormatted),
        ]),
      h("div", {
        class: "a_table__top_panel__actions",
      }, this.isMultipleActionsActive ? [
        h("button", {
          class: "a_btn a_btn_primary a_table__action",
          type: "button",
          disabled: !this.areSomeRowsSelected,
          onClick: this.onOpenModalMultipleActions,
        }, this.currentMultipleActions.label),
        h("button", {
          class: "a_btn a_btn_secondary a_table__action",
          type: "button",
          onClick: this.onCancelMultipleActions,
        }, "Mehrfachaktion abbrechen"),
      ] : [
        this.$slots.tableActions && this.$slots.tableActions(),
        this.tableActionFiltered.map(action => {
          return h(ATableActionItem, {
            action,
          });
        }),
        this.isMultipleActionsFiltered && h(ADropdown, {
          id: this.buttonMultipleId,
          buttonClass: "a_btn a_btn_secondary a_table__action",
          placement: "bottom-end",
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
      ]),
    ]);
  },
};
