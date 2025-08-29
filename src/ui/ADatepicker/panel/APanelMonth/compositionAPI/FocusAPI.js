import {
  computed,
  ref,
  toRef,
} from "vue";
import {
  AKeysCode,
  setFocusToElement,
} from "../../../../../index";

import {
  isUndefined,
} from "lodash-es";

export default function FocusAPI(props, { emit }, {
  getIdForMonth = () => "",
}) {
  const value = toRef(props, "value");

  const monthIndexForFocus = ref(undefined);

  const idForFocus = computed(() => {
    if (!isUndefined(monthIndexForFocus.value)) {
      return getIdForMonth(monthIndexForFocus.value);
    }
    return "";
  });

  const monthFromValue = computed(() => {
    if (value.value) {
      return new Date(value.value).getMonth();
    }
    return "";
  });

  const monthFromValueOrToday = computed(() => {
    return monthFromValue.value || new Date().getMonth();
  });

  const setFocusToElementWithTimeout = idForFocusElement => {
    setTimeout(() => {
      setFocusToElement({ selector: `#${ idForFocusElement }` });
    });
  };

  const stopCurrentEvent = $event => {
    $event.preventDefault();
    $event.stopPropagation();
  };

  const setFocusToLastMonth = () => {
    const NEW_MONTH_FOR_FOCUS = monthIndexForFocus.value - 1;
    if (NEW_MONTH_FOR_FOCUS >= 0) {
      monthIndexForFocus.value = NEW_MONTH_FOR_FOCUS;
    } else {
      emit("handleIconYear", -1);
      monthIndexForFocus.value = 11;
    }
    setFocusToElementWithTimeout(idForFocus.value);
  };

  const setFocusToNextMonth = () => {
    const NEW_MONTH_FOR_FOCUS = monthIndexForFocus.value + 1;
    if (NEW_MONTH_FOR_FOCUS <= 11) {
      monthIndexForFocus.value = NEW_MONTH_FOR_FOCUS;
    } else {
      emit("handleIconYear", 1);
      monthIndexForFocus.value = 0;
    }
    setFocusToElementWithTimeout(idForFocus.value);
  };

  const pressButton = $event => {
    const KEY_CODE = $event.keyCode;
    if (KEY_CODE === AKeysCode.arrowUp || KEY_CODE === AKeysCode.arrowLeft) {
      setFocusToLastMonth();
      stopCurrentEvent($event);
    } else if (KEY_CODE === AKeysCode.arrowDown || KEY_CODE === AKeysCode.arrowRight) {
      setFocusToNextMonth();
      stopCurrentEvent($event);
    }
  };

  const setDefaultMonthForFocus = () => {
    monthIndexForFocus.value = monthFromValueOrToday.value;
  };

  return {
    idForFocus,
    monthIndexForFocus,
    pressButton,
    setDefaultMonthForFocus,
  };
}
