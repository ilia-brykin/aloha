import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  isFunction,
} from "lodash-es";

export default function EditAPI(props, {
  getRowKey = () => {},
}) {
  const addRow = toRef(props, "addRow");
  const columns = toRef(props, "columns");
  const isAddable = toRef(props, "isAddable");
  const isEditable = toRef(props, "isEditable");

  const activeEditRowKey = ref(undefined);
  const isAddRowActive = ref(false);

  const hasActiveEditRow = computed(() => {
    return !!activeEditRowKey.value || isAddRowActive.value;
  });

  const canAddRow = computed(() => {
    if (!isAddable.value) {
      return false;
    }

    return isFunction(addRow.value);
  });

  const hasRequiredEditableColumns = computed(() => {
    if (!isEditable.value) {
      return false;
    }

    return columns.value.some(column => {
      return !!column.formElement?.required;
    });
  });

  const onAddRow = () => {
    if (hasActiveEditRow.value || !canAddRow.value) {
      return;
    }

    activeEditRowKey.value = undefined;
    isAddRowActive.value = true;
  };

  const onCancelEditRow = () => {
    activeEditRowKey.value = undefined;
    isAddRowActive.value = false;
  };

  const onEditRow = ({ row, rowIndex }) => {
    if (isAddRowActive.value) {
      return;
    }

    activeEditRowKey.value = getRowKey({
      row,
      rowIndex,
    });
  };

  return {
    activeEditRowKey,
    canAddRow,
    hasActiveEditRow,
    hasRequiredEditableColumns,
    isAddRowActive,
    onAddRow,
    onCancelEditRow,
    onEditRow,
  };
}
