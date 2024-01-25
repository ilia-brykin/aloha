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
} from "../utils/utils";
import {
  isNil,
  isUndefined,
} from "lodash-es";

export default function PreviewAPI(props, context, {
  aTableRef = ref({}),
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
  const emit = context.emit;

  const preview = toRef(props, "preview");
  const tableId = toRef(props, "id");
  const hasPreview = computed(() => {
    return !!preview.value;
  });

  const setFocusToRow = ({ rowIndex }) => {
    setTimeout(() => {
      const ROW_ID = `#${ tableId.value }_${ rowIndex }`;
      setFocusToElement({ selector: ROW_ID });
    });
  };

  const setFocusToPreviewRight = () => {
    setTimeout(() => {
      const PREVIEW_ID = `#${ getPreviewRightId({ tableId: tableId.value }) }`;
      setFocusToElement({ selector: PREVIEW_ID });
    });
  };

  const isPreviewRight = computed(() => {
    return preview.value === "right";
  });
  const previewRightRowIndex = ref(undefined);
  const previewRightRowIndexLast = ref(undefined);
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

  const previewDownRowIndexes = ref({});

  const closePreviewDown = ({ rowIndex }) => {
    previewDownRowIndexes.value[rowIndex] = undefined;
  };

  const closePreviewDownAll = () => {
    previewDownRowIndexes.value = {};
  };

  const closePreviewAll = () => {
    if (isPreviewRight.value) {
      closePreviewRightAll();
    }
    if (isPreviewDown.value) {
      closePreviewDownAll();
    }
  };

  const closePreview = ({ rowIndex } = {}) => {
    if (isPreviewRight.value) {
      closePreviewRight();
    }
    if (isPreviewDown.value) {
      closePreviewDown({ rowIndex });
    }
  };

  const openPreviewRight = ({ rowIndex }) => {
    if (isUndefined(previewRightRowIndex.value)) {
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
  const onTogglePreviewDown = ({ rowIndex }) => {
    if (previewDownRowIndexes.value[rowIndex]) {
      previewDownRowIndexes.value[rowIndex] = undefined;
    } else {
      previewDownRowIndexes.value[rowIndex] = true;
    }
  };

  const onTogglePreview = ({ rowIndex }) => {
    if (isDropdownGlobalOpen.value) {
      return;
    }
    if (isPreviewRight.value) {
      onTogglePreviewRight({ rowIndex });
    }
    if (isPreviewDown.value) {
      onTogglePreviewDown({ rowIndex });
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
    previewDownRowIndexes,
    previewRightRowIndex,
    previewRightRowIndexLast,
    togglePreviewResize,
  };
}
