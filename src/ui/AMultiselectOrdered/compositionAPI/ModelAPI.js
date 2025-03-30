import {
  computed,
  nextTick,
  toRef,
} from "vue";
import {
  setFocusToElement,
} from "../../../index";

import {
  cloneDeep,
  filter,
  findIndex,
  isArray,
} from "lodash-es";

export default function ModelAPI(props, {
  changeModel = () => {},
  dataKeyByKeyIdLocal = computed(() => ({})),
}) {
  const modelValue = toRef(props, "modelValue");

  const modelValueFiltered = computed(() => {
    if (!isArray(modelValue.value) || !modelValue.value.length) {
      return [];
    }

    return filter(modelValue.value, currentModel => {
      return dataKeyByKeyIdLocal.value[currentModel];
    });
  });

  const changeModelFromSelect = ({ model }) => {
    if (isArray(model) && model.length) {
      const MODEL = cloneDeep(modelValue.value);
      MODEL.push(...model);
      changeModel({ model: MODEL });
    }
  };

  const deleteItem = ({ modelValue: _modelValue }) => {
    const INDEX = findIndex(modelValue.value, item => {
      return item === _modelValue;
    });

    const MODEL = cloneDeep(modelValue.value);
    MODEL.splice(INDEX, 1);
    changeModel({ model: MODEL });
  };

  const onDownItem = async({ index, idForFocus }) => {
    const INDEX_NEXT = index + 1;
    const MODEL_CURRENT = modelValueFiltered.value[index];
    const MODEL_NEXT = modelValueFiltered.value[INDEX_NEXT];
    const INDEX_IN_MODEL_VALUE = findIndex(modelValue.value, item => {
      return item === MODEL_CURRENT;
    });
    const INDEX_NEXT_IN_MODEL_VALUE = findIndex(modelValue.value, item => {
      return item === MODEL_NEXT;
    });
    const MODEL = cloneDeep(modelValue.value);
    [MODEL[INDEX_IN_MODEL_VALUE], MODEL[INDEX_NEXT_IN_MODEL_VALUE]] = [MODEL[INDEX_NEXT_IN_MODEL_VALUE], MODEL[INDEX_IN_MODEL_VALUE]];
    changeModel({ model: MODEL });
    await nextTick();
    setFocusToElement({
      selector: `#${ idForFocus }`,
    });
  };

  const onUpItem = async({ index, idForFocus }) => {
    const PREVIOUS_INDEX = index - 1;
    const MODEL_CURRENT = modelValueFiltered.value[index];
    const MODEL_PREVIOUS = modelValueFiltered.value[PREVIOUS_INDEX];
    const INDEX_IN_MODEL_VALUE = findIndex(modelValue.value, item => {
      return item === MODEL_CURRENT;
    });
    const INDEX_PREVIOUS_IN_MODEL_VALUE = findIndex(modelValue.value, item => {
      return item === MODEL_PREVIOUS;
    });
    const MODEL = cloneDeep(modelValue.value);
    [MODEL[INDEX_IN_MODEL_VALUE], MODEL[INDEX_PREVIOUS_IN_MODEL_VALUE]] = [MODEL[INDEX_PREVIOUS_IN_MODEL_VALUE], MODEL[INDEX_IN_MODEL_VALUE]];
    changeModel({ model: MODEL });
    await nextTick();
    setFocusToElement({
      selector: `#${ idForFocus }`,
    });
  };

  return {
    changeModelFromSelect,
    deleteItem,
    modelValueFiltered,
    onDownItem,
    onUpItem,
  };
}
