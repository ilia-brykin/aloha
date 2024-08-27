import {
  computed,
  ref,
  toRef,
} from "vue";

import AMobileAPI from "../../compositionAPI/AMobileAPI";

export default function SimpleTableAPI(props) {
  const hasMobile = toRef(props, "hasMobile");
  const isActionColumnVisible = toRef(props, "isActionColumnVisible");
  const isActionIconVisible = toRef(props, "isActionColumnVisible");
  const isColumnsDnd = toRef(props, "isColumnsDnd");
  const isSimpleTable = toRef(props, "isSimpleTable");
  const modelIsTableWithoutScrollStart = toRef(props, "modelIsTableWithoutScrollStart");
  const rowActions = toRef(props, "rowActions");

  const modelIsTableWithoutScroll = ref(modelIsTableWithoutScrollStart.value);

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
    if (!hasMobile.value) {
      return false;
    }

    return !!(isMobileWidth.value);
  });

  const modelIsTableWithoutScrollComputed = computed(() => {
    if (isSimpleTable.value) {
      return false;
    }

    return modelIsTableWithoutScroll.value;
  });

  return {
    isActionColumnVisibleLocal,
    isActionIconVisibleLocal,
    isColumnsDndLocal,
    isMobile,
    modelIsTableWithoutScroll,
    modelIsTableWithoutScrollComputed,
  };
}
