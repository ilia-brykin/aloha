import {
  computed,
  ref,
} from "vue";

export default function PanelMainAPI({
  isMenuOpen = computed(() => false),
  panelParentsOpen = ref([]),
}) {
  const isLeastOnePanelOpenAndMenuClosed = computed(() => {
    return !isMenuOpen.value && panelParentsOpen.value.length > 0;
  });

  return {
    isLeastOnePanelOpenAndMenuClosed,
  };
}
