import {
  toRef,
} from "vue";

import {
  cloneDeep,
} from "lodash-es";

export default function ModelLocalAPI(props, {
  changeModel = () => {},
}) {
  const modelValue = toRef(props, "modelValue");

  const changeRouteModel = ({ model }) => {
    if (model) {
      changeModel({
        model: {
          route: model,
          query: modelValue.value?.query,
        },
      });
    } else {
      changeModel({
        model: {},
      });
    }
  };

  const changeTargetModel = ({ model }) => {
    const MODEL = cloneDeep(modelValue.value) || {};
    MODEL.target = model;

    changeModel({ model: MODEL });
  };

  const changeQueryModel = ({ model }) => {
    const MODEL = cloneDeep(modelValue.value) || {};
    MODEL.query = model;

    changeModel({ model: MODEL });
  };

  const changeParamModel = ({ model }) => {
    const MODEL = cloneDeep(modelValue.value) || {};
    MODEL.param = model;

    changeModel({ model: MODEL });
  };

  return {
    changeParamModel,
    changeQueryModel,
    changeRouteModel,
    changeTargetModel,
  };
}
