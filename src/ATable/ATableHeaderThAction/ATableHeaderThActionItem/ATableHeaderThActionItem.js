import {
  h,
} from "vue";

import AButton from "../../../AButton/AButton";
import AIcon from "../../../AIcon/AIcon";
import ATranslation from "../../../ATranslation/ATranslation";

import AttributesComponentAPI from "./compositionAPI/AttributesComponentAPI";
import ButtonVisibleAPI from "./compositionAPI/ButtonVisibleAPI";
import DragAndDropChildAPI from "../../compositionAPI/DragAndDropChildAPI";
import LabelAPI from "./compositionAPI/LabelAPI";
import MoveColumnAPI from "./compositionAPI/MoveColumnAPI";

const ChevronDown = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg>`;
const ChevronUp = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
</svg>`;
const GripVertical = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
  <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>`;


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
    disabledOptions: {
      type: Boolean,
      required: false,
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
      inDropdown: true,
    });

    const {
      labelLocal,
      labelTranslated,
    } = LabelAPI(props);

    const {
      buttonVisibleProps,
      isColumnVisible,
    } = ButtonVisibleAPI(props, {
      isLocked,
    });

    const {
      idButtonArrowDown,
      idButtonArrowUp,
      isButtonArrowDownVisible,
      isButtonArrowUpVisible,
      moveColumnDown,
      moveColumnUp,
    } = MoveColumnAPI(props);

    const {
      attributesComponent,
    } = AttributesComponentAPI(props, {
      attributesForRoot,
      isColumnVisible,
      isLocked,
      labelTranslated,
    });

    return {
      attributesComponent,
      attributesForRoot,
      buttonVisibleProps,
      idButtonArrowDown,
      idButtonArrowUp,
      isButtonArrowDownVisible,
      isButtonArrowUpVisible,
      isLocked,
      labelLocal,
      moveColumnDown,
      moveColumnUp,
      root,
    };
  },
  render() {
    if (this.column.isRender === false) {
      return null;
    }
    return h("li", this.attributesComponent, [
      h("div", {
        class: "a_dropdown__item_text a_table__th__dropdown_item",
      }, [
        h("div", {
          class: "a_table__th__dropdown_item__child",
        }, [
          h(AButton, this.buttonVisibleProps),
          h("span", {
            class: "a_position_relative",
          }, [
            this.column.icon && h(AIcon, {
              icon: this.column.icon,
              class: "a_table__th__icon",
            }),
            h(ATranslation, {
              tag: "span",
              class: "a_table__th__text",
              safeHtml: this.labelLocal,
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
          ]),
          (!this.isLocked && this.isColumnsDnd) ?
            [this.isButtonArrowUpVisible && h(AButton, {
              id: this.idButtonArrowUp,
              class: "a_sr_only_focusable a_btn a_btn_link a_p_0 a_table__th__dropdown_item__btn_arrow",
              disabled: this.disabledOptions,
              type: "button",
              iconLeft: ChevronUp,
              title: "_A_TABLE_OPTIONS_BTN_ARROW_UP_TITLE_",
              textScreenReader: "_A_TABLE_OPTIONS_BTN_ARROW_UP_TITLE_",
              onClick: this.moveColumnUp,
            }),
             this.isButtonArrowDownVisible && h(AButton, {
               id: this.idButtonArrowDown,
               class: "a_sr_only_focusable a_btn a_btn_link a_p_0 a_table__th__dropdown_item__btn_arrow",
               disabled: this.disabledOptions,
               type: "button",
               iconLeft: ChevronDown,
               title: "_A_TABLE_OPTIONS_BTN_ARROW_DOWN_TITLE_",
               textScreenReader: "_A_TABLE_OPTIONS_BTN_ARROW_DOWN_TITLE_",
               onClick: this.moveColumnDown,
             })] :
            "",
        ]),
        (!this.isLocked && this.isColumnsDnd) && h(AIcon, {
          icon: GripVertical,
          class: "a_table__th__dropdown_item__icon_dnd",
        }),
      ]),
    ]);
  },
};
