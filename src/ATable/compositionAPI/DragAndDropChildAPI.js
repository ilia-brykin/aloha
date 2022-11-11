import {
  computed,
  inject,
  ref,
  toRef,
} from "vue";

export default function DragAndDropChildAPI(props, { emit }, {
  classOverString = "",
}) {
  const column = toRef(props, "column");
  const columnIndex = toRef(props, "columnIndex");
  const columnIndexDraggable = toRef(props, "columnIndexDraggable");

  const isLoadingOptions = inject("isLoadingOptions");
  const isColumnsDnd = inject("isColumnsDnd");

  const root = ref(null);

  const classOver = computed(() => {
    if (columnIndexDraggable.value > columnIndex.value) {
      return classOverString;
    }
    return `${ classOverString }_right`;
  });

  const dragstart = $event => {
    $event.target.style.opacity = "0.4";
    $event.dataTransfer.effectAllowed = "move";
    emit("dragstartParent", {
      columnIndex: columnIndex.value,
    });
  };

  const dragend = $event => {
    $event.target.style.opacity = "1";
    $event.target.classList.remove(classOver.value);
    emit("dragendParent");
  };

  const dragenter = () => {
    if (root.value && root.value.classList) {
      root.value.classList.add(classOver.value);
    }
    emit("dragenterParent", {
      columnIndex: columnIndex.value,
    });
  };

  const dragover = $event => {
    if ($event.preventDefault) {
      $event.preventDefault();
    }
    return false;
  };

  const dragleave = () => {
    if (root.value && root.value) {
      root.value.classList.remove(classOver.value);
    }
    emit("dragleaveParent", {
      columnIndex: columnIndex.value,
    });
  };

  const isLocked = computed(() => {
    return !!column.value.locked;
  });

  const attributesForRoot = computed(() => {
    const ATTRIBUTES = {
      ref: "root",
    };
    if (!isLocked.value && isColumnsDnd.value) {
      ATTRIBUTES.draggable = !isLoadingOptions.value;
      ATTRIBUTES.onDragstart = dragstart;
      ATTRIBUTES.onDragend = dragend;
      ATTRIBUTES.onDragenter = dragenter;
      ATTRIBUTES.onDragover = dragover;
      ATTRIBUTES.onDragleave = dragleave;
    }
    return ATTRIBUTES;
  });

  return {
    attributesForRoot,
    isLocked,
    root,
  };
}
