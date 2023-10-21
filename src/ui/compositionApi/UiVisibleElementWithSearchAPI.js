import {
  computed,
  toRef,
} from "vue";

import AFiltersAPI from "../../compositionAPI/AFiltersAPI";

export default function UiVisibleElementWithSearchAPI(props, {
  labelLocal = computed(() => ""),
  valueLocal = computed(() => ""),
}) {
  const isHiddenWithSearch = toRef(props, "isHiddenWithSearch");
  const modelSearch = toRef(props, "modelSearch");
  const searching = toRef(props, "searching");
  const searchingElements = toRef(props, "searchingElements");

  const {
    filterSearchHighlight,
  } = AFiltersAPI();

  const isHiddenWithSearchLocal = computed(() => {
    return !!(isHiddenWithSearch.value ||
      (searching.value && !searchingElements.value[valueLocal.value]));
  });

  const currentLabelFiltered = computed(() => {
    if (isHiddenWithSearchLocal.value) {
      return labelLocal.value;
    }
    return filterSearchHighlight(labelLocal.value, { searchModel: modelSearch.value });
  });

  const styleWithSearch = computed(() => {
    return isHiddenWithSearchLocal.value ?
      "display: none;" :
      undefined;
  });

  return {
    currentLabelFiltered,
    styleWithSearch,
  };
}
