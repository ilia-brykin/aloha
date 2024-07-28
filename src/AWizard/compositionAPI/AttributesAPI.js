import {
  computed,
  toRef,
} from "vue";

import UtilsAPI from "../../ATranslation/compositionAPI/UtilsAPI";

export default function AttributesAPI(props, {
  stepActiveComputed = computed(() => 0),
}) {
  const ariaLabel = toRef(props, "ariaLabel");
  const ariaLabelSteps = toRef(props, "ariaLabelSteps");
  const extra = toRef(props, "extra");
  const id = toRef(props, "id");

  const {
    getTranslationAttributes,
    getTranslatedText,
    isPlaceholderTranslate,
  } = UtilsAPI();

  const isAriaLabelTranslated = computed(() => {
    return isPlaceholderTranslate(ariaLabel.value);
  });

  const isAriaLabelStepsTranslated = computed(() => {
    return isPlaceholderTranslate(ariaLabelSteps.value);
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

  const ariaLabelStepsTranslated = computed(() => {
    if (isAriaLabelStepsTranslated.value) {
      return getTranslatedText({
        placeholder: ariaLabelSteps.value,
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

  const ariaLabelStepsAttributes = computed(() => {
    return getTranslationAttributes({
      attr: "aria-label",
      value: ariaLabelSteps.value,
      translation: ariaLabelStepsTranslated.value,
      isTranslate: isAriaLabelStepsTranslated.value,
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
    ariaLabelStepsAttributes,
    idProgressbar,
    wizardAriaDescribedby,
  };
}
