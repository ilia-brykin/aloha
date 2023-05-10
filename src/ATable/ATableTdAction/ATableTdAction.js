import {
  h,
} from "vue";

import ADropdown from "../../ADropdown/ADropdown";
import AIcon from "../../AIcon/AIcon";
import ATableListItem from "../ATableListItem/ATableListItem";
import AGroupButtonDropdown from "../../AGroupButtonDropdown/AGroupButtonDropdown";

import RowActionsAPI from "../compositionAPI/RowActionsAPI";

export default {
  name: "ATableTdAction",
  components: {
    ADropdown,
    AIcon,
    ATableListItem,
  },
  props: {
    disabledRowActions: {
      type: Boolean,
      required: false,
    },
    isFooter: {
      type: Boolean,
      required: false,
    },
    isRowActionsStickyLocal: {
      type: Boolean,
      required: true,
    },
    row: {
      type: Object,
      required: true,
    },
    rowActionsClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
  },
  inject: [
    "columnActionsWidthLocal",
    "columnsScrollInvisible",
    "modelIsTableWithoutScroll",
  ],
  setup(props) {
    const {
      buttonActionsId,
      isRowActionsDropdownVisible,
      rowActionsFiltered,
    } = RowActionsAPI(props);

    return {
      buttonActionsId,
      isRowActionsDropdownVisible,
      rowActionsFiltered,
    };
  },
  computed: {
    isColumnsScrollInvisibleDropdownVisible() {
      if (this.modelIsTableWithoutScroll) {
        return this.countColumnsScrollInvisible > 0;
      }
      return false;
    },

    columnsScrollInvisibleText() {
      return this.countColumnsScrollInvisible === 1 ?
        `${ this.countColumnsScrollInvisible } Feld` :
        `${ this.countColumnsScrollInvisible } Felder`;
    },

    countColumnsScrollInvisible() {
      return this.columnsScrollInvisible.length;
    },
  },
  render() {
    return h("div", {
      role: "cell",
      class: [
        "a_table__td a_table__cell a_table__cell_action",
        {
          a_table__cell_action_sticky: this.isRowActionsStickyLocal,
        },
      ],
    }, [
      h("div", {
        class: [
          "a_table__cell__child",
          this.rowActionsClass,
        ],
      }, [
        this.isColumnsScrollInvisibleDropdownVisible && h(ADropdown, {
          buttonClass: "a_btn a_btn_link",
          dropdownClass: "a_p_0 a_overflow_x_hidden",
          dropdownTag: "div",
          isCaret: false,
          placement: "bottom-end",
          menuWidth: 600,
          isCloseByClickInside: false,
        }, {
          button: () => [
            h(AIcon, {
              icon: "Plus",
              class: "a_table__cell_action__additional_icon",
            }),
            h("span", {
              class: "a_table__cell_action__additional_text",
            }, this.columnsScrollInvisibleText)
          ],
          dropdown: () => [
            h("dl", {
              class: "a_list_dl a_list_dl_dt_right",
            }, [
              this.columnsScrollInvisible.map((column, columnIndex) => {
                return h(ATableListItem, {
                  column,
                  columnIndex,
                  row: this.row,
                  rowIndex: this.rowIndex,
                  isFooter: this.isFooter,
                }, this.$slots);
              }),
            ]),
          ],
        }),
        this.isRowActionsDropdownVisible && h(AGroupButtonDropdown, {
          actions: this.rowActionsFiltered,
          useDropdownActionClass: true,
          indexFirstDropdownAction: 0,
          indexFirstDropdownActionMobile: 0,
          minDropdownActions: 0,
          disabled: this.disabledRowActions,
          dropdownAttributes: {
            id: this.buttonActionsId,
            buttonIconLeft: "OptionVertical",
            buttonClass: "a_btn a_btn_secondary a_table__cell_action__btn",
            placement: "bottom-end",
            isCaret: false,
          },
        }, this.$slots),
      ]),
    ]);
  },
};
