import {
  ref,
  toRef,
} from "vue";

export default function LimitOffsetAPI(props, { emit }, {
  offset = ref(0),
  limit = ref(0),
  closePreviewAll = () => {},
  setEmptySelectedRowsIndexes = () => {},
}) {
  const offsetStart = toRef(props, "offsetStart");

  const changeOffset = offsetLocal => {
    offset.value = offsetLocal;
    emit("changeOffset", {
      offset: offsetLocal,
      limit: limit.value,
    });
    setEmptySelectedRowsIndexes();
    closePreviewAll();
  };

  const changeLimit = limitLocal => {
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
