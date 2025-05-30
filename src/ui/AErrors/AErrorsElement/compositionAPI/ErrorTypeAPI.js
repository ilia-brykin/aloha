import {
  computed,
  toRef,
} from "vue";

import {
  isArray,
  isPlainObject,
  isString,
} from "lodash-es";

export default function ErrorTypeAPI(props) {
  const error = toRef(props, "error");

  const isErrorString = computed(() => {
    return isString(error.value);
  });

  const isErrorArray = computed(() => {
    return isArray(error.value);
  });

  const isErrorObject = computed(() => {
    return isPlainObject(error.value);
  });

  return {
    isErrorArray,
    isErrorObject,
    isErrorString,
  };
}
