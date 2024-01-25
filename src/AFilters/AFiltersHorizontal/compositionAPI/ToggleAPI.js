import {
  computed,
  ref,
  toRef,
} from "vue";

export default function ToggleAPI(props) {
  const filtersGroup = toRef(props, "filtersGroup");

  const isOpen = ref(false);

  const onOpen = () => {
    isOpen.value = true;
  };

  const onClose = () => {
    isOpen.value = false;
  };

  const onToggle = () => {
    if (isOpen.value) {
      onClose();
    } else {
      onOpen();
    }
  };

  const iconToggle = computed(() => {
    return isOpen.value ? "ChevronUp" : "ChevronDown";
  });

  const textToggle = computed(() => {
    return isOpen.value ? "_A_FILTERS_CLOSE_ADVANCED_SEARCH_" : "_A_FILTERS_OPEN_ADVANCED_SEARCH_";
  });

  const styleToggle = computed(() => {
    return isOpen.value ? "" : "display: none;";
  });

  const isBtnToggleVisible = computed(() => {
    return !!(filtersGroup.value.alwaysVisible.length || filtersGroup.value.filters.length);
  });

  return {
    iconToggle,
    isBtnToggleVisible,
    isOpen,
    onClose,
    onOpen,
    onToggle,
    styleToggle,
    textToggle,
  };
}
