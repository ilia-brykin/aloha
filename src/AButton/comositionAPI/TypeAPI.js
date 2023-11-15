import {
  computed,
  toRef,
} from "vue";

export default function TypeAPI(props) {
  const tag = toRef(props, "tag");
  const type = toRef(props, "type");

  const typeLocal = computed(() => {
    if (tag.value === "button" && type.value) {
      return type.value;
    }
    return undefined;
  });

  return {
    typeLocal,
  };
}
