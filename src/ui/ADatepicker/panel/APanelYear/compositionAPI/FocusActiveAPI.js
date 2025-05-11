import {
  computed,
  ref,
  toRef,
} from "vue";

export default function FocusActiveAPI(props, {
  idForFocus = computed(() => ""),
  setListenerForPressButtons = () => {},
  yearIndexForFocus = ref(undefined),
}) {
  const firstYear = toRef(props, "firstYear");
  const value = toRef(props, "value");

  const firstYearLocal = computed(() => {
    return Math.floor(firstYear.value / 10) * 10;
  });

  const yearFromValue = computed(() => {
    return value.value && new Date(value.value).getFullYear();
  });

  const yearFromValueOrToday = computed(() => {
    return yearFromValue.value || new Date().getFullYear();
  });

  const yearIndexFromValueOrToday = computed(() => {
    const DIFF_FIRST_AND_VALUE_YEAR = yearFromValueOrToday.value - firstYearLocal.value;
    if (DIFF_FIRST_AND_VALUE_YEAR <= 9 && DIFF_FIRST_AND_VALUE_YEAR >= 0) {
      return DIFF_FIRST_AND_VALUE_YEAR;
    }

    return 0;
  });

  const setDefaultYearForFocus = () => {
    yearIndexForFocus.value = yearIndexFromValueOrToday.value;
  };

  const setFocusToActiveYear = () => {
    setTimeout(() => {
      setDefaultYearForFocus();
      document.getElementById(idForFocus.value).focus();
      setListenerForPressButtons();
    });
  };

  return {
    firstYearLocal,
    setFocusToActiveYear,
    yearFromValue,
  };
}
