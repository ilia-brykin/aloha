import {
  computed,
  nextTick,
  ref,
  toRef,
} from "vue";

import {
  setFocusToElement,
} from "../../utils/utilsDOM";

export default function DragAndDropAPI(props, { emit }, {
  isDndDisabled = computed(() => false),
} = {}) {
  const focusAfterMove = toRef(props, "focusAfterMove");
  const id = toRef(props, "id");
  const isDragAndDrop = toRef(props, "isDragAndDrop");
  const rows = toRef(props, "rows");

  const draggedRowIndex = ref(undefined);
  const dragOverRowIndex = ref(undefined);
  const dragOverPosition = ref(undefined);
  const dragPreviewElement = ref(undefined);

  const removeDragPreview = () => {
    dragPreviewElement.value?.remove();
    dragPreviewElement.value = undefined;
  };

  const createDragPreview = $event => {
    const rowElement = $event.target?.closest?.("tr");

    if (!rowElement) {
      return undefined;
    }

    const rowRect = rowElement.getBoundingClientRect();
    const previewTable = document.createElement("table");
    const previewBody = document.createElement("tbody");
    const previewRow = rowElement.cloneNode(true);

    previewTable.className = "a_table_form__table";
    previewTable.style.borderCollapse = "collapse";
    previewTable.style.borderSpacing = "0";
    previewTable.style.width = `${ rowRect.width }px`;
    previewTable.style.tableLayout = "fixed";

    Array.from(rowElement.children).forEach((cell, index) => {
      const previewCell = previewRow.children[index];

      if (previewCell) {
        const cellStyles = window.getComputedStyle(cell);

        previewCell.style.width = `${ cell.getBoundingClientRect().width }px`;
        previewCell.style.backgroundColor = cellStyles.backgroundColor;
        previewCell.style.borderTop = cellStyles.borderTop;
        previewCell.style.borderRight = cellStyles.borderRight;
        previewCell.style.borderBottom = cellStyles.borderBottom;
        previewCell.style.borderLeft = cellStyles.borderLeft;
        previewCell.style.color = cellStyles.color;
      }
    });

    previewBody.appendChild(previewRow);
    previewTable.appendChild(previewBody);

    const previewWrapper = document.createElement("div");
    previewWrapper.className = "a_table_form a_table_form__drag_preview";
    previewWrapper.style.position = "fixed";
    previewWrapper.style.top = "-10000px";
    previewWrapper.style.left = "-10000px";
    previewWrapper.style.pointerEvents = "none";
    previewWrapper.style.zIndex = "9999";
    previewWrapper.appendChild(previewTable);

    document.body.appendChild(previewWrapper);
    dragPreviewElement.value = previewWrapper;

    return {
      element: previewWrapper,
      offsetX: Math.min($event.offsetX || 0, rowRect.width / 2),
      offsetY: Math.min($event.offsetY || 0, rowRect.height / 2),
    };
  };

  const moveRow = ({ focusId, fromIndex, toIndex, trigger }) => {
    if (!isDragAndDrop.value ||
      isDndDisabled.value ||
      fromIndex === toIndex ||
      fromIndex < 0 ||
      toIndex < 0 ||
      fromIndex >= rows.value.length ||
      toIndex >= rows.value.length) {
      return;
    }

    const ROWS_LOCAL = [...rows.value];
    const [movedRow] = ROWS_LOCAL.splice(fromIndex, 1);
    ROWS_LOCAL.splice(toIndex, 0, movedRow);

    emit("updateRows", { focusId, rows: ROWS_LOCAL, trigger, fromIndex, toIndex });
    emit("moveRow", {
      focusId,
      fromIndex,
      row: movedRow,
      toIndex,
    });
  };

  const moveRowToPosition = ({ fromIndex, rowIndex, position = "before" }) => {
    if (!isDragAndDrop.value ||
      isDndDisabled.value ||
      fromIndex < 0 ||
      rowIndex < 0 ||
      fromIndex >= rows.value.length ||
      rowIndex >= rows.value.length) {
      return;
    }

    let insertIndex = position === "after" ? rowIndex + 1 : rowIndex;

    if (fromIndex < insertIndex) {
      insertIndex -= 1;
    }

    moveRow({
      fromIndex,
      toIndex: insertIndex,
      trigger: "dnd",
    });
  };

  const setFocusAfterMoveLocal = ({ focusId }) => {
    if (!focusAfterMove.value) {
      return;
    }

    nextTick().then(
      () => {
        setFocusToElement({ selector: `#${ focusId }` });
      },
    );
  };

  const moveRowUp = rowIndex => {
    const focusIndex = Math.max(1, rowIndex - 1);
    const focusId = `${ id.value }_${ focusIndex }_up`;
    moveRow({
      focusId,
      fromIndex: rowIndex,
      toIndex: rowIndex - 1,
      trigger: "moveRowUp",
    });

    setFocusAfterMoveLocal({ focusId });
  };

  const moveRowDown = rowIndex => {
    const focusIndex = Math.min(rows.value.length - 2, rowIndex + 1);
    const focusId = `${ id.value }_${ focusIndex }_down`;
    moveRow({
      focusId,
      fromIndex: rowIndex,
      toIndex: rowIndex + 1,
      trigger: "moveRowDown",
    });

    setFocusAfterMoveLocal({ focusId });
  };

  const onDragstart = ($event, rowIndex) => {
    if (!isDragAndDrop.value || isDndDisabled.value) {
      return;
    }

    if ($event?.dataTransfer) {
      $event.dataTransfer.effectAllowed = "move";
      $event.dataTransfer.setData("text/plain", `${ rowIndex }`);
      removeDragPreview();

      const preview = createDragPreview($event);
      if (preview) {
        $event.dataTransfer.setDragImage(preview.element, preview.offsetX, preview.offsetY);
      }
    }

    draggedRowIndex.value = rowIndex;
  };

  const onDragover = ($event, rowIndex) => {
    if (!isDragAndDrop.value || isDndDisabled.value) {
      return;
    }

    $event.preventDefault();

    const rect = $event.currentTarget?.getBoundingClientRect?.();
    if (rect) {
      const middleY = rect.top + rect.height / 2;
      dragOverPosition.value = $event.clientY < middleY ? "before" : "after";
    } else {
      dragOverPosition.value = "after";
    }

    dragOverRowIndex.value = rowIndex;
  };

  const onDragleave = ($event, rowIndex) => {
    if (!isDragAndDrop.value || isDndDisabled.value) {
      return;
    }

    const relatedTarget = $event.relatedTarget;
    if ($event.currentTarget?.contains?.(relatedTarget)) {
      return;
    }

    if (dragOverRowIndex.value === rowIndex) {
      dragOverRowIndex.value = undefined;
      dragOverPosition.value = undefined;
    }
  };

  const onDrop = ($event, rowIndex) => {
    if (!isDragAndDrop.value || isDndDisabled.value) {
      return;
    }

    $event.preventDefault();

    if (draggedRowIndex.value === undefined) {
      return;
    }

    moveRowToPosition({
      fromIndex: draggedRowIndex.value,
      position: dragOverPosition.value || "after",
      rowIndex,
    });

    removeDragPreview();
    draggedRowIndex.value = undefined;
    dragOverRowIndex.value = undefined;
    dragOverPosition.value = undefined;
  };

  const onDragend = () => {
    removeDragPreview();
    draggedRowIndex.value = undefined;
    dragOverRowIndex.value = undefined;
    dragOverPosition.value = undefined;
  };

  return {
    canMoveRowDown: computed(() => rowIndex => rowIndex < rows.value.length - 1),
    canMoveRowUp: computed(() => rowIndex => rowIndex > 0),
    dragOverPosition,
    dragOverRowIndex,
    draggedRowIndex,
    onDragleave,
    moveRowDown,
    moveRowUp,
    onDragend,
    onDragover,
    onDragstart,
    onDrop,
  };
}
