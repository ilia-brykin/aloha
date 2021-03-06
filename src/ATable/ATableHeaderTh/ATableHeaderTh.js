import {
  h,
} from "vue";

import AIcon from "../../AIcon/AIcon";
import ATranslation from "../../ATranslation/ATranslation";

import ColumnStylesAPI from "../compositionAPI/ColumnStylesAPI";
import DragAndDropChildAPI from "../compositionAPI/DragAndDropChildAPI";

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
  setup(props, context) {
    const {
      columnsStyles,
    } = ColumnStylesAPI(props);

    const {
      attributesForRoot,
      isLocked,
      root,
    } = DragAndDropChildAPI(props, context, {
      classOver: "a_table__th_over",
    });

    return {
      attributesForRoot,
      isLocked,
      root,
      columnsStyles,
    };
  },
  computed: {
    attributesForTh() {
      const ATTRIBUTES = {
        ...this.ariaSort,
        ...this.attributesForRoot,
        scope: "col",
        ref: "root",
      };
      ATTRIBUTES.class = this.classForTh;
      ATTRIBUTES.style = this.columnsStyles;
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
