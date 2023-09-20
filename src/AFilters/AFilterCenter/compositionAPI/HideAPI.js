import {
  computed,
  toRef,
} from "vue";

import {
  forEach,
  isNil,
} from "lodash-es";

export default function HideAPI(props) {
  const appliedModel = toRef(props, "appliedModel");
  const filtersKeyById = toRef(props, "filtersKeyById");

  const hasMinimumOneModel = computed(() => {
    let hasModel = false;
    forEach(appliedModel.value, (model, filterId) => {
      const CURRENT_FILTER = filtersKeyById.value[filterId];
      if (!CURRENT_FILTER || CURRENT_FILTER.hideFilterCenter) {
        return;
      }
      const TYPE = CURRENT_FILTER.type;
      if (TYPE === "multiselect" && TYPE === "checkbox") {
        if (model && model.length) {
          hasModel = true;
          return false;
        }
      } else {
        // TODO: model object
        if (!isNil(model) && model !== "") {
          hasModel = true;
          return false;
        }
      }
    });
    return hasModel;
  });

  const styleHide = computed(() => {
    return hasMinimumOneModel.value ? undefined : "display: none;";
  });

  return {
    styleHide,
  };
}
