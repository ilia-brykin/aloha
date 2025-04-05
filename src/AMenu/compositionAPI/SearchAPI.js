import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  AKeyLabel,
} from "../../const/AKeys";
import {
  escapeRegExp,
  forEach,
} from "lodash-es";

export default function SearchAPI(props, {
  dataKeyById = computed(() => ({})),
}) {
  const menuId = toRef(props, "menuId");

  const modelSearch = ref("");

  const searchInputId = computed(() => {
    return `${ menuId.value }_search`;
  });

  const updateModelSearch = model => {
    modelSearch.value = model;
  };

  const isSearchActive = computed(() => {
    return !!modelSearch.value;
  });

  const styleSearchPanelMain = computed(() => {
    return isSearchActive.value ?
      "display: none;" :
      undefined;
  });

  const resetSearch = () => {
    if (isSearchActive.value) {
      modelSearch.value = "";
    }
  };

  const modelSearchEscapeRegExp = computed(() => {
    return escapeRegExp(modelSearch.value);
  });

  const itemsWithSearch = computed(() => {
    const ITEMS = [];
    if (isSearchActive.value) {
      const RE = new RegExp(modelSearchEscapeRegExp.value, "gi");
      forEach(dataKeyById.value, item => {
        const ITEM_LABEL = item[AKeyLabel];
        if (`${ ITEM_LABEL }`.search(RE) !== -1) {
          ITEMS.push(item);
        }
      });
    }
    return ITEMS;
  });


  return {
    isSearchActive,
    itemsWithSearch,
    modelSearch,
    resetSearch,
    searchInputId,
    styleSearchPanelMain,
    updateModelSearch,
  };
}
