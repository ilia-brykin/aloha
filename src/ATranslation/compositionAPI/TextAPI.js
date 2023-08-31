import {
  computed,
  toRef,
} from "vue";

import AMobileAPI from "../../compositionAPI/AMobileAPI";
import ATranslationAPI, {
  translation,
} from "./ATranslationAPI";
import UtilsAPI from "./UtilsAPI";

import {
  forEach,
  isArray,
  isPlainObject,
  isUndefined,
} from "lodash-es";

export default function TextAPI(props) {
  const extra = toRef(props, "extra");
  const text = toRef(props, "text");

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

  const textForCurrentDevice = computed(() => {
    if (isPlainObject(text.value)) {
      if (isMobileWidth.value) {
        return text.value.mobile;
      }
      return text.value.desktop;
    }
    return text.value;
  });

  const isTextArray = computed(() => {
    return isArray(text.value);
  });

  const hasText = computed(() => {
    if (isTextArray.value) {
      return text.value.length > 0;
    }
    return !isUndefined(textForCurrentDevice.value);
  });

  const textLocalOptions = computed(() => {
    const TEXT_LOCAL_OPTIONS = {
      text: undefined,
      dataTranslateText: undefined,
    };
    if (!translationChanges.value) {
      return TEXT_LOCAL_OPTIONS;
    }
    if (hasText.value) {
      const TEXT_LIST = isTextArray.value ?
        text.value :
        [textForCurrentDevice.value];
      let textCombined = "";
      let dataTranslateText = "";
      forEach(TEXT_LIST, textEl => {
        if (!textEl && textEl !== 0) {
          return;
        }
        if (textCombined) {
          textCombined += " ";
          dataTranslateText += " ";
        }
        if (isPlaceholderTranslate(textEl)) {
          textCombined += getTranslatedText({
            placeholder: textEl,
            translationObj: translation,
            extra: extra.value,
          });
          dataTranslateText += textEl;
        } else {
          textCombined += textEl;
        }
      });

      TEXT_LOCAL_OPTIONS.text = textCombined || undefined;
      TEXT_LOCAL_OPTIONS.dataTranslateText = dataTranslateText || undefined;
    }

    return TEXT_LOCAL_OPTIONS;
  });


  return {
    hasText,
    textLocalOptions,
  };
}
