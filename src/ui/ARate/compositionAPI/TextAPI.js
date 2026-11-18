import {
  computed,
  toRef,
} from "vue";

import {
  getTranslatedText,
} from "../../../ATranslation/compositionAPI/UtilsAPI";

export default function TextAPI(props, {
  maxLocal = computed(() => 5),
  valueDisplayed = computed(() => 0),
  valueLocal = computed(() => 0),
}) {
  const alwaysTranslate = toRef(props, "alwaysTranslate");
  const scoreTemplate = toRef(props, "scoreTemplate");
  const showScore = toRef(props, "showScore");
  const showText = toRef(props, "showText");
  const texts = toRef(props, "texts");

  const getText = value => {
    if (!value) {
      return undefined;
    }
    return texts.value[Math.ceil(value) - 1];
  };

  const textCurrent = computed(() => getText(valueDisplayed.value));

  const scoreExtra = computed(() => ({
    max: maxLocal.value,
    value: valueDisplayed.value,
  }));

  const isScoreVisible = computed(() => showScore.value);

  const isTextVisible = computed(() => !!(showText.value && textCurrent.value));

  const ariaValuetext = computed(() => {
    if (!valueLocal.value) {
      return getTranslatedText({
        placeholder: "_A_RATE_NO_VALUE_",
        alwaysTranslate: alwaysTranslate.value,
      });
    }
    const VALUE_TEXT = getTranslatedText({
      placeholder: "_A_RATE_VALUE_{{value}}_{{max}}_",
      alwaysTranslate: alwaysTranslate.value,
      extra: {
        max: maxLocal.value,
        value: valueLocal.value,
      },
    });
    const TEXT = getText(valueLocal.value);
    if (!TEXT) {
      return VALUE_TEXT;
    }
    return `${ VALUE_TEXT }, ${ getTranslatedText({
      placeholder: TEXT,
      alwaysTranslate: alwaysTranslate.value,
    }) }`;
  });

  return {
    ariaValuetext,
    isScoreVisible,
    isTextVisible,
    scoreExtra,
    scoreTemplate,
    textCurrent,
  };
}
