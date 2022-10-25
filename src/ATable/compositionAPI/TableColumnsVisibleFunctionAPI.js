import {
  ref,
  toRef,
} from "vue";

import {
  getModelColumnsVisibleDefault,
} from "../utils/utils";
import {
  cloneDeep,
  size,
} from "lodash-es";


export default function TableColumnsVisibleFunctionAPI(props, { emit }, {
  modelColumnsVisibleLocal = ref({}),
  checkVisibleColumns = () => {},
}) {
  const modelColumnsVisible = toRef(props, "modelColumnsVisible");
  const columns = toRef(props, "columns");

  const changeModelColumnsVisible = value => {
    modelColumnsVisibleLocal.value = value;
    emit("update:modelColumnsVisible", cloneDeep(modelColumnsVisibleLocal.value));
    checkVisibleColumns();
  };

  const initModelColumnsVisibleLocal = () => {
    if (size(modelColumnsVisible.value)) {
      modelColumnsVisibleLocal.value = cloneDeep(modelColumnsVisible.value);
    } else {
      changeModelColumnsVisible(getModelColumnsVisibleDefault(columns.value));
    }
  };

  return {
    changeModelColumnsVisible,
    initModelColumnsVisibleLocal,
  };
}
