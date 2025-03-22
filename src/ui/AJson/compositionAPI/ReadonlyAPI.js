import {
  computed,
  toRef,
} from "vue";
import {
  AFiltersAPI,
} from "../../../index";

import {
  isNil,
} from "lodash-es";

export default function ReadonlyAPI(props) {
  const modelValue = toRef(props, "modelValue");
  const readonlyDefault = toRef(props, "readonlyDefault");

  const {
    filterJson,
  } = AFiltersAPI();

  const modelValueReadonly = computed(() => {
    if (isNil(modelValue.value) || modelValue.value === "") {
      return readonlyDefault.value;
    }

    return filterJson(modelValue.value);
  });

  return {
    modelValueReadonly,
  };
}
