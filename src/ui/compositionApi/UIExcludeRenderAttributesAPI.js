import {
  computed,
  toRef,
} from "vue";

import {
  forEach,
} from "lodash-es";

export default function UIExcludeRenderAttributesAPI(props) {
  const excludeRenderAttributes = toRef(props, "excludeRenderAttributes");

  const attributesToExcludeFromRender = computed(() => {
    const ATTRIBUTES = {};
    forEach(excludeRenderAttributes.value, attributKey => {
      ATTRIBUTES[attributKey] = undefined;
    });

    return ATTRIBUTES;
  });

  return {
    attributesToExcludeFromRender,
  };
}
