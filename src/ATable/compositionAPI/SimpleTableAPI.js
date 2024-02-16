import {
  computed,
  toRef,
} from "vue";

import AMobileAPI from "../../compositionAPI/AMobileAPI";

export default function SimpleTableAPI(props) {
  const isActionIconVisible = toRef(props, "isActionColumnVisible");
  const isColumnsDnd = toRef(props, "isColumnsDnd");
  const isSimpleTable = toRef(props, "isSimpleTable");
  const modelIsTableWithoutScrollStart = toRef(props, "modelIsTableWithoutScrollStart");

  const {
    isMobileWidth,
  } = AMobileAPI();

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
    isActionIconVisibleLocal,
    isColumnsDndLocal,
    isMobile,
    modelIsTableWithoutScrollStartLocal,
  };
}
