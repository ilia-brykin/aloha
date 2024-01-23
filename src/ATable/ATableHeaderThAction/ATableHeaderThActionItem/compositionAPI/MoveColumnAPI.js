import {
  computed,
  inject,
  toRef,
} from "vue";

import {
  setFocusToElement,
} from "../../../../utils/utilsDOM";

export default function MoveColumnAPI(props) {
  const columnIndex = toRef(props, "columnIndex");

  const changeColumnsOrdering = inject("changeColumnsOrdering");
  const columnsOrdered = inject("columnsOrdered");
  const tableId = inject("tableId");

  const getArrowButtonId = ({ columnIndex, iconKey }) => {
    return `${ tableId.value }_${ iconKey }_${ columnIndex }`;
  };

  const moveColumnUp = ({ $event }) => {
    $event.stopPropagation();
    const columnIndexOver = columnIndex.value - 1;
    changeColumnsOrdering({
      columnIndexDraggable: columnIndex.value,
      columnIndexOver: columnIndexOver,
    });
    setTimeout(() => {
      setFocusToElement({
        selector: `#${ getArrowButtonId({
          columnIndex: columnIndexOver,
          iconKey: "up",
        }) }`
      });
    });
  };

  const moveColumnDown = ({ $event }) => {
    $event.stopPropagation();
    const columnIndexOver = columnIndex.value + 1;
    changeColumnsOrdering({
      columnIndexDraggable: columnIndex.value,
      columnIndexOver: columnIndexOver,
    });
    setTimeout(() => {
      const NEW_ID = `#${ getArrowButtonId({
        columnIndex: columnIndexOver,
        iconKey: "down",
      }) }`;
      setFocusToElement({
        selector: NEW_ID,
      });
    });
  };

  const idButtonArrowUp = computed(() => {
    return getArrowButtonId({
      columnIndex: columnIndex.value,
      iconKey: "up",
    });
  });

  const idButtonArrowDown = computed(() => {
    return getArrowButtonId({
      columnIndex: columnIndex.value,
      iconKey: "down",
    });
  });

  const isButtonArrowUpVisible = computed(() => {
    return columnIndex.value !== 0 && !columnsOrdered.value[columnIndex.value - 1].locked;
  });

  const isButtonArrowDownVisible = computed(() => {
    return columnsOrdered.value.length - 1 !== columnIndex.value &&
      !columnsOrdered.value[columnIndex.value + 1].locked;
  });

  return {
    idButtonArrowDown,
    idButtonArrowUp,
    isButtonArrowDownVisible,
    isButtonArrowUpVisible,
    moveColumnDown,
    moveColumnUp,
  };
}
