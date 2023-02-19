import {
  computed,
  toRef,
} from "vue";

export default function AttributesAPI(props) {
  const action = toRef(props, "action");
  const useActionClass = toRef(props, "useActionClass");

  const attributesAction = computed(() => {
    const ATTRIBUTES = {
      class: "a_dropdown__item",
      ...action.value,
    };
    if (!useActionClass.value) {
      ATTRIBUTES.class = "a_dropdown__item";
    }
    return ATTRIBUTES;
  });

  return {
    attributesAction,
  };
}
