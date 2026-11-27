import {
  computed,
  toRef,
} from "vue";

import UtilsAPI from "../../ATranslation/compositionAPI/UtilsAPI";

export default function AttributesAPI(props) {
  const ariaLabel = toRef(props, "ariaLabel");
  const ariaLabelSteps = toRef(props, "ariaLabelSteps");
  const extra = toRef(props, "extra");
  const id = toRef(props, "id");

  const {
    getTranslationAttributes,
    getTranslatedText,
    isPlaceholderTranslate,
  } = UtilsAPI();

  const getAttributes = value => {
    const IS_TRANSLATE = isPlaceholderTranslate(value);
    return getTranslationAttributes({
      attr: "aria-label",
      value,
      translation: IS_TRANSLATE ? getTranslatedText({ placeholder: value, extra: extra.value }) : undefined,
      isTranslate: IS_TRANSLATE,
    });
  };

  // without a name (e.g. in AModalWizard, the modal has the heading) the wizard is no group
  const ariaLabelAttributes = computed(() => {
    return ariaLabel.value ? { role: "group", ...getAttributes(ariaLabel.value) } : {};
  });

  const ariaLabelStepsAttributes = computed(() => getAttributes(ariaLabelSteps.value));

  const idProgressbar = computed(() => {
    return `${ id.value }_progressbar`;
  });

  return {
    ariaLabelAttributes,
    ariaLabelStepsAttributes,
    idProgressbar,
  };
}
