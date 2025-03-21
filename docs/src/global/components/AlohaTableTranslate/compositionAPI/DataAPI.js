import {
  computed,
  toRef,
} from "vue";

import {
  getTranslatedText,
} from "../../../../../../src/ATranslation/compositionAPI/UtilsAPI";

import {
  forEach,
} from "lodash-es";

export default function DataAPI(props) {
  const data = toRef(props, "data");

  const dataTranslated = computed(() => {
    const DATA = [];

    forEach(data.value, item => {
      DATA.push({
        placeholder: item,
        translate: getTranslatedText({
          placeholder: item,
        }),
      });
    });

    return DATA;
  });

  return {
    dataTranslated,
  };
}
