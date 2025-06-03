import {
  computed,
  toRef,
} from "vue";

import {
  cloneDeep,
  isFunction,
  set,
} from "lodash-es";

export default function ModelAPI(props, { emit }) {
  const modelValue = toRef(props, "modelValue");

  const modelValueLocal = computed(() => {
    return modelValue.value || {};
  });

  const onUpdateModelLocal = ({ currentModel, id, item, model, props, component, fullModel }) => {
    if (fullModel) {
      const MODEL_VALUE = cloneDeep(fullModel);
      emit("update:modelValue", MODEL_VALUE);
      emit("change", { currentModel, id, item, fullModel: MODEL_VALUE, model, props });
      if (isFunction(component.change)) {
        component.change({ currentModel, id, item, fullModel: MODEL_VALUE, model, props });
      }
      return;
    }

    const MODEL_VALUE = cloneDeep(modelValueLocal.value);

    set(MODEL_VALUE, id, cloneDeep(model));
    emit("update:modelValue", MODEL_VALUE);
    emit("change", { currentModel, id, item, fullModel: MODEL_VALUE, model, props });
    if (isFunction(component.change)) {
      component.change({ currentModel, id, item, fullModel: MODEL_VALUE, model, props });
    }
  };

  return {
    modelValueLocal,
    onUpdateModelLocal,
  };
}
