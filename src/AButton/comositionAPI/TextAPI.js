import {
  computed,
  toRef,
} from "vue";

import {
  isUndefined,
} from "lodash-es";

export default function TextAPI(props) {
  const text = toRef(props, "text");
  const textScreenReader = toRef(props, "textScreenReader");

  const isTextVisible = computed(() => {
    return !isUndefined(text.value);
  });

  const isTextScreenReaderVisible = computed(() => {
    return !isUndefined(textScreenReader.value);
  });

  return {
    isTextScreenReaderVisible,
    isTextVisible,
  };
}
