import {
  h,
} from "vue";

import ADropdown from "../../ADropdown/ADropdown";
import AIcon from "../../AIcon/AIcon";
import ATableListItem from "../ATableListItem/ATableListItem";

import ColumnsCountAPI from "./compositionAPI/ColumnsCountAPI.js";
import RowActionsAPI from "../compositionAPI/RowActionsAPI";
import RowNumberAPI from "./compositionAPI/RowNumberAPI.js";

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
    "columnsScrollInvisible",
  ],
  setup(props) {
    const {
      buttonActionsId,
      isRowActionsDropdownVisible,
      rowActionsFiltered,
    } = RowActionsAPI(props);

    const {
      columnsScrollInvisibleText,
      countColumnsScrollInvisible,
      isColumnsScrollInvisibleDropdownVisible,
    } = ColumnsCountAPI();

    const {
      rowNumber,
    } = RowNumberAPI(props);

    return {
      buttonActionsId,
      columnsScrollInvisibleText,
      countColumnsScrollInvisible,
      isColumnsScrollInvisibleDropdownVisible,
      isRowActionsDropdownVisible,
      rowActionsFiltered,
      rowNumber,
    };
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
          buttonIconLeft: "Plus",
          buttonIconClass: "a_table__cell_action__additional_icon",
          buttonTitle: "_A_TABLE_DROPDOWN_HIDE_FIELDS_TITLE_{{count}}_",
          buttonTextScreenReader: "_A_TABLE_DROPDOWN_HIDE_FIELDS_TITLE_{{count}}_",
          buttonText: this.columnsScrollInvisibleText,
          buttonTextClass: "a_table__cell_action__additional_text",
          buttonTextAriaHidden: true,
          extra: {
            count: this.countColumnsScrollInvisible,
          },
          dropdownClass: "a_p_0 a_overflow_x_hidden a_table__extra_dropdown",
          dropdownTag: "div",
          hasCaret: false,
          floatingFlip: {
            use: true,
            fallbackPlacements: ["top-end", "left"],
          },
          inBody: true,
          placement: "bottom-end",
          menuWidth: 600,
          isCloseByClickInside: false,
        }, {
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
        this.isRowActionsDropdownVisible && h(ADropdown, {
          id: this.buttonActionsId,
          actions: this.rowActionsFiltered,
          buttonClass: "a_btn a_btn_secondary a_table__cell_action__btn",
          buttonIconLeft: "OptionVertical",
          buttonTextScreenReader: "_A_TABLE_DROPDOWN_ACTIONS_TITLE_{{rowNumber}}_",
          buttonTitle: "_A_TABLE_DROPDOWN_ACTIONS_TITLE_{{rowNumber}}_",
          disabled: this.disabledRowActions,
          extra: {
            rowNumber: this.rowNumber,
          },
          hasCaret: false,
          inBody: true,
          placement: "bottom-end",
        }, this.$slots),
      ]),
    ]);
  },
};
