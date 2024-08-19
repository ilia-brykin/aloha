import {
  computed,
  toRef,
} from "vue";

export default function UiDisabledAPI(props) {
  const disabled = toRef(props, "disabled");

  const disabledAttribut = computed(() => {
    if (disabled.value === true) {
      return true;
    }

    return undefined;
  });

  return {
    disabledAttribut,
  };
}
