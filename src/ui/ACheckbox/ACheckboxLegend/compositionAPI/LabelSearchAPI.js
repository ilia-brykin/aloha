import {
  computed,
  toRef,
} from "vue";

import AFiltersAPI from "../../../../compositionAPI/AFiltersAPI";

export default function LabelSearchAPI(props) {
  const label = toRef(props, "label");
  const modelSearch = toRef(props, "modelSearch");
  const showSearchHighlight = toRef(props, "showSearchHighlight");

  const {
    filterSearchHighlight,
  } = AFiltersAPI();

  const labelSearchHighlight = computed(() => {
    if (!showSearchHighlight.value) {
      return label.value;
    }

    return filterSearchHighlight(label.value, { searchModel: modelSearch.value });
  });

  return {
    labelSearchHighlight,
  };
}
