import {
  computed,
  toRef,
} from "vue";

import {
  forEach,
} from "lodash-es";

export default function ParamAPI(props, {
  htmlIdLocal = computed(() => ""),
  routePathKeyByKeyId = computed(() => ({})),
}) {
  const modelValue = toRef(props, "modelValue");

  const extractRouteParams = path => {
    const regex = /:([a-zA-Z0-9_]+)/g;
    const params = [];
    let match;

    // eslint-disable-next-line no-cond-assign
    while ((match = regex.exec(path)) !== null) {
      params.push(match[1]);
    }

    return params;
  };

  const idParamsForRoute = computed(() => {
    if (!modelValue.value?.route) {
      return [];
    }

    return extractRouteParams(routePathKeyByKeyId.value[modelValue.value.route]);
  });

  const hasParam = computed(() => {
    return idParamsForRoute.value.length > 0;
  });

  const childrenForParam = computed(() => {
    const CHILDREN = [];
    forEach(idParamsForRoute.value, _id => {
      const CHILD = {
        id: _id,
        label: _id,
        type: "text",
        idPrefix: htmlIdLocal.value,
      };

      CHILDREN.push(CHILD);
    });

    return CHILDREN;
  });

  return {
    childrenForParam,
    hasParam,
  };
}
