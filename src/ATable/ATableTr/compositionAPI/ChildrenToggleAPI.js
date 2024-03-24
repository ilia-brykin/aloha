import {
  computed,
  ref, toRef,
} from "vue";

export default function ChildrenToggleAPI(props, {
  hasChildren = computed(() => false),
}) {
  const isOneOfParentsClose = toRef(props, "isOneOfParentsClose");

  const isChildrenOpen = ref(false);

  const ariaExpanded = computed(() => {
    if (!hasChildren.value) {
      return undefined;
    }

    return isChildrenOpen.value;
  });

  const rowClassChildren = computed(() => {
    if (isOneOfParentsClose.value) {
      return "a_table__row_hide";
    }

    return undefined;
  });

  const isOneOfParentsCloseForChildren = computed(() => {
    return !!(isOneOfParentsClose.value || !isChildrenOpen.value);
  });

  const toggleChildren = () => {
    isChildrenOpen.value = !isChildrenOpen.value;
  };


  return {
    ariaExpanded,
    isOneOfParentsCloseForChildren,
    rowClassChildren,
    toggleChildren,
  };
}
