import {
  computed,
  inject,
  toRef,
} from "vue";

export default function AttributesAPI(props) {
  const isPanelOpen = toRef(props, "isPanelOpen");
  const isLinkInSearchPanel = toRef(props, "isLinkInSearchPanel");

  const isMenuOpen = inject("isMenuOpen");

  const tabindex = computed(() => {
    if (isLinkInSearchPanel.value) {
      return 0;
    }
    return isPanelOpen.value && isMenuOpen.value ? 0 : -1;
  });

  return {
    tabindex,
  };
}
