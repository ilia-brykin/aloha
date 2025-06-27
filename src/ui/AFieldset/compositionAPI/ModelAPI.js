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
  const id = toRef(props, "id");
  const modelAll = toRef(props, "modelAll");
  const modelValue = toRef(props, "modelValue");
  const parentId = toRef(props, "parentId");
  const skipOwnIdInModelPath = toRef(props, "skipOwnIdInModelPath");
  const useFlatModel = toRef(props, "useFlatModel");

  const onUpdateModelLocal = ({ currentModel, id: idChild, item, model, props, component, fullModel }) => {
    if (fullModel) {
      const MODEL_VALUE = cloneDeep(fullModel);
      emit("update:modelValue", MODEL_VALUE);
      change.value({ currentModel, id: idChild, item, fullModel: MODEL_VALUE, model, props });
      if (isFunction(component.change)) {
        component.change({ currentModel, id: idChild, item, fullModel: MODEL_VALUE, model, props });
      }

      return;
    }

    const MODEL_VALUE = useFlatModel.value ?
      cloneDeep(modelValue.value || {}) :
      cloneDeep(modelAll.value || modelValue.value || {});

    if (useFlatModel.value) {
      set(MODEL_VALUE, idChild, cloneDeep(model));
    } else {
      const ids = skipOwnIdInModelPath.value ?
        [...parentId.value, idChild] :
        [...parentId.value, id.value, idChild];
      const path = ids.join(".");
      set(MODEL_VALUE, path, cloneDeep(model));
    }
    emit("update:modelValue", MODEL_VALUE);
    change.value({ currentModel, id: idChild, item, fullModel: MODEL_VALUE, model, props });
    if (isFunction(component.change)) {
      component.change({ currentModel, id: idChild, item, fullModel: MODEL_VALUE, model, props });
    }
  };

  return {
    onUpdateModelLocal,
  };
}
