import {
  computed,
  ref,
  toRef,
} from "vue";

export default function StickyAPI(props, {
  isMobile = ref(undefined),
  modelIsTableWithoutScroll = ref(undefined),
}) {
  const rowActionsSticky = toRef(props, "rowActionsSticky");

  const isRowActionsStickyLocal = computed(() => {
    return !!(!isMobile.value && rowActionsSticky.value && !modelIsTableWithoutScroll.value);
  });

  return {
    isRowActionsStickyLocal,
  };
}
