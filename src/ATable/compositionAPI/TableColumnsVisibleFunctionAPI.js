import {
  ref,
} from "vue";

import {
  cloneDeep,
} from "lodash-es";


export default function TableColumnsVisibleFunctionAPI(props, { emit }, {
  modelColumnsVisibleLocal = ref({}),
  checkVisibleColumns = () => {},
}) {
  const changeModelColumnsVisible = value => {
    modelColumnsVisibleLocal.value = value;
    emit("update:modelColumnsVisible", cloneDeep(modelColumnsVisibleLocal.value));
    checkVisibleColumns();
  };

  return {
    changeModelColumnsVisible,
  };
}
