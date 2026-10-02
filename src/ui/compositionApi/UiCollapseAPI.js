import {
  computed,
  ref,
  toRef,
  watch,
} from "vue";

const ChevronDown = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg>`;
const ChevronUp = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
</svg>`;


export default function UiCollapseAPI(props, { emit }) {
  const collapsible = toRef(props, "collapsible");
  const id = toRef(props, "id");
  const isCollapsed = toRef(props, "isCollapsed");
  const texts = toRef(props, "texts");

  const isCollapsedLocal = ref(false);

  const iconCollapse = computed(() => {
    return isCollapsedLocal.value ?
      ChevronUp :
      ChevronDown;
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
