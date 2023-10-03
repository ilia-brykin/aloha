import {
  computed,
  toRef,
} from "vue";

export default function DisabledAPI(props) {
  const disabled = toRef(props, "disabled");
  const loading = toRef(props, "loading");

  const disabledLocal = computed(() => {
    return disabled.value || loading.value;
  });

  return {
    disabledLocal,
  };
}
