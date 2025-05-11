import {
  computed,
  ref,
  toRef,
} from "vue";

import AKeysCode from "../../../../../const/AKeysCode";
import {
  isUndefined,
} from "lodash-es";

export default function FocusAPI(props, { emit }) {
  const id = toRef(props, "id");

  const yearIndexForFocus = ref(undefined);

  const prefixForId = computed(() => {
    return `${ id.value }_year_`;
  });

  const getIdForYear = yearIndex => {
    return `${ prefixForId.value }${ yearIndex }`;
  };

  const idForFocus = computed(() => {
    if (!isUndefined(yearIndexForFocus.value)) {
      return getIdForYear(yearIndexForFocus.value);
    }
    return "";
  });

  const stopCurrentEvent = $event => {
    $event.preventDefault();
    $event.stopPropagation();
  };

  const setFocusToElementWithTimeout = idForFocusElement => {
    setTimeout(() => {
      const ELEMENT = document.getElementById(idForFocusElement);
      if (ELEMENT) {
        ELEMENT.focus();
      }
    });
  };

  const setFocusToLastYear = () => {
    const NEW_YEAR_FOR_FOCUS = yearIndexForFocus.value - 1;
    if (NEW_YEAR_FOR_FOCUS >= 0 && NEW_YEAR_FOR_FOCUS <= 9) {
      yearIndexForFocus.value = NEW_YEAR_FOR_FOCUS;
    } else {
      emit("handleIconYear", -1);
      yearIndexForFocus.value = 9;
    }
    setFocusToElementWithTimeout(idForFocus.value);
  };

  const setFocusToNextYear = () => {
    const NEW_YEAR_FOR_FOCUS = yearIndexForFocus.value + 1;
    if (NEW_YEAR_FOR_FOCUS <= 9 && NEW_YEAR_FOR_FOCUS >= 0) {
      yearIndexForFocus.value = NEW_YEAR_FOR_FOCUS;
    } else {
      emit("handleIconYear", 1);
      yearIndexForFocus.value = 0;
    }
    setFocusToElementWithTimeout(idForFocus.value);
  };

  const pressButton = $event => {
    const KEY_CODE = $event.keyCode;
    if (KEY_CODE === AKeysCode.arrowUp || KEY_CODE === AKeysCode.arrowLeft) {
      setFocusToLastYear();
      stopCurrentEvent($event);
    } else if (KEY_CODE === AKeysCode.arrowDown || KEY_CODE === AKeysCode.arrowRight) {
      setFocusToNextYear();
      stopCurrentEvent($event);
    }
  };

  return {
    idForFocus,
    prefixForId,
    pressButton,
    yearIndexForFocus,
  };
}
