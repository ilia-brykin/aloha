import {
  computed,
  toRef,
} from "vue";

export default function InputAttributesAPI(props, {
  htmlIdLocal = computed(() => ""),
  idFrom = computed(() => ""),
  idUntil = computed(() => ""),
}) {
  const inputAttributes = toRef(props, "inputAttributes");
  const inputAttributesFrom = toRef(props, "inputAttributesFrom");
  const inputAttributesUntil = toRef(props, "inputAttributesUntil");

  const idLabel = computed(() => {
    return `${ htmlIdLocal.value }_label`;
  });

  const inputAttributesFromLocal = computed(() => {
    return {
      "aria-labelledby": `${ idLabel.value } ${ idFrom.value }`,
      ...inputAttributes.value,
      ...inputAttributesFrom.value,
    };
  });

  const inputAttributesUntilLocal = computed(() => {
    return {
      "aria-labelledby": `${ idLabel.value } ${ idUntil.value }`,
      ...inputAttributes.value,
      ...inputAttributesUntil.value,
    };
  });

  return {
    inputAttributesFromLocal,
    inputAttributesUntilLocal,
  };
}
