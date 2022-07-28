import {
  h,
} from "vue";

import ATranslation from "../../ATranslation/ATranslation";

import FiltersAPI from "../../compositionAPI/FiltersAPI";

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
  },
  setup() {
    const {
      filterCurrency,
    } = FiltersAPI();

    return {
      filterCurrency,
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
    ]);
  },
};
