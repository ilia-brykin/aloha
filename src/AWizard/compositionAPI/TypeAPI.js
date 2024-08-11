import {
  computed,
  toRef,
} from "vue";

export default function TypeAPI(props) {
  const subType = toRef(props, "subType");
  const type = toRef(props, "type");

  const subTypeLocal = computed(() => {
    if (subType.value) {
      return subType.value;
    }

    if (type.value === "line") {
      return "square";
    }

    return undefined;
  });

  return {
    subTypeLocal,
  };
}
