import {
  computed,
  inject,
  toRef,
  unref,
} from "vue";

import {
  AModelDependenciesInjection,
} from "../const/UiInjectionKeys";
import {
  forEach,
  isArray,
  isEmpty,
  isPlainObject,
} from "lodash-es";

export default function UiStyleHideAPI(props) {
  const dependencies = toRef(props, "dependencies");
  const isHide = toRef(props, "isHide");
  const modelDependencies = toRef(props, "modelDependencies");
  const modelDependenciesInjected = inject(AModelDependenciesInjection, undefined);

  const modelDependenciesLocal = computed(() => {
    if (!isEmpty(modelDependencies.value)) {
      return modelDependencies.value;
    }
    if (modelDependenciesInjected !== undefined) {
      return unref(modelDependenciesInjected);
    }
    return modelDependencies.value;
  });

  const isComponentVisibleWithDependence = ({ id, value }) => {
    return modelDependenciesLocal.value?.[id] === value;
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
