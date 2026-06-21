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

  return {
    focusFirstEditableElement,
  };
}
