import {
  computed,
  toRef,
} from "vue";

export default function InputAttributesAPI(props) {
  const inputAttributes = toRef(props, "inputAttributes");
  const inputAttributesFrom = toRef(props, "inputAttributesFrom");
  const inputAttributesUntil = toRef(props, "inputAttributesUntil");

  const inputAttributesFromLocal = computed(() => {
    return {
      ...inputAttributes.value,
      ...inputAttributesFrom.value,
    };
  });

  const inputAttributesUntilLocal = computed(() => {
    return {
      ...inputAttributes.value,
      ...inputAttributesUntil.value,
    };
  });

  return {
    inputAttributesFromLocal,
    inputAttributesUntilLocal,
  };
}
