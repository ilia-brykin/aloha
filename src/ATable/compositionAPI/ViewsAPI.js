import {
  computed,
  toRef,
} from "vue";

import {
  keyBy,
} from "lodash-es";

export default function ViewsAPI(props, { emit }, {
  startSearch = () => {},
}) {
  const views = toRef(props, "views");
  const modelFilters = toRef(props, "modelFilters");
  const modelView = toRef(props, "modelView");

  const viewKeyById = computed(() => {
    return keyBy(views.value, "id");
  });

  const viewCurrent = computed(() => {
    return viewKeyById.value[modelView.value];
  });

  const hasViews = computed(() => {
    return views.value.length > 1;
  });

  const initViewCurrent = () => {
    if (hasViews.value) {
      const MODEL_VIEW = views.value[0].id;
      emit("updateView", {
        _modelView: MODEL_VIEW,
        view: viewKeyById.value[MODEL_VIEW],
        modelFilters: modelFilters.value,
      });
    }
  };

  const updateViewCurrent = model => {
    emit("updateView", {
      _modelView: model,
      view: viewKeyById.value[model],
      modelFilters: modelFilters.value,
    });
    startSearch();
  };

  const isViewTableVisible = computed(() => {
    return !viewCurrent.value || viewCurrent.value.type === "table";
  });

  return {
    hasViews,
    initViewCurrent,
    isViewTableVisible,
    updateViewCurrent,
    viewCurrent,
  };
}
