import {
  computed,
  toRef,
} from "vue";

export default function NumberAttributesAPI(props) {
  const max = toRef(props, "max");
  const min = toRef(props, "min");
  const step = toRef(props, "step");

  const numberAttributes = computed(() => {
    return {
      max: max.value,
      min: min.value,
      step: step.value,
    };
  });

  return {
    numberAttributes,
  };
}

