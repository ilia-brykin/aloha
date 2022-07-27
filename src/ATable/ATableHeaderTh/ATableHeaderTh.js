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
    columnIndex: {
      type: Number,
      required: true,
    },
    modelSort: {
      type: String,
      required: false,
    },
  },
  emits: [
    "dragendParent",
    "dragstartParent",
    "dragenterParent",
    "dragleaveParent",
  ],
  inject: [
    "changeModelSort",
    "isLoadingOptions",
    "isLoadingTable",
    "modelColumnsVisibleMapping",
  ],
  computed: {
    isVisible() {
      return this.modelColumnsVisibleMapping[this.column.id];
    },

    attributesForTh() {
      const ATTRIBUTES = {
        ...this.ariaSort,
        scope: "col",
      };
      if (!this.isLocked) {
        ATTRIBUTES.draggable = !this.isLoadingOptions;
        ATTRIBUTES.onDragstart = this.dragstart;
        ATTRIBUTES.onDragend = this.dragend;
        ATTRIBUTES.onDragenter = this.dragenter;
        ATTRIBUTES.onDragover = this.dragover;
        ATTRIBUTES.onDragleave = this.dragleave;
      }
      if (!this.isVisible) {
        ATTRIBUTES.style = {
          display: "none",
        };
      }
      ATTRIBUTES.class = this.classForTh;
      return ATTRIBUTES;
    },

    classForTh() {
      return [
        "a_table__th a_table__cell",
        {
          a_table__th_draggable: !this.isLocked && !this.isLoadingOptions,
        }
      ];
    },

    isLocked() {
      return this.column.locked;
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
          disabled: this.isLoadingTable,
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
      if (this.isLoadingTable) {
        return;
      }
      this.changeModelSort({
        sortId: this.sortId,
      });
    },

    dragstart($event) {
      $event.target.style.opacity = "0.4";
      $event.dataTransfer.effectAllowed = "move";
      this.$emit("dragstartParent", {
        columnIndex: this.columnIndex,
      });
    },

    dragend($event) {
      $event.target.style.opacity = "1";
      $event.target.classList.remove("a_table__th_over");
      this.$emit("dragendParent");
    },

    dragenter() {
      this.$el.classList.add("a_table__th_over");
      this.$emit("dragenterParent", {
        columnIndex: this.columnIndex,
      });
    },

    dragleave() {
      this.$el.classList.remove("a_table__th_over");
      this.$emit("dragleaveParent", {
        columnIndex: this.columnIndex,
      });
    },

    dragover($event) {
      if ($event.preventDefault) {
        $event.preventDefault();
      }
      return false;
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
