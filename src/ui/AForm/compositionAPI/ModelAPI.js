import {
  computed,
  toRef,
} from "vue";

import {
  typesContainer,
} from "../../const/AUiTypes";
import {
  cloneDeep,
  set,
} from "lodash-es";

export default function ModelAPI(props, { emit }) {
  const modelValue = toRef(props, "modelValue");

  const modelValueLocal = computed(() => {
    return modelValue.value || {};
  });

  const onUpdateModelLocal = ({ item, model }) => {
    if (typesContainer.value[item.type]) {
      emit("update:modelValue", model);
      emit("change", { model });
    } else {
      const MODEL_VALUE = cloneDeep(modelValueLocal.value);
      const MODEL_ID = item.id;

      set(MODEL_VALUE, MODEL_ID, cloneDeep(model));
      emit("update:modelValue", MODEL_VALUE);
      emit("change", { model: MODEL_VALUE });
    }
  };

  return {
    modelValueLocal,
    onUpdateModelLocal,
  };
}
