import ATranslation from "../../ATranslation/ATranslation";

import {
  h,
} from "vue";

export default {
  name: "ATableCountProPage",
  components: {
    ATranslation,
  },
  props: {
    countsPerPage: {
      type: Array,
      required: false,
      default: () => ["10", "25", "50", "100"],
    },
    limit: {
      type: Number,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["update:limit"],
  methods: {
    emitValue(e) {
      if (this.isLoading) {
        return;
      }
      const VALUE = e.target.value;
      this.$emit("update:limit", +VALUE);
    },
  },
  render() {
    return h("div", null, [
      h(ATranslation, {
        tag: "select",
        value: this.limit,
        "aria-label": "_ITEMS_PER_PAGE_",
        disabled: this.isLoading,
        onInput: this.emitValue,
      }, {
        default: () => this.countsPerPage.map(count => {
          return h("option", {
            value: count,
          }, [
            count,
          ]);
        }),
      }),
    ]);
  },
};
