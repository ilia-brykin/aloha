import {
  computed,
  ref,
} from "vue";

import AKeysCode from "../../../../../const/AKeysCode";

export default function FocusAPI(props, {
  getCurrentId = () => {},
  timesFiltered = computed(() => []),
}) {
  const timeIndexForFocus = ref(undefined);
  const columnIndexForFocus = ref(undefined);

  const fullIndexForFocus = computed(() => {
    return `${ columnIndexForFocus.value }_${ timeIndexForFocus.value }`;
  });

  const idForFocus = computed(() => {
    return getCurrentId({
      columnIndex: columnIndexForFocus.value,
      rowIndex: timeIndexForFocus.value,
    });
  });

  const setFocusToElement = idForFocusElement => {
    const ELEMENT = document.getElementById(idForFocusElement);
    if (ELEMENT) {
      ELEMENT.focus();
    }
  };

  const setFocusToLastTime = () => {
    const CURRENT_TIMES = timesFiltered.value[columnIndexForFocus.value];
    if (timeIndexForFocus.value > 0) {
      timeIndexForFocus.value--;
    } else {
      timeIndexForFocus.value = CURRENT_TIMES.length - 1;
    }
    setFocusToElement(idForFocus.value);
  };

  const setFocusToNextTime = () => {
    const CURRENT_TIMES = timesFiltered.value[columnIndexForFocus.value];
    if (timeIndexForFocus.value < CURRENT_TIMES.length - 1) {
      timeIndexForFocus.value++;
    } else {
      timeIndexForFocus.value = 0;
    }
    setFocusToElement(idForFocus.value);
  };

  const setFocusToLastTimeColumn = () => {
    if (columnIndexForFocus.value > 0) {
      columnIndexForFocus.value--;
    } else {
      columnIndexForFocus.value = timesFiltered.value.length - 1;
    }
    timeIndexForFocus.value = 0;
    setFocusToElement(idForFocus.value);
  };

  const setFocusToNextTimeColumn = () => {
    if (columnIndexForFocus.value < timesFiltered.value.length - 1) {
      columnIndexForFocus.value++;
    } else {
      columnIndexForFocus.value = 0;
    }
    timeIndexForFocus.value = 0;
    setFocusToElement(idForFocus.value);
  };

  const stopCurrentEvent = $event => {
    $event.preventDefault();
    $event.stopPropagation();
  };

  const pressButton = $event => {
    const KEY_CODE = $event.keyCode;
    if (KEY_CODE === AKeysCode.arrowUp) {
      setFocusToLastTime();
      stopCurrentEvent($event);
    } else if (KEY_CODE === AKeysCode.arrowDown) {
      setFocusToNextTime();
      stopCurrentEvent($event);
    } else if (KEY_CODE === AKeysCode.arrowLeft) {
      setFocusToLastTimeColumn();
      stopCurrentEvent($event);
    } else if (KEY_CODE === AKeysCode.arrowRight) {
      setFocusToNextTimeColumn();
      stopCurrentEvent($event);
    }
  };

  const setDefaultTimeForFocus = () => {
    timeIndexForFocus.value = 0;
    columnIndexForFocus.value = 0;
  };

  return {
    fullIndexForFocus,
    idForFocus,
    pressButton,
    setDefaultTimeForFocus,
  };
}
