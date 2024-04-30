import {
  computed,
  toRef,
} from "vue";

import {
  filter,
  isArray,
  isNil,
} from "lodash-es";

export default function ModelAPI(props, {
  dataKeyByKeyIdLocal = computed(() => ({})),
}) {
  const countMultiselect = toRef(props, "countMultiselect");
  const modelValue = toRef(props, "modelValue");
  const type = toRef(props, "type");

  const isMultiselect = computed(() => {
    return type.value === "multiselect";
  });

  const modelValueMultiselectFiltered = computed(() => {
    if (!isMultiselect.value || !modelValue.value || !isArray(modelValue.value)) {
      return [];
    }

    return filter(modelValue.value, currentModel => {
      return dataKeyByKeyIdLocal.value[currentModel];
    });
  });

  const isModelValue = computed(() => {
    if (isMultiselect.value) {
      return modelValueMultiselectFiltered.value.length > 0;
    }
    return !isNil(modelValue.value);
  });

  const modelValueLength = computed(() => {
    return modelValueMultiselectFiltered.value?.length || 0;
  });

  const isModelLengthLimitExceeded = computed(() => {
    return modelValueLength.value > countMultiselect.value;
  });

  return {
    isModelLengthLimitExceeded,
    isModelValue,
    isMultiselect,
    modelValueLength,
    modelValueMultiselectFiltered,
  };
}
