import {
  computed,
  toRef,
} from "vue";

import {
  forEach,
} from "lodash-es";

export default function ModelObjAPI(props) {
  const modelValue = toRef(props, "modelValue");

  const modelValueObj = computed(() => {
    const MODEL = {};
    forEach(modelValue.value || [], value => {
      MODEL[value] = true;
    });

    return MODEL;
  });

  return {
    modelValueObj,
  };
}
