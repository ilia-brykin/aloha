import {
  computed,
  inject,
} from "vue";

export default function LinkOpenAPI(props, {
  id = computed(() => ""),
}) {
  const isChildPanelOpen = inject("isChildPanelOpen");
  const isMenuOpen = inject("isMenuOpen");
  const isPanelMain = inject("isPanelMain");
  const panelParentsOpen = inject("panelParentsOpen");

  const isLinkOpenPanelMain = computed(() => {
    return isPanelMain.value && panelParentsOpen.value[0] === id.value;
  });

  const isLinkOpenPanelSecondaryMenuClose = computed(() => {
    return !isMenuOpen.value && isChildPanelOpen.value && panelParentsOpen.value.indexOf(id.value) !== -1;
  });

  const isLinkOpen = computed(() => {
    return isLinkOpenPanelMain.value || isLinkOpenPanelSecondaryMenuClose.value;
  });

  return {
    isLinkOpen,
    isLinkOpenPanelMain,
    isLinkOpenPanelSecondaryMenuClose,
  };
}
