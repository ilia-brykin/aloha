import {
  computed,
  toRef,
} from "vue";

export default function NumberAttributesAPI(props) {
  const max = toRef(props, "max");
  const min = toRef(props, "min");
  const step = toRef(props, "step");
  const type = toRef(props, "type");


  const isTypeNumber = computed(() => {
    return type.value === "number";
  });

  const inputType = computed(() => {
    return isTypeNumber.value ?
      "number" :
      "text";
  });

  const numberAttributes = computed(() => {
    if (!isTypeNumber.value) {
      return {};
    }
    return {
      max: max.value,
      min: min.value,
      step: step.value,
    };
  });

  return {
    inputType,
    isTypeNumber,
    numberAttributes,
  };
}

