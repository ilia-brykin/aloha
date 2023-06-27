import {
  computed,
  toRef,
} from "vue";

import {
  getTranslatedText,
} from "../../../../../../src/ATranslation/compositionAPI/UtilsAPI";
import {
  cloneDeep,
  forEach,
} from "lodash-es";

export default function DataAPI(props) {
  const data = toRef(props, "data");

  const dataTranslated = computed(() => {
    const DATA = cloneDeep(data.value);

    forEach(DATA, item => {
      item.description = getTranslatedText({
        placeholder: item.description,
      });
    });

    return DATA;
  });

  return {
    dataTranslated,
  };
}
