import {
  computed,
  toRef,
} from "vue";

import AMobileAPI from "../../compositionAPI/AMobileAPI";
import ATranslationAPI from "./ATranslationAPI";
import UtilsAPI from "./UtilsAPI";

import {
  forEach,
  isArray,
  isNil,
  isPlainObject,
} from "lodash-es";

export default function TitleAPI(props) {
  const alwaysTranslate = toRef(props, "alwaysTranslate");
  const extra = toRef(props, "extra");
  const title = toRef(props, "title");

  const {
    isPlaceholderTranslate,
    getTranslatedText,
  } = UtilsAPI();

  const {
    isMobileWidth,
  } = AMobileAPI();

  const {
    translationChanges,
  } = ATranslationAPI();

  const titleForCurrentDevice = computed(() => {
    if (isPlainObject(title.value)) {
      if (isMobileWidth.value) {
        return title.value.mobile;
      }
      return title.value.desktop;
    }
    return title.value;
  });

  const isTitleArray = computed(() => {
    return isArray(title.value);
  });

  const hasTitle = computed(() => {
    if (isTitleArray.value) {
      return title.value.length > 0;
    }
    return !(isNil(titleForCurrentDevice.value) || titleForCurrentDevice.value === "");
  });

  const titleLocalOptions = computed(() => {
    if (!translationChanges.value) {
      return undefined;
    }
    const TITLE_LOCAL_OPTIONS = {
      title: undefined,
      dataTranslateTitle: undefined,
    };
    if (!hasTitle.value) {
      return TITLE_LOCAL_OPTIONS;
    }
    const TITLE_LIST = isTitleArray.value ?
      title.value :
      [titleForCurrentDevice.value];
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
          extra: extra.value,
          alwaysTranslate: alwaysTranslate.value,
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
