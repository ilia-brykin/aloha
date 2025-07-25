import {
  computed,
  toRef,
} from "vue";

import AKeyId from "../../../const/AKeyId";
import {
  forEach,
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

  return {
    dataLocal,
  };
}
