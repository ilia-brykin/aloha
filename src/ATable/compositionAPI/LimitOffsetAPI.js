import {
  ref,
  toRef,
} from "vue";

export default function LimitOffsetAPI(props, { emit }, {
  offset = ref(0),
  limit = ref(0),
  closePreviewAll = () => {},
  setEmptySelectedRowsIndexes = () => {},
  tableRef = ref(undefined),
}) {
  const offsetStart = toRef(props, "offsetStart");

  const setFocusToTable = () => {
    if (tableRef.value) {
      tableRef.value.setAttribute("tabindex", "-1");
      tableRef.value.focus();
      tableRef.value.removeAttribute("tabindex");
    }
  };

  const scrollToTable = () => {
    if (tableRef.value) {
      const elementTop = tableRef.value.getBoundingClientRect().top + window.scrollY;
      let scrollToPosition = elementTop - (window.innerHeight / 2);
      if (scrollToPosition < 0) {
        scrollToPosition = 0;
      }
      document.documentElement.scrollTop = scrollToPosition;
    }
  };

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
