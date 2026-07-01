import {
  computed,
  toRef,
} from "vue";

import {
  isFunction,
} from "lodash-es";

export default function ClassAPI(props, {
  hasErrors = computed(() => false),
}) {
  const hasActiveEditRow = toRef(props, "hasActiveEditRow");
  const isActiveEditMode = toRef(props, "isActiveEditMode");
  const isCreateMode = toRef(props, "isCreateMode");
  const isFooter = toRef(props, "isFooter");
  const isHeader = toRef(props, "isHeader");
  const row = toRef(props, "row");
  const rowClass = toRef(props, "rowClass");
  const rowIndex = toRef(props, "rowIndex");
  const trClass = toRef(props, "trClass");

  const rowClassLocal = computed(() => {
    if (isFunction(rowClass.value)) {
      return rowClass.value({
        row: row.value,
        rowIndex: rowIndex.value,
        rowindex: rowIndex.value,
        isCreateMode: isCreateMode.value,
        isFooter: isFooter.value,
        isHeader: isHeader.value,
      });
    }

    return rowClass.value;
  });

  const trClassLocal = computed(() => {
    return [
      trClass.value,
      rowClassLocal.value,
      {
        a_table_form__row_active: !isHeader.value && !isFooter.value && isActiveEditMode.value,
        a_table_form__row_errors: !isHeader.value && !isFooter.value && hasErrors.value,
        a_table_form__row_inactive: !isHeader.value && !isFooter.value &&
          hasActiveEditRow.value && !isActiveEditMode.value,
      },
    ];
  });

  return {
    rowClassLocal,
    trClassLocal,
  };
}
