import {
  computed,
  ref,
  toRef,
  watch,
} from "vue";

export default function UiCollapseAPI(props, { emit }) {
  const collapse = toRef(props, "collapse");
  const isCollapsed = toRef(props, "isCollapsed");

  const isCollapsedLocal = ref(false);

  const iconCollapse = computed(() => {
    return isCollapsedLocal.value ?
      "ChevronUp" :
      "ChevronDown";
  });

  const titleCollapse = computed(() => {
    return isCollapsedLocal.value ?
      "_A_FIELDSET_COLLAPSE_OPEN_" :
      "_A_FIELDSET_COLLAPSE_CLOSE_";
  });

  const toggleCollapse = () => {
    isCollapsedLocal.value = !isCollapsedLocal.value;
    emit("toggleCollapse", isCollapsedLocal.value);
  };

  const initIsCollapsedLocal = () => {
    if (collapse.value) {
      isCollapsedLocal.value = isCollapsed.value;
    } else {
      isCollapsedLocal.value = false;
    }
  };

  watch(isCollapsed, () => {
    isCollapsedLocal.value = isCollapsed.value;
  });

  return {
    iconCollapse,
    initIsCollapsedLocal,
    isCollapsedLocal,
    titleCollapse,
    toggleCollapse,
  };
}
