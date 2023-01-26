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
    columnIndexDraggable: {
      type: Number,
      required: false,
      default: -1,
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
    "isColumnsDnd",
    "isLoadingOptions",
    "isLoadingTable",
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
      classOverString: "a_table__th_over",
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
        role: "columnheader",
      };
      ATTRIBUTES.class = this.classForTh;
      ATTRIBUTES.style = this.columnsStyles;
      return ATTRIBUTES;
    },

    classForTh() {
      return [
        "a_table__th a_table__cell",
        {
          a_table__th_draggable: !this.isLocked && !this.isLoadingOptions && this.isColumnsDnd,
          a_table__th_sorting: this.isSorting,
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

    isSorting() {
      return this.isSortable &&
        (this.isSortAscending ||
          this.isSortDescending);
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
          class: "a_btn a_btn_link a_table__th__sort",
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
    if (this.column.isRender === false) {
      return "";
    }
    return h("div", this.attributesForTh, [
      h("div", {
        class: [
          "a_table__cell__child",
          this.column.class,
          this.column.classHeader,
        ],
      }, [
        h(this.componentLocal, this.attributesForButton, [
          this.column.icon && h(AIcon, {
            icon: this.column.icon,
            class: "a_table__th__icon",
          }),
          this.column.label && h(ATranslation, {
            html: this.column.label,
            tag: "span",
            class: "a_table__th__text",
          }),
          this.column.title && h(ATranslation, {
            title: this.column.title,
            ariaHidden: true,
            tag: "span",
            class: "a_position_absolute_all",
          }),
          this.column.title && h(ATranslation, {
            text: this.column.title,
            tag: "span",
            class: "a_sr_only",
          }),
          h("span", {
            class: "a_table__th__sort__icons",
          }, [
            ...this.iconsSortable,
          ]),
        ]),
      ]),
    ]);
  },
};
