import {
  computed,
  ref,
  toRef,
} from "vue";

import PreviewRightResizeAPI from "./PreviewRightResizeAPI";

import {
  setFocusToElement,
} from "../../utils/utils";
import {
  isNil,
} from "lodash-es";

export default function PreviewAPI(props, {
  aTableRef = ref({}),
}) {
  const {
    mousedownResizePreviewRight,
    mousemoveResizePreviewRight,
    togglePreviewResize,
  } = PreviewRightResizeAPI(props, {
    aTableRef,
  });

  const preview = toRef(props, "preview");
  const tableId = toRef(props, "id");
  const hasPreview = computed(() => {
    return !!preview.value;
  });

  const setFocusToRow = ({ rowIndex }) => {
    setTimeout(() => {
      const ROW_ID = `#${ tableId.value }_${ rowIndex }`;
      setFocusToElement(ROW_ID);
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
    previewRightRowIndexLast.value = previewRightRowIndex.value;
    previewRightRowIndex.value = undefined;
  };
  const closePreviewRightAll = () => {
    previewRightRowIndexLast.value = undefined;
    previewRightRowIndex.value = undefined;
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
  const onTogglePreviewRight = ({ rowIndex }) => {
    if (previewRightRowIndex.value === rowIndex) {
      closePreviewRight();
    } else {
      previewRightRowIndex.value = rowIndex;
      previewRightRowIndexLast.value = undefined;
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
    onTogglePreview,
    previewDownRowIndexes,
    previewRightRowIndex,
    previewRightRowIndexLast,
    togglePreviewResize,
  };
}
