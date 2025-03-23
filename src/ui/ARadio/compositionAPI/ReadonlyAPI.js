import {
  computed,
  toRef,
} from "vue";

import {
  forEach,
} from "lodash";

export default function ReadonlyAPI(props, {
  dataKeyByKeyIdLocal = computed(() => ({})),
}) {
  const isModelArray = toRef(props, "isModelArray");
  const modelValue = toRef(props, "modelValue");

  const modelValueItemReadonly = computed(() => {
    if (isModelArray.value) {
      let item = undefined;
      if (modelValue.value?.length) {
        forEach(modelValue.value, modelItem => {
          if (modelItem in dataKeyByKeyIdLocal.value) {
            item = dataKeyByKeyIdLocal.value[modelItem];
            return false;
          }
        });
        return item;
      }
      return item;
    }
    return dataKeyByKeyIdLocal.value[modelValue.value];
  });

  return {
    modelValueItemReadonly,
  };
}
