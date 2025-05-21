import {
  computed,
  toRef,
} from "vue";

import {
  getTranslatedAttributes,
} from "../../ATranslation/compositionAPI/UtilsAPI";

export default function AriaLabelAPI(props) {
  const ariaLabel = toRef(props, "ariaLabel");
  const extra = toRef(props, "extra");

  const ariaLabelAttributes = computed(() => {
    return getTranslatedAttributes({
      attr: "aria-label",
      placeholder: ariaLabel.value,
      extra: extra.value,
    });
  });

  return {
    ariaLabelAttributes,
  };
}
