import {
  computed,
  toRef,
} from "vue";

export default function IdAPI(props) {
  const id = toRef(props, "id");

  const idFilterTop = computed(() => {
    return `${ id.value }_filter_top`;
  });

  return {
    idFilterTop,
  };
}
