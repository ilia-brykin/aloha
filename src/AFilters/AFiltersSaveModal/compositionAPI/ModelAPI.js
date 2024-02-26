import {
  ref,
  toRef,
} from "vue";

export default function ModelAPI(props) {
  const isModelFilterSavedNew = toRef(props, "isModelFilterSavedNew");
  const modelFiltersSaved = toRef(props, "modelFiltersSaved");

  const model = ref({});

  const initModel = () => {
    if (modelFiltersSaved.value && !isModelFilterSavedNew.value) {
      model.value = {
        name: modelFiltersSaved.value
      };
    }
  };

  const updateModel = _model => {
    model.value = _model;
  };

  return {
    initModel,
    model,
    updateModel,
  };
}
