import {
  computed,
  toRef,
} from "vue";

export default function InputAttributesAPI(props) {
  const inputAttributes = toRef(props, "inputAttributes");
  const inputAttributesMax = toRef(props, "inputAttributesMax");
  const inputAttributesMin = toRef(props, "inputAttributesMin");

  const inputAttributesMaxLocal = computed(() => {
    return {
      ...inputAttributes.value,
      ...inputAttributesMax.value,
    };
  });

  const inputAttributesMinLocal = computed(() => {
    return {
      ...inputAttributes.value,
      ...inputAttributesMin.value,
    };
  });

  return {
    inputAttributesMaxLocal,
    inputAttributesMinLocal,
  };
}
