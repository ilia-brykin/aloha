import {
  computed,
  toRef,
} from "vue";

import {
  get,
} from "lodash-es";

export default function TitleAPI(props) {
  const tab = toRef(props, "tab");
  const keyTitle = toRef(props, "keyTitle");

  const titleLocal = computed(() => {
    if (keyTitle.value) {
      return get(tab.value, keyTitle.value);
    }

    return undefined;
  });

  return {
    titleLocal,
  };
}
