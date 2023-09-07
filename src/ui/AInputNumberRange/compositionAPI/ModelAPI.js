import {
  computed,
  toRef,
} from "vue";
import { cloneDeep } from "lodash-es";

export default function ModelAPI(props, {
  changeModel = () => ({}),
}) {
  const modelValue = toRef(props, "modelValue");

  const modelValueMin = computed(() => {
    return modelValue.value?.min;
  });

  const modelValueMax = computed(() => {
    return modelValue.value?.max;
  });

  const changeModelMin = ({ model }) => {
    const MODEL = cloneDeep(modelValue.value);
    MODEL.min = model;
    changeModel({ model: MODEL });
  };

  const changeModelMax = ({ model }) => {
    const MODEL = cloneDeep(modelValue.value);
    MODEL.max = model;
    changeModel({ model: MODEL });
  };

  return {
    changeModelMax,
    changeModelMin,
    modelValueMax,
    modelValueMin,
  };
}
