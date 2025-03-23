import {
  computed,
  toRef,
} from "vue";

import {
  isUndefined,
} from "lodash-es";

export default function ReadonlyAPI(props) {
  const readonlyDefault = toRef(props, "readonlyDefault");
  const readonlyDefaultFrom = toRef(props, "readonlyDefaultFrom");
  const readonlyDefaultUntil = toRef(props, "readonlyDefaultUntil");

  const readonlyDefaultFromLocal = computed(() => {
    if (isUndefined(readonlyDefaultFrom.value)) {
      return readonlyDefault.value;
    }

    return readonlyDefaultFrom.value;
  });

  const readonlyDefaultUntilLocal = computed(() => {
    if (isUndefined(readonlyDefaultUntil.value)) {
      return readonlyDefault.value;
    }

    return readonlyDefaultUntil.value;
  });

  return {
    readonlyDefaultFromLocal,
    readonlyDefaultUntilLocal,
  };
}
