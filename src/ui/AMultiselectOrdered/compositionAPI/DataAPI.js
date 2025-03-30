import {
  computed,
} from "vue";
import {
  AKeyId,
} from "../../../index";

import {
  filter,
} from "lodash-es";

export default function DataAPI(props, {
  dataExtraLocal = computed(() => []),
  dataSort = computed(() => []),
  modelValueFiltered = computed(() => []),
}) {
  const dataSortFiltered = computed(() => {
    if (!modelValueFiltered.value.length) {
      return dataSort.value;
    }

    return filter(dataSort.value, item => {
      return !modelValueFiltered.value.includes(item[AKeyId]);
    });
  });

  const dataExtraLocalFiltered = computed(() => {
    if (!modelValueFiltered.value.length) {
      return dataExtraLocal.value;
    }

    return filter(dataExtraLocal.value, item => {
      return !modelValueFiltered.value.includes(item[AKeyId]);
    });
  });

  return {
    dataExtraLocalFiltered,
    dataSortFiltered,
  };
}
