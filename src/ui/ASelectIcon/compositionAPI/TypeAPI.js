import {
  computed,
  toRef,
} from "vue";

export default function TypeAPI(props) {
  const type = toRef(props, "type");

  const typeLocal = computed(() => {
    if (type.value === "selectIcon") {
      return "select";
    }

    if (type.value === "multiselectIcon") {
      return "multiselect";
    }

    return type.value;
  });

  return {
    typeLocal,
  };
}
