import {
  computed,
  toRef,
} from "vue";

import {
  isEmpty,
} from "lodash-es";

export default function ErrorsAPI(props) {
  const errors = toRef(props, "errors");

  const hasErrors = computed(() => {
    return !isEmpty(errors.value);
  });

  return {
    hasErrors,
  };
}
