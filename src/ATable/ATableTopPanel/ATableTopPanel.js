import {
  h,
} from "vue";

import ATableActionItem from "../ATableActionItem/ATableActionItem";
import ATranslation from "../../ATranslation/ATranslation";

import FiltersAPI from "../../compositionAPI/FiltersAPI";
import TableActionsAPI from "../compositionAPI/TableActionsAPI";

export default {
  name: "ATableTopPanel",
  components: {
    ATranslation,
  },
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
  },
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
      ]),
    ]);
  },
};
