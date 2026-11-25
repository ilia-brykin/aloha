import {
  ref,
  toRef,
  watch,
} from "vue";

import {
  getAncestorPointers,
  getContainerPointers,
} from "../utils/flatten";

/**
 * The expanded nodes (a Set of pointers), expand / collapse all, to a level, the path to a node,
 * and the page limits of big arrays ("show more").
 */
export default function ExpandAPI(props, {
  document = ref(undefined),
}) {
  const expandLevel = toRef(props, "expandLevel");
  const expandedPaths = toRef(props, "expandedPaths");
  const pageSize = toRef(props, "arrayPageSize");

  const expanded = ref(new Set());
  const pageLimits = ref({});
  let isInitialized = false;

  const setExpanded = pointers => {
    expanded.value = new Set(pointers);
  };

  const expandToLevel = level => {
    setExpanded(getContainerPointers(document.value, level));
  };

  // the first value: expand-level and expanded-paths
  watch(document, value => {
    if (isInitialized || value === undefined) {
      return;
    }
    isInitialized = true;
    expandToLevel(expandLevel.value);
    if (expandedPaths.value?.length) {
      setExpanded([...expanded.value, ...expandedPaths.value]);
    }
  }, { immediate: true });

  const isExpanded = pointer => expanded.value.has(pointer);

  const expand = pointer => {
    if (!expanded.value.has(pointer)) {
      setExpanded([...expanded.value, pointer]);
    }
  };

  const collapse = pointer => {
    if (expanded.value.has(pointer)) {
      const NEXT = new Set(expanded.value);
      NEXT.delete(pointer);
      expanded.value = NEXT;
    }
  };

  const toggle = pointer => (isExpanded(pointer) ? collapse(pointer) : expand(pointer));

  const expandAll = () => setExpanded(getContainerPointers(document.value));

  // the root stays open, else nothing is visible
  const collapseAll = () => setExpanded([""]);

  const expandPath = tokens => {
    setExpanded([...expanded.value, ...getAncestorPointers(tokens)]);
  };

  const expandPointers = pointers => {
    setExpanded([...expanded.value, ...pointers]);
  };

  const showMore = pointer => {
    pageLimits.value = {
      ...pageLimits.value,
      [pointer]: (pageLimits.value[pointer] || pageSize.value) + pageSize.value,
    };
  };

  return {
    collapse,
    collapseAll,
    expand,
    expandAll,
    expanded,
    expandPath,
    expandPointers,
    expandToLevel,
    isExpanded,
    pageLimits,
    showMore,
    toggle,
  };
}
