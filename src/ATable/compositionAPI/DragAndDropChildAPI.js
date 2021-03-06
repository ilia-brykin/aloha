import {
  computed,
  inject,
  ref,
  toRef,
} from "vue";

export default function DragAndDropChildAPI(props, { emit }, { classOver = "" }) {
  const column = toRef(props, "column");
  const columnIndex = toRef(props, "columnIndex");

  const isLoadingOptions = inject("isLoadingOptions");

  const root = ref(null);

  const dragstart = $event => {
    $event.target.style.opacity = "0.4";
    $event.dataTransfer.effectAllowed = "move";
    emit("dragstartParent", {
      columnIndex: columnIndex.value,
    });
  };

  const dragend = $event => {
    $event.target.style.opacity = "1";
    $event.target.classList.remove(classOver);
    emit("dragendParent");
  };

  const dragenter = () => {
    root.value.classList.add(classOver);
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
    root.value.classList.remove(classOver);
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
    if (!isLocked.value) {
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
