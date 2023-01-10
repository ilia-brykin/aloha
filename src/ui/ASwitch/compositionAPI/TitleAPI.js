import {
  computed,
  toRef,
} from "vue";

import {
  isNil,
} from "lodash-es";

export default function TitleAPI(props) {
  const title = toRef(props, "title");

  const hasTitle = computed(() => {
    return !isNil(title.value) && title.value !== "";
  });

  return {
    hasTitle,
  };
}
