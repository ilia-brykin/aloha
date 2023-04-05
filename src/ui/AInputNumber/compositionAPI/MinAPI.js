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
    let minComputed;
    if (type.value === "integer-non-negative") {
      minComputed = 0;
    } else if (type.value === "integer-positive") {
      minComputed = 1;
    }
    if (!isNil(min.value) && min.value > minComputed) {
      minComputed = min.value;
    }
    return minComputed;
  });

  return {
    minLocal,
  };
}
