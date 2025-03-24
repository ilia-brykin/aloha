import {
  computed,
  toRef,
} from "vue";

import {
  filter,
  forEach,
} from "lodash-es";

export default function ModelAPI(props, {
  dataKeyByKeyIdLocal = computed(() => ({})),
}) {
  const modelValue = toRef(props, "modelValue");

  const modelValueObj = computed(() => {
    const MODEL = {};
    forEach(modelValue.value || [], value => {
      MODEL[value] = true;
    });

    return MODEL;
  });

  const modelValueFiltered = computed(() => {
    if (!modelValue.value) {
      return [];
    }

    return filter(modelValue.value, currentModel => {
      return dataKeyByKeyIdLocal.value[currentModel];
    });
  });

  const isModelValue = computed(() => {
    return modelValueFiltered.value.length > 0;
  });

  return {
    isModelValue,
    modelValueFiltered,
    modelValueObj,
  };
}
