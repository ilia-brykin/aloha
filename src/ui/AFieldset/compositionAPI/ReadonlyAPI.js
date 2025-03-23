import {
  computed,
  toRef,
} from "vue";

import {
  isPlainObject,
  isString,
} from "lodash-es";

export default function ReadonlyAPI(props) {
  const classColumns = toRef(props, "classColumns");

  const classFieldset = "a_form_element_readonly_value_fieldset";

  const classColumnsReadonly = computed(() => {
    if (isPlainObject(classColumns.value)) {
      return {
        ...classColumns.value,
        [classFieldset]: true,
      };
    }
    if (isString(classColumns.value) && classColumns.value.length) {
      return `${ classColumns.value } ${ classFieldset }`;
    }

    return classFieldset;
  });

  return {
    classColumnsReadonly,
  };
}
