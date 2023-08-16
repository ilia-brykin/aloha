import {
  computed,
  toRef,
} from "vue";

import AFiltersAPI from "../../compositionAPI/AFiltersAPI";

export default function UiVisibleElementWithSearchAPI(props, {
  labelLocal = computed(() => ""),
  valueLocal = computed(() => ""),
}) {
  const elementsVisibleWithSearch = toRef(props, "elementsVisibleWithSearch");
  const isHiddenWithSearch = toRef(props, "isHiddenWithSearch");
  const modelSearch = toRef(props, "modelSearch");

  const {
    filterSearchHighlight,
  } = AFiltersAPI();

  const isHiddenWithSearchLocal = computed(() => {
    return !!(isHiddenWithSearch.value ||
      (elementsVisibleWithSearch.value.searching && !elementsVisibleWithSearch.value.elements[valueLocal.value]));
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
