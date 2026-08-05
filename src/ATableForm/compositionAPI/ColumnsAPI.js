import {
  computed,
  toRef,
} from "vue";


export default function ColumnsAPI(props, {
  isAddRowActive = computed(() => false),
} = {}) {
  const columns = toRef(props, "columns");
  const isDeletable = toRef(props, "isDeletable");
  const isDeletableConfirm = toRef(props, "isDeletableConfirm");
  const isDragAndDrop = toRef(props, "isDragAndDrop");
  const isEditable = toRef(props, "isEditable");
  const rowView = toRef(props, "rowView");

  const hasActionsColumn = computed(() => {
    return !!(isEditable.value || isDeletable.value || isDeletableConfirm.value || isAddRowActive.value);
  });

  const columnsVisible = computed(() => {
    return columns.value.filter(column => column.isRender !== false);
  });

  const allColumnsLength = computed(() => {
    let length = rowView.value === "list" ? 1 : columnsVisible.value.length;
    if (isDragAndDrop.value) {
      length += 1;
    }
    if (hasActionsColumn.value) {
      length += 1;
    }

    return length;
  });

  return {
    allColumnsLength,
    columnsVisible,
    hasActionsColumn,
  };
}
