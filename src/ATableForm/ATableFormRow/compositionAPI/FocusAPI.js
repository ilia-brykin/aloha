import {
  computed,
} from "vue";

import {
  focusableSelector,
} from "../../../const/AFocusableElements";


export default function FocusAPI({
  idTr = computed(() => ""),
}) {
  const focusFirstEditableElement = () => {
    const rowElement = document.getElementById(idTr.value);

    if (!rowElement) {
      return;
    }

    const editableCells = Array.from(
      rowElement.querySelectorAll(".a_table_form__cell:not(.a_table_form__cell_actions)"),
    );
    const firstFocusableElement = editableCells
      .map(cell => cell.querySelector(focusableSelector))
      .find(Boolean);

    firstFocusableElement?.focus();
  };

  const focusEditableElementByColumnId = columnId => {
    if (!columnId) {
      return false;
    }

    const rowElement = document.getElementById(idTr.value);
    const cellElement = Array.from(rowElement?.querySelectorAll("[data-column-id]") || [])
      .find(cell => cell.dataset.columnId === `${ columnId }`);
    const elementById = document.getElementById(`${ idTr.value }${ columnId }`);
    const focusableElement = cellElement?.querySelector(focusableSelector) ||
      (elementById?.matches(focusableSelector) ? elementById : elementById?.querySelector(focusableSelector));

    if (!focusableElement) {
      return false;
    }

    focusableElement.focus();

    return true;
  };

  return {
    focusEditableElementByColumnId,
    focusFirstEditableElement,
  };
}
