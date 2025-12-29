import {
  computed,
  toRef,
} from "vue";

import {
  getTotalNestedCount,
} from "../../utils/utils";

import {
  get,
  isArray,
  isNil,
  isPlainObject,
} from "lodash-es";

export default function CountAPI(props) {
  const countAllRows = toRef(props, "countAllRows");
  const data = toRef(props, "data");
  const isTree = toRef(props, "isTree");
  const keyChildren = toRef(props, "keyChildren");
  const keyCountAllRowsInData = toRef(props, "keyCountAllRowsInData");

  const isDataObject = computed(() => {
    return isPlainObject(data.value);
  });

  const isDataArray = computed(() => {
    return isArray(data.value);
  });

  const countAllRowsLocal = computed(() => {
    if (!isNil(countAllRows.value)) {
      return countAllRows.value;
    }
    if (isDataObject.value) {
      return +get(data.value, keyCountAllRowsInData.value);
    }
    if (isDataArray.value) {
      if (isTree.value) {
        return getTotalNestedCount({
          array: data.value,
          keyChildren: keyChildren.value,
        });
      }
      return data.value.length;
    }
    return data.value.length || 0;
  });

  return {
    countAllRowsLocal,
  };
}
