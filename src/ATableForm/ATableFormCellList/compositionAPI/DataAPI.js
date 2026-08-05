import {
  computed,
  toRef,
} from "vue";

import getFormElement from "../../utils/getFormElement";
import {
  cloneDeep,
  isNil,
} from "lodash-es";

function normalizeItem(item, {
  isEditMode,
  isRowDisabled,
} = {}) {
  const ITEM = cloneDeep(item || {});

  if (ITEM.useRowReadonly) {
    ITEM.readonly = !isEditMode;
  }

  if (ITEM.children?.length) {
    ITEM.children = ITEM.children.map(child => normalizeItem(child, {
      isEditMode,
    }));
  }

  if (isRowDisabled) {
    ITEM.disabled = true;
  }

  return ITEM;
}

export default function DataAPI(props) {
  const columns = toRef(props, "columns");
  const isCreateMode = toRef(props, "isCreateMode");
  const isEditable = toRef(props, "isEditable");
  const isEditMode = toRef(props, "isEditMode");
  const row = toRef(props, "row");
  const rowData = toRef(props, "rowData");
  const rowIndex = toRef(props, "rowIndex");
  const rows = toRef(props, "rows");

  const dataForm = computed(() => {
    const isRowDisabled = isEditable.value && !isEditMode.value;

    return columns.value.map((column, columnIndex) => {
      const formElement = getFormElement({
        column,
        columnIndex,
        isCreateMode: isCreateMode.value,
        isEditMode: isEditMode.value,
        row: row.value,
        rowData: rowData.value || row.value,
        rowIndex: rowIndex.value,
        rows: rows.value,
      });
      const ITEM = normalizeItem(formElement, {
        isEditMode: isEditMode.value,
        isRowDisabled,
      });

      ITEM.id = column.id;
      if (isNil(ITEM.label)) {
        ITEM.label = column.label;
      }
      ITEM["data-column-id"] = column.id;

      return ITEM;
    });
  });

  return {
    dataForm,
  };
}
