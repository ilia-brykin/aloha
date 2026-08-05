import {
  isFunction,
} from "lodash-es";

export default function getFormElement({
  column,
  columnIndex,
  isCreateMode,
  isEditMode,
  row,
  rowData,
  rowIndex,
  rows,
}) {
  const formElement = column?.formElement || {};

  if (!isEditMode || isCreateMode || !isFunction(column?.formElementEditPropsCallback)) {
    return formElement;
  }

  return {
    ...formElement,
    ...column.formElementEditPropsCallback({
      column,
      columnIndex,
      row,
      rowData,
      rowIndex,
      rows,
    }),
  };
}
