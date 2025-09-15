import {
  computed,
  toRef,
} from "vue";

export default function ModeAPI(props) {
  const mode = toRef(props, "mode");

  const isModeOnePerGroup = computed(() => {
    return mode.value === "one_per_group";
  });

  return {
    isModeOnePerGroup,
  };
}
