import {
  onBeforeUnmount,
  ref,
  watch,
} from "vue";

export default function DialogAPI({ emit }, {
  commit = () => {},
  formatDate = () => "",
  texts = ref({}),
}) {
  const openIndex = ref(null);
  const buttonRefs = {};
  const fieldRefs = {};

  const closeDialog = ({ focusButton = true } = {}) => {
    const INDEX = openIndex.value;
    if (INDEX === null) {
      return;
    }
    openIndex.value = null;
    emit("close", { index: INDEX });
    if (focusButton) {
      buttonRefs[INDEX]?.focus();
    }
  };

  const openDialog = index => {
    if (openIndex.value === index) {
      return;
    }
    closeDialog({ focusButton: false });
    openIndex.value = index;
    emit("open", { index });
  };

  const toggleDialog = index => {
    if (openIndex.value === index) {
      closeDialog();
    } else {
      openDialog(index);
    }
  };

  const selectDate = (index, date) => {
    texts.value[`date${ index }`] = formatDate(date);
    closeDialog();
    commit();
  };

  // a click outside closes the dialog; the focus stays where the user clicked
  const onDocumentPointerdown = $event => {
    if (openIndex.value !== null && !fieldRefs[openIndex.value]?.contains($event.target)) {
      closeDialog({ focusButton: false });
    }
  };

  watch(openIndex, (index, indexOld) => {
    if (index !== null && indexOld === null) {
      document.addEventListener("pointerdown", onDocumentPointerdown);
    } else if (index === null) {
      document.removeEventListener("pointerdown", onDocumentPointerdown);
    }
  });

  onBeforeUnmount(() => {
    document.removeEventListener("pointerdown", onDocumentPointerdown);
  });

  return {
    buttonRefs,
    closeDialog,
    fieldRefs,
    openDialog,
    openIndex,
    selectDate,
    toggleDialog,
  };
}
