import {
  AKeysCode,
} from "../../../../../index";

export default function SelectAPI(props, { emit }, {
  isDisabled = () => false,
}) {
  const selectMonth = ($event, month, isButtonClick) => {
    $event.stopPropagation();
    $event.preventDefault();
    if (isDisabled(month)) {
      return;
    }

    emit("select", { month, isButtonClick });
  };

  const keypress = ($event, monthIndex) => {
    if ($event.keyCode === AKeysCode.enter ||
      $event.keyCode === AKeysCode.space) {
      selectMonth($event, monthIndex);
    }
  };

  return {
    keypress,
    selectMonth,
  };
}
