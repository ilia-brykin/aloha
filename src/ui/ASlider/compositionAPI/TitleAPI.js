import {
  computed,
  toRef,
} from "vue";

import {
  isFunction,
  isNumber,
} from "lodash-es";

export default function TitleAPI(props, {
  firstValue = computed(() => 0),
  secondValue = computed(() => 0),
}) {
  const formatValue = toRef(props, "formatValue");

  const formatTitleLocal = ({ value }) => {
    if (isFunction(formatValue.value)) {
      return formatValue.value({ value });
    }

    if (isNumber(value)) {
      return value;
    }

    return "";
  };

  const firstButtonTitle = computed(() => {
    return formatTitleLocal({ value: firstValue.value });
  });

  const secondButtonTitle = computed(() => {
    return formatTitleLocal({ value: secondValue.value });
  });

  return {
    firstButtonTitle,
    secondButtonTitle,
  };
}
