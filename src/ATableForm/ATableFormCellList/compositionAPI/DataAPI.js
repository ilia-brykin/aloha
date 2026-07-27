import {
  computed,
  toRef,
} from "vue";

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
  const isEditable = toRef(props, "isEditable");
  const isEditMode = toRef(props, "isEditMode");

  const dataForm = computed(() => {
    const isRowDisabled = isEditable.value && !isEditMode.value;

    return columns.value.map(column => {
      const ITEM = normalizeItem(column.formElement, {
        isEditMode: isEditMode.value,
        isRowDisabled,
      });

      ITEM.id = column.id;
      if (isNil(ITEM.label)) {
        ITEM.label = column.label;
      }

      return ITEM;
    });
  });

  return {
    dataForm,
  };
}
