import {
  computed,
  toRef,
} from "vue";

import {
  isNil,
} from "lodash-es";

export default function ArrowsAPI(props, { emit }, {
  nextAvailableRowIndex,
  previousAvailableRowIndex,
  rowNumber = computed(() => 0),
}) {
  const countAllRows = toRef(props, "countAllRows");
  const limitPagination = toRef(props, "limitPagination");
  const offsetPagination = toRef(props, "offsetPagination");
  const rowIndex = toRef(props, "rowIndex");
  const usePagination = toRef(props, "usePagination");

  const disabledBtnArrowLeft = computed(() => {
    return rowNumber.value <= 1 || isNil(previousAvailableRowIndex.value);
  });

  const disabledBtnArrowRight = computed(() => {
    return rowNumber.value >= countAllRows.value || isNil(nextAvailableRowIndex.value);
  });

  const toPreviousRow = () => {
    if (disabledBtnArrowLeft.value) {
      return;
    }
    if (usePagination.value) {
      const remainderOfDivision = (rowIndex.value + 1) % limitPagination.value;
      if (remainderOfDivision === 1) {
        emit("update:offset", { offset: offsetPagination.value - limitPagination.value, reload: false });
        emit("togglePreview", { rowIndex: limitPagination.value - 1 });
      } else {
        emit("togglePreview", { rowIndex: previousAvailableRowIndex.value });
      }
    } else {
      emit("togglePreview", { rowIndex: previousAvailableRowIndex.value });
    }
  };

  const toNextRow = () => {
    if (disabledBtnArrowRight.value) {
      return;
    }
    if (usePagination.value) {
      const remainderOfDivision = (rowIndex.value + 1) % limitPagination.value;
      if (remainderOfDivision === 0) {
        emit("update:offset", { offset: offsetPagination.value + limitPagination.value, reload: false });
        emit("togglePreview", { rowIndex: 0 });
      } else {
        emit("togglePreview", { rowIndex: nextAvailableRowIndex.value });
      }
    } else {
      emit("togglePreview", { rowIndex: nextAvailableRowIndex.value });
    }
  };

  return {
    disabledBtnArrowLeft,
    disabledBtnArrowRight,
    toNextRow,
    toPreviousRow,
  };
}
