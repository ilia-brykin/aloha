import {
  toRef,
} from "vue";

import {
  typesContainer,
} from "../../const/AUiTypes";
import {
  cloneDeep,
  set,
} from "lodash-es";

export default function ModelAPI(props, context, {
  changeModel = () => {},
}) {
  const modelValue = toRef(props, "modelValue");

  const onUpdateModelLocal = ({ model, currentModel, item }) => {
    if (typesContainer.value[item.type]) {
      changeModel({ model, currentModel, item });
    } else {
      const MODEL_ID = item.id;
      const MODEL_VALUE = cloneDeep(modelValue.value);
      set(MODEL_VALUE, MODEL_ID, cloneDeep(model));
      changeModel({ model: MODEL_VALUE, currentModel, item });
    }
  };

  return {
    onUpdateModelLocal,
  };
}
