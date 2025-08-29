import {
  computed,
  toRef,
} from "vue";
import {
  AKeysCode,
} from "../../../../../index";

export default function SelectAPI(props, { emit }, {
  isDisabledLocal = computed(() => false),
}) {
  const year = toRef(props, "year");

  const selectYearLocal = ($event, isButtonClick) => {
    $event.stopPropagation();
    $event.preventDefault();
    if (isDisabledLocal.value) {
      return;
    }

    emit("selectYear", { year: year.value, isButtonClick });
  };

  const keypress = $event => {
    if ($event.keyCode === AKeysCode.enter ||
      $event.keyCode === AKeysCode.space) {
      selectYearLocal($event, true);
    }
  };

  return {
    keypress,
    selectYearLocal,
  };
}
