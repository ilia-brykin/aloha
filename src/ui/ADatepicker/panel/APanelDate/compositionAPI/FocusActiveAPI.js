import {
  computed,
} from "vue";

import {
  setFocusToElement,
} from "../../../../../utils/utilsDOM";

export default function FocusActiveAPI({
  idForFocus = computed(() => ""),
  setDefaultDayForFocusButton = () => {},
  setListenerForPressButtons = () => {},
}) {
  const setFocusToActiveDay = () => {
    setTimeout(() => {
      setDefaultDayForFocusButton();
      setFocusToElement({
        selector: `#${ idForFocus.value }`,
      });
      setListenerForPressButtons();
    });
  };

  return {
    setFocusToActiveDay,
  };
}
