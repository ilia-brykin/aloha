import {
  computed,
  toRef,
} from "vue";

import UtilsAPI from "./UtilsAPI";
import {
  forEach,
  isArray, isNil,
} from "lodash-es";

export default function TitleAPI(props, {
  translation = computed(() => ({})),
}) {
  const extra = toRef(props, "extra");
  const title = toRef(props, "title");

  const {
    isPlaceholderTranslate,
    getTranslatedText,
  } = UtilsAPI();

  const isTitleArray = computed(() => {
    return isArray(title.value);
  });

  const hasTitle = computed(() => {
    if (isTitleArray.value) {
      return title.value.length > 0;
    }
    return !(isNil(title.value) || title.value === "");
  });

  const titleLocalOptions = computed(() => {
    const TITLE_LOCAL_OPTIONS = {
      title: undefined,
      dataTranslateTitle: undefined,
    };
    if (!hasTitle.value) {
      return TITLE_LOCAL_OPTIONS;
    }
    const TITLE_LIST = isTitleArray.value ?
      title.value :
      [title.value];
    let titleCombined = "";
    let dataTranslateTitle = "";
    forEach(TITLE_LIST, titleEl => {
      if (!titleEl && titleEl !== 0) {
        return;
      }
      if (titleCombined) {
        titleCombined += " ";
        dataTranslateTitle += " ";
      }
      if (isPlaceholderTranslate(titleEl)) {
        titleCombined += getTranslatedText({
          placeholder: titleEl,
          translationObj: translation.value,
          extra: extra.value,
        });
        dataTranslateTitle += titleEl;
      } else {
        titleCombined += titleEl;
      }
    });

    TITLE_LOCAL_OPTIONS.title = titleCombined || undefined;
    TITLE_LOCAL_OPTIONS.dataTranslateTitle = dataTranslateTitle || undefined;

    return TITLE_LOCAL_OPTIONS;
  });

  return {
    titleLocalOptions,
  };
}
