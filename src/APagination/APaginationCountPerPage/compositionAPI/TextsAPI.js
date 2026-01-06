import {
  computed,
  toRef,
} from "vue";

import {
  isFunction,
} from "lodash-es";

export default function TextsAPI(props, {
  extraForTranslate = computed(() => ({})),
}) {
  const texts = toRef(props, "texts");

  const textCountFromTo = computed(() => {
    if (isFunction(texts.value.countFromTo)) {
      return texts.value.countFromTo({
        start: extraForTranslate.value.start,
        current: extraForTranslate.value.current,
        count: extraForTranslate.value.count,
      });
    }

    return texts.value.countFromTo || "_A_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_";
  });

  const textCountPerPage = computed(() => {
    return texts.value.countPerPage || "_A_COUNT_PER_PAGE_";
  });

  const isTextCountPerPageItemFunction = computed(() => {
    return isFunction(texts.value.countPerPageItem);
  });

  const textCountPerPageItem = computed(() => {
    return texts.value.countPerPageItem || "_A_COUNT_PER_PAGE_ITEM_{{count}}_";
  });

  const getTextCountPerPageItem = ({ count }) => {
    if (isTextCountPerPageItemFunction.value) {
      return texts.value.countPerPageItem({ count });
    }

    return undefined;
  };

  return {
    getTextCountPerPageItem,
    isTextCountPerPageItemFunction,
    textCountFromTo,
    textCountPerPage,
    textCountPerPageItem,
  };
}
