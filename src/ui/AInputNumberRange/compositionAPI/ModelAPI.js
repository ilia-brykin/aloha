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
  const keyMax = toRef(props, "keyMax");
  const keyMin = toRef(props, "keyMin");
  const modelValue = toRef(props, "modelValue");

  const modelValueMin = computed(() => {
    return modelValue.value?.[keyMin.value];
  });

  const modelValueMax = computed(() => {
    return modelValue.value?.[keyMax.value];
  });

  const changeModelMin = ({ model }) => {
    const MODEL = cloneDeep(modelValue.value);
    MODEL[keyMin.value] = model;
    changeModel({ model: MODEL });
  };

  const changeModelMax = ({ model }) => {
    const MODEL = cloneDeep(modelValue.value);
    MODEL[keyMax.value] = model;
    changeModel({ model: MODEL });
  };

  return {
    changeModelMax,
    changeModelMin,
    modelValueMax,
    modelValueMin,
  };
}
