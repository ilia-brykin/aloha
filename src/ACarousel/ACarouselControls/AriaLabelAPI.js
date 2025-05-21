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
      placeholder: "Slides",
    });
  });

  return {
    ariaLabelTabsAttributes,
  };
}
