import {
  computed,
  toRef,
} from "vue";

export default function InputAttributesAPI(props, {
  htmlIdLocal = computed(() => ""),
  idMax = computed(() => ""),
  idMin = computed(() => ""),
}) {
  const inputAttributes = toRef(props, "inputAttributes");
  const inputAttributesMax = toRef(props, "inputAttributesMax");
  const inputAttributesMin = toRef(props, "inputAttributesMin");

  const idLabel = computed(() => {
    return `${ htmlIdLocal.value }_label`;
  });

  const inputAttributesMinLocal = computed(() => {
    return {
      "aria-labelledby": `${ idLabel.value } ${ idMin.value }`,
      ...inputAttributes.value,
      ...inputAttributesMin.value,
    };
  });

  const inputAttributesMaxLocal = computed(() => {
    return {
      "aria-labelledby": `${ idLabel.value } ${ idMax.value }`,
      ...inputAttributes.value,
      ...inputAttributesMax.value,
    };
  });

  return {
    inputAttributesMaxLocal,
    inputAttributesMinLocal,
  };
}
