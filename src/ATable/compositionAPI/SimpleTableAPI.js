import {
  computed,
  toRef,
} from "vue";

import AMobileAPI from "../../compositionAPI/AMobileAPI";

export default function SimpleTableAPI(props) {
  const isActionColumnVisible = toRef(props, "isActionColumnVisible");
  const isActionIconVisible = toRef(props, "isActionColumnVisible");
  const isColumnsDnd = toRef(props, "isColumnsDnd");
  const isSimpleTable = toRef(props, "isSimpleTable");
  const modelIsTableWithoutScrollStart = toRef(props, "modelIsTableWithoutScrollStart");
  const rowActions = toRef(props, "rowActions");

  const {
    isMobileWidth,
  } = AMobileAPI();

  const isActionColumnVisibleLocal = computed(() => {
    if (isSimpleTable.value) {
      return rowActions.value && !!rowActions.value.length && isActionColumnVisible.value;
    }

    return isActionIconVisible.value;
  });
  const isActionIconVisibleLocal = computed(() => {
    return !!(isActionIconVisible.value && !isSimpleTable.value);
  });
  const isColumnsDndLocal = computed(() => {
    return !!(isColumnsDnd.value && !isSimpleTable.value);
  });
  const isMobile = computed(() => {
    return !!(isMobileWidth.value && !isSimpleTable.value);
  });
  const modelIsTableWithoutScrollStartLocal = computed(() => {
    return !!(modelIsTableWithoutScrollStart.value && !isSimpleTable.value);
  });

  return {
    isActionColumnVisibleLocal,
    isActionIconVisibleLocal,
    isColumnsDndLocal,
    isMobile,
    modelIsTableWithoutScrollStartLocal,
  };
}
