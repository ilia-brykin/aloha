import {
  computed,
  toRef,
} from "vue";

import {
  cloneDeep,
} from "lodash-es";

export default function ModelAPI(props, {
  changeModel = () => ({}),
}) {
  const keyFrom = toRef(props, "keyFrom");
  const keyUntil = toRef(props, "keyUntil");
  const modelValue = toRef(props, "modelValue");

  const modelValueFrom = computed(() => {
    return modelValue.value?.[keyFrom.value];
  });

  const modelValueUntil = computed(() => {
    return modelValue.value?.[keyUntil.value];
  });

  const changeModelFrom = model => {
    const MODEL = cloneDeep(modelValue.value) || {};
    MODEL[keyFrom.value] = model;
    changeModel({ model: MODEL });
  };

  const changeModelUntil = model => {
    const MODEL = cloneDeep(modelValue.value) || {};
    MODEL[keyUntil.value] = model;
    changeModel({ model: MODEL });
  };

  return {
    changeModelFrom,
    changeModelUntil,
    modelValueFrom,
    modelValueUntil,
  };
}
