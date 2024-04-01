import {
  computed,
  toRef,
} from "vue";

import {
  union,
} from "lodash-es";

export default function ExcludeRenderAttributesAPI(props) {
  const excludeRenderAttributes = toRef(props, "excludeRenderAttributes");

  const excludeRenderAttributesLocal = [
    "alwaysVisible",
  ];

  const excludeRenderAttributesComputed = computed(() => {
    return union(excludeRenderAttributesLocal, excludeRenderAttributes.value);
  });

  return {
    excludeRenderAttributesComputed,
  };
}
