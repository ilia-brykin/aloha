import {
  computed,
  toRef,
} from "vue";

import {
  orderBy,
} from "lodash-es";

export default function ASelectDataAPI(props, {
  dataLocal = computed(() => []),
}) {
  const options = toRef(props, "options");
  const orderByParameters = toRef(props, "orderByParameters");
  const orderByParametersLocal = computed(() => {
    return "orderByParameters" in options.value ?
      options.value.orderByParameters :
      orderByParameters.value;
  });

  const dataSort = computed(() => {
    if (orderByParametersLocal.value && orderByParametersLocal.value.length) {
      return orderBy(dataLocal.value, ...orderByParametersLocal);
    }
    return dataLocal.value;
  });

  const dataFiltered = computed(() => {
    // TODO:
    return dataSort.value;
  });

  return {
    dataFiltered,
  };
}
