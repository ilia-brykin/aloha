import {
  computed,
  toRef,
} from "vue";

import {
  forEach,
  isArray,
  isPlainObject,
} from "lodash-es";

export default function UiStyleHideAPI(props) {
  const dependencies = toRef(props, "dependencies");
  const isHide = toRef(props, "isHide");
  const modelDependencies = toRef(props, "modelDependencies");

  const isComponentVisibleWithDependence = ({ id, value }) => {
    return modelDependencies.value[id] === value;
  };

  const isComponentHideDependencies = computed(() => {
    if (!dependencies.value) {
      return false;
    }
    if (isPlainObject(dependencies.value)) {
      return !isComponentVisibleWithDependence(dependencies.value);
    }
    if (isArray(dependencies.value)) {
      let isHide = false;
      forEach(dependencies.value, dependence => {
        if (!isComponentVisibleWithDependence(dependence)) {
          isHide = true;
          return false;
        }
      });
      return isHide;
    }
    return false;
  });

  const componentStyleHide = computed(() => {
    return isHide.value || isComponentHideDependencies.value ? "display: none;" : "";
  });

  return {
    componentStyleHide,
  };
}
