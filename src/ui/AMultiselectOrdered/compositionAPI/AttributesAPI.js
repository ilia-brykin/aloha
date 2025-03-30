import {
  computed,
} from "vue";

export default function AttributesAPI(props, {
  htmlIdLocal = computed(() => ""),
}) {
  const idForSelect = computed(() => `${ htmlIdLocal.value }_select`);

  return {
    idForSelect,
  };
}
