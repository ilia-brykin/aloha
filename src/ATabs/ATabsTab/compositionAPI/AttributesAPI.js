import {
  computed,
} from "vue";

// roving tabindex (WAI-ARIA): only the active tab is in the Tab order, the arrows move between the tabs
export default function AttributesAPI({
  isActive = computed(() => false),
}) {
  const tabindexLocal = computed(() => {
    return isActive.value ? 0 : -1;
  });

  return {
    tabindexLocal,
  };
}
