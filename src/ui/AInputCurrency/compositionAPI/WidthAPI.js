import {
  computed,
  toRef,
} from "vue";

import {
  isNumber,
  isUndefined,
} from "lodash-es";

export default function WidthAPI(props) {
  const inputWidth = toRef(props, "inputWidth");

  const inputWidthStyleValue = computed(() => {
    let width = inputWidth.value;
    if (isNumber(inputWidth.value)) {
      width = `${ inputWidth.value }px`;
    }
    if (!isUndefined(width)) {
      return {
        "--a_input_number_width": width,
      };
    }

    return {};
  });

  return {
    inputWidthStyleValue,
  };
}
