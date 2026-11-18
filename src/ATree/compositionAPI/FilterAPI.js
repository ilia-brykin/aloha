import {
  computed,
  toRef,
} from "vue";

import {
  getJsonValueText,
} from "../utils/utils";

import {
  isFunction,
  toLower,
  trim,
} from "lodash-es";

export default function FilterAPI(props, {
  isJson,
  nodesByKey,
}) {
  const filterMethod = toRef(props, "filterMethod");
  const searchModel = toRef(props, "searchModel");

  const searchModelLocal = computed(() => trim(searchModel.value || ""));
  const isFiltering = computed(() => !!searchModelLocal.value);

  const isNodeMatch = node => {
    if (isFunction(filterMethod.value)) {
      return !!filterMethod.value({ item: node.item, label: node.label, searchModel: searchModelLocal.value });
    }
    const SEARCH = toLower(searchModelLocal.value);
    if (toLower(String(node.label)).includes(SEARCH)) {
      return true;
    }
    // In the json mode the values are searched too
    return isJson.value && !node.children && toLower(getJsonValueText(node.item)).includes(SEARCH);
  };

  // Matching nodes and their ancestors are visible
  const filter = computed(() => {
    const MATCHED = new Set();
    const VISIBLE = new Set();
    if (!isFiltering.value) {
      return { matched: MATCHED, visible: VISIBLE };
    }
    nodesByKey.value.forEach(node => {
      if (!isNodeMatch(node)) {
        return;
      }
      MATCHED.add(node.key);
      let current = node;
      while (current && !VISIBLE.has(current.key)) {
        VISIBLE.add(current.key);
        current = current.parent;
      }
    });
    return { matched: MATCHED, visible: VISIBLE };
  });

  const isNodeVisible = node => !isFiltering.value || filter.value.visible.has(node.key);
  const isNodeMatched = node => isFiltering.value && filter.value.matched.has(node.key);

  const countMatched = computed(() => filter.value.matched.size);

  return {
    countMatched,
    isFiltering,
    isNodeMatched,
    isNodeVisible,
    searchModelLocal,
  };
}
