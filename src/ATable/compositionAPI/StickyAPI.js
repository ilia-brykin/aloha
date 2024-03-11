import {
  computed,
  ref,
  toRef,
} from "vue";

export default function StickyAPI(props, {
  isMobile = ref(undefined),
  modelIsTableWithoutScrollComputed = computed(() => undefined),
}) {
  const rowActionsSticky = toRef(props, "rowActionsSticky");

  const isRowActionsStickyLocal = computed(() => {
    return !!(!isMobile.value && rowActionsSticky.value && !modelIsTableWithoutScrollComputed.value);
  });

  return {
    isRowActionsStickyLocal,
  };
}
