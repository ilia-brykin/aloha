import {
  ref,
  toRef,
} from "vue";

import {
  cloneDeep,
} from "lodash-es";

export default function ModelAPI(props) {
  const currentModel = toRef(props, "currentModel");
  const isCreate = toRef(props, "isCreate");

  const model = ref({});

  const initModel = () => {
    if (!isCreate.value) {
      model.value = cloneDeep(currentModel.value);
    }
  };

  const updateModel = _model => {
    model.value = cloneDeep(_model);
  };

  return {
    initModel,
    model,
    updateModel,
  };
}
