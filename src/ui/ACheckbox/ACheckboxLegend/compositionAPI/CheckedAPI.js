import {
  computed,
  toRef,
} from "vue";

import {
  AKeyId,
} from "../../../../const/AKeys";
import {
  forEach,
  isEmpty,
} from "lodash-es";

export default function CheckedAPI(props) {
  const data = toRef(props, "data");
  const modelValueObj = toRef(props, "modelValueObj");

  const isChecked = computed(() => {
    const CHECKED = {
      indeterminate: undefined,
      checkedAll: false,
      checkedSome: false,
      uncheckedSome: false,
    };
    if (isEmpty(modelValueObj.value)) {
      return CHECKED;
    }

    forEach(data.value, value => {
      const ID = value[AKeyId];
      if (modelValueObj.value[ID]) {
        CHECKED.checkedSome = true;
      } else {
        CHECKED.uncheckedSome = true;
      }

      if (CHECKED.checkedSome && CHECKED.uncheckedSome) {
        CHECKED.indeterminate = true;
        return false;
      }
    });

    if (CHECKED.checkedSome && !CHECKED.uncheckedSome) {
      CHECKED.checkedAll = true;
    }

    return CHECKED;
  });

  const isCheckedAll = computed(() => {
    return isChecked.value.checkedAll;
  });

  const isIndeterminate = computed(() => {
    return isChecked.value.indeterminate;
  });

  return {
    isCheckedAll,
    isIndeterminate,
  };
}
