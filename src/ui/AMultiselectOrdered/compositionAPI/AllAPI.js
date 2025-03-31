import {
  computed,
  toRef,
} from "vue";
import {
  AKeyId,
} from "../../../index";

import {
  forEach,
} from "lodash";
import {
  cloneDeep,
  filter,
} from "lodash-es";

export default function AllAPI(props, {
  changeModel = () => {},
  dataExtraLocalFiltered = computed(() => []),
  dataSortFiltered = computed(() => []),
  modelValueFiltered = computed(() => []),
}) {
  const disabled = toRef(props, "disabled");
  const modelValue = toRef(props, "modelValue");

  const disabledDeselectAll = computed(() => {
    return disabled.value || modelValueFiltered.value.length === 0;
  });

  const disabledSelectAll = computed(() => {
    return disabled.value ||
      (dataExtraLocalFiltered.value.length === 0 && dataSortFiltered.value.length === 0);
  });

  const selectAll = () => {
    if (disabledSelectAll.value) {
      return;
    }

    const MODEL = cloneDeep(modelValue.value);
    forEach(dataExtraLocalFiltered.value, item => {
      MODEL.push(item[AKeyId]);
    });
    forEach(dataSortFiltered.value, item => {
      MODEL.push(item[AKeyId]);
    });
    changeModel({ model: MODEL });
  };

  const modelValueFilteredMap = computed(() => {
    const MODEL_MAP = {};
    forEach(modelValueFiltered.value, modelId => {
      MODEL_MAP[modelId] = true;
    });

    return MODEL_MAP;
  });

  const deselectAll = () => {
    if (disabledDeselectAll.value) {
      return;
    }

    const MODEL = filter(modelValue.value, modelId => {
      return !modelValueFilteredMap.value[modelId];
    });
    changeModel({ model: MODEL });
  };

  return {
    deselectAll,
    disabledDeselectAll,
    disabledSelectAll,
    selectAll,
  };
}
