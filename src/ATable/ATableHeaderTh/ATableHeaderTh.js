import AIcon from "../../AIcon/AIcon";
import ATranslation from "../../ATranslation/ATranslation";

import {
  h,
} from "vue";

export default {
  name: "ATableHeaderTh",
  components: {
    AIcon,
    ATranslation,
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
        ...this.ariaSort,
        scope: "col",
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
          onClick: this.changeModelSortLocal,
        };
      }
    },

    iconsSortable() {
      const ICONS = [];
      if (this.isSortable) {
        if (!this.isSortAscending) {
          ICONS.push(this.iconSortDescending);
        }
        if (!this.isSortDescending) {
          ICONS.push(this.iconSortAscending);
        }
      }
      return ICONS;
    },

    iconSortDescending() {
      return h(AIcon, {
        icon: "ChevronUp",
      });
    },

    iconSortAscending() {
      return h(AIcon, {
        icon: "ChevronDown",
      });
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
  render() {
    return h("th", this.attributesForTh, [
      h(this.componentLocal, this.attributesForButton, [
        h(ATranslation, {
          text: this.column.label,
          tag: "span",
        }),
        ...this.iconsSortable,
      ]),
    ]);
  },
};
