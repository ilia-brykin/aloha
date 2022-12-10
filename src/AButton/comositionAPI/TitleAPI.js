import {
  computed,
  toRef,
} from "vue";

import {
  isUndefined,
} from "lodash-es";

export default function TitleAPI(props) {
  const title = toRef(props, "title");
  const isTitleHtml = toRef(props, "isTitleHtml");

  const isTitleVisible = computed(() => {
    return !isUndefined(title.value) && !isTitleHtml.value;
  });

  return {
    isTitleVisible,
  };
}
