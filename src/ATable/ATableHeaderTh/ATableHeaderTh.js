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
    modelColumnsMapping: {
      type: Object,
      required: true,
    },
  },
  emits: [
    "change-model-sort",
  ],
  computed: {
    isVisible() {
      return this.modelColumnsMapping[this.column.id];
    },

    attributesForTh() {
      const ATTRIBUTES = {
        ...this.ariaSort,
        scope: "col",
        class: "a_table__th a_table__cell"
      };
      if (!this.isVisible) {
        ATTRIBUTES.style = {
          display: "none",
        };
      }
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
          class: "a_table__th__sort",
          onClick: this.changeModelSortLocal,
        };
      }
      return {};
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
        class: "a_table__th__sort__icon a_table__th__sort__icon_up",
      });
    },

    iconSortAscending() {
      return h(AIcon, {
        icon: "ChevronDown",
        class: "a_table__th__sort__icon a_table__th__sort__icon_down",
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
    return h("div", this.attributesForTh, [
      h(this.componentLocal, this.attributesForButton, [
        h(ATranslation, {
          text: this.column.label,
          tag: "span",
        }),
        h("span", {
          class: "a_table__th__sort__icons",
        }, [
          ...this.iconsSortable,
        ]),
      ]),
    ]);
  },
};
