import {
  computed,
} from "vue";

export default function FocusActiveAPI({
  idForFocus = computed(() => ""),
  setDefaultTimeForFocus = () => {},
  setListenerForPressButtons = () => {},
}) {
  const setFocusToActiveTime = () => {
    setTimeout(() => {
      setDefaultTimeForFocus();
      document.getElementById(idForFocus.value).focus();
      setListenerForPressButtons();
    });
  };

  return {
    setFocusToActiveTime,
  };
}
