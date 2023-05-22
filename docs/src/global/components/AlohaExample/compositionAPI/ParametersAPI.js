import {
  computed,
  toRef,
} from "vue";

import {
  isArray,
  isString,
} from "lodash";

export default function ParametersAPI(props) {
  const properties = toRef(props, "props");
  const emits = toRef(props, "emits");
  const exposes = toRef(props, "exposes");
  const slots = toRef(props, "slots");

  const getParametersAlsArray = parameters => {
    if (isArray(parameters)) {
      return parameters;
    }
    if (isString(parameters)) {
      return [parameters];
    }
    return [];
  };

  const emitsLocal = computed(() => {
    return getParametersAlsArray(emits.value);
  });

  const exposesLocal = computed(() => {
    return getParametersAlsArray(exposes.value);
  });

  const propsLocal = computed(() => {
    return getParametersAlsArray(properties.value);
  });

  const slotsLocal = computed(() => {
    return getParametersAlsArray(slots.value);
  });

  const hasProps = computed(() => {
    return propsLocal.value.length > 0;
  });

  const hasEmits = computed(() => {
    return emitsLocal.value.length > 0;
  });

  const hasSlots = computed(() => {
    return slotsLocal.value.length > 0;
  });

  const hasExposes = computed(() => {
    return exposesLocal.value.length > 0;
  });

  const hasAtLeastOneProperty = computed(() => {
    return hasProps.value ||
      hasEmits.value ||
      hasExposes.value ||
      hasSlots.value;
  });

  return {
    emitsLocal,
    exposesLocal,
    hasAtLeastOneProperty,
    hasEmits,
    hasExposes,
    hasProps,
    hasSlots,
    propsLocal,
    slotsLocal,
  };
}
