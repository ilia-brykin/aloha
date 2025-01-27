import {
  computed,
  toRef,
} from "vue";

import AFiltersAPI from "../../../../compositionAPI/AFiltersAPI";

import {
  getTranslatedText,
  isPlaceholderTranslate,
} from "../../../../ATranslation/compositionAPI/UtilsAPI";

export default function LabelAPI(props) {
  const column = toRef(props, "column");
  const searchColumnModel = toRef(props, "searchColumnModel");

  const {
    filterSearchHighlight,
  } = AFiltersAPI();

  const labelTranslated = computed(() => {
    if (isPlaceholderTranslate(column.value.label)) {
      return getTranslatedText({
        placeholder: column.value.label,
      });
    }

    return column.value.label;
  });

  const labelLocal = computed(() => {
    return filterSearchHighlight(labelTranslated.value, { searchModel: searchColumnModel.value });
  });

  return {
    labelLocal,
    labelTranslated,
  };
}
