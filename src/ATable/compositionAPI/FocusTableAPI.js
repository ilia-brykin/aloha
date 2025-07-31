import {
  ref,
} from "vue";

export default function FocusTableAPI({
  tableRef = ref(undefined),
}) {
  const setFocusToTable = () => {
    if (tableRef.value) {
      tableRef.value.setAttribute("tabindex", "-1");
      tableRef.value.focus();
      tableRef.value.removeAttribute("tabindex");
    }
  };

  const scrollToTable = () => {
    if (tableRef.value && tableRef.value?.getBoundingClientRect) {
      const elementTop = tableRef.value.getBoundingClientRect().top + window.scrollY;
      let scrollToPosition = elementTop - (window.innerHeight / 2);
      if (scrollToPosition < 0) {
        scrollToPosition = 0;
      }
      document.documentElement.scrollTop = scrollToPosition;
    }
  };

  return {
    scrollToTable,
    setFocusToTable,
  };
}
