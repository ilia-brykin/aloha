import {
  computed,
  toRef,
  ref,
} from "vue";

import {
  cloneDeep,
} from "lodash-es";

export default function InputAPI(props, {
  idForLabelMin = ref(undefined),
  idForLabelMax = ref(undefined),
  getId = ref(undefined),
}) {
  const isError = toRef(props, "isError");
  const options = toRef(props, "options");

  const ariaRequired = computed(() => `${ options.value.required || false }`);
  const ariaInvalid = computed(() => isError.value ? "true" : "false");

  const inputAttributes = computed(() => {
    const ATTRIBUTES = {
      "aria-required": ariaRequired.value,
      "aria-invalid": ariaInvalid.value,
    };
    if (options.value.name) {
      ATTRIBUTES.name = options.value.name;
    }
    return ATTRIBUTES;
  });
  const inputAttributesMin = computed(() => {
    const ATTRIBUTES = cloneDeep(inputAttributes.value);
    ATTRIBUTES["aria-describedby"] = idForLabelMin.value;
    return ATTRIBUTES;
  });
  const inputAttributesMax = computed(() => {
    const ATTRIBUTES = cloneDeep(inputAttributes.value);
    ATTRIBUTES["aria-describedby"] = `${ getId.value }_label ${ idForLabelMax.value }`;
    return ATTRIBUTES;
  });

  return {
    inputAttributesMin,
    inputAttributesMax,
  };
}
