import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  getElementId,
} from "../utils/utils";

import AKeyBreadcrumbs from "../const/AKeyBreadcrumbs";
import {
  AKeyId,
  AKeyLabel,
} from "../../const/AKeys";
import {
  isBrowser,
} from "../../utils/isBrowser";
import {
  escapeRegExp,
  forEach,
  map,
} from "lodash-es";

export default function SearchAPI(props, {
  dataKeyById = computed(() => ({})),
}) {
  const menuId = toRef(props, "menuId");
  const searchInDom = toRef(props, "searchInDom");

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

  const getDomLabel = id => {
    if (!isBrowser()) {
      return undefined;
    }
    const LINK = document.getElementById(getElementId({
      menuId: menuId.value,
      id,
      suffix: "link",
    }));
    // Read source panels only; search results contain copies of the same links.
    if (!LINK?.closest(".a_menu__panels__main:not(.a_menu__panel_search)")) {
      return undefined;
    }
    return (LINK.querySelector(".a_menu__link__text") || LINK).textContent;
  };

  // shortcut: DOM translations refresh on query changes; observe mutations if live updates are needed.
  const itemsWithSearch = computed(() => {
    const ITEMS = [];
    if (isSearchActive.value) {
      const RE = new RegExp(modelSearchEscapeRegExp.value, "gi");
      forEach(dataKeyById.value, item => {
        const ITEM_LABEL = searchInDom.value ? getDomLabel(item[AKeyId]) : item[AKeyLabel];
        if (searchInDom.value && ITEM_LABEL === undefined) {
          return;
        }
        if (`${ ITEM_LABEL }`.search(RE) === -1) {
          return;
        }
        if (!searchInDom.value) {
          ITEMS.push(item);
          return;
        }
        ITEMS.push({
          ...item,
          [AKeyLabel]: ITEM_LABEL,
          [AKeyBreadcrumbs]: map(item[AKeyBreadcrumbs], breadcrumb => ({
            ...breadcrumb,
            label: getDomLabel(breadcrumb.parentId) ?? breadcrumb.label,
          })),
        });
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
