import {
  computed,
  nextTick,
  ref,
  watch,
} from "vue";

import {
  getTranslatedText,
} from "../../../ATranslation/compositionAPI/UtilsAPI";

import {
  debounce,
} from "lodash-es";

/**
 * Tells screen readers how many options the search found ("3 results" / "No results").
 * The text is in a live region that is always in the page, it changes only while there is a search text.
 */
export default function SearchStatusAPI({
  loading = computed(() => false),
  menuRef = ref(undefined),
  modelSearch = computed(() => ""),
}) {
  const searchStatusText = ref("");

  const updateStatus = debounce(() => {
    nextTick().then(() => {
      if (!modelSearch.value || loading.value) {
        searchStatusText.value = "";
        return;
      }
      const COUNT = menuRef.value?.querySelectorAll("[role=\"listbox\"] [role=\"option\"]:not([data-hide])").length || 0;
      searchStatusText.value = getTranslatedText({
        placeholder: COUNT ? "_A_SELECT_SEARCH_RESULTS_{{count}}_" : "_A_SELECT_SEARCH_NO_RESULTS_",
        extra: { count: COUNT },
      });
    });
  }, 400);

  watch([modelSearch, loading], updateStatus);

  return {
    searchStatusText,
    updateStatusCancel: () => updateStatus.cancel(),
  };
}
