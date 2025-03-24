import {
  toRef,
} from "vue";

import {
  cloneDeep,
  isFunction,
  set,
} from "lodash-es";

export default function ModelAPI(props, { emit }) {
  const change = toRef(props, "change");
  const modelValue = toRef(props, "modelValue");

  const onUpdateModelLocal = ({ currentModel, id, item, model, props, component }) => {
    const MODEL_VALUE = cloneDeep(modelValue.value || {});

    set(MODEL_VALUE, id, cloneDeep(model));
    emit("update:modelValue", MODEL_VALUE);
    change.value({ currentModel, id, item, fullModel: MODEL_VALUE, model, props });
    if (isFunction(component.change)) {
      component.change({ currentModel, id, item, fullModel: MODEL_VALUE, model, props });
    }
  };

  return {
    onUpdateModelLocal,
  };
}
