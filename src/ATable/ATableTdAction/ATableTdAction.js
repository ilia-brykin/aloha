import {
  h,
} from "vue";

import ADropdown from "../../ADropdown/ADropdown";
import AGroupButtonDropdown from "../../AGroupButtonDropdown/AGroupButtonDropdown";
import ATableListItem from "../ATableListItem/ATableListItem";

import AMobileAPI from "../../compositionAPI/AMobileAPI";
import ColumnsCountAPI from "./compositionAPI/ColumnsCountAPI.js";
import RowActionsAPI from "../compositionAPI/RowActionsAPI";
import RowNumberAPI from "./compositionAPI/RowNumberAPI.js";
import StylesThTdAction from "../ATableHeaderThAction/compositionAPI/StylesThTdAction";

import ChevronDown from "aloha-svg/dist/js/bootstrap/ChevronDown";
import PlusLg from "aloha-svg/dist/js/bootstrap/PlusLg";
import ThreeDots from "aloha-svg/dist/js/bootstrap/ThreeDots";
import {
  isUndefined,
} from "lodash-es";

export default {
  name: "ATableTdAction",
  props: {
    columnActionsBtnGroupMaxWidthStyle: {
      type: String,
      required: false,
      default: undefined,
    },
    columnActionsView: {
      type: String,
      required: true,
    },
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
    "columnActionsOnePlusDropdownOptions",
    "columnsScrollInvisible",
    "tableId",
    "useRem",
  ],
  setup(props) {
    const {
      isMobileWidth,
    } = AMobileAPI();

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

    const {
      stylesThTd,
    } = StylesThTdAction();

    return {
      buttonActionsId,
      columnsScrollInvisibleText,
      countColumnsScrollInvisible,
      isColumnsScrollInvisibleDropdownVisible,
      isMobileWidth,
      isRowActionsDropdownVisible,
      rowActionsFiltered,
      rowNumber,
      stylesThTd,
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
      ...this.stylesThTd,
    }, [
      h("div", {
        class: [
          "a_table__cell__child",
          this.rowActionsClass,
        ],
      }, [
        this.isColumnsScrollInvisibleDropdownVisible && h(ADropdown, {
          buttonClass: "a_btn a_btn_link a_text_nowrap",
          buttonIconLeft: PlusLg,
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
          useRem: this.useRem,
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
        this.isRowActionsDropdownVisible || this.$slots.rowActions ?
          h("div", {
            class: "a_table__cell_action__group",
          }, [
            this.$slots.rowActions ?
              this.$slots.rowActions({
                tableId: this.tableId,
                row: this.row,
                rowIndex: this.rowIndex,
                isFooter: this.isFooter,
              }) :
              "",
            this.isRowActionsDropdownVisible ?
              this.columnActionsView === "dropdown" ||
              (this.isMobileWidth && this.columnActionsOnePlusDropdownOptions.indexFirstDropdownActionMobile === 0) ?
                h(ADropdown, {
                  id: this.buttonActionsId,
                  actions: this.rowActionsFiltered,
                  buttonClass: "a_btn a_btn_secondary a_table__cell_action__btn",
                  buttonIconLeft: ThreeDots,
                  buttonTextScreenReader: "_A_TABLE_DROPDOWN_ACTIONS_TITLE_{{rowNumber}}_",
                  buttonTitle: "_A_TABLE_DROPDOWN_ACTIONS_TITLE_{{rowNumber}}_",
                  disabled: this.disabledRowActions,
                  extra: {
                    rowNumber: this.rowNumber,
                  },
                  hasCaret: false,
                  inBody: true,
                  placement: "bottom-end",
                  useRem: this.useRem,
                }, this.$slots) :
                h(AGroupButtonDropdown, {
                  class: "a_d_inline_block",
                  style: this.columnActionsBtnGroupMaxWidthStyle,
                  actions: this.rowActionsFiltered,
                  dropdownAttributes: {
                    id: this.buttonActionsId,
                    buttonClass: "a_btn a_btn_secondary a_table__cell_action__btn",
                    buttonIconLeft: ChevronDown,
                    buttonTextScreenReader: "_A_TABLE_DROPDOWN_ACTIONS_TITLE_{{rowNumber}}_",
                    buttonTitle: "_A_TABLE_DROPDOWN_ACTIONS_TITLE_{{rowNumber}}_",
                    extra: {
                      rowNumber: this.rowNumber,
                    },
                    hasCaret: false,
                    inBody: true,
                    placement: "bottom-end",
                  },
                  disabled: this.disabledRowActions,
                  btnGroupClass: isUndefined(this.columnActionsOnePlusDropdownOptions.btnGroupClass) ? "a_btn_group a_btn_group_table" : this.columnActionsOnePlusDropdownOptions.btnGroupClass,
                  hasDividerBeforeDropdown: this.columnActionsOnePlusDropdownOptions.hasDividerBeforeDropdown || false,
                  indexFirstDropdownAction: isUndefined(this.columnActionsOnePlusDropdownOptions.indexFirstDropdownAction) ? 1 : this.columnActionsOnePlusDropdownOptions.indexFirstDropdownAction,
                  indexFirstDropdownActionMobile: isUndefined(this.columnActionsOnePlusDropdownOptions.indexFirstDropdownActionMobile) ? 1 : this.columnActionsOnePlusDropdownOptions.indexFirstDropdownActionMobile,
                  minDropdownActions: isUndefined(this.columnActionsOnePlusDropdownOptions.minDropdownActions) ? 1 : this.columnActionsOnePlusDropdownOptions.minDropdownActions,
                  actionsClasses: this.columnActionsOnePlusDropdownOptions.actionsClasses || ["a_btn a_btn_primary a_text_truncate"],
                }, this.$slots) :
              "",
          ]) :
          "",
      ]),
    ]);
  },
};
