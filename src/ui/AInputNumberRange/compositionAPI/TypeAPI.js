import {
  computed,
  toRef,
} from "vue";

export default function TypeAPI(props) {
  const type = toRef(props, "type");

  const typeLocal = computed(() => {
    return type.value.replace("Range", "");
  });

  return {
    typeLocal,
  };
}
