import {
  ref,
  toRef,
} from "vue";

export default function LimitOffsetAPI(props, { emit }, {
  closePreviewAll = () => {},
  limit = ref(0),
  offset = ref(0),
  scrollToTable = () => {},
  setEmptySelectedRowsIndexes = () => {},
  setFocusToTable = () => {},
}) {
  const offsetStart = toRef(props, "offsetStart");

  const changeOffset = offsetLocal => {
    setFocusToTable();
    scrollToTable();
    offset.value = offsetLocal;
    emit("changeOffset", {
      offset: offsetLocal,
      limit: limit.value,
    });
    setEmptySelectedRowsIndexes();
    closePreviewAll();
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
  };
}
