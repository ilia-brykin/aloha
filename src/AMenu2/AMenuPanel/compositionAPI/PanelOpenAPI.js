import {
  computed,
  toRef,
} from "vue";

export default function PanelOpenAPI(props) {
  const isPanelMain = toRef(props, "isPanelMain");
  const isSearchActive = toRef(props, "isSearchActive");
  const panelParentsOpen = toRef(props, "panelParentsOpen");
  const parentId = toRef(props, "parentId");

  const isPanelOpen = computed(() => {
    if (isSearchActive.value) {
      return false;
    }
    if (isPanelMain.value) {
      return panelParentsOpen.value.length === 0;
    }
    if (panelParentsOpen.value.length) {
      return panelParentsOpen.value.indexOf(parentId.value) === panelParentsOpen.value.length - 1;
    }
    return false;
  });

  const isChildPanelOpen = computed(() => {
    if (isPanelMain.value) {
      return panelParentsOpen.value.length > 0;
    }
    const INDEX = panelParentsOpen.value.indexOf(parentId.value);

    return INDEX !== -1 && INDEX !== panelParentsOpen.value.length - 1;
  });

  return {
    isChildPanelOpen,
    isPanelOpen,
  };
}