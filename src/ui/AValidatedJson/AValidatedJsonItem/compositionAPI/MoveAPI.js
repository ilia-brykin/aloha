import {
  computed,
  toRef,
} from "vue";

export default function MoveAPI(props, { emit }) {
  const deactivateOrdering = toRef(props, "deactivateOrdering");
  const hidePosition = toRef(props, "hidePosition");
  const isLast = toRef(props, "isLast");
  const modelIndex = toRef(props, "modelIndex");
  const parentHtmlId = toRef(props, "parentHtmlId");

  const btnMoveUpId = computed(() => {
    return `${ parentHtmlId.value }_btn_move_up_${ modelIndex.value }`;
  });

  const btnMoveDownId = computed(() => {
    return `${ parentHtmlId.value }_btn_move_down_${ modelIndex.value }`;
  });

  const canMove = computed(() => {
    return !deactivateOrdering.value && !hidePosition.value;
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
