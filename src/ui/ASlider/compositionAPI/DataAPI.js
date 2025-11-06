import {
  computed,
  toRef,
} from "vue";

import {
  aSortBy,
} from "../../../utils/utils";

import AKeyId from "../../../const/AKeyId";
import {
  findIndex,
  findLastIndex,
  first,
  forEach,
  get,
  isNil,
  last,
  range,
  toNumber,
  uniqBy,
} from "lodash-es";

export default function DataAPI(props) {
  const data = toRef(props, "data");
  const isDataSimpleArray = toRef(props, "isDataSimpleArray");
  const keyId = toRef(props, "keyId");
  const max = toRef(props, "max");
  const min = toRef(props, "min");
  const step = toRef(props, "step");

  const dataMinMax = computed(() => {
    const LIST = range(min.value, max.value + step.value, step.value);
    const DECIMALS = step.value.toString().split(".")[1]?.length || 0;

    const DATA = [];
    forEach(LIST, item => {
      const value = Number(item.toFixed(DECIMALS));
      DATA.push({
        [AKeyId]: value,
      });
    });

    return DATA;
  });

  const dataFromPropsData = computed(() => {
    const DATA = [];
    if (isDataSimpleArray.value) {
      forEach(data.value, item => {
        if (!isNil(item)) {
          DATA.push({
            [AKeyId]: toNumber(item),
          });
        }
      });
    } else {
      forEach(data.value, item => {
        const ID = get(item, keyId.value);
        if (!isNil(ID)) {
          DATA.push({
            [AKeyId]: toNumber(ID),
          });
        }
      });
    }
    let sortedData = aSortBy(DATA, AKeyId);
    // Make data unique by AKeyId field
    sortedData = uniqBy(sortedData, AKeyId);


    // Cutting from left based on min
    if (!isNil(min.value)) {
      const minIndex = findIndex(sortedData, item => item[AKeyId] >= min.value);
      if (minIndex !== -1) {
        sortedData = sortedData.slice(minIndex);
      }
    }

    // Cutting from right based on max
    if (!isNil(max.value)) {
      const maxIndex = findLastIndex(sortedData, item => item[AKeyId] <= max.value);
      if (maxIndex !== -1) {
        sortedData = sortedData.slice(0, maxIndex + 1);
      }
    }

    return sortedData;
  });

  const dataLocal = computed(() => {
    if (data.value?.length &&
      dataFromPropsData.value.length) {
      return dataFromPropsData.value;
    }

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
