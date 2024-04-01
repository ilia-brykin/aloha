import {
  computed,
  toRef,
} from "vue";

export default function TextAfterAPI(props) {
  const required = toRef(props, "required");

  const textAfterLabel = computed(() => {
    return required.value ?
      "*" :
      "";
  });

  return {
    textAfterLabel,
  };
}
