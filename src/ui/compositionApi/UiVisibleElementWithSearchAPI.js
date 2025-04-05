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
  const searchTextInHtml = toRef(props, "searchTextInHtml");
  const showElementWennGroupFound = toRef(props, "showElementWennGroupFound");

  const {
    filterSearchHighlight,
  } = AFiltersAPI();

  const isHiddenWithSearchLocal = computed(() => {
    return !!(isHiddenWithSearch.value ||
      (searching.value && !showElementWennGroupFound.value && !searchingElements.value[valueLocal.value]));
  });

  const currentLabelFiltered = computed(() => {
    if (isHiddenWithSearchLocal.value) {
      return labelLocal.value;
    }
    return filterSearchHighlight(labelLocal.value, {
      searchModel: modelSearch.value,
      isHtml: searchTextInHtml.value,
    });
  });

  const styleWithSearch = computed(() => {
    return isHiddenWithSearchLocal.value ?
      "display: none;" :
      undefined;
  });

  const dataHideWithSearch = computed(() => {
    return isHiddenWithSearchLocal.value ?
      true :
      undefined;
  });

  return {
    currentLabelFiltered,
    dataHideWithSearch,
    styleWithSearch,
  };
}
