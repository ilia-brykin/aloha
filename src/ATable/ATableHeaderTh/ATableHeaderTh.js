import AIcon from "../../AIcon/AIcon.vue";

export default {
  name: "ATableHeaderTh",
  components: {
    AIcon,
  },
  props: {
    column: {
      type: Object,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
    modelSort: {
      type: String,
      required: false,
    },
  },
  emits: [
    "change-model-sort",
  ],
  computed: {
    attributesForTh() {
      const ATTRIBUTES = {
        ...this.ariaSort
      };
      return ATTRIBUTES;
    },

    ariaSort() {
      if (this.isSortable) {
        let ariaSort = "none";
        if (this.isSortAscending) {
          ariaSort = "ascending";
        } else if (this.isSortDescending) {
          ariaSort = "descending";
        }
        return {
          "aria-sort": ariaSort,
        };
      }
      return {};
    },

    sortId() {
      return this.column.sortId;
    },

    isSortAscending() {
      return this.modelSort === this.sortId;
    },

    isSortDescending() {
      return this.modelSort === `-${ this.sortId }`;
    },

    componentLocal() {
      if (this.isSortable) {
        return "button";
      }
      return "span";
    },

    isSortable() {
      return !!this.sortId;
    },

    attributesForButton() {
      if (this.isSortable) {
        return {
          type: "button",
          disabled: this.isLoading,
        };
      }
    },

    eventsForButton() {
      if (this.isSortable) {
        return {
          click: this.changeModelSortLocal,
        };
      }
    },
  },
  methods: {
    changeModelSortLocal() {
      if (this.isLoading) {
        return;
      }
      this.$emit("change-model-sort", {
        sortId: this.sortId,
      });
    },
  },
};
