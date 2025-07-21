import {
  computed,
  toRef,
} from "vue";

import ARemPxAPI from "../../compositionAPI/ARemPxAPI";

export default function WidthAPI(props) {
  const columnActionsWidth = toRef(props, "columnActionsWidth");
  const columnActionsWidthDefaults = toRef(props, "columnActionsWidthDefaults");
  const columnActionsWidthMin = toRef(props, "columnActionsWidthMin");
  const columnWidthDefault = toRef(props, "columnWidthDefault");
  const previewBoxWidth = toRef(props, "previewBoxWidth");
  const useRem = toRef(props, "useRem");

  const {
    scalePxWithRem,
  } = ARemPxAPI();

  const columnActionsWidthRemLocal = computed(() => {
    if (useRem.value) {
      return scalePxWithRem(columnActionsWidth.value);
    }

    return columnActionsWidth.value;
  });

  const columnActionsWidthMinRemLocal = computed(() => {
    if (useRem.value) {
      return scalePxWithRem(columnActionsWidthMin.value);
    }

    return columnActionsWidthMin.value;
  });

  const columnWidthDefaultRemLocal = computed(() => {
    if (useRem.value) {
      return scalePxWithRem(columnWidthDefault.value);
    }

    return columnWidthDefault.value;
  });

  const previewBoxWidthRemLocal = computed(() => {
    if (useRem.value) {
      return scalePxWithRem(previewBoxWidth.value);
    }

    return previewBoxWidth.value;
  });

  const columnActionsWidthDefaultsRemLocal = computed(() => {
    if (useRem.value) {
      return {
        default: scalePxWithRem(columnActionsWidthDefaults.value.default || 170),
        min: scalePxWithRem(columnActionsWidthDefaults.value.min || 50),
        onePlusDropdown: scalePxWithRem(columnActionsWidthDefaults.value.onePlusDropdown || 320),
        onePlusDropdownMin: scalePxWithRem(columnActionsWidthDefaults.value.onePlusDropdownMin || 200),
        btnGroupMaxWidth: scalePxWithRem(columnActionsWidthDefaults.value.btnGroupMaxWidth || 180),
      };
    }

    return columnActionsWidthDefaults.value;
  });

  return {
    columnActionsWidthDefaultsRemLocal,
    columnActionsWidthMinRemLocal,
    columnActionsWidthRemLocal,
    columnWidthDefaultRemLocal,
    previewBoxWidthRemLocal,
  };
}
