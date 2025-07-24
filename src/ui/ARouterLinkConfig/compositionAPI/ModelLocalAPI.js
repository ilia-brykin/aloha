import {
  computed,
  toRef,
  toRefs,
} from "vue";

import {
  cloneDeep,
} from "lodash-es";

export default function ModelLocalAPI(props, { emit }) {
  const change = toRef(props, "change");
  const id = toRef(props, "id");
  const modelValue = toRef(props, "modelValue");
  const type = toRef(props, "type");

  const modelLocal = computed(() => {
    if (modelValue.value) {
      return modelValue.value;
    }

    if (type.value === "routerLinkConfig") {
      return {};
    }

    return undefined;
  });

  const changeModel = ({ model, item }) => {
    emit("update:modelValue", model);
    change.value({
      currentModel: model,
      id: id.value,
      item,
      model,
      props: toRefs(props),
    });
  };

  const changeRouteModelSelect = ({ currentModel, model, item }) => {
    emit("update:modelValue", model);
    change.value({
      currentModel,
      id: id.value,
      item,
      model,
      props: toRefs(props),
    });
  };

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

  const changeParamModel = ({ model, id }) => {
    const MODEL = cloneDeep(modelValue.value) || {};
    MODEL.param = MODEL.param || {};
    MODEL.param[id] = model;

    changeModel({ model: MODEL });
  };

  return {
    changeParamModel,
    changeQueryModel,
    changeRouteModel,
    changeRouteModelSelect,
    changeTargetModel,
    modelLocal,
  };
}
