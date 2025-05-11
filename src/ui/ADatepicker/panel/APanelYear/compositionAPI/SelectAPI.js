import {
  toRef,
} from "vue";

import {
  isFunction,
} from "lodash-es";

export default function SelectAPI(props, { emit }) {
  const disabledYear = toRef(props, "disabledYear");

  const isDisabled = year => {
    return !!(isFunction(disabledYear.value) && disabledYear.value(year));
  };

  const selectYear = ({ year, isButtonClick }) => {
    if (isDisabled(year)) {
      return;
    }

    emit("select", ({ year, isButtonClick }));
  };

  return {
    isDisabled,
    selectYear,
  };
}
