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
  scrollToTable = () => {},
  setFocusToTable = () => {},
  viewCurrent = computed(() => ({})),
}) {
  const offsetStart = toRef(props, "offsetStart");
  const pagination = toRef(props, "pagination");

  const limit = ref(pagination.value.limitStart || 10);
  const offset = ref(offsetStart.value);

  const usePaginationLocal = computed(() => {
    if (pagination.value?.use) {
      if (viewCurrent.value) {
        return viewCurrent.value.usePagination || false;
      }
      return true;
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
    closePreviewAll();
  };

  return {
    changeLimit,
    changeOffset,
    limit,
    offset,
    usePaginationLocal,
  };
}
