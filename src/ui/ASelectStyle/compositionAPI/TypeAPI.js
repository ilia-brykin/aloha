import {
  computed,
  toRef,
} from "vue";

export default function TypeAPI(props) {
  const type = toRef(props, "type");

  const typeLocal = computed(() => {
    if (type.value === "selectStyle") {
      return "select";
    }

    if (type.value === "multiselectStyle") {
      return "multiselect";
    }

    return type.value;
  });

  return {
    typeLocal,
  };
}
