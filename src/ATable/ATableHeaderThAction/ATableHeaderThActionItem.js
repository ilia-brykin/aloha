import {
  h,
  withDirectives,
} from "vue";

import AIcon from "../../AIcon/AIcon";
import ATranslation from "../../ATranslation/ATranslation";

import ASafeHtml from "../../directives/ASafeHtml";

import DragAndDropChildAPI from "../compositionAPI/DragAndDropChildAPI";
import AFiltersAPI from "../../compositionAPI/AFiltersAPI";

import {
  setFocusToElement,
} from "../../utils/utils";
import {
  cloneDeep,
} from "lodash-es";

export default {
  name: "ATableHeaderThActionItem",
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
    searchColumnModel: {
      type: String,
      required: true,
    },
  },
  emits: [
    "dragendParent",
    "dragstartParent",
    "dragenterParent",
    "dragleaveParent",
  ],
  inject: [
    "changeColumnsOrdering",
    "changeModelColumnsVisible",
    "columnsOrdered",
    "isColumnsDnd",
    "isLoadingOptions",
    "isLoadingTable",
    "modelColumnsVisibleLocal",
    "tableId",
  ],
  setup(props, context) {
    const {
      attributesForRoot,
      isLocked,
      root,
    } = DragAndDropChildAPI(props, context, {
      classOverString: "a_table__th__dropdown__li_over",
    });

    const {
      filterSearchHighlight,
    } = AFiltersAPI();

    return {
      attributesForRoot,
      isLocked,
      root,

      filterSearchHighlight,
    };
  },
  computed: {
    tagIconParent() {
      return this.isLocked ?
        "span" :
        "button";
    },

    attributesIconParent() {
      const ATTRIBUTES = {
        class: "a_table__th__dropdown_item__icon",
      };
      if (!this.isLocked) {
        ATTRIBUTES.type = "button";
        ATTRIBUTES.class += " a_table__th__dropdown_item__icon_btn a_btn a_btn_link";
        ATTRIBUTES.onClick = this.toggleColumnVisible;
      }
      return ATTRIBUTES;
    },

    icon() {
      if (this.isLocked) {
        return "Lock";
      }
      return this.isColumnVisible ? "EyeOpen" : "EyeClose";
    },

    attributesLi() {
      const ATTRIBUTES = {
        ...this.attributesForRoot,
        class: "a_table__th__dropdown__li",
      };
      if (!this.isComponentVisible) {
        ATTRIBUTES.style = "display: none;";
      }
      return ATTRIBUTES;
    },

    columnId() {
      return this.column.id;
    },

    isColumnVisible() {
      if (this.columnId in this.modelColumnsVisibleLocal) {
        return !!this.modelColumnsVisibleLocal[this.columnId];
      }
      return !this.column.hide;
    },

    arrowButtons() {
      if (!this.isLocked && this.isColumnsDnd) {
        return [
          this.isButtonArrowUpVisible && h("button", {
            id: this.idButtonArrowUp,
            class: "a_sr_only_focusable a_btn a_btn_link a_p_0 a_table__th__dropdown_item__btn_arrow",
            type: "button",
            onClick: this.moveColumnUp,
          }, [
            h(AIcon, {
              icon: "ChevronUp",
            })
          ]),
          this.isButtonArrowDownVisible && h("button", {
            id: this.idButtonArrowDown,
            class: "a_sr_only_focusable a_btn a_btn_link a_p_0 a_table__th__dropdown_item__btn_arrow",
            type: "button",
            onClick: this.moveColumnDown,
          }, [
            h(AIcon, {
              icon: "ChevronDown",
            })
          ]),
        ];
      }
      return [];
    },

    isButtonArrowUpVisible() {
      return this.columnIndex !== 0 && !this.columnsOrdered[this.columnIndex - 1].locked;
    },

    isButtonArrowDownVisible() {
      return this.columnsOrdered.length - 1 !== this.columnIndex && !this.columnsOrdered[this.columnIndex + 1].locked;
    },

    idButtonArrowUp() {
      return this.getArrowButtonId({
        columnIndex: this.columnIndex,
        iconKey: "up",
      });
    },

    idButtonArrowDown() {
      return this.getArrowButtonId({
        columnIndex: this.columnIndex,
        iconKey: "down",
      });
    },

    labelLocal() {
      return this.filterSearchHighlight(this.column.label, { searchModel: this.searchColumnModel });
    },

    isComponentVisible() {
      if (!this.searchColumnModel) {
        return true;
      }
      const RE = new RegExp(this.searchColumnModel, "gi");
      return `${ this.column.label }`.search(RE) !== -1;
    },
  },
  methods: {
    toggleColumnVisible($event) {
      $event.stopPropagation();
      $event.preventDefault();
      const MODEL_COLUMNS = cloneDeep(this.modelColumnsVisibleLocal);
      MODEL_COLUMNS[this.columnId] = !this.isColumnVisible;
      this.changeModelColumnsVisible(MODEL_COLUMNS);
    },

    moveColumnUp($event) {
      $event.stopPropagation();
      const columnIndexOver = this.columnIndex - 1;
      this.changeColumnsOrdering({
        columnIndexDraggable: this.columnIndex,
        columnIndexOver: columnIndexOver,
      });
      setTimeout(() => {
        setFocusToElement(`#${ this.getArrowButtonId({
          columnIndex: columnIndexOver,
          iconKey: "up",
        }) }`);
      });
    },

    moveColumnDown($event) {
      $event.stopPropagation();
      const columnIndexOver = this.columnIndex + 1;
      this.changeColumnsOrdering({
        columnIndexDraggable: this.columnIndex,
        columnIndexOver: columnIndexOver,
      });
      setTimeout(() => {
        const NEW_ID = `#${ this.getArrowButtonId({
          columnIndex: columnIndexOver,
          iconKey: "down",
        }) }`;
        setFocusToElement(NEW_ID);
      });
    },

    getArrowButtonId({ columnIndex, iconKey }) {
      return `${ this.tableId }_${ iconKey }_${ columnIndex }`;
    },
  },
  render() {
    if (this.column.isRender === false) {
      return "";
    }
    return h("li", this.attributesLi, [
      h("div", {
        class: "a_dropdown__item_text a_table__th__dropdown_item",
      }, [
        h("div", {
          class: "a_table__th__dropdown_item__child",
        }, [
          h(this.tagIconParent, this.attributesIconParent, [
            h(AIcon, {
              icon: this.icon,
            })
          ]),
          h("span", {
            class: "a_position_relative"
          }, [
            this.column.icon && h(AIcon, {
              icon: this.column.icon,
              class: "a_table__th__icon",
            }),
            withDirectives(h("span", {
              class: "a_table__th__text",
            }), [
              [ASafeHtml, this.labelLocal],
            ]),
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
          ]),
          ...this.arrowButtons,
        ]),
        (!this.isLocked && this.isColumnsDnd) && h(AIcon, {
          icon: "Dnd",
          class: "a_table__th__dropdown_item__icon_dnd"
        }),
      ]),
    ]);
  },
};
