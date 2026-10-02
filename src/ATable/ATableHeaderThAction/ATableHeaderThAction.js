import {
  h,
} from "vue";

import ADropdown from "../../ADropdown/ADropdown";
import AIcon from "../../AIcon/AIcon";
import AInput from "../../ui/AInput/AInput";
import ASwitch from "../../ui/ASwitch/ASwitch";
import ATableHeaderThActionItem from "./ATableHeaderThActionItem/ATableHeaderThActionItem";
import {
  getModelColumnsVisibleDefault,
} from "../utils/utils";

import ColumnSearchAPI from "../compositionAPI/ColumnSearchAPI";
import DragAndDropParentAPI from "../compositionAPI/DragAndDropParentAPI";
import StylesThTdAction from "./compositionAPI/StylesThTdAction";

import {
  forEach,
} from "lodash-es";

const ArrowCounterclockwise = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
</svg>`;
const CheckLg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
</svg>`;
const GearFill = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
</svg>`;
const XLg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>`;

export default {
  name: "ATableHeaderThAction",
  inject: [
    "changeModelIsTableWithoutScroll",
    "columnActionsWidthLocal",
    "changeColumnsOrdering",
    "changeModelColumnsVisible",
    "columns",
    "columnsOrdered",
    "isActionIconVisible",
    "modelIsTableWithoutScroll",
    "useRem",
  ],
  props: {
    disabledOptions: {
      type: Boolean,
      required: false,
    },
    isRowActionsStickyLocal: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const {
      columnIndexDraggable,
      dragend,
      dragenter,
      dragleave,
      dragstart,
      drop,
      isDragstart,
      root,
    } = DragAndDropParentAPI({
      classOver: "a_table__th__dropdown__li_over",
      classOverRight: "a_table__th__dropdown__li_over_right",
      classOverParent: "a_table__th__dropdown__li",
      inHeader: false,
    });

    const {
      searchColumnModel,
      updateSearchColumnModel,
    } = ColumnSearchAPI();

    const {
      stylesThTd,
    } = StylesThTdAction();

    return {
      columnIndexDraggable,
      dragend,
      dragenter,
      dragleave,
      dragstart,
      drop,
      isDragstart,
      root,
      searchColumnModel,
      stylesThTd,
      updateSearchColumnModel,
    };
  },
  methods: {
    selectAllColumns() {
      const MODEL_COLUMNS_VISIBLE = {};
      forEach(this.columnsOrdered, column => {
        MODEL_COLUMNS_VISIBLE[column.id] = true;
      });
      this.changeModelColumnsVisible(MODEL_COLUMNS_VISIBLE);
    },

    deselectAllColumns() {
      const MODEL_COLUMNS_VISIBLE = {};
      forEach(this.columnsOrdered, column => {
        MODEL_COLUMNS_VISIBLE[column.id] = !!column.locked;
      });
      this.changeModelColumnsVisible(MODEL_COLUMNS_VISIBLE);
    },

    resetColumns() {
      this.changeModelColumnsVisible(getModelColumnsVisibleDefault(this.columnsOrdered));
      this.changeColumnsOrdering({ reset: true });
    },
  },
  render() {
    return h("div", {
      class: [
        "a_table__th a_table__cell a_table__cell_action",
        {
          a_table__cell_action_sticky: this.isRowActionsStickyLocal,
        },
      ],
      role: "columnheader",
      ...this.stylesThTd,
    }, [
      h("span", {
        class: "a_sr_only",
      }, "Aktionen"),
      this.isActionIconVisible && h(ADropdown, {
        buttonClass: "a_btn a_btn_secondary a_table__cell_action__btn",
        buttonTitle: "_A_TABLE_DROPDOWN_OPTIONS_TITLE_",
        buttonTextScreenReader: "_A_TABLE_DROPDOWN_OPTIONS_TITLE_",
        dropdownTag: "div",
        dropdownClass: "a_p_0",
        hasCaret: false,
        isCloseByClickInside: false,
        disabled: this.disabledOptions,
        placement: "left",
        menuWidth: 320,
        inBody: true,
        useRem: this.useRem,
      }, {
        button: () => h(AIcon, {
          icon: GearFill,
        }),
        dropdown: () => [
          h("ul", {
            class: ["a_table__th__dropdown__ul", {
              a_table__th__dropdown__ul_dragstart: this.isDragstart,
            }],
            ref: "root",
            onDrop: this.drop,
          }, [
            h("li", null, [
              h("div", {
                class: "a_dropdown__item_text a_table__th__dropdown__search",
              }, [
                h(AInput, {
                  label: "Suchen",
                  modelValue: this.searchColumnModel,
                  isClearButton: true,
                  modelUndefined: "",
                  "onUpdate:modelValue": this.updateSearchColumnModel,
                }),
              ]),
            ]),
            h("li", {
              class: "a_dropdown__divider",
              "aria-hidden": true,
            }),
            h("li", null, [
              h("button", {
                type: "button",
                class: "a_dropdown__item",
                disabled: this.disabledOptions,
                onClick: this.selectAllColumns,
              }, [
                h(AIcon, {
                  icon: CheckLg,
                  class: "a_table__th__dropdown_item__icon",
                }),
                h("span", null, "Alle einblenden"),
              ]),
            ]),
            h("li", null, [
              h("button", {
                type: "button",
                class: "a_dropdown__item",
                disabled: this.disabledOptions,
                onClick: this.deselectAllColumns,
              }, [
                h(AIcon, {
                  icon: XLg,
                  class: "a_table__th__dropdown_item__icon",
                }),
                h("span", null, "Alle ausblenden"),
              ]),
            ]),
            h("li", null, [
              h("button", {
                type: "button",
                class: "a_dropdown__item",
                disabled: this.disabledOptions,
                onClick: this.resetColumns,
              }, [
                h(AIcon, {
                  icon: ArrowCounterclockwise,
                  class: "a_table__th__dropdown_item__icon",
                }),
                h("span", null, "Zurücksetzen"),
              ]),
            ]),
            h("li", null, [
              h(ASwitch, {
                class: "a_dropdown__item_text a_text_nowrap",
                disabled: this.disabledOptions,
                modelValue: this.modelIsTableWithoutScroll,
                trueLabel: "Kompakte Ansicht",
                falseLabel: "Kompakte Ansicht",
                "onUpdate:modelValue": this.changeModelIsTableWithoutScroll,
              }),
            ]),
            h("li", {
              class: "a_dropdown__divider",
              "aria-hidden": true,
            }),
            this.columnsOrdered.map((column, columnIndex) => {
              return h(ATableHeaderThActionItem, {
                column,
                columnIndex,
                columnIndexDraggable: this.columnIndexDraggable,
                disabledOptions: this.disabledOptions,
                searchColumnModel: this.searchColumnModel,
                onDragstartParent: this.dragstart,
                onDragenterParent: this.dragenter,
                onDragleaveParent: this.dragleave,
                onDragendParent: this.dragend,
              });
            }),
          ]),
        ],
      }),
    ]);
  },
};
