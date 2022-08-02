import {
  h,
} from "vue";

import ADropdown from "../../ADropdown/ADropdown";
import AIcon from "../../AIcon/AIcon";
import AInput from "../../ui/AInput/AInput";
import ATableHeaderThActionItem from "./ATableHeaderThActionItem";

import ColumnSearchAPI from "../compositionAPI/ColumnSearchAPI";
import DragAndDropParentAPI from "../compositionAPI/DragAndDropParentAPI";

import {
  getModelColumnsOrderingDefault,
  getModelColumnsVisibleDefault,
} from "../utils/utils";
import {
  forEach,
} from "lodash-es";

export default {
  name: "ATableHeaderThAction",
  inject: [
    "columnActionsWidthLocal",
    "changeColumnsOrdering",
    "changeModelColumnsVisible",
    "columns",
    "columnsOrdered",
    "isLoadingOptions",
    "isLoadingTable",
  ],
  setup() {
    const {
      dragstart,
      dragenter,
      dragleave,
      dragend,
      drop,
      isDragstart,
      root,
    } = DragAndDropParentAPI({
      classOver: "a_table__th__dropdown__li_over",
      classOverParent: "a_table__th__dropdown__li",
    });

    const {
      searchColumnModel,
      updateSearchColumnModel,
    } = ColumnSearchAPI();

    return {
      dragstart,
      dragenter,
      dragleave,
      dragend,
      drop,
      isDragstart,
      root,

      searchColumnModel,
      updateSearchColumnModel,
    };
  },
  computed: {
    stylesThAction() {
      return `width: ${ this.columnActionsWidthLocal }px; min-width: ${ this.columnActionsWidthLocal }px; max-width: ${ this.columnActionsWidthLocal }px;`;
    },
  },
  methods: {
    selectAllColumns() {
      this.changeModelColumnsVisible(this.columnsOrdered.map(column => column.id));
    },

    deselectAllColumns() {
      const MODEL_COLUMNS_VISIBLE = [];
      forEach(this.columnsOrdered, column => {
        if (column.locked) {
          MODEL_COLUMNS_VISIBLE.push(column.id);
        }
      });
      this.changeModelColumnsVisible(MODEL_COLUMNS_VISIBLE);
    },

    resetColumns() {
      this.changeModelColumnsVisible(getModelColumnsVisibleDefault(this.columnsOrdered));
      this.changeColumnsOrdering({ modelColumnsOrderingLocal: getModelColumnsOrderingDefault(this.columns) });
    },
  },
  render() {
    return h("div", {
      class: "a_table__th a_table__cell a_table__cell_action",
      scope: "col",
      style: this.stylesThAction,
    }, [
      h(ADropdown, {
        buttonClass: "a_btn a_btn_secondary a_table__cell_action__btn",
        dropdownTag: "div",
        dropdownClass: "a_p_0"
      }, {
        button: () => h(AIcon, {
          icon: "Cog",
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
              h(AInput, {
                label: "Search",
                modelValue: this.searchColumnModel,
                isClearButton: false,
                class: "a_dropdown__item",
                "onUpdate:modelValue": this.updateSearchColumnModel,
              }),
            ]),
            h("li", {
              class: "a_dropdown__divider",
              "aria-hidden": true,
            }),
            h("li", null, [
              h("button", {
                type: "button",
                class: "a_dropdown__item",
                onClick: this.selectAllColumns,
              }, [
                h(AIcon, {
                  icon: "Ok",
                  class: "a_table__th__dropdown_item__icon",
                }),
                h("span", null, "Alle einblenden"),
              ]),
            ]),
            h("li", null, [
              h("button", {
                type: "button",
                class: "a_dropdown__item",
                onClick: this.deselectAllColumns,
              }, [
                h(AIcon, {
                  icon: "Close",
                  class: "a_table__th__dropdown_item__icon",
                }),
                h("span", null, "Alle ausblenden"),
              ]),
            ]),
            h("li", null, [
              h("button", {
                type: "button",
                class: "a_dropdown__item",
                onClick: this.resetColumns,
              }, [
                h(AIcon, {
                  icon: "Reset",
                  class: "a_table__th__dropdown_item__icon",
                }),
                h("span", null, "Zurücksetzen"),
              ]),
            ]),
            h("li", {
              class: "a_dropdown__divider",
              "aria-hidden": true,
            }),
            this.columnsOrdered.map((column, columnIndex) => {
              return h(ATableHeaderThActionItem, {
                column,
                columnIndex,
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
