import {
  toRef,
} from "vue";

import AKeysCode from "../../../../../const/AKeysCode";
import {
  isFunction,
} from "lodash-es";

export default function SelectAPI(props, { emit }) {
  const disabledTime = toRef(props, "disabledTime");

  const selectTime = (time, statusClose) => {
    if (isFunction(disabledTime.value) && disabledTime.value(time)) {
      return;
    }

    emit("select", new Date(time), statusClose);
  };

  const keypress = ($event, time, statusClose) => {
    if ($event.keyCode === AKeysCode.enter ||
      $event.keyCode === AKeysCode.space) {
      selectTime(time, statusClose);
      $event.stopPropagation();
      $event.preventDefault();
    }
  };

  return {
    keypress,
    selectTime,
  };
}
