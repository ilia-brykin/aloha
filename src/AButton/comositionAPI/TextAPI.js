import {
  computed,
  toRef,
} from "vue";

import {
  isEmpty,
  isNil,
  isPlainObject,
} from "lodash-es";

export default function TextAPI(props) {
  const html = toRef(props, "html");
  const htmlScreenReader = toRef(props, "htmlScreenReader");
  const safeHtml = toRef(props, "safeHtml");
  const safeHtmlScreenReader = toRef(props, "safeHtmlScreenReader");
  const text = toRef(props, "text");
  const textScreenReader = toRef(props, "textScreenReader");

  const isTextVisible = computed(() => {
    if (isPlainObject(text.value)) {
      return !isEmpty(text.value);
    }
    return !isNil(text.value) && text.value !== "";
  });

  const isSafeHtmlVisible = computed(() => {
    if (isPlainObject(safeHtml.value)) {
      return !isEmpty(safeHtml.value);
    }
    return !isNil(safeHtml.value) && safeHtml.value !== "";
  });

  const isHtmlVisible = computed(() => {
    if (isPlainObject(html.value)) {
      return !isEmpty(html.value);
    }
    return !isNil(html.value) && html.value !== "";
  });

  const isTextOrHtmlVisible = computed(() => {
    return isTextVisible.value ||
      isSafeHtmlVisible.value ||
      isHtmlVisible.value;
  });

  const isTextScreenReaderVisible = computed(() => {
    if (isPlainObject(textScreenReader.value)) {
      return !isEmpty(textScreenReader.value);
    }
    return !isNil(textScreenReader.value) && textScreenReader.value !== "";
  });

  const isSafeHtmlScreenReaderVisible = computed(() => {
    if (isPlainObject(safeHtmlScreenReader.value)) {
      return !isEmpty(safeHtmlScreenReader.value);
    }
    return !isNil(safeHtmlScreenReader.value) && safeHtmlScreenReader.value !== "";
  });

  const isHtmlScreenReaderVisible = computed(() => {
    if (isPlainObject(htmlScreenReader.value)) {
      return !isEmpty(htmlScreenReader.value);
    }
    return !isNil(htmlScreenReader.value) && htmlScreenReader.value !== "";
  });

  const isTextOrHtmlScreenReaderVisible = computed(() => {
    return isTextScreenReaderVisible.value ||
      isSafeHtmlScreenReaderVisible.value ||
      isHtmlScreenReaderVisible.value;
  });

  return {
    isTextOrHtmlVisible,
    isTextOrHtmlScreenReaderVisible,
  };
}
