import {
  computed,
  toRef,
} from "vue";

import {
  isNil,
} from "lodash-es";

export default function DurationAPI(props) {
  const duration = toRef(props, "duration");

  const durationLocal = computed(() => {
    if (isNil(duration.value)) {
      return undefined;
    }
    return `${ duration.value }s`;
  });

  return {
    durationLocal,
  };
}
