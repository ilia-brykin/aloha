import {
  computed,
  toRef,
} from "vue";

import {
  get,
} from "lodash-es";

export default function ContentAPI(props) {
  const tab = toRef(props, "tab");
  const keyContent = toRef(props, "keyContent");

  const contentLocal = computed(() => {
    if (keyContent.value) {
      return get(tab.value, keyContent.value);
    }

    return undefined;
  });

  return {
    contentLocal,
  };
}
