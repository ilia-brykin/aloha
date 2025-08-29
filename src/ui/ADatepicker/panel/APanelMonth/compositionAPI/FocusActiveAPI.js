import {
  computed,
} from "vue";

export default function FocusActiveAPI({
  idForFocus = computed(() => ""),
  setDefaultMonthForFocus = () => {},
  setListenerForPressButtons = () => {},
}) {
  const setFocusToActiveMonth = () => {
    setTimeout(() => {
      setDefaultMonthForFocus();
      document.getElementById(idForFocus.value).focus();
      setListenerForPressButtons();
    });
  };

  return {
    setFocusToActiveMonth,
  };
}
