import {
  computed,
  ref,
} from "vue";

export default function ToggleAPI() {
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
    return isOpen.value ? "_CLOSE_ADVANCED_SEARCH_" : "_OPEN_ADVANCED_SEARCH_";
  });

  const styleToggle = computed(() => {
    return isOpen.value ? "" : "display: none;";
  });

  return {
    iconToggle,
    isOpen,
    onClose,
    onOpen,
    onToggle,
    styleToggle,
    textToggle,
  };
}
