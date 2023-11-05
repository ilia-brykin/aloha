import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  isPlainObject,
} from "lodash-es";

export default function LimitOffsetAPI(props, { emit }, {
  closePreviewAll = () => {},
  isViewTableVisible = computed(() => true),
  limit = ref(0),
  offset = ref(0),
  scrollToTable = () => {},
  setEmptySelectedRowsIndexes = () => {},
  setFocusToTable = () => {},
  viewCurrent = computed(() => ({})),
}) {
  const offsetStart = toRef(props, "offsetStart");
  const pagination = toRef(props, "pagination");

  const usePaginationLocal = computed(() => {
    if (pagination.value?.use) {
      if (isViewTableVisible.value || viewCurrent.value.usePagination) {
        return true;
      }
    }
    return false;
  });

  const changeOffset = _offset => {
    let offsetLocal;
    let reloadLocal;
    if (isPlainObject(_offset)) {
      offsetLocal = _offset.offset;
      reloadLocal = _offset.reload;
    } else {
      offsetLocal = _offset;
      reloadLocal = true;
    }
    if (reloadLocal) {
      setFocusToTable();
      scrollToTable();
    }
    offset.value = offsetLocal;
    emit("changeOffset", {
      offset: offsetLocal,
      limit: limit.value,
    });
    setEmptySelectedRowsIndexes();
    if (reloadLocal) {
      closePreviewAll();
    }
  };

  const changeLimit = limitLocal => {
    setFocusToTable();
    scrollToTable();
    limit.value = limitLocal;
    offset.value = offsetStart.value;
    emit("changeLimit", {
      offset: offset.value,
      limit: limitLocal,
    });
    setEmptySelectedRowsIndexes();
    closePreviewAll();
  };

  return {
    changeOffset,
    changeLimit,
    usePaginationLocal,
  };
}
