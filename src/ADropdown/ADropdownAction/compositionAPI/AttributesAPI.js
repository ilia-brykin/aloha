import {
  computed,
  toRef,
} from "vue";

import {
  isPlainObject,
  isString,
} from "lodash-es";

export default function AttributesAPI(props) {
  const action = toRef(props, "action");

  const attributesAction = computed(() => {
    const ATTRIBUTES = {
      ...action.value,
      isHiddenCallback: undefined,
      classReplace: undefined,
    };
    if (action.value.classReplace) {
      ATTRIBUTES.class = action.value.classReplace;
    } else if (isString(ATTRIBUTES.class)) {
      ATTRIBUTES.class += " a_dropdown__item";
    } else if (isPlainObject(ATTRIBUTES.class)) {
      ATTRIBUTES.class.a_dropdown__item = true;
    } else {
      ATTRIBUTES.class = "a_dropdown__item";
    }
    if (ATTRIBUTES.type === "link") {
      ATTRIBUTES.type = undefined;
    }
    return ATTRIBUTES;
  });

  return {
    attributesAction,
  };
}
