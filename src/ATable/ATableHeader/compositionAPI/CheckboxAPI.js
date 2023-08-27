import {
  computed,
  toRef,
} from "vue";

export default function CheckboxAPI(props, { emit }) {
  const areAllRowsSelected = toRef(props, "areAllRowsSelected");
  const areAllVisibleRowsSelected = toRef(props, "areAllVisibleRowsSelected");
  const areSomeRowsSelected = toRef(props, "areSomeRowsSelected");
  const rowsLocalLength = toRef(props, "rowsLocalLength");

  const isCheckboxDisabled = computed(() => {
    return !!(rowsLocalLength.value === 0 ||
      areAllRowsSelected.value);
  });

  const isCheckboxIndeterminate = computed(() => {
    return areSomeRowsSelected.value &&
      !(areAllVisibleRowsSelected.value ||
        areAllRowsSelected.value);
  });

  const modelValueCheckboxLocal = computed(() => {
    return areAllVisibleRowsSelected.value ||
      areAllRowsSelected.value;
  });

  const labelCheckbox = computed(() => {
    return isCheckboxIndeterminate.value || modelValueCheckboxLocal.value ?
      "_A_TABLE_DESELECT_ALL_VISIBLE_POSSIBLE_ROWS_" : "_A_TABLE_SELECT_ALL_VISIBLE_POSSIBLE_ROWS_";
  });

  const toggleCheckbox = () => {
    if (isCheckboxDisabled.value) {
      return;
    }
    emit("setSelectedRowsIndexes", { isAll: true });
  };

  return {
    isCheckboxDisabled,
    isCheckboxIndeterminate,
    labelCheckbox,
    modelValueCheckboxLocal,
    toggleCheckbox,
  };
}
