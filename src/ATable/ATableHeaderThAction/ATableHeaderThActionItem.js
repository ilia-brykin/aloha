import {
  h,
} from "vue";

import AIcon from "../../AIcon/AIcon";
import ATranslation from "../../ATranslation/ATranslation";

import DragAndDropChildAPI from "../compositionAPI/DragAndDropChildAPI";
import FiltersAPI from "../../compositionAPI/FiltersAPI";

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
    "isLoadingOptions",
    "isLoadingTable",
    "modelColumnsVisibleLocal",
    "modelColumnsVisibleMapping",
    "tableId",
  ],
  setup(props, context) {
    const {
      attributesForRoot,
      isLocked,
      root,
    } = DragAndDropChildAPI(props, context, {
      classOver: "a_table__th__dropdown__li_over",
    });

    const {
      filterSearchHighlight,
    } = FiltersAPI();

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
      return this.modelColumnsVisibleMapping[this.columnId];
    },

    arrowButtons() {
      if (!this.isLocked) {
        return [
          this.isButtonArrowUpVisible && h("button", {
            id: this.idButtonArrowUp,
            class: "a_sr_only_focusable",
            type: "button",
            onClick: this.moveColumnUp,
          }, [
            h(AIcon, {
              icon: "ChevronUp",
            })
          ]),
          this.isButtonArrowDownVisible && h("button", {
            id: this.idButtonArrowDown,
            class: "a_sr_only_focusable",
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
      return this.filterSearchHighlight(this.column.label, this.searchColumnModel);
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
      const MODEL_COLUMNS = cloneDeep(this.modelColumnsVisibleLocal);
      const INDEX = MODEL_COLUMNS.indexOf(this.columnId);
      if (INDEX !== -1) {
        MODEL_COLUMNS.splice(INDEX, 1);
      } else {
        MODEL_COLUMNS.push(this.columnId);
      }
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
        console.log("NEW_ID", NEW_ID);
        setFocusToElement(NEW_ID);
      });
    },

    getArrowButtonId({ columnIndex, iconKey }) {
      return `${ this.tableId }_${ iconKey }_${ columnIndex }`;
    },
  },
  render() {
    return h("li", this.attributesLi, [
      h("div", {
        class: "a_dropdown__item a_table__th__dropdown_item",
      }, [
        h("div", null, [
          h(this.tagIconParent, this.attributesIconParent, [
            h(AIcon, {
              icon: this.icon,
            })
          ]),
          h("span", {
            innerHTML: this.labelLocal,
          }),
          ...this.arrowButtons,
        ]),
        !this.isLocked && h(AIcon, {
          icon: "Dnd",
          class: "a_table__th__dropdown_item__icon_dnd"
        }),
      ]),
    ]);
  },
};
