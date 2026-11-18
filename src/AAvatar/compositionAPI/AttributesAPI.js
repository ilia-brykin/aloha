import {
  computed,
  toRef,
} from "vue";

import {
  getTranslatedText,
} from "../../ATranslation/compositionAPI/UtilsAPI";

import {
  toUpper,
} from "lodash-es";

export default function AttributesAPI(props) {
  const alt = toRef(props, "alt");
  const decorative = toRef(props, "decorative");
  const name = toRef(props, "name");
  const status = toRef(props, "status");
  const statusText = toRef(props, "statusText");

  const statusTextLocal = computed(() => {
    if (!status.value) {
      return "";
    }
    return getTranslatedText({
      placeholder: statusText.value || `_A_AVATAR_STATUS_${ toUpper(status.value) }_`,
    });
  });

  const ariaLabel = computed(() => {
    const LABEL = getTranslatedText({ placeholder: alt.value }) ||
      name.value ||
      getTranslatedText({ placeholder: "_A_AVATAR_ARIA_LABEL_" });
    return statusTextLocal.value ? `${ LABEL }, ${ statusTextLocal.value }` : LABEL;
  });

  /*
   * The avatar is one image for screen readers: the name and the status are read together.
   * A decorative avatar (the name is written next to it) is hidden.
   */
  const attributes = computed(() => {
    if (decorative.value) {
      return {
        "aria-hidden": "true",
      };
    }
    return {
      role: "img",
      "aria-label": ariaLabel.value,
    };
  });

  return {
    attributes,
  };
}
