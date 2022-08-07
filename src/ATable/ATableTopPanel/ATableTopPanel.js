import {
  h,
} from "vue";

import AInput from "../../ui/AInput/AInput";
import ATableActionItem from "../ATableActionItem/ATableActionItem";

import FiltersAPI from "../../compositionAPI/FiltersAPI";
import TableActionsAPI from "../compositionAPI/TableActionsAPI";

export default {
  name: "ATableTopPanel",
  props: {
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
    isQuickSearch: {
      type: Boolean,
      required: false,
    },
    modelQuickSearch: {
      type: String,
      required: true,
    },
  },
  emits: [
    "updateModelQuickSearch",
  ],
  setup(props) {
    const {
      filterCurrency,
    } = FiltersAPI();

    const {
      tableActionFiltered,
    } = TableActionsAPI(props);

    return {
      filterCurrency,
      tableActionFiltered,
    };
  },
  computed: {
    countAllRowsFormatted() {
      return `(${ this.filterCurrency(this.countAllRows, "", 0) })`;
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
      }, [
        this.$slots.tableActions(),
        this.tableActionFiltered.map(action => {
          return h(ATableActionItem, {
            action,
          });
        }),
        h(AInput, {
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
