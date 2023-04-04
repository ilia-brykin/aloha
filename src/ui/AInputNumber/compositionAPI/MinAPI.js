import {
  computed,
  toRef,
} from "vue";

import {
  isNil,
} from "lodash-es";

export default function MinAPI(props) {
  const type = toRef(props, "type");
  const min = toRef(props, "min");

  const minLocal = computed(() => {
    if (type.value === "integer-non-negative") {
      if (isNil(min.value)) {
        return 0;
      }
      if (min.value > 0) {
        return min.value;
      }
    }
    return undefined;
  });

  return {
    minLocal,
  };
}
