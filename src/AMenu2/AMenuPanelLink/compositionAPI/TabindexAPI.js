import {
  computed,
  inject,
  toRef,
} from "vue";

export default function TabindexAPI(props, {
  isLinkOpen = computed(() => false),
}) {
  const isLinkInSearchPanel = toRef(props, "isLinkInSearchPanel");
  const isPanelOpen = toRef(props, "isPanelOpen");

  const isMenuOpen = inject("isMenuOpen");
  const isPanelMain = inject("isPanelMain", false);
  const isChildPanelOpen = inject("isChildPanelOpen", false);

  const tabindex = computed(() => {
    if (isLinkInSearchPanel.value) {
      return 0;
    }
    if (!isMenuOpen.value) {
      if (isPanelMain.value && isPanelOpen.value) {
        return 0;
      }
      if (isPanelMain.value || isChildPanelOpen.value) {
        if (isLinkOpen.value) {
          return 0;
        }
        return -1;
      }
      if (isPanelOpen.value) {
        return 0;
      }
      return -1;
    }
    if (isPanelOpen.value) {
      return 0;
    }
    return -1;
  });

  return {
    tabindex,
  };
}
