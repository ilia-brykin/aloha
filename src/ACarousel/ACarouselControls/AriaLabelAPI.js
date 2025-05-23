import {
  computed,
} from "vue";

import {
  getTranslatedAttributes,
} from "../../ATranslation/compositionAPI/UtilsAPI";

export default function AriaLabelAPI() {
  const ariaLabelTabsAttributes = computed(() => {
    return getTranslatedAttributes({
      attr: "aria-label",
      placeholder: "_A_CAROUSEL_CONTROLS_SLIDES_",
    });
  });

  return {
    ariaLabelTabsAttributes,
  };
}
