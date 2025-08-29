import {
  computed,
  ref,
  toRef,
} from "vue";

import AKeysCode from "../../../../../const/AKeysCode";
import moment from "moment";
import {
  setFocusToElement,
} from "../../../../../utils/utilsDOM";

export default function FocusAPI(props, { emit }, {
  dayFromValueOrToday = computed(() => ""),
}) {
  const calendarMonth = toRef(props, "calendarMonth");
  const calendarYear = toRef(props, "calendarYear");
  const id = toRef(props, "id");

  const dayForFocusButton = ref(undefined);

  const idForFocus = computed(() => {
    if (dayForFocusButton.value) {
      return `${ id.value }_${ dayForFocusButton.value }`;
    }

    return "";
  });

  const daysInMonth = computed(() => {
    return moment(`${ calendarYear.value }_${ calendarMonth.value + 1 }`, "YYYY-MM").daysInMonth();
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

  const setFocusToPast = minusDays => {
    const NEW_DAY_FOR_BUTTON = dayForFocusButton.value - minusDays;
    if (NEW_DAY_FOR_BUTTON > 0) {
      dayForFocusButton.value = NEW_DAY_FOR_BUTTON;
    } else {
      emit("handleIconMonth", -1);
      setTimeout(() => {
        dayForFocusButton.value = daysInMonth.value - Math.abs(NEW_DAY_FOR_BUTTON);
      });
    }
    setFocusToElementWithTimeout(idForFocus.value);
  };

  const setFocusToFuture = plusDays => {
    const NEW_DAY_FOR_BUTTON = dayForFocusButton.value + plusDays;
    if (NEW_DAY_FOR_BUTTON <= daysInMonth.value) {
      dayForFocusButton.value = NEW_DAY_FOR_BUTTON;
    } else {
      const ALT_DAY_IN_MONTH = daysInMonth.value;
      emit("handleIconMonth", 1);
      dayForFocusButton.value = NEW_DAY_FOR_BUTTON - ALT_DAY_IN_MONTH;
    }
    setFocusToElementWithTimeout(idForFocus.value);
  };

  const pressButton = $event => {
    const KEY_CODE = $event.keyCode;
    if (KEY_CODE === AKeysCode.arrowUp) {
      setFocusToPast(7);
      stopCurrentEvent($event);
    } else if (KEY_CODE === AKeysCode.arrowDown) {
      setFocusToFuture(7);
      stopCurrentEvent($event);
    } else if (KEY_CODE === AKeysCode.arrowLeft) {
      setFocusToPast(1);
      stopCurrentEvent($event);
    } else if (KEY_CODE === AKeysCode.arrowRight) {
      setFocusToFuture(1);
      stopCurrentEvent($event);
    }
  };

  const setDefaultDayForFocusButton = () => {
    dayForFocusButton.value = dayFromValueOrToday.value;
  };

  return {
    idForFocus,
    pressButton,
    setDefaultDayForFocusButton,
  };
}
