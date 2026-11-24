import {
  computed,
  toRef,
} from "vue";

import {
  forEach,
  isArray,
  isEmpty,
  isPlainObject,
} from "lodash-es";

// number of the fields with errors (a field with several messages counts once)
export function countErrors(errors) {
  if (isPlainObject(errors)) {
    let count = 0;
    forEach(errors, error => {
      count += countErrors(error);
    });
    return count;
  }
  if (isArray(errors)) {
    if (errors.some(error => isPlainObject(error) || isArray(error))) {
      let count = 0;
      forEach(errors, error => {
        count += countErrors(error);
      });
      return count;
    }
    return errors.length ? 1 : 0;
  }
  return errors ? 1 : 0;
}

export default function ErrorsAPI(props) {
  const errors = toRef(props, "errors");

  const hasErrors = computed(() => {
    return !isEmpty(errors.value);
  });

  const errorsCount = computed(() => {
    return countErrors(errors.value);
  });

  return {
    errorsCount,
    hasErrors,
  };
}
