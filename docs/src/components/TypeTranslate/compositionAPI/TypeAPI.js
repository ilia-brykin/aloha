import {
  computed,
  toRef,
} from "vue";

import {
  toLower,
} from "lodash-es";

export default function TypeAPI(props) {
  const type = toRef(props, "type");

  const TYPES_TRANSLATE = {
    object: "_JS_TYPE_OBJECT_",
    array: "_JS_TYPE_ARRAY_",
    any: "_JS_TYPE_ANY_",
    string: "_JS_TYPE_STRING_",
    number: "_JS_TYPE_NUMBER_",
    function: "_JS_TYPE_FUNCTION_",
    boolean: "_JS_TYPE_BOOLEAN_",
  };

  const typeLocal = computed(() => {
    const typeText = toLower(type.value);

    return TYPES_TRANSLATE[typeText] || typeText;
  });

  return {
    typeLocal,
  };
}
