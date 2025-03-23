import {
  computed,
  toRef,
} from "vue";

import {
  isUndefined,
} from "lodash-es";

export default function ReadonlyAPI(props) {
  const readonlyDefault = toRef(props, "readonlyDefault");
  const readonlyDefaultMax = toRef(props, "readonlyDefaultMax");
  const readonlyDefaultMin = toRef(props, "readonlyDefaultMin");

  const readonlyDefaultMaxLocal = computed(() => {
    if (isUndefined(readonlyDefaultMax.value)) {
      return readonlyDefault.value;
    }

    return readonlyDefaultMax.value;
  });

  const readonlyDefaultMinLocal = computed(() => {
    if (isUndefined(readonlyDefaultMin.value)) {
      return readonlyDefault.value;
    }

    return readonlyDefaultMin.value;
  });

  return {
    readonlyDefaultMaxLocal,
    readonlyDefaultMinLocal,
  };
}
