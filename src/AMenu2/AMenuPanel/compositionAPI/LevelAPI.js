import {
  computed,
  toRef,
} from "vue";

export default function LevelAPI(props) {
  const panelParentsOpen = toRef(props, "panelParentsOpen");
  const parentId = toRef(props, "parentId");

  const openedLevelIndex = computed(() => {
    return panelParentsOpen.value.indexOf(parentId.value);
  });

  const styleZIndex = computed(() => {
    if (openedLevelIndex.value !== -1) {
      return `z-index: ${ openedLevelIndex.value + 2 };`;
    }
    return undefined;
  });

  return {
    openedLevelIndex,
    styleZIndex,
  };
}
