import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  cloneDeep,
  forEach,
  isEmpty,
} from "lodash-es";

export default function ErrorsAPI(props) {
  const columns = toRef(props, "columns");

  const errorsLocal = ref({});

  const hasErrors = computed(() => {
    return !isEmpty(errorsLocal.value);
  });

  const optionsListForErrors = computed(() => {
    const OPTIONS_LIST = [];
    forEach(columns.value, column => {
      const OPTIONS = cloneDeep(column.formElement) || {};
      OPTIONS.type = OPTIONS.type || "text";
      OPTIONS.label = OPTIONS.label || column.label;
      OPTIONS.id = OPTIONS.id || column.id;
      OPTIONS_LIST.push(OPTIONS);
    });

    return OPTIONS_LIST;
  });

  return {
    errorsLocal,
    hasErrors,
    optionsListForErrors,
  };
}
