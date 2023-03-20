import {
  computed,
  inject,
  toRef,
} from "vue";

import {
  cloneDeep,
  forEach,
  get,
  isFunction,
  isPlainObject,
  isString,
  isUndefined,
} from "lodash-es";

export default function RowActionsAPI(props) {
  const row = toRef(props, "row");
  const rowIndex = toRef(props, "rowIndex");
  const isFooter = toRef(props, "isFooter");
  const rowActions = inject("rowActions");

  const buttonActionsId = computed(() => {
    return `a_table_dropdown_btn_${ rowIndex.value }`;
  });

  const isRowActionVisible = ({ rowAction }) => {
    if (rowAction.isHidden) {
      return false;
    }
    if (isFunction(rowAction.isHiddenCallback)) {
      return !rowAction.isHiddenCallback({
        row: row.value,
        rowIndex: rowIndex.value,
      });
    }
    return true;
  };

  const getRowActionText = ({ rowAction }) => {
    if (rowAction.text) {
      return rowAction.text;
    }
    if (isFunction(rowAction.textCallback)) {
      return rowAction.textCallback({
        row: row.value,
        rowIndex: rowIndex.value,
        rowAction,
      });
    }
    return undefined;
  };

  const getRowActionTitle = ({ rowAction }) => {
    if (rowAction.title) {
      return rowAction.title;
    }
    if (isFunction(rowAction.titleCallback)) {
      return rowAction.titleCallback({
        row: row.value,
        rowIndex: rowIndex.value,
        rowAction,
      });
    }
    return undefined;
  };

  const getRowActionDisabled = ({ rowAction }) => {
    if (rowAction.disabled) {
      return rowAction.disabled;
    }
    if (isFunction(rowAction.disabledCallback)) {
      return rowAction.disabledCallback({
        row: row.value,
        rowIndex: rowIndex.value,
        rowAction,
      });
    }
    return false;
  };

  const getRowActionClass = ({ rowAction }) => {
    if (rowAction.class) {
      return rowAction.class;
    }
    if (isFunction(rowAction.classCallback)) {
      return rowAction.classCallback({
        row: row.value,
        rowIndex: rowIndex.value,
        rowAction,
      });
    }
    return "";
  };

  const getRowActionLinkLeft = ({ rowAction }) => {
    if (rowAction.linkLeft) {
      return rowAction.linkLeft;
    }
    if (isFunction(rowAction.linkLeftCallback)) {
      return rowAction.linkLeftCallback({
        row: row.value,
        rowIndex: rowIndex.value,
        rowAction,
      });
    }
    return undefined;
  };

  const getRowActionLinkRight = ({ rowAction }) => {
    if (rowAction.linkRight) {
      return rowAction.linkRight;
    }
    if (isFunction(rowAction.linkRightCallback)) {
      return rowAction.linkRightCallback({
        row: row.value,
        rowIndex: rowIndex.value,
        rowAction,
      });
    }
    return undefined;
  };

  const getRowActionTo = ({ rowAction }) => {
    if (isString(rowAction.to)) {
      return rowAction.to;
    }
    if (isPlainObject(rowAction.to)) {
      const TO = cloneDeep(rowAction.to);
      const PARAMS = TO.params || {};
      if (rowAction.to.paramsDynamic) {
        let hasParamsDynamicError = false;
        forEach(rowAction.to.paramsDynamic, (value, key) => {
          const PARAMS_VALUE = get(row.value, value);
          if (isUndefined(PARAMS_VALUE)) {
            hasParamsDynamicError = true;
            return false;
          }
          PARAMS[key] = PARAMS_VALUE;
        });
        if (hasParamsDynamicError) {
          return undefined;
        }
      }
      TO.params = PARAMS;
      return TO;
    }
    return undefined;
  };

  const getRowActionHref = ({ rowAction }) => {
    if (rowAction.href) {
      return rowAction.href;
    }
    if (isFunction(rowAction.hrefCallback)) {
      return rowAction.hrefCallback({
        row: row.value,
        rowIndex: rowIndex.value,
        rowAction,
      });
    }
    return false;
  };

  const rowActionsFiltered = computed(() => {
    const ROW_ACTIONS = [];
    forEach(cloneDeep(rowActions.value), rowAction => {
      if (isRowActionVisible({ rowAction })) {
        if (rowAction.type !== "divider") {
          const TEXT = getRowActionText({ rowAction });
          if (TEXT) {
            rowAction.text = TEXT;
          }
          const TITLE = getRowActionTitle({ rowAction });
          if (TITLE) {
            rowAction.title = TITLE;
          }
          const DISABLED = getRowActionDisabled({ rowAction });
          if (DISABLED) {
            rowAction.disabled = DISABLED;
          }
          const CLASS = getRowActionClass({ rowAction });
          if (CLASS) {
            rowAction.class = CLASS;
          }
          const LINK_LEFT = getRowActionLinkLeft({ rowAction });
          if (LINK_LEFT) {
            rowAction.linkLeft = LINK_LEFT;
          }
          const LINK_RIGHT = getRowActionLinkRight({ rowAction });
          if (LINK_RIGHT) {
            rowAction.linkRight = LINK_RIGHT;
          }
          if (rowAction.type === "link") {
            const TO = getRowActionTo({ rowAction });
            if (TO) {
              rowAction.to = TO;
            } else {
              rowAction.href = getRowActionHref({ rowAction });
            }
          }
          if (isFunction(rowAction.callback)) {
            const CALLBACK_DEFAULT = rowAction.callback;
            rowAction.callback = () => CALLBACK_DEFAULT({
              row: row.value,
              rowIndex: rowIndex.value,
              id: buttonActionsId.value,
              rowAction,
            });
          }
        }

        ROW_ACTIONS.push(rowAction);
      }
    });

    return ROW_ACTIONS;
  });

  const isRowActionsDropdownVisible = computed(() => {
    return !isFooter.value && rowActionsFiltered.value.length > 0;
  });

  return {
    buttonActionsId,
    isRowActionsDropdownVisible,
    rowActionsFiltered,
  };
}
