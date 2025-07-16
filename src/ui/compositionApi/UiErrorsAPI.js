import {
  computed,
  toRef,
} from "vue";

import {
  isArray,
  isString,
  size,
} from "lodash-es";

export default function UiErrorsAPI(props, {
  htmlIdLocal = computed(() => ""),
}) {
  const errors = toRef(props, "errors");

  const isErrors = computed(() => {
    if (!errors.value) {
      return false;
    }
    if (isString(errors.value)) {
      return true;
    }
    if (isArray(errors.value)) {
      return !!size(errors.value);
    }
    return false;
  });

  const errorsId = computed(() => {
    return `${ htmlIdLocal.value }_errors_text`;
  });

  return {
    errorsId,
    isErrors,
  };
}
