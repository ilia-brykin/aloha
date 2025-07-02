import {
  computed,
} from "vue";

export default function AttributesAPI(props, {
  htmlIdLocal = computed(() => undefined),
}) {
  const btnIdAdd = computed(() => {
    return `${ htmlIdLocal.value }_btn_add`;
  });

  return {
    btnIdAdd,
  };
}
