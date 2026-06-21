import {
  computed,
  toRef,
} from "vue";

export default function IdAPI(props) {
  const id = toRef(props, "id");

  const idBtnUp = computed(() => {
    return `${ id.value }_up`;
  });

  const idBtnDown = computed(() => {
    return `${ id.value }_down`;
  });

  return {
    idBtnDown,
    idBtnUp,
  };
}
