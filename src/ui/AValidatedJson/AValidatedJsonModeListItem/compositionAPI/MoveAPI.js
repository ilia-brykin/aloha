import {
  computed,
  toRef,
} from "vue";

export default function MoveAPI(props, { emit }) {
  const isLast = toRef(props, "isLast");
  const modelIndex = toRef(props, "modelIndex");
  const modeOptions = toRef(props, "modeOptions");
  const parentId = toRef(props, "parentId");

  // deactivateOrdering
  const btnMoveUpId = computed(() => {
    return `${ parentId.value }_btn_move_up_${ modelIndex.value }`;
  });

  const btnMoveDownId = computed(() => {
    return `${ parentId.value }_btn_move_down_${ modelIndex.value }`;
  });

  const canMove = computed(() => {
    return !modeOptions.value.deactivateOrdering && !modeOptions.value.hidePosition;
  });

  const disabledMoveUp = computed(() => {
    return modelIndex.value === 0;
  });

  const disabledMoveDown = computed(() => {
    return isLast.value;
  });

  const moveUp = () => {
    emit("move", { action: "up", index: modelIndex.value });
  };

  const moveDown = () => {
    emit("move", { action: "down", index: modelIndex.value });
  };

  return {
    btnMoveDownId,
    btnMoveUpId,
    canMove,
    disabledMoveDown,
    disabledMoveUp,
    moveDown,
    moveUp,
  };
}
