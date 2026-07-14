import {
  computed,
  toRef,
} from "vue";

export default function DisabledAPI(props) {
  const type = toRef(props, "type");
  const disabled = toRef(props, "disabled");

  const disabledLocal = computed(() => {
    if (["button", "submit", "reset"].indexOf(type.value) !== -1 &&
      disabled.value) {
      return true;
    }

    return undefined;
  });

  return {
    disabledLocal,
  };
}
