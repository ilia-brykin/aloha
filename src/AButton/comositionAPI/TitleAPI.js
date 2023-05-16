import {
  computed,
  toRef,
} from "vue";

import {
  isArray,
  isEmpty,
  isPlainObject,
  isUndefined,
} from "lodash-es";

export default function TitleAPI(props) {
  const title = toRef(props, "title");

  const isTitleVisible = computed(() => {
    if (isArray(title.value) && title.value.length > 0) {
      return true;
    }
    if (isPlainObject(title.value)) {
      return !isEmpty(title.value);
    }
    return !isUndefined(title.value);
  });

  return {
    isTitleVisible,
  };
}
