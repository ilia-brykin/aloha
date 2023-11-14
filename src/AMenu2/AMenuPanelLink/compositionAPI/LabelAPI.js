import {
  computed,
  toRef,
} from "vue";

import AFiltersAPI from "../../../compositionAPI/AFiltersAPI";

import AKeyLabel from "../../../const/AKeyLabel";

export default function LabelAPI(props, {
  isLinkVisible = computed(() => false),
}) {
  const isLinkInSearchPanel = toRef(props, "isLinkInSearchPanel");
  const item = toRef(props, "item");
  const modelSearch = toRef(props, "modelSearch");

  const {
    filterSearchHighlight,
  } = AFiltersAPI();

  const labelWithoutFilter = computed(() => {
    return item.value[AKeyLabel];
  });

  const label = computed(() => {
    const LABEL = labelWithoutFilter.value;
    if (isLinkInSearchPanel.value && isLinkVisible.value) {
      return filterSearchHighlight(LABEL, { searchModel: modelSearch.value });
    }
    return LABEL;
  });

  return {
    label,
    labelWithoutFilter,
  };
}
