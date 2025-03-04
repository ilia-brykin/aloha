import {
  computed,
  toRef,
} from "vue";

import {
  filter,
  isArray,
  isNil,
} from "lodash-es";

import AKeyLabel from "../../../const/AKeyLabel";

export default function ModelAPI(props, {
  dataKeyByKeyIdLocal = computed(() => ({})),
}) {
  const countMultiselect = toRef(props, "countMultiselect");
  const exclusiveOptionValue = toRef(props, "exclusiveOptionValue");
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
      return dataKeyByKeyIdLocal.value[currentModel] || currentModel === exclusiveOptionValue.value;
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

  const limitExceededModelData = computed(() => {
    return {
      [AKeyLabel]: `_A_SELECT_MORE_SELECTED_{{count}}_`,
      extra: {
        count: modelValueLength.value - countMultiselect.value,
      },
    };
  });

  return {
    isModelLengthLimitExceeded,
    isModelValue,
    isMultiselect,
    limitExceededModelData,
    modelValueLength,
    modelValueMultiselectFiltered,
  };
}
