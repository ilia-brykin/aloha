import {
  computed,
  toRef,
} from "vue";

import {
  isArray,
  isEmpty,
  isNil,
  isPlainObject,
  isUndefined,
} from "lodash-es";

export default function TitleAPI(props, {
  isTextOrHtmlScreenReaderVisible = computed(() => false),
  isTextOrHtmlVisible = computed(() => false),
} = {}) {
  const ariaLabel = toRef(props, "ariaLabel");
  const title = toRef(props, "title");

  const isTitleVisible = computed(() => {
    if (isArray(title.value) && title.value.length > 0) {
      return true;
    }
    if (isPlainObject(title.value)) {
      return !isEmpty(title.value);
    }
    return !isUndefined(title.value);
  });

  // Icon-only element: the title is the only name, so it is also rendered for screen readers.
  const isTitleScreenReaderFallback = computed(() => {
    return isTitleVisible.value &&
      !isTextOrHtmlVisible.value &&
      !isTextOrHtmlScreenReaderVisible.value &&
      (isNil(ariaLabel.value) || ariaLabel.value === "");
  });

  return {
    isTitleScreenReaderFallback,
    isTitleVisible,
  };
}
