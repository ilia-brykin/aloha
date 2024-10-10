import {
  computed,
  ref,
  toRef,
  watch,
} from "vue";

export default function UiCollapseAPI(props, { emit }) {
  const collapsible = toRef(props, "collapsible");
  const id = toRef(props, "id");
  const isCollapsed = toRef(props, "isCollapsed");
  const texts = toRef(props, "texts");

  const isCollapsedLocal = ref(false);

  const iconCollapse = computed(() => {
    return isCollapsedLocal.value ?
      "ChevronUp" :
      "ChevronDown";
  });

  const textOpen = computed(() => {
    return texts.value?.collapseOpen || "_A_FIELDSET_COLLAPSE_OPEN_";
  });

  const textClose = computed(() => {
    return texts.value?.collapseClose || "_A_FIELDSET_COLLAPSE_CLOSE_";
  });

  const titleCollapse = computed(() => {
    return isCollapsedLocal.value ?
      textOpen.value :
      textClose.value;
  });

  const toggleCollapse = () => {
    isCollapsedLocal.value = !isCollapsedLocal.value;
    emit("toggleCollapse", { isCollapsed: isCollapsedLocal.value, id: id.value, props });
  };

  const initIsCollapsedLocal = () => {
    if (collapsible.value) {
      isCollapsedLocal.value = isCollapsed.value || false;
    } else {
      isCollapsedLocal.value = false;
    }
  };

  watch(isCollapsed, () => {
    isCollapsedLocal.value = isCollapsed.value || false;
  });

  return {
    iconCollapse,
    initIsCollapsedLocal,
    isCollapsedLocal,
    titleCollapse,
    toggleCollapse,
  };
}
