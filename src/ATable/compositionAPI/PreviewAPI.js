import {
  computed,
  ref,
  toRef,
} from "vue";

import ADropdownGlobalAPI from "../../compositionAPI/ADropdownGlobalAPI";
import PreviewRightResizeAPI from "./PreviewRightResizeAPI";

import {
  setFocusToElement,
} from "../../utils/utilsDOM";
import {
  getPreviewRightId,
  getRowIdOrIndex,
} from "../utils/utils";
import {
  isNil,
  isUndefined,
} from "lodash-es";

export default function PreviewAPI(props, context, {
  aTableRef = ref({}),
  isMobile = ref(undefined),
  rowsLocalAll = computed(() => []),
  tableGrandparentRef = ref({}),
}) {
  const {
    isDropdownGlobalOpen,
  } = ADropdownGlobalAPI();

  const {
    addEventListenerWindowResize,
    mousedownResizePreviewRight,
    mousemoveResizePreviewRight,
    mouseupResizePreviewRight,
    removeEventListenerWindowResize,
    togglePreviewResize,
  } = PreviewRightResizeAPI(props, context, {
    aTableRef,
    tableGrandparentRef,
  });
  const keyId = toRef(props, "keyId");
  const preview = toRef(props, "preview");
  const tableId = toRef(props, "id");

  const emit = context.emit;
  const previewDownRowIds = ref({});
  const previewRightRowIndex = ref(undefined);
  const previewRightRowIndexLast = ref(undefined);

  const hasPreview = computed(() => {
    return !!preview.value;
  });

  const setFocusToRow = ({ rowIndex }) => {
    if (window.isScrollDisabled) { // for autotests
      return;
    }

    setTimeout(() => {
      const ROW_ID = `#${ tableId.value }_${ rowIndex }`;
      setFocusToElement({ selector: ROW_ID });
    });
  };

  const setFocusToPreviewRight = () => {
    if (window.isScrollDisabled) { // for autotests
      return;
    }

    setTimeout(() => {
      const PREVIEW_ID = `#${ getPreviewRightId({ tableId: tableId.value }) }`;
      setFocusToElement({ selector: PREVIEW_ID });
    });
  };

  const isPreviewRight = computed(() => {
    return preview.value === "right" || isMobile.value;
  });

  const isPreviewRightOpen = computed(() => {
    return !isNil(previewRightRowIndex.value);
  });

  const closePreviewRight = () => {
    setFocusToRow({
      rowIndex: previewRightRowIndex.value,
    });
    emit("togglePreview", {
      row: rowsLocalAll.value[previewRightRowIndex.value],
      rowIndex: previewRightRowIndex.value,
      typeToggle: "close",
    });
    previewRightRowIndexLast.value = previewRightRowIndex.value;
    previewRightRowIndex.value = undefined;
    removeEventListenerWindowResize();
  };

  const closePreviewRightAll = () => {
    emit("togglePreview", {
      row: rowsLocalAll.value[previewRightRowIndex.value],
      rowIndex: previewRightRowIndex.value,
      typeToggle: "close",
    });
    previewRightRowIndexLast.value = undefined;
    previewRightRowIndex.value = undefined;
    removeEventListenerWindowResize();
  };

  const isPreviewDown = computed(() => {
    return preview.value === "down";
  });

  const closePreviewDown = ({ rowIndex, row }) => {
    const ID = getRowIdOrIndex({ row, rowIndex, keyId: keyId.value });

    delete previewDownRowIds.value[ID];
  };

  const closePreviewDownAll = () => {
    previewDownRowIds.value = {};
  };

  const closePreviewAll = () => {
    closePreviewRightAll();
    closePreviewDownAll();
  };

  const closePreview = ({ rowIndex, row } = {}) => {
    if (isPreviewRight.value) {
      closePreviewRight();
    } else if (isPreviewDown.value) {
      closePreviewDown({ rowIndex, row });
    }
  };

  const openPreviewRight = ({ rowIndex }) => {
    if (!isMobile.value && isUndefined(previewRightRowIndex.value)) {
      addEventListenerWindowResize();
    }
    emit("togglePreview", {
      row: rowsLocalAll.value[rowIndex],
      rowIndex: rowIndex,
      typeToggle: "open",
    });
    previewRightRowIndex.value = rowIndex;
    previewRightRowIndexLast.value = undefined;

    setFocusToPreviewRight();
  };

  const onTogglePreviewRight = ({ rowIndex }) => {
    if (previewRightRowIndex.value === rowIndex) {
      closePreviewRight();
    } else {
      openPreviewRight({ rowIndex });
    }
  };

  const onTogglePreviewDown = ({ rowIndex, row }) => {
    const ID = getRowIdOrIndex({ row, rowIndex, keyId: keyId.value });

    if (previewDownRowIds.value[ID]) {
      delete previewDownRowIds.value[ID];
    } else {
      previewDownRowIds.value[ID] = true;
    }
  };

  const onTogglePreview = ({ row, rowIndex }) => {
    if (isDropdownGlobalOpen.value) {
      return;
    }
    if (isPreviewRight.value) {
      onTogglePreviewRight({ rowIndex });
      return;
    }
    if (isPreviewDown.value) {
      onTogglePreviewDown({ row, rowIndex });
    }
  };

  return {
    closePreview,
    closePreviewAll,
    hasPreview,
    isPreviewRightOpen,
    mousedownResizePreviewRight,
    mousemoveResizePreviewRight,
    mouseupResizePreviewRight,
    onTogglePreview,
    previewDownRowIds,
    previewRightRowIndex,
    previewRightRowIndexLast,
    togglePreviewResize,
  };
}
