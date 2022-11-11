import {
  computed,
  inject,
  ref,
} from "vue";

import {
  isNil,
} from "lodash-es";


export default function DragAndDropParentAPI({
  classOver = "",
  classOverRight = "",
  classOverParent = "",
}) {
  const root = ref(undefined);
  const columnIndexDraggable = ref(undefined);
  const columnIndexOver = ref(undefined);

  const changeColumnsOrdering = inject("changeColumnsOrdering");

  const isDragstart = computed(() => {
    return !isNil(columnIndexDraggable.value);
  });

  const dragstart = ({ columnIndex }) => {
    columnIndexDraggable.value = columnIndex;
  };

  const dragenter = ({ columnIndex }) => {
    columnIndexOver.value = columnIndex;
  };

  const dragleave = ({ columnIndex }) => {
    if (columnIndexOver.value === columnIndex) {
      columnIndexOver.value = undefined;
    }
  };

  const drop = $event => {
    if (isNil(columnIndexDraggable.value) || isNil(columnIndexOver.value)) {
      return;
    }
    changeColumnsOrdering({
      columnIndexDraggable: columnIndexDraggable.value,
      columnIndexOver: columnIndexOver.value,
    });
    $event.stopPropagation();
    return false;
  };

  const removeClassOverFromChildren = () => {
    const CHILDREN = root.value.querySelectorAll(`.${ classOverParent }`);
    CHILDREN.forEach(child => {
      child.classList.remove(classOver);
      child.classList.remove(classOverRight);
    });
  };

  const dragend = () => {
    removeClassOverFromChildren();
    columnIndexDraggable.value = undefined;
  };


  return {
    columnIndexDraggable,
    dragstart,
    dragenter,
    dragleave,
    dragend,
    drop,
    isDragstart,
    root,
  };
}
