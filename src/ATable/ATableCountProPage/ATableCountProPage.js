import {
  h,
} from "vue";

import ATranslation from "../../ATranslation/ATranslation";

import AFiltersAPI from "../../compositionAPI/AFiltersAPI";


export default {
  name: "ATableCountProPage",
  components: {
    ATranslation,
  },
  props: {
    countAllRows: {
      type: Number,
      required: true,
    },
    limitsPerPage: {
      type: Array,
      required: true,
    },
    limit: {
      type: Number,
      required: true,
    },
    isLoadingTable: {
      type: Boolean,
      required: true,
    },
    offset: {
      type: Number,
      required: true,
    },
    rowsLength: {
      type: Number,
      required: true,
    },
    hasRows: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["update:limit"],
  setup() {
    const {
      filterCurrency,
    } = AFiltersAPI();

    return {
      filterCurrency,
    };
  },
  computed: {
    extraForTranslate() {
      return {
        start: this.startFormatted,
        current: this.currentFormatted,
        count: this.countFormatted,
      };
    },

    startFormatted() {
      return this.filterCurrency(+this.offset + 1, { suffix: "", digits: 0 });
    },

    currentFormatted() {
      return this.filterCurrency(+this.offset + this.rowsLength, { suffix: "", digits: 0 });
    },

    countFormatted() {
      return this.filterCurrency(this.countAllRows, { suffix: "", digits: 0 });
    },

    countText() {
      return `${ this.startFormatted } - ${ this.currentFormatted } von ${ this.countFormatted }`;
    },
  },
  methods: {
    changeLimit(limit) {
      if (this.isLoadingTable) {
        return;
      }
      this.$emit("update:limit", +limit);
    },
  },
  render() {
    if (this.hasRows) {
      return h("div", {
        class: "a_pagination__counts",
      }, [
        h("span", {
          class: "a_pagination__count_from_to"
        }, this.countText),
        h("span", {
          class: "a_pagination__count__text"
        }, "Pro Seite:"),
        h("div", {
          class: "a_pagination__count",
        }, [
          this.limitsPerPage.map(count => {
            return h("div", {
              class: "a_pagination__count__item",
            }, [
              h("button", {
                type: "button",
                class: "a_btn a_btn_link a_pagination__count__button",
                disabled: +count === this.limit || this.isLoadingTable,
                onClick: () => this.changeLimit(count),
              }, count),
            ]);
          }),
        ]),
      ]);
    }
    return "";
  },
};
