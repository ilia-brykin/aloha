import {
  computed,
  toRef,
} from "vue";

export default function UiCheckboxRadioIsWidthAutoAPI(props) {
  const options = toRef(props, "options");
  const isWidthAuto = toRef(props, "isWidthAuto");
  const isWidthAutoLocal = computed(() => {
    return "isWidthAuto" in options.value ?
      options.value.isWidthAuto :
      isWidthAuto.value;
  });

  return {
    isWidthAutoLocal,
  };
}
