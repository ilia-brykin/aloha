import {
  h,
} from "vue";

import ADropdown from "../../ADropdown/ADropdown";
import AIcon from "../../AIcon/AIcon";
import ATableHeaderThActionItem from "./ATableHeaderThActionItem";
import ATranslation from "../../ATranslation/ATranslation";

import DragAndDropParentAPI from "../compositionAPI/DragAndDropParentAPI";

import {
  getModelColumnsOrderingDefault,
  getModelColumnsVisibleDefault,
} from "../utils/utils";

export default {
  name: "ATableHeaderThAction",
  components: {
    ADropdown,
    AIcon,
    ATableHeaderThActionItem,
    ATranslation,
  },
  inject: [
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

    return {
      dragstart,
      dragenter,
      dragleave,
      dragend,
      drop,
      isDragstart,
      root,
    };
  },
  methods: {
    selectAllColumns() {
      this.changeModelColumnsVisible(this.columnsOrdered.map(column => column.id));
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
    }, [
      h(ADropdown, {
        dropdownTag: "div",
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
              h("button", {
                type: "button",
                class: "a_dropdown__item",
                onClick: this.selectAllColumns,
              }, [
                h(AIcon, {
                  icon: "Ok",
                  class: "a_table__th__dropdown_item__icon",
                }),
                h("span", null, "Alle auswählen"),
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
