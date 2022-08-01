import {
  h,
} from "vue";

import ADropdown from "../../ADropdown/ADropdown";
import AIcon from "../../AIcon/AIcon";
import ATableListItem from "../ATableListItem/ATableListItem";

export default {
  name: "ATableTdAction",
  components: {
    ADropdown,
    AIcon,
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
        dropdownClass: "a_p_0"
      }, {
        button: () => [
          h(AIcon, {
            icon: "ChevronDown",
          }),
          h("span", null, this.columnsScrollInvisibleText)
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
      h("span", null, "Aktionen"),
    ]);
  },
};
