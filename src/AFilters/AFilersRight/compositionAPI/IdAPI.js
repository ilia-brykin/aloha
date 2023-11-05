import {
  computed,
  toRef,
} from "vue";

export default function IdAPI(props) {
  const id = toRef(props, "id");

  const idFilterRight = computed(() => {
    return `${ id.value }_filter_right`;
  });

  return {
    idFilterRight,
  };
}
