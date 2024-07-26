import {
  computed,
  toRef,
} from "vue";

import UtilsAPI from "../../ATranslation/compositionAPI/UtilsAPI";

export default function AttributesAPI(props, {
  stepActiveComputed = computed(() => 0),
}) {
  const ariaLabel = toRef(props, "ariaLabel");
  const extra = toRef(props, "extra");
  const id = toRef(props, "id");

  const {
    getTranslationAttributes,
    getTranslatedText,
    isPlaceholderTranslate,
  } = UtilsAPI();

  const isAriaLabelTranslated = computed(() => {
    return isPlaceholderTranslate({ text: ariaLabel.value });
  });

  const ariaLabelTranslated = computed(() => {
    if (isAriaLabelTranslated.value) {
      return getTranslatedText({
        placeholder: ariaLabel.value,
        extra: extra.value,
      });
    }

    return undefined;
  });

  const ariaLabelAttributes = computed(() => {
    return getTranslationAttributes({
      attr: "aria-label",
      value: ariaLabel.value,
      translation: ariaLabelTranslated.value,
      isTranslate: isAriaLabelTranslated.value,
    });
  });

  const idProgressbar = computed(() => {
    return `${ id.value }_progressbar`;
  });

  const idStepTextActive = computed(() => {
    return `${ id.value }_step_text_${ stepActiveComputed.value }`;
  });

  const wizardAriaDescribedby = computed(() => {
    return `${ idProgressbar.value } ${ idStepTextActive.value }`;
  });

  return {
    ariaLabelAttributes,
    idProgressbar,
    wizardAriaDescribedby,
  };
}
