import {
  computed,
  toRef,
} from "vue";

import {
  find,
  keyBy,
} from "lodash-es";

export default function ViewsAPI(props, { emit }, {
  closePreviewAll = () => {},
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
      const VIEW_ACTIVE = find(views.value, ["active", true]);
      let modelViewLocal = views.value[0].id;
      if (VIEW_ACTIVE) {
        modelViewLocal = VIEW_ACTIVE.id;
      }
      emit("updateView", {
        _modelView: modelViewLocal,
        view: viewKeyById.value[modelViewLocal],
        modelFilters: modelFilters.value,
        init: true,
      });
    }
  };

  const updateViewCurrent = model => {
    closePreviewAll();
    emit("updateView", {
      _modelView: model,
      view: viewKeyById.value[model],
      modelFilters: modelFilters.value,
    });
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
