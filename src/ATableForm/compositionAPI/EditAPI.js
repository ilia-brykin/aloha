import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  setFocusToElement,
} from "../../utils/utilsDOM";
import {
  cloneDeep,
  isFunction,
} from "lodash-es";

export default function EditAPI(props, {
  getRowKey = () => {},
}) {
  const addRow = toRef(props, "addRow");
  const columns = toRef(props, "columns");
  const isAddable = toRef(props, "isAddable");
  const isEditable = toRef(props, "isEditable");
  const prepareEditModel = toRef(props, "prepareEditModel");
  const rows = toRef(props, "rows");

  const activeEditRowKey = ref(undefined);
  const activeEditModel = ref(undefined);
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

  const getPreparedEditModel = params => {
    if (!isFunction(prepareEditModel.value)) {
      return undefined;
    }

    const result = prepareEditModel.value(params);

    if (result?.model === undefined) {
      return undefined;
    }

    return cloneDeep(result.model);
  };

  const onAddRow = () => {
    if (hasActiveEditRow.value || !canAddRow.value) {
      return;
    }

    activeEditRowKey.value = undefined;
    activeEditModel.value = getPreparedEditModel({
      rows: rows.value,
    });
    isAddRowActive.value = true;
  };

  const onCancelEditRow = ({ trigger, id } = {}) => {
    activeEditRowKey.value = undefined;
    activeEditModel.value = undefined;
    isAddRowActive.value = false;
    if (trigger === "cancel") {
      setTimeout(() => {
        setFocusToElement({ selector: `#${ id }_edit` });
      });
    } else if (trigger === "save") {
      setTimeout(() => {
        setFocusToElement({ selector: `#${ id }` });
      });
    }
  };

  const onEditRow = ({ row, rowIndex }) => {
    if (isAddRowActive.value) {
      return;
    }

    activeEditModel.value = getPreparedEditModel({
      row,
      rowIndex,
      rows: rows.value,
    });
    activeEditRowKey.value = getRowKey({
      row,
      rowIndex,
    });
  };

  return {
    activeEditRowKey,
    activeEditModel,
    canAddRow,
    hasActiveEditRow,
    hasRequiredEditableColumns,
    isAddRowActive,
    onAddRow,
    onCancelEditRow,
    onEditRow,
  };
}
