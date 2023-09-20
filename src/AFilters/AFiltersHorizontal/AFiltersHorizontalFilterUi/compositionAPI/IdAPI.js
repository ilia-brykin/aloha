import {
  computed,
  toRef,
} from "vue";

export default function IdAPI(props) {
  const id = toRef(props, "id");

  const idPrefix = computed(() => {
    return `${ id.value }_`;
  });

  return {
    idPrefix,
  };
}
