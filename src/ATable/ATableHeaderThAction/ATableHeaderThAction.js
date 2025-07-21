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

import ArrowCounterclockwise from "aloha-svg/dist/js/bootstrap/ArrowCounterclockwise";
import CheckLg from "aloha-svg/dist/js/bootstrap/CheckLg";
import GearFill from "aloha-svg/dist/js/bootstrap/GearFill";
import XLg from "aloha-svg/dist/js/bootstrap/XLg";
import {
  forEach,
} from "lodash-es";

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
