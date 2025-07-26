import {
  computed,
  toRef,
} from "vue";

import AKeyId from "../../../const/AKeyId";
import {
  first,
  forEach,
  last,
  range,
} from "lodash-es";

export default function DataAPI(props) {
  const min = toRef(props, "min");
  const max = toRef(props, "max");
  const step = toRef(props, "step");

  const dataMinMax = computed(() => {
    const LIST = range(min.value, max.value + 1, step.value);
    const DATA = [];
    forEach(LIST, item => {
      DATA.push({
        [AKeyId]: item,
      });
    });

    return DATA;
  });

  const dataLocal = computed(() => {
    return dataMinMax.value;
  });

  const minValueDataLocal = computed(() => {
    return first(dataLocal.value)?.[AKeyId];
  });

  const maxValueDataLocal = computed(() => {
    return last(dataLocal.value)?.[AKeyId];
  });

  return {
    dataLocal,
    maxValueDataLocal,
    minValueDataLocal,
  };
}
