import {
  h,
} from "vue";

import ADropdown from "../../ADropdown/ADropdown";
import AIcon from "../../AIcon/AIcon";
import ATableTdActionItem from "../ATableTdActionItem/ATableTdActionItem";
import ATableListItem from "../ATableListItem/ATableListItem";

import RowActionsAPI from "../compositionAPI/RowActionsAPI";

export default {
  name: "ATableTdAction",
  components: {
    ADropdown,
    AIcon,
    ATableTdActionItem,
    ATableListItem,
  },
  props: {
    row: {
      type: Object,
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
  },
  inject: [
    "columnsScrollInvisible",
  ],
  setup(props) {
    const {
      isRowActionsDropdownVisible,
      rowActionsFiltered,
    } = RowActionsAPI(props);

    return {
      isRowActionsDropdownVisible,
      rowActionsFiltered,
    };
  },
  computed: {
    isColumnsScrollInvisibleDropdownVisible() {
      return this.countColumnsScrollInvisible > 0;
    },

    columnsScrollInvisibleText() {
      return `${ this.countColumnsScrollInvisible } Felder`;
    },

    countColumnsScrollInvisible() {
      return this.columnsScrollInvisible.length;
    },
  },
  render() {
    return h("div", {
      class: "a_table__td a_table__cell a_table__cell_action",
    }, [
      this.isColumnsScrollInvisibleDropdownVisible && h(ADropdown, {
        buttonClass: "a_btn a_btn_link",
        dropdownClass: "a_p_0",
        dropdownTag: "div",
      }, {
        button: () => [
          h(AIcon, {
            icon: "Plus",
            width: 14,
            height: 14,
            class: "a_table__cell_action__additional_icon",
          }),
          h("span", {
            class: "a_table__cell_action__additional_text",
          }, this.columnsScrollInvisibleText)
        ],
        dropdown: () => [
          h("dl", {
            class: "a_list_dl",
          }, [
            this.columnsScrollInvisible.map((column, columnIndex) => {
              return h(ATableListItem, {
                column,
                columnIndex,
                row: this.row,
                rowIndex: this.rowIndex,
              }, this.$slots);
            }),
          ]),
        ],
      }),
      this.isRowActionsDropdownVisible && h(ADropdown, {
        buttonClass: "a_btn a_btn_secondary a_table__cell_action__btn",
        dropdownClass: "a_p_0"
      }, {
        button: () => [
          h(AIcon, {
            icon: "OptionVertical",
          }),
        ],
        dropdown: () => [
          this.rowActionsFiltered.map(rowAction => {
            return h(ATableTdActionItem, {
              row: this.row,
              rowAction,
              rowIndex: this.rowIndex,
            }, this.$slots);
          }),
        ],
      }),
    ]);
  },
};
