import {
  onUnmounted,
  ref,
  toRef,
} from "vue";

import PreviewRightRewAPI from "./PreviewRightRewAPI";

import {
  get,
} from "lodash-es";

export default function PreviewRightResizeAPI(props, { emit }, {
  aTableRef = ref({}),
}) {
  const {
    previewRef,
    removePreviewRef,
  } = PreviewRightRewAPI();

  const previewBoxWidth = toRef(props, "previewBoxWidth");
  const PREVIEW_BOX_MIN_WIDTH_PX = 200;
  const PREVIEW_BOX_MAX_WIDTH_PERCENT = 50;
  let previewBoxMaxWidthPx = undefined;
  let clientWidthLocal = 0;
  let clientXTableParent = 0;

  const setClientXTableParent = () => {
    const rectTableParent = aTableRef.value.getBoundingClientRect();
    clientXTableParent = rectTableParent.left;
  };
  const mousedownResizePreviewRight = ({ clientWidth }) => {
    clientWidthLocal = clientWidth;
    previewBoxMaxWidthPx = clientWidth / 100 * PREVIEW_BOX_MAX_WIDTH_PERCENT;
    setClientXTableParent();
  };

  const setTableParentWidth = ({ clientWidthLocal, clientXTableParent, previewBoxWidth }) => {
    const TABLE_PARENT_WIDTH = clientWidthLocal - clientXTableParent - previewBoxWidth;
    aTableRef.value.style.width = `${ TABLE_PARENT_WIDTH }px`;
  };

  const mousemoveResizePreviewRight = ({ clientX = 0, previewRef, previewBoxWidth = 0 }) => {
    let previewBoxWidthLocal = previewBoxWidth || clientWidthLocal - clientX;
    if (previewBoxWidthLocal < PREVIEW_BOX_MIN_WIDTH_PX) {
      previewBoxWidthLocal = PREVIEW_BOX_MIN_WIDTH_PX;
    } else if (previewBoxWidthLocal > previewBoxMaxWidthPx) {
      previewBoxWidthLocal = previewBoxMaxWidthPx;
    }
    setTableParentWidth({ clientWidthLocal, clientXTableParent, previewBoxWidth: previewBoxWidthLocal });
    previewRef.style.width = `${ previewBoxWidthLocal }px`;
  };

  const closePreviewResize = ({ previewRef }) => {
    if (get(previewRef, "style.removeProperty")) {
      previewRef.style.removeProperty("width");
    }
    if (get(aTableRef, "value.style.removeProperty")) {
      aTableRef.value.style.removeProperty("width");
    }
  };

  const openPreviewResize = ({ previewRef }) => {
    clientWidthLocal = document.documentElement.clientWidth;
    setClientXTableParent();
    mousemoveResizePreviewRight({
      previewRef,
      previewBoxWidth: previewBoxWidth.value,
    });
  };

  const togglePreviewResize = ({ previewRef, isOpen }) => {
    if (isOpen) {
      openPreviewResize({ previewRef });
    } else {
      closePreviewResize({ previewRef });
    }
  };

  const mouseupResizePreviewRight = ({ previewRightWidth }) => {
    emit("mouseupResizePreviewRight", { previewRightWidth });
  };

  const correctTableUndPreviewWidth = () => {
    openPreviewResize({
      previewRef: previewRef.value,
    });
  };

  const addEventListenerWindowResize = () => {
    window.addEventListener("resize", correctTableUndPreviewWidth);
  };

  const removeEventListenerWindowResize = () => {
    window.removeEventListener("resize", correctTableUndPreviewWidth);
  };

  onUnmounted(() => {
    removePreviewRef();
    removeEventListenerWindowResize();
  });

  return {
    addEventListenerWindowResize,
    mousedownResizePreviewRight,
    mousemoveResizePreviewRight,
    mouseupResizePreviewRight,
    removeEventListenerWindowResize,
    togglePreviewResize,
  };
}
