import {
  computed,
  toRef,
} from "vue";

import {
  forEach,
} from "lodash-es";

export default function RequiredAPI(props) {
  const data = toRef(props, "data");
  const isRequired = toRef(props, "isRequired");

  const isRequiredLocal = computed(() => {
    if (isRequired.value) {
      return true;
    }
    let isRequiredInData = false;
    forEach(data.value, item => {
      if (item.required) {
        isRequiredInData = true;
        return false;
      }
    });
    return isRequiredInData;
  });

  return {
    isRequiredLocal,
  };
}
