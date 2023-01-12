import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  keyBy,
} from "lodash-es";

export default function ViewsAPI(props, { emit }, {
  closePreviewAll = () => {},
}) {
  const views = toRef(props, "views");

  const modelView = ref(undefined);

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
      modelView.value = views.value[0].id;
    }
  };

  const updateViewCurrent = model => {
    modelView.value = model;
    closePreviewAll();
    emit("updateView", {
      view: viewCurrent.value,
    });
  };

  const isViewTableVisible = computed(() => {
    return !viewCurrent.value || viewCurrent.value.type === "table";
  });

  return {
    hasViews,
    initViewCurrent,
    isViewTableVisible,
    modelView,
    updateViewCurrent,
    viewCurrent,
  };
}
