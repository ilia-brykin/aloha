import {
  computed,
  toRef,
} from "vue";

export default function AttributesAPI(props) {
  const isDisabled = toRef(props, "isDisabled");
  const prefixForId = toRef(props, "prefixForId");
  const year = toRef(props, "year");
  const yearFromValue = toRef(props, "yearFromValue");
  const yearIndex = toRef(props, "yearIndex");

  const isDisabledLocal = computed(() => {
    return isDisabled.value(year.value);
  });

  const isYearActive = computed(() => {
    return yearFromValue.value === year.value;
  });

  const idForList = computed(() => {
    return `${ prefixForId.value }${ yearIndex.value }`;
  });

  const ariaSelected = computed(() => {
    return `${ isYearActive.value }`;
  });

  return {
    ariaSelected,
    idForList,
    isDisabledLocal,
    isYearActive,
  };
}
