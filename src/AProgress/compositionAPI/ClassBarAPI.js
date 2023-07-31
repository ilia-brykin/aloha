import {
  computed,
  toRef,
} from "vue";

import {
  isFunction,
} from "lodash-es";

export default function ClassBarAPI(props, {
  widthPercent = computed(() => 0),
}) {
  const classProgressBar = toRef(props, "classProgressBar");

  const classProgressBarLocal = computed(() => {
    if (isFunction(classProgressBar.value)) {
      return classProgressBar.value(widthPercent.value);
    }
    return classProgressBar.value;
  });

  return {
    classProgressBarLocal,
  };
}
