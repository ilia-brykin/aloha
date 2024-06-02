import {
  computed,
  toRef,
} from "vue";

export default function IdAPI(props) {
  const id = toRef(props, "id");

  const idLocal = computed(() => {
    return `${ id.value }_legend`;
  });

  const idGroup = computed(() => {
    return `${ id.value }_group`;
  });

  return {
    idGroup,
    idLocal,
  };
}
